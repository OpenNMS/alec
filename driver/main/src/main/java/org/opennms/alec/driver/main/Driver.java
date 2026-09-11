/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

package org.opennms.alec.driver.main;

import static com.codahale.metrics.MetricRegistry.name;

import java.util.Collection;
import java.util.Collections;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.AlarmFeedback;
import org.opennms.alec.datasource.api.AlarmFeedbackDatasource;
import org.opennms.alec.datasource.api.InventoryDatasource;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.datasource.common.CompositeSituationHandler;
import org.opennms.alec.engine.api.Engine;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.features.graph.api.GraphProvider;
import org.opennms.alec.processor.api.SituationConfirmer;
import org.opennms.alec.processor.api.SituationProcessor;
import org.opennms.alec.processor.api.SituationProcessorFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.MetricSet;
import com.codahale.metrics.jmx.JmxReporter;

public class Driver implements EngineRegistry {
    private static final Logger LOG = LoggerFactory.getLogger(Driver.class);

    private final AlarmDatasource alarmDatasource;
    private final AlarmFeedbackDatasource alarmFeedbackDatasource;
    private final InventoryDatasource inventoryDatasource;
    private final SituationDatasource situationDatasource;
    private final BundleContext bundleContext;
    private final AtomicReference<ServiceRegistration<?>> graphProviderServiceRegistrationRef = new AtomicReference<>();
    private final SituationProcessor situationProcessor;
    private final SituationHandler confirmingSituationHandler;
    private SituationHandler deletingSituationHandler;
    /**
     * External SituationHandlers contributed by other bundles via an OSGi
     * reference-list (see driver/main blueprint). Fanned out alongside the
     * inline situationProcessor forwarder by {@link CompositeSituationHandler}
     * in {@link #initAsync()}.
     */
    private final List<SituationHandler> externalSituationHandlers;

    private Thread initThread;
    private Engine engine;
    private Timer timer;
    private EngineFactory engineFactory;

    // Health
    private final MetricRegistry metrics;
    private final JmxReporter jmxReporter;
    private final com.codahale.metrics.Timer ticks;
    private long tickResolutionMs = 0;
    private DriverState state = DriverState.CREATED;

    public Driver(BundleContext bundleContext, AlarmDatasource alarmDatasource,
                  AlarmFeedbackDatasource alarmFeedbackDatasource, InventoryDatasource inventoryDatasource,
                  SituationDatasource situationDatasource, EngineFactory engineFactory,
                  SituationProcessorFactory situationProcessorFactory) {
        this(bundleContext, alarmDatasource, alarmFeedbackDatasource, inventoryDatasource,
                situationDatasource, engineFactory, situationProcessorFactory, Collections.emptyList());
    }

    public Driver(BundleContext bundleContext, AlarmDatasource alarmDatasource,
                  AlarmFeedbackDatasource alarmFeedbackDatasource, InventoryDatasource inventoryDatasource,
                  SituationDatasource situationDatasource, EngineFactory engineFactory,
                  SituationProcessorFactory situationProcessorFactory,
                  List<SituationHandler> externalSituationHandlers) {
        this.bundleContext = Objects.requireNonNull(bundleContext);
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        this.alarmFeedbackDatasource = Objects.requireNonNull(alarmFeedbackDatasource);
        this.inventoryDatasource = Objects.requireNonNull(inventoryDatasource);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.engineFactory = Objects.requireNonNull(engineFactory);
        this.situationProcessor =
                Objects.requireNonNull(situationProcessorFactory).getInstance();
        confirmingSituationHandler = SituationConfirmer.newInstance(situationProcessor);
        // Held by reference (not copied) so an OSGi reference-list keeps growing/shrinking
        // as services come and go; CompositeSituationHandler snapshots per callback.
        this.externalSituationHandlers = externalSituationHandlers == null
                ? Collections.emptyList()
                : externalSituationHandlers;

        metrics = new MetricRegistry();
        jmxReporter = JmxReporter.forRegistry(metrics)
                .inDomain(name(Driver.class, engineFactory.getName()))
                .build();
        ticks = metrics.timer(name("ticks"));
    }

    public void init() {
        // The Blueprint requires the init method to return 'void', so we can't make it call initAsync directly
        initAsync();
    }

