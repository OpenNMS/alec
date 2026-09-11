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

import java.util.Map;
import java.util.Objects;

import org.opennms.integration.api.v1.mcp.McpToolContext;
import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.opennms.integration.api.v1.mcp.McpToolResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Base class for ALEC's read-only tools. Every tool is one
 * {@link McpToolProvider} — the OpenNMS Integration API's extension point —
 * published as an OSGi service, so the OpenNMS MCP server
 * ({@code /opennms/rest/mcp}, the {@code opennms-mcp-server} feature)
 * advertises and serves it to external MCP clients, and ALEC's own chat tool
 * loop dispatches it in-process through the {@link ToolRegistry}.
 *
 * <p>Subclasses describe themselves with a {@link ToolSpec} (which renders
 * the JSON input schema and the OpenAI function form) and implement
 * {@link #call(JsonNode)} against JSON arguments; this class adapts that to
 * the map-based {@link McpToolProvider#execute} contract.
 *
 * <p>Implementations must be side-effect free (the model can trigger them)
 * and must return compact JSON — every byte of a result lands in the model's
 * context window.
 */
public abstract class AlecTool implements McpToolProvider {

    private static final Logger LOG = LoggerFactory.getLogger(AlecTool.class);
    private static final ObjectMapper MAPPER = new ObjectMapper();

    // Attached by the registry when the tool is bound, so calls arriving from
    // the OpenNMS MCP server (external clients) are counted too. Volatile:
    // bound on the blueprint thread, read on request threads.
    private volatile McpMetrics metrics;

    public abstract ToolSpec getSpec();

    /**
     * Execute the tool.
     *
     * @param arguments the JSON arguments object (never null; may be empty)
     * @return a JSON node to hand back to the caller
     * @throws ToolException for an expected, user-presentable failure (unknown
     *         node, missing argument, upstream REST error). The message is
     *         shown to the model verbatim, so keep it short and free of secrets.
     */
    public abstract JsonNode call(JsonNode arguments) throws ToolException;

    /**
     * Whether the tool can currently work — e.g. REST-backed tools need the
     * operator to have configured an OpenNMS login. ALEC's loop does not offer
     * unavailable tools to the model; through the OpenNMS MCP server they stay
     * listed (the provider contract has no availability notion) and answer
     * with an error that says what is missing.
     */
    public boolean isAvailable() {
        return true;
    }

    @Override
    public final String getToolName() {
        return getSpec().getName();
    }

    @Override
    public final String getToolDescription() {
        return getSpec().getDescription();
    }

    @Override
    public final String getInputSchema() {
        return getSpec().parametersSchema(MAPPER).toString();
    }

    /** ALEC's tools never write; the OpenNMS MCP server offers them to every REST user. */
    @Override
    public final boolean isWriteAccess() {
        return false;
    }

    /**
     * Roles an <em>external</em> caller must hold (any one of them) to run this
     * tool through the OpenNMS MCP server; empty means any REST user. ALEC's
     * own model calls bypass this (they run with ALEC's stored OpenNMS login
     * through {@link #call}), so it only ever narrows what outside callers
     * can reach with that login. Mirror the OpenNMS REST rule of the data
     * the tool reads.
     */
    protected java.util.List<String> requiredRoles() {
        return java.util.Collections.emptyList();
    }

    /** The {@link McpToolProvider} entry point used by the OpenNMS MCP server. */
    @Override
    public final McpToolResult execute(McpToolContext context) {
        String name = getToolName();
        if (!isAvailable()) {
            count(true);
            return McpToolResult.error("Tool '" + name + "' is not available on this system"
                    + " (OpenNMS REST access is not configured on ALEC's LLM Setup page)");
        }
        java.util.List<String> roles = requiredRoles();
        if (!roles.isEmpty() && (context == null || roles.stream().noneMatch(context::isUserInRole))) {
            count(true);
            return McpToolResult.error("Tool '" + name + "' requires one of the roles " + roles);
        }
        Map<String, Object> arguments = context == null ? null : context.getArguments();
        JsonNode args = arguments == null ? MAPPER.createObjectNode() : MAPPER.valueToTree(arguments);
        try {
            JsonNode content = call(args);
            count(false);
            // Same cap as the in-process path: a result is bounded whoever asked.
            return McpToolResult.text(ToolRegistry.cap(
                    MAPPER.writeValueAsString(content == null ? MAPPER.createObjectNode() : content)));
        } catch (ToolException e) {
            count(true);
            return McpToolResult.error(e.getMessage() == null ? "tool failed" : e.getMessage());
        } catch (JsonProcessingException e) {
            count(true);
            return McpToolResult.error("Tool '" + name + "' produced a result that could not be serialized");
        } catch (RuntimeException e) {
            count(true);
            LOG.warn("MCP tool '{}' threw unexpectedly", name, e);
            return McpToolResult.error("Tool '" + name + "' failed unexpectedly: " + e.getClass().getSimpleName());
        }
    }

    void attachMetrics(McpMetrics metrics) {
        this.metrics = metrics;
    }

    private void count(boolean error) {
        McpMetrics m = metrics;
        if (m != null) {
            m.recordCall(ToolConsumer.EXTERNAL, getToolName(), error);
        }
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "[" + getToolName() + "]";
    }

    /** The registry's in-process context for tools contributed by other bundles. */
    static final class InternalContext implements McpToolContext {
        private final Map<String, Object> arguments;

        InternalContext(Map<String, Object> arguments) {
            this.arguments = Objects.requireNonNull(arguments);
        }

        @Override
        public Map<String, Object> getArguments() {
            return arguments;
        }

        @Override
        public String getUserName() {
            return "alec";
        }

        @Override
        public boolean isUserInRole(String role) {
            // The model runs with no user privileges: write tools are never
            // offered to it, and a provider asking for a role gets "no".
            return false;
        }
    }
}
