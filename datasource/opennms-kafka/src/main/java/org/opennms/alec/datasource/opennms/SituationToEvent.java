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

package org.opennms.alec.datasource.opennms;

import java.util.concurrent.atomic.AtomicInteger;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.util.AlarmUtil;
import org.opennms.alec.datasource.opennms.events.Event;

/**
 * Contains the logic used to convert a situation to an event.
 */
public class SituationToEvent {
    public static final String SITUATION_UEI = "uei.opennms.org/alarms/situation";
    public static final String SITUATION_ID_PARM_NAME = "situationId";
    public static final String SITUATION_STATUS_PARM_NAME = "situationStatus";
    public static final String SITUATION_LOG_MSG = "situationLogMsg";
    public static final String SITUATION_DESCR = "situationDescr";
    public static final String SITUATION_CREATED = "situation created %s alarm(s) correlated";
    public static final String SITUATION_REJECTED = "situation rejected";
    public static final String SITUATION_ACCEPTED = "situation accepted";

    private SituationToEvent() {
        throw new IllegalStateException("Utility class");
    }

    public static Event toEvent(Situation situation, Event.TimeFormat timeFormat) {
        final Event e = Event.withDateFormat(timeFormat);
        e.setUei(SITUATION_UEI);

        final Severity maxSeverity = Severity.fromValue(situation.getAlarms().stream()
                .mapToInt(a -> a.getSeverity() != null ? a.getSeverity().getValue() : Severity.INDETERMINATE.getValue())
                .max()
                .getAsInt());

        Alarm alarmForDescr = null;
        if (!Status.REJECTED.equals(situation.getStatus())) {
            alarmForDescr = AlarmUtil.getAlarmForDescription(situation.getAlarms());
        }

        switch (situation.getStatus()) {
            case ACCEPTED:
                e.addParam(SITUATION_LOG_MSG, SITUATION_ACCEPTED);
                e.addParam(SITUATION_DESCR, situation.getDescription());
                e.setSeverity(situation.getSeverity().name().toLowerCase());
                break;
            case REJECTED:
                e.addParam(SITUATION_LOG_MSG, SITUATION_REJECTED);
                e.addParam(SITUATION_DESCR, situation.getDescription());
                e.setSeverity(situation.getSeverity().name().toLowerCase());
                break;
            case USER_CREATED:
                e.addParam(SITUATION_LOG_MSG,
                        String.format(SITUATION_CREATED, situation.getAlarms().size()));
                e.addParam(SITUATION_DESCR,
                        situation.getDescription() + "\n<p>ALEC Diagnostic: " + situation.getDiagnosticText() + "</p>");
                e.setSeverity(maxSeverity.name().toLowerCase());
                break;
            case ADDED_ALARM:
            case REMOVED_ALARM:
                e.addParam(SITUATION_LOG_MSG, situation.getFeedback().get(situation.getFeedback().size() - 1));
                e.addParam(SITUATION_DESCR, situation.getDescription());
                e.setSeverity(maxSeverity.name().toLowerCase());
                break;
            case CREATED:
                if (alarmForDescr != null) {
                    e.addParam(SITUATION_LOG_MSG, alarmForDescr.getSummary());
                    String description = alarmForDescr.getDescription();
                    if (situation.getDiagnosticText() != null) {
                        description += "\n<p>ALEC Diagnostic: " + situation.getDiagnosticText() + "</p>";
                    }
                    e.addParam(SITUATION_DESCR, description);
                }
                e.setSeverity(maxSeverity.name().toLowerCase());
        }

        if (alarmForDescr != null) {
            // Set a node id - use the same node associated with the alarm we used to the description
            e.setNodeId(alarmForDescr.getNodeId() != null ? alarmForDescr.getNodeId() : null);
        }

        // Set the related reduction keys
        final AtomicInteger alarmIndex = new AtomicInteger(0);
        situation.getAlarms().stream()
                .map(Alarm::getId)
                .forEach(reductionKey -> e.addParam("related-reductionKey" + alarmIndex.incrementAndGet(), reductionKey));


        // Relay the situation id
        e.addParam(SITUATION_ID_PARM_NAME, situation.getId());

        // Add situation status
        e.addParam(SITUATION_STATUS_PARM_NAME, situation.getStatus().toString());

        return e;
    }
}
