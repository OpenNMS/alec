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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmConfigReaderTest {

    private InMemoryKVStore kv;
    private LlmConfigReader reader;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        reader = new LlmConfigReader(kv, new ObjectMapper());
    }

    @Test
    public void readReturnsEmptyWhenConfigNotPersisted() {
        assertThat(reader.read().isPresent(), is(false));
    }

    @Test
    public void readReturnsEnabledTrueWithApiKey() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-ant-real-key\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.isEnabled(), is(true));
        assertThat(c.hasApiKey(), is(true));
        assertThat(c.getApiKey(), equalTo("sk-ant-real-key"));
    }

    @Test
    public void readReturnsEnabledFalseAndEmptyKeyForFreshlyDisabledConfig() {
        // User unticked the box; the key was never sent. Server merge keeps key absent.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":false,\"apiKey\":\"\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertFalse(c.isEnabled());
        assertFalse(c.hasApiKey());
    }

    @Test
    public void readReturnsEmptyWhenJsonIsMalformed() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "not valid json",
                LlmConfigReader.CONFIG_CONTEXT);

        assertThat(reader.read().isPresent(), is(false));
    }

    @Test
    public void readToleratesMissingApiKeyField() {
        // The slice-1 server-side merge ensures apiKey is always present, but
        // older bundle versions might have omitted it. Default to empty.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertTrue(c.isEnabled());
        assertFalse("missing apiKey field treated as empty", c.hasApiKey());
    }

    @Test
    public void autoEvaluateDefaultsToTrueWhenFieldMissingFromJson() {
        // Records persisted before the autoEvaluate field existed must keep
        // their original automatic behavior — otherwise upgrading the bundle
        // would silently flip every install into manual-only mode.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat("missing autoEvaluate defaults to true (preserve existing behavior)",
                c.isAutoEvaluate(), is(true));
    }

    @Test
    public void autoEvaluateHonoredWhenExplicitlyFalse() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"autoEvaluate\":false,\"apiKey\":\"sk\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.isAutoEvaluate(), is(false));
    }

    @Test
    public void configToStringNeverIncludesApiKey() {
        LlmConfigReader.Config c = new LlmConfigReader.Config(true, true, "sk-ant-leaktest",
                "https://openrouter.ai/api/v1", "anthropic/claude-sonnet-4.6", "You are an assistant.");
        String s = c.toString();
        assertThat(s, not(containsString("sk-ant-leaktest")));
        assertThat(s, containsString("apiKeyPresent=true"));
    }

    @Test
    public void baseUrlAndModelDefaultWhenFieldsMissingFromJson() {
        // Records persisted before these fields existed fall back to the
        // OpenRouter + Claude defaults rather than null/empty.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.getBaseUrl(), equalTo(LlmConfigReader.DEFAULT_BASE_URL));
        assertThat(c.getModel(), equalTo(LlmConfigReader.DEFAULT_MODEL));
    }

    @Test
    public void systemPromptDefaultsWhenMissingFromJson() {
        // Records persisted before the prompt was configurable fall back to the
        // built-in default rather than an empty system message.
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.getSystemPrompt(),
                equalTo(LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT));
    }

    @Test
    public void systemPromptHonoredWhenPresent() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\",\"systemPrompt\":\"Custom prompt for ACME.\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.getSystemPrompt(), equalTo("Custom prompt for ACME."));
    }

    @Test
    public void baseUrlAndModelHonoredWhenPresent() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\","
                        + "\"baseUrl\":\"https://api.openai.com/v1\",\"model\":\"openai/gpt-4o\"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.getBaseUrl(), equalTo("https://api.openai.com/v1"));
        assertThat(c.getModel(), equalTo("openai/gpt-4o"));
    }

    @Test
    public void blankBaseUrlAndModelFallBackToDefaults() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\",\"baseUrl\":\"\",\"model\":\"  \"}",
                LlmConfigReader.CONFIG_CONTEXT);

        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.getBaseUrl(), equalTo(LlmConfigReader.DEFAULT_BASE_URL));
        assertThat(c.getModel(), equalTo(LlmConfigReader.DEFAULT_MODEL));
    }

    // Sanity-check we're reading from the exact context+key features/ui writes to.
    // If KeyEnum.LLM_CONFIG or ALECRestUtils.ALEC_CONFIG ever change, the
    // string constants in LlmConfigReader must change in lockstep.
    @Test
    public void contextAndKeyConstantsMatchSliceOneWriter() {
        // Hard-coded here on purpose — if features/ui changes its constants,
        // this test should fail and force someone to update both bundles.
        assertThat(LlmConfigReader.CONFIG_CONTEXT, equalTo("ALEC_CONFIG"));
        assertThat(LlmConfigReader.CONFIG_KEY, equalTo("LLM_CONFIG"));

        // And reading from those exact strings should find what we put there.
        kv.put("LLM_CONFIG", "{\"enabled\":true,\"apiKey\":\"k\"}", "ALEC_CONFIG");
        Optional<LlmConfigReader.Config> c = reader.read();
        assertTrue(c.isPresent());
    }

    // --- toolsEnabled (ALEC-308) ---

    @Test
    public void toolsEnabledDefaultsToFalseWhenMissingFromJson() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\"}",
                LlmConfigReader.CONFIG_CONTEXT);
        LlmConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertFalse("records persisted before the option existed keep tools off", c.isToolsEnabled());
        assertThat(c.toString(), containsString("toolsEnabled=false"));
    }

    @Test
    public void toolsEnabledIsParsedWhenPresent() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\",\"toolsEnabled\":true}",
                LlmConfigReader.CONFIG_CONTEXT);
        assertTrue(reader.read().orElseThrow(AssertionError::new).isToolsEnabled());

        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk\",\"toolsEnabled\":false}",
                LlmConfigReader.CONFIG_CONTEXT);
        assertFalse(reader.read().orElseThrow(AssertionError::new).isToolsEnabled());

        // The shorter constructors default the flag off.
        assertFalse(new LlmConfigReader.Config(true, true, "k", "u", "m", "p").isToolsEnabled());
        assertTrue(new LlmConfigReader.Config(true, true, "k", "u", "m", "p", 0, 0, true).isToolsEnabled());
    }
}
