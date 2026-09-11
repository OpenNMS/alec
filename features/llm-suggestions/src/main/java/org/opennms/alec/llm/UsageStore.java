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

package org.opennms.alec.llm;

import java.io.IOException;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Persistence + rollup for per-call token usage records.
 *
 * <p>Storage shape: context {@link #CONTEXT}, key is a fresh UUID per call,
 * value is a {@link UsageRecord} JSON. We don't time-prefix the key because
 * aggregation reads the timestamp out of the record body anyway, and a UUID
 * key avoids collisions when multiple calls land in the same millisecond.
 *
 * <p>The cost estimate is a rough reference only. Since the provider and model
 * are now configurable, there is no single price; these constants use the
 * default model's (Claude Sonnet 4.6 via OpenRouter) list price so the meter
 * gives a ballpark. {@link #PRICING_NOTE} states this caveat to the user.
 */
public class UsageStore {

    public static final String CONTEXT = "ALEC_LLM_USAGE";

    // Reference pricing for the default model (Claude Sonnet 4.6), USD per
    // million tokens. Other providers/models will differ — this is only a
    // ballpark for the usage meter, not a billing figure.
    static final double INPUT_PER_M = 3.00;
    static final double OUTPUT_PER_M = 15.00;
    static final double CACHE_READ_PER_M = 0.30;
    static final double CACHE_CREATE_PER_M = 3.75;
    static final String PRICING_NOTE = "Rough estimate based on the default model "
            + "(Claude Sonnet 4.6) list price (in $3/out $15/cache-read $0.30 per 1M tokens). "
            + "Actual cost depends on the provider and model you configure.";

    private static final Logger LOG = LoggerFactory.getLogger(UsageStore.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public UsageStore(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    public void record(UsageRecord record) {
        try {
            String key = UUID.randomUUID().toString();
            kvStore.put(key, objectMapper.writeValueAsString(record), CONTEXT);
        } catch (JsonProcessingException e) {
            // Won't happen — every field is a primitive or String. Log defensively
            // so it surfaces if someone refactors UsageRecord into something exotic.
            LOG.error("Failed to serialize usage record: {}", e.getMessage(), e);
        }
    }

    /**
     * Aggregate the last {@code days} days. Reads every row in the context
     * once, filters by timestamp, sums the buckets, computes derived metrics.
     */
    public UsageReport aggregate(int days) {
        long cutoff = System.currentTimeMillis() - TimeUnit.DAYS.toMillis(days);
        Map<String, String> all = kvStore.enumerateContext(CONTEXT);
        long inputTokens = 0;
        long outputTokens = 0;
        long cacheReadTokens = 0;
        long cacheCreateTokens = 0;
        long calls = 0;
        long successes = 0;
        long failures = 0;
        long toolCalls = 0;
        if (all != null) {
            for (String raw : all.values()) {
                UsageRecord r;
                try {
                    r = objectMapper.readValue(raw, UsageRecord.class);
                } catch (IOException e) {
                    LOG.warn("Skipping unparseable usage record during aggregation: {}", e.getMessage());
                    continue;
                }
                if (r.getTs() < cutoff) {
                    continue;
                }
                inputTokens += r.getInputTokens();
                outputTokens += r.getOutputTokens();
                cacheReadTokens += r.getCacheReadInputTokens();
                cacheCreateTokens += r.getCacheCreationInputTokens();
                calls++;
                toolCalls += r.getToolCalls();
                if (r.isSuccess()) {
                    successes++;
                } else {
                    failures++;
                }
            }
        }
        double cacheHitRatio = computeCacheHitRatio(inputTokens, cacheCreateTokens, cacheReadTokens);
        double costUsd = estimateCostUsd(inputTokens, outputTokens, cacheReadTokens, cacheCreateTokens);
        return new UsageReport(days, inputTokens, outputTokens, cacheReadTokens, cacheCreateTokens,
                calls, successes, failures, toolCalls, cacheHitRatio, costUsd, PRICING_NOTE);
    }

    /**
     * Total tokens (input + output + cache read + cache create) recorded at or
     * after {@code sinceMillis}. Used to enforce the shared daily/monthly token
     * budgets — callers pass the start of the current UTC day or month.
     */
    public long tokensUsedSince(long sinceMillis) {
        Map<String, String> all = kvStore.enumerateContext(CONTEXT);
        if (all == null) {
            return 0;
        }
        long total = 0;
        for (String raw : all.values()) {
            try {
                UsageRecord r = objectMapper.readValue(raw, UsageRecord.class);
                if (r.getTs() >= sinceMillis) {
                    total += r.getInputTokens() + r.getOutputTokens()
                            + r.getCacheReadInputTokens() + r.getCacheCreationInputTokens();
                }
            } catch (IOException e) {
                LOG.warn("Skipping unparseable usage record during budget sum: {}", e.getMessage());
            }
        }
        return total;
    }

    /**
     * Delete rows whose {@code ts} is strictly older than {@code cutoffMillis}.
     * Returns the number deleted. Mirrors {@link SuggestionStore#pruneOlderThan(long)}.
     */
    public int pruneOlderThan(long cutoffMillis) {
        Map<String, String> all = kvStore.enumerateContext(CONTEXT);
        if (all == null || all.isEmpty()) {
            return 0;
        }
        int deleted = 0;
        for (Map.Entry<String, String> entry : all.entrySet()) {
            try {
                UsageRecord r = objectMapper.readValue(entry.getValue(), UsageRecord.class);
                if (r.getTs() < cutoffMillis) {
                    kvStore.delete(entry.getKey(), CONTEXT);
                    deleted++;
                }
            } catch (IOException e) {
                LOG.warn("Pruner dropping unparseable usage row at key {}: {}", entry.getKey(), e.getMessage());
                kvStore.delete(entry.getKey(), CONTEXT);
                deleted++;
            }
        }
        return deleted;
    }

    // --- math helpers (static + package-private for tests) ---

    static double computeCacheHitRatio(long input, long cacheCreate, long cacheRead) {
        long denom = input + cacheCreate + cacheRead;
        if (denom == 0) {
            return 0d;
        }
        return (double) cacheRead / (double) denom;
    }

    static double estimateCostUsd(long input, long output, long cacheRead, long cacheCreate) {
        return (input * INPUT_PER_M
                + output * OUTPUT_PER_M
                + cacheRead * CACHE_READ_PER_M
                + cacheCreate * CACHE_CREATE_PER_M) / 1_000_000d;
    }
}
