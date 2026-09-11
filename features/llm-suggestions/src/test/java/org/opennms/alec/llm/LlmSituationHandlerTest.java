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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmSituationHandlerTest {

    private InMemoryKVStore kv;
    private LlmConfigReader configReader;
    private SuggestionStore store;
    private UsageStore usageStore;
    private LlmSuggestionService service;
    private LlmSituationHandler handler;
    private long mockNow;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        ObjectMapper om = new ObjectMapper();
        configReader = new LlmConfigReader(kv, om);
        store = new SuggestionStore(kv, om);
        usageStore = new UsageStore(kv, om);
        service = mock(LlmSuggestionService.class);
        mockNow = 1_000L;
        handler = new LlmSituationHandler(configReader, service, store, usageStore, () -> mockNow);
    }

    // --- guardrails ---

    @Test
    public void nullSituationIsANoOp() {
        handler.onSituation(null);
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    @Test
    public void storageKeyIsTheUuidNotTheLongId() {
        // Engine emits an in-memory ImmutableSituation BEFORE OpenNMS persists
        // it; at that point getLongId() returns 0. Keying off getLongId would
        // collapse every just-emitted situation to "0", and subsequent
        // emissions would short-circuit on "already pending/ready for 0".
        // The UUID-shaped reduction key (getId) is stable from the moment the
        // situation is created.
        writeConfig(true, "sk-ant-key");
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean()))
                .thenReturn(new CompletableFuture<>());

        Situation s = mock(Situation.class);
        when(s.getLongId()).thenReturn(0L);          // unpersisted at emit time
        when(s.getId()).thenReturn("uei.opennms.org/alarms/situation:some-uuid");

        handler.onSituation(s);

        assertThat("stored under the UUID, not the long id",
                store.get("uei.opennms.org/alarms/situation:some-uuid").isPresent(),
                is(true));
        assertThat("long-id key is NOT used (would be 0 at emit time)",
                store.get("0").isPresent(), is(false));
    }

    @Test
    public void skipsWhenNoConfigPersisted() {
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
        assertThat(store.get(stubKey(1L)).isPresent(), is(false));
    }

    @Test
    public void skipsWhenConfigDisabledEvenWithApiKey() {
        writeConfig(false, "sk-ant-key");
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
        // Disabled = clean off-switch. We don't even leave a 'pending' breadcrumb.
        assertFalse(store.get(stubKey(1L)).isPresent());
    }

    @Test
    public void skipsWhenConfigEnabledButApiKeyMissing() {
        writeConfig(true, "");
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    // --- existing-record gates ---

    @Test
    public void skipsWhenExistingRecordIsPending() {
        writeConfig(true, "sk-ant-key");
        store.putPending(stubKey(1L), 500L, LlmConfigReader.DEFAULT_MODEL);
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    @Test
    public void refiresWhenPendingRecordIsStale() {
        // A crash/restart between putPending and completion leaves a pending
        // record no in-flight call will ever resolve. Once it is older than
        // PENDING_STALE_MS it must stop blocking auto-evaluation.
        writeConfig(true, "sk-ant-key");
        store.putPending(stubKey(1L), 500L, LlmConfigReader.DEFAULT_MODEL);
        mockNow = 500L + LlmSituationHandler.PENDING_STALE_MS + 1;
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean()))
                .thenReturn(new CompletableFuture<>()); // new call in flight

        handler.onSituation(stubSituation(1L));

        verify(service).requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean());
        // A fresh pending record replaces the stale one.
        SuggestionRecord r = store.get(stubKey(1L)).orElseThrow();
        assertThat(r.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(r.getRequestedAt(), equalTo(mockNow));
    }

    @Test
    public void pendingRecordJustUnderStaleThresholdStillBlocks() {
        writeConfig(true, "sk-ant-key");
        store.putPending(stubKey(1L), 500L, LlmConfigReader.DEFAULT_MODEL);
        mockNow = 500L + LlmSituationHandler.PENDING_STALE_MS; // age == threshold: not yet stale
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    @Test
    public void skipsWhenExistingRecordIsReady() {
        writeConfig(true, "sk-ant-key");
        store.putReady(stubKey(1L), 500L, 600L, LlmConfigReader.DEFAULT_MODEL,
                Arrays.asList("c"), Arrays.asList("r"));
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    @Test
    public void retriesWhenExistingRecordIsFailed() {
        writeConfig(true, "sk-ant-key");
        store.putFailed(stubKey(1L), 500L, 600L, LlmConfigReader.DEFAULT_MODEL, "old error");
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean()))
                .thenReturn(new CompletableFuture<>()); // pending, never completes

        handler.onSituation(stubSituation(1L));

        verify(service).requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean());
        // Pending record overwrites the previous failed one.
        SuggestionRecord r = store.get(stubKey(1L)).orElseThrow();
        assertThat(r.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(r.getRequestedAt(), equalTo(1_000L));
    }

    // --- happy path: pending -> ready ---

    @Test
    public void writesPendingSynchronouslyAndThenReadyWhenServiceCompletes() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        // Step 1: pending appears immediately, before the future resolves.
        handler.onSituation(stubSituation(1L));
        SuggestionRecord pending = store.get(stubKey(1L)).orElseThrow();
        assertThat(pending.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(pending.getRequestedAt(), equalTo(1_000L));
        assertThat(pending.getModel(), equalTo(LlmConfigReader.DEFAULT_MODEL));

        // Step 2: simulate the service completing.
        mockNow = 1_500L;
        future.complete(new Suggestions(
                Arrays.asList("link saturation", "QoS misconfig"),
                Arrays.asList("check counters", "open vendor ticket"),
                Suggestions.TokenUsage.empty()));

        SuggestionRecord ready = store.get(stubKey(1L)).orElseThrow();
        assertThat(ready.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(ready.getRootCauses().size(), equalTo(2));
        assertThat(ready.getResolutions().size(), equalTo(2));
        assertThat(ready.getCompletedAt(), equalTo(1_500L));
        assertThat("requestedAt is preserved across the transition",
                ready.getRequestedAt(), equalTo(1_000L));
    }

    // --- failure path: pending -> failed ---

    @Test
    public void writesFailedWhenServiceFutureCompletesExceptionally() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        handler.onSituation(stubSituation(1L));
        mockNow = 1_500L;
        future.completeExceptionally(new LlmApiException("HTTP 401: invalid api key"));

        SuggestionRecord failed = store.get(stubKey(1L)).orElseThrow();
        assertThat(failed.getStatus(), equalTo(SuggestionRecord.STATUS_FAILED));
        assertThat(failed.getError(), containsString("HTTP 401"));
        assertThat(failed.getCompletedAt(), equalTo(1_500L));
        assertThat(failed.getRootCauses().isEmpty(), is(true));
    }

    // --- autoEvaluate flag ---

    @Test
    public void onSituationSkipsWhenAutoEvaluateIsFalse() {
        // User opted out of automatic analysis — handler must not fire even
        // though everything else (enabled + key) is in place.
        writeConfigWithAutoEval(true, "sk-ant-key", false);
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
        assertThat("no record written when auto-eval is off",
                store.get(stubKey(1L)).isPresent(), is(false));
    }

    @Test
    public void forceReanalyzeBypassesAutoEvaluateFlag() {
        // Re-evaluate button must work even when auto-eval is disabled —
        // that's the whole point of having the manual fallback.
        writeConfigWithAutoEval(true, "sk-ant-key", false);
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        Situation s = stubSituation(7L);
        handler.forceReanalyze(s);

        verify(service).requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean());
        assertThat(store.get(stubKey(7L)).orElseThrow().getStatus(),
                equalTo(SuggestionRecord.STATUS_PENDING));
    }

    @Test
    public void forceReanalyzeStillRespectsDisabledOrMissingKey() {
        // Re-evaluate is not a back door — if the integration is disabled
        // or the key is missing, the REST endpoint already 400s, and this
        // method is a defense in depth.
        writeConfig(false, "sk-ant-key");
        handler.forceReanalyze(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any(), any(), any(), any(), anyBoolean());
    }

    // --- usage recording on completion ---

    @Test
    public void recordsSuccessUsageRowOnReady() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        // Use real wall-clock for usage recording — UsageStore.aggregate filters
        // by ts vs System.currentTimeMillis(), so a 1970-era mockNow would fall
        // outside the 1-day window even immediately after writing it.
        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(1L));
        future.complete(new Suggestions(
                Arrays.asList("cause"),
                Arrays.asList("res"),
                new Suggestions.TokenUsage(200L, 50L, 100L, 20L)));

        UsageReport report = usageStore.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getSuccessfulCalls(), equalTo(1L));
        assertThat(report.getFailedCalls(), equalTo(0L));
        assertThat(report.getInputTokens(), equalTo(200L));
        assertThat(report.getOutputTokens(), equalTo(50L));
        assertThat(report.getCacheReadInputTokens(), equalTo(100L));
        assertThat(report.getCacheCreationInputTokens(), equalTo(20L));
    }

    @Test
    public void recordsFailureUsageRowWithZeroTokens() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(2L));
        future.completeExceptionally(new LlmApiException("timeout"));

        UsageReport report = usageStore.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getSuccessfulCalls(), equalTo(0L));
        assertThat(report.getFailedCalls(), equalTo(1L));
        assertThat("failure rows carry zero tokens", report.getTotalTokens(), equalTo(0L));
    }

    // --- helpers ---

    private void writeConfig(boolean enabled, String apiKey) {
        // Existing tests assume auto-evaluate is on (the project default), so
        // writeConfig keeps that behavior; writeConfigWithAutoEval is the
        // explicit form for the new field.
        writeConfigWithAutoEval(enabled, apiKey, true);
    }

    private void writeConfigWithAutoEval(boolean enabled, String apiKey, boolean autoEvaluate) {
        String json = "{\"enabled\":" + enabled
                + ",\"autoEvaluate\":" + autoEvaluate
                + ",\"apiKey\":\"" + apiKey + "\"}";
        kv.put(LlmConfigReader.CONFIG_KEY, json, LlmConfigReader.CONFIG_CONTEXT);
    }

    private static Situation stubSituation(long longId) {
        Situation s = mock(Situation.class);
        when(s.getLongId()).thenReturn(longId);
        when(s.getId()).thenReturn(stubKey(longId));
        return s;
    }

    /** The handler keys off getId() — this is the test-mock equivalent. */
    private static String stubKey(long longId) {
        return "uei.opennms.org/alarms/situation:test-" + longId;
    }

    @SuppressWarnings("unused")
    private static <T> Optional<T> unused() {
        return Optional.empty();
    }

    // --- ALEC-308: tool calls flow into the usage row; toolsEnabled flows into the request ---

    @Test
    public void successUsageRowCarriesToolCallsFromTheSuggestions() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);

        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(3L));
        future.complete(new Suggestions(
                Arrays.asList("cause"), Arrays.asList("res"),
                new Suggestions.TokenUsage(10L, 5L, 0L, 0L), 4));

        UsageReport report = usageStore.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getToolCalls(), equalTo(4L));
        assertThat(report.getInputTokens(), equalTo(10L));
    }

    @Test
    public void failedUsageRowCarriesZeroToolCalls() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean())).thenReturn(future);
        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(4L));
        future.completeExceptionally(new LlmApiException("boom"));
        assertThat(usageStore.aggregate(1).getToolCalls(), equalTo(0L));
    }

    @Test
    public void requestSuggestionsReceivesTheConfiguredToolsFlag() {
        writeConfigWithTools(true, "sk-ant-key", true);
        when(service.requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), anyBoolean()))
                .thenReturn(new CompletableFuture<>());
        handler.onSituation(stubSituation(5L));
        verify(service).requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), eq(true));

        writeConfigWithTools(true, "sk-ant-key", false);
        handler.forceReanalyze(stubSituation(6L));
        verify(service).requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), eq(false));

        // Absent flag (legacy record) -> tools off.
        writeConfig(true, "sk-ant-key");
        handler.forceReanalyze(stubSituation(7L));
        verify(service, org.mockito.Mockito.times(2))
                .requestSuggestions(any(), eq("sk-ant-key"), any(), any(), any(), eq(false));
    }

    private void writeConfigWithTools(boolean enabled, String apiKey, boolean toolsEnabled) {
        String json = "{\"enabled\":" + enabled
                + ",\"autoEvaluate\":true"
                + ",\"toolsEnabled\":" + toolsEnabled
                + ",\"apiKey\":\"" + apiKey + "\"}";
        kv.put(LlmConfigReader.CONFIG_KEY, json, LlmConfigReader.CONFIG_CONTEXT);
    }
}
