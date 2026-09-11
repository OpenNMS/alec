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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.opennms.integration.api.v1.mcp.McpToolContext;
import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.opennms.integration.api.v1.mcp.McpToolResult;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * {@link AlecTool}: the spec-derived {@link McpToolProvider} surface and the
 * {@code execute} adapter the OpenNMS MCP server drives.
 */
public class AlecToolTest {

    private final ObjectMapper om = new ObjectMapper();

    /** What the OpenNMS MCP server hands a provider: arguments plus the calling REST user. */
    private static final class StubContext implements McpToolContext {
        private final Map<String, Object> arguments;

        StubContext(Map<String, Object> arguments) {
            this.arguments = arguments;
        }

        @Override
        public Map<String, Object> getArguments() {
            return arguments;
        }

        @Override
        public String getUserName() {
            return "admin";
        }

        @Override
        public boolean isUserInRole(String role) {
            return true;
        }
    }

    private static StubContext context(Map<String, Object> args) {
        return new StubContext(args);
    }

    @Test
    public void providerSurfaceDerivesFromTheSpec() throws Exception {
        StubTool tool = StubTool.returning("alpha", "{}");
        assertThat(tool.getToolName(), equalTo("alpha"));
        assertThat(tool.getToolDescription(), equalTo("stub alpha"));
        JsonNode schema = om.readTree(tool.getInputSchema());
        assertThat(schema.isObject(), is(true));
        assertThat(schema.get("type").asText(), equalTo("object"));
        assertThat(schema.path("properties").path("x").path("type").asText(), equalTo("string"));
        assertThat(schema.get("additionalProperties").asBoolean(), is(false));
        assertThat("same schema the chat loop advertises", schema, equalTo(tool.getSpec().parametersSchema(om)));
        assertThat(tool.isWriteAccess(), is(false));
        assertThat(tool.isAvailable(), is(true));
        assertThat(tool.toString(), equalTo("StubTool[alpha]"));
    }

    @Test
    public void isAvailableDefaultsToTrueAndWriteAccessIsAlwaysFalse() {
        AlecTool minimal = new AlecTool() {
            @Override
            public ToolSpec getSpec() {
                return ToolSpec.builder("min").build();
            }

            @Override
            public JsonNode call(JsonNode arguments) {
                return null;
            }
        };
        assertThat(minimal.isAvailable(), is(true));
        assertThat(minimal.isWriteAccess(), is(false));
        assertThat(minimal.getToolDescription(), equalTo(""));
    }

    @Test
    public void executeMapsArgumentsToJsonAndReturnsTheResultAsJsonText() throws Exception {
        StubTool tool = new StubTool("alpha", args -> {
            ObjectNode out = new ObjectMapper().createObjectNode();
            out.put("echo", args.get("x").asText());
            out.put("n", args.get("n").asInt());
            out.set("nested", args.get("nested"));
            return out;
        });
        Map<String, Object> args = new HashMap<>();
        args.put("x", "hello");
        args.put("n", 42);
        args.put("nested", Collections.singletonMap("k", List.of(1, 2)));

        McpToolResult result = tool.execute(context(args));
        assertThat(result.isError(), is(false));
        assertThat(tool.calls, equalTo(1));
        assertThat(tool.lastArgs.isObject(), is(true));
        assertThat(tool.lastArgs.get("x").asText(), equalTo("hello"));
        assertThat(tool.lastArgs.get("n").asInt(), equalTo(42));
        assertThat(tool.lastArgs.path("nested").path("k").get(1).asInt(), equalTo(2));
        assertThat(result.getTextContents().size(), equalTo(1));
        JsonNode text = om.readTree(result.getTextContents().get(0));
        assertThat(text.get("echo").asText(), equalTo("hello"));
        assertThat(text.get("n").asInt(), equalTo(42));
        assertThat(text.path("nested").path("k").get(0).asInt(), equalTo(1));
    }

    @Test
    public void executeWithNullContextOrNullArgumentsPassesAnEmptyObject() {
        StubTool tool = StubTool.returning("alpha", "{\"ok\":true}");
        McpToolResult r1 = tool.execute(null);
        assertThat(r1.isError(), is(false));
        assertThat(tool.lastArgs.isObject(), is(true));
        assertThat(tool.lastArgs.size(), equalTo(0));
        assertThat(r1.getTextContents().get(0), equalTo("{\"ok\":true}"));

        McpToolResult r2 = tool.execute(context(null));
        assertThat(r2.isError(), is(false));
        assertThat(tool.lastArgs.size(), equalTo(0));
        assertThat(tool.calls, equalTo(2));
    }

    @Test
    public void executeTurnsANullResultIntoAnEmptyObject() {
        StubTool tool = new StubTool("alpha", args -> null);
        McpToolResult r = tool.execute(context(Collections.emptyMap()));
        assertThat(r.isError(), is(false));
        assertThat(r.getTextContents().get(0), equalTo("{}"));
    }

    @Test
    public void executeMapsToolExceptionToAnErrorWithItsMessage() {
        StubTool tool = new StubTool("alpha", args -> {
            throw new ToolException("No node found for '9'");
        });
        McpToolResult r = tool.execute(context(Collections.emptyMap()));
        assertThat(r.isError(), is(true));
        assertThat(r.getTextContents(), equalTo(List.of("No node found for '9'")));

        StubTool noMessage = new StubTool("alpha", args -> {
            throw new ToolException(null);
        });
        McpToolResult r2 = noMessage.execute(context(Collections.emptyMap()));
        assertThat(r2.isError(), is(true));
        assertThat(r2.getTextContents(), equalTo(List.of("tool failed")));
    }

