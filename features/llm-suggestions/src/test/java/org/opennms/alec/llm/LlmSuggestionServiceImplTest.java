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
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * No test in this class makes a network call. The client speaks the OpenAI
 * {@code /chat/completions} wire format; coverage is split into:
 *
 * <ul>
 *   <li>{@code buildRequestBody*} — exercises the static request-body
 *       builder; pure JSON output, no I/O.</li>
 *   <li>{@code parseResponse*} — exercises the static response parser;
 *       fed hand-crafted JSON strings, no I/O.</li>
 *   <li>{@code requestSuggestions*} — exercises the public API's
 *       guardrails (null situation, empty key/url/model). All fail at the
 *       guardrail before any HTTP call is constructed.</li>
 * </ul>
 *
 * <strong>Policy:</strong> unit/integration tests in this module must never
 * require a real provider API key. The "sk-…" strings below are literal
 * fixtures only.
 */
public class LlmSuggestionServiceImplTest {

    private static final String MODEL = "anthropic/claude-sonnet-4.6";
    private static final String BASE_URL = "https://openrouter.ai/api/v1";
    private static final String PROMPT = "You are a test assistant.";

    private final ObjectMapper om = new ObjectMapper();

    // --- chatCompletionsUrl ---

    @Test
    public void chatCompletionsUrlAppendsPathAndToleratesTrailingSlash() {
        assertThat(LlmSuggestionServiceImpl.chatCompletionsUrl(BASE_URL),
                equalTo("https://openrouter.ai/api/v1/chat/completions"));
        assertThat(LlmSuggestionServiceImpl.chatCompletionsUrl(BASE_URL + "/"),
                equalTo("https://openrouter.ai/api/v1/chat/completions"));
    }

    @Test
    public void chatCompletionsUrlRejectsNonHttpAndDecoratedUrls() {
        // The stored key is attached to whatever this method returns, so the
        // base URL must not be able to smuggle credentials, query or fragment.
        assertUrlRejected("not a url");
        assertUrlRejected("ftp://example.com/v1");
        assertUrlRejected("https://user:pass@example.com/v1");
        assertUrlRejected("https://example.com/v1?next=https://attacker.example");
        assertUrlRejected("https://example.com/v1#frag");
    }

    private static void assertUrlRejected(String baseUrl) {
        try {
            LlmSuggestionServiceImpl.chatCompletionsUrl(baseUrl);
            fail("expected IllegalArgumentException for: " + baseUrl);
        } catch (IllegalArgumentException expected) {
            // message must be key-free and user-presentable; only the type
            // matters here.
        }
    }

    // --- buildRequestBody ---

    @Test
    public void buildRequestBodyIncludesModelAndMaxTokens() throws IOException {
        String body = LlmSuggestionServiceImpl.buildRequestBody(stubSituation(), MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("model").asText(), equalTo(MODEL));
        assertTrue("max_tokens present", root.get("max_tokens").asInt() > 0);
    }

    @Test
    public void buildRequestBodyPutsSystemPromptInFirstMessage() throws IOException {
        JsonNode root = om.readTree(LlmSuggestionServiceImpl.buildRequestBody(stubSituation(), MODEL, om));
        JsonNode systemMsg = root.get("messages").get(0);
        assertThat(systemMsg.get("role").asText(), equalTo("system"));
        assertThat(systemMsg.get("content").asText(), containsString("OpenNMS ALEC"));
    }

    @Test
    public void buildRequestBodyUsesProvidedSystemPrompt() throws IOException {
        String custom = "You are a custom assistant for ACME Corp.";
        JsonNode root = om.readTree(
                LlmSuggestionServiceImpl.buildRequestBody(stubSituation(), MODEL, custom, om));
        JsonNode systemMsg = root.get("messages").get(0);
        assertThat(systemMsg.get("role").asText(), equalTo("system"));
        assertThat(systemMsg.get("content").asText(), equalTo(custom));
    }

    @Test
    public void defaultSystemPromptIsRichAndNetworkFocused() {
        // The shipped default should frame the model as a network/RCA expert and
        // still force the tool call — guards against someone trimming it back to
        // a one-liner.
        String p = LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT;
        assertThat(p, containsString("network reliability engineer"));
        assertThat(p, containsString("root cause"));
        assertThat(p, containsString("report_suggestions"));
    }

