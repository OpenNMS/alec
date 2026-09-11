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

import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Bridges DBSCAN (and any other engine) to {@link LlmSuggestionService}.
 * Registered as an OSGi SituationHandler with service property
 * {@code role=engine-listener} so {@code CompositeSituationHandler} picks
 * it up automatically — see slice 2.
 *
 * Behavior on {@link #onSituation(Situation)}:
 * <ol>
 *   <li>Read the current LLM config from KV (fresh, not cached).</li>
 *   <li>If disabled or no API key: no-op. We never publish into the KV store
 *       in this state — disabling the feature is a clean off-switch.</li>
 *   <li>Look up any existing record for the situation. Skip if status is
 *       {@code pending} (a call is in-flight) or {@code ready} (we already
 *       have a result). Only fire when no record exists or the previous
 *       attempt was {@code failed}.</li>
 *   <li>Write a {@code pending} record synchronously (microseconds — just
 *       JSON serialization + KV put), then submit the LLM call to the
 *       service's own executor. Returns immediately — the engine thread
 *       never blocks on LLM latency.</li>
 *   <li>On completion, write {@code ready} or {@code failed}.</li>
 * </ol>
 *
 * Updates to existing situations (which AbstractClusterEngine also routes
 * through onSituation) intentionally do NOT re-trigger a LLM call. Slice 4
 * is first-fire-only; richer behavior (refresh-on-significant-change) is a
 * future ticket.
 */
public class LlmSituationHandler implements SituationHandler {

    private static final Logger LOG = LoggerFactory.getLogger(LlmSituationHandler.class);

    /**
     * Age past which a {@code pending} record no longer blocks a fresh
     * auto-evaluation. See the staleness check in {@link #onSituation}.
     */
    static final long PENDING_STALE_MS = 10 * 60 * 1000L;

    private final LlmConfigReader configReader;
    private final LlmSuggestionService suggestionService;
    private final SuggestionStore store;
    private final UsageStore usageStore;
    private final TokenBudget tokenBudget;
    private final TimeSource timeSource;

    public LlmSituationHandler(LlmConfigReader configReader,
                                  LlmSuggestionService suggestionService,
                                  SuggestionStore store,
                                  UsageStore usageStore) {
        this(configReader, suggestionService, store, usageStore, System::currentTimeMillis);
    }

    // Visible for testing — lets the test inject deterministic timestamps.
    LlmSituationHandler(LlmConfigReader configReader,
                           LlmSuggestionService suggestionService,
                           SuggestionStore store,
                           UsageStore usageStore,
                           TimeSource timeSource) {
        this.configReader = Objects.requireNonNull(configReader);
        this.suggestionService = Objects.requireNonNull(suggestionService);
        this.store = Objects.requireNonNull(store);
        this.usageStore = Objects.requireNonNull(usageStore);
        this.tokenBudget = new TokenBudget(usageStore);
        this.timeSource = Objects.requireNonNull(timeSource);
    }

    /**
     * KV-store key for a situation. We use {@link Situation#getId()} (a
     * stable UUID-shaped reduction key) rather than {@link Situation#getLongId()}
     * because the engine emits an in-memory ImmutableSituation BEFORE it has
     * been persisted by OpenNMS, and at that point getLongId() returns 0
     * for every situation — so the handler would otherwise key every record
     * under "0". The REST endpoints translate the UI's numeric long ID to
     * this UUID via SituationDatasource before looking up records.
     */
    static String keyFor(Situation situation) {
        return situation.getId();
    }

    @Override
    public void onSituation(Situation situation) {
        if (situation == null) {
            return;
        }
        final String situationId = keyFor(situation);

        Optional<LlmConfigReader.Config> maybeConfig = configReader.read();
        if (maybeConfig.isEmpty()) {
            LOG.debug("LLM integration: no config persisted; skipping situation {}", situationId);
            return;
        }
        LlmConfigReader.Config config = maybeConfig.get();
        if (!config.isEnabled() || !config.hasApiKey()) {
            LOG.debug("LLM integration: disabled or no key; skipping situation {}", situationId);
            return;
        }
        if (!config.isAutoEvaluate()) {
            LOG.debug("LLM integration: autoEvaluate is off; skipping situation {} (Re-evaluate still works)",
                    situationId);
            return;
        }

        Optional<SuggestionRecord> existing = store.get(situationId);
        if (existing.isPresent()) {
            SuggestionRecord record = existing.get();
            String status = record.getStatus();
            if (SuggestionRecord.STATUS_READY.equals(status)) {
                LOG.debug("LLM integration: already ready for situation {}; not re-firing", situationId);
                return;
            }
            if (SuggestionRecord.STATUS_PENDING.equals(status)) {
                // A pending record normally means a call is in flight — but a
                // crash/restart (or a swallowed store-write failure) between
                // putPending and completion would otherwise leave the record
                // pending for its whole pruner lifetime, permanently blocking
                // auto-evaluation for this situation. Treat a pending record
                // older than PENDING_STALE_MS as failed and re-fire; the real
                // in-flight window is bounded by the HTTP timeouts (~35s), so
                // ten minutes is comfortably past any live call.
                long age = timeSource.now() - record.getRequestedAt();
                if (age <= PENDING_STALE_MS) {
                    LOG.debug("LLM integration: already pending for situation {}; not re-firing",
                            situationId);
                    return;
                }
                LOG.warn("LLM integration: pending record for situation {} is {} ms old "
                        + "(stale — likely a restart mid-call); re-firing", situationId, age);
            }
            // status == failed (or stale pending) → fall through and retry
        }

        // INFO is intentional — one log line per LLM call gives a clear
        // signal of work happening at the right granularity for ops.
        LOG.info("LLM integration: requesting suggestions for situation {}", situationId);
        analyzeAndStore(situation, situationId, config);
    }

    /**
     * Force a fresh analysis, bypassing the "skip if already pending/ready"
     * guard {@link #onSituation} uses. Called by the {@code /reanalyze} REST
     * endpoint when a user clicks Re-evaluate.
     */
    public void forceReanalyze(Situation situation) {
        if (situation == null) {
            return;
        }
        final String situationId = keyFor(situation);
        Optional<LlmConfigReader.Config> maybeConfig = configReader.read();
        if (maybeConfig.isEmpty()) {
            return;
        }
        LlmConfigReader.Config config = maybeConfig.get();
        if (!config.isEnabled() || !config.hasApiKey()) {
            return;
        }
        analyzeAndStore(situation, situationId, config);
    }

    private void analyzeAndStore(Situation situation, String situationId,
                                 LlmConfigReader.Config config) {
        final long requestedAt = timeSource.now();
        // Shared token-budget gate: if the daily or monthly cap is reached, do
        // NOT issue the request. The main page surfaces the same status via
        // GET alec/llm/budget so the user knows why suggestions stopped.
        BudgetStatus budget = tokenBudget.evaluate(requestedAt,
                config.getDailyTokenLimit(), config.getMonthlyTokenLimit());
        if (budget.isBlocked()) {
            LOG.warn("LLM integration: {} Skipping situation {}.", budget.getReason(), situationId);
            return;
        }
        final String model = config.getModel();
        store.putPending(situationId, requestedAt, model);

        suggestionService.requestSuggestions(situation, config.getApiKey(),
                        config.getBaseUrl(), model, config.getSystemPrompt(), config.isToolsEnabled())
                .whenComplete((suggestions, error) -> {
                    long completedAt = timeSource.now();
                    if (error != null) {
                        // unwrap CompletionException so error.getMessage is the real reason
                        Throwable cause = error.getCause() != null ? error.getCause() : error;
                        String reason = cause.getMessage() == null
                                ? cause.getClass().getSimpleName()
                                : cause.getMessage();
                        LOG.warn("LLM suggestion failed for situation {}: {}", situationId, reason);
                        store.putFailed(situationId, requestedAt, completedAt,
                                model, reason);
                        // Record the failed attempt too — call count and success rate matter
                        // for the dashboard even when no tokens were billed.
                        usageStore.record(UsageRecord.newBuilder()
                                .ts(completedAt)
                                .situationId(situationId)
                                .model(model)
                                .success(false)
                                .build());
                        return;
                    }
                    store.putReady(situationId, requestedAt, completedAt,
                            model,
                            suggestions.getRootCauses(),
                            suggestions.getResolutions());
                    Suggestions.TokenUsage u = suggestions.getUsage();
                    usageStore.record(UsageRecord.newBuilder()
                            .ts(completedAt)
                            .situationId(situationId)
                            .model(model)
                            .success(true)
                            .inputTokens(u.getInputTokens())
                            .outputTokens(u.getOutputTokens())
                            .cacheReadInputTokens(u.getCacheReadInputTokens())
                            .cacheCreationInputTokens(u.getCacheCreationInputTokens())
                            .toolCalls(suggestions.getToolCalls())
                            .build());
                });
    }

    @Override
    public void onSituationDeleted(String situationId) {
        // No action in slice 4 — we keep the historical suggestion record so the
        // UI can still show "AI suggestions for this closed situation" if asked.
        // Pruning by age handles eventual cleanup (SuggestionPruner).
    }

    @FunctionalInterface
    interface TimeSource {
        long now();
    }
}
