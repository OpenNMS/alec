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

package org.opennms.alec.mcp;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.MissingNode;

import okhttp3.Credentials;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class OkHttpOpenNmsRestClient implements OpenNmsRestClient {

    private static final Logger LOG = LoggerFactory.getLogger(OkHttpOpenNmsRestClient.class);
    private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
    private static final int CONNECT_TIMEOUT_SECONDS = 5;
    private static final int READ_TIMEOUT_SECONDS = 20;

    private final McpConfigReader configReader;
    private final OkHttpClient httpClient;
    private final ObjectMapper objectMapper;

    public OkHttpOpenNmsRestClient(McpConfigReader configReader, ObjectMapper objectMapper) {
        this(configReader, objectMapper, new OkHttpClient.Builder()
                .connectTimeout(CONNECT_TIMEOUT_SECONDS, TimeUnit.SECONDS)
                .readTimeout(READ_TIMEOUT_SECONDS, TimeUnit.SECONDS)
                .writeTimeout(READ_TIMEOUT_SECONDS, TimeUnit.SECONDS)
                .build());
    }

    // Visible for testing.
    OkHttpOpenNmsRestClient(McpConfigReader configReader, ObjectMapper objectMapper, OkHttpClient httpClient) {
        this.configReader = Objects.requireNonNull(configReader);
        this.objectMapper = Objects.requireNonNull(objectMapper);
        this.httpClient = Objects.requireNonNull(httpClient);
    }

    @Override
    public boolean isConfigured() {
        return configReader.read().hasOpennmsCredentials();
    }

    @Override
    public JsonNode get(String pathWithQuery) throws ToolException {
        McpConfig config = requireConfig();
        Request request = builder(config, pathWithQuery).get().build();
        return execute(request);
    }

    @Override
    public JsonNode post(String path, JsonNode body) throws ToolException {
        McpConfig config = requireConfig();
        String json;
        try {
            json = objectMapper.writeValueAsString(body);
        } catch (IOException e) {
            throw new ToolException("Could not serialize request body");
        }
        Request request = builder(config, path).post(RequestBody.create(JSON, json)).build();
        return execute(request);
    }

    @Override
    public String checkConnectivity(McpConfig config) {
        if (config == null || !config.hasOpennmsCredentials()) {
            return "No OpenNMS login configured";
        }
        Request request;
        try {
            request = builder(config, "info").get().build();
        } catch (ToolException | IllegalArgumentException e) {
            return "Invalid OpenNMS URL: " + e.getMessage();
        }
        try (Response response = httpClient.newCall(request).execute()) {
            if (response.code() == 401 || response.code() == 403) {
                return "OpenNMS rejected the login (HTTP " + response.code() + ")";
            }
            if (!response.isSuccessful()) {
                return "OpenNMS returned HTTP " + response.code() + " for /rest/info";
            }
            ResponseBody body = response.body();
            String text = body == null ? "" : body.string();
            String version = "";
            try {
                version = objectMapper.readTree(text).path("displayVersion").asText("");
            } catch (IOException ignore) {
                // a 200 without JSON still proves reachability + auth
            }
            return "OK: reached OpenNMS " + version + " at " + config.getEffectiveOpennmsUrl()
                    + " as " + config.getOpennmsUsername();
        } catch (IOException e) {
            return "Could not reach " + config.getEffectiveOpennmsUrl() + ": " + e.getMessage();
        }
    }

    private McpConfig requireConfig() throws ToolException {
        McpConfig config = configReader.read();
        if (!config.hasOpennmsCredentials()) {
            throw new ToolException("OpenNMS REST access is not configured (set the OpenNMS login on the LLM Setup page)");
        }
        return config;
    }

    private static Request.Builder builder(McpConfig config, String pathWithQuery) throws ToolException {
        String base = config.getEffectiveOpennmsUrl() + "/rest/";
        HttpUrl url = HttpUrl.parse(base + pathWithQuery);
        if (url == null) {
            throw new ToolException("Invalid OpenNMS REST URL");
        }
        // UTF-8, explicitly: OkHttp's two-argument overload encodes ISO-8859-1,
        // while OpenNMS (Spring Security) decodes the Basic header as UTF-8, so
        // a non-ASCII password would be rejected with a misleading 401.
        return new Request.Builder()
                .url(url)
                .header("Authorization", Credentials.basic(config.getOpennmsUsername(), config.getOpennmsPassword(),
                        StandardCharsets.UTF_8))
                .header("Accept", "application/json");
    }

    private JsonNode execute(Request request) throws ToolException {
        try (Response response = httpClient.newCall(request).execute()) {
            if (response.code() == 204) {
                return MissingNode.getInstance();
            }
            ResponseBody body = response.body();
            String text = body == null ? "" : body.string();
            if (response.code() == 401 || response.code() == 403) {
                throw new ToolException("OpenNMS rejected the configured login (HTTP " + response.code() + ")");
            }
            if (response.code() == 404) {
                throw new ToolException("OpenNMS REST returned 404 for " + request.url().encodedPath());
            }
            if (!response.isSuccessful()) {
                LOG.debug("OpenNMS REST {} returned HTTP {}", request.url().encodedPath(), response.code());
                throw new ToolException("OpenNMS REST returned HTTP " + response.code());
            }
            if (text.isEmpty()) {
                return MissingNode.getInstance();
            }
            return objectMapper.readTree(text);
        } catch (IOException e) {
            throw new ToolException("OpenNMS REST call failed: " + e.getMessage());
        }
    }
}
