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

package org.opennms.oce.driver.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.IncidentDatasource;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.api.IncidentHandler;

public class TestDriver {
    private final EngineFactory engineFactory;
    private boolean verbose = false;

    public TestDriver(EngineFactory engineFactory) {
        this.engineFactory = Objects.requireNonNull(engineFactory);
    }

    public List<Incident> run(List<Alarm> alarms) {
        return run(alarms, Collections.emptyList());
    }

    /**
     * Drives a Correlation Engine and tests service resumption by bifurcating the 
     *  Alarms into a before and after at <code>timestamp</code>.
     * 
     * @param alarms The alarms to replay
     * @param inventory The inventory to use
     * @param timestamp the Driver emulates an engine reset at timestamp
     * @return
     */
    public List<Incident> run(List<Alarm> alarms, List<InventoryObject> inventory, long timestamp) {
        // bifurcate the alarms
        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());
        List<Alarm> previousAlarms = sortedAlarms.stream().filter(a -> a.getTime() <= timestamp).collect(Collectors.toList());
        List<Alarm> afterAlarms = sortedAlarms.stream().filter(a -> a.getTime() > timestamp).collect(Collectors.toList());;
        // Run the engine 
        List<Incident> previousIncidents = run(previousAlarms, inventory);
        List<Incident> allIncidents = new ArrayList<>(previousIncidents);
        // re-run the engine 
        allIncidents.addAll(run(afterAlarms, inventory, previousAlarms, previousIncidents));
        return allIncidents;
    }

    public List<Incident> run(List<Alarm> alarms, List<InventoryObject> inventory) {
        return run(alarms, inventory, Collections.emptyList(), Collections.emptyList());
    }

    private List<Incident> run(List<Alarm> alarms, List<InventoryObject> inventory, List<Alarm> previousAlarms, List<Incident> previousIncidents) {
        final DriverSession session = new DriverSession();
        final Engine engine = engineFactory.createEngine();
        engine.init(previousAlarms, previousIncidents, inventory);
        engine.registerIncidentHandler(session);

        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());

        if (sortedAlarms.size() < 1) {
            // No alarms, nothing to do here
            return Collections.emptyList();
        }

        long tickResolutionMs = engine.getTickResolutionMs();
        final long firstTimestamp = sortedAlarms.get(0).getTime();
        final long lastTimestamp = sortedAlarms.get(sortedAlarms.size()-1).getTime();
        final long startTime = System.currentTimeMillis();

        Long lastTick = null;
        for (Alarm alarm : sortedAlarms) {
            final long now = alarm.getTime();
            if (lastTick == null) {
                lastTick = now - 1;
                printTick(lastTick, firstTimestamp, lastTimestamp, startTime);
                engine.tick(lastTick);
            } else if (lastTick + tickResolutionMs < now) {
                for (long t = lastTick; t < now; t+= tickResolutionMs) {
                    lastTick = t;
                    printTick(t, firstTimestamp, lastTimestamp, startTime);
                    engine.tick(t);
                }
            }
            if (!alarm.isClear()) {
                engine.onAlarmCreatedOrUpdated(alarm);
            } else {
                engine.onAlarmCleared(alarm);
            }
        }
        // One last tick
        lastTick += tickResolutionMs;
        engine.tick(lastTick);

        // Destroy
        engine.destroy();

        return new ArrayList<>(session.incidents.values());
    }

    public void setVerbose(boolean verbose) {
        this.verbose = verbose;
    }

    private class DriverSession implements IncidentHandler {
        final Map<String, Incident> incidents = new LinkedHashMap<>();

        @Override
        public void onIncident(Incident incident) {
            if (verbose) {
                System.out.printf("Incident with id %s has %d alarms.\n",
                        incident.getId(), incident.getAlarms().size());
            }
            incidents.put(incident.getId(), incident);
        }
    }

    private void printTick(long tick, long firstTimestamp, long lastTimeStamp, long startTime) {
        if (!verbose) {
            return;
        }
        double percentageComplete = ((tick - firstTimestamp) / (double)(lastTimeStamp - firstTimestamp)) * 100d;
        System.out.printf("Tick at %s (%d) - %.2f%% complete - %s elapsed\n", new Date(tick), tick,
                percentageComplete, getElaspsed(startTime));
    }

    private static String getElaspsed(long start) {
        // Copied from https://stackoverflow.com/questions/6710094/how-to-format-an-elapsed-time-interval-in-hhmmss-sss-format-in-java
        double t = System.currentTimeMillis() - start;
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
        return String.valueOf(Double.valueOf(Math.floor(n)).longValue());
    }

    public static class DriverBuilder {
        private AlarmDatasource alarmDatasource;
        private InventoryDatasource inventoryDatasource;
        private IncidentDatasource incidentDatasource;
        private EngineFactory engineFactory;
        private Boolean verbose;

        public DriverBuilder withAlarmDatasource(AlarmDatasource alarmDatasource) {
            this.alarmDatasource = alarmDatasource;
            return this;
        }

        public DriverBuilder withInventoryDatasource(InventoryDatasource inventoryDatasource) {
            this.inventoryDatasource = inventoryDatasource;
            return this;
        }

        public DriverBuilder withIncidentDatasource(IncidentDatasource incidentDatasource) {
            this.incidentDatasource = incidentDatasource;
            return this;
        }


        public DriverBuilder withEngineFactory(EngineFactory engineFactory) {
            this.engineFactory = engineFactory;
            return this;
        }

        public DriverBuilder withVerboseOutput() {
            verbose = true;
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
            return driver;
        }
    }

    public static DriverBuilder builder() {
        return new DriverBuilder();
    }
}
