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

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.alec.mcp.ToolSpec;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Cheap liveness/inventory check. The configuration page's tool probe asks the
 * model to call this first, so it doubles as proof that the whole
 * model-to-tool round trip works.
 */
public class AlecStatusTool extends AlecTool {

    public static final String NAME = "alec_status";

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("Check that ALEC is reachable and list the tools available on this system, "
                    + "with a count of current situations. Takes no arguments.")
            .build();

    private final SituationDatasource situations;
    private final ToolRegistry registry;
    private final OpenNmsRestClient rest;
    private final ObjectMapper om;

    public AlecStatusTool(SituationDatasource situations, ToolRegistry registry, OpenNmsRestClient rest,
                          ObjectMapper om) {
        this.situations = Objects.requireNonNull(situations);
        this.registry = Objects.requireNonNull(registry);
        this.rest = Objects.requireNonNull(rest);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        ObjectNode n = om.createObjectNode();
        n.put("alec", "ok");
        try {
            long open = 0;
            long total = 0;
            for (Situation s : situations.getSituations()) {
                total++;
                if (s.getStatus() == null || (!"ACCEPTED".equals(s.getStatus().name())
                        && !"REJECTED".equals(s.getStatus().name()))) {
                    open++;
                }
            }
            n.put("situations", total);
            n.put("openSituations", open);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ToolException("Interrupted while reading situations");
        }
        n.put("opennmsRestConfigured", rest.isConfigured());
        ArrayNode tools = n.putArray("tools");
        registry.availableSpecs().forEach(s -> tools.add(s.getName()));
        return n;
    }
}
