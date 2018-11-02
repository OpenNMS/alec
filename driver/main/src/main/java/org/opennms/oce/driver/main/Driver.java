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

package org.opennms.oce.driver.main;

import java.util.Hashtable;
import java.util.List;
import java.util.Objects;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationDatasource;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.features.graph.api.GraphProvider;
import org.opennms.oce.processor.api.SituationConfirmer;
import org.opennms.oce.processor.api.SituationProcessor;
import org.opennms.oce.processor.api.SituationProcessorFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Driver {
    private static final Logger LOG = LoggerFactory.getLogger(Driver.class);

    private final AlarmDatasource alarmDatasource;
    private final InventoryDatasource inventoryDatasource;

    private final SituationDatasource situationDatasource;
    private final EngineFactory engineFactory;
    private final BundleContext bundleContext;
    private final AtomicReference<ServiceRegistration<?>> graphProviderServiceRegistrationRef = new AtomicReference<>();
    private final SituationProcessor situationProcessor;
    private final SituationHandler confirmingSituationHandler;
    private SituationHandler deletingSituationHandler;

    private Thread initThread;
    private Engine engine;
    private Timer timer;

    public Driver(BundleContext bundleContext, AlarmDatasource alarmDatasource, InventoryDatasource inventoryDatasource,
            SituationDatasource situationDatasource, EngineFactory engineFactory,
                  SituationProcessorFactory situationProcessorFactory) {
        this.bundleContext = Objects.requireNonNull(bundleContext);
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        this.inventoryDatasource = Objects.requireNonNull(inventoryDatasource);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.engineFactory = Objects.requireNonNull(engineFactory);
        this.situationProcessor =
                Objects.requireNonNull(situationProcessorFactory).getInstance();
        confirmingSituationHandler = SituationConfirmer.newInstance(situationProcessor);
    }

    public void init() {
        // The Blueprint requires the init method to return 'void', so we can't make it call initAsync directly
        initAsync();
    }

    public CompletableFuture<Void> initAsync() {
        final CompletableFuture<Void> future = new CompletableFuture<>();
        engine = engineFactory.createEngine();
        // Register the handler that confirms situations that have come round trip back to this driver
        situationDatasource.registerHandler(confirmingSituationHandler);
        // Register the handler that deletes situations from the engine when we see they have been deleted
        deletingSituationHandler = DeletingSituationHandler.newInstance(engine);
        situationDatasource.registerHandler(deletingSituationHandler);
        // Register the situation processor responsible for accepting and processing all situations generated via the
        // engine
        engine.registerSituationHandler(new SituationHandler() {
            @Override
            public void onSituation(Situation situation) {
                situationProcessor.accept(situation);
            }
        });

        timer = new Timer();
        // The get methods on the datasources may block, so we do this on a separate thread
        initThread = new Thread(() -> {
            try {
                // Wait for all the data sources to be ready to minimize the time between when we register handlers and
                // the engine inits
                LOG.info("Waiting for inventory datasource...");
                inventoryDatasource.waitUntilReady();
                LOG.info("Waiting for alarm datasource...");
                alarmDatasource.waitUntilReady();
                LOG.info("Waiting for situation datasource...");
                situationDatasource.waitUntilReady();

                LOG.info("Retrieving inventory...");
                final List<InventoryObject> inventory = inventoryDatasource.getInventoryAndRegisterHandler(engine);
                LOG.info("Retrieving alarms...");
                final List<Alarm> alarms = alarmDatasource.getAlarmsAndRegisterHandler(engine);
                LOG.info("Retrieving situations...");
                final List<Situation> situations = situationDatasource.getSituations();
                LOG.info("Initializing engine...");
                engine.init(alarms, situations, inventory);

                if (engine instanceof GraphProvider) {
                    LOG.info("Registering graph provider...");
                    final Hashtable<String,Object> props = new Hashtable<>();
                    props.put("name", engineFactory.getName());
                    graphProviderServiceRegistrationRef.set(bundleContext.registerService(GraphProvider.class.getCanonicalName(), engine, props));
                }
            } catch (Exception e) {
                if (e.getCause() != null && e.getCause() instanceof InterruptedException) {
                    LOG.warn("Initialization was interrupted.");
                } else {
                    LOG.error("Initialization failed with exception.", e);
                }
                future.completeExceptionally(e);
                return;
            }
            LOG.info("Initialization successful. Scheduling tickets every {}ms", engine.getTickResolutionMs());

            timer.scheduleAtFixedRate(new TimerTask() {
                @Override
                public void run() {
                    try {
                        engine.tick(System.currentTimeMillis());
                    } catch (Exception e) {
                        LOG.error("Tick failed with exception.", e);
                    }
                }
            }, 0, engine.getTickResolutionMs());
            future.complete(null);
        });
        initThread.setName(String.format("OCE Driver Startup [%s]", engineFactory.getName()));
        initThread.start();
        return future;
    }

    public void destroy() {
        situationDatasource.unregisterHandler(deletingSituationHandler);
        situationDatasource.unregisterHandler(confirmingSituationHandler);
        
        if (initThread != null && initThread.isAlive()) {
            initThread.interrupt();
            try {
                initThread.join(TimeUnit.MINUTES.toMillis(1));
                if (initThread.isAlive()) {
                    LOG.warn("Initializing thread is still running.");
                }
            } catch (InterruptedException e) {
                LOG.error("Interrupted while waiting for initialization thread to stop.");
            }
        }

        final ServiceRegistration<?> serviceRegistration = graphProviderServiceRegistrationRef.getAndSet(null);
        if (serviceRegistration != null) {
            serviceRegistration.unregister();
        }
        if (timer != null) {
            timer.cancel();
            timer = null;
        }
        if (engine != null) {
            engine.destroy();
            engine = null;
        }
    }
}
