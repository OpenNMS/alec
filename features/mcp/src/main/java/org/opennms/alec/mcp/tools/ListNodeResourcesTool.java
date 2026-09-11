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

import java.util.Iterator;
import java.util.Map;
import java.util.Objects;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * The performance-data resources collected for a node and the metric names
 * on each — the first step before {@link GetMetricSeriesTool}.
 */
public class ListNodeResourcesTool extends AlecTool {

    public static final String NAME = "list_node_resources";
    static final int MAX_RESOURCES = 60;
    static final int MAX_ATTRIBUTES = 40;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List the performance-data resources OpenNMS collects for a node (node-level, per "
                    + "interface, per disk, ...) and the metric names available on each. Call this to find the "
                    + "resourceId and attribute to pass to get_metric_series.")
            .string("nodeId", "Numeric node id, or foreignSource:foreignId.", false)
            .string("nodeLabel", "Exact node label, when the id is unknown.", false)
            .string("filter", "Optional case-insensitive substring to keep only matching resource labels "
                    + "(e.g. an interface name).", false)
            .build();

    private final OpenNmsRestClient rest;
    private final NodeLookup lookup;
    private final ObjectMapper om;

    public ListNodeResourcesTool(OpenNmsRestClient rest, NodeDao nodeDao, ObjectMapper om) {
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
        String filter = args.stringOr("filter", "").toLowerCase();
        JsonNode body = rest.get("resources/fornode/" + node.getId());
        ObjectNode out = om.createObjectNode();
        out.put("nodeId", node.getId());
        out.put("label", node.getLabel());
        ArrayNode resources = out.putArray("resources");
        JsonNode children = body.path("children").path("resource");
        int total = 0;
        if (children.isArray()) {
            for (JsonNode r : children) {
                String label = r.path("label").asText("");
                String type = r.path("typeLabel").asText("");
                if (!filter.isEmpty() && !label.toLowerCase().contains(filter)
                        && !type.toLowerCase().contains(filter)) {
                    continue;
                }
                total++;
                if (resources.size() >= MAX_RESOURCES) {
                    continue;
                }
                ObjectNode n = resources.addObject();
                n.put("resourceId", r.path("id").asText());
                n.put("label", label);
                n.put("type", type);
                ArrayNode attrs = n.putArray("attributes");
                JsonNode graphAttrs = r.path("rrdGraphAttributes");
                if (graphAttrs.isObject()) {
                    Iterator<Map.Entry<String, JsonNode>> it = graphAttrs.fields();
                    int count = 0;
                    while (it.hasNext()) {
                        if (count++ >= MAX_ATTRIBUTES) {
                            n.put("attributesTruncated", graphAttrs.size());
                            break;
                        }
                        attrs.add(it.next().getKey());
                    }
                }
            }
        }
        out.put("resourceCount", total);
        if (total > MAX_RESOURCES) {
            out.put("resourcesTruncated", true);
        }
        return out;
    }
}
