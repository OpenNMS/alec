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

import java.util.Collections;
import java.util.EnumMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.LongAdder;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.Meter;
import com.codahale.metrics.Metric;
import com.codahale.metrics.MetricSet;

/**
 * Usage counters for the tool registry, exposed two ways:
 *
 * <ul>
 * <li>as a Dropwizard {@link MetricSet} of gauges. The ALEC driver folds every
 * {@code MetricSet} OSGi service into its own registry, which it reports over
 * JMX in the {@code org.opennms.alec.driver.main.Driver.&lt;engine&gt;} domain —
 * the domain OpenNMS's stock {@code jmx-datacollection-config.xml} already
 * collects with a {@code name=*,type=gauges} wildcard and charts as "ALEC
 * Graph Stats". So the tool-call counts are charted next to the engine's
 * vertex/edge/situation counts with no OpenNMS-side change. Gauges (not
 * counters/meters) because that wildcard only matches the gauges type.</li>
 * <li>as a {@link #snapshot()} for the configuration page.</li>
 * </ul>
 *
 * <p>Names are camel-cased with no dots because the JMX collector turns the
 * mbean {@code name} into a resource instance / RRD file name.
 */
public class McpMetrics implements MetricSet {

    public static final String TOOL_CALLS = "toolCalls";
    public static final String TOOL_ERRORS = "toolErrors";
    public static final String TOOL_CALLS_RCA = "toolCallsRca";
    public static final String TOOL_CALLS_CLUSTERING = "toolCallsClustering";
    public static final String TOOL_CALLS_EXTERNAL = "toolCallsExternal";
    public static final String TOOL_CALL_RATE_1M = "toolCallRate1m";
    public static final String TOOL_CALL_RATE_5M = "toolCallRate5m";
    /** Per-tool bucket used for calls to names that are not registered. */
    public static final String UNKNOWN_TOOL = "(unknown)";

    private final long startedAt = System.currentTimeMillis();
    private final Meter calls = new Meter();
    private final LongAdder errors = new LongAdder();
    private final Map<ToolConsumer, LongAdder> byConsumer = new EnumMap<>(ToolConsumer.class);
    private final Map<String, LongAdder> byTool = new ConcurrentHashMap<>();

    public McpMetrics() {
        for (ToolConsumer c : ToolConsumer.values()) {
            byConsumer.put(c, new LongAdder());
        }
    }

    void recordCall(ToolConsumer consumer, String toolName, boolean error) {
        calls.mark();
        byConsumer.get(consumer).increment();
        byTool.computeIfAbsent(toolName, k -> new LongAdder()).increment();
        if (error) {
            errors.increment();
        }
    }

    public long getTotalCalls() {
        return calls.getCount();
    }

    public long getTotalErrors() {
        return errors.sum();
    }

    public long getCalls(ToolConsumer consumer) {
        return byConsumer.get(consumer).sum();
    }

    @Override
    public Map<String, Metric> getMetrics() {
        Map<String, Metric> m = new LinkedHashMap<>();
        m.put(TOOL_CALLS, (Gauge<Long>) calls::getCount);
        m.put(TOOL_ERRORS, (Gauge<Long>) errors::sum);
        m.put(TOOL_CALLS_RCA, (Gauge<Long>) () -> getCalls(ToolConsumer.RCA));
        m.put(TOOL_CALLS_CLUSTERING, (Gauge<Long>) () -> getCalls(ToolConsumer.CLUSTERING));
        m.put(TOOL_CALLS_EXTERNAL, (Gauge<Long>) () -> getCalls(ToolConsumer.EXTERNAL));
        m.put(TOOL_CALL_RATE_1M, (Gauge<Double>) calls::getOneMinuteRate);
        m.put(TOOL_CALL_RATE_5M, (Gauge<Double>) calls::getFiveMinuteRate);
        return Collections.unmodifiableMap(m);
    }

    /** Point-in-time copy for the REST status endpoint. */
    public Snapshot snapshot() {
        Map<String, Long> consumers = new LinkedHashMap<>();
        for (ToolConsumer c : ToolConsumer.values()) {
            consumers.put(c.getKey(), byConsumer.get(c).sum());
        }
        Map<String, Long> tools = new TreeMap<>();
        byTool.forEach((k, v) -> tools.put(k, v.sum()));
        return new Snapshot(startedAt, calls.getCount(), errors.sum(),
                calls.getOneMinuteRate(), calls.getFiveMinuteRate(), consumers, tools);
    }

    /** Jackson-friendly immutable view. */
    public static final class Snapshot {
        private final long sinceMs;
        private final long toolCalls;
        private final long toolErrors;
        private final double rate1m;
        private final double rate5m;
        private final Map<String, Long> byConsumer;
        private final Map<String, Long> byTool;

        Snapshot(long sinceMs, long toolCalls, long toolErrors, double rate1m, double rate5m,
                 Map<String, Long> byConsumer, Map<String, Long> byTool) {
            this.sinceMs = sinceMs;
            this.toolCalls = toolCalls;
            this.toolErrors = toolErrors;
            this.rate1m = rate1m;
            this.rate5m = rate5m;
            this.byConsumer = Collections.unmodifiableMap(byConsumer);
            this.byTool = Collections.unmodifiableMap(byTool);
        }

        /** Epoch millis the counters started (they reset when the bundle restarts). */
        public long getSinceMs() {
            return sinceMs;
        }

        public long getToolCalls() {
            return toolCalls;
        }

        public long getToolErrors() {
            return toolErrors;
        }

        public double getRate1m() {
            return rate1m;
        }

        public double getRate5m() {
            return rate5m;
        }

        public Map<String, Long> getByConsumer() {
            return byConsumer;
        }

        public Map<String, Long> getByTool() {
            return byTool;
        }
    }
}