    @Test
    public void buildRequestBodyDeclaresFunctionWithCorrectSchema() throws IOException {
        JsonNode root = om.readTree(LlmSuggestionServiceImpl.buildRequestBody(stubSituation(), MODEL, om));
        JsonNode tool = root.get("tools").get(0);
        assertThat(tool.get("type").asText(), equalTo("function"));
        JsonNode function = tool.get("function");
        assertThat(function.get("name").asText(), equalTo("report_suggestions"));

        JsonNode schema = function.get("parameters");
        assertThat(schema.get("type").asText(), equalTo("object"));
        JsonNode props = schema.get("properties");

        JsonNode rootCauses = props.get("rootCauses");
        assertThat(rootCauses.get("type").asText(), equalTo("array"));
        assertThat("rootCauses capped at 3 — ticket says 'up to 3'",
                rootCauses.get("maxItems").asInt(), equalTo(3));

        JsonNode resolutions = props.get("resolutions");
        assertThat(resolutions.get("type").asText(), equalTo("array"));
        assertThat(resolutions.get("maxItems").asInt(), equalTo(3));

        Set<String> required = new HashSet<>();
        for (JsonNode r : schema.get("required")) required.add(r.asText());
        assertThat(required.contains("rootCauses"), is(true));
        assertThat(required.contains("resolutions"), is(true));
    }

    @Test
    public void buildRequestBodyForcesToolChoice() throws IOException {
        // tool_choice="required" makes the model HAVE to call a tool — without it
        // the model could return free text and our injection defense disappears.
        // We declare exactly one tool, so "required" forces report_suggestions.
        // The string form (not the named-function object) is used because it is
        // accepted by every OpenAI-compatible server, including local ones like
        // LM Studio that reject {"type":"function",...}.
        JsonNode root = om.readTree(LlmSuggestionServiceImpl.buildRequestBody(stubSituation(), MODEL, om));
        JsonNode tc = root.get("tool_choice");
        assertThat(tc.isTextual(), is(true));
        assertThat(tc.asText(), equalTo("required"));
    }

    @Test
    public void buildRequestBodyEmbedsSituationAndAlarmDetails() throws IOException {
        Situation s = stubSituation();
        JsonNode root = om.readTree(LlmSuggestionServiceImpl.buildRequestBody(s, MODEL, om));
        String userContent = root.get("messages").get(1).get("content").asText();

        assertThat(userContent, containsString("sit-42"));
        assertThat(userContent, containsString("MAJOR"));
        // Alarm summary + description must reach the model — that's the whole point.
        assertThat(userContent, containsString("link down"));
        assertThat(userContent, containsString("GigabitEthernet 1/0/24"));
        // Untrusted-data hint helps the model treat alarm payloads as content,
        // not instructions — defense in depth alongside the function schema.
        assertThat(userContent, containsString("untrusted"));
    }

    // --- renderSituationForPrompt ---

    @Test
    public void renderSituationToleratesNullAlarmSetAndNullFields() {
        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn("sit-empty");
        when(s.getSeverity()).thenReturn(null);
        when(s.getAlarms()).thenReturn(null);

        String rendered = LlmSuggestionServiceImpl.renderSituationForPrompt(s);
        assertThat(rendered, containsString("sit-empty"));
        assertThat(rendered, containsString("Alarm count: 0"));
    }

    // --- parseResponse ---

