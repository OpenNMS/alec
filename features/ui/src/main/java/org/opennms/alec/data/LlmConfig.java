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

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * Persisted + POST-body form of the LLM integration configuration.
 *
 * The apiKey field is the actual secret. It travels server&rarr;KV-store
 * and client&rarr;server (POST), but is never written into a GET response —
 * the REST layer projects to {@link LlmConfigStatus} on the way out so
 * the key never leaves the OpenNMS host once stored.
 *
 * clearApiKey is a transient POST-only flag that asks the server to wipe any
 * persisted key; it is not persisted itself.
 */
@JsonDeserialize(builder = LlmConfigImpl.Builder.class)
@JsonPropertyOrder({"enabled", "autoEvaluate", "baseUrl", "model", "systemPrompt",
        "dailyTokenLimit", "monthlyTokenLimit", "apiKey", "clearApiKey",
        "toolsEnabled", "opennmsUrl", "opennmsUsername", "opennmsPassword", "clearOpennmsPassword"})
public interface LlmConfig {
    boolean isEnabled();

    /**
     * When true (the default), the SituationHandler fires an LLM analysis
     * automatically for every new situation. When false, no automatic
     * analysis runs — the user must click the Re-evaluate button on the AI
     * Suggestions tab to trigger one per situation.
     */
    boolean isAutoEvaluate();

    /**
     * OpenAI-compatible API base URL the suggestion client posts to (it appends
     * {@code /chat/completions}). No built-in default — blank until the operator
     * configures a provider (OpenAI, Anthropic, OpenRouter, a local model server,
     * etc.); the feature can't be enabled while it is blank.
     */
    String getBaseUrl();

    /**
     * Model identifier to request, e.g. {@code claude-sonnet-4-6} or
     * {@code openai/gpt-4o}. The exact form depends on the chosen provider. No
     * built-in default — blank until the operator picks a model.
     */
    String getModel();

    /**
     * Operator-recorded default endpoint, set via the UI's "Set as default"
     * control; empty until recorded. Drives the UI's "Reset to default" for the
     * endpoint field (disabled while empty). Not used by the runtime suggestion
     * client — only the UI consumes it.
     */
    String getDefaultBaseUrl();

    /**
     * Operator-recorded default model, the model-field counterpart to
     * {@link #getDefaultBaseUrl()}. Empty until recorded.
     */
    String getDefaultModel();

    /**
     * System prompt that frames the root-cause analysis. Operators can customize
     * it (e.g. to add site-specific context) or leave it blank to use the
     * built-in default ({@link LlmConfigImpl#DEFAULT_SYSTEM_PROMPT}). Unlike the
     * API key, this is not a secret, so it is echoed back in GET responses.
     */
    String getSystemPrompt();

    /**
     * Maximum LLM tokens ALEC may consume per UTC day across all LLM features
     * (root cause analysis and, later, LLM-based clustering). 0 means no limit.
     * Part of the shared "LLM Setup". When the day's recorded usage reaches this
     * cap, ALEC stops issuing LLM requests until the next day.
     */
    long getDailyTokenLimit();

    /**
     * Maximum LLM tokens per calendar month (UTC), shared across all LLM
     * features. 0 means no limit. Counterpart to {@link #getDailyTokenLimit()}.
     */
    long getMonthlyTokenLimit();

    String getApiKey();

    boolean isClearApiKey();

    /** ALEC-308: offer the MCP data tools to ALEC's own model calls (RCA + clustering). */
    boolean isToolsEnabled();

    /** ALEC-308: OpenNMS base URL for the REST-backed tools; blank = http://localhost:8980/opennms. */
    String getOpennmsUrl();

    /** ALEC-308: OpenNMS login for the REST-backed tools (events, metrics, device config). */
    String getOpennmsUsername();

    /** ALEC-308: write-only, like the API key — never echoed back. */
    String getOpennmsPassword();

    boolean isClearOpennmsPassword();
}
