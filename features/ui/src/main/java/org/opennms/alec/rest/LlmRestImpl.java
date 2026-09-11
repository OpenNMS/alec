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

package org.opennms.alec.rest;

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;
import org.opennms.alec.data.LlmConfigStatus;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmRestImpl implements LlmRest {

    private static final Logger LOG = LoggerFactory.getLogger(LlmRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    // ALEC-308: used to verify the OpenNMS login before a save that enables
    // tool access. Null (tests) skips the connectivity probe but not the
    // presence check.
    private final OpenNmsRestClient openNmsRest;

    public LlmRestImpl(KeyValueStore<String> kvStore) {
        this(kvStore, null);
    }

    public LlmRestImpl(KeyValueStore<String> kvStore, OpenNmsRestClient openNmsRest) {
        this.kvStore = kvStore;
        this.objectMapper = new ObjectMapper();
        this.openNmsRest = openNmsRest;
    }

    @Override
    public Response getConfiguration() {
        LOG.debug("Get LLM configuration");
        try {
            LlmConfig persisted = readPersisted().orElse(null);
            return Response.ok().entity(LlmConfigStatus.from(persisted)).build();
        } catch (JsonProcessingException e) {
            return configIoError(e);
        }
    }

    @Override
    public Response setConfiguration(LlmConfig request) {
        // Never log the request object as-is — it carries the API key.
        // LlmConfigImpl#toString masks it, but defend in depth anyway.
        LOG.debug("Set LLM configuration: enabled={}, providingNewKey={}, clearApiKey={}",
                request != null && request.isEnabled(),
                request != null && request.getApiKey() != null && !request.getApiKey().isEmpty(),
                request != null && request.isClearApiKey());

        if (request == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Missing request body").build();
        }

        try {
            LlmConfig existing = readPersisted().orElse(null);
            LlmConfig merged = merge(existing, request);
            // Validation: the documented invariant is that the feature cannot be
            // enabled until endpoint, model AND key are all present. Enforce all
            // three here (not just the key) — merge() cannot produce a config
            // that is enabled yet unusable, whatever partial body was POSTed.
            if (merged.isEnabled()) {
                StringBuilder missing = new StringBuilder();
                if (isBlank(merged.getApiKey())) {
                    missing.append("an API key");
                }
                if (isBlank(merged.getBaseUrl())) {
                    missing.append(missing.length() > 0 ? ", " : "").append("an endpoint URL");
                }
                if (isBlank(merged.getModel())) {
                    missing.append(missing.length() > 0 ? ", " : "").append("a model");
                }
                if (missing.length() > 0) {
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity("Cannot enable LLM integration without " + missing)
                            .build();
                }
            }
            // ALEC-308: tool access must not be saved without a working OpenNMS
            // login — the REST-backed tools would silently be missing and the UI
            // check would have been skipped. Presence is checked here; the login
            // itself is probed against /rest/info.
            if (merged.isToolsEnabled()) {
                // The stored password is only ever sent to the URL it was saved
                // with — a new URL needs the password re-entered (same rule as
                // the API key), else the save-time probe would hand the stored
                // password to whatever host the request names.
                if (existing != null && !isBlank(existing.getOpennmsPassword())
                        && isBlank(request.getOpennmsPassword())
                        && !sameOpennmsUrl(merged.getOpennmsUrl(), existing.getOpennmsUrl())) {
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity("Cannot enable MCP tool access: the OpenNMS URL changed — re-enter the "
                                    + "OpenNMS password for the new URL")
                            .build();
                }
                if (isBlank(merged.getOpennmsUsername()) || isBlank(merged.getOpennmsPassword())) {
                    return Response.status(Response.Status.BAD_REQUEST)
                            .entity("Cannot enable MCP tool access without an OpenNMS login "
                                    + "(use a dedicated read-only OpenNMS account)")
                            .build();
                }
                if (openNmsRest != null) {
                    String outcome = openNmsRest.checkConnectivity(new McpConfig(true, merged.getOpennmsUrl(),
                            merged.getOpennmsUsername(), merged.getOpennmsPassword()));
                    if (!outcome.startsWith("OK:")) {
                        return Response.status(Response.Status.BAD_REQUEST)
                                .entity("Cannot enable MCP tool access: the OpenNMS login does not work ("
                                        + outcome + ")")
                                .build();
                    }
                }
            }
            persist(merged);
            return Response.ok().entity(LlmConfigStatus.from(merged)).build();
        } catch (JsonProcessingException e) {
            return configIoError(e);
        }
    }

    private static boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    /** Blank means the default local URL; trailing slashes and case do not matter. */
    static boolean sameOpennmsUrl(String a, String b) {
        return new McpConfig(false, a, "", "").getEffectiveOpennmsUrl()
                .equalsIgnoreCase(new McpConfig(false, b, "", "").getEffectiveOpennmsUrl());
    }

    /**
     * 500 for a config (de)serialization failure. Deliberately NOT
     * {@link ALECRestUtils#somethingWentWrong}: Jackson exception messages embed
     * a snippet of the source document — here the persisted config blob, which
     * contains the API key — so neither the response body nor the log line may
     * carry {@code e.getMessage()}. {@code getOriginalMessage()} excludes the
     * location/source part.
     */
    private static Response configIoError(JsonProcessingException e) {
        LOG.error("LLM config (de)serialization failed: {}", e.getOriginalMessage());
        return Response.serverError()
                .entity("The stored LLM configuration could not be read or written")
                .build();
    }

    /**
     * Merge a POST request onto the persisted record. Rules:
     * <ul>
     *   <li>Every String field has preserve-when-absent semantics: a field that
     *       is ABSENT from the request body (null after deserialization) keeps
     *       its stored value; a field explicitly sent — including as {@code ""} —
     *       replaces it. A partial POST (e.g. {@code {"enabled":true}}) can
     *       therefore never silently wipe the endpoint/model/prompt.</li>
     *   <li>{@code clearApiKey=true} wipes the stored key (and forces enabled=false).</li>
     *   <li>A non-empty {@code apiKey} in the request replaces the stored key.</li>
     *   <li>An empty/null {@code apiKey} leaves the stored key untouched — UI can
     *       toggle the enabled flag without re-sending the secret.</li>
     *   <li>{@code enabled}/{@code autoEvaluate} are carried through from the
     *       request (booleans can't express "absent"; the UI always sends them).</li>
     *   <li>The merged result is normalized: endpoint/model/defaults are never
     *       null (blank at minimum) and a blank system prompt falls back to the
     *       built-in default — persisted records always carry concrete values.</li>
     * </ul>
     */
    static LlmConfig merge(LlmConfig existing, LlmConfig request) {
        // null = "field not provided" -> preserve stored value.
        String baseUrl = choose(request.getBaseUrl(), existing == null ? null : existing.getBaseUrl());
        String model = choose(request.getModel(), existing == null ? null : existing.getModel());
        String defaultBaseUrl = choose(request.getDefaultBaseUrl(),
                existing == null ? null : existing.getDefaultBaseUrl());
        String defaultModel = choose(request.getDefaultModel(),
                existing == null ? null : existing.getDefaultModel());
        String systemPrompt = choose(request.getSystemPrompt(),
                existing == null ? null : existing.getSystemPrompt());
        // ALEC-308: same preserve-when-absent rule for the OpenNMS REST fields;
        // the password behaves like the API key (replace when sent, keep when
        // omitted, drop when clearOpennmsPassword is set).
        String opennmsUrl = choose(request.getOpennmsUrl(),
                existing == null ? null : existing.getOpennmsUrl());
        String opennmsUsername = choose(request.getOpennmsUsername(),
                existing == null ? null : existing.getOpennmsUsername());
        String opennmsPassword;
        if (request.isClearOpennmsPassword()) {
            opennmsPassword = null;
        } else if (request.getOpennmsPassword() != null && !request.getOpennmsPassword().isEmpty()) {
            opennmsPassword = request.getOpennmsPassword();
        } else {
            opennmsPassword = existing == null ? null : existing.getOpennmsPassword();
        }

        LlmConfigImpl.Builder builder = LlmConfigImpl.newBuilder()
                .autoEvaluate(request.isAutoEvaluate())
                .toolsEnabled(request.isToolsEnabled())
                .opennmsUrl(nz(opennmsUrl))
                .opennmsUsername(nz(opennmsUsername))
                .opennmsPassword(opennmsPassword)
                .baseUrl(nz(baseUrl))
                .model(nz(model))
                .defaultBaseUrl(nz(defaultBaseUrl))
                .defaultModel(nz(defaultModel))
                // Blank means "use the default" so clearing the textarea in the
                // UI doesn't persist an empty system message.
                .systemPrompt(isBlank(systemPrompt) ? LlmConfigImpl.DEFAULT_SYSTEM_PROMPT : systemPrompt);

        if (request.isClearApiKey()) {
            // Clearing the key disables the integration but preserves the user's
            // autoEvaluate / endpoint / model preferences (and recorded defaults)
            // so re-enabling later doesn't surprise them. The endpoint/model/
            // prompt were already applied to the builder above with preserve-
            // when-absent semantics; carry the token budgets through too.
            return builder
                    .enabled(false)
                    .dailyTokenLimit(request.getDailyTokenLimit())
                    .monthlyTokenLimit(request.getMonthlyTokenLimit())
                    .apiKey(null)
                    .build();
        }

        String requestKey = request.getApiKey();
        if (requestKey != null && !requestKey.isEmpty()) {
            builder.apiKey(requestKey);
        } else if (existing != null) {
            builder.apiKey(existing.getApiKey());
        }
        // Token budgets are primitive longs (can't express "absent"); the UI
        // always submits the current values, so carry them through like the
        // enabled/autoEvaluate flags.
        builder.dailyTokenLimit(request.getDailyTokenLimit());
        builder.monthlyTokenLimit(request.getMonthlyTokenLimit());
        return builder.enabled(request.isEnabled()).build();
    }

    /** Request value when provided (non-null, "" counts as provided), else stored. */
    private static String choose(String requested, String storedValue) {
        return requested != null ? requested : storedValue;
    }

    private static String nz(String s) {
        return s == null ? "" : s;
    }

    private Optional<LlmConfig> readPersisted() throws JsonProcessingException {
        Optional<String> raw = kvStore.get(KeyEnum.LLM_CONFIG.toString(), ALECRestUtils.ALEC_CONFIG);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(objectMapper.readValue(raw.get(), LlmConfigImpl.class));
    }

    private void persist(LlmConfig config) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.LLM_CONFIG.toString(),
                objectMapper.writeValueAsString(config),
                ALECRestUtils.ALEC_CONFIG);
        future.join();
    }
}
