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

package org.opennms.oce.datasource.jaxb;

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

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.datasource.v1.schema.AlarmRef;
import org.opennms.oce.datasource.v1.schema.Alarms;
import org.opennms.oce.datasource.v1.schema.Event;
import org.opennms.oce.datasource.v1.schema.Situations;

import com.google.gson.Gson;

public class JaxbUtils {


    private static final String SCHEMA_RESOURCE = "/model.v1.xsd";

    private static final Gson gson = new Gson();

    public static Alarm toAlarm(org.opennms.oce.datasource.v1.schema.Alarm alarm, org.opennms.oce.datasource.v1.schema.Event event) {
        final AlarmBean alarmBean = new AlarmBean();
        alarmBean.setId(alarm.getId());
        alarmBean.setTime(event.getTime());
        alarmBean.setInventoryObjectType(alarm.getInventoryObjectType());
        alarmBean.setInventoryObjectId(alarm.getInventoryObjectId());
        alarmBean.setSeverity(toSeverity(event.getSeverity()));
        return alarmBean;
    }

    public static Severity toSeverity(org.opennms.oce.datasource.v1.schema.Severity severity) {
        switch (severity) {
            case CRITICAL:
                return Severity.CRITICAL;
            case MAJOR:
                return Severity.MAJOR;
            case MINOR:
                return Severity.MINOR;
            case WARNING:
                return Severity.WARNING;
            case NORMAL:
                return Severity.NORMAL;
            case CLEARED:
                return Severity.CLEARED;
        }
        return Severity.INDETERMINATE;
    }

    public static org.opennms.oce.datasource.v1.schema.Situation toModelSituation(Situation situation) {
        org.opennms.oce.datasource.v1.schema.Situation modelSituation = new org.opennms.oce.datasource.v1.schema.Situation();
        modelSituation.setId(situation.getId());
        for (Alarm a : situation.getAlarms()) {
            AlarmRef alarmRef = new AlarmRef();
            alarmRef.setId(a.getId());
            modelSituation.getAlarmRef().add(alarmRef);
        }
        return modelSituation;
    }


    public static Situation toEngineSituation(org.opennms.oce.datasource.v1.schema.Situation situation) {
        SituationBean engineSituation = new SituationBean(situation.getId());
        engineSituation.setCreationTime(situation.getCreationTime());
        for (AlarmRef a : situation.getAlarmRef()) {
            Alarm alarm = new AlarmBean(a.getId());
            engineSituation.addAlarm(alarm);
        }
        return engineSituation;
    }

    public static Set<Situation> getSituations(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Situations.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            List<org.opennms.oce.datasource.v1.schema.Situation> xmlSituations = ((Situations) unmarshaller.unmarshal(is)).getSituation();
            return new HashSet<>(xmlSituations.stream().map(JaxbUtils::toEngineSituation).collect(Collectors.toSet()));
        } catch (Exception e) {
            throw e;
        }
    }

    public static void writeSituations(Map<String, Situation> situations, String outFile) throws JAXBException, IOException {
        String filepath = outFile == null || outFile.isEmpty() ? "situations.xml" : outFile;
        try (OutputStream os = Files.newOutputStream(Paths.get(filepath))) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Situations.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            Situations list = new Situations();
            list.getSituation().addAll(situations.values().stream().map(JaxbUtils::toModelSituation).collect(Collectors.toList()));
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
            for (org.opennms.oce.datasource.v1.schema.Alarm alarm : alarms.getAlarm()) {
                for (Event event : alarm.getEvent()) {
                    engineAlarms.add(JaxbUtils.toAlarm(alarm, event));
                }
            }
            return engineAlarms;
        }
    }

    public static List<org.opennms.oce.datasource.v1.schema.Alarm> getRawAlarms(Path path) throws JAXBException, IOException {
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

    public static void writeSituations(List<Situation> situations, Path path) throws IOException, JAXBException {
        try (OutputStream os = Files.newOutputStream(path)) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Situations.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
            Situations list = new Situations();
            list.getSituation().addAll(situations.stream().map(JaxbUtils::toModelSituation)
                    .collect(Collectors.toList()));
            marshaller.marshal(list, os);
        }
    }
}
