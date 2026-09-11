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

package org.opennms.alec.data;

import org.opennms.alec.engine.llm.LlmClusterEngine;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/**
 * GET response shape for the LLM configuration endpoint.
 *
 * Deliberately separate from {@link LlmConfig} so the actual API key value
 * cannot accidentally be serialized into a response — only its presence is
 * reported.
 */
@JsonPropertyOrder({"enabled", "autoEvaluate", "baseUrl", "model", "defaultBaseUrl",
        "defaultModel", "systemPrompt", "defaultSystemPrompt", "defaultClusterPrompt",
        "dailyTokenLimit", "monthlyTokenLimit", "apiKeyPresent",
        "toolsEnabled", "opennmsUrl", "opennmsUsername", "opennmsPasswordPresent"})
public class LlmConfigStatus {

    private final boolean enabled;
    private final boolean autoEvaluate;
    private final String baseUrl;
    private final String model;
    // Operator-recorded per-field defaults (empty until "Set as default" is used).
    // The UI's "Reset to default" for the endpoint/model fields targets these and
    // stays disabled while they are empty.
    private final String defaultBaseUrl;
    private final String defaultModel;
    // The effective prompt (stored, or the default when nothing is stored). The
    // UI pre-populates the editable textarea with this.
    private final String systemPrompt;
    // The built-in default, always sent so the UI's "Reset to default" button
    // has the canonical text without hard-coding it in the frontend.
    private final String defaultSystemPrompt;
    // Shared "LLM Setup" token budgets (0 = unlimited).
    private final long dailyTokenLimit;
    private final long monthlyTokenLimit;
    private final boolean apiKeyPresent;
    // ALEC-308
    private final boolean toolsEnabled;
    private final String opennmsUrl;
    private final String opennmsUsername;
    private final boolean opennmsPasswordPresent;

    public LlmConfigStatus(boolean enabled, boolean autoEvaluate, String baseUrl, String model,
                           String defaultBaseUrl, String defaultModel,
                           String systemPrompt, String defaultSystemPrompt,
                           long dailyTokenLimit, long monthlyTokenLimit, boolean apiKeyPresent) {
        this(enabled, autoEvaluate, baseUrl, model, defaultBaseUrl, defaultModel, systemPrompt,
                defaultSystemPrompt, dailyTokenLimit, monthlyTokenLimit, apiKeyPresent,
                false, "", "", false);
    }

    public LlmConfigStatus(boolean enabled, boolean autoEvaluate, String baseUrl, String model,
                           String defaultBaseUrl, String defaultModel,
                           String systemPrompt, String defaultSystemPrompt,
                           long dailyTokenLimit, long monthlyTokenLimit, boolean apiKeyPresent,
                           boolean toolsEnabled, String opennmsUrl, String opennmsUsername,
                           boolean opennmsPasswordPresent) {
        this.enabled = enabled;
        this.autoEvaluate = autoEvaluate;
        this.baseUrl = baseUrl;
        this.model = model;
        this.defaultBaseUrl = defaultBaseUrl;
        this.defaultModel = defaultModel;
        this.systemPrompt = systemPrompt;
        this.defaultSystemPrompt = defaultSystemPrompt;
        this.dailyTokenLimit = dailyTokenLimit;
        this.monthlyTokenLimit = monthlyTokenLimit;
        this.apiKeyPresent = apiKeyPresent;
        this.toolsEnabled = toolsEnabled;
        this.opennmsUrl = opennmsUrl;
        this.opennmsUsername = opennmsUsername;
        this.opennmsPasswordPresent = opennmsPasswordPresent;
    }

    public static LlmConfigStatus from(LlmConfig config) {
        if (config == null) {
            // Fresh install: nothing configured. Auto-evaluate defaults to true so
            // a user enabling the integration for the first time gets automatic
            // suggestions without an extra click. Endpoint/model (and their
            // recorded defaults) are blank — ALEC ships no built-in default.
            return new LlmConfigStatus(false, true, "", "", "", "",
                    LlmConfigImpl.DEFAULT_SYSTEM_PROMPT, LlmConfigImpl.DEFAULT_SYSTEM_PROMPT,
                    0, 0, false);
        }
        String key = config.getApiKey();
        // Null-guard every String: records persisted before a field existed (or
        // a request object that never passed through merge) can carry nulls now
        // that the builder preserves "field not provided" as null.
        String systemPrompt = config.getSystemPrompt();
        return new LlmConfigStatus(
                config.isEnabled(),
                config.isAutoEvaluate(),
                nz(config.getBaseUrl()),
                nz(config.getModel()),
                nz(config.getDefaultBaseUrl()),
                nz(config.getDefaultModel()),
                systemPrompt == null || systemPrompt.trim().isEmpty()
                        ? LlmConfigImpl.DEFAULT_SYSTEM_PROMPT : systemPrompt,
                LlmConfigImpl.DEFAULT_SYSTEM_PROMPT,
                config.getDailyTokenLimit(),
                config.getMonthlyTokenLimit(),
                key != null && !key.isEmpty(),
                config.isToolsEnabled(),
                nz(config.getOpennmsUrl()),
                nz(config.getOpennmsUsername()),
                config.getOpennmsPassword() != null && !config.getOpennmsPassword().isEmpty());
    }

    private static String nz(String s) {
        return s == null ? "" : s;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isAutoEvaluate() {
        return autoEvaluate;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public String getModel() {
        return model;
    }

    public String getDefaultBaseUrl() {
        return defaultBaseUrl;
    }

    public String getDefaultModel() {
        return defaultModel;
    }

    public String getSystemPrompt() {
        return systemPrompt;
    }

    public String getDefaultSystemPrompt() {
        return defaultSystemPrompt;
    }

    /**
     * The engine's canonical default clustering prompt, served so the UI's
     * "Reset to default" (and its pre-fill) uses the same text the engine
     * enforces — the two cannot drift. Not stored per-config; it is always the
     * built-in constant from {@link LlmClusterEngine}.
     */
    public String getDefaultClusterPrompt() {
        return LlmClusterEngine.DEFAULT_CLUSTER_PROMPT;
    }

    public long getDailyTokenLimit() {
        return dailyTokenLimit;
    }

    public long getMonthlyTokenLimit() {
        return monthlyTokenLimit;
    }

    public boolean isApiKeyPresent() {
        return apiKeyPresent;
    }

    public boolean isToolsEnabled() {
        return toolsEnabled;
    }

    public String getOpennmsUrl() {
        return opennmsUrl;
    }

    public String getOpennmsUsername() {
        return opennmsUsername;
    }

    public boolean isOpennmsPasswordPresent() {
        return opennmsPasswordPresent;
    }
}
