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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.McpConfigReader;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.StubTool;
import org.opennms.alec.mcp.ToolConsumer;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.integration.api.v1.mcp.McpToolContext;
import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.opennms.integration.api.v1.mcp.McpToolResult;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/** GET /alec/mcp/status: the tool inventory the configuration page renders. */
public class McpStatusRestImplTest {

    private final ObjectMapper om = new ObjectMapper();
    private McpMetrics metrics;
    private ToolRegistry registry;
    private McpConfigReader configReader;
    private OpenNmsRestClient rest;

    /** A provider from another bundle; outside OSGi FrameworkUtil cannot attribute it, so source is "other". */
    private static final class ForeignProvider implements McpToolProvider {
        private final String name;
        private final boolean write;

        ForeignProvider(String name, boolean write) {
            this.name = name;
            this.write = write;
        }

        @Override
        public String getToolName() {
            return name;
        }

        @Override
        public String getToolDescription() {
            return "foreign " + name;
        }

        @Override
        public String getInputSchema() {
            return "{\"type\":\"object\"}";
        }

        @Override
        public boolean isWriteAccess() {
            return write;
        }

        @Override
        public McpToolResult execute(McpToolContext context) {
            return McpToolResult.text("{}");
        }
    }

    @Before
    public void setUp() {
        metrics = new McpMetrics();
        registry = new DefaultToolRegistry(metrics, om);
        configReader = mock(McpConfigReader.class);
        when(configReader.read()).thenReturn(new McpConfig(true, "http://nms:8980/opennms/", "admin", "pw"));
        rest = mock(OpenNmsRestClient.class);
        when(rest.isConfigured()).thenReturn(true);
    }

    private McpStatusRestImpl impl(BundleContext bundleContext) {
        return new McpStatusRestImpl(registry, configReader, rest, bundleContext);
    }

    private static McpStatus.ToolInfo tool(McpStatus status, String name) {
        for (McpStatus.ToolInfo t : status.getTools()) {
            if (name.equals(t.getName())) {
                return t;
            }
        }
        throw new AssertionError("no tool named " + name + " in " + status.getTools());
    }

