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

import java.util.concurrent.CompletableFuture;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.mcp.McpConfig;

/**
 * Asks an LLM for diagnostic suggestions about a given Situation.
 *
 * The call is made against any OpenAI-compatible chat-completions endpoint
 * (OpenRouter, OpenAI, Anthropic's compatibility endpoint, a local model
 * server, ...) so the integration is not tied to a single provider or model.
 *
 * Implementations must be non-blocking from the caller's perspective —
 * situation creation cannot wait on a multi-second LLM round-trip. The
 * returned future completes exceptionally on network errors, HTTP errors,
 * rate-limit rejections, or malformed responses.
 */
public interface LlmSuggestionService {

    /**
     * Submit a suggestion request for the given situation.
     *
     * @param situation the situation to analyze
     * @param apiKey    the provider API key, sent as a Bearer token
     *                  (server-side, never logged)
     * @param baseUrl   the OpenAI-compatible API base URL, e.g.
     *                  {@code https://api.anthropic.com/v1/}; the client appends
     *                  {@code /chat/completions}
     * @param model     the model identifier to request, e.g.
     *                  {@code claude-sonnet-4-6} (Anthropic) or {@code openai/gpt-4o}
     * @param systemPrompt the system prompt that frames the analysis. A blank or
     *                  null value falls back to the built-in default
     *                  ({@link LlmSuggestionServiceImpl#DEFAULT_SYSTEM_PROMPT}).
     * @param useTools  ALEC-308: offer the model the MCP data tools and execute
     *                  its tool calls before it reports (a multi-round exchange)
     * @return future completing with the suggestions, or completing
     *         exceptionally on any failure
     */
    CompletableFuture<Suggestions> requestSuggestions(Situation situation, String apiKey,
                                                      String baseUrl, String model,
                                                      String systemPrompt, boolean useTools);

    /**
     * Synchronously probe the configured endpoint with a minimal request to
     * confirm the endpoint, model and API key work together. Exercises the same
     * function-calling path a real suggestion uses, so a success means real
     * calls will work too. Never throws — failures are returned as a
     * {@link ValidationResult} with {@code ok=false} and a human-readable reason.
     *
     * @param apiKey  provider API key, sent as a Bearer token
     * @param baseUrl OpenAI-compatible API base URL
     * @param model   model identifier to probe
     */
    ValidationResult validate(String apiKey, String baseUrl, String model);

    /**
     * ALEC-308: probe the endpoint with the MCP tools offered. The model is
     * asked to call {@code alec_status} and then answer, through a report
     * tool, whether it could read ALEC's tools ({@code ok}) with a one-line
     * explanation — which becomes the result message. Also checks the OpenNMS
     * REST login the REST-backed tools depend on.
     *
     * @param opennmsOverride an unsaved OpenNMS login to test instead of the
     *                        stored one, or null to test what is stored
     */
    ValidationResult validateTools(String apiKey, String baseUrl, String model, McpConfig opennmsOverride);
}