    @Test
    public void executeMapsRuntimeExceptionToAnErrorNamingTheClassOnly() {
        StubTool tool = new StubTool("alpha", args -> {
            throw new IllegalStateException("db password is hunter2");
        });
        McpToolResult r = tool.execute(context(Collections.emptyMap()));
        assertThat(r.isError(), is(true));
        String msg = r.getTextContents().get(0);
        assertThat(msg, equalTo("Tool 'alpha' failed unexpectedly: IllegalStateException"));
        assertThat(msg, not(containsString("hunter2")));
    }

    @Test
    public void executeOnAnUnavailableToolIsAnErrorAndNeverRunsTheBody() {
        StubTool tool = StubTool.unavailable("alpha");
        McpToolResult r = tool.execute(context(Collections.singletonMap("x", "y")));
        assertThat(r.isError(), is(true));
        assertThat(r.getTextContents().get(0), containsString("Tool 'alpha' is not available"));
        assertThat(r.getTextContents().get(0), containsString("not available"));
        assertThat(tool.calls, equalTo(0));
    }

    @Test
    public void executeIsCountedAsExternalOnceBoundToARegistryWhileRegistryCallsKeepTheirConsumer() {
        McpMetrics metrics = new McpMetrics();
        DefaultToolRegistry registry = new DefaultToolRegistry(metrics, om);
        StubTool tool = StubTool.returning("alpha", "{}");

        // Unbound: nothing to count against, and no NPE.
        tool.execute(context(Collections.emptyMap()));
        assertThat(metrics.getTotalCalls(), equalTo(0L));

        registry.addTool(tool);
        tool.execute(context(Collections.emptyMap()));
        assertThat(metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(0L));
        assertThat(metrics.getTotalCalls(), equalTo(1L));
        assertThat(metrics.getTotalErrors(), equalTo(0L));

        registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode());
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(1L));
        assertThat("an in-process call is not double-counted as external",
                metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));
        assertThat(metrics.getTotalCalls(), equalTo(2L));
        assertThat(metrics.snapshot().getByTool().get("alpha"), equalTo(2L));
    }

    @Test
    public void executeErrorsAreCountedAsExternalErrors() {
        McpMetrics metrics = new McpMetrics();
        DefaultToolRegistry registry = new DefaultToolRegistry(metrics, om);
        StubTool failing = new StubTool("bad", args -> {
            throw new ToolException("nope");
        });
        StubTool unavailable = StubTool.unavailable("off");
        registry.addTool(failing);
        registry.addTool(unavailable);
        failing.execute(context(Collections.emptyMap()));
        unavailable.execute(context(Collections.emptyMap()));
        assertThat(metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(2L));
        assertThat(metrics.getTotalErrors(), equalTo(2L));
    }

    @Test
    public void internalContextRunsAsAlecWithNoRoles() {
        Map<String, Object> args = Collections.singletonMap("a", 1);
        AlecTool.InternalContext ctx = new AlecTool.InternalContext(args);
        assertThat(ctx.getArguments() == args, is(true));
        assertThat(ctx.getUserName(), equalTo("alec"));
        assertThat(ctx.isUserInRole("ROLE_ADMIN"), is(false));
        assertThat(ctx.isUserInRole("ROLE_USER"), is(false));
        assertThat(ctx.isUserInRole(null), is(false));
    }

    // --- second-review fixes: size cap and role gate on the external path ---

    @Test
    public void externalResultsAreCappedLikeInProcessOnes() throws Exception {
        StringBuilder big = new StringBuilder();
        for (int i = 0; i < ToolRegistry.MAX_RESULT_CHARS + 500; i++) {
            big.append('x');
        }
        StubTool tool = StubTool.returning("big", "{\"blob\":\"" + big + "\"}");
        McpToolResult r = tool.execute(null);
        assertThat(r.isError(), is(false));
        String text = r.getTextContents().get(0);
        assertThat(text.length() < ToolRegistry.MAX_RESULT_CHARS + 200, is(true));
        assertThat(text, containsString("[truncated: result exceeded"));
    }

    @Test
    public void requiredRolesGateExternalCallersOnly() {
        AlecTool gated = new AlecTool() {
            private final ToolSpec spec = ToolSpec.builder("gated").description("d").build();

            @Override
            public ToolSpec getSpec() {
                return spec;
            }

            @Override
            public JsonNode call(JsonNode arguments) {
                return om.createObjectNode().put("ok", true);
            }

            @Override
            protected java.util.List<String> requiredRoles() {
                return java.util.List.of("ROLE_ADMIN", "ROLE_DEVICE_CONFIG_BACKUP");
            }
        };
        McpToolResult denied = gated.execute(roleContext("ro", java.util.Set.of("ROLE_REST")));
        assertThat(denied.isError(), is(true));
        assertThat(denied.getTextContents().get(0), containsString("requires one of the roles"));
        assertThat(gated.execute(null).isError(), is(true));
        McpToolResult allowed = gated.execute(roleContext("backup", java.util.Set.of("ROLE_DEVICE_CONFIG_BACKUP")));
        assertThat(allowed.isError(), is(false));
        // The in-process path (ALEC's own model calls) is not gated.
        DefaultToolRegistry registry = new DefaultToolRegistry(new McpMetrics(), om);
        registry.addTool(gated);
        assertThat(registry.call(ToolConsumer.RCA, "gated", null).isError(), is(false));
    }

    private static McpToolContext roleContext(String user, java.util.Set<String> roles) {
        return new McpToolContext() {
            @Override
            public java.util.Map<String, Object> getArguments() {
                return java.util.Map.of();
            }

            @Override
            public String getUserName() {
                return user;
            }

            @Override
            public boolean isUserInRole(String role) {
                return roles.contains(role);
            }
        };
    }
}
