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

package org.opennms.alec.llm.client;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

import org.junit.Test;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ToolSpecTest {

    private final ObjectMapper om = new ObjectMapper();

    @Test
    public void openAiShapeWrapsFunctionWithNameDescriptionAndParameters() {
        ToolSpec spec = ToolSpec.builder("get_node_inventory")
                .description("Get a node")
                .string("nodeId", "The id", true)
                .build();
        ObjectNode tool = spec.toOpenAiTool(om);
        assertThat(tool.get("type").asText(), equalTo("function"));
        JsonNode fn = tool.get("function");
        assertThat(fn.get("name").asText(), equalTo("get_node_inventory"));
        assertThat(fn.get("description").asText(), equalTo("Get a node"));
        JsonNode params = fn.get("parameters");
        assertThat(params.get("type").asText(), equalTo("object"));
        assertThat(params.path("properties").path("nodeId").path("type").asText(), equalTo("string"));
        assertThat(params.path("properties").path("nodeId").path("description").asText(), equalTo("The id"));
    }

    @Test
    public void requiredArrayListsOnlyRequiredParamsAndIsOmittedWhenNoneRequired() {
        ObjectNode schema = ToolSpec.builder("t")
                .string("a", "", true)
                .string("b", "", false)
                .integer("c", "", true)
                .build().parametersSchema(om);
        JsonNode required = schema.get("required");
        assertThat(required.isArray(), is(true));
        assertThat(required.size(), equalTo(2));
        assertThat(required.get(0).asText(), equalTo("a"));
        assertThat(required.get(1).asText(), equalTo("c"));

        ObjectNode none = ToolSpec.builder("t").string("a", "", false).build().parametersSchema(om);
        assertThat(none.has("required"), is(false));
    }

    @Test
    public void additionalPropertiesIsAlwaysFalse() {
        ObjectNode schema = ToolSpec.builder("t").build().parametersSchema(om);
        assertThat(schema.get("additionalProperties").asBoolean(), is(false));
        assertThat(schema.get("properties").isObject(), is(true));
        assertThat(schema.get("properties").size(), equalTo(0));
    }

    @Test
    public void stringArrayDeclaresItemsTypeAndOptionalMaxItems() {
        ObjectNode schema = ToolSpec.builder("t")
                .stringArray("capped", "up to 3", true, 3)
                .stringArray("open", "any", false, 0)
                .build().parametersSchema(om);
        JsonNode capped = schema.path("properties").path("capped");
        assertThat(capped.get("type").asText(), equalTo("array"));
        assertThat(capped.get("maxItems").asInt(), equalTo(3));
        assertThat(capped.path("items").path("type").asText(), equalTo("string"));
        assertThat(capped.get("description").asText(), equalTo("up to 3"));

        JsonNode open = schema.path("properties").path("open");
        assertThat(open.get("type").asText(), equalTo("array"));
        assertThat("0 means uncapped", open.has("maxItems"), is(false));
        assertThat(open.path("items").path("type").asText(), equalTo("string"));
    }

    @Test
    public void rawSchemaIsPassedThroughAndGetsDescriptionWhenMissing() {
        ObjectNode groups = om.createObjectNode();
        groups.put("type", "array");
        groups.putObject("items").put("type", "object");
        ObjectNode schema = ToolSpec.builder("t")
                .raw("groups", "the groups", true, groups)
                .build().parametersSchema(om);
        JsonNode prop = schema.path("properties").path("groups");
        assertThat(prop.get("type").asText(), equalTo("array"));
        assertThat(prop.path("items").path("type").asText(), equalTo("object"));
        assertThat("description added from the builder when the raw schema has none",
                prop.get("description").asText(), equalTo("the groups"));
        assertThat(schema.get("required").get(0).asText(), equalTo("groups"));

        // A description inside the raw schema wins and the original is not mutated.
        ObjectNode withDesc = om.createObjectNode();
        withDesc.put("type", "object");
        withDesc.put("description", "inner");
        JsonNode prop2 = ToolSpec.builder("t").raw("x", "outer", false, withDesc).build()
                .parametersSchema(om).path("properties").path("x");
        assertThat(prop2.get("description").asText(), equalTo("inner"));
        assertThat(withDesc.size(), equalTo(2));
    }

    @Test
    public void rawSchemaMustBeAnObject() {
        try {
            ToolSpec.builder("t").raw("x", "", false, om.createArrayNode());
            fail("expected IllegalArgumentException");
        } catch (IllegalArgumentException expected) {
            // ok
        }
        try {
            ToolSpec.builder("t").raw("x", "", false, null);
            fail("expected IllegalArgumentException");
        } catch (IllegalArgumentException expected) {
            // ok
        }
    }

    @Test
    public void integerAndBooleanParamsUseJsonSchemaTypes() {
        ObjectNode schema = ToolSpec.builder("t")
                .integer("limit", "max", false)
                .bool("flag", "on/off", false)
                .build().parametersSchema(om);
        assertThat(schema.path("properties").path("limit").path("type").asText(), equalTo("integer"));
        assertThat(schema.path("properties").path("flag").path("type").asText(), equalTo("boolean"));
    }

    @Test
    public void accessorsAndNullDescription() {
        ToolSpec spec = ToolSpec.builder("n").description(null).string("p", "d", true).build();
        assertThat(spec.getName(), equalTo("n"));
        assertThat(spec.getDescription(), equalTo(""));
        assertThat(spec.getParams().size(), equalTo(1));
        assertThat(spec.getParams().get(0).getName(), equalTo("p"));
        assertThat(spec.getParams().get(0).getType(), equalTo("string"));
        assertThat(spec.getParams().get(0).isRequired(), is(true));
        assertThat(spec.toString(), equalTo("ToolSpec[n]"));
    }
}
