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

package org.opennms.alec.datasource.jaxb;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.alec.datasource.api.InventoryObjectPeerRef;
import org.opennms.alec.datasource.api.InventoryObjectRelativeRef;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableInventoryObject;
import org.opennms.alec.datasource.common.ImmutableInventoryObjectPeerRef;
import org.opennms.alec.datasource.common.ImmutableInventoryObjectRelativeRef;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.v1.schema.AlarmRef;
import org.opennms.alec.datasource.v1.schema.Alarms;
import org.opennms.alec.datasource.v1.schema.Event;
import org.opennms.alec.datasource.v1.schema.Inventory;
import org.opennms.alec.datasource.v1.schema.ModelObjectEntry;
import org.opennms.alec.datasource.v1.schema.PeerRef;
import org.opennms.alec.datasource.v1.schema.RelativeRef;
import org.opennms.alec.datasource.v1.schema.Situations;

import com.google.gson.Gson;

public class JaxbUtils {


    private static final String SCHEMA_RESOURCE = "/model.v1.xsd";

    private static final Gson gson = new Gson();

    public static Alarm toAlarm(org.opennms.alec.datasource.v1.schema.Alarm alarm,
                                org.opennms.alec.datasource.v1.schema.Event event) {
        return ImmutableAlarm.newBuilder()
                .setId(alarm.getId())
                .setFirstTime(alarm.getFirstEventTime())
                .setTime(event.getTime())
                .setInventoryObjectType(alarm.getInventoryObjectType())
                .setInventoryObjectId(alarm.getInventoryObjectId())
                .setSeverity(toSeverity(event.getSeverity()))
                .setSummary(event.getSummary())
                .setDescription(event.getDescription())
                .build();
    }

    public static Severity toSeverity(org.opennms.alec.datasource.v1.schema.Severity severity) {
        if (severity == null) {
            return null;
        }
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

    private static org.opennms.alec.datasource.v1.schema.Severity toSeverity(Severity severity) {
        if (severity == null) {
            return null;
        }
        switch (severity) {
            case CRITICAL:
                return org.opennms.alec.datasource.v1.schema.Severity.CRITICAL;
            case MAJOR:
                return org.opennms.alec.datasource.v1.schema.Severity.MAJOR;
            case MINOR:
                return org.opennms.alec.datasource.v1.schema.Severity.MINOR;
            case WARNING:
                return org.opennms.alec.datasource.v1.schema.Severity.WARNING;
            case NORMAL:
                return org.opennms.alec.datasource.v1.schema.Severity.NORMAL;
            case CLEARED:
                return org.opennms.alec.datasource.v1.schema.Severity.CLEARED;
        }
        return org.opennms.alec.datasource.v1.schema.Severity.INDETERMINATE;
    }


    public static org.opennms.alec.datasource.v1.schema.Situation toModelSituation(Situation situation) {
        org.opennms.alec.datasource.v1.schema.Situation modelSituation = new org.opennms.alec.datasource.v1.schema.Situation();
        modelSituation.setId(situation.getId());
        modelSituation.setSeverity(toSeverity(situation.getSeverity()));
        modelSituation.setCreationTime(situation.getCreationTime());
        for (Alarm a : situation.getAlarms()) {
            AlarmRef alarmRef = new AlarmRef();
            alarmRef.setId(a.getId());
            modelSituation.getAlarmRef().add(alarmRef);
        }
        return modelSituation;
    }


    public static Situation toEngineSituation(org.opennms.alec.datasource.v1.schema.Situation situation) {
        return ImmutableSituation.newBuilder()
                .setId(situation.getId())
                .setCreationTime(situation.getCreationTime())
                .setSeverity(toSeverity(situation.getSeverity()))
                .setAlarms(situation.getAlarmRef()
                        .stream()
                        .map(alarmRef -> ImmutableAlarm.newBuilder()
                                .setId(alarmRef.getId())
                                .build())
                        .collect(Collectors.toSet()))
                .build();
    }

    public static Set<Situation> getSituations(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            return getSituations(is);
        } catch (Exception e) {
            throw e;
        }
    }

