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

package org.opennms.oce.datasource.opennms;

import java.util.List;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.FeedbackType;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.common.ImmutableAlarm;
import org.opennms.oce.datasource.common.ImmutableAlarmFeedback;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef;
import org.opennms.oce.datasource.common.ImmutableSituation;
import org.opennms.oce.datasource.opennms.proto.FeedbackModelProtos;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

import com.google.common.base.Enums;
import com.google.common.base.Strings;

public class OpennmsMapper {

    public static Alarm toAlarm(OpennmsModelProtos.Alarm alarm) {
        ImmutableAlarm.Builder alarmBuilder = ImmutableAlarm.newBuilder();

        if (alarm.hasNodeCriteria()) {
            alarmBuilder.setNodeId(alarm.getNodeCriteria().getId());
        }

        return alarmBuilder
                .setId(alarm.getReductionKey())
                .setTime(alarm.getLastEventTime())
                .setSeverity(toSeverity(alarm.getSeverity()))
                .setInventoryObjectType(alarm.getManagedObjectType())
                .setInventoryObjectId(alarm.getManagedObjectInstance())
                .setSummary(alarm.getLogMessage())
                .setDescription(alarm.getDescription())
                .build();
    }
    
    private static FeedbackType toFeedbackType(OpennmsModelProtos.AlarmFeedback.FeedbackType feedbackType) {
        return Enums.getIfPresent(FeedbackType.class, feedbackType.toString()).or(FeedbackType.UNKNOWN);
    }

    public static AlarmFeedback toAlarmFeedback(OpennmsModelProtos.AlarmFeedback alarmFeedback) {
        return ImmutableAlarmFeedback.newBuilder()
                .setSituationKey(alarmFeedback.getSituationKey())
                .setAlarmKey(alarmFeedback.getAlarmKey())
                .setSituationFingerprint(alarmFeedback.getSituationFingerprint())
                .setFeedbackType(toFeedbackType(alarmFeedback.getFeedbackType()))
                .setReason(alarmFeedback.getReason())
                .setUser(alarmFeedback.getUser())
                .setTimestamp(alarmFeedback.getTimestamp())
                .build();
    }

    public static List<AlarmFeedback> toAlarmFeedbackList(FeedbackModelProtos.AlarmFeedbacks alarmFeedbacks) {
        return alarmFeedbacks.getAlarmFeedbackList().stream()
                .map(alarmFeedback -> ImmutableAlarmFeedback.newBuilder()
                        .setSituationKey(alarmFeedback.getSituationKey())
                        .setAlarmKey(alarmFeedback.getAlarmKey())
                        .setSituationFingerprint(alarmFeedback.getSituationFingerprint())
                        .setFeedbackType(toFeedbackType(alarmFeedback.getFeedbackType()))
                        .setReason(alarmFeedback.getReason())
                        .setUser(alarmFeedback.getUser())
                        .setTimestamp(alarmFeedback.getTimestamp())
                        .build())
                .collect(Collectors.toList());
    }

    public static Situation toSituation(OpennmsModelProtos.Alarm alarm) {
        final ImmutableSituation.Builder situationBuilder = ImmutableSituation.newBuilder()
                .setCreationTime(alarm.getFirstEventTime());
        final OpennmsModelProtos.Event lastEvent = alarm.getLastEvent();
        if (lastEvent != null) {
            lastEvent.getParameterList().stream()
                    .filter( p -> SituationToEvent.SITUATION_ID_PARM_NAME.equals(p.getName()))
                    .findFirst()
                    .ifPresent(p -> situationBuilder.setId(p.getValue()));
        }
        situationBuilder.setSeverity(toSeverity(alarm.getSeverity()));
        alarm.getRelatedAlarmList().forEach(relatedAlarm -> situationBuilder.addAlarm(toAlarm(relatedAlarm)));
        return situationBuilder.build();
    }

    protected static Severity toSeverity(OpennmsModelProtos.Severity severity) {
        return Enums.getIfPresent(Severity.class, severity.toString()).or(Severity.INDETERMINATE);
    }

    protected static String toNodeCriteria(OpennmsModelProtos.Node node) {
        if (!Strings.isNullOrEmpty(node.getForeignSource()) &&
                !Strings.isNullOrEmpty(node.getForeignId())) {
            return node.getForeignSource() + ":" + node.getForeignId();
        } else {
            return Long.valueOf(node.getId()).toString();
        }
    }

    public static String toNodeCriteria(OpennmsModelProtos.NodeCriteria nodeCriteria) {
        if (!Strings.isNullOrEmpty(nodeCriteria.getForeignSource()) &&
                !Strings.isNullOrEmpty(nodeCriteria.getForeignId())) {
            return nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId();
        } else {
            return Long.valueOf(nodeCriteria.getId()).toString();
        }
    }

    public static InventoryModelProtos.InventoryObject fromInventory(InventoryObject inventory) {
        InventoryModelProtos.InventoryObject.Builder ioBuilder = InventoryModelProtos.InventoryObject.newBuilder();

        if (inventory.getType() != null) {
            ioBuilder.setType(inventory.getType());
        }
        if (inventory.getId() != null) {
            ioBuilder.setId(inventory.getId());
        }
        if (inventory.getSubtype() != null) {
            ioBuilder.setSubtype(inventory.getSubtype());
        }
        if (inventory.getParentType() != null) {
            ioBuilder.setParentType(inventory.getParentType());
        }
        if (inventory.getParentId() != null) {
            ioBuilder.setParentId(inventory.getParentId());
        }
        if (inventory.getFriendlyName() != null) {
            ioBuilder.setFriendlyName(inventory.getFriendlyName());
        }
        if (inventory.getPeers() != null) {
            ioBuilder.addAllPeer(inventory.getPeers()
                    .stream()
                    .map(OpennmsMapper::fromPeerRef)
                    .collect(Collectors.toList()));
        }
        if (inventory.getRelatives() != null) {
            ioBuilder.addAllRelative(inventory.getRelatives()
                    .stream()
                    .map(OpennmsMapper::fromRelativeRef)
                    .collect(Collectors.toList()));
        }

        ioBuilder.setWeightToParent(inventory.getWeightToParent());


        return ioBuilder.build();
    }

    private static InventoryModelProtos.InventoryObjectPeerRef fromPeerRef(InventoryObjectPeerRef inventoryObjectPeerRef) {
        return InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                .setType(inventoryObjectPeerRef.getType())
                .setId(inventoryObjectPeerRef.getId())
                .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.valueOf(inventoryObjectPeerRef.getEndpoint().toString()))
                .setWeight(inventoryObjectPeerRef.getWeight())
                .build();
    }

    private static InventoryModelProtos.InventoryObjectRelativeRef fromRelativeRef(InventoryObjectRelativeRef inventoryObjectRelativeRef) {
        return InventoryModelProtos.InventoryObjectRelativeRef.newBuilder()
                .setType(inventoryObjectRelativeRef.getType())
                .setId(inventoryObjectRelativeRef.getId())
                .setWeight(inventoryObjectRelativeRef.getWeight())
                .build();
    }

}