    @SuppressWarnings({"java:S2142", "java:S1149"})
    public CompletableFuture<Void> initAsync() {
        final CompletableFuture<Void> future = new CompletableFuture<>();
        LOG.info("Creating engine: {}", engineFactory.getNameConf());
        try {
            engine = engineFactory.createEngine(metrics);
        } catch (IllegalArgumentException e) {
            future.completeExceptionally(e);
            return future;
        }
        // Register the handler that confirms situations that have come round trip back to this driver
        situationDatasource.registerHandler(confirmingSituationHandler);
        // Register the situation processor responsible for accepting and processing all situations generated via the
        // engine. Wrap the core processor + any external listeners in a composite so multiple bundles can subscribe
        // (the engine itself holds only a single-slot handler reference).
        //
        // We pass externalSituationHandlers DIRECTLY to the composite (not a snapshot) so external bundles whose
        // SituationHandler services register after Driver init still get picked up — the OSGi reference-list is
        // live, and the composite iterates it (with a per-callback defensive copy) at each callback.
        SituationHandler coreProcessorForwarder = new SituationHandler() {
            @Override
            public void onSituation(Situation situation) {
                situationProcessor.accept(situation);
            }
        };
        // Hold the OSGi reference-list live (not snapshotted) so external bundles whose
        // SituationHandler services register after Driver init still get picked up — see
        // CompositeSituationHandler for the per-callback snapshot semantics.
        LOG.debug("Driver.initAsync: wiring CompositeSituationHandler with externalSituationHandlers.size={}",
                externalSituationHandlers.size());
        engine.registerSituationHandler(
                new CompositeSituationHandler(coreProcessorForwarder, externalSituationHandlers));

        timer = new Timer();
        // The get methods on the datasources may block, so we do this on a separate thread
        initThread = new Thread(() -> {
            try {
                state = DriverState.WAITING_FOR_DATASOURCES;

                // Wait for all the data sources to be ready to minimize the time between when we register handlers and
                // the engine inits
                LOG.info("Waiting for inventory datasource...");
                inventoryDatasource.waitUntilReady();
                LOG.info("Waiting for alarm datasource...");
                alarmDatasource.waitUntilReady();
                LOG.info("Waiting for alarm feedback datasource...");
                alarmFeedbackDatasource.waitUntilReady();
                LOG.info("Waiting for situation datasource...");
                situationDatasource.waitUntilReady();
                LOG.info("All datasources are now available");

                // Register the handler that deletes situations from the engine when we see they have been deleted
                // Only register this after the situationDatasource is ready, since we may block the callbacks
                // while waiting for initialization otherwise
                deletingSituationHandler = DeletingSituationHandler.newInstance(engine);
                situationDatasource.registerHandler(deletingSituationHandler);

                state = DriverState.INITIALIZING_ENGINE;

                LOG.info("Retrieving inventory...");
                final List<InventoryObject> inventory = inventoryDatasource.getInventoryAndRegisterHandler(engine);
                LOG.info("Retrieving alarms...");
                final List<Alarm> alarms = alarmDatasource.getAlarmsAndRegisterHandler(engine);
                LOG.info("Retrieving alarm feedback...");
                final List<AlarmFeedback> alarmFeedback =
                        alarmFeedbackDatasource.getAlarmFeedbackAndRegisterHandler(engine);
                LOG.info("Retrieving situations...");
                final List<Situation> situations = situationDatasource.getSituations();
                LOG.info("Initializing engine...");
                engine.init(alarms, alarmFeedback, situations, inventory);

                if (engine instanceof GraphProvider) {
                    LOG.info("Registering graph provider...");
                    final Hashtable<String,Object> props = new Hashtable<>();
                    props.put("name", engineFactory.getName());
                    graphProviderServiceRegistrationRef.set(bundleContext.registerService(GraphProvider.class.getCanonicalName(), engine, props));
                }

                // Expose the metrics for this engine via JMX
                jmxReporter.start();
            } catch (Exception e) {
                if (e.getCause() instanceof InterruptedException) {
                    LOG.warn("Initialization was interrupted.");
                    Thread.currentThread().interrupt();
                } else {
                    LOG.error("Initialization failed with exception.", e);
                }
                future.completeExceptionally(e);
                return;
            }
            LOG.info("Initialization successful. Scheduling ticks every {}ms", engine.getTickResolutionMs());

            tickResolutionMs = engine.getTickResolutionMs();
            timer.scheduleAtFixedRate(new TimerTask() {
                @Override
                public void run() {
                    Thread.currentThread().setName("ALEC Driver Tick -- " + engineFactory.getParameters());
                    try (com.codahale.metrics.Timer.Context context = ticks.time()) {
                        engine.tick(System.currentTimeMillis());
                    } catch (Exception e) {
                        LOG.error("Tick failed with exception.", e);
                    }
                }
            }, 0, tickResolutionMs);
            state = DriverState.RUNNING;
            future.complete(null);
        });
        initThread.setName(String.format("ALEC Driver Startup [%s]", engineFactory.getNameConf()));
        initThread.setUncaughtExceptionHandler((th,ex) -> {
            LOG.error("Initialization failed with uncaught exception.", ex);
            future.completeExceptionally(ex);
        });
        initThread.start();
        return future;
    }

