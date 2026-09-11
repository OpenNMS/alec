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

import javax.ws.rs.core.Response;

import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.McpConfigReader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LlmValidationRestImpl implements LlmValidationRest {

    private static final Logger LOG = LoggerFactory.getLogger(LlmValidationRestImpl.class);

    private final LlmSuggestionService suggestionService;
    private final LlmConfigReader configReader;
    // Stored OpenNMS login, to fill fields a validate-tools request leaves out
    // entirely (null), as opposed to blank (""), which means "none".
    private final McpConfigReader mcpConfigReader;

    public LlmValidationRestImpl(LlmSuggestionService suggestionService, LlmConfigReader configReader) {
        this(suggestionService, configReader, null);
    }

    public LlmValidationRestImpl(LlmSuggestionService suggestionService, LlmConfigReader configReader,
                                 McpConfigReader mcpConfigReader) {
        this.suggestionService = Objects.requireNonNull(suggestionService);
        this.configReader = Objects.requireNonNull(configReader);
        this.mcpConfigReader = mcpConfigReader;
    }

    @Override
    public Response validate(ValidationRequest request) {
        Resolved r = resolve(request);
        if (r.rejection != null) {
            return r.rejection;
        }
        ValidationResult result = suggestionService.validate(r.apiKey, r.baseUrl, r.model);
        return Response.ok().entity(result).build();
    }

    @Override
    public Response validateTools(ValidationRequest request) {
        Resolved r = resolve(request);
        if (r.rejection != null) {
            return r.rejection;
        }
        ValidationRequest req = request == null ? new ValidationRequest() : request;
        // The login as the form shows it is tested as-is. A field that is absent
        // from the request (null) falls back to the stored value; a field sent
        // blank ("") means exactly that — the form always sends URL and username,
        // so a blank username is a missing login, not the stored one. The
        // password is resolved by the service (stored only for the saved URL).
        McpConfig override = null;
        if (req.getOpennmsUrl() != null || req.getOpennmsUsername() != null || req.getOpennmsPassword() != null) {
            McpConfig stored = mcpConfigReader == null ? McpConfig.DISABLED : mcpConfigReader.read();
            String url = req.getOpennmsUrl() != null ? req.getOpennmsUrl() : stored.getOpennmsUrl();
            String user = req.getOpennmsUsername() != null ? req.getOpennmsUsername() : stored.getOpennmsUsername();
            override = new McpConfig(true, url, user, req.getOpennmsPassword());
        }
        ValidationResult result = suggestionService.validateTools(r.apiKey, r.baseUrl, r.model, override);
        return Response.ok().entity(result).build();
    }

    private static boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    /** Endpoint/model/key resolved from the request + stored config, or a rejection Response. */
    private static final class Resolved {
        String apiKey;
        String baseUrl;
        String model;
        Response rejection;
    }

    private Resolved resolve(ValidationRequest request) {
        Resolved out = new Resolved();
        ValidationRequest req = request == null ? new ValidationRequest() : request;
        Optional<LlmConfigReader.Config> stored = configReader.read();

        // Endpoint/model: use what the form sent, else the persisted value.
        String storedUrl = stored.map(LlmConfigReader.Config::getBaseUrl)
                .orElse(LlmConfigReader.DEFAULT_BASE_URL);
        String baseUrl = firstNonBlank(req.getBaseUrl(), storedUrl);
        String model = firstNonBlank(req.getModel(),
                stored.map(LlmConfigReader.Config::getModel).orElse(LlmConfigReader.DEFAULT_MODEL));

        // The key: a blank key in the request means "use the one already
        // stored" so the UI can validate without re-sending the secret — but
        // ONLY when the target endpoint is the one the key was saved with.
        // Falling back to the stored key for a caller-supplied endpoint would
        // let any authenticated REST caller exfiltrate the operator's key by
        // pointing "validation" at a host they control.
        String requestKey = req.getApiKey() == null ? "" : req.getApiKey().trim();
        String apiKey;
        if (!requestKey.isEmpty()) {
            apiKey = requestKey;
        } else if (sameEndpoint(baseUrl, storedUrl)) {
            apiKey = stored.map(LlmConfigReader.Config::getApiKey).orElse("");
        } else {
            out.rejection = Response.ok().entity(ValidationResult.fail(
                    "The endpoint differs from the saved one — re-enter the API key to validate "
                            + "a new endpoint. (The stored key is only ever sent to the endpoint "
                            + "it was saved with.)")).build();
            return out;
        }

        // Never log the key; the result message is key-free by construction.
        LOG.debug("Validating LLM config: baseUrl={}, model={}, keyProvided={}",
                baseUrl, model, !apiKey.isEmpty());
        out.apiKey = apiKey;
        out.baseUrl = baseUrl;
        out.model = model;
        return out;
    }

    /** Endpoint equality for the stored-key rule: trim + ignore trailing slashes. */
    static boolean sameEndpoint(String a, String b) {
        return normalizeUrl(a).equals(normalizeUrl(b));
    }

    private static String normalizeUrl(String url) {
        String s = url == null ? "" : url.trim();
        while (s.endsWith("/")) {
            s = s.substring(0, s.length() - 1);
        }
        return s;
    }

    private static String firstNonBlank(String a, String b) {
        if (a != null && !a.trim().isEmpty()) {
            return a.trim();
        }
        return b == null ? "" : b;
    }
}
