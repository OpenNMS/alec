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

package org.opennms.alec.engine.llm;

import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.alec.mcp.llm.LlmUsageMetrics;
import org.opennms.integration.api.v1.distributed.KeyValueStore;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmEngineFactory implements EngineFactory {

    // 1-hour default; overridden by EngineRestImpl when user saves config.
    public static final long DEFAULT_CLUSTER_FREQUENCY_MS = 3_600_000L;

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;
    // ALEC-308: null when the MCP bundle is absent -> clustering never offers tools.
    private final ToolRegistry toolRegistry;
    // Token-usage gauges (JMX); null when absent.
    private final LlmUsageMetrics usageMetrics;

    private long clusterFrequencyMs = DEFAULT_CLUSTER_FREQUENCY_MS;
    private String clusterPrompt = "";

    public LlmEngineFactory(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this(kvStore, objectMapper, null, null);
    }

    public LlmEngineFactory(KeyValueStore<String> kvStore, ObjectMapper objectMapper, ToolRegistry toolRegistry) {
        this(kvStore, objectMapper, toolRegistry, null);
    }

    public LlmEngineFactory(KeyValueStore<String> kvStore, ObjectMapper objectMapper, ToolRegistry toolRegistry,
                            LlmUsageMetrics usageMetrics) {
        this.kvStore = kvStore;
        this.objectMapper = objectMapper;
        this.toolRegistry = toolRegistry;
        this.usageMetrics = usageMetrics;
    }

    @Override
    public String getName() {
        return "llm";
    }

    @Override
    public String getNameConf() {
        return "llm[freq=" + clusterFrequencyMs + "ms]";
    }

    @Override
    public LlmClusterEngine createEngine(MetricRegistry metrics) {
        LlmClusterEngine engine = new LlmClusterEngine(metrics, kvStore, objectMapper, clusterPrompt, toolRegistry,
                usageMetrics);
        // Decouple the (possibly hour-long) LLM query cadence from the reconcile
        // cadence. The configured frequency throttles how often a NEW grouping is
        // requested; the engine still ticks at the faster reconcile interval so a
        // returned grouping is applied to situations — and GC/feedback processed —
        // promptly instead of lagging a full query period.
        engine.setClusterRequestIntervalMs(clusterFrequencyMs);
        engine.setTickResolutionMs(Math.min(clusterFrequencyMs, LlmClusterEngine.RECONCILE_INTERVAL_MS));
        return engine;
    }

    @Override
    public EngineFactory getEngineFactory() {
        return this;
    }

    @Override
    public String getParameters() {
        return String.format("engine: %s, clusterFrequencyMs: %d", getName(), clusterFrequencyMs);
    }

    public long getClusterFrequencyMs() {
        return clusterFrequencyMs;
    }

    public void setClusterFrequencyMs(long clusterFrequencyMs) {
        this.clusterFrequencyMs = clusterFrequencyMs;
    }

    public String getClusterPrompt() {
        return clusterPrompt;
    }

    public void setClusterPrompt(String clusterPrompt) {
        this.clusterPrompt = clusterPrompt == null ? "" : clusterPrompt;
    }
}
