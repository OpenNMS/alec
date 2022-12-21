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

package org.opennms.alec.datasource.opennms.jvm;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmFeedback;
import org.opennms.alec.datasource.api.FeedbackType;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableAlarmFeedback;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.common.inventory.script.ScriptedInventoryException;
import org.opennms.alec.datasource.common.util.AlarmUtil;
import org.opennms.integration.api.v1.model.DatabaseEvent;
import org.opennms.integration.api.v1.model.EventParameter;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.TopologyEdge;
import org.opennms.integration.api.v1.model.immutables.ImmutableEventParameter;
import org.opennms.integration.api.v1.model.immutables.ImmutableInMemoryEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Enums;

public class ApiMapper {
    private static final Logger LOG = LoggerFactory.getLogger(ApiMapper.class);
    public static final String SITUATION_UEI = "uei.opennms.org/alarms/situation";
    public static final String SITUATION_ID_PARM_NAME = "situationId";
    public static final String SITUATION_STATUS_PARM_NAME = "situationStatus";
    public static final String SITUATION_LOG_MSG = "situationLogMsg";
    public static final String SITUATION_DESCR = "situationDescr";
    public static final String SITUATION_CREATED = "situation created %s alarm(s) correlated";
    public static final String SITUATION_REJECTED = "situation rejected";
    public static final String SITUATION_ACCEPTED = "situation accepted";

    private final ScriptedInventoryService inventoryService;

    /**
     * @param inventoryService wires in the JSR 223 script
     */
    public ApiMapper(ScriptedInventoryService inventoryService) {
        this.inventoryService = Objects.requireNonNull(inventoryService);
    }

    public Alarm toAlarm(org.opennms.integration.api.v1.model.Alarm alarm) {
        ImmutableAlarm.Builder alarmBuilder = ImmutableAlarm.newBuilder();
        alarmBuilder.setId(alarm.getReductionKey())
                .setLongId(alarm.getId())
                .setFirstTime(alarm.getFirstEventTime().getTime())
                .setTime(alarm.getLastEventTime().getTime())
                .setSeverity(toSeverity(alarm.getSeverity()))
                .setInventoryObjectId(alarm.getManagedObjectInstance())
                .setInventoryObjectType(alarm.getManagedObjectType())
                .setSummary(alarm.getLogMessage())
                .setDescription(alarm.getDescription())
                .setNodeId(alarm.getNode() != null ? alarm.getNode().getId().longValue() : null)
                .setNodeLabel(alarm.getNode() != null ? alarm.getNode().getLabel() : null)
                .setNodeLocation(alarm.getNode() != null ? alarm.getNode().getLocation() : null)
                .setReductionKey(alarm.getReductionKey());
        try {
            inventoryService.overrideTypeAndInstance(alarmBuilder, alarm);
        } catch (ScriptedInventoryException e) {
            LOG.error("Failure overriding inventory for alarm [{}] : {}", alarm, e.getCause().getMessage());
            LOG.error("Failure overriding inventory for alarm", e);
        }

        return alarmBuilder.build();
    }

    public Situation toSituation(org.opennms.integration.api.v1.model.Alarm alarm) {
        final String situationStatus;
        final Optional<String> situationStatusFromAlarm = getSituationParamFromAlarm(alarm, SITUATION_STATUS_PARM_NAME);
        situationStatus = situationStatusFromAlarm.orElseGet(Status.CREATED::toString);

        final String situationId;
        final Optional<String> situationIdFromAlarm = getSituationParamFromAlarm(alarm, SITUATION_ID_PARM_NAME);
        if (situationIdFromAlarm.isPresent()) {
            situationId = situationIdFromAlarm.get();
        } else {
            LOG.warn("Could not find situationId on alarm: {}. Using the alarm reductionKey instead.", alarm.getId());
            situationId = Integer.toString(alarm.getId());
        }

        return ImmutableSituation.newBuilder()
                .setId(situationId)
                .setLongId(alarm.getId())
                .setCreationTime(alarm.getFirstEventTime().toInstant().toEpochMilli())
                .setSeverity(toSeverity(alarm.getSeverity()))
                .setAlarms(alarm.getRelatedAlarms().stream().map(this::toAlarm).collect(Collectors.toSet()))
                .setStatus(Status.valueOf(situationStatus))
                .setReductionKey(alarm.getReductionKey())
                .setLastTime(alarm.getLastEventTime().toInstant().toEpochMilli())
                .setUei(alarm.getLastEvent() != null ? alarm.getLastEvent().getUei() : null)
                .setDescription(alarm.getDescription())
                .build();
    }