    @Test
    public void parseResponseExtractsToolCallArgumentsAndUsage() throws IOException {
        // OpenAI delivers function arguments as a JSON-encoded string.
        String args = "{"
                + "\\\"rootCauses\\\":[\\\"link saturation\\\",\\\"misconfigured QoS\\\"],"
                + "\\\"resolutions\\\":[\\\"check interface counters\\\",\\\"verify QoS policy\\\",\\\"open ticket\\\"]"
                + "}";
        String json = "{"
                + "\"choices\":[{\"message\":{\"role\":\"assistant\",\"content\":null,"
                + "  \"tool_calls\":[{\"id\":\"call_1\",\"type\":\"function\",\"function\":{"
                + "    \"name\":\"report_suggestions\",\"arguments\":\"" + args + "\"}}]}}],"
                + "\"usage\":{"
                + "  \"prompt_tokens\":1234,"
                + "  \"completion_tokens\":78,"
                + "  \"prompt_tokens_details\":{\"cached_tokens\":1000}"
                + "}"
                + "}";
        Suggestions s = LlmSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getRootCauses(), equalTo(Arrays.asList("link saturation", "misconfigured QoS")));
        assertThat(s.getResolutions().size(), equalTo(3));
        // cached_tokens is a SUBSET of prompt_tokens in the OpenAI format; the
        // buckets are stored disjointly so rollups can sum without
        // double-counting: 1234 prompt with 1000 cached = 234 uncached input.
        assertThat(s.getUsage().getInputTokens(), equalTo(234L));
        assertThat(s.getUsage().getOutputTokens(), equalTo(78L));
        assertThat(s.getUsage().getCacheReadInputTokens(), equalTo(1000L));
        // The OpenAI format has no separate cache-creation count.
        assertThat(s.getUsage().getCacheCreationInputTokens(), equalTo(0L));
    }

    @Test
    public void parseResponseSplitsFullyCachedPromptWithoutDoubleCounting() throws IOException {
        String json = "{"
                + "\"choices\":[{\"message\":{\"role\":\"assistant\",\"content\":null,"
                + "  \"tool_calls\":[{\"id\":\"call_1\",\"type\":\"function\",\"function\":{"
                + "    \"name\":\"report_suggestions\",\"arguments\":\"{}\"}}]}}],"
                + "\"usage\":{"
                + "  \"prompt_tokens\":1000,"
                + "  \"completion_tokens\":10,"
                + "  \"prompt_tokens_details\":{\"cached_tokens\":1000}"
                + "}"
                + "}";
        Suggestions.TokenUsage u = LlmSuggestionServiceImpl.parseResponse(json, om).getUsage();
        // A fully-cached 1000-token prompt is 0 uncached input + 1000 cache-read
        // — 1000 real tokens total, not 2000.
        assertThat(u.getInputTokens(), equalTo(0L));
        assertThat(u.getCacheReadInputTokens(), equalTo(1000L));
    }

    @Test
    public void parseResponseSkipsNonMatchingToolCalls() throws IOException {
        // The model could (in theory) emit other tool calls; we find ours by name.
        String json = "{\"choices\":[{\"message\":{\"tool_calls\":["
                + "{\"type\":\"function\",\"function\":{\"name\":\"some_other_tool\",\"arguments\":\"{}\"}},"
                + "{\"type\":\"function\",\"function\":{\"name\":\"report_suggestions\","
                + "  \"arguments\":\"{\\\"rootCauses\\\":[\\\"x\\\"],\\\"resolutions\\\":[\\\"y\\\"]}\"}}"
                + "]}}]}";
        Suggestions s = LlmSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getRootCauses(), equalTo(Arrays.asList("x")));
        assertThat(s.getResolutions(), equalTo(Arrays.asList("y")));
    }

    @Test
    public void parseResponseThrowsOnErrorEnvelope() {
        String json = "{\"error\":{\"type\":\"authentication_error\","
                + "\"message\":\"invalid api key\"}}";
        LlmApiException ex = expectThrows(LlmApiException.class,
                () -> LlmSuggestionServiceImpl.parseResponse(json, om));
        assertThat(ex.getMessage(), containsString("authentication_error"));
        assertThat(ex.getMessage(), containsString("invalid api key"));
    }

    @Test
    public void parseResponseThrowsWhenToolCallMissing() {
        // Structurally valid chat completion, but the model replied with text only.
        String json = "{\"choices\":[{\"message\":{\"role\":\"assistant\","
                + "\"content\":\"just text\"}}]}";
        LlmApiException ex = expectThrows(LlmApiException.class,
                () -> LlmSuggestionServiceImpl.parseResponse(json, om));
        assertThat(ex.getMessage(), containsString("tool_calls"));
    }

    @Test
    public void parseResponseThrowsWhenChoicesMissing() {
        LlmApiException ex = expectThrows(LlmApiException.class,
                () -> LlmSuggestionServiceImpl.parseResponse("{\"id\":\"chatcmpl_1\"}", om));
        assertThat(ex.getMessage(), containsString("choices"));
    }

    @Test
    public void parseResponseGivesEmptyUsageWhenBlockMissing() throws IOException {
        String json = "{\"choices\":[{\"message\":{\"tool_calls\":[{\"type\":\"function\","
                + "\"function\":{\"name\":\"report_suggestions\","
                + "\"arguments\":\"{\\\"rootCauses\\\":[],\\\"resolutions\\\":[]}\"}}]}}]}";
        Suggestions s = LlmSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getUsage().getInputTokens(), equalTo(0L));
        assertThat(s.getUsage().getOutputTokens(), equalTo(0L));
    }

    // --- responseHasReportToolCall (validation: model must support tool calling) ---

    @Test
    public void responseHasReportToolCallTrueWhenModelCallsOurFunction() throws IOException {
        String json = "{\"choices\":[{\"message\":{\"tool_calls\":[{\"type\":\"function\","
                + "\"function\":{\"name\":\"report_suggestions\","
                + "\"arguments\":\"{\\\"rootCauses\\\":[],\\\"resolutions\\\":[]}\"}}]}}]}";
        assertTrue("a forced tool call to our function is the success signal",
                LlmSuggestionServiceImpl.responseHasReportToolCall(om.readTree(json)));
    }

    @Test
    public void responseHasReportToolCallFalseForPlainTextReply() throws IOException {
        // A model with no tool/function-calling support answers a forced-tool
        // request with plain content and no tool_calls — validation must reject it.
        String json = "{\"choices\":[{\"message\":{\"role\":\"assistant\","
                + "\"content\":\"Sure! Here are some root causes...\"}}]}";
        assertFalse("no tool_calls means the model can't drive ALEC's flow",
                LlmSuggestionServiceImpl.responseHasReportToolCall(om.readTree(json)));
    }

    @Test
    public void responseHasReportToolCallFalseForEmptyToolCallsArray() throws IOException {
        // e.g. a reasoning model cut off by finish_reason="length" before emitting.
        String json = "{\"choices\":[{\"message\":{\"role\":\"assistant\","
                + "\"content\":\"\",\"tool_calls\":[]}}]}";
        assertFalse(LlmSuggestionServiceImpl.responseHasReportToolCall(om.readTree(json)));
    }

    @Test
    public void responseHasReportToolCallFalseWhenOnlyOtherToolCalled() throws IOException {
        String json = "{\"choices\":[{\"message\":{\"tool_calls\":[{\"type\":\"function\","
                + "\"function\":{\"name\":\"some_other_tool\",\"arguments\":\"{}\"}}]}}]}";
        assertFalse(LlmSuggestionServiceImpl.responseHasReportToolCall(om.readTree(json)));
    }

    @Test
    public void responseHasReportToolCallFalseWhenChoicesMissing() throws IOException {
        assertFalse(LlmSuggestionServiceImpl.responseHasReportToolCall(om.readTree("{\"id\":\"x\"}")));
    }

    @Test
    public void firstChoiceFinishReasonReadsLengthVsToolCalls() throws IOException {
        // "length" -> reasoning model ran out of room; we surface a different,
        // fixable message than "model can't call tools".
        String cutOff = "{\"choices\":[{\"finish_reason\":\"length\","
                + "\"message\":{\"role\":\"assistant\",\"content\":\"\",\"tool_calls\":[]}}]}";
        assertThat(LlmSuggestionServiceImpl.firstChoiceFinishReason(om.readTree(cutOff)),
                equalTo("length"));

        String ok = "{\"choices\":[{\"finish_reason\":\"tool_calls\","
                + "\"message\":{\"tool_calls\":[{\"type\":\"function\","
                + "\"function\":{\"name\":\"report_suggestions\",\"arguments\":\"{}\"}}]}}]}";
        assertThat(LlmSuggestionServiceImpl.firstChoiceFinishReason(om.readTree(ok)),
                equalTo("tool_calls"));
    }

    @Test
    public void firstChoiceFinishReasonEmptyWhenAbsentOrNoChoices() throws IOException {
        assertThat(LlmSuggestionServiceImpl.firstChoiceFinishReason(om.readTree("{\"id\":\"x\"}")),
                equalTo(""));
        String noReason = "{\"choices\":[{\"message\":{\"content\":\"hi\"}}]}";
        assertThat(LlmSuggestionServiceImpl.firstChoiceFinishReason(om.readTree(noReason)),
                equalTo(""));
    }

    // --- requestSuggestions guardrails ---

    @Test
    public void requestSuggestionsRejectsNullSituationWithFailedFuture() throws Exception {
        LlmSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(null, "sk-x", BASE_URL, MODEL, PROMPT, false));
            assertThat(cause, instanceOfMatcher(LlmApiException.class));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void requestSuggestionsRejectsEmptyApiKeyWithFailedFuture() throws Exception {
        LlmSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(stubSituation(), "", BASE_URL, MODEL, PROMPT, false));
            assertThat(cause, instanceOfMatcher(LlmApiException.class));
            assertThat(cause.getMessage(), containsString("API key"));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void requestSuggestionsRejectsEmptyBaseUrlWithFailedFuture() throws Exception {
        LlmSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(stubSituation(), "sk-x", "", MODEL, PROMPT, false));
            assertThat(cause, instanceOfMatcher(LlmApiException.class));
            assertThat(cause.getMessage(), containsString("Base URL"));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void requestSuggestionsRejectsEmptyModelWithFailedFuture() throws Exception {
        LlmSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(stubSituation(), "sk-x", BASE_URL, "", PROMPT, false));
            assertThat(cause, instanceOfMatcher(LlmApiException.class));
            assertThat(cause.getMessage(), containsString("Model"));
        } finally {
            svc.shutdown();
        }
    }

    // --- helpers ---

    private static LlmSuggestionServiceImpl newServiceForGuardrails() {
        // We never let these tests reach the network — guardrails fail fast above
        // the HTTP layer. A dummy executor is fine.
        return new LlmSuggestionServiceImpl(
                new okhttp3.OkHttpClient(),
                new ObjectMapper(),
                java.util.concurrent.Executors.newSingleThreadExecutor(),
                /*maxConcurrent=*/ 1,
                /*ownsExecutor=*/ true);
    }

    private static Throwable futureCause(java.util.concurrent.CompletableFuture<?> f) {
        try {
            f.get(2, java.util.concurrent.TimeUnit.SECONDS);
            fail("expected future to fail");
            return null;
        } catch (java.util.concurrent.ExecutionException ee) {
            return ee.getCause();
        } catch (Exception e) {
            return e;
        }
    }

    @FunctionalInterface
    interface ThrowingRunnable {
        void run() throws Exception;
    }

    /**
     * Mimics JUnit5 / JUnit 4.13's assertThrows for our 4.12 baseline.
     */
    @SuppressWarnings("unchecked")
    private static <T extends Throwable> T expectThrows(Class<T> expected, ThrowingRunnable runnable) {
        try {
            runnable.run();
        } catch (Throwable t) {
            if (!expected.isInstance(t)) {
                fail("Expected " + expected.getName() + " but caught " + t.getClass().getName()
                        + ": " + t.getMessage());
            }
            return (T) t;
        }
        fail("Expected " + expected.getName() + " but nothing was thrown");
        return null; // unreachable
    }

    private static <T> org.hamcrest.Matcher<Object> instanceOfMatcher(Class<T> type) {
        return new org.hamcrest.BaseMatcher<>() {
            @Override
            public boolean matches(Object item) {
                return item != null && type.isInstance(item);
            }

            @Override
            public void describeTo(org.hamcrest.Description description) {
                description.appendText("instance of " + type.getName());
            }
        };
    }

    private static Situation stubSituation() {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn("alarm-1");
        when(a.getTime()).thenReturn(1716000000000L); // 2024-05-18T03:00:00Z
        when(a.getSeverity()).thenReturn(Severity.MAJOR);
        when(a.getInventoryObjectType()).thenReturn("SnmpInterface");
        when(a.getInventoryObjectId()).thenReturn("GigabitEthernet 1/0/24");
        when(a.getSummary()).thenReturn("link down");
        when(a.getDescription()).thenReturn("Interface flapped 3x in last 30s");

        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn("sit-42");
        when(s.getSeverity()).thenReturn(Severity.MAJOR);
        Set<Alarm> alarms = new HashSet<>();
        alarms.add(a);
        when(s.getAlarms()).thenReturn(alarms);
        assertNotNull(s);
        return s;
    }
}
