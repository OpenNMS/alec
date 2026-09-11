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

import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.opennms.integration.api.v1.mcp.McpToolResult;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Default {@link ToolRegistry}: providers arrive through the
 * {@link McpToolProvider} whiteboard (bind/unbind). ALEC's own tools are
 * dispatched natively on JSON; providers from other bundles go through the
 * Integration API's map-based {@code execute}. Every invocation is counted in
 * {@link McpMetrics} and size-capped.
 */
public class DefaultToolRegistry implements ToolRegistry {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultToolRegistry.class);
    private static final TypeReference<Map<String, Object>> MAP = new TypeReference<Map<String, Object>>() {
    };

    private final Map<String, McpToolProvider> tools = new ConcurrentHashMap<>();
    // Service reference -> the real service object we fetched for it, so
    // unbind can release exactly what bind acquired.
    private final Map<ServiceReference<?>, McpToolProvider> bound = new ConcurrentHashMap<>();
    private final McpMetrics metrics;
    private final ObjectMapper objectMapper;
    private final BundleContext bundleContext;

    public DefaultToolRegistry(McpMetrics metrics, ObjectMapper objectMapper) {
        this(metrics, objectMapper, null);
    }

    public DefaultToolRegistry(McpMetrics metrics, ObjectMapper objectMapper, BundleContext bundleContext) {
        this.metrics = Objects.requireNonNull(metrics);
        this.objectMapper = Objects.requireNonNull(objectMapper);
        this.bundleContext = bundleContext;
    }

    /**
     * Blueprint whiteboard bind method, by service reference. A reference-list
     * of service objects would hand us blueprint proxies, which are not
     * {@link AlecTool} instances: the JSON fast path, availability and the
     * external-call counter would all silently miss. Fetching the real service
     * object from the framework avoids that.
     */
    public void bindTool(ServiceReference<McpToolProvider> reference) {
        if (reference == null || bundleContext == null) {
            return;
        }
        McpToolProvider tool;
        try {
            tool = bundleContext.getService(reference);
        } catch (RuntimeException e) {
            LOG.warn("Could not fetch MCP tool provider service: {}", e.getMessage());
            return;
        }
        if (tool == null) {
            return;
        }
        bound.put(reference, tool);
        addTool(tool);
    }

    /** Blueprint whiteboard unbind method. */
    public void unbindTool(ServiceReference<McpToolProvider> reference) {
        if (reference == null) {
            return;
        }
        McpToolProvider tool = bound.remove(reference);
        if (tool != null) {
            removeTool(tool);
        }
        if (bundleContext != null) {
            try {
                bundleContext.ungetService(reference);
            } catch (RuntimeException ignore) {
                // framework going down
            }
        }
    }

    @Override
    public void addTool(McpToolProvider tool) {
        if (tool == null) {
            return;
        }
        String name = safeName(tool);
        if (name.isEmpty()) {
            LOG.warn("Ignoring MCP tool provider {} with a blank name", tool.getClass().getName());
            return;
        }
        if (tool instanceof AlecTool) {
            ((AlecTool) tool).attachMetrics(metrics);
        }
        McpToolProvider previous = tools.put(name, tool);
        if (previous != null && previous != tool) {
            LOG.warn("MCP tool '{}' registered twice; the later registration wins", name);
        }
        LOG.debug("MCP tool registered: {}", name);
    }

    @Override
    public void removeTool(McpToolProvider tool) {
        if (tool == null) {
            return;
        }
        String name = safeName(tool);
        if (tools.remove(name, tool)) {
            LOG.debug("MCP tool unregistered: {}", name);
        }
    }

    @Override
    public McpMetrics getMetrics() {
        return metrics;
    }

    @Override
    public List<ToolSpec> availableSpecs() {
        List<ToolSpec> specs = new ArrayList<>();
        for (McpToolProvider t : allTools()) {
            if (!isAvailable(t)) {
                continue;
            }
            ToolSpec spec = specOf(t);
            if (spec != null) {
                specs.add(spec);
            }
        }
        return specs;
    }

    @Override
    public List<McpToolProvider> allTools() {
        List<McpToolProvider> out = new ArrayList<>(tools.values());
        out.sort((a, b) -> safeName(a).compareTo(safeName(b)));
        return out;
    }

    @Override
    public boolean isAvailable(McpToolProvider tool) {
        try {
            if (tool.isWriteAccess()) {
                return false; // the model is never offered a tool that changes anything
            }
        } catch (RuntimeException e) {
            return false;
        }
        return !(tool instanceof AlecTool) || ((AlecTool) tool).isAvailable();
    }

    @Override
    public Optional<McpToolProvider> find(String name) {
        return name == null ? Optional.empty() : Optional.ofNullable(tools.get(name));
    }

    @Override
    public Optional<ToolSpec> findSpec(String name) {
        return find(name).map(this::specOf);
    }

    @Override
    public boolean isEmpty() {
        return tools.isEmpty();
    }

    @Override
    public ToolResult call(ToolConsumer consumer, String name, JsonNode arguments) {
        String toolName = name == null ? "" : name;
        Optional<McpToolProvider> maybe = find(toolName);
        if (maybe.isEmpty()) {
            // One bucket for every unknown name so a model hallucinating tool
            // names cannot grow the per-tool counters without bound.
            metrics.recordCall(consumer, McpMetrics.UNKNOWN_TOOL, true);
            return error("Unknown tool '" + toolName + "'. Available tools: " + availableNames());
        }
        McpToolProvider tool = maybe.get();
        if (!isAvailable(tool)) {
            metrics.recordCall(consumer, toolName, true);
            return error("Tool '" + toolName + "' is not available on this system");
        }
        JsonNode args = arguments == null || arguments.isNull() ? objectMapper.createObjectNode() : arguments;
        if (!args.isObject()) {
            metrics.recordCall(consumer, toolName, true);
            return error("Tool arguments must be a JSON object");
        }
        try {
            ToolResult result = tool instanceof AlecTool
                    ? callAlecTool((AlecTool) tool, args)
                    : callProvider(tool, args);
            metrics.recordCall(consumer, toolName, result.isError());
            return result;
        } catch (RuntimeException e) {
            // A bug or an unexpected upstream failure. Log it (with the stack)
            // for the operator; give the model a generic message so nothing
            // internal leaks into a prompt.
            metrics.recordCall(consumer, toolName, true);
            LOG.warn("MCP tool '{}' threw unexpectedly", toolName, e);
            return error("Tool '" + toolName + "' failed unexpectedly: " + e.getClass().getSimpleName());
        }
    }

    private ToolResult callAlecTool(AlecTool tool, JsonNode args) {
        try {
            JsonNode content = tool.call(args);
            if (content == null) {
                content = objectMapper.createObjectNode();
            }
            return ToolResult.ok(content, serialize(content));
        } catch (ToolException e) {
            LOG.debug("MCP tool '{}' failed: {}", tool.getToolName(), e.getMessage());
            return error(e.getMessage());
        }
    }

    /** A provider from another bundle: the Integration API's map-in, text-out contract. */
    private ToolResult callProvider(McpToolProvider tool, JsonNode args) {
        Map<String, Object> arguments = objectMapper.convertValue(args, MAP);
        McpToolResult result = tool.execute(new AlecTool.InternalContext(arguments));
        if (result == null) {
            return error("Tool '" + safeName(tool) + "' returned no result");
        }
        String text = String.join("\n", result.getTextContents());
        if (result.isError()) {
            return error(text);
        }
        JsonNode content;
        try {
            content = objectMapper.readTree(text);
        } catch (JsonProcessingException e) {
            content = objectMapper.getNodeFactory().textNode(text);
        }
        return ToolResult.ok(content, cap(text));
    }

    /** A provider's declaration in ALEC's spec form; null when its schema is unusable. */
    ToolSpec specOf(McpToolProvider tool) {
        if (tool instanceof AlecTool) {
            return ((AlecTool) tool).getSpec();
        }
        try {
            JsonNode schema = objectMapper.readTree(tool.getInputSchema());
            if (schema == null || !schema.isObject()) {
                LOG.warn("MCP tool '{}' has a non-object input schema; not offered to the model", safeName(tool));
                return null;
            }
            return ToolSpec.of(tool.getToolName(), tool.getToolDescription(), (ObjectNode) schema);
        } catch (RuntimeException | JsonProcessingException e) {
            LOG.warn("MCP tool '{}' has an unparseable input schema; not offered to the model", safeName(tool));
            return null;
        }
    }

    private static String safeName(McpToolProvider tool) {
        try {
            String n = tool.getToolName();
            return n == null ? "" : n.trim();
        } catch (RuntimeException e) {
            return "";
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
        return cap(text);
    }

    private static String cap(String text) {
        // Truncate as text rather than trimming the structure: the model still
        // sees the leading (most important) part, plus an explicit marker.
        return ToolRegistry.cap(text);
    }
}
