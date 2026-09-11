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

package org.opennms.alec.mcp;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * The single catalogue of tools, published as an OSGi service so that ALEC's
 * own chat tool loop (RCA, LLM clustering) and the MCP REST endpoint dispatch
 * through the same {@link #call}. An interface (not the implementation class)
 * because blueprint service references in other bundles are proxied by
 * interface.
 */
public interface ToolRegistry {

    /**
     * Upper bound on a serialized tool result. Everything returned lands in
     * the model's context; a runaway result (a node with 2,000 interfaces)
     * would evict the alarms the model is supposed to be reasoning about.
     */
    int MAX_RESULT_CHARS = 16_000;

    /** Register a tool (blueprint whiteboard bind method). */
    void addTool(McpTool tool);

    /** Unregister a tool (blueprint whiteboard unbind method). */
    void removeTool(McpTool tool);

    McpMetrics getMetrics();

    /** Specs of every tool that can currently work, sorted by name. */
    List<ToolSpec> availableSpecs();

    List<McpTool> availableTools();

    /** Every registered tool, available or not (for the status endpoint). */
    List<McpTool> allTools();

    Optional<McpTool> find(String name);

    boolean isEmpty();

    /**
     * Invoke a tool by name. Never throws: unknown tools, unavailable tools,
     * {@link ToolException}s and unexpected runtime failures all come back as
     * an error result the caller can relay to the model.
     */
    ToolResult call(ToolConsumer consumer, String name, JsonNode arguments);
}
