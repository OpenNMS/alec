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

import org.opennms.integration.api.v1.mcp.McpToolProvider;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * ALEC's view of every {@link McpToolProvider} published in the container —
 * ALEC's own tools and any other plugin's — used by the chat tool loop (RCA,
 * LLM clustering) and the configuration page. Only read tools are ever
 * offered to the model. An interface (not the implementation class) because
 * blueprint service references in other bundles are proxied by interface.
 */
public interface ToolRegistry {

    /**
     * Upper bound on a serialized tool result. Everything returned lands in
     * the model's context; a runaway result (a node with 2,000 interfaces)
     * would evict the alarms the model is supposed to be reasoning about.
     */
    int MAX_RESULT_CHARS = 16_000;

    /** Register a provider (blueprint whiteboard bind method). */
    void addTool(McpToolProvider tool);

    /** Unregister a provider (blueprint whiteboard unbind method). */
    void removeTool(McpToolProvider tool);

    McpMetrics getMetrics();

    /** Specs of every read tool that can currently work, sorted by name. */
    List<ToolSpec> availableSpecs();

    /** Every registered provider, available or not, sorted by name (for the status endpoint). */
    List<McpToolProvider> allTools();

    /** Whether a provider can currently work: write tools never can (for the model); ALEC tools may be unconfigured. */
    boolean isAvailable(McpToolProvider tool);

    Optional<McpToolProvider> find(String name);

    /** The spec of a registered provider, empty when unknown or its schema is unusable. */
    Optional<ToolSpec> findSpec(String name);

    boolean isEmpty();

    /**
     * Invoke a tool by name on the model's behalf. Never throws: unknown,
     * unavailable or write tools, {@link ToolException}s and unexpected
     * failures all come back as an error result the caller can relay.
     */
    ToolResult call(ToolConsumer consumer, String name, JsonNode arguments);
}