    @Test
    public void statusDescribesConfigEndpointAndEveryRegisteredTool() throws Exception {
        registry.addTool(StubTool.returning("zeta", "{}"));
        registry.addTool(StubTool.unavailable("mid"));
        registry.addTool(new ForeignProvider("foreign_read", false));
        registry.addTool(new ForeignProvider("foreign_write", true));
        registry.call(ToolConsumer.RCA, "zeta", null);
        registry.call(ToolConsumer.RCA, "missing", null);

        Response response = impl(null).status();
        assertThat(response.getStatus(), equalTo(200));
        McpStatus status = (McpStatus) response.getEntity();
        assertThat(status.isToolsEnabled(), is(true));
        assertThat(status.isOpennmsRestConfigured(), is(true));
        assertThat(status.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(status.getEndpointPath(), equalTo("/opennms/rest/mcp"));
        assertThat(McpStatus.ENDPOINT_PATH, equalTo("/opennms/rest/mcp"));
        assertThat("no BundleContext outside OSGi", status.isNativeServerInstalled(), is(false));

        List<McpStatus.ToolInfo> tools = status.getTools();
        assertThat(tools.size(), equalTo(4));
        assertThat("sorted by name", tools.get(0).getName(), equalTo("foreign_read"));
        assertThat(tools.get(1).getName(), equalTo("foreign_write"));
        assertThat(tools.get(2).getName(), equalTo("mid"));
        assertThat(tools.get(3).getName(), equalTo("zeta"));

        McpStatus.ToolInfo zeta = tool(status, "zeta");
        assertThat(zeta.getDescription(), equalTo("stub zeta"));
        assertThat(zeta.isAvailable(), is(true));
        assertThat(zeta.isWriteAccess(), is(false));
        assertThat(zeta.getSource(), equalTo("alec"));

        McpStatus.ToolInfo mid = tool(status, "mid");
        assertThat(mid.isAvailable(), is(false));
        assertThat(mid.isWriteAccess(), is(false));
        assertThat(mid.getSource(), equalTo("alec"));

        McpStatus.ToolInfo read = tool(status, "foreign_read");
        assertThat(read.getDescription(), equalTo("foreign foreign_read"));
        assertThat(read.isAvailable(), is(true));
        assertThat(read.isWriteAccess(), is(false));
        assertThat(read.getSource(), equalTo("other"));

        McpStatus.ToolInfo write = tool(status, "foreign_write");
        assertThat("write tools are listed but never available to the model", write.isAvailable(), is(false));
        assertThat(write.isWriteAccess(), is(true));
        assertThat(write.getSource(), equalTo("other"));

        McpMetrics.Snapshot stats = status.getStats();
        assertThat(stats.getToolCalls(), equalTo(2L));
        assertThat(stats.getToolErrors(), equalTo(1L));
        assertThat(stats.getByConsumer().get("rca"), equalTo(2L));

        // The wire shape the UI reads.
        JsonNode json = om.valueToTree(status);
        assertThat(json.get("endpointPath").asText(), equalTo("/opennms/rest/mcp"));
        assertThat(json.get("nativeServerInstalled").asBoolean(), is(false));
        assertThat(json.get("tools").get(3).get("name").asText(), equalTo("zeta"));
        assertThat(json.get("tools").get(3).get("available").asBoolean(), is(true));
        assertThat(json.get("tools").get(3).get("writeAccess").asBoolean(), is(false));
        assertThat(json.get("tools").get(3).get("source").asText(), equalTo("alec"));
        assertThat(json.get("tools").get(1).get("writeAccess").asBoolean(), is(true));
        assertThat(json.get("tools").get(1).get("source").asText(), equalTo("other"));
        assertThat(json.get("stats").get("toolCalls").asLong(), equalTo(2L));
        assertThat(json.get("stats").get("byTool").get("zeta").asLong(), equalTo(1L));
    }

    @Test
    public void statusWithNoToolsAndUnconfiguredRest() {
        when(configReader.read()).thenReturn(McpConfig.DISABLED);
        when(rest.isConfigured()).thenReturn(false);
        Response response = impl(null).status();
        assertThat(response.getStatus(), equalTo(200));
        McpStatus status = (McpStatus) response.getEntity();
        assertThat(status.isToolsEnabled(), is(false));
        assertThat(status.isOpennmsRestConfigured(), is(false));
        assertThat(status.getOpennmsUrl(), equalTo(McpConfig.DEFAULT_OPENNMS_URL));
        assertThat(status.getTools().isEmpty(), is(true));
        assertThat(status.getStats().getToolCalls(), equalTo(0L));
    }

    @Test
    public void nativeServerIsInstalledWhenItsBundleIsActive() {
        Bundle other = mock(Bundle.class);
        when(other.getSymbolicName()).thenReturn("org.opennms.alec.features.mcp");
        when(other.getState()).thenReturn(Bundle.ACTIVE);
        Bundle server = mock(Bundle.class);
        when(server.getSymbolicName()).thenReturn("org.opennms.integration.api.mcp-server");
        when(server.getState()).thenReturn(Bundle.ACTIVE);
        BundleContext ctx = mock(BundleContext.class);
        when(ctx.getBundles()).thenReturn(new Bundle[] {other, server});

        McpStatusRestImpl impl = impl(ctx);
        assertThat(impl.isNativeServerInstalled(), is(true));
        assertThat(McpStatusRestImpl.NATIVE_SERVER_BUNDLE, equalTo("org.opennms.integration.api.mcp-server"));
        McpStatus status = (McpStatus) impl.status().getEntity();
        assertThat(status.isNativeServerInstalled(), is(true));
    }

    @Test
    public void nativeServerIsNotInstalledWhenItsBundleIsAbsentOrNotActive() {
        Bundle resolved = mock(Bundle.class);
        when(resolved.getSymbolicName()).thenReturn("org.opennms.integration.api.mcp-server");
        when(resolved.getState()).thenReturn(Bundle.RESOLVED);
        Bundle other = mock(Bundle.class);
        when(other.getSymbolicName()).thenReturn("org.opennms.alec.features.mcp");
        when(other.getState()).thenReturn(Bundle.ACTIVE);
        BundleContext ctx = mock(BundleContext.class);
        when(ctx.getBundles()).thenReturn(new Bundle[] {resolved, other});
        assertThat("resolved but not started", impl(ctx).isNativeServerInstalled(), is(false));

        BundleContext none = mock(BundleContext.class);
        when(none.getBundles()).thenReturn(new Bundle[] {other});
        assertThat(impl(none).isNativeServerInstalled(), is(false));

        BundleContext stopping = mock(BundleContext.class);
        when(stopping.getBundles()).thenThrow(new IllegalStateException("framework stopping"));
        assertThat("a stopping framework reports not installed", impl(stopping).isNativeServerInstalled(),
                is(false));
        assertThat(((McpStatus) impl(stopping).status().getEntity()).isNativeServerInstalled(), is(false));
    }
}
