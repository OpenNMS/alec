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

package org.opennms.alec.engine.api.llm;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.hasItems;
import static org.junit.Assert.assertThat;

import java.util.Map;

import org.junit.Test;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.Metric;

public class DefaultLlmUsageMetricsTest {

    @Test
    public void exposesAllGaugesWithTheDocumentedNames() {
        Map<String, Metric> m = new DefaultLlmUsageMetrics().getMetrics();
        assertThat(m.size(), equalTo(14));
        assertThat(m.keySet(), hasItems(
                DefaultLlmUsageMetrics.TOKENS, DefaultLlmUsageMetrics.INPUT_TOKENS,
                DefaultLlmUsageMetrics.OUTPUT_TOKENS, DefaultLlmUsageMetrics.CACHE_READ_TOKENS,
                DefaultLlmUsageMetrics.CACHE_CREATION_TOKENS, DefaultLlmUsageMetrics.CALLS,
                DefaultLlmUsageMetrics.FAILED_CALLS, DefaultLlmUsageMetrics.TOKENS_RCA,
                DefaultLlmUsageMetrics.TOKENS_CLUSTERING, DefaultLlmUsageMetrics.TOKENS_VALIDATION,
                DefaultLlmUsageMetrics.CALLS_RCA, DefaultLlmUsageMetrics.CALLS_CLUSTERING,
                DefaultLlmUsageMetrics.TOKEN_RATE_1M, DefaultLlmUsageMetrics.TOKEN_RATE_5M));
        for (Metric metric : m.values()) {
            assertThat("every metric is a gauge (the JMX collection wildcard matches gauges only)",
                    metric instanceof Gauge, equalTo(true));
        }
    }

    @Test
    public void sumsRoundsIntoBucketsAndPerConsumerTotals() {
        DefaultLlmUsageMetrics metrics = new DefaultLlmUsageMetrics();
        metrics.recordRound(LlmUsageMetrics.Consumer.RCA, new TokenUsage(100, 20, 30, 0));
        metrics.recordRound(LlmUsageMetrics.Consumer.RCA, new TokenUsage(50, 10, 0, 5));
        metrics.recordRound(LlmUsageMetrics.Consumer.CLUSTERING, new TokenUsage(200, 40, 0, 0));
        metrics.recordRound(LlmUsageMetrics.Consumer.VALIDATION, new TokenUsage(10, 1, 0, 0));
        metrics.recordRound(LlmUsageMetrics.Consumer.RCA, null); // ignored
        Map<String, Metric> m = metrics.getMetrics();
        assertThat(value(m, DefaultLlmUsageMetrics.TOKENS), equalTo(466L));
        assertThat(value(m, DefaultLlmUsageMetrics.INPUT_TOKENS), equalTo(360L));
        assertThat(value(m, DefaultLlmUsageMetrics.OUTPUT_TOKENS), equalTo(71L));
        assertThat(value(m, DefaultLlmUsageMetrics.CACHE_READ_TOKENS), equalTo(30L));
        assertThat(value(m, DefaultLlmUsageMetrics.CACHE_CREATION_TOKENS), equalTo(5L));
        assertThat(value(m, DefaultLlmUsageMetrics.TOKENS_RCA), equalTo(215L));
        assertThat(value(m, DefaultLlmUsageMetrics.TOKENS_CLUSTERING), equalTo(240L));
        assertThat(value(m, DefaultLlmUsageMetrics.TOKENS_VALIDATION), equalTo(11L));
    }

    @Test
    public void countsCallsAndFailuresPerConsumer() {
        DefaultLlmUsageMetrics metrics = new DefaultLlmUsageMetrics();
        metrics.recordCall(LlmUsageMetrics.Consumer.RCA, true);
        metrics.recordCall(LlmUsageMetrics.Consumer.RCA, false);
        metrics.recordCall(LlmUsageMetrics.Consumer.CLUSTERING, true);
        metrics.recordCall(LlmUsageMetrics.Consumer.VALIDATION, false);
        Map<String, Metric> m = metrics.getMetrics();
        assertThat(value(m, DefaultLlmUsageMetrics.CALLS), equalTo(4L));
        assertThat(value(m, DefaultLlmUsageMetrics.FAILED_CALLS), equalTo(2L));
        assertThat(value(m, DefaultLlmUsageMetrics.CALLS_RCA), equalTo(2L));
        assertThat(value(m, DefaultLlmUsageMetrics.CALLS_CLUSTERING), equalTo(1L));
    }

    @SuppressWarnings("unchecked")
    private static long value(Map<String, Metric> m, String name) {
        return ((Gauge<Long>) m.get(name)).getValue();
    }
}
