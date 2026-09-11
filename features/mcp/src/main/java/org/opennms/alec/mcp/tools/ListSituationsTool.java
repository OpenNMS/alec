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

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/** The current situations, newest first, without their alarms. */
public class ListSituationsTool implements McpTool {

    public static final String NAME = "list_situations";
    static final int DEFAULT_LIMIT = 20;
    static final int MAX_LIMIT = 100;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List ALEC situations (correlated alarm groups), newest first. Returns id, status, "
                    + "severity, timestamps and alarm count for each; use get_situation for the alarms.")
            .bool("includeClosed", "Include ACCEPTED/REJECTED situations (default false: open only).", false)
            .integer("limit", "Maximum situations to return (default " + DEFAULT_LIMIT + ", max " + MAX_LIMIT + ").", false)
            .build();

    private final SituationDatasource situations;
    private final ObjectMapper om;

    public ListSituationsTool(SituationDatasource situations, ObjectMapper om) {
        this.situations = Objects.requireNonNull(situations);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Args args = new Args(arguments);
        boolean includeClosed = args.boolOr("includeClosed", false);
        int limit = args.intOr("limit", DEFAULT_LIMIT, 1, MAX_LIMIT);
        List<Situation> all;
        try {
            all = situations.getSituations();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ToolException("Interrupted while reading situations");
        }
        List<Situation> selected = all.stream()
                .filter(s -> includeClosed || isOpen(s))
                .sorted(Comparator.comparingLong(Situation::getCreationTime).reversed())
                .limit(limit)
                .collect(Collectors.toList());
        ObjectNode out = om.createObjectNode();
        out.put("total", all.size());
        out.put("returned", selected.size());
        ArrayNode arr = out.putArray("situations");
        selected.forEach(s -> arr.add(Render.situation(s, false, om)));
        return out;
    }

    static boolean isOpen(Situation s) {
        if (s.getStatus() == null) {
            return true;
        }
        String status = s.getStatus().name();
        return !"ACCEPTED".equals(status) && !"REJECTED".equals(status);
    }
}
