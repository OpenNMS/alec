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
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.InMemoryKVStore;
import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.KvMcpConfigReader;
import org.opennms.alec.mcp.McpConfigReader;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.StubTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.ToolRegistry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class McpRestImplTest {

    private final ObjectMapper om = new ObjectMapper();
    private InMemoryKVStore kv;
    private ToolRegistry registry;
    private boolean restConfigured = true;
    private McpRestImpl rest;
    private SecurityContext admin;
    private SecurityContext user;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        McpConfigReader reader = new KvMcpConfigReader(kv, om);
        registry = new DefaultToolRegistry(new McpMetrics(), om);
        registry.addTool(StubTool.returning("echo", "{\"a\":1}"));
        registry.addTool(StubTool.unavailable("hidden"));
        OpenNmsRestClient restClient = new OpenNmsRestClient() {
            @Override
            public boolean isConfigured() {
                return restConfigured;
            }

            @Override
            public JsonNode get(String pathWithQuery) throws ToolException {
                throw new ToolException("not in this test");
            }

            @Override
            public JsonNode post(String path, JsonNode body) throws ToolException {
                throw new ToolException("not in this test");
            }

            @Override
            public String checkConnectivity(McpConfig config) {
                return "OK: stub";
            }
        };
        rest = new McpRestImpl(registry, reader, restClient, om, "1.2.3");
        admin = mock(SecurityContext.class);
        when(admin.isUserInRole("ROLE_ADMIN")).thenReturn(true);
        user = mock(SecurityContext.class);
        when(user.isUserInRole("ROLE_ADMIN")).thenReturn(false);
    }

    private static final String PING = "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"ping\"}";

    @Test
    public void rpcRequiresTheAdminRole() {
        Response denied = rest.rpc(PING, user);
        assertThat(denied.getStatus(), equalTo(403));
        JsonNode body = (JsonNode) denied.getEntity();
        assertThat("the 403 body is a JSON-RPC error object", body.get("jsonrpc").asText(), equalTo("2.0"));
        assertThat(body.path("error").path("code").asInt(), equalTo(-32000));
        assertThat(body.path("error").path("message").asText(), containsString("ADMIN"));
        assertThat(body.get("id").isNull(), is(true));

        Response ok = rest.rpc(PING, admin);
        assertThat(ok.getStatus(), equalTo(200));
        JsonNode result = (JsonNode) ok.getEntity();
        assertThat(result.get("id").asInt(), equalTo(1));
        assertThat(result.get("result").isObject(), is(true));
        assertThat(McpRestImpl.REQUIRED_ROLE, equalTo("ROLE_ADMIN"));
    }

    @Test
    public void missingOrBrokenSecurityContextIsDenied() {
        assertThat(rest.rpc(PING, null).getStatus(), equalTo(403));
        SecurityContext broken = mock(SecurityContext.class);
        when(broken.isUserInRole("ROLE_ADMIN")).thenThrow(new IllegalStateException("no session"));
        assertThat(rest.rpc(PING, broken).getStatus(), equalTo(403));
        assertThat(McpRestImpl.isAdmin(null), is(false));
        assertThat(McpRestImpl.isAdmin(admin), is(true));
    }

    @Test
    public void parseErrorIsA200WithAJsonRpcParseError() {
        Response r = rest.rpc("{not json", admin);
        assertThat(r.getStatus(), equalTo(200));
        JsonNode body = (JsonNode) r.getEntity();
        assertThat(body.path("error").path("code").asInt(), equalTo(-32700));
        assertThat(body.path("error").path("message").asText(), equalTo("Parse error"));
        assertThat(body.get("id").isNull(), is(true));
    }

    @Test
    public void emptyBodyIsAnswered200WithAnError() {
        Response r = rest.rpc(null, admin);
        assertThat(r.getStatus(), equalTo(200));
        assertThat(((JsonNode) r.getEntity()).has("error"), is(true));
        Response blank = rest.rpc("", admin);
        assertThat(blank.getStatus(), equalTo(200));
        assertThat(((JsonNode) blank.getEntity()).has("error"), is(true));
    }

    @Test
    public void notificationIsAccepted() {
        Response r = rest.rpc("{\"jsonrpc\":\"2.0\",\"method\":\"notifications/initialized\"}", admin);
        assertThat(r.getStatus(), equalTo(202));
        assertThat(r.getEntity(), nullValue());
    }

    @Test
    public void toolsCallGoesThroughTheRegistry() {
        Response r = rest.rpc("{\"jsonrpc\":\"2.0\",\"id\":5,\"method\":\"tools/call\","
                + "\"params\":{\"name\":\"echo\",\"arguments\":{}}}", admin);
        assertThat(r.getStatus(), equalTo(200));
        JsonNode body = (JsonNode) r.getEntity();
        assertThat(body.path("result").path("structuredContent").path("a").asInt(), equalTo(1));
        assertThat(registry.getMetrics().getTotalCalls(), equalTo(1L));
    }

    @Test
    public void batchIsAnsweredAsAnArray() {
        Response r = rest.rpc("[" + PING + ",{\"jsonrpc\":\"2.0\",\"id\":2,\"method\":\"tools/list\"}]", admin);
        assertThat(r.getStatus(), equalTo(200));
        JsonNode body = (JsonNode) r.getEntity();
        assertThat(body.isArray(), is(true));
        assertThat(body.size(), equalTo(2));
        assertThat(body.get(1).path("result").path("tools").size(), equalTo(1));
    }

    @Test
    public void streamIsMethodNotAllowedWithAllowHeader() {
        Response r = rest.stream();
        assertThat(r.getStatus(), equalTo(405));
        assertThat(r.getHeaderString("Allow"), equalTo("POST, DELETE"));
    }

    @Test
    public void endSessionIsANoOp() {
        assertThat(rest.endSession().getStatus(), equalTo(200));
    }

    @Test
    public void statusReportsConfigToolsAndStats() throws Exception {
        kv.put("LLM_CONFIG",
                "{\"toolsEnabled\":true,\"opennmsUrl\":\"http://nms:8980/opennms/\","
                        + "\"opennmsUsername\":\"admin\",\"opennmsPassword\":\"pw\"}",
                "ALEC_CONFIG");
        rest.rpc("{\"jsonrpc\":\"2.0\",\"id\":5,\"method\":\"tools/call\",\"params\":{\"name\":\"echo\"}}", admin);
        rest.rpc("{\"jsonrpc\":\"2.0\",\"id\":6,\"method\":\"tools/call\",\"params\":{\"name\":\"nope\"}}", admin);

        Response r = rest.status();
        assertThat(r.getStatus(), equalTo(200));
        McpStatus status = (McpStatus) r.getEntity();
        assertThat(status.isToolsEnabled(), is(true));
        assertThat(status.isOpennmsRestConfigured(), is(true));
        assertThat(status.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(status.getEndpointPath(), equalTo("/opennms/rest/alec/mcp"));
        assertThat("every registered tool is listed, available or not", status.getTools().size(), equalTo(2));
        assertThat(status.getTools().get(0).getName(), equalTo("echo"));
        assertThat(status.getTools().get(0).getDescription(), equalTo("stub echo"));
        assertThat(status.getTools().get(0).isAvailable(), is(true));
        assertThat(status.getTools().get(1).getName(), equalTo("hidden"));
        assertThat(status.getTools().get(1).isAvailable(), is(false));
        assertThat(status.getStats().getToolCalls(), equalTo(2L));
        assertThat(status.getStats().getToolErrors(), equalTo(1L));
        assertThat(status.getStats().getByConsumer().get("external"), equalTo(2L));
        assertThat(status.getStats().getByTool().get("echo"), equalTo(1L));

        // Jackson-friendly: serializes without the password and with the documented keys.
        String json = om.writeValueAsString(status);
        assertThat(json, containsString("\"toolsEnabled\":true"));
        assertThat(json, containsString("\"opennmsRestConfigured\":true"));
        assertThat(json, containsString("\"endpointPath\":\"/opennms/rest/alec/mcp\""));
        assertThat(json, containsString("\"byConsumer\""));
        assertThat(json, org.hamcrest.CoreMatchers.not(containsString("pw")));
    }

    @Test
    public void statusWithoutConfigReportsDefaults() {
        restConfigured = false;
        McpStatus status = (McpStatus) rest.status().getEntity();
        assertThat(status.isToolsEnabled(), is(false));
        assertThat(status.isOpennmsRestConfigured(), is(false));
        assertThat(status.getOpennmsUrl(), equalTo(McpConfig.DEFAULT_OPENNMS_URL));
        assertThat(status.getStats().getToolCalls(), equalTo(0L));
    }
}
