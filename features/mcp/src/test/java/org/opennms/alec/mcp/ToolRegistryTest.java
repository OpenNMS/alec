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

import org.junit.Before;
import org.junit.Test;

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

        List<McpTool> all = registry.allTools();
        assertThat(all.size(), equalTo(3));
        assertThat(all.get(0).getSpec().getName(), equalTo("alpha"));
        assertThat(all.get(1).getSpec().getName(), equalTo("mid"));
        assertThat(all.get(2).getSpec().getName(), equalTo("zeta"));
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
        assertThat(s.getByTool().get("missing"), equalTo(1L));
        assertThat(registry.getMetrics() == metrics, is(true));
    }
}
