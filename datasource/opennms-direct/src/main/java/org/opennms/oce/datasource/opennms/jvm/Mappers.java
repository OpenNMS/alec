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

package org.opennms.oce.datasource.opennms.jvm;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.beans.InMemoryEventBean;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.common.ImmutableAlarm;
import org.opennms.oce.datasource.common.ImmutableSituation;

public class Mappers {
    public static final String SITUATION_UEI = "uei.opennms.org/alarms/situation";
    public static final String SITUATION_ID_PARM_NAME = "situationId";

    public static Alarm toAlarm(org.opennms.integration.api.v1.model.Alarm alarm) {
        return ImmutableAlarm.newBuilder()
                .setId(alarm.getReductionKey())
                .setTime(alarm.getLastEventTime().getTime())
                .setSeverity(toSeverity(alarm.getSeverity()))
                .setInventoryObjectId(alarm.getManagedObjectInstance())
                .setInventoryObjectType(alarm.getManagedObjectInstance())
                .setSummary(alarm.getLogMessage())
                .setDescription(alarm.getDescription())
                .build();
    }

    public static Situation toSituation(org.opennms.integration.api.v1.model.Alarm alarm) {
        // TODO: Create the situation
        final ImmutableSituation.Builder situationBuilder = ImmutableSituation.newBuilder();
        return situationBuilder.build();
    }

    public static InMemoryEvent toEvent(Situation situation) {
        final InMemoryEventBean event = new InMemoryEventBean(SITUATION_UEI, "oce");

        // Use the max severity as the situation severity
        final Severity maxSeverity = Severity.fromValue(situation.getAlarms().stream()
                .mapToInt(a -> a.getSeverity() != null ? a.getSeverity().getValue() : Severity.INDETERMINATE.getValue())
                .max()
                .getAsInt());
        event.setSeverity(toSeverity(maxSeverity));

        // Relay the situation id
        event.addParameter(SITUATION_ID_PARM_NAME, situation.getId());

        // Use the log message and description from the first (earliest) alarm
        final Alarm earliestAlarm = situation.getAlarms().stream()
                .min(Comparator.comparing(Alarm::getTime))
                .get();
        event.addParameter("situationLogMsg", earliestAlarm.getSummary());

        String description = earliestAlarm.getDescription();
        if (situation.getDiagnosticText() != null) {
            description += "\n<p>OCE Diagnostic: " + situation.getDiagnosticText() + "</p>";
        }
        event.addParameter("situationDescr", description);

        // Set the related reduction keys
        situation.getAlarms().stream()
                .map(Alarm::getId)
                .forEach(reductionKey -> event.addParameter("related-reductionKey", reductionKey));

        return event;
    }

    public static org.opennms.integration.api.v1.model.Severity toSeverity(Severity severity) {
        if (severity == null) {
            return null;
        }
        switch(severity) {
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
        }
        return org.opennms.integration.api.v1.model.Severity.INDETERMINATE;
    }

    public static Severity toSeverity(org.opennms.integration.api.v1.model.Severity severity) {
        if (severity == null) {
            return null;
        }
        switch(severity) {
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
        }
        return Severity.INDETERMINATE;
    }

    public static List<InventoryObject> toInventory(Node node) {
        // TODO: Derive the inventory
        return Collections.emptyList();

    }
}
