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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;
import org.opennms.alec.data.LlmConfigStatus;
import org.opennms.alec.engine.llm.LlmClusterEngine;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class LlmConfigImplTest {

    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void persistedJsonRoundtripsAllFields() throws JsonProcessingException {
        LlmConfig original = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-test-12345")
                .build();
        String json = objectMapper.writeValueAsString(original);

        LlmConfig roundtripped = objectMapper.readValue(json, LlmConfigImpl.class);
        assertThat(roundtripped.isEnabled(), is(true));
        assertThat(roundtripped.getApiKey(), equalTo("sk-ant-test-12345"));
        assertThat(roundtripped.isClearApiKey(), is(false));
    }

    @Test
    public void toStringNeverIncludesApiKey() {
        LlmConfig config = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-supersecret-value")
                .build();
        String rendered = config.toString();
        assertThat("toString must not leak the API key",
                rendered.contains("sk-ant-supersecret-value"), is(false));
        assertThat("toString should mark the key as present",
                rendered.contains("apiKeyPresent=true"), is(true));
    }

    @Test
    public void statusFromNullConfigReportsDisabledAndAbsent() {
        LlmConfigStatus status = LlmConfigStatus.from(null);
        assertThat(status.isEnabled(), is(false));
        assertThat(status.isApiKeyPresent(), is(false));
    }

    @Test
    public void statusFromConfigWithKeyReportsKeyPresentButNeverExposesIt() throws JsonProcessingException {
        LlmConfig config = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-secret")
                .build();
        LlmConfigStatus status = LlmConfigStatus.from(config);
        assertThat(status.isEnabled(), is(true));
        assertThat(status.isApiKeyPresent(), is(true));

        // The serialized status response must not carry the key value under any name.
        String json = objectMapper.writeValueAsString(status);
        assertThat("status JSON must not leak the key value",
                json.contains("sk-ant-secret"), is(false));
        assertThat("status JSON must not contain an apiKey field at all",
                json.contains("apiKey\""), is(false));
    }

    @Test
    public void statusFromConfigWithEmptyKeyReportsKeyAbsent() {
        LlmConfig config = LlmConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("")
                .build();
        LlmConfigStatus status = LlmConfigStatus.from(config);
        assertThat(status.isApiKeyPresent(), is(false));
    }

    @Test
    public void systemPromptRoundtripsAndBlankFallsBackToDefault() throws JsonProcessingException {
        LlmConfig custom = LlmConfigImpl.newBuilder()
                .apiKey("k")
                .systemPrompt("Custom ACME prompt.")
                .build();
        LlmConfig back = objectMapper.readValue(objectMapper.writeValueAsString(custom),
                LlmConfigImpl.class);
        assertThat(back.getSystemPrompt(), equalTo("Custom ACME prompt."));

        // The DTO keeps a blank prompt blank (trimmed) — "blank means use the
        // default" is applied by LlmRestImpl#merge before persisting, and by
        // LlmConfigStatus#from when serving, so the raw request object stays
        // able to distinguish "cleared" from "custom".
        LlmConfig blank = LlmConfigImpl.newBuilder().apiKey("k").systemPrompt("  ").build();
        assertThat(blank.getSystemPrompt(), equalTo(""));
        assertThat(LlmConfigStatus.from(blank).getSystemPrompt(),
                equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));

        // Never set at all -> null ("field not provided"), which merge treats
        // as "preserve the stored prompt".
        LlmConfig absent = LlmConfigImpl.newBuilder().apiKey("k").build();
        assertThat(absent.getSystemPrompt(), nullValue());
    }

    @Test
    public void statusCarriesEffectiveAndDefaultSystemPrompt() {
        LlmConfig c = LlmConfigImpl.newBuilder()
                .apiKey("k")
                .systemPrompt("Custom ACME prompt.")
                .build();
        LlmConfigStatus s = LlmConfigStatus.from(c);
        assertThat(s.getSystemPrompt(), equalTo("Custom ACME prompt."));
        assertThat(s.getDefaultSystemPrompt(), equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));

        // A null config (nothing stored yet) surfaces the default as both the
        // effective and the default prompt so the form pre-populates correctly.
        LlmConfigStatus fromNull = LlmConfigStatus.from(null);
        assertThat(fromNull.getSystemPrompt(), equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));
        assertThat(fromNull.getDefaultSystemPrompt(), equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));
    }

    @Test
    public void statusServesEngineDefaultClusterPrompt() {
        // The default clustering prompt is served straight from the engine's
        // canonical constant so the UI never hard-codes (and drifts from) it.
        assertThat(LlmConfigStatus.from(null).getDefaultClusterPrompt(),
                equalTo(LlmClusterEngine.DEFAULT_CLUSTER_PROMPT));
        LlmConfig c = LlmConfigImpl.newBuilder().apiKey("k").build();
        assertThat(LlmConfigStatus.from(c).getDefaultClusterPrompt(),
                equalTo(LlmClusterEngine.DEFAULT_CLUSTER_PROMPT));
    }

    @Test
    public void autoEvaluateDefaultsToTrueOnFreshBuilder() {
        LlmConfig c = LlmConfigImpl.newBuilder().enabled(true).apiKey("k").build();
        assertThat("autoEvaluate is opt-out, not opt-in — default true preserves the original "
                        + "automatic behavior for new and pre-existing installs",
                c.isAutoEvaluate(), is(true));
    }

    @Test
    public void autoEvaluateSurfacesOnStatus() {
        LlmConfig c = LlmConfigImpl.newBuilder()
                .enabled(true)
                .autoEvaluate(false)
                .apiKey("k")
                .build();
        LlmConfigStatus s = LlmConfigStatus.from(c);
        assertThat(s.isAutoEvaluate(), is(false));
    }

    @Test
    public void statusFromNullConfigDefaultsAutoEvaluateTrue() {
        // Pre-config / fresh install: surface auto-evaluate as true so the UI
        // shows the checkbox checked by default (matches enabling-LLM UX).
        LlmConfigStatus s = LlmConfigStatus.from(null);
        assertThat(s.isAutoEvaluate(), is(true));
    }

    @Test
    public void deserializeIgnoresUnknownFields() throws JsonProcessingException {
        // Persisted JSON from a future version may include fields we don't know
        // about yet (e.g. a model selector); we must tolerate them.
        String json = "{\"enabled\":true,\"apiKey\":\"k\",\"futureField\":\"x\"}";
        LlmConfig config = objectMapper.readValue(json, LlmConfigImpl.class);
        assertThat(config.isEnabled(), is(true));
        assertThat(config.getApiKey(), equalTo("k"));
    }

    // --- ALEC-308: MCP tool access + OpenNMS REST login ---

    @Test
    public void mcpFieldsRoundTripThroughJson() throws JsonProcessingException {
        LlmConfig original = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("k")
                .toolsEnabled(true)
                .opennmsUrl(" http://nms:8980/opennms ")
                .opennmsUsername(" admin ")
                .opennmsPassword(" pw\n")
                .clearOpennmsPassword(true)
                .build();
        assertThat("trimmed on the way in", original.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(original.getOpennmsUsername(), equalTo("admin"));
        assertThat(original.getOpennmsPassword(), equalTo("pw"));

        String json = objectMapper.writeValueAsString(original);
        assertThat(json.contains("\"toolsEnabled\":true"), is(true));
        assertThat(json.contains("\"opennmsUrl\":\"http://nms:8980/opennms\""), is(true));
        assertThat(json.contains("\"opennmsUsername\":\"admin\""), is(true));
        assertThat(json.contains("\"opennmsPassword\":\"pw\""), is(true));
        assertThat(json.contains("\"clearOpennmsPassword\":true"), is(true));

        LlmConfig back = objectMapper.readValue(json, LlmConfigImpl.class);
        assertThat(back.isToolsEnabled(), is(true));
        assertThat(back.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(back.getOpennmsUsername(), equalTo("admin"));
        assertThat(back.getOpennmsPassword(), equalTo("pw"));
        assertThat(back.isClearOpennmsPassword(), is(true));
    }

    @Test
    public void legacyRecordWithoutMcpFieldsDeserializesWithDefaults() throws JsonProcessingException {
        String legacy = "{\"enabled\":true,\"autoEvaluate\":true,\"baseUrl\":\"https://api.example/v1\","
                + "\"model\":\"m\",\"systemPrompt\":\"p\",\"dailyTokenLimit\":0,\"monthlyTokenLimit\":0,"
                + "\"apiKey\":\"k\",\"clearApiKey\":false}";
        LlmConfig config = objectMapper.readValue(legacy, LlmConfigImpl.class);
        assertThat("tools are opt-in", config.isToolsEnabled(), is(false));
        assertThat(config.getOpennmsUrl(), nullValue());
        assertThat(config.getOpennmsUsername(), nullValue());
        assertThat(config.getOpennmsPassword(), nullValue());
        assertThat(config.isClearOpennmsPassword(), is(false));
        // and the status projection copes with those nulls
        LlmConfigStatus status = LlmConfigStatus.from(config);
        assertThat(status.isToolsEnabled(), is(false));
        assertThat(status.getOpennmsUrl(), equalTo(""));
        assertThat(status.getOpennmsUsername(), equalTo(""));
        assertThat(status.isOpennmsPasswordPresent(), is(false));
    }

    @Test
    public void statusExposesMcpFieldsButNeverTheOpenNmsPassword() throws JsonProcessingException {
        LlmConfig config = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("k")
                .toolsEnabled(true)
                .opennmsUrl("http://nms:8980/opennms")
                .opennmsUsername("admin")
                .opennmsPassword("s3cret-nms-pw")
                .build();
        LlmConfigStatus status = LlmConfigStatus.from(config);
        assertThat(status.isToolsEnabled(), is(true));
        assertThat(status.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(status.getOpennmsUsername(), equalTo("admin"));
        assertThat(status.isOpennmsPasswordPresent(), is(true));

        String json = objectMapper.writeValueAsString(status);
        assertThat("status JSON must not leak the OpenNMS password", json.contains("s3cret-nms-pw"), is(false));
        assertThat(json.contains("opennmsPassword\""), is(false));
        assertThat(json.contains("\"opennmsPasswordPresent\":true"), is(true));
        assertThat(json.contains("\"toolsEnabled\":true"), is(true));
        assertThat(json.contains("\"opennmsUsername\":\"admin\""), is(true));

        LlmConfigStatus blank = LlmConfigStatus.from(LlmConfigImpl.newBuilder().apiKey("k").opennmsPassword("").build());
        assertThat(blank.isOpennmsPasswordPresent(), is(false));
        LlmConfigStatus fromNull = LlmConfigStatus.from(null);
        assertThat(fromNull.isToolsEnabled(), is(false));
        assertThat(fromNull.getOpennmsUrl(), equalTo(""));
        assertThat(fromNull.isOpennmsPasswordPresent(), is(false));
    }

    @Test
    public void toStringNeverIncludesTheOpenNmsPassword() {
        LlmConfig config = LlmConfigImpl.newBuilder()
                .apiKey("k")
                .opennmsUsername("admin")
                .opennmsPassword("s3cret-nms-pw")
                .build();
        String rendered = config.toString();
        assertThat(rendered.contains("s3cret-nms-pw"), is(false));
        assertThat(rendered.contains("opennmsPasswordPresent=true"), is(true));
        assertThat(rendered.contains("opennmsUsername=admin"), is(true));
    }
}
