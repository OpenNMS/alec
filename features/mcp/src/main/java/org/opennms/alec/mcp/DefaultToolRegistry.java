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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Default {@link ToolRegistry}: tools are added by the blueprint wiring and
 * through the {@link McpTool} whiteboard (bind/unbind). Every invocation —
 * whoever made it — is counted in {@link McpMetrics} and size-capped.
 */
public class DefaultToolRegistry implements ToolRegistry {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultToolRegistry.class);

    private final Map<String, McpTool> tools = new ConcurrentHashMap<>();
    private final McpMetrics metrics;
    private final ObjectMapper objectMapper;

    public DefaultToolRegistry(McpMetrics metrics, ObjectMapper objectMapper) {
        this.metrics = Objects.requireNonNull(metrics);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    /** Blueprint reference-list bind method (also used for built-ins). */
    @Override
    public void addTool(McpTool tool) {
        if (tool == null) {
            return;
        }
        String name = tool.getSpec().getName();
        McpTool previous = tools.put(name, tool);
        if (previous != null && previous != tool) {
            LOG.warn("MCP tool '{}' registered twice; the later registration wins", name);
        }
        LOG.debug("MCP tool registered: {}", name);
    }

    /** Blueprint reference-list unbind method. */
    @Override
    public void removeTool(McpTool tool) {
        if (tool == null) {
            return;
        }
        String name = tool.getSpec().getName();
        if (tools.remove(name, tool)) {
            LOG.debug("MCP tool unregistered: {}", name);
        }
    }

    @Override
    public McpMetrics getMetrics() {
        return metrics;
    }

    /** Specs of every tool that can currently work, sorted by name. */
    @Override
    public List<ToolSpec> availableSpecs() {
        List<ToolSpec> specs = new ArrayList<>();
        for (McpTool t : availableTools()) {
            specs.add(t.getSpec());
        }
        return specs;
    }

    @Override
    public List<McpTool> availableTools() {
        List<McpTool> out = new ArrayList<>();
        tools.values().stream()
                .filter(McpTool::isAvailable)
                .sorted((a, b) -> a.getSpec().getName().compareTo(b.getSpec().getName()))
                .forEach(out::add);
        return out;
    }

    /** Every registered tool, available or not (for the status endpoint). */
    @Override
    public List<McpTool> allTools() {
        List<McpTool> out = new ArrayList<>(tools.values());
        out.sort((a, b) -> a.getSpec().getName().compareTo(b.getSpec().getName()));
        return out;
    }

    @Override
    public Optional<McpTool> find(String name) {
        return name == null ? Optional.empty() : Optional.ofNullable(tools.get(name));
    }

    @Override
    public boolean isEmpty() {
        return tools.isEmpty();
    }

    /**
     * Invoke a tool by name. Never throws: unknown tools, unavailable tools,
     * {@link ToolException}s and unexpected runtime failures all come back as
     * an error result the caller can relay to the model.
     */
    @Override
    public ToolResult call(ToolConsumer consumer, String name, JsonNode arguments) {
        String toolName = name == null ? "" : name;
        Optional<McpTool> maybe = find(toolName);
        if (maybe.isEmpty()) {
            metrics.recordCall(consumer, toolName, true);
            return error("Unknown tool '" + toolName + "'. Available tools: " + availableNames());
        }
        McpTool tool = maybe.get();
        if (!tool.isAvailable()) {
            metrics.recordCall(consumer, toolName, true);
            return error("Tool '" + toolName + "' is not available on this system");
        }
        JsonNode args = arguments == null || arguments.isNull() ? objectMapper.createObjectNode() : arguments;
        if (!args.isObject()) {
            metrics.recordCall(consumer, toolName, true);
            return error("Tool arguments must be a JSON object");
        }
        try {
            JsonNode content = tool.call(args);
            if (content == null) {
                content = objectMapper.createObjectNode();
            }
            metrics.recordCall(consumer, toolName, false);
            return ToolResult.ok(content, serialize(content));
        } catch (ToolException e) {
            metrics.recordCall(consumer, toolName, true);
            LOG.debug("MCP tool '{}' failed ({}): {}", toolName, consumer.getKey(), e.getMessage());
            return error(e.getMessage());
        } catch (RuntimeException e) {
            // A bug or an unexpected upstream failure. Log it (with the stack)
            // for the operator; give the model a generic message so nothing
            // internal leaks into a prompt.
            metrics.recordCall(consumer, toolName, true);
            LOG.warn("MCP tool '{}' threw unexpectedly", toolName, e);
            return error("Tool '" + toolName + "' failed unexpectedly: " + e.getClass().getSimpleName());
        }
    }

    private String availableNames() {
        List<String> names = new ArrayList<>();
        for (ToolSpec s : availableSpecs()) {
            names.add(s.getName());
        }
        return String.join(", ", names);
    }

    private ToolResult error(String message) {
        ObjectNode node = objectMapper.createObjectNode();
        node.put("error", message == null ? "unknown error" : message);
        return ToolResult.failure(node, serialize(node));
    }

    String serialize(JsonNode node) {
        String text;
        try {
            text = objectMapper.writeValueAsString(node);
        } catch (JsonProcessingException e) {
            text = "{\"error\":\"result could not be serialized\"}";
        }
        if (text.length() > MAX_RESULT_CHARS) {
            // Truncate as text rather than trimming the structure: the model
            // still sees the leading (most important) part, plus an explicit
            // marker so it knows the tail is missing.
            text = text.substring(0, MAX_RESULT_CHARS) + "\n...[truncated: result exceeded "
                    + MAX_RESULT_CHARS + " characters; narrow the request]";
        }
        return text;
    }
}