    private Optional<String> getSituationParamFromAlarm(org.opennms.integration.api.v1.model.Alarm alarm, String param) {
        final DatabaseEvent databaseEvent = alarm.getLastEvent();
        if (databaseEvent == null) {
            // Last event is missing
            return Optional.empty();
        }
        final List<EventParameter> parms = databaseEvent.getParametersByName(param);
        if (parms == null) {
            // No parameter with that name
            return Optional.empty();
        }
        return parms.stream()
                .map(EventParameter::getValue)
                .findFirst();
    }

    public InMemoryEvent toEvent(Situation situation) {
        final ImmutableInMemoryEvent.Builder eventBuilder = ImmutableInMemoryEvent.newBuilder();
        eventBuilder.setUei(SITUATION_UEI).setSource("alec");

        // Use the max severity as the situation severity
        final Severity maxSeverity = Severity.fromValue(situation.getAlarms().stream()
                .mapToInt(a -> a.getSeverity() != null ? a.getSeverity().getValue() : Severity.INDETERMINATE.getValue())
                .max()
                .orElseGet(Severity.INDETERMINATE::getValue));

        // Populate logmsg, descr and related node with details from the most relevant alarm
        Alarm alarmForDescr = null;
        if (!Status.REJECTED.equals(situation.getStatus())) {
            alarmForDescr = AlarmUtil.getAlarmForDescription(situation.getAlarms());
        }

        switch (situation.getStatus()){
            case ACCEPTED:
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_LOG_MSG, SITUATION_ACCEPTED));
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_DESCR, situation.getDescription()));
                eventBuilder.setSeverity(toSeverity(situation.getSeverity()));
                break;
            case REJECTED:
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_LOG_MSG, SITUATION_REJECTED));
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_DESCR, situation.getDescription()));
                eventBuilder.setSeverity(toSeverity(situation.getSeverity()));
                break;
            case USER_CREATED:
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_LOG_MSG,
                        String.format(SITUATION_CREATED, situation.getAlarms().size())));
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_DESCR,
                        situation.getDescription() + "\n<p>ALEC Diagnostic: " + situation.getDiagnosticText() + "</p>"));
                eventBuilder.setSeverity(toSeverity(maxSeverity));
                break;
            case ADDED_ALARM:
            case REMOVED_ALARM:
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_LOG_MSG, situation.getFeedback().get(situation.getFeedback().size() - 1)));
                eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_DESCR, situation.getDescription()));
                eventBuilder.setSeverity(toSeverity(maxSeverity));
                break;
            case CREATED:
                if (alarmForDescr != null) {
                    eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_LOG_MSG,
                            alarmForDescr.getSummary()));

                    String description = alarmForDescr.getDescription();
                    if (situation.getDiagnosticText() != null) {
                        description += "\n<p>ALEC Diagnostic: " + situation.getDiagnosticText() + "</p>";
                    }
                    eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_DESCR, description));
                }
                eventBuilder.setSeverity(toSeverity(maxSeverity));
        }

        if (alarmForDescr != null) {
            // Set a node id - use the same node associated with the alarm we used to the description
            eventBuilder.setNodeId(alarmForDescr.getNodeId() != null ? alarmForDescr.getNodeId().intValue() : null);
        }

        // Set the related reduction keys
        final AtomicInteger alarmIndex = new AtomicInteger(0);
        situation.getAlarms().stream()
                .map(Alarm::getId)
                // Append a unique index to each related-reductionKey parameter since the underlying event builder
                // does not support many parameters with the same name. Alarmd will associate the related alarm
                // provided that the parameter name *starts with* 'related-reductionKey'
                .forEach(reductionKey -> eventBuilder.addParameter(ImmutableEventParameter
                        .newInstance("related-reductionKey" + alarmIndex.incrementAndGet(), reductionKey)));

        // Relay the situation id
        eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_ID_PARM_NAME, situation.getId()));

        // Add situation status
        eventBuilder.addParameter(ImmutableEventParameter.newInstance(SITUATION_STATUS_PARM_NAME, situation.getStatus().toString()));

        return eventBuilder.build();
    }

    public org.opennms.integration.api.v1.model.Severity toSeverity(Severity severity) {
        if (severity == null) {
            return null;
        }
        switch (severity) {
            case CRITICAL:
                return org.opennms.integration.api.v1.model.Severity.CRITICAL;
            case MAJOR:
                return org.opennms.integration.api.v1.model.Severity.MAJOR;
            case MINOR:
                return org.opennms.integration.api.v1.model.Severity.MINOR;
            case WARNING:
                return org.opennms.integration.api.v1.model.Severity.WARNING;
            case NORMAL:
                return org.opennms.integration.api.v1.model.Severity.NORMAL;
            case CLEARED:
                return org.opennms.integration.api.v1.model.Severity.CLEARED;
            default:
                return org.opennms.integration.api.v1.model.Severity.INDETERMINATE;
        }
    }

    public Severity toSeverity(org.opennms.integration.api.v1.model.Severity severity) {
        if (severity == null) {
            return null;
        }
        switch (severity) {
            case CLEARED:
                return Severity.CLEARED;
            case NORMAL:
                return Severity.NORMAL;
            case WARNING:
                return Severity.WARNING;
            case MINOR:
                return Severity.MINOR;
            case MAJOR:
                return Severity.MAJOR;
            case CRITICAL:
                return Severity.CRITICAL;
            default:
                return Severity.INDETERMINATE;
        }
    }

    public List<InventoryObject> toInventory(Node node) {
        try {
            return inventoryService.createInventoryObjects(node);
        } catch (ScriptedInventoryException e) {
            LOG.error("Failed to retrieve inventory for node {}, : {}", node, e.getCause().getMessage());
            LOG.error("Failed to retrieve inventory for node", e);
            return Collections.emptyList();
        }
    }

    public List<InventoryObject> toInventory(org.opennms.integration.api.v1.model.Alarm alarm) {
        try {
            return inventoryService.createInventoryObjects(alarm);
        } catch (ScriptedInventoryException e) {
            LOG.error("Failed to retrieve inventory for alarm {}, : {}", alarm, e.getCause().getMessage());
            LOG.error("Failed to retrieve inventory for alarm", e);
            return Collections.emptyList();
        }
    }

    public AlarmFeedback toAlarmFeedback(org.opennms.integration.api.v1.model.AlarmFeedback alarmFeedback) {
        return ImmutableAlarmFeedback.newBuilder()
                .setSituationKey(alarmFeedback.getSituationKey())
                .setSituationFingerprint(alarmFeedback.getSituationFingerprint())
                .setAlarmKey(alarmFeedback.getAlarmKey())
                .setReason(alarmFeedback.getReason())
                .setFeedbackType(Enums.getIfPresent(FeedbackType.class, alarmFeedback.getFeedbackType().toString()).get())
                .setUser(alarmFeedback.getUser())
                .setTimestamp(alarmFeedback.getTimestamp())
                .build();
    }

    public List<InventoryObject> toInventory(TopologyEdge edge) {
        try {
            return inventoryService.createInventoryObjects(edge);
        } catch (ScriptedInventoryException e) {
            LOG.error("Failed to retrieve inventory for edge {}, : {}", edge, e.getCause().getMessage());
            LOG.error("Failed to retrieve inventory for edge", e);
            return Collections.emptyList();
        }
    }
}
