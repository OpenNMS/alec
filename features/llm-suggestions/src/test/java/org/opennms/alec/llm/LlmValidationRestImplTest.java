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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyZeroInteractions;
import static org.mockito.Mockito.when;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.opennms.alec.mcp.McpConfig;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmValidationRestImplTest {

    private InMemoryKVStore kv;
    private LlmConfigReader configReader;
    private LlmSuggestionService service;
    private LlmValidationRestImpl rest;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        configReader = new LlmConfigReader(kv, new ObjectMapper());
        service = mock(LlmSuggestionService.class);
        rest = new LlmValidationRestImpl(service, configReader);
    }

    @Test
    public void usesRequestValuesWhenAllProvided() {
        when(service.validate(eq("sk-typed"), eq("https://api.openai.com/v1"), eq("openai/gpt-4o")))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-typed");
        req.setBaseUrl("https://api.openai.com/v1");
        req.setModel("openai/gpt-4o");

        Response resp = rest.validate(req);
        assertThat(resp.getStatus(), is(200));
        ValidationResult body = (ValidationResult) resp.getEntity();
        assertThat(body.isOk(), is(true));
        verify(service).validate("sk-typed", "https://api.openai.com/v1", "openai/gpt-4o");
    }

    @Test
    public void fallsBackToStoredKeyWhenRequestKeyBlank() {
        // Stored config has a key + custom endpoint/model; the form posts blanks
        // (key is masked in the UI), so validation must use the stored values.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        when(service.validate(eq("sk-stored"), eq("https://api.anthropic.com/v1"), eq("claude-sonnet-4-6")))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest(); // all blank

        Response resp = rest.validate(req);
        assertThat(resp.getStatus(), is(200));
        verify(service).validate("sk-stored", "https://api.anthropic.com/v1", "claude-sonnet-4-6");
    }

    @Test
    public void typedKeyOverridesStoredButInheritsStoredEndpointAndModel() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        when(service.validate(eq("sk-new"), eq("https://api.anthropic.com/v1"), eq("claude-sonnet-4-6")))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-new"); // user typed a replacement key, left endpoint/model blank

        rest.validate(req);
        verify(service).validate("sk-new", "https://api.anthropic.com/v1", "claude-sonnet-4-6");
    }

    @Test
    public void defaultsBaseUrlAndModelWhenNothingStoredOrProvided() {
        when(service.validate(eq("sk-typed"), eq(LlmConfigReader.DEFAULT_BASE_URL),
                eq(LlmConfigReader.DEFAULT_MODEL)))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-typed");

        rest.validate(req);
        verify(service).validate("sk-typed", LlmConfigReader.DEFAULT_BASE_URL,
                LlmConfigReader.DEFAULT_MODEL);
    }

    @Test
    public void storedKeyIsNeverSentToACallerSuppliedEndpoint() {
        // The exfiltration case: an authenticated caller POSTs a baseUrl they
        // control with a blank key. The stored key must NOT be filled in — that
        // would hand the operator's secret to an arbitrary host.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        ValidationRequest req = new ValidationRequest();
        req.setBaseUrl("https://attacker.example/v1"); // differs from stored; key blank

        Response resp = rest.validate(req);
        assertThat(resp.getStatus(), is(200));
        ValidationResult body = (ValidationResult) resp.getEntity();
        assertThat(body.isOk(), is(false));
        // No outbound call of any kind may have been made.
        verifyZeroInteractions(service);
    }

    @Test
    public void storedKeyStillUsedWhenEndpointMatchesModuloTrailingSlash() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        when(service.validate(eq("sk-stored"), eq("https://api.anthropic.com/v1/"), eq("claude-sonnet-4-6")))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest();
        req.setBaseUrl("https://api.anthropic.com/v1/"); // same endpoint, trailing slash

        Response resp = rest.validate(req);
        assertThat(resp.getStatus(), is(200));
        verify(service).validate("sk-stored", "https://api.anthropic.com/v1/", "claude-sonnet-4-6");
    }

    @Test
    public void callerSuppliedKeyMayTargetAnyEndpoint() {
        // A caller who re-enters the key already knows it — validating it
        // against a new endpoint is the legitimate "switch providers" flow.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        when(service.validate(eq("sk-typed"), eq("https://other.example/v1"), eq("claude-sonnet-4-6")))
                .thenReturn(ValidationResult.ok("good"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-typed");
        req.setBaseUrl("https://other.example/v1");

        rest.validate(req);
        verify(service).validate("sk-typed", "https://other.example/v1", "claude-sonnet-4-6");
    }

    @Test
    public void passesThroughFailureResult() {
        when(service.validate(eq("sk-bad"), eq(LlmConfigReader.DEFAULT_BASE_URL),
                eq(LlmConfigReader.DEFAULT_MODEL)))
                .thenReturn(ValidationResult.fail("HTTP 401 from provider: bad key"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-bad");

        Response resp = rest.validate(req);
        assertThat(resp.getStatus(), is(200)); // 200 even on failure; ok=false carries it
        ValidationResult body = (ValidationResult) resp.getEntity();
        assertThat(body.isOk(), is(false));
        assertThat(body.getMessage(), equalTo("HTTP 401 from provider: bad key"));
    }

    // --- validateTools (ALEC-308) ---

    @Test
    public void validateToolsPassesResolvedKeyEndpointAndModelWithNullOverrideWhenNoOpenNmsFields() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        when(service.validateTools(eq("sk-stored"), eq("https://api.anthropic.com/v1"), eq("claude-sonnet-4-6"),
                (McpConfig) org.mockito.ArgumentMatchers.isNull()))
                .thenReturn(ValidationResult.ok("Yes — fine"));

        // No OpenNMS fields at all (absent, not blank) -> the stored login is used.
        ValidationRequest req = new ValidationRequest();
        Response resp = rest.validateTools(req);
        assertThat(resp.getStatus(), is(200));
        ValidationResult body = (ValidationResult) resp.getEntity();
        assertThat(body.isOk(), is(true));
        assertThat(body.getMessage(), equalTo("Yes — fine"));
        verify(service).validateTools("sk-stored", "https://api.anthropic.com/v1", "claude-sonnet-4-6", null);
    }

    @Test
    public void validateToolsBuildsAnOverrideWhenAnyOpenNmsFieldIsSet() {
        when(service.validateTools(eq("sk-typed"), eq("https://api.openai.com/v1"), eq("openai/gpt-4o"),
                org.mockito.ArgumentMatchers.any(McpConfig.class)))
                .thenReturn(ValidationResult.fail("No — nope"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-typed");
        req.setBaseUrl("https://api.openai.com/v1");
        req.setModel("openai/gpt-4o");
        req.setOpennmsUrl("http://nms:8980/opennms");
        req.setOpennmsUsername("admin");
        req.setOpennmsPassword("pw");

        Response resp = rest.validateTools(req);
        assertThat(resp.getStatus(), is(200));
        assertThat(((ValidationResult) resp.getEntity()).isOk(), is(false));

        ArgumentCaptor<McpConfig> captor = ArgumentCaptor.forClass(McpConfig.class);
        verify(service).validateTools(eq("sk-typed"), eq("https://api.openai.com/v1"), eq("openai/gpt-4o"),
                captor.capture());
        McpConfig override = captor.getValue();
        assertThat(override.isToolsEnabled(), is(true));
        assertThat(override.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(override.getOpennmsUsername(), equalTo("admin"));
        assertThat(override.getOpennmsPassword(), equalTo("pw"));
        assertThat(override.hasOpennmsCredentials(), is(true));
    }

    @Test
    public void validateToolsOverrideIsBuiltFromAPartialLogin() {
        when(service.validateTools(eq("sk-typed"), eq(LlmConfigReader.DEFAULT_BASE_URL),
                eq(LlmConfigReader.DEFAULT_MODEL), org.mockito.ArgumentMatchers.any(McpConfig.class)))
                .thenReturn(ValidationResult.ok("ok"));

        ValidationRequest req = new ValidationRequest();
        req.setApiKey("sk-typed");
        req.setOpennmsUsername("only-user");

        rest.validateTools(req);
        ArgumentCaptor<McpConfig> captor = ArgumentCaptor.forClass(McpConfig.class);
        verify(service).validateTools(eq("sk-typed"), eq(LlmConfigReader.DEFAULT_BASE_URL),
                eq(LlmConfigReader.DEFAULT_MODEL), captor.capture());
        assertThat(captor.getValue().getOpennmsUsername(), equalTo("only-user"));
        assertThat(captor.getValue().getOpennmsPassword(), equalTo(""));
        assertThat(captor.getValue().getOpennmsUrl(), equalTo(""));
        assertThat(captor.getValue().hasOpennmsCredentials(), is(false));
    }

    @Test
    public void validateToolsAppliesTheSameStoredKeyRuleAsValidate() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-stored\","
                        + "\"baseUrl\":\"https://api.anthropic.com/v1\",\"model\":\"claude-sonnet-4-6\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        ValidationRequest req = new ValidationRequest();
        req.setBaseUrl("https://attacker.example/v1"); // differs from stored; key blank

        Response resp = rest.validateTools(req);
        assertThat(resp.getStatus(), is(200));
        assertThat(((ValidationResult) resp.getEntity()).isOk(), is(false));
        verifyZeroInteractions(service);
    }

    @Test
    public void validateToolsFillsOmittedLoginFieldsFromTheStoredConfigButKeepsBlanksBlank() {
        InMemoryKVStore kv = new InMemoryKVStore();
        kv.put("LLM_CONFIG", "{\"opennmsUrl\":\"http://stored:8980/opennms\",\"opennmsUsername\":\"stored-user\","
                + "\"opennmsPassword\":\"pw\",\"apiKey\":\"sk-stored\",\"baseUrl\":\"https://api.anthropic.com/v1\","
                + "\"model\":\"m\"}", "ALEC_CONFIG");
        LlmValidationRestImpl withStored = new LlmValidationRestImpl(service,
                new LlmConfigReader(kv, new com.fasterxml.jackson.databind.ObjectMapper()),
                new org.opennms.alec.mcp.KvMcpConfigReader(kv, new com.fasterxml.jackson.databind.ObjectMapper()));
        when(service.validateTools(org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString(),
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.any()))
                .thenReturn(ValidationResult.ok("Yes"));

        // Only a username sent: the URL is filled from the stored config.
        ValidationRequest partial = new ValidationRequest();
        partial.setOpennmsUsername("new-user");
        withStored.validateTools(partial);
        ArgumentCaptor<McpConfig> captor = ArgumentCaptor.forClass(McpConfig.class);
        verify(service).validateTools(eq("sk-stored"), eq("https://api.anthropic.com/v1"), eq("m"), captor.capture());
        assertThat(captor.getValue().getOpennmsUrl(), equalTo("http://stored:8980/opennms"));
        assertThat(captor.getValue().getOpennmsUsername(), equalTo("new-user"));

        // Blank URL and username sent (the form was emptied): blank stays blank.
        org.mockito.Mockito.reset(service);
        when(service.validateTools(org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString(),
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.any()))
                .thenReturn(ValidationResult.ok("Yes"));
        ValidationRequest blank = new ValidationRequest();
        blank.setOpennmsUrl("");
        blank.setOpennmsUsername("");
        withStored.validateTools(blank);
        verify(service).validateTools(eq("sk-stored"), eq("https://api.anthropic.com/v1"), eq("m"), captor.capture());
        assertThat(captor.getValue().getOpennmsUrl(), equalTo(""));
        assertThat(captor.getValue().getOpennmsUsername(), equalTo(""));
        assertThat(captor.getValue().hasOpennmsCredentials(), is(false));
    }
}
