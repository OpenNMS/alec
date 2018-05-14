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

package org.opennms.oce.engine.driver;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import org.opennms.oce.engine.common.AlarmBean;
import org.opennms.oce.engine.common.IncidentBean;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.AlarmSeverity;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.v1.schema.AlarmRef;
import org.opennms.oce.model.v1.schema.Alarms;
import org.opennms.oce.model.v1.schema.Event;
import org.opennms.oce.model.v1.schema.Incidents;
import org.opennms.oce.model.v1.schema.Severity;

import com.google.gson.Gson;

public class EngineUtils {

    private static final Gson gson = new Gson();

    public static Alarm toEngineAlarm(org.opennms.oce.model.v1.schema.Alarm alarm, org.opennms.oce.model.v1.schema.Event event) {
        // TODO: Use the bean!
        return new Alarm() {
            @Override
            public String getId() {
                return alarm.getId();
            }

            @Override
            public long getTime() {
                return event.getTime();
            }

            @Override
            public List<ResourceKey> getResourceKeys() {
                return event.getResource().stream()
                        .map(r ->  new ResourceKey((List<String>) gson.fromJson(r, List.class)))
                        .collect(Collectors.toList());
            }

            @Override
            public boolean isClear() {
                return AlarmSeverity.CLEARED.equals(getSeverity());
            }

            @Override
            public AlarmSeverity getSeverity() {
                return toAlarmSeverity(event.getSeverity());
            }
        };
    }

    public static org.opennms.oce.model.v1.schema.Incident toModelIncident(Incident incident) {
        org.opennms.oce.model.v1.schema.Incident modelIncident = new org.opennms.oce.model.v1.schema.Incident();
        modelIncident.setId(incident.getId());
        for (Alarm a : incident.getAlarms()) {
            AlarmRef alarmRef = new AlarmRef();
            alarmRef.setId(a.getId());
            modelIncident.getAlarmRef().add(alarmRef);
        }
        return modelIncident;
    }

    public static Incident toEngineIncident(org.opennms.oce.model.v1.schema.Incident incident) {
        IncidentBean engineIncident = new IncidentBean(incident.getId());
        engineIncident.setCreationTime(incident.getCreationTime());
        for (AlarmRef a : incident.getAlarmRef()) {
            Alarm alarm = new AlarmBean(a.getId());
            engineIncident.addAlarm(alarm);
        }
        return engineIncident;
    }

    // UnMarshal an XML document to a Set of Incidents
    public static Set<Incident> getIncidents(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Incidents.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            List<org.opennms.oce.model.v1.schema.Incident> xmlIncidents = ((Incidents) unmarshaller.unmarshal(is)).getIncident();
            return new HashSet<Incident>(xmlIncidents.stream().map(EngineUtils::toEngineIncident).collect(Collectors.toSet()));
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public static void writeIncidents(Map<String, Incident> incidents, String outFile) throws JAXBException, IOException {
        String filepath = outFile == null || outFile.isEmpty() ? "incidents.xml" : outFile;
        try (OutputStream os = Files.newOutputStream(Paths.get(filepath))) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Incidents.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            Incidents list = new Incidents();
            list.getIncident().addAll(incidents.values().stream().map(EngineUtils::toModelIncident).collect(Collectors.toList()));
            marshaller.marshal(list, os);
        }
    }

    public static List<Alarm> getAlarms(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext;
            try {
                jaxbContext = JAXBContext.newInstance(Alarms.class);
            } catch (JAXBException e) {
                throw new RuntimeException(e);
            }
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            Alarms alarms = (Alarms) unmarshaller.unmarshal(is);

            final List<Alarm> engineAlarms = new ArrayList<>();
            for (org.opennms.oce.model.v1.schema.Alarm alarm : alarms.getAlarm()) {
                for (Event event : alarm.getEvent()) {
                    engineAlarms.add(EngineUtils.toEngineAlarm(alarm, event));
                }
            }
            return engineAlarms;
        }
    }

    public static List<org.opennms.oce.model.v1.schema.Alarm> getRawAlarms(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext;
            try {
                jaxbContext = JAXBContext.newInstance(Alarms.class);
            } catch (JAXBException e) {
                throw new RuntimeException(e);
            }
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            Alarms alarms = (Alarms) unmarshaller.unmarshal(is);
            return alarms.getAlarm();
        }
    }

    public static AlarmSeverity toAlarmSeverity(Severity severity) {
        switch (severity) {
            case CRITICAL:
                return AlarmSeverity.CRITICAL;
            case MAJOR:
                return AlarmSeverity.MAJOR;
            case MINOR:
                return AlarmSeverity.MINOR;
            case WARNING:
                return AlarmSeverity.WARNING;
            case NORMAL:
                return AlarmSeverity.NORMAL;
            case CLEARED:
                return AlarmSeverity.CLEARED;
        }
        return AlarmSeverity.INDETERMINATE;
    }

}
