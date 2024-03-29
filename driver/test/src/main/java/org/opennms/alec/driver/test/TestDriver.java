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

package org.opennms.alec.driver.test;

import java.io.File;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmFeedback;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.engine.api.Engine;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.features.graph.api.GraphProvider;
import org.opennms.alec.features.graph.common.GraphMLConverterBuilder;
import org.opennms.alec.features.graph.graphml.GraphML;
import org.opennms.alec.features.graph.graphml.GraphMLWriter;

import com.codahale.metrics.MetricRegistry;

@SuppressWarnings("java:S106")
public class TestDriver {
    private final EngineFactory engineFactory;
    private boolean verbose = false;
    private long graphExportIntervalMs = 0;
    private File graphOutputFolder = null;

    public TestDriver(EngineFactory engineFactory) {
        this.engineFactory = Objects.requireNonNull(engineFactory);
    }

    public List<Situation> run(List<Alarm> alarms) {
        return run(alarms, Collections.emptyList());
    }

    /**
     * Drives a Correlation Engine and tests service resumption by bifurcating the 
     *  Alarms into a before and after at <code>timestamp</code>.
     *  
     *  Alarms before the timestamp will be reduced so that only the latest Alarm with a given Id will be included.
     *  Additionally, if that alarm is a CLEAR, no Alarm with ahat Id will be passed to the Engine.
     *  This approximates what would be available to an engine on a restart.
     * 
     * @param alarms The alarms to replay
     * @param inventory The inventory to use
     * @param previousSituations
     * @param timestamp the Driver emulates an engine reset at timestamp
     * @return
     */
    public List<Situation> run(List<Alarm> alarms, List<InventoryObject> inventory, List<Situation> previousSituations, long timestamp) {
        // bifurcate the alarms
        final List<Alarm> sortedAlarms = timeSortAlarms(alarms);
        final List<Alarm> previousAlarms = getStartupAlarms(sortedAlarms, timestamp);
        List<Alarm> afterAlarms = sortedAlarms.stream().filter(a -> a.getTime() > timestamp).collect(Collectors.toList());
        // Run the engine
        return run(afterAlarms, inventory, previousAlarms, Collections.emptyList(), previousSituations);
    }

    /**
     * Given a sorted List of Alarms, return the Sorted List that are used to init() an Engine.
     * @param sortedAlarms Assumes a sorted List of Alarms.
     * @param timestamp Startup timestamp
     * @return
     */
    public static List<Alarm> getStartupAlarms(List<Alarm> sortedAlarms, long timestamp) {
        return reduceAlarms(sortedAlarms.stream().filter(a -> a.getTime() <= timestamp).collect(Collectors.toList()));
    }

    /**
     * Assumes a sorted list of alarms.
     * @param sortedAlarms A time sorted List of Alarms
     * @return The last Alarm of each Id with No Alarm for a given Id if the last Alarm for that Id had a Severity of CLEAR. 
     */
    public static List<Alarm> reduceAlarms(List<Alarm> sortedAlarms) {
        Map<String, Alarm> reduced = new HashMap<>();
        for (Alarm a : sortedAlarms) {
            reduced.put(a.getId(), a);
        }
        return timeSortAlarms(reduced.values().stream().filter(a -> !a.isClear()).collect(Collectors.toList()));
    }

