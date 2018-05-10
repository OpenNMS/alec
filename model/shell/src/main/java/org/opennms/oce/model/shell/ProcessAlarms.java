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

package org.opennms.oce.model.shell;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Completion;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.v1.schema.AlarmRef;
import org.opennms.oce.model.v1.schema.Alarms;
import org.opennms.oce.model.v1.schema.Incidents;
import org.opennms.oce.model.v1.schema.Severity;

import com.google.gson.Gson;

/**
 * Input an XML Document of Alarms and Output an XML document of Incidents.
 * Utilize an AlarmProcessor to create the incidents.
 * Alarms are simply serialized to the Processor.
 * 
 */
@Command(scope = "oce", name = "process-alarms", description = "Alarm Processing Runner")
@Service
public class ProcessAlarms implements Action, IncidentHandler {

    private static final Gson gson = new Gson();

    @Reference
    private Model model;

    @Reference
    private List<EngineFactory> engineFactories;

    @Option(name = "-i", description = "Input file", required = true)
    private String inFile;

    @Option(name = "-o", description = "Output file", required = false)
    private String outFile; // Default to "incidents.xml"

    @Option(name = "-e", description = "Processor Engine Name", required = false)
    @Completion(EngineNameCompleter.class)
    private String engineName;

    Map<String, Incident> incidents = new HashMap<>();

    // method for unit test harness
    Map<String, Incident> test(Path alarmsPath) throws JAXBException, IOException {
        List<Alarm> alarms = getAlarms(alarmsPath);
        return processAlarms(alarms);
    }

    void setOutputFile(String out) {
        outFile = out;
    }

    private Map<String, Incident> processAlarms(List<Alarm> alarms) throws JAXBException, IOException {
        System.out.printf("Processing %d alarms.\n", alarms.size());
        final Engine engine = getEngine();
        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());

        if (sortedAlarms.size() < 1) {
            // No alarms, nothing to do here
            return Collections.emptyMap();
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
            engine.onAlarm(alarm);
        }
        // One last tick
        lastTick += tickResolutionMs;
        engine.tick(lastTick);

        write(incidents);
        return incidents;
    }

    private void printTick(long tick, long firstTimestamp, long lastTimeStamp, long startTime) {
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

    @Override
    public Object execute() throws Exception {
        List<Alarm> alarms = getAlarms(Paths.get(inFile));
        return processAlarms(alarms);
    }

    @Override
    public void onIncident(Incident i) {
        // Handle New and Updated incidents from the processor impl
        // TODO - for now - simply overwrite any incident.
        // it is on the ProcessorImpl to maintain last correct state.
        System.out.printf("Incident with id %s has %d alarms.\n", i.getId(), i.getAlarms().size());
        incidents.put(i.getId(), i);
    }

    private List<Alarm> getAlarms(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext;
            try {
                jaxbContext = JAXBContext.newInstance(Alarms.class);
            } catch (JAXBException e) {
                throw new RuntimeException(e);
            }
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            Alarms alarms = (Alarms) unmarshaller.unmarshal(is);
            return alarms.getAlarm().stream()
                    .map(ProcessAlarms::toEngineAlarm)
                    .collect(Collectors.toList());
        }
    }

    private void write(Map<String, Incident> incidents) throws JAXBException, IOException {
        String filepath = outFile == null || outFile.isEmpty() ? "incidents.xml" : outFile;
        System.out.printf("Writing %d incidents to %s.\n", incidents.size(), filepath);
        try (OutputStream os = Files.newOutputStream(Paths.get(filepath))) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Incidents.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            Incidents list = new Incidents();
            list.getIncident().addAll(incidents.values().stream()
                .map(ProcessAlarms::toModelIncident)
                .collect(Collectors.toList()));
            marshaller.marshal(list, os);
        }
    }

    private Engine getEngine() {
        final Engine engine = engineFactories.stream().filter(e -> e.getName().toLowerCase().equals(engineName))
                .findFirst()
                .orElseThrow(() -> {
                    final String engineNames = engineFactories.stream()
                            .map(EngineFactory::getName)
                            .collect(Collectors.joining( "," ));
                    return new RuntimeException("No engine found for " + engineName
                            + ". Available engines include: " + engineNames);
                })
                .createEngine();
        engine.setInventory(model);
        engine.registerIncidentHandler(this);
        return engine;
    }


    private static Alarm toEngineAlarm(org.opennms.oce.model.v1.schema.Alarm alarm) {
        return new Alarm() {
            @Override
            public String getId() {
                return alarm.getId();
            }

            @Override
            public String getReductionKey() {
                return alarm.getReductionKey();
            }

            @Override
            public long getTime() {
                return alarm.getTime();
            }

            @Override
            public ResourceKey getResourceKey() {
                return new ResourceKey((List<String>)gson.fromJson(alarm.getResource(), List.class));
            }

            @Override
            public boolean isClear() {
                return alarm.getSeverity().equals(Severity.CLEARED);
            }
        };
    }

    private static org.opennms.oce.model.v1.schema.Incident toModelIncident(Incident incident) {
        org.opennms.oce.model.v1.schema.Incident modelIncident = new org.opennms.oce.model.v1.schema.Incident();
        modelIncident.setId(incident.getId());
        for (Alarm a : incident.getAlarms()) {
            AlarmRef alarmRef = new AlarmRef();
            alarmRef.setId(a.getId());
            modelIncident.getAlarmRef().add(alarmRef);
        }
        return modelIncident;
    }

}
