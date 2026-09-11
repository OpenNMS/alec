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
import java.util.Objects;
import java.util.Optional;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Bundle-local reader for the slice-1 LLM config record persisted by
 * features/ui at context {@value #CONFIG_CONTEXT} key {@value #CONFIG_KEY}.
 *
 * Kept deliberately thin (just the two fields we need) so this bundle does
 * not depend on features/ui — that would create a cycle, since features/ui
 * will eventually want to depend on this bundle for the suggestions REST
 * endpoint.
 *
 * Reads fresh from the KV store on every call. The config can change at
 * runtime via the REST endpoint, and any caching here would mean a stale
 * "enabled" flag could keep firing requests against a revoked API key.
 */
public class LlmConfigReader {

    // Magic strings — must match KeyEnum.LLM_CONFIG#toString() and
    // ALECRestUtils.ALEC_CONFIG in the features/ui bundle. If those change,
    // the corresponding constants here must change in lockstep.
    static final String CONFIG_KEY = "LLM_CONFIG";
    static final String CONFIG_CONTEXT = "ALEC_CONFIG";

    // ALEC ships with NO built-in endpoint/model default — the operator chooses a
    // provider + model on the configuration page. A blank baseUrl/model is left
    // blank here; a request with a blank endpoint/model simply fails the "required"
    // check in the suggestion client (the feature can't be enabled until both are
    // set). Must match LlmConfigImpl in features/ui. Only the system prompt still
    // falls back to a built-in default.
    static final String DEFAULT_BASE_URL = "";
    static final String DEFAULT_MODEL = "";

    private static final Logger LOG = LoggerFactory.getLogger(LlmConfigReader.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public LlmConfigReader(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    /**
     * @return the current config, or empty if no config has been written yet
     *         or the persisted record is malformed
     */
    public Optional<Config> read() {
        Optional<String> raw = kvStore.get(CONFIG_KEY, CONFIG_CONTEXT);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        try {
            JsonNode node = objectMapper.readTree(raw.get());
            boolean enabled = node.path("enabled").asBoolean(false);
            // Older config records (persisted before the field was added)
            // default autoEvaluate to true so they keep the original automatic
            // behavior. Explicit false in the JSON disables auto-eval.
            boolean autoEvaluate = node.path("autoEvaluate").asBoolean(true);
            String apiKey = node.path("apiKey").asText("");
            String baseUrl = blankToDefault(node.path("baseUrl").asText(""), DEFAULT_BASE_URL);
            String model = blankToDefault(node.path("model").asText(""), DEFAULT_MODEL);
            // Older config records (persisted before the prompt was configurable)
            // leave this blank; fall back to the built-in default.
            String systemPrompt = blankToDefault(node.path("systemPrompt").asText(""),
                    LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT);
            // Shared "LLM Setup" token budgets (0 = unlimited). Negative or absent
            // values are treated as no limit.
            long dailyTokenLimit = Math.max(0, node.path("dailyTokenLimit").asLong(0));
            long monthlyTokenLimit = Math.max(0, node.path("monthlyTokenLimit").asLong(0));
            // ALEC-308: whether the model is offered the MCP tools. Absent in
            // records persisted before the option existed -> off.
            boolean toolsEnabled = node.path("toolsEnabled").asBoolean(false);
            return Optional.of(new Config(enabled, autoEvaluate, apiKey, baseUrl, model, systemPrompt,
                    dailyTokenLimit, monthlyTokenLimit, toolsEnabled));
        } catch (IOException e) {
            // Jackson parse-exception messages embed a snippet of the source
            // document — which here is the persisted config blob containing the
            // API key. getOriginalMessage() (for Jackson exceptions) excludes
            // the location/source part; never log getMessage() on this path.
            String safeReason = e instanceof JsonProcessingException
                    ? ((JsonProcessingException) e).getOriginalMessage()
                    : e.getClass().getSimpleName();
            LOG.warn("Malformed LLM config at {}/{}: {}", CONFIG_CONTEXT, CONFIG_KEY, safeReason);
            return Optional.empty();
        }
    }

    private static String blankToDefault(String value, String fallback) {
        return value == null || value.trim().isEmpty() ? fallback : value.trim();
    }

    /** Snapshot of the fields the handler cares about. */
    public static final class Config {
        private final boolean enabled;
        private final boolean autoEvaluate;
        private final String apiKey;
        private final String baseUrl;
        private final String model;
        private final String systemPrompt;
        private final long dailyTokenLimit;
        private final long monthlyTokenLimit;
        private final boolean toolsEnabled;

        public Config(boolean enabled, boolean autoEvaluate, String apiKey, String baseUrl, String model,
                      String systemPrompt) {
            this(enabled, autoEvaluate, apiKey, baseUrl, model, systemPrompt, 0, 0);
        }

        public Config(boolean enabled, boolean autoEvaluate, String apiKey, String baseUrl, String model,
                      String systemPrompt, long dailyTokenLimit, long monthlyTokenLimit) {
            this(enabled, autoEvaluate, apiKey, baseUrl, model, systemPrompt, dailyTokenLimit, monthlyTokenLimit,
                    false);
        }

        public Config(boolean enabled, boolean autoEvaluate, String apiKey, String baseUrl, String model,
                      String systemPrompt, long dailyTokenLimit, long monthlyTokenLimit, boolean toolsEnabled) {
            this.enabled = enabled;
            this.autoEvaluate = autoEvaluate;
            // Trim defends against keys persisted with paste artifacts (trailing
            // newline/space) — an illegal header char would otherwise surface as
            // an OkHttp IAE whose message embeds the key.
            this.apiKey = apiKey == null ? "" : apiKey.trim();
            this.baseUrl = blankToDefault(baseUrl, DEFAULT_BASE_URL);
            this.model = blankToDefault(model, DEFAULT_MODEL);
            this.systemPrompt = blankToDefault(systemPrompt,
                    LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT);
            this.dailyTokenLimit = Math.max(0, dailyTokenLimit);
            this.monthlyTokenLimit = Math.max(0, monthlyTokenLimit);
            this.toolsEnabled = toolsEnabled;
        }

        public boolean isEnabled() {
            return enabled;
        }

        /**
         * When false, {@link LlmSituationHandler#onSituation} short-
         * circuits — no automatic analysis on new situations. The Re-evaluate
         * REST path bypasses this flag intentionally.
         */
        public boolean isAutoEvaluate() {
            return autoEvaluate;
        }

        public String getApiKey() {
            return apiKey;
        }

        public boolean hasApiKey() {
            return !apiKey.isEmpty();
        }

        /** OpenAI-compatible API base URL, never blank (falls back to default). */
        public String getBaseUrl() {
            return baseUrl;
        }

        /** Model identifier to request, never blank (falls back to default). */
        public String getModel() {
            return model;
        }

        /** System prompt framing the analysis, never blank (falls back to default). */
        public String getSystemPrompt() {
            return systemPrompt;
        }

        /** Per-UTC-day token budget shared across LLM features; 0 = unlimited. */
        public long getDailyTokenLimit() {
            return dailyTokenLimit;
        }

        /** Per-calendar-month token budget shared across LLM features; 0 = unlimited. */
        public long getMonthlyTokenLimit() {
            return monthlyTokenLimit;
        }

        /** Whether ALEC's own model calls are offered the MCP data tools (ALEC-308). */
        public boolean isToolsEnabled() {
            return toolsEnabled;
        }

        @Override
        public String toString() {
            // Never include the API key in toString — it ends up in log lines.
            return "Config[enabled=" + enabled
                    + ", autoEvaluate=" + autoEvaluate
                    + ", apiKeyPresent=" + hasApiKey()
                    + ", baseUrl=" + baseUrl
                    + ", model=" + model
                    + ", toolsEnabled=" + toolsEnabled + "]";
        }
    }
}
