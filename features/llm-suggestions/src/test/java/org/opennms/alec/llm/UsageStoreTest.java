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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class UsageStoreTest {

    private InMemoryKVStore kv;
    private UsageStore store;
    private ObjectMapper om;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        om = new ObjectMapper();
        store = new UsageStore(kv, om);
    }

    @Test
    public void recordPersistsRowAndAggregateCountsIt() {
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder()
                .ts(now)
                .situationId("sit-1")
                .model("anthropic/claude-sonnet-4.6")
                .success(true)
                .inputTokens(100)
                .outputTokens(40)
                .cacheReadInputTokens(60)
                .cacheCreationInputTokens(20)
                .build());

        UsageReport report = store.aggregate(30);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getSuccessfulCalls(), equalTo(1L));
        assertThat(report.getInputTokens(), equalTo(100L));
        assertThat(report.getOutputTokens(), equalTo(40L));
        assertThat(report.getCacheReadInputTokens(), equalTo(60L));
        assertThat(report.getCacheCreationInputTokens(), equalTo(20L));
        assertThat("totalTokens sums all four buckets",
                report.getTotalTokens(), equalTo(100L + 40L + 60L + 20L));
    }

    @Test
    public void aggregateOnlyIncludesRowsInsideWindow() {
        long now = System.currentTimeMillis();
        long inside = now - TimeUnit.DAYS.toMillis(5);
        long outside = now - TimeUnit.DAYS.toMillis(40);

        store.record(UsageRecord.newBuilder().ts(inside).success(true).inputTokens(10).build());
        store.record(UsageRecord.newBuilder().ts(outside).success(true).inputTokens(99999).build());

        UsageReport report = store.aggregate(30);
        assertThat("only the in-window row counted", report.getCalls(), equalTo(1L));
        assertThat(report.getInputTokens(), equalTo(10L));
    }

    @Test
    public void aggregateOnEmptyContextReturnsAllZeros() {
        UsageReport report = store.aggregate(30);
        assertThat(report.getCalls(), equalTo(0L));
        assertThat(report.getTotalTokens(), equalTo(0L));
        assertEquals(0d, report.getCacheHitRatio(), 0.0001d);
        assertEquals(0d, report.getEstimatedCostUsd(), 0.0001d);
    }

    @Test
    public void aggregateSeparatesSuccessAndFailureCounts() {
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder().ts(now).success(true).inputTokens(10).build());
        store.record(UsageRecord.newBuilder().ts(now).success(true).inputTokens(20).build());
        store.record(UsageRecord.newBuilder().ts(now).success(false).build());

        UsageReport report = store.aggregate(1);
        assertThat(report.getCalls(), equalTo(3L));
        assertThat(report.getSuccessfulCalls(), equalTo(2L));
        assertThat(report.getFailedCalls(), equalTo(1L));
    }

    @Test
    public void aggregateSkipsUnparseableRowsWithoutCrashing() {
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder().ts(now).success(true).inputTokens(10).build());
        kv.put("manual-junk", "{not valid json", UsageStore.CONTEXT);

        UsageReport report = store.aggregate(1);
        assertThat("the good record was still counted", report.getCalls(), equalTo(1L));
    }

    @Test
    public void pruneRemovesRowsOlderThanCutoff() {
        long now = System.currentTimeMillis();
        long old = now - TimeUnit.DAYS.toMillis(120);
        long recent = now - TimeUnit.HOURS.toMillis(2);

        store.record(UsageRecord.newBuilder().ts(old).success(true).build());
        store.record(UsageRecord.newBuilder().ts(recent).success(true).build());

        long cutoff = now - TimeUnit.DAYS.toMillis(90);
        int deleted = store.pruneOlderThan(cutoff);
        assertThat(deleted, equalTo(1));
        assertThat("only the recent row survives",
                store.aggregate(180).getCalls(), equalTo(1L));
    }

    @Test
    public void pruneDropsUnparseableRowsRegardlessOfAge() {
        // Same defensive behavior as SuggestionStore — unparseable rows can't be
        // surfaced anywhere useful, so they get cleaned up on prune.
        kv.put("junk", "broken", UsageStore.CONTEXT);
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder().ts(now).success(true).build());

        int deleted = store.pruneOlderThan(now - 1000);
        assertThat("junk dropped; recent kept", deleted, equalTo(1));
    }

    // --- cost / cache-ratio math (cheap to verify directly) ---

    @Test
    public void cacheHitRatioIsCacheReadOverAllInputBuckets() {
        // 100 input + 50 cache-create + 150 cache-read = 300 total input
        // ratio = 150/300 = 0.5
        double ratio = UsageStore.computeCacheHitRatio(100, 50, 150);
        assertEquals(0.5d, ratio, 0.0001d);
    }

    @Test
    public void cacheHitRatioIsZeroWhenNoInputTokens() {
        assertEquals(0d, UsageStore.computeCacheHitRatio(0, 0, 0), 0d);
    }

    @Test
    public void costEstimateUsesPublishedSonnetPricing() {
        // 1M input + 1M output + 1M cache-read + 1M cache-create
        //   = $3 + $15 + $0.30 + $3.75 = $22.05
        double cost = UsageStore.estimateCostUsd(1_000_000, 1_000_000, 1_000_000, 1_000_000);
        assertEquals(22.05d, cost, 0.0001d);
    }

    @Test
    public void reportPricingNoteIsHumanReadable() {
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder().ts(now).success(true).build());
        UsageReport r = store.aggregate(1);
        // The exact wording matters less than the fact that we surface the
        // approximation caveat — the UI shows this label verbatim.
        assertThat(r.getPricingNote(), is(UsageStore.PRICING_NOTE));
    }

    @Test
    public void recordRoundTripsAllFields() throws Exception {
        UsageRecord original = UsageRecord.newBuilder()
                .ts(42L)
                .situationId("sit-x")
                .model("anthropic/claude-sonnet-4.6")
                .success(false)
                .inputTokens(1)
                .outputTokens(2)
                .cacheReadInputTokens(3)
                .cacheCreationInputTokens(4)
                .build();
        String json = om.writeValueAsString(original);
        UsageRecord back = om.readValue(json, UsageRecord.class);
        assertThat(back.getTs(), equalTo(42L));
        assertThat(back.getSituationId(), equalTo("sit-x"));
        assertThat(back.isSuccess(), is(false));
        assertThat(back.getOutputTokens(), equalTo(2L));
    }

    // --- toolCalls (ALEC-308) ---

    @Test
    public void toolCallsRoundTripsThroughJson() throws Exception {
        UsageRecord original = UsageRecord.newBuilder().ts(1L).success(true).toolCalls(3).build();
        String json = om.writeValueAsString(original);
        assertThat(json, org.hamcrest.CoreMatchers.containsString("\"toolCalls\":3"));
        UsageRecord back = om.readValue(json, UsageRecord.class);
        assertThat(back.getToolCalls(), equalTo(3L));
        assertThat("negative counts are clamped to 0",
                UsageRecord.newBuilder().toolCalls(-4).build().getToolCalls(), equalTo(0L));
    }

    @Test
    public void aggregateSumsToolCalls() {
        // A second in the past so the 0-day window (cutoff = "now" at aggregate
        // time) deterministically excludes them.
        long now = System.currentTimeMillis() - 1000L;
        store.record(UsageRecord.newBuilder().ts(now).success(true).toolCalls(2).build());
        store.record(UsageRecord.newBuilder().ts(now).success(true).toolCalls(5).build());
        store.record(UsageRecord.newBuilder().ts(now).success(false).build());
        store.record(UsageRecord.newBuilder().ts(now - TimeUnit.DAYS.toMillis(40)).success(true).toolCalls(99).build());

        UsageReport report = store.aggregate(30);
        assertThat(report.getToolCalls(), equalTo(7L));
        assertThat(report.getCalls(), equalTo(3L));
        assertThat("the empty window reports 0", store.aggregate(0).getToolCalls(), equalTo(0L));
    }

    @Test
    public void legacyRecordsWithoutToolCallsDeserializeWithZero() throws Exception {
        String legacy = "{\"ts\":42,\"situationId\":\"s\",\"model\":\"m\",\"success\":true,"
                + "\"inputTokens\":1,\"outputTokens\":2,\"cacheReadInputTokens\":3,\"cacheCreationInputTokens\":4}";
        UsageRecord r = om.readValue(legacy, UsageRecord.class);
        assertThat(r.getToolCalls(), equalTo(0L));
        assertThat(r.getInputTokens(), equalTo(1L));

        kv.put("legacy", legacy.replace("\"ts\":42", "\"ts\":" + System.currentTimeMillis()), UsageStore.CONTEXT);
        UsageReport report = store.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getToolCalls(), equalTo(0L));
    }
}
