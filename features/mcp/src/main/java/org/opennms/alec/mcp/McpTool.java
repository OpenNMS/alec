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

import com.fasterxml.jackson.databind.JsonNode;

/**
 * One read-only tool the model (or an external MCP client) may call. Tools are
 * collected by the {@link ToolRegistry}: the bundle's built-ins directly, and
 * any other ALEC bundle's contribution through the OSGi whiteboard — publish an
 * implementation as an {@code McpTool} service and it appears in both the chat
 * tool list and the MCP {@code tools/list} without touching this bundle.
 *
 * <p>Implementations must be side-effect free (this is the operator's
 * expectation for anything a model can trigger) and must return compact JSON —
 * every byte of a result lands in the model's context window.
 */
public interface McpTool {

    ToolSpec getSpec();

    /**
     * Execute the tool.
     *
     * @param arguments the JSON arguments object (never null; may be empty)
     * @return a JSON node to hand back to the caller
     * @throws ToolException for an expected, user-presentable failure (unknown
     *         node, missing argument, upstream REST error). The message is
     *         shown to the model verbatim, so keep it short and free of secrets.
     */
    JsonNode call(JsonNode arguments) throws ToolException;

    /**
     * Whether the tool can currently work — e.g. REST-backed tools need the
     * operator to have configured an OpenNMS login. Unavailable tools are not
     * offered to the model or listed to MCP clients, so a model never learns
     * about a tool it cannot use.
     */
    default boolean isAvailable() {
        return true;
    }
}
