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

package org.opennms.alec.mcp.rest;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.StubTool;
import org.opennms.alec.mcp.ToolConsumer;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.ToolRegistry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class McpJsonRpcHandlerTest {

    private final ObjectMapper om = new ObjectMapper();
    private McpMetrics metrics;
    private ToolRegistry registry;
    private McpJsonRpcHandler handler;
    private StubTool echo;

    @Before
    public void setUp() {
        metrics = new McpMetrics();
        registry = new DefaultToolRegistry(metrics, om);
        echo = new StubTool("echo", args -> om.createObjectNode().put("got", args.path("x").asText("")));
        registry.addTool(echo);
        registry.addTool(StubTool.unavailable("hidden"));
        registry.addTool(new StubTool("boom", args -> {
            throw new ToolException("No node found for '9'");
        }));
        handler = new McpJsonRpcHandler(registry, om, "3.0.5");
    }

    private JsonNode handle(String json) throws Exception {
        return handler.handle(om.readTree(json));
    }

    @Test
    public void initializeEchoesAKnownProtocolVersion() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"initialize\","
                + "\"params\":{\"protocolVersion\":\"2024-11-05\",\"clientInfo\":{\"name\":\"t\"}}}");
        assertThat(r.get("jsonrpc").asText(), equalTo("2.0"));
        assertThat(r.get("id").asInt(), equalTo(1));
        JsonNode result = r.get("result");
        assertThat(result.get("protocolVersion").asText(), equalTo("2024-11-05"));
        assertThat(result.path("capabilities").path("tools").path("listChanged").asBoolean(), is(false));
        assertThat(result.path("serverInfo").path("name").asText(), equalTo("opennms-alec"));
        assertThat(result.path("serverInfo").path("version").asText(), equalTo("3.0.5"));
        assertThat(result.path("serverInfo").path("title").asText(), equalTo("OpenNMS ALEC"));
        assertThat(result.get("instructions").asText(), containsString("list_situations"));
        assertThat(r.has("error"), is(false));
    }

    @Test
    public void initializeAnswersWithTheServerDefaultForUnknownVersions() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":\"abc\",\"method\":\"initialize\","
                + "\"params\":{\"protocolVersion\":\"1999-01-01\"}}");
        assertThat(r.get("id").asText(), equalTo("abc"));
        assertThat(r.path("result").path("protocolVersion").asText(), equalTo(McpJsonRpcHandler.PROTOCOL_VERSION));
        assertThat(McpJsonRpcHandler.PROTOCOL_VERSION, equalTo("2025-06-18"));

        JsonNode noParams = handle("{\"jsonrpc\":\"2.0\",\"id\":2,\"method\":\"initialize\"}");
        assertThat(noParams.path("result").path("protocolVersion").asText(), equalTo("2025-06-18"));
        assertThat(McpJsonRpcHandler.isKnownVersion("2025-03-26"), is(true));
        assertThat(McpJsonRpcHandler.isKnownVersion(""), is(false));
    }

    @Test
    public void notificationsProduceNoResponse() throws Exception {
        assertThat(handle("{\"jsonrpc\":\"2.0\",\"method\":\"notifications/initialized\"}"), nullValue());
        assertThat(handle("{\"jsonrpc\":\"2.0\",\"method\":\"notifications/cancelled\",\"params\":{}}"), nullValue());
        assertThat("unknown notification is silently dropped",
                handle("{\"jsonrpc\":\"2.0\",\"method\":\"notifications/whatever\"}"), nullValue());
        assertThat("a response object sent to us is ignored",
                handle("{\"jsonrpc\":\"2.0\",\"result\":{}}"), nullValue());
        assertThat("tools/call as a notification is not executed",
                handle("{\"jsonrpc\":\"2.0\",\"method\":\"tools/call\",\"params\":{\"name\":\"echo\"}}"), nullValue());
        assertThat(echo.calls, equalTo(0));
    }

    @Test
    public void pingReturnsAnEmptyResult() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":7,\"method\":\"ping\"}");
        assertThat(r.get("id").asInt(), equalTo(7));
        assertThat(r.get("result").isObject(), is(true));
        assertThat(r.get("result").size(), equalTo(0));
    }

    @Test
    public void toolsListServesAvailableSpecsInMcpShape() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":3,\"method\":\"tools/list\"}");
        JsonNode tools = r.path("result").path("tools");
        assertThat(tools.size(), equalTo(2));
        assertThat(tools.get(0).get("name").asText(), equalTo("boom"));
        assertThat(tools.get(1).get("name").asText(), equalTo("echo"));
        assertThat(tools.get(1).get("description").asText(), equalTo("stub echo"));
        JsonNode schema = tools.get(1).get("inputSchema");
        assertThat(schema.get("type").asText(), equalTo("object"));
        assertThat(schema.path("properties").path("x").path("type").asText(), equalTo("string"));
        assertThat(schema.get("additionalProperties").asBoolean(), is(false));
        assertThat("OpenAI-only keys are absent", tools.get(1).has("function"), is(false));
    }

    @Test
    public void toolsCallReturnsTextAndStructuredContent() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":4,\"method\":\"tools/call\","
                + "\"params\":{\"name\":\"echo\",\"arguments\":{\"x\":\"hi\"}}}");
        JsonNode result = r.get("result");
        assertThat(result.get("content").size(), equalTo(1));
        assertThat(result.get("content").get(0).get("type").asText(), equalTo("text"));
        assertThat(result.get("content").get(0).get("text").asText(), equalTo("{\"got\":\"hi\"}"));
        assertThat(result.get("structuredContent").get("got").asText(), equalTo("hi"));
        assertThat(result.has("isError"), is(false));
        assertThat(echo.calls, equalTo(1));
        assertThat("counted as an external consumer", metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));
    }

    @Test
    public void toolsCallWithoutArgumentsPassesAnEmptyObject() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":4,\"method\":\"tools/call\",\"params\":{\"name\":\"echo\"}}");
        assertThat(r.path("result").path("structuredContent").path("got").asText(), equalTo(""));
        assertThat(echo.lastArgs.isObject(), is(true));
    }

    @Test
    public void toolErrorsAreResultsFlaggedIsError() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":5,\"method\":\"tools/call\","
                + "\"params\":{\"name\":\"boom\",\"arguments\":{}}}");
        assertThat("tool failures are not JSON-RPC errors", r.has("error"), is(false));
        JsonNode result = r.get("result");
        assertThat(result.get("isError").asBoolean(), is(true));
        assertThat(result.get("content").get(0).get("text").asText(), containsString("No node found for '9'"));
        assertThat(result.has("structuredContent"), is(false));

        JsonNode unknown = handle("{\"jsonrpc\":\"2.0\",\"id\":6,\"method\":\"tools/call\","
                + "\"params\":{\"name\":\"nope\"}}");
        assertThat(unknown.path("result").path("isError").asBoolean(), is(true));
        assertThat(unknown.path("result").path("content").get(0).path("text").asText(), containsString("Unknown tool"));
        assertThat(metrics.getTotalErrors(), equalTo(2L));
    }

    @Test
    public void toolsCallWithoutNameIsInvalidParams() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":8,\"method\":\"tools/call\",\"params\":{\"arguments\":{}}}");
        assertThat(r.get("id").asInt(), equalTo(8));
        assertThat(r.has("result"), is(false));
        assertThat(r.path("error").path("code").asInt(), equalTo(McpJsonRpcHandler.ERR_INVALID_PARAMS));
        assertThat(r.path("error").path("code").asInt(), equalTo(-32602));
        assertThat(r.path("error").path("message").asText(), containsString("params.name"));
    }

    @Test
    public void unknownMethodIsMethodNotFound() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":9,\"method\":\"resources/list\"}");
        assertThat(r.path("error").path("code").asInt(), equalTo(-32601));
        assertThat(r.path("error").path("message").asText(), containsString("resources/list"));
    }

    @Test
    public void missingMethodWithIdIsInvalidRequest() throws Exception {
        JsonNode r = handle("{\"jsonrpc\":\"2.0\",\"id\":10}");
        assertThat(r.path("error").path("code").asInt(), equalTo(-32600));
        assertThat(r.get("id").asInt(), equalTo(10));
    }

    @Test
    public void batchesAreAnsweredAsAnArrayWithNotificationsDropped() throws Exception {
        JsonNode r = handle("[{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"ping\"},"
                + "{\"jsonrpc\":\"2.0\",\"method\":\"notifications/initialized\"},"
                + "{\"jsonrpc\":\"2.0\",\"id\":2,\"method\":\"tools/list\"},"
                + "{\"jsonrpc\":\"2.0\",\"id\":3,\"method\":\"nope\"}]");
        assertThat(r.isArray(), is(true));
        assertThat(r.size(), equalTo(3));
        assertThat(r.get(0).get("id").asInt(), equalTo(1));
        assertThat(r.get(1).get("id").asInt(), equalTo(2));
        assertThat(r.get(1).path("result").path("tools").size(), equalTo(2));
        assertThat(r.get(2).path("error").path("code").asInt(), equalTo(-32601));
    }

    @Test
    public void allNotificationBatchProducesNoResponse() throws Exception {
        assertThat(handle("[{\"jsonrpc\":\"2.0\",\"method\":\"notifications/initialized\"},"
                + "{\"jsonrpc\":\"2.0\",\"method\":\"notifications/cancelled\"}]"), nullValue());
    }

    @Test
    public void emptyBatchIsInvalidRequest() throws Exception {
        JsonNode r = handle("[]");
        assertThat(r.path("error").path("code").asInt(), equalTo(-32600));
        assertThat(r.get("id").isNull(), is(true));
    }

    @Test
    public void nonObjectMessagesAreInvalidRequest() throws Exception {
        assertThat(handle("\"hello\"").path("error").path("code").asInt(), equalTo(-32600));
        assertThat(handle("42").path("error").path("code").asInt(), equalTo(-32600));
        assertThat(handle("null").path("error").path("code").asInt(), equalTo(-32600));
        assertThat(handler.handle(null).path("error").path("code").asInt(), equalTo(-32600));
        JsonNode inBatch = handle("[\"x\",{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"ping\"}]");
        assertThat(inBatch.size(), equalTo(2));
        assertThat(inBatch.get(0).path("error").path("code").asInt(), equalTo(-32600));
        assertThat(inBatch.get(1).has("result"), is(true));
    }

    @Test
    public void unexpectedRuntimeFailuresAreInternalErrorsWithoutDetails() throws Exception {
        registry.addTool(new StubTool("crash", args -> {
            throw new IllegalStateException("secret detail");
        }));
        // The registry turns tool RuntimeExceptions into results; a failure in the
        // handler itself (here: a registry that throws) becomes -32603.
        McpJsonRpcHandler broken = new McpJsonRpcHandler(new DefaultToolRegistry(metrics, om) {
            @Override
            public java.util.List<org.opennms.alec.mcp.ToolSpec> availableSpecs() {
                throw new IllegalStateException("secret detail");
            }
        }, om, "v");
        JsonNode r = broken.handle(om.readTree("{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/list\"}"));
        assertThat(r.path("error").path("code").asInt(), equalTo(-32603));
        assertThat(r.path("error").path("message").asText(), containsString("IllegalStateException"));
        assertThat(r.path("error").path("message").asText(), org.hamcrest.CoreMatchers.not(containsString("secret detail")));
    }

    @Test
    public void errorHelperBuildsAJsonRpcErrorWithNullId() {
        JsonNode e = handler.error(null, -32000, "denied");
        assertThat(e.get("jsonrpc").asText(), equalTo("2.0"));
        assertThat(e.get("id").isNull(), is(true));
        assertThat(e.path("error").path("code").asInt(), equalTo(-32000));
        assertThat(e.path("error").path("message").asText(), equalTo("denied"));
    }
}