    /**
     * Sort Alarms in time order.
     * @param alarms
     * @return
     */
    public static List<Alarm> timeSortAlarms(List<Alarm> alarms) {
        return alarms.stream().sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId)).collect(Collectors.toList());

    }

    /**
     * Run an Engine from a clean start.
     * @param alarms
     * @param inventory
     * @return
     */
    public List<Situation> run(List<Alarm> alarms, List<InventoryObject> inventory) {
        return run(alarms, inventory, Collections.emptyList(), Collections.emptyList(), Collections.emptyList());
    }


    private long roundToTick(long time, long tickResolutionMs) {
        return Math.floorDiv(time, tickResolutionMs) * tickResolutionMs;
    }

    private List<Situation> run(List<Alarm> alarms, List<InventoryObject> inventory, List<Alarm> previousAlarms,
                                List<AlarmFeedback> previousAlarmFeedback, List<Situation> previousSituations) {
        final DriverSession session = new DriverSession();
        final Engine engine = engineFactory.createEngine(new MetricRegistry());
        engine.registerSituationHandler(session);
        engine.init(previousAlarms, previousAlarmFeedback, previousSituations, inventory);

        Thread.currentThread().setName("ALEC Driver Tick -- engine");

        final GraphProvider graphProvider = getGraphProvider(engine);
        final boolean shouldExportGraph = isShouldExportGraph(graphProvider);
        long lastGraphGeneratedAt = 0;

        long tickResolutionMs = engine.getTickResolutionMs();
        final Map<Long,List<Alarm>> alarmsByTick = alarms.stream()
                .collect(Collectors.groupingBy(a -> roundToTick(a.getTime(), tickResolutionMs)));
        if (alarmsByTick.size() < 1) {
            // No alarms, nothing to do here
            return Collections.emptyList();
        }

        Optional<Long> optionalStart = alarms.stream()
                .min(Comparator.comparing(Alarm::getTime))
                .map(e -> roundToTick(e.getTime(), tickResolutionMs));
        Optional<Long> optionalEnd = alarms.stream()
                .max(Comparator.comparing(Alarm::getTime))
                .map(e -> roundToTick(e.getTime(), tickResolutionMs));

        if (optionalStart.isPresent() && optionalEnd.isPresent()) {
            final long start = Math.max(optionalStart.get() - tickResolutionMs, 0);

            final long end = optionalEnd.get() + tickResolutionMs;
            final long startTime = System.currentTimeMillis();
            long now;
            for (now = start; now <= end; now += tickResolutionMs) {
                // Find the alarms in the current window
                setEngine(engine, alarmsByTick, now);
                // Tick
                engine.tick(now);
                if (shouldExportGraph && (now - lastGraphGeneratedAt) > graphExportIntervalMs) {
                    exportGraph(graphProvider, now);
                    lastGraphGeneratedAt = now;
                }
                printTick(now, start, end, startTime);
            }

            // One last tick
            now += tickResolutionMs;
            engine.tick(now);
            if (shouldExportGraph) {
                exportGraph(graphProvider, now);
            }

            // Destroy
            engine.destroy();

            return new ArrayList<>(session.situations.values());
        }
        return Collections.emptyList();
    }

    private static void setEngine(Engine engine, Map<Long, List<Alarm>> alarmsByTick, long now) {
        for (Alarm alarm : alarmsByTick.getOrDefault(now, Collections.emptyList())) {
            if (!alarm.isClear()) {
                engine.onAlarmCreatedOrUpdated(alarm);
            } else {
                engine.onAlarmCleared(alarm);
            }
        }
    }

    private boolean isShouldExportGraph(GraphProvider graphProvider) {
        return graphExportIntervalMs > 0 && graphProvider != null && graphOutputFolder != null;
    }

    private static GraphProvider getGraphProvider(Engine engine) {
        final GraphProvider graphProvider;
        if (engine instanceof GraphProvider) {
            graphProvider = (GraphProvider) engine;
        } else {
            graphProvider = null;
        }
        return graphProvider;
    }

    @SuppressWarnings("java:S1602")
    private void exportGraph(GraphProvider graphProvider, long now) {
        if (graphProvider == null) {
            return;
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM_dd_yyyy_HH_mm_ss");
        String dateFormatted = formatter.format(LocalDateTime.ofInstant(Instant.ofEpochMilli(now), ZoneId.systemDefault()));
        File destinationFile = new File(graphOutputFolder, "graph_" + dateFormatted  + ".graphml");
        final GraphML graphML = graphProvider.withReadOnlyGraph(g -> {
            return new GraphMLConverterBuilder()
                    .withGraph(g)
                    .withFilterEnptyNodes(false)
                    .build().toGraphML();
        });
        try {
            System.out.printf("Saving graph snapshot to %s%n", destinationFile);
            GraphMLWriter.write(graphML, destinationFile);
        } catch (Exception e) {
            System.out.printf("Failed to save graph to: %s%n", destinationFile);
            e.printStackTrace();
        }
    }

    public void setVerbose(boolean verbose) {
        this.verbose = verbose;
    }

    private void setGraphExportIntervalMs(long graphExportIntervalMs) {
        this.graphExportIntervalMs = graphExportIntervalMs;
    }

    private void setGraphOutputFolder(File graphOutputFolder) {
        this.graphOutputFolder = graphOutputFolder;
    }

    private class DriverSession implements SituationHandler {
        final Map<String, Situation> situations = new LinkedHashMap<>();

        @Override
        public void onSituation(Situation situation) {
            if (verbose) {
                System.out.printf("Situation with id %s has %d alarms.%n",
                        situation.getId(), situation.getAlarms().size());
            }
            situations.put(situation.getId() + ":" + situation.getSeverity(), situation);
        }
    }

    private void printTick(long tick, long firstTimestamp, long lastTimeStamp, long startTime) {
        if (!verbose) {
            return;
        }
        double percentageComplete = ((tick - firstTimestamp) / (double)(lastTimeStamp - firstTimestamp)) * 100d;
        System.out.printf("Tick at %s (%d) - %.2f%% complete - %s elapsed%n", new Date(tick), tick,
                percentageComplete, getElaspsed(startTime));
    }

    private static String getElaspsed(long start) {
        // Copied from https://stackoverflow.com/questions/6710094/how-to-format-an-elapsed-time-interval-in-hhmmss-sss-format-in-java
        double t = System.currentTimeMillis() - (double)start;
        if(t < 1000d)
            return slf(t) + "ms";
        if(t < 60000d)
            return slf(t / 1000d) + "s " +
                    slf(t % 1000d) + "ms";
        if(t < 3600000d)
            return slf(t / 60000d) + "m " +
                    slf((t % 60000d) / 1000d) + "s " +
                    slf(t % 1000d) + "ms";
        if(t < 86400000d)
            return slf(t / 3600000d) + "h " +
                    slf((t % 3600000d) / 60000d) + "m " +
                    slf((t % 60000d) / 1000d) + "s " +
                    slf(t % 1000d) + "ms";
        return slf(t / 86400000d) + "d " +
                slf((t % 86400000d) / 3600000d) + "h " +
                slf((t % 3600000d) / 60000d) + "m " +
                slf((t % 60000d) / 1000d) + "s " +
                slf(t % 1000d) + "ms";
    }

    private static String slf(double n) {
        return String.valueOf(Math.floor(n));
    }

    public static class DriverBuilder {
        private EngineFactory engineFactory;
        private Boolean verbose;

        private long graphExportIntervalMs = 0;
        private File graphOutputFolder = new File(System.getProperty("java.io.tmpdir"));

        public DriverBuilder withEngineFactory(EngineFactory engineFactory) {
            this.engineFactory = engineFactory;
            return this;
        }

        public DriverBuilder withVerboseOutput() {
            verbose = true;
            return this;
        }

        public DriverBuilder withGraphExportIntervalMs(long graphExportIntervalMs) {
            this.graphExportIntervalMs = graphExportIntervalMs;
            return this;
        }

        public DriverBuilder withGraphOutputFolder(File graphOutputFolder) {
            this.graphOutputFolder = graphOutputFolder;
            return this;
        }

        public TestDriver build() {
            if (engineFactory == null) {
                throw new IllegalArgumentException("Engine factory is required.");
            }
            final TestDriver driver = new TestDriver(engineFactory);
            if (verbose != null) {
                driver.setVerbose(verbose);
            }
            driver.setGraphExportIntervalMs(graphExportIntervalMs);
            driver.setGraphOutputFolder(graphOutputFolder);
            return driver;
        }
    }



    public static DriverBuilder builder() {
        return new DriverBuilder();
    }
}
