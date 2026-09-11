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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import javax.ws.rs.core.Response;

import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;
import org.opennms.alec.data.LlmConfigStatus;

@RunWith(JUnit4.class)
public class LlmRestImplTest {

    @Test
    public void mergeAcceptsNewKeyWhenNoneExisted() {
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.isEnabled(), is(true));
        assertThat(merged.getApiKey(), equalTo("sk-new"));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsEmpty() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat("toggling enabled must not require resending the key",
                merged.getApiKey(), equalTo("sk-existing"));
        assertThat(merged.isEnabled(), is(false));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsBlankString() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-existing"));
    }

    @Test
    public void mergeReplacesExistingKeyWhenRequestProvidesNewOne() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-new"));
        assertThat(merged.isEnabled(), is(true));
    }

    @Test
    public void mergeWithClearApiKeyWipesKeyAndForcesDisabled() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        // clearApiKey wins even if the request also tries to enable + supply a key.
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-attempted-new")
                .clearApiKey(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), is(nullValue()));
        assertThat(merged.isEnabled(), is(false));
    }

    @Test
    public void mergePartialRequestPreservesEndpointModelAndPrompt() {
        // A partial POST like {"enabled":true} must not silently wipe the
        // stored endpoint/model/prompt/defaults.
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("sk-existing")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .defaultBaseUrl("https://default.example/v1")
                .defaultModel("default/model")
                .systemPrompt("Tuned prompt.")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder() // nothing set but enabled
                .enabled(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getBaseUrl(), equalTo("https://api.example/v1"));
        assertThat(merged.getModel(), equalTo("some/model"));
        assertThat(merged.getDefaultBaseUrl(), equalTo("https://default.example/v1"));
        assertThat(merged.getDefaultModel(), equalTo("default/model"));
        assertThat(merged.getSystemPrompt(), equalTo("Tuned prompt."));
        assertThat(merged.getApiKey(), equalTo("sk-existing"));
        assertThat(merged.isEnabled(), is(true));
    }

    @Test
    public void mergeExplicitEmptyStringStillClearsAField() {
        // Explicitly sending "" is a deliberate clear — only ABSENT fields are
        // preserved.
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .baseUrl("")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getBaseUrl(), equalTo(""));
        assertThat("omitted field still preserved", merged.getModel(), equalTo("some/model"));
    }

    @Test
    public void mergeNormalizesBlankPromptToDefaultAndNullsToBlank() {
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .systemPrompt("   ")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.getSystemPrompt(), equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));
        // Never-set string fields come out blank, not null — persisted records
        // always carry concrete values.
        assertThat(merged.getBaseUrl(), equalTo(""));
        assertThat(merged.getModel(), equalTo(""));
        assertThat(merged.getDefaultBaseUrl(), equalTo(""));
        assertThat(merged.getDefaultModel(), equalTo(""));
    }

    @Test
    public void mergeTrimsApiKeyPasteArtifacts() {
        // A key pasted with a trailing newline must never reach the KV store —
        // OkHttp's rejection message for an illegal header char embeds the key.
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("sk-new\n")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.getApiKey(), equalTo("sk-new"));
    }

    @Test
    public void mergeClearApiKeyPreservesStoredFieldsWhenRequestOmitsThem() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .clearApiKey(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), is(nullValue()));
        assertThat(merged.isEnabled(), is(false));
        assertThat(merged.getBaseUrl(), equalTo("https://api.example/v1"));
        assertThat(merged.getModel(), equalTo("some/model"));
    }

    // --- ALEC-308: MCP tool access + OpenNMS REST login ---

    @Test
    public void mergePreservesStoredOpenNmsLoginWhenRequestOmitsIt() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .opennmsUrl("http://nms:8980/opennms")
                .opennmsUsername("admin")
                .opennmsPassword("pw")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder() // e.g. {"enabled":true}
                .enabled(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(merged.getOpennmsUsername(), equalTo("admin"));
        assertThat("the password is never re-sent by the UI, so it must survive a save",
                merged.getOpennmsPassword(), equalTo("pw"));
    }

    @Test
    public void mergePreservesStoredOpenNmsPasswordWhenRequestSendsBlank() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .opennmsUsername("admin")
                .opennmsPassword("pw")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .opennmsUsername("admin")
                .opennmsPassword("")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getOpennmsPassword(), equalTo("pw"));
    }

    @Test
    public void mergeReplacesOpenNmsPasswordWhenSent() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .opennmsUsername("admin")
                .opennmsPassword("old-pw")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .opennmsPassword("new-pw\n")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat("trimmed like the API key", merged.getOpennmsPassword(), equalTo("new-pw"));
        assertThat(merged.getOpennmsUsername(), equalTo("admin"));
    }

    @Test
    public void mergeDropsOpenNmsPasswordWhenClearOpennmsPasswordIsSet() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .opennmsUsername("admin")
                .opennmsPassword("pw")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .opennmsPassword("attempted")
                .clearOpennmsPassword(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getOpennmsPassword() == null || merged.getOpennmsPassword().isEmpty(), is(true));
        assertThat("clearing the OpenNMS password does not touch the API key",
                merged.getApiKey(), equalTo("sk-existing"));
        assertThat("the transient flag is not carried into the persisted record",
                merged.isClearOpennmsPassword(), is(false));
    }

    @Test
    public void mergeCarriesToolsEnabledFromTheRequest() {
        LlmConfig existing = LlmConfigImpl.newBuilder().apiKey("sk-existing").toolsEnabled(false).build();
        LlmConfig on = LlmRestImpl.merge(existing, LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(true).build());
        assertThat(on.isToolsEnabled(), is(true));
        LlmConfig off = LlmRestImpl.merge(on, LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(false).build());
        assertThat(off.isToolsEnabled(), is(false));
    }

    @Test
    public void mergeExplicitEmptyOpenNmsUrlClearsItAndNullsComeOutBlank() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .opennmsUrl("http://nms:8980/opennms")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder().enabled(false).opennmsUrl("").build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getOpennmsUrl(), equalTo(""));
        assertThat("never-set string fields come out blank, not null",
                merged.getOpennmsUsername(), equalTo(""));
    }

    // --- ALEC-308: saving with tool access enabled requires a verified OpenNMS login ---

    @Test
    public void saveWithToolsEnabledButNoLoginIsRejected() {
        InMemoryKVStore kv = new InMemoryKVStore();
        LlmRestImpl rest = new LlmRestImpl(kv, null);
        LlmConfig req = LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(true)
                .baseUrl("http://x").model("m").apiKey("k").build();
        Response r = rest.setConfiguration(req);
        assertThat(r.getStatus(), equalTo(400));
        assertThat(String.valueOf(r.getEntity()), containsString("without an OpenNMS login"));
        assertThat("nothing persisted", kv.get(KeyEnum.LLM_CONFIG.toString(), ALECRestUtils.ALEC_CONFIG).isPresent(),
                equalTo(false));
    }

    @Test
    public void saveWithToolsEnabledAndBrokenLoginIsRejected() {
        InMemoryKVStore kv = new InMemoryKVStore();
        LlmRestImpl rest = new LlmRestImpl(kv, new StubRest("OpenNMS rejected the login (HTTP 401)"));
        LlmConfig req = LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(true)
                .opennmsUsername("ro").opennmsPassword("pw").build();
        Response r = rest.setConfiguration(req);
        assertThat(r.getStatus(), equalTo(400));
        assertThat(String.valueOf(r.getEntity()), containsString("HTTP 401"));
    }

    @Test
    public void saveWithToolsEnabledAndWorkingLoginPersists() {
        InMemoryKVStore kv = new InMemoryKVStore();
        StubRest stub = new StubRest("OK: reached OpenNMS 37 at http://x as ro");
        LlmRestImpl rest = new LlmRestImpl(kv, stub);
        LlmConfig req = LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(true)
                .opennmsUrl("http://x").opennmsUsername("ro").opennmsPassword("pw").build();
        Response r = rest.setConfiguration(req);
        assertThat(r.getStatus(), equalTo(200));
        assertThat(((LlmConfigStatus) r.getEntity()).isToolsEnabled(), equalTo(true));
        assertThat("probed with the merged login", stub.probed.getOpennmsUsername(), equalTo("ro"));
        assertThat(stub.probed.getOpennmsUrl(), equalTo("http://x"));
    }

    @Test
    public void saveWithToolsDisabledDoesNotProbeTheLogin() {
        InMemoryKVStore kv = new InMemoryKVStore();
        StubRest stub = new StubRest("OpenNMS rejected the login (HTTP 401)");
        LlmRestImpl rest = new LlmRestImpl(kv, stub);
        LlmConfig req = LlmConfigImpl.newBuilder().enabled(false).toolsEnabled(false)
                .opennmsUsername("ro").opennmsPassword("bad").build();
        assertThat(rest.setConfiguration(req).getStatus(), equalTo(200));
        assertThat(stub.probed, org.hamcrest.CoreMatchers.nullValue());
    }

    private static final class StubRest implements org.opennms.alec.mcp.OpenNmsRestClient {
        private final String outcome;
        org.opennms.alec.mcp.McpConfig probed;

        StubRest(String outcome) {
            this.outcome = outcome;
        }

        @Override
        public boolean isConfigured() {
            return true;
        }

        @Override
        public com.fasterxml.jackson.databind.JsonNode get(String pathWithQuery) {
            return null;
        }

        @Override
        public com.fasterxml.jackson.databind.JsonNode post(String path, com.fasterxml.jackson.databind.JsonNode body) {
            return null;
        }

        @Override
        public String checkConnectivity(org.opennms.alec.mcp.McpConfig config) {
            probed = config;
            return outcome;
        }
    }
}
