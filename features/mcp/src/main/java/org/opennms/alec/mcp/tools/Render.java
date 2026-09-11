/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
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

package org.opennms.alec.mcp.tools;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/** Compact JSON renderings shared by several tools. */
final class Render {

    private Render() {
    }

    static String iso(long epochMillis) {
        return epochMillis <= 0 ? null : Instant.ofEpochMilli(epochMillis).toString();
    }

    static String iso(Date date) {
        return date == null ? null : date.toInstant().toString();
    }

    static String truncate(String s, int max) {
        if (s == null) {
            return null;
        }
        return s.length() <= max ? s : s.substring(0, max) + "...";
    }

    /** A situation with its alarms, as the ALEC datasource sees it. */
    static ObjectNode situation(Situation s, boolean withAlarms, ObjectMapper om) {
        ObjectNode n = om.createObjectNode();
        n.put("situationId", s.getId());
        if (s.getLongId() > 0) {
            n.put("numericId", s.getLongId());
        }
        n.put("status", s.getStatus() == null ? null : s.getStatus().name());
        n.put("severity", s.getSeverity() == null ? null : s.getSeverity().name());
        n.put("created", iso(s.getCreationTime()));
        if (s.getLastTime() != null) {
            n.put("lastUpdated", iso(s.getLastTime()));
        }
        n.put("alarmCount", s.getAlarms() == null ? 0 : s.getAlarms().size());
        if (s.getDescription() != null && !s.getDescription().isEmpty()) {
            n.put("description", truncate(s.getDescription(), 500));
        }
        if (s.getDiagnosticText() != null && !s.getDiagnosticText().isEmpty()) {
            n.put("diagnostic", truncate(s.getDiagnosticText(), 500));
        }
        List<String> feedback = s.getFeedback();
        if (feedback != null && !feedback.isEmpty()) {
            ArrayNode fb = n.putArray("feedback");
            feedback.forEach(fb::add);
        }
        if (withAlarms && s.getAlarms() != null) {
            ArrayNode alarms = n.putArray("alarms");
            s.getAlarms().stream()
                    .sorted((a, b) -> Long.compare(a.getTime(), b.getTime()))
                    .forEach(a -> {
                        ObjectNode an = alarms.addObject();
                        an.put("alarmId", a.getId());
                        an.put("severity", a.getSeverity() == null ? null : a.getSeverity().name());
                        an.put("firstTime", iso(a.getFirstTime()));
                        an.put("lastTime", iso(a.getTime()));
                        if (a.getNodeId() != null) {
                            an.put("nodeId", a.getNodeId());
                        }
                        if (a.getNodeLabel() != null) {
                            an.put("nodeLabel", a.getNodeLabel());
                        }
                        an.put("object", a.getInventoryObjectType() + "/" + a.getInventoryObjectId());
                        an.put("summary", truncate(a.getSummary(), 300));
                        an.put("cleared", a.isClear());
                    });
        }
        return n;
    }

    /** An OpenNMS alarm summary (Integration API model). */
    static ObjectNode alarm(Alarm a, ObjectMapper om) {
        ObjectNode n = om.createObjectNode();
        n.put("alarmId", a.getId());
        n.put("severity", a.getSeverity() == null ? null : a.getSeverity().name());
        n.put("uei", a.getLastEvent() == null ? null : a.getLastEvent().getUei());
        Node node = a.getNode();
        if (node != null) {
            n.put("nodeId", node.getId());
            n.put("nodeLabel", node.getLabel());
        }
        n.put("firstEventTime", iso(a.getFirstEventTime()));
        n.put("lastEventTime", iso(a.getLastEventTime()));
        n.put("logMessage", truncate(a.getLogMessage(), 300));
        n.put("acknowledged", a.isAcknowledged());
        if (a.isSituation()) {
            n.put("isSituation", true);
            n.put("relatedAlarms", a.getRelatedAlarms() == null ? 0 : a.getRelatedAlarms().size());
        }
        if (a.getManagedObjectType() != null) {
            n.put("managedObject", a.getManagedObjectType() + "/" + a.getManagedObjectInstance());
        }
        return n;
    }
}
