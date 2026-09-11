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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Map;

import org.junit.Test;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.Metric;

public class McpMetricsTest {

    @Test
    public void getMetricsExposesTheDocumentedGaugeNames() {
        McpMetrics m = new McpMetrics();
        Map<String, Metric> metrics = m.getMetrics();
        assertThat(metrics.size(), equalTo(7));
        for (String name : new String[] {McpMetrics.TOOL_CALLS, McpMetrics.TOOL_ERRORS,
                McpMetrics.TOOL_CALLS_RCA, McpMetrics.TOOL_CALLS_CLUSTERING, McpMetrics.TOOL_CALLS_EXTERNAL,
                McpMetrics.TOOL_CALL_RATE_1M, McpMetrics.TOOL_CALL_RATE_5M}) {
            assertThat("gauge present: " + name, metrics.containsKey(name), is(true));
            assertThat(name + " is a Gauge (the only type the JMX wildcard collects)",
                    metrics.get(name) instanceof Gauge, is(true));
            assertThat("JMX-safe name (no dots)", name.contains("."), is(false));
        }
        assertThat(McpMetrics.TOOL_CALLS, equalTo("toolCalls"));
        assertThat(McpMetrics.TOOL_ERRORS, equalTo("toolErrors"));
        assertThat(McpMetrics.TOOL_CALLS_RCA, equalTo("toolCallsRca"));
        assertThat(McpMetrics.TOOL_CALLS_CLUSTERING, equalTo("toolCallsClustering"));
        assertThat(McpMetrics.TOOL_CALLS_EXTERNAL, equalTo("toolCallsExternal"));
    }

    @Test
    public void gaugesReflectRecordedCalls() {
        McpMetrics m = new McpMetrics();
        m.recordCall(ToolConsumer.RCA, "get_node_inventory", false);
        m.recordCall(ToolConsumer.RCA, "list_node_alarms", true);
        m.recordCall(ToolConsumer.EXTERNAL, "get_node_inventory", false);
        m.recordCall(ToolConsumer.VALIDATION, "alec_status", false);

        Map<String, Metric> metrics = m.getMetrics();
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS), equalTo(4L));
        assertThat(gauge(metrics, McpMetrics.TOOL_ERRORS), equalTo(1L));
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS_RCA), equalTo(2L));
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS_CLUSTERING), equalTo(0L));
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS_EXTERNAL), equalTo(1L));
        // The gauges are live views, not copies.
        m.recordCall(ToolConsumer.CLUSTERING, "get_node_inventory", false);
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS_CLUSTERING), equalTo(1L));
        assertThat(gauge(metrics, McpMetrics.TOOL_CALLS), equalTo(5L));

        assertThat(m.getTotalCalls(), equalTo(5L));
        assertThat(m.getTotalErrors(), equalTo(1L));
        assertThat(m.getCalls(ToolConsumer.VALIDATION), equalTo(1L));
        Object rate = ((Gauge<?>) metrics.get(McpMetrics.TOOL_CALL_RATE_1M)).getValue();
        assertThat(rate instanceof Double, is(true));
    }

    @Test
    public void snapshotBreaksDownByConsumerAndTool() {
        long before = System.currentTimeMillis();
        McpMetrics m = new McpMetrics();
        m.recordCall(ToolConsumer.RCA, "get_node_inventory", false);
        m.recordCall(ToolConsumer.RCA, "get_node_inventory", true);
        m.recordCall(ToolConsumer.EXTERNAL, "list_node_alarms", false);

        McpMetrics.Snapshot s = m.snapshot();
        assertThat(s.getToolCalls(), equalTo(3L));
        assertThat(s.getToolErrors(), equalTo(1L));
        assertThat(s.getSinceMs() >= before, is(true));
        assertThat(s.getSinceMs() <= System.currentTimeMillis(), is(true));
        // every consumer key is present, keyed by its wire key
        assertThat(s.getByConsumer().size(), equalTo(ToolConsumer.values().length));
        assertThat(s.getByConsumer().get("rca"), equalTo(2L));
        assertThat(s.getByConsumer().get("external"), equalTo(1L));
        assertThat(s.getByConsumer().get("clustering"), equalTo(0L));
        assertThat(s.getByConsumer().get("validation"), equalTo(0L));
        assertThat(s.getByTool().size(), equalTo(2));
        assertThat(s.getByTool().get("get_node_inventory"), equalTo(2L));
        assertThat(s.getByTool().get("list_node_alarms"), equalTo(1L));
        assertThat(s.getRate1m() >= 0d, is(true));
        assertThat(s.getRate5m() >= 0d, is(true));

        // A snapshot is a copy: later calls don't change it.
        m.recordCall(ToolConsumer.RCA, "get_node_inventory", false);
        assertThat(s.getToolCalls(), equalTo(3L));
    }

    @Test
    public void emptySnapshotHasZeroCountsAndEveryConsumer() {
        McpMetrics.Snapshot s = new McpMetrics().snapshot();
        assertThat(s.getToolCalls(), equalTo(0L));
        assertThat(s.getToolErrors(), equalTo(0L));
        assertThat(s.getByTool().isEmpty(), is(true));
        for (ToolConsumer c : ToolConsumer.values()) {
            assertThat(s.getByConsumer().get(c.getKey()), equalTo(0L));
        }
    }

    private static long gauge(Map<String, Metric> metrics, String name) {
        return ((Number) ((Gauge<?>) metrics.get(name)).getValue()).longValue();
    }
}