    public void destroy() {
        state = DriverState.DESTROYING;
        // Stop the (non-daemon) tick timer FIRST so no new engine work starts
        // while we tear down, and so it can never outlive a slow destroy.
        if (timer != null) {
            timer.cancel();
            timer = null;
        }
        // situationDatasource is a blueprint reference proxy: when the
        // datasource bundle has already stopped (bundle stop order during a
        // framework shutdown), a direct call blocks for Aries' full 5-minute
        // service-damping timeout PER CALL and stalls the entire bundle-stop
        // cascade — the sentinel/OpenNMS JVM appears hung on shutdown. Make
        // the unregistrations best-effort and bounded: instant when the
        // service is up, abandoned after 5s when it is gone (the datasource is
        // being torn down with its handler list anyway).
        bestEffortServiceCall("unregister-deleting-handler",
                () -> situationDatasource.unregisterHandler(deletingSituationHandler));
        bestEffortServiceCall("unregister-confirming-handler",
                () -> situationDatasource.unregisterHandler(confirmingSituationHandler));

        if (initThread != null && initThread.isAlive()) {
            initThread.interrupt();
            try {
                initThread.join(TimeUnit.MINUTES.toMillis(1));
                if (initThread.isAlive()) {
                    LOG.warn("Initializing thread is still running.");
                }
            } catch (InterruptedException e) {
                LOG.error("Interrupted while waiting for initialization thread to stop.");
                Thread.currentThread().interrupt();
            }
        }

        final ServiceRegistration<?> serviceRegistration = graphProviderServiceRegistrationRef.getAndSet(null);
        if (serviceRegistration != null) {
            serviceRegistration.unregister();
        }
        if (engine != null) {
            engine.destroy();
            engine = null;
        }

        jmxReporter.stop();

        state = DriverState.DESTROYED;
    }

    /**
     * Run a best-effort cleanup call against a blueprint service-reference
     * proxy on a bounded daemon thread. If the backing service is gone the
     * proxy would otherwise block for Aries' 5-minute damping timeout and
     * stall the framework's bundle-stop cascade; the daemon thread cannot keep
     * the JVM alive, so shutdown proceeds after the bound.
     */
    private static void bestEffortServiceCall(String description, Runnable serviceCall) {
        Thread t = new Thread(() -> {
            try {
                serviceCall.run();
            } catch (Exception e) {
                LOG.debug("Best-effort shutdown call '{}' failed: {}", description, e.getMessage());
            }
        }, "alec-destroy-" + description);
        t.setDaemon(true);
        t.start();
        try {
            t.join(TimeUnit.SECONDS.toMillis(5));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        if (t.isAlive()) {
            LOG.warn("Best-effort shutdown call '{}' did not complete within 5 seconds "
                    + "(backing service likely already unregistered); abandoning it", description);
        }
    }

    DriverState getState() {
        return state;
    }

    long getTickResolutionMs() {
        return tickResolutionMs;
    }

    com.codahale.metrics.Timer getTickTimer() {
        return ticks;
    }

    @Override
    public Collection<Engine> getEngines() {
        if (DriverState.RUNNING.equals(state)) {
            return Collections.singleton(engine);
        } else {
            return Collections.emptyList();
        }
    }

    @Override
    public EngineRegistry getEngineRegistry() {
        return this;
    }

    public EngineFactory getEngineFactory() {
        return engineFactory;
    }

    public void setEngineFactory(EngineFactory engineFactory) {
        this.engineFactory = engineFactory;
    }

    public MetricRegistry getMetrics() {
        return metrics;
    }

    /**
     * Blueprint reference-list bind method: fold a {@link MetricSet} published
     * by another ALEC bundle into this driver's registry, so its gauges are
     * reported over JMX in the same domain as the engine's own metrics
     * ({@code org.opennms.alec.driver.main.Driver.<engine>}) — the domain
     * OpenNMS's stock JMX collection already charts. ALEC-308 uses this for
     * the LLM token-usage gauges. Safe to call before or after the reporter
     * starts: JmxReporter registers metrics added later as they appear.
     */
    public void registerMetricSet(MetricSet metricSet) {
        if (metricSet == null) {
            return;
        }
        for (Map.Entry<String, com.codahale.metrics.Metric> e : metricSet.getMetrics().entrySet()) {
            // Re-binding after a bundle restart must not throw on the duplicate name.
            metrics.remove(e.getKey());
            try {
                metrics.register(e.getKey(), e.getValue());
            } catch (IllegalArgumentException ex) {
                LOG.warn("Could not register contributed metric {}: {}", e.getKey(), ex.getMessage());
            }
        }
        LOG.debug("Registered {} contributed metric(s)", metricSet.getMetrics().size());
    }

    /** Blueprint reference-list unbind method. */
    public void unregisterMetricSet(MetricSet metricSet) {
        if (metricSet == null) {
            return;
        }
        for (String name : metricSet.getMetrics().keySet()) {
            metrics.remove(name);
        }
    }
}
