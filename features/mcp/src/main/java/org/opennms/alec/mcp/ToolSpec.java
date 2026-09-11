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
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Declaration of one callable tool: a name, a description written for the
 * model, and a JSON-schema object describing its arguments. The same
 * declaration is rendered in two wire shapes — the OpenAI
 * {@code tools[].function} form used by ALEC's own chat requests and the MCP
 * {@code tools/list} form served to external clients — so a tool is described
 * exactly once.
 */
public final class ToolSpec {

    private final String name;
    private final String description;
    private final List<Param> params;
    // Whole input schema as declared by a foreign McpToolProvider; null for
    // specs built with the builder.
    private final ObjectNode schema;

    private ToolSpec(Builder b) {
        this.name = b.name;
        this.description = b.description;
        this.params = Collections.unmodifiableList(new ArrayList<>(b.params));
        this.schema = null;
    }

    private ToolSpec(String name, String description, ObjectNode schema) {
        this.name = Objects.requireNonNull(name);
        this.description = description == null ? "" : description;
        this.params = Collections.emptyList();
        this.schema = schema.deepCopy();
    }

    public static Builder builder(String name) {
        return new Builder(name);
    }

    /** A spec wrapping a ready-made JSON input schema (another plugin's provider). */
    public static ToolSpec of(String name, String description, ObjectNode inputSchema) {
        return new ToolSpec(name, description, Objects.requireNonNull(inputSchema));
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public List<Param> getParams() {
        return params;
    }

    /** JSON-schema object for the tool's arguments. */
    public ObjectNode parametersSchema(ObjectMapper om) {
        if (this.schema != null) {
            return this.schema.deepCopy();
        }
        ObjectNode schema = om.createObjectNode();
        schema.put("type", "object");
        ObjectNode props = schema.putObject("properties");
        ArrayNode required = om.createArrayNode();
        for (Param p : params) {
            if (p.rawSchema != null) {
                ObjectNode prop = p.rawSchema.deepCopy();
                if (!prop.has("description") && !p.description.isEmpty()) {
                    prop.put("description", p.description);
                }
                props.set(p.name, prop);
                if (p.required) {
                    required.add(p.name);
                }
                continue;
            }
            ObjectNode prop = props.putObject(p.name);
            prop.put("type", p.type);
            if ("array".equals(p.type)) {
                if (p.maxItems > 0) {
                    prop.put("maxItems", p.maxItems);
                }
                prop.putObject("items").put("type", p.itemType);
            }
            prop.put("description", p.description);
            if (p.required) {
                required.add(p.name);
            }
        }
        if (required.size() > 0) {
            schema.set("required", required);
        }
        // Reject unknown keys so a hallucinated argument name is an error the
        // model can see rather than a silently ignored filter.
        schema.put("additionalProperties", false);
        return schema;
    }

    /** OpenAI chat-completions {@code tools[]} element. */
    public ObjectNode toOpenAiTool(ObjectMapper om) {
        ObjectNode tool = om.createObjectNode();
        tool.put("type", "function");
        ObjectNode fn = tool.putObject("function");
        fn.put("name", name);
        fn.put("description", description);
        fn.set("parameters", parametersSchema(om));
        return tool;
    }

    /** MCP {@code tools/list} element. */
    public ObjectNode toMcpTool(ObjectMapper om) {
        ObjectNode tool = om.createObjectNode();
        tool.put("name", name);
        tool.put("description", description);
        tool.set("inputSchema", parametersSchema(om));
        return tool;
    }

    @Override
    public String toString() {
        return "ToolSpec[" + name + "]";
    }

    public static final class Param {
        final String name;
        final String type;
        final String description;
        final boolean required;
        final String itemType;
        final int maxItems;
        final ObjectNode rawSchema;

        Param(String name, String type, String description, boolean required) {
            this(name, type, description, required, null, 0, null);
        }

        Param(String name, String type, String description, boolean required, String itemType, int maxItems,
              ObjectNode rawSchema) {
            this.name = name;
            this.type = type;
            this.description = description;
            this.required = required;
            this.itemType = itemType;
            this.maxItems = maxItems;
            this.rawSchema = rawSchema;
        }

        public String getName() {
            return name;
        }

        public String getType() {
            return type;
        }

        public boolean isRequired() {
            return required;
        }
    }

    public static final class Builder {
        private final String name;
        private String description = "";
        private final List<Param> params = new ArrayList<>();

        private Builder(String name) {
            this.name = Objects.requireNonNull(name);
        }

        public Builder description(String description) {
            this.description = description == null ? "" : description;
            return this;
        }

        public Builder string(String name, String description, boolean required) {
            params.add(new Param(name, "string", description, required));
            return this;
        }

        public Builder integer(String name, String description, boolean required) {
            params.add(new Param(name, "integer", description, required));
            return this;
        }

        public Builder bool(String name, String description, boolean required) {
            params.add(new Param(name, "boolean", description, required));
            return this;
        }

        /** An array of strings, optionally capped at {@code maxItems} (0 = uncapped). */
        public Builder stringArray(String name, String description, boolean required, int maxItems) {
            params.add(new Param(name, "array", description, required, "string", maxItems, null));
            return this;
        }

        /** A parameter with a hand-written JSON schema (for nested shapes the typed helpers can't express). */
        public Builder raw(String name, String description, boolean required, JsonNode schema) {
            if (schema == null || !schema.isObject()) {
                throw new IllegalArgumentException("raw schema must be a JSON object");
            }
            params.add(new Param(name, schema.path("type").asText("object"), description, required, null, 0,
                    (ObjectNode) schema));
            return this;
        }

        public ToolSpec build() {
            return new ToolSpec(this);
        }
    }
}
