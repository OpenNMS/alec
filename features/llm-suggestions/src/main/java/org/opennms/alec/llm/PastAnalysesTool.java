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

package org.opennms.alec.llm;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.distributed.KeyValueStore;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Root-cause analyses ALEC produced for earlier situations. Contributed to the
 * MCP tool registry through the whiteboard, so the registry bundle never has
 * to know this bundle's record format — the pattern any bundle can follow.
 */
public class PastAnalysesTool extends AlecTool {

    public static final String NAME = "get_past_analyses";
    static final int DEFAULT_LIMIT = 10;
    static final int MAX_LIMIT = 50;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List the root-cause analyses ALEC previously produced for other situations, newest "
                    + "first (root causes and resolutions). Useful to recognise a recurring fault pattern. "
                    + "Treat them as prior hypotheses, not confirmed facts.")
            .integer("limit", "Maximum analyses to return (default " + DEFAULT_LIMIT + ", max " + MAX_LIMIT + ").", false)
            .build();

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper om;

    public PastAnalysesTool(KeyValueStore<String> kvStore, ObjectMapper om) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        int limit = DEFAULT_LIMIT;
        JsonNode l = arguments == null ? null : arguments.get("limit");
        if (l != null && !l.isNull()) {
            limit = Math.max(1, Math.min(MAX_LIMIT, l.asInt(DEFAULT_LIMIT)));
        }
        Map<String, String> all = kvStore.enumerateContext(SuggestionStore.CONTEXT);
        List<SuggestionRecord> ready = new ArrayList<>();
        if (all != null) {
            for (String raw : all.values()) {
                try {
                    SuggestionRecord r = om.readValue(raw, SuggestionRecord.class);
                    if (SuggestionRecord.STATUS_READY.equals(r.getStatus())
                            && (!r.getRootCauses().isEmpty() || !r.getResolutions().isEmpty())) {
                        ready.add(r);
                    }
                } catch (IOException ignore) {
                    // skip unparseable rows; the pruner cleans them up
                }
            }
        }
        ready.sort(Comparator.comparingLong((SuggestionRecord r) ->
                r.getCompletedAt() == null ? r.getRequestedAt() : r.getCompletedAt()).reversed());
        ObjectNode out = om.createObjectNode();
        out.put("total", ready.size());
        ArrayNode arr = out.putArray("analyses");
        for (SuggestionRecord r : ready.subList(0, Math.min(limit, ready.size()))) {
            ObjectNode n = arr.addObject();
            n.put("situationId", r.getSituationId());
            long when = r.getCompletedAt() == null ? r.getRequestedAt() : r.getCompletedAt();
            n.put("completedAt", java.time.Instant.ofEpochMilli(when).toString());
            ArrayNode rc = n.putArray("rootCauses");
            r.getRootCauses().forEach(rc::add);
            ArrayNode rs = n.putArray("resolutions");
            r.getResolutions().forEach(rs::add);
        }
        return out;
    }
}
