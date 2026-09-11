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
import java.util.Objects;
import java.util.Optional;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Reads the MCP fields out of the LLM configuration record that features/ui
 * persists (context {@value #CONFIG_CONTEXT}, key {@value #CONFIG_KEY}). Like
 * the reader in features/llm-suggestions it deliberately parses only the
 * fields this bundle needs, so it depends on neither features/ui nor
 * features/llm-suggestions.
 *
 * <p>Reads fresh on every call: the operator can change the login or the
 * toggle from the UI at any time and the next tool call must see it.
 */
public class KvMcpConfigReader implements McpConfigReader {

    // Magic strings — must match KeyEnum.LLM_CONFIG / ALECRestUtils.ALEC_CONFIG
    // in features/ui and the same constants in features/llm-suggestions and
    // engine/llm. Change them all together.
    static final String CONFIG_KEY = "LLM_CONFIG";
    static final String CONFIG_CONTEXT = "ALEC_CONFIG";

    static final String FIELD_TOOLS_ENABLED = "toolsEnabled";
    static final String FIELD_OPENNMS_URL = "opennmsUrl";
    static final String FIELD_OPENNMS_USERNAME = "opennmsUsername";
    static final String FIELD_OPENNMS_PASSWORD = "opennmsPassword";

    private static final Logger LOG = LoggerFactory.getLogger(KvMcpConfigReader.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public KvMcpConfigReader(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    @Override
    public McpConfig read() {
        Optional<String> raw;
        try {
            raw = kvStore.get(CONFIG_KEY, CONFIG_CONTEXT);
        } catch (RuntimeException e) {
            LOG.warn("Could not read LLM config from the KV store: {}", e.getMessage());
            return McpConfig.DISABLED;
        }
        if (raw.isEmpty()) {
            return McpConfig.DISABLED;
        }
        try {
            JsonNode node = objectMapper.readTree(raw.get());
            return new McpConfig(
                    node.path(FIELD_TOOLS_ENABLED).asBoolean(false),
                    node.path(FIELD_OPENNMS_URL).asText(""),
                    node.path(FIELD_OPENNMS_USERNAME).asText(""),
                    node.path(FIELD_OPENNMS_PASSWORD).asText(""));
        } catch (IOException e) {
            // The record carries secrets; never log a parser message that may
            // embed a snippet of the source document.
            String safeReason = e instanceof JsonProcessingException
                    ? ((JsonProcessingException) e).getOriginalMessage()
                    : e.getClass().getSimpleName();
            LOG.warn("Malformed LLM config at {}/{}: {}", CONFIG_CONTEXT, CONFIG_KEY, safeReason);
            return McpConfig.DISABLED;
        }
    }
}
