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

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/** One situation with every alarm in it. */
public class GetSituationTool implements McpTool {

    public static final String NAME = "get_situation";

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("Get one ALEC situation with all of its alarms (node, severity, timing, summary). "
                    + "Accepts the situation id shown in the UI (numeric) or ALEC's internal id.")
            .string("situationId", "The situation id (numeric UI id or internal UUID).", true)
            .build();

    private final SituationDatasource situations;
    private final ObjectMapper om;

    public GetSituationTool(SituationDatasource situations, ObjectMapper om) {
        this.situations = Objects.requireNonNull(situations);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        String id = new Args(arguments).string("situationId");
        Optional<Situation> found = find(id);
        if (found.isEmpty()) {
            throw new ToolException("No situation with id '" + id + "'");
        }
        return Render.situation(found.get(), true, om);
    }

    private Optional<Situation> find(String id) throws ToolException {
        try {
            List<Situation> all = situations.getSituations();
            for (Situation s : all) {
                if (id.equals(s.getId())) {
                    return Optional.of(s);
                }
            }
            try {
                long numeric = Long.parseLong(id);
                for (Situation s : all) {
                    if (s.getLongId() == numeric) {
                        return Optional.of(s);
                    }
                }
                if (numeric > 0 && numeric <= Integer.MAX_VALUE) {
                    return situations.getSituation((int) numeric);
                }
            } catch (NumberFormatException ignore) {
                // not numeric
            }
            return Optional.empty();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ToolException("Interrupted while reading situations");
        }
    }
}
