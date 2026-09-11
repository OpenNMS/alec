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

import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.mcp.McpToolContext;
import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.opennms.integration.api.v1.mcp.McpToolResult;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ToolRegistryTest {

    private final ObjectMapper om = new ObjectMapper();
    private McpMetrics metrics;
    private ToolRegistry registry;

    @Before
    public void setUp() {
        metrics = new McpMetrics();
        registry = new DefaultToolRegistry(metrics, om);
    }

    @Test
    public void addRemoveAndFind() {
        assertThat(registry.isEmpty(), is(true));
        StubTool a = StubTool.returning("alpha", "{}");
        registry.addTool(a);
        registry.addTool(null); // ignored
        assertThat(registry.isEmpty(), is(false));
        assertThat(registry.find("alpha").isPresent(), is(true));
        assertThat(registry.find("alpha").get() == a, is(true));
        assertThat(registry.find("nope").isPresent(), is(false));
        assertThat(registry.find(null).isPresent(), is(false));

        registry.removeTool(a);
        registry.removeTool(null); // ignored
        assertThat(registry.find("alpha").isPresent(), is(false));
        assertThat(registry.isEmpty(), is(true));
    }

    @Test
    public void removeIgnoresADifferentInstanceWithTheSameName() {
        StubTool first = StubTool.returning("alpha", "{}");
        StubTool second = StubTool.returning("alpha", "{}");
        registry.addTool(first);
        registry.addTool(second); // later registration wins
        registry.removeTool(first); // stale unbind must not remove the winner
        assertThat(registry.find("alpha").get() == second, is(true));
    }

    @Test
    public void availableSpecsAreSortedByNameAndFilteredByAvailability() {
        registry.addTool(StubTool.returning("zeta", "{}"));
        registry.addTool(StubTool.unavailable("mid"));
        registry.addTool(StubTool.returning("alpha", "{}"));
        List<ToolSpec> specs = registry.availableSpecs();
        assertThat(specs.size(), equalTo(2));
        assertThat(specs.get(0).getName(), equalTo("alpha"));
        assertThat(specs.get(1).getName(), equalTo("zeta"));

        List<McpToolProvider> all = registry.allTools();
        assertThat(all.size(), equalTo(3));
        assertThat(all.get(0).getToolName(), equalTo("alpha"));
        assertThat(all.get(1).getToolName(), equalTo("mid"));
        assertThat(all.get(2).getToolName(), equalTo("zeta"));
    }

    @Test
    public void callSucceedsWithSerializedText() {
        StubTool t = StubTool.returning("alpha", "{\"a\":1}");
        registry.addTool(t);
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode().put("x", "y"));
        assertThat(r.isError(), is(false));
        assertThat(r.getContent().get("a").asInt(), equalTo(1));
        assertThat(r.getText(), equalTo("{\"a\":1}"));
        assertThat(t.lastArgs.get("x").asText(), equalTo("y"));
        assertThat(metrics.getTotalCalls(), equalTo(1L));
        assertThat(metrics.getTotalErrors(), equalTo(0L));
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(1L));
    }

    @Test
    public void nullArgumentsBecomeAnEmptyObjectAndNullContentBecomesEmptyObject() {
        StubTool t = new StubTool("alpha", args -> null);
        registry.addTool(t);
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", null);
        assertThat(r.isError(), is(false));
        assertThat(t.lastArgs.isObject(), is(true));
        assertThat(r.getText(), equalTo("{}"));
    }

    @Test
    public void unknownToolReturnsErrorListingAvailableTools() {
        registry.addTool(StubTool.returning("beta", "{}"));
        registry.addTool(StubTool.returning("alpha", "{}"));
        registry.addTool(StubTool.unavailable("hidden"));
        ToolResult r = registry.call(ToolConsumer.EXTERNAL, "nope", om.createObjectNode());
        assertThat(r.isError(), is(true));
        String msg = r.getContent().get("error").asText();
        assertThat(msg, containsString("Unknown tool 'nope'"));
        assertThat(msg, containsString("alpha, beta"));
        assertThat(msg, not(containsString("hidden")));
        assertThat(r.getText(), containsString("\"error\""));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));
    }

    @Test
    public void nullNameIsTreatedAsUnknown() {
        ToolResult r = registry.call(ToolConsumer.EXTERNAL, null, null);
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), containsString("Unknown tool ''"));
    }

    @Test
    public void unavailableToolReturnsError() {
        StubTool t = StubTool.unavailable("alpha");
        registry.addTool(t);
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode());
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), containsString("not available"));
        assertThat("the tool body was never invoked", t.calls, equalTo(0));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
    }

    @Test
    public void toolExceptionMessageIsRelayed() {
        registry.addTool(new StubTool("alpha", args -> {
            throw new ToolException("No node found for '9'");
        }));
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode());
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), equalTo("No node found for '9'"));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
    }

    @Test
    public void runtimeExceptionBecomesGenericErrorNamingTheExceptionClass() {
        registry.addTool(new StubTool("alpha", args -> {
            throw new IllegalStateException("db password is hunter2");
        }));
        ToolResult r = registry.call(ToolConsumer.CLUSTERING, "alpha", om.createObjectNode());
        assertThat(r.isError(), is(true));
        String msg = r.getContent().get("error").asText();
        assertThat(msg, containsString("Tool 'alpha' failed unexpectedly: IllegalStateException"));
        assertThat("internal message never reaches the model", msg, not(containsString("hunter2")));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.CLUSTERING), equalTo(1L));
    }

    @Test
    public void nonObjectArgumentsAreRejected() {
        StubTool t = StubTool.returning("alpha", "{}");
        registry.addTool(t);
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.getNodeFactory().textNode("not json"));
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), containsString("must be a JSON object"));
        assertThat(t.calls, equalTo(0));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
    }

    @Test
    public void oversizedResultsAreTruncatedWithAMarker() {
        StringBuilder big = new StringBuilder();
        for (int i = 0; i < ToolRegistry.MAX_RESULT_CHARS + 500; i++) {
            big.append('x');
        }
        registry.addTool(new StubTool("alpha", args -> {
            ObjectNode n = om.createObjectNode();
            n.put("blob", big.toString());
            return n;
        }));
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode());
        assertThat(r.isError(), is(false));
        String text = r.getText();
        String marker = "\n...[truncated: result exceeded " + ToolRegistry.MAX_RESULT_CHARS
                + " characters; narrow the request]";
        assertThat(text.endsWith(marker), is(true));
        assertThat(text.length(), equalTo(ToolRegistry.MAX_RESULT_CHARS + marker.length()));
        assertThat("the structured content is not truncated",
                r.getContent().get("blob").asText().length(), equalTo(ToolRegistry.MAX_RESULT_CHARS + 500));
    }

    @Test
    public void resultsAtTheLimitAreNotTruncated() {
        StringBuilder exact = new StringBuilder();
        // {"b":"..."} is 8 characters of framing
        for (int i = 0; i < ToolRegistry.MAX_RESULT_CHARS - 8; i++) {
            exact.append('y');
        }
        registry.addTool(new StubTool("alpha", args -> om.createObjectNode().put("b", exact.toString())));
        ToolResult r = registry.call(ToolConsumer.RCA, "alpha", om.createObjectNode());
        assertThat(r.getText().length(), equalTo(ToolRegistry.MAX_RESULT_CHARS));
        assertThat(r.getText(), not(containsString("truncated")));
    }

    @Test
    public void metricsAreCountedPerConsumerAndErrors() {
        registry.addTool(StubTool.returning("ok", "{}"));
        registry.call(ToolConsumer.RCA, "ok", null);
        registry.call(ToolConsumer.RCA, "ok", null);
        registry.call(ToolConsumer.CLUSTERING, "ok", null);
        registry.call(ToolConsumer.EXTERNAL, "missing", null);
        registry.call(ToolConsumer.VALIDATION, "ok", null);

        assertThat(metrics.getTotalCalls(), equalTo(5L));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(2L));
        assertThat(metrics.getCalls(ToolConsumer.CLUSTERING), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.VALIDATION), equalTo(1L));
        McpMetrics.Snapshot s = metrics.snapshot();
        assertThat(s.getByTool().get("ok"), equalTo(4L));
        // Unknown names share one bucket so hallucinated tool names cannot grow the map without bound.
        assertThat(s.getByTool().get("missing"), org.hamcrest.CoreMatchers.nullValue());
        assertThat(s.getByTool().get(McpMetrics.UNKNOWN_TOOL), equalTo(1L));
        assertThat(registry.getMetrics() == metrics, is(true));
    }

    // -------------------------------------------------------------------------
    // Providers contributed by other bundles (plain McpToolProvider, not AlecTool)
    // -------------------------------------------------------------------------

    private static final String FOREIGN_SCHEMA =
            "{\"type\":\"object\",\"properties\":{\"q\":{\"type\":\"string\"}},\"required\":[\"q\"]}";

    /** A scripted provider from "another bundle": map in, text out, no ALEC base class. */
    private static class ForeignProvider implements McpToolProvider {
        private final String name;
        private final String schema;
        private final boolean write;
        private final java.util.function.Function<McpToolContext, McpToolResult> body;
        McpToolContext lastContext;
        int calls;

        ForeignProvider(String name, String schema, boolean write,
                        java.util.function.Function<McpToolContext, McpToolResult> body) {
            this.name = name;
            this.schema = schema;
            this.write = write;
            this.body = body;
        }

        static ForeignProvider returning(String name, String text) {
            return new ForeignProvider(name, FOREIGN_SCHEMA, false, ctx -> McpToolResult.text(text));
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
            return schema;
        }

        @Override
        public boolean isWriteAccess() {
            return write;
        }

        @Override
        public McpToolResult execute(McpToolContext context) {
            calls++;
            lastContext = context;
            return body.apply(context);
        }
    }

    @Test
    public void foreignProviderIsListedWithItsExactSchema() throws Exception {
        registry.addTool(ForeignProvider.returning("foreign", "{}"));
        List<ToolSpec> specs = registry.availableSpecs();
        assertThat(specs.size(), equalTo(1));
        ToolSpec spec = specs.get(0);
        assertThat(spec.getName(), equalTo("foreign"));
        assertThat(spec.getDescription(), equalTo("foreign foreign"));
        assertThat("the declared schema is passed through verbatim (no additionalProperties injected)",
                spec.parametersSchema(om), equalTo(om.readTree(FOREIGN_SCHEMA)));
        assertThat(spec.toOpenAiTool(om).path("function").path("parameters"), equalTo(om.readTree(FOREIGN_SCHEMA)));
        assertThat(registry.findSpec("foreign").isPresent(), is(true));
        assertThat(registry.findSpec("foreign").get().parametersSchema(om), equalTo(om.readTree(FOREIGN_SCHEMA)));
    }

    @Test
    public void foreignProviderIsCalledThroughExecuteWithMapArgumentsAndInternalContext() {
        ForeignProvider p = ForeignProvider.returning("foreign", "{\"hits\":[1,2]}");
        registry.addTool(p);
        ObjectNode args = om.createObjectNode().put("q", "abc").put("n", 7);
        args.putArray("list").add("x");
        ToolResult r = registry.call(ToolConsumer.RCA, "foreign", args);
        assertThat(r.isError(), is(false));
        assertThat(p.calls, equalTo(1));
        Map<String, Object> received = p.lastContext.getArguments();
        assertThat(received.get("q"), equalTo("abc"));
        assertThat(received.get("n"), equalTo(7));
        assertThat(received.get("list"), equalTo(List.of("x")));
        assertThat("the registry's in-process context is used", p.lastContext instanceof AlecTool.InternalContext,
                is(true));
        assertThat(p.lastContext.getUserName(), equalTo("alec"));
        assertThat(p.lastContext.isUserInRole("ROLE_ADMIN"), is(false));
        assertThat(p.lastContext.isUserInRole("ROLE_USER"), is(false));
        assertThat(p.lastContext.isUserInRole(null), is(false));
        // JSON text is parsed into structured content
        assertThat(r.getContent().get("hits").isArray(), is(true));
        assertThat(r.getContent().get("hits").get(1).asInt(), equalTo(2));
        assertThat(r.getText(), equalTo("{\"hits\":[1,2]}"));
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(1L));
        assertThat(metrics.getTotalErrors(), equalTo(0L));
    }

    @Test
    public void foreignProviderNonJsonTextBecomesATextNode() {
        registry.addTool(ForeignProvider.returning("foreign", "plain words, not json"));
        ToolResult r = registry.call(ToolConsumer.RCA, "foreign", om.createObjectNode());
        assertThat(r.isError(), is(false));
        assertThat(r.getContent().isTextual(), is(true));
        assertThat(r.getContent().asText(), equalTo("plain words, not json"));
        assertThat(r.getText(), equalTo("plain words, not json"));
    }

    @Test
    public void foreignProviderErrorResultBecomesAnErrorToolResult() {
        registry.addTool(new ForeignProvider("foreign", FOREIGN_SCHEMA, false,
                ctx -> McpToolResult.error("upstream said no")));
        ToolResult r = registry.call(ToolConsumer.CLUSTERING, "foreign", om.createObjectNode());
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), equalTo("upstream said no"));
        assertThat(r.getText(), containsString("upstream said no"));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.CLUSTERING), equalTo(1L));
    }

    @Test
    public void foreignProviderNullResultIsAnError() {
        registry.addTool(new ForeignProvider("foreign", FOREIGN_SCHEMA, false, ctx -> null));
        ToolResult r = registry.call(ToolConsumer.RCA, "foreign", om.createObjectNode());
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), containsString("returned no result"));
    }

    @Test
    public void foreignProviderRuntimeExceptionBecomesGenericError() {
        registry.addTool(new ForeignProvider("foreign", FOREIGN_SCHEMA, false, ctx -> {
            throw new IllegalArgumentException("secret detail");
        }));
        ToolResult r = registry.call(ToolConsumer.RCA, "foreign", om.createObjectNode());
        assertThat(r.isError(), is(true));
        String msg = r.getContent().get("error").asText();
        assertThat(msg, containsString("Tool 'foreign' failed unexpectedly: IllegalArgumentException"));
        assertThat(msg, not(containsString("secret detail")));
    }

    @Test
    public void writeProviderIsNeverOfferedNorCallable() {
        ForeignProvider w = new ForeignProvider("writer", FOREIGN_SCHEMA, true, ctx -> McpToolResult.text("{}"));
        registry.addTool(w);
        registry.addTool(ForeignProvider.returning("reader", "{}"));
        assertThat(registry.isAvailable(w), is(false));
        List<ToolSpec> specs = registry.availableSpecs();
        assertThat(specs.size(), equalTo(1));
        assertThat(specs.get(0).getName(), equalTo("reader"));
        assertThat("still visible to the status page", registry.allTools().size(), equalTo(2));
        assertThat(registry.find("writer").isPresent(), is(true));

        ToolResult r = registry.call(ToolConsumer.RCA, "writer", om.createObjectNode());
        assertThat(r.isError(), is(true));
        assertThat(r.getContent().get("error").asText(), containsString("not available"));
        assertThat("execute was never reached", w.calls, equalTo(0));
        assertThat(metrics.getTotalErrors(), equalTo(1L));
    }

    @Test
    public void providerWhoseIsWriteAccessThrowsIsTreatedAsUnavailable() {
        ForeignProvider p = new ForeignProvider("flaky", FOREIGN_SCHEMA, false, ctx -> McpToolResult.text("{}")) {
            @Override
            public boolean isWriteAccess() {
                throw new IllegalStateException("boom");
            }
        };
        registry.addTool(p);
        assertThat(registry.isAvailable(p), is(false));
        assertThat(registry.availableSpecs().isEmpty(), is(true));
        assertThat(registry.call(ToolConsumer.RCA, "flaky", null).isError(), is(true));
    }

    @Test
    public void providerWithUnparseableSchemaIsRegisteredButNotOffered() {
        registry.addTool(ForeignProvider.returning("good", "{}"));
        registry.addTool(new ForeignProvider("broken", "{not json", false, ctx -> McpToolResult.text("{}")));
        registry.addTool(new ForeignProvider("array", "[1,2]", false, ctx -> McpToolResult.text("{}")));
        registry.addTool(new ForeignProvider("nullSchema", null, false, ctx -> McpToolResult.text("{}")));

        List<ToolSpec> specs = registry.availableSpecs();
        assertThat(specs.size(), equalTo(1));
        assertThat(specs.get(0).getName(), equalTo("good"));
        assertThat(registry.findSpec("broken").isPresent(), is(false));
        assertThat(registry.findSpec("array").isPresent(), is(false));
        assertThat(registry.findSpec("nullSchema").isPresent(), is(false));
        assertThat(registry.findSpec("good").isPresent(), is(true));

        List<McpToolProvider> all = registry.allTools();
        assertThat(all.size(), equalTo(4));
        assertThat(all.get(0).getToolName(), equalTo("array"));
        assertThat(all.get(1).getToolName(), equalTo("broken"));
        assertThat(all.get(2).getToolName(), equalTo("good"));
        assertThat(all.get(3).getToolName(), equalTo("nullSchema"));
        assertThat(registry.find("broken").isPresent(), is(true));
    }

    @Test
    public void findSpecWorksForAlecToolsAndIsEmptyForUnknownNames() {
        StubTool t = StubTool.returning("alpha", "{}");
        registry.addTool(t);
        assertThat(registry.findSpec("alpha").isPresent(), is(true));
        assertThat(registry.findSpec("alpha").get() == t.getSpec(), is(true));
        assertThat(registry.findSpec("alpha").get().parametersSchema(om).path("properties").has("x"), is(true));
        assertThat(registry.findSpec("nope").isPresent(), is(false));
        assertThat(registry.findSpec(null).isPresent(), is(false));
    }

    @Test
    public void providerWithBlankOrThrowingNameIsIgnored() {
        registry.addTool(new ForeignProvider("   ", FOREIGN_SCHEMA, false, ctx -> McpToolResult.text("{}")));
        registry.addTool(new ForeignProvider(null, FOREIGN_SCHEMA, false, ctx -> McpToolResult.text("{}")));
        registry.addTool(new ForeignProvider("x", FOREIGN_SCHEMA, false, ctx -> McpToolResult.text("{}")) {
            @Override
            public String getToolName() {
                throw new IllegalStateException("no name for you");
            }
        });
        assertThat(registry.isEmpty(), is(true));
        assertThat(registry.allTools().isEmpty(), is(true));
        assertThat(registry.availableSpecs().isEmpty(), is(true));
        assertThat(registry.find("").isPresent(), is(false));
    }

    @Test
    public void unknownToolMessageListsForeignAndAlecToolsButNotWriteOrBrokenOnes() {
        registry.addTool(StubTool.returning("alpha", "{}"));
        registry.addTool(ForeignProvider.returning("foreign", "{}"));
        registry.addTool(new ForeignProvider("writer", FOREIGN_SCHEMA, true, ctx -> McpToolResult.text("{}")));
        registry.addTool(new ForeignProvider("broken", "nope", false, ctx -> McpToolResult.text("{}")));
        ToolResult r = registry.call(ToolConsumer.RCA, "missing", null);
        String msg = r.getContent().get("error").asText();
        assertThat(msg, containsString("alpha, foreign"));
        assertThat(msg, not(containsString("writer")));
        assertThat(msg, not(containsString("broken")));
    }

    @Test
    @SuppressWarnings("unchecked")
    public void bindsTheRealServiceObjectByReferenceAndReleasesItOnUnbind() {
        org.osgi.framework.BundleContext ctx = org.mockito.Mockito.mock(org.osgi.framework.BundleContext.class);
        org.osgi.framework.ServiceReference<McpToolProvider> ref = org.mockito.Mockito.mock(org.osgi.framework.ServiceReference.class);
        StubTool real = StubTool.returning("bound", "{}");
        org.mockito.Mockito.when(ctx.getService(ref)).thenReturn(real);
        DefaultToolRegistry byRef = new DefaultToolRegistry(metrics, om, ctx);

        byRef.bindTool(ref);
        assertThat(byRef.find("bound").isPresent(), is(true));
        assertThat("the real object, not a proxy, so the AlecTool fast path applies",
                byRef.find("bound").get() == real, is(true));
        // External calls on the bound object are counted from now on.
        real.execute(null);
        assertThat(metrics.getCalls(ToolConsumer.EXTERNAL), equalTo(1L));

        byRef.unbindTool(ref);
        assertThat(byRef.find("bound").isPresent(), is(false));
        org.mockito.Mockito.verify(ctx).ungetService(ref);
        // Unknown references and a missing context are tolerated.
        byRef.unbindTool(ref);
        new DefaultToolRegistry(metrics, om).bindTool(ref);
    }
}