    public static Set<Situation> getSituations(InputStream is) throws JAXBException, IOException {
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(Situations.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            List<org.opennms.alec.datasource.v1.schema.Situation> xmlSituations = ((Situations) unmarshaller.unmarshal(is)).getSituation();
            return xmlSituations.stream().map(JaxbUtils::toEngineSituation).collect(Collectors.toSet());
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
            return getAlarms(is);
        }
    }

    public static List<Alarm> getAlarms(InputStream is) throws JAXBException, IOException {
        JAXBContext jaxbContext;
        try {
            jaxbContext = JAXBContext.newInstance(Alarms.class);
        } catch (JAXBException e) {
            throw new RuntimeException(e);
        }
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        Alarms alarms = (Alarms) unmarshaller.unmarshal(is);

        final List<Alarm> engineAlarms = new ArrayList<>();
        for (org.opennms.alec.datasource.v1.schema.Alarm alarm : alarms.getAlarm()) {
            for (Event event : alarm.getEvent()) {
                engineAlarms.add(JaxbUtils.toAlarm(alarm, event));
            }
        }
        return engineAlarms;
    }

    public static List<InventoryObject> getInventory(Path path) throws IOException, JAXBException {
        try (InputStream is = Files.newInputStream(path)) {
            return getInventory(is);
        }
    }

    public static List<InventoryObject> getInventory(InputStream is) throws IOException, JAXBException {
        JAXBContext jaxbContext;
        try {
            jaxbContext = JAXBContext.newInstance(Inventory.class);
        } catch (JAXBException e) {
            throw new RuntimeException(e);
        }
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        Inventory inventory = (Inventory) unmarshaller.unmarshal(is);

        return toInventoryObjects(inventory);
    }

    public static List<InventoryObject> toInventoryObjects(Inventory inventory) {
        final List<InventoryObject> ios = new ArrayList<>();
        for (ModelObjectEntry modelObjectEntry : inventory.getModelObjectEntry()) {
            final InventoryObject io = toInventoryObject(modelObjectEntry);
            if (io != null) {
                ios.add(io);
            }
        }
        return ios;
    }

    private static InventoryObject toInventoryObject(ModelObjectEntry moe) {
        if ("model".equals(moe.getId()) && "Model".equals(moe.getType())) {
            return null;
        }
        final ImmutableInventoryObject.Builder ioBuilder = ImmutableInventoryObject.newBuilder()
                .setId(moe.getId())
                .setType(moe.getType());
        if (!"model".equals(moe.getParentId()) || !"Model".equals(moe.getParentType())) {
            ioBuilder.setParentId(moe.getParentId())
                    .setParentType(moe.getParentType());
        }
        ioBuilder.setFriendlyName(moe.getFriendlyName());
        if (moe.getPeerRef() != null) {
            for (PeerRef ref : moe.getPeerRef()) {
                final ImmutableInventoryObjectPeerRef.Builder peerRefBuilder =
                        ImmutableInventoryObjectPeerRef.newBuilder()
                                .setId(ref.getId())
                                .setType(ref.getType());
                if ("A".equalsIgnoreCase(ref.getEndpoint())) {
                    peerRefBuilder.setEndpoint(InventoryObjectPeerEndpoint.A);
                } else {
                    peerRefBuilder.setEndpoint(InventoryObjectPeerEndpoint.Z);
                }
                if (ref.getWeight() != null) {
                    peerRefBuilder.setWeight(ref.getWeight());
                }
                ioBuilder.addPeer(peerRefBuilder.build());
            }
        }
        if (moe.getRelativeRef() != null) {
            for (RelativeRef ref : moe.getRelativeRef()) {
                final ImmutableInventoryObjectRelativeRef.Builder relativeRefBuilder = ImmutableInventoryObjectRelativeRef.newBuilder()
                        .setId(ref.getId())
                        .setType(ref.getType());
                if (ref.getWeight() != null) {
                    relativeRefBuilder.setWeight(ref.getWeight());
                }
                ioBuilder.addRelative(relativeRefBuilder.build());
            }
        }
        if (moe.getWeightToParent() != null) {
            ioBuilder.setWeightToParent(moe.getWeightToParent());
        }
        return ioBuilder.build();
    }

