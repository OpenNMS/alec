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

import java.util.Collections;
import java.util.EnumMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.atomic.LongAdder;


import com.codahale.metrics.Gauge;
import com.codahale.metrics.Meter;
import com.codahale.metrics.Metric;
import com.codahale.metrics.MetricSet;

/**
 * Cumulative LLM token usage as a Dropwizard {@link MetricSet} of gauges.
 * Published as an OSGi service by the driver's blueprint, folded by the ALEC
 * driver into the engine's JMX-reported registry and therefore charted by
 * OpenNMS's stock JMX collection ("ALEC Graph Stats") with no OpenNMS-side
 * change. Gauges only, because that collection's
 * wildcard matches the gauges type; the per-minute rates are exposed as gauges
 * too so a graph shows spend as a rate and not only a rising total.
 *
 * <p>Counters reset when the bundle restarts. The durable per-call history —
 * what the settings page and the token budget use — stays in the KV usage
 * store; this is the time-series view of the same numbers.
 */
public class DefaultLlmUsageMetrics implements LlmUsageMetrics, MetricSet {

    private static final Consumer[] CONSUMERS = Consumer.values();

    public static final String TOKENS = "llmTokens";
    public static final String INPUT_TOKENS = "llmInputTokens";
    public static final String OUTPUT_TOKENS = "llmOutputTokens";
    public static final String CACHE_READ_TOKENS = "llmCacheReadTokens";
    public static final String CACHE_CREATION_TOKENS = "llmCacheCreationTokens";
    public static final String CALLS = "llmCalls";
    public static final String FAILED_CALLS = "llmFailedCalls";
    public static final String TOKENS_RCA = "llmTokensRca";
    public static final String TOKENS_CLUSTERING = "llmTokensClustering";
    public static final String TOKENS_VALIDATION = "llmTokensValidation";
    public static final String CALLS_RCA = "llmCallsRca";
    public static final String CALLS_CLUSTERING = "llmCallsClustering";
    public static final String TOKEN_RATE_1M = "llmTokenRate1m";
    public static final String TOKEN_RATE_5M = "llmTokenRate5m";

    private final Meter tokens = new Meter();
    private final LongAdder inputTokens = new LongAdder();
    private final LongAdder outputTokens = new LongAdder();
    private final LongAdder cacheReadTokens = new LongAdder();
    private final LongAdder cacheCreationTokens = new LongAdder();
    private final LongAdder calls = new LongAdder();
    private final LongAdder failedCalls = new LongAdder();
    private final Map<Consumer, LongAdder> tokensByConsumer = new EnumMap<>(Consumer.class);
    private final Map<Consumer, LongAdder> callsByConsumer = new EnumMap<>(Consumer.class);

    public DefaultLlmUsageMetrics() {
        for (Consumer c : CONSUMERS) {
            tokensByConsumer.put(c, new LongAdder());
            callsByConsumer.put(c, new LongAdder());
        }
    }

    @Override
    public void recordRound(Consumer consumer, TokenUsage usage) {
        if (usage == null) {
            return;
        }
        long total = usage.getTotalTokens();
        if (total > 0) {
            tokens.mark(total);
        }
        inputTokens.add(usage.getInputTokens());
        outputTokens.add(usage.getOutputTokens());
        cacheReadTokens.add(usage.getCacheReadInputTokens());
        cacheCreationTokens.add(usage.getCacheCreationInputTokens());
        tokensByConsumer.get(consumer == null ? Consumer.RCA : consumer).add(total);
    }

    @Override
    public void recordCall(Consumer consumer, boolean success) {
        calls.increment();
        if (!success) {
            failedCalls.increment();
        }
        callsByConsumer.get(consumer == null ? Consumer.RCA : consumer).increment();
    }

    public long getTotalTokens() {
        return tokens.getCount();
    }

    public long getTokens(Consumer consumer) {
        return tokensByConsumer.get(consumer).sum();
    }

    public long getCalls() {
        return calls.sum();
    }

    public long getFailedCalls() {
        return failedCalls.sum();
    }

    public long getCalls(Consumer consumer) {
        return callsByConsumer.get(consumer).sum();
    }

    @Override
    public Map<String, Metric> getMetrics() {
        Map<String, Metric> m = new LinkedHashMap<>();
        m.put(TOKENS, (Gauge<Long>) tokens::getCount);
        m.put(INPUT_TOKENS, (Gauge<Long>) inputTokens::sum);
        m.put(OUTPUT_TOKENS, (Gauge<Long>) outputTokens::sum);
        m.put(CACHE_READ_TOKENS, (Gauge<Long>) cacheReadTokens::sum);
        m.put(CACHE_CREATION_TOKENS, (Gauge<Long>) cacheCreationTokens::sum);
        m.put(CALLS, (Gauge<Long>) calls::sum);
        m.put(FAILED_CALLS, (Gauge<Long>) failedCalls::sum);
        m.put(TOKENS_RCA, (Gauge<Long>) () -> getTokens(Consumer.RCA));
        m.put(TOKENS_CLUSTERING, (Gauge<Long>) () -> getTokens(Consumer.CLUSTERING));
        m.put(TOKENS_VALIDATION, (Gauge<Long>) () -> getTokens(Consumer.VALIDATION));
        m.put(CALLS_RCA, (Gauge<Long>) () -> getCalls(Consumer.RCA));
        m.put(CALLS_CLUSTERING, (Gauge<Long>) () -> getCalls(Consumer.CLUSTERING));
        m.put(TOKEN_RATE_1M, (Gauge<Double>) tokens::getOneMinuteRate);
        m.put(TOKEN_RATE_5M, (Gauge<Double>) tokens::getFiveMinuteRate);
        return Collections.unmodifiableMap(m);
    }
}
