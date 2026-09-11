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

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Severity;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * The alarms OpenNMS currently holds — optionally for one node — including
 * cleared ones that have not yet been purged, which is the closest thing to
 * alarm history the Integration API offers.
 */
public class ListAlarmsTool extends AlecTool {

    public static final String NAME = "list_node_alarms";
    static final int DEFAULT_LIMIT = 30;
    static final int MAX_LIMIT = 100;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List OpenNMS alarms, most recent first, for one node or for all nodes. Includes recently "
                    + "cleared alarms, so it shows what else happened on a node around a situation.")
            .string("nodeId", "Numeric node id; omit for all nodes.", false)
            .string("minSeverity", "Lowest severity to include: INDETERMINATE, CLEARED, NORMAL, WARNING, MINOR, MAJOR or CRITICAL. Default WARNING.", false)
            .bool("includeCleared", "Include cleared alarms (default true).", false)
            .integer("limit", "Maximum alarms to return (default " + DEFAULT_LIMIT + ", max " + MAX_LIMIT + ").", false)
            .build();

    private final AlarmDao alarmDao;
    private final ObjectMapper om;

    public ListAlarmsTool(AlarmDao alarmDao, ObjectMapper om) {
        this.alarmDao = Objects.requireNonNull(alarmDao);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Args args = new Args(arguments);
        Integer nodeId = null;
        if (args.has("nodeId")) {
            try {
                nodeId = Integer.parseInt(args.stringOr("nodeId", ""));
            } catch (NumberFormatException e) {
                throw new ToolException("nodeId must be the numeric node id");
            }
        }
        Severity minSeverity = severity(args.stringOr("minSeverity", "WARNING"));
        boolean includeCleared = args.boolOr("includeCleared", true);
        int limit = args.intOr("limit", DEFAULT_LIMIT, 1, MAX_LIMIT);

        final Integer wantedNode = nodeId;
        List<Alarm> all = alarmDao.getAlarms();
        List<Alarm> selected = all.stream()
                .filter(a -> wantedNode == null
                        || (a.getNode() != null && wantedNode.equals(a.getNode().getId())))
                .filter(a -> a.getSeverity() != null && (a.getSeverity().getId() >= minSeverity.getId()
                        || (includeCleared && a.getSeverity() == Severity.CLEARED)))
                .filter(a -> includeCleared || a.getSeverity() != Severity.CLEARED)
                .sorted(Comparator.comparing((Alarm a) -> a.getLastEventTime() == null ? 0L : a.getLastEventTime().getTime())
                        .reversed())
                .limit(limit)
                .collect(Collectors.toList());

        ObjectNode out = om.createObjectNode();
        if (nodeId != null) {
            out.put("nodeId", nodeId);
        }
        out.put("returned", selected.size());
        ArrayNode arr = out.putArray("alarms");
        selected.forEach(a -> arr.add(Render.alarm(a, om)));
        return out;
    }

    private static Severity severity(String text) throws ToolException {
        try {
            return Severity.valueOf(text.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new ToolException("Unknown severity '" + text + "'");
        }
    }
}