    public static Inventory toInventory(List<InventoryObject> ios) {
        final Inventory inventory = new Inventory();

        for (InventoryObject io : ios) {
            ModelObjectEntry moe = new ModelObjectEntry();
            moe.setId(io.getId());
            moe.setType(io.getType());
            moe.setParentId(io.getParentId());
            moe.setParentType(io.getParentType());
            moe.setFriendlyName(io.getFriendlyName());
            moe.setWeightToParent(io.getWeightToParent());
            for (InventoryObjectPeerRef peerRef : io.getPeers()) {
                moe.getPeerRef().add(toPeerRef(peerRef));
            }
            for (InventoryObjectRelativeRef relativeRef : io.getRelatives()) {
                moe.getRelativeRef().add(toRelativeRef(relativeRef));
            }
            inventory.getModelObjectEntry().add(moe);
        }
        return inventory;
    }

    private static PeerRef toPeerRef(InventoryObjectPeerRef ioPeerRef) {
        final PeerRef peerRef = new PeerRef();
        peerRef.setId(ioPeerRef.getId());
        peerRef.setType(ioPeerRef.getType());
        peerRef.setWeight(ioPeerRef.getWeight());
        peerRef.setEndpoint(ioPeerRef.getEndpoint().name());
        return peerRef;
    }

    private static RelativeRef toRelativeRef(InventoryObjectRelativeRef ioRelativeRef) {
        final RelativeRef relativeRef = new RelativeRef();
        relativeRef.setId(ioRelativeRef.getId());
        relativeRef.setType(ioRelativeRef.getType());
        relativeRef.setWeight(ioRelativeRef.getWeight());
        return relativeRef;
    }

    public static List<org.opennms.alec.datasource.v1.schema.Alarm> getRawAlarms(Path path) throws JAXBException, IOException {
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

    public static Alarms toAlarms(List<Alarm> apiAlarms) {
        final Alarms alarms = new Alarms();
        for (Alarm apiAlarm : apiAlarms) {
            org.opennms.alec.datasource.v1.schema.Alarm alarm = new  org.opennms.alec.datasource.v1.schema.Alarm();
            alarm.setId(apiAlarm.getId());
            alarm.setSummary(apiAlarm.getSummary());
            alarm.setDescription(apiAlarm.getDescription());
            alarm.setInventoryObjectId(apiAlarm.getInventoryObjectId());
            alarm.setInventoryObjectType(apiAlarm.getInventoryObjectType());
            alarm.setLastSeverity(toSeverity(apiAlarm.getSeverity()));
            alarm.setFirstEventTime(apiAlarm.getFirstTime());
            alarm.setLastEventTime(apiAlarm.getTime());

            // Add a single "event" to the alarm
            org.opennms.alec.datasource.v1.schema.Event event = new org.opennms.alec.datasource.v1.schema.Event();
            event.setId(apiAlarm.getId());
            event.setSummary(apiAlarm.getSummary());
            event.setDescription(apiAlarm.getDescription());
            event.setSeverity(toSeverity(apiAlarm.getSeverity()));
            event.setTime(apiAlarm.getTime());
            alarm.getEvent().add(event);

            // Add it to the list
            alarms.getAlarm().add(alarm);
        }
        return alarms;
    }

    public static Situations toSituations(List<Situation> apiSituations) {
        final Situations situations = new Situations();
        for (Situation apiSituation : apiSituations) {
            situations.getSituation().add(toModelSituation(apiSituation));
        }
        return situations;
    }

    public static void write(Object o, Path targetFile) throws IOException, JAXBException {
        try (OutputStream os = Files.newOutputStream(targetFile)) {
            JAXBContext jaxbContext = JAXBContext.newInstance(o.getClass());
            Marshaller marshaller = jaxbContext.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
            marshaller.marshal(o, os);
        }
    }
}
