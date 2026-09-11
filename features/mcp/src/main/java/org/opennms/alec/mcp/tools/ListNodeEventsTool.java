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

import java.util.Objects;

import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/** Recent event history for a node, via {@code GET /rest/events}. */
public class ListNodeEventsTool implements McpTool {

    public static final String NAME = "list_node_events";
    static final int DEFAULT_LIMIT = 25;
    static final int MAX_LIMIT = 100;
    static final int MAX_LOG_MESSAGE = 300;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List the most recent events OpenNMS recorded for a node (SNMP traps, syslog, "
                    + "service outages and restorations, threshold and configuration events), newest first. "
                    + "Events are the raw history behind alarms.")
            .string("nodeId", "Numeric node id, or foreignSource:foreignId.", false)
            .string("nodeLabel", "Exact node label, when the id is unknown.", false)
            .integer("sinceMinutes", "Only events newer than this many minutes ago (default: no time filter).", false)
            .integer("limit", "Maximum events to return (default " + DEFAULT_LIMIT + ", max " + MAX_LIMIT + ").", false)
            .build();

    private final OpenNmsRestClient rest;
    private final NodeLookup lookup;
    private final ObjectMapper om;

    public ListNodeEventsTool(OpenNmsRestClient rest, NodeDao nodeDao, ObjectMapper om) {
        this.rest = Objects.requireNonNull(rest);
        this.lookup = new NodeLookup(nodeDao);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public boolean isAvailable() {
        return rest.isConfigured();
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Args args = new Args(arguments);
        Node node = lookup.resolve(args);
        int limit = args.intOr("limit", DEFAULT_LIMIT, 1, MAX_LIMIT);
        int sinceMinutes = args.intOr("sinceMinutes", 0, 0, 60 * 24 * 365);
        long cutoff = sinceMinutes > 0 ? System.currentTimeMillis() - sinceMinutes * 60_000L : 0L;

        JsonNode body = rest.get("events?node.id=" + node.getId() + "&limit=" + limit
                + "&orderBy=eventTime&order=desc");
        ObjectNode out = om.createObjectNode();
        out.put("nodeId", node.getId());
        out.put("label", node.getLabel());
        ArrayNode events = out.putArray("events");
        JsonNode list = body.path("event");
        if (list.isArray()) {
            for (JsonNode e : list) {
                long time = e.path("time").asLong(0L);
                if (cutoff > 0 && time < cutoff) {
                    continue;
                }
                ObjectNode n = events.addObject();
                n.put("eventId", e.path("id").asLong());
                n.put("time", Render.iso(time));
                n.put("uei", e.path("uei").asText(null));
                n.put("severity", e.path("severity").asText(null));
                n.put("logMessage", Render.truncate(stripTags(e.path("logMessage").asText("")), MAX_LOG_MESSAGE));
                JsonNode service = e.get("serviceType");
                if (service != null && service.isObject()) {
                    n.put("service", service.path("name").asText(null));
                }
                if (e.hasNonNull("ifIndex")) {
                    n.put("ifIndex", e.path("ifIndex").asInt());
                }
            }
        }
        out.put("returned", events.size());
        out.put("totalOnNode", body.path("totalCount").asInt(events.size()));
        return out;
    }

    static String stripTags(String s) {
        return s == null ? "" : s.replaceAll("<[^>]+>", "").replace("&lt;", "<").replace("&gt;", ">")
                .replace("&amp;", "&").replace("&quot;", "\"").replaceAll("\\s+", " ").trim();
    }
}
