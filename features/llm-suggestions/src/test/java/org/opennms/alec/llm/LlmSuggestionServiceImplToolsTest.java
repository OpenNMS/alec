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
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.KvMcpConfigReader;
import org.opennms.alec.mcp.McpConfigReader;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.alec.mcp.llm.LlmCallException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Protocol;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;

/**
 * ALEC-308: the tool-access probe ({@code validateTools}) and tool-enabled
 * suggestion requests, driven against a scripted in-process provider (an
 * OkHttp interceptor). No network; no real API key.
 */
public class LlmSuggestionServiceImplToolsTest {

    private static final String MODEL = "test/model";
    private static final String BASE_URL = "https://llm.example/v1";
    private static final String KEY = "sk-fixture";

    private final ObjectMapper om = new ObjectMapper();
    private final List<String> script = Collections.synchronizedList(new ArrayList<>());
    private final List<Integer> codes = Collections.synchronizedList(new ArrayList<>());
    private final List<JsonNode> bodies = Collections.synchronizedList(new ArrayList<>());
    private InMemoryKVStore kv;
    private McpConfigReader mcpReader;
    private ToolRegistry registry;
    private int statusToolCalls;
    private LlmSuggestionServiceImpl service;

    private final OpenNmsRestClient restStub = new OpenNmsRestClient() {
        @Override
        public boolean isConfigured() {
            return true;
        }

        @Override
        public JsonNode get(String pathWithQuery) throws ToolException {
            throw new ToolException("no REST in this test");
        }

        @Override
        public JsonNode post(String path, JsonNode body) throws ToolException {
            throw new ToolException("no REST in this test");
        }

        @Override
        public String checkConnectivity(McpConfig config) {
            return "OK: reached OpenNMS 37 at http://x as admin";
        }
    };

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        mcpReader = new KvMcpConfigReader(kv, om);
        registry = new DefaultToolRegistry(new McpMetrics(), om);
        registry.addTool(new McpTool() {
            private final ToolSpec spec = ToolSpec.builder("alec_status").description("status").build();

            @Override
            public ToolSpec getSpec() {
                return spec;
            }

            @Override
            public JsonNode call(JsonNode arguments) {
                statusToolCalls++;
                return om.createObjectNode().put("alec", "ok").put("situations", 2);
            }
        });
        service = newService(registry);
    }

    @After
    public void tearDown() {
        service.shutdown();
    }

    private LlmSuggestionServiceImpl newService(ToolRegistry reg) {
        Interceptor fake = chain -> {
            Request request = chain.request();
            Buffer buffer = new Buffer();
            request.body().writeTo(buffer);
            bodies.add(om.readTree(buffer.readUtf8()));
            if (script.isEmpty()) {
                throw new AssertionError("unexpected request #" + bodies.size());
            }
            String body = script.remove(0);
            int code = codes.isEmpty() ? 200 : codes.remove(0);
            return new Response.Builder().request(request).protocol(Protocol.HTTP_1_1).code(code).message("OK")
                    .body(ResponseBody.create(MediaType.parse("application/json"), body)).build();
        };
        OkHttpClient client = new OkHttpClient.Builder().addInterceptor(fake).build();
        return new LlmSuggestionServiceImpl(client, om, Executors.newSingleThreadExecutor(), 1, true,
                reg, mcpReader, restStub);
    }

    private static String toolCall(String name, String argsJson, String usage) {
        String escaped = argsJson.replace("\\", "\\\\").replace("\"", "\\\"");
        return "{\"choices\":[{\"finish_reason\":\"tool_calls\",\"message\":{\"role\":\"assistant\",\"content\":null,"
                + "\"tool_calls\":[{\"id\":\"c1\",\"type\":\"function\",\"function\":{\"name\":\"" + name
                + "\",\"arguments\":\"" + escaped + "\"}}]}}]"
                + (usage == null ? "" : ",\"usage\":" + usage) + "}";
    }

    private static List<String> toolNames(JsonNode body) {
        List<String> names = new ArrayList<>();
        for (JsonNode t : body.get("tools")) {
            names.add(t.path("function").path("name").asText());
        }
        return names;
    }

    private void storeOpenNmsLogin() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"toolsEnabled\":true,\"opennmsUrl\":\"http://x\",\"opennmsUsername\":\"admin\",\"opennmsPassword\":\"pw\"}",
                LlmConfigReader.CONFIG_CONTEXT);
    }

    // --- validateTools ---

    @Test
    public void validateToolsFailsWhenTheRegistryIsAbsentOrEmpty() {
        LlmSuggestionServiceImpl noRegistry = new LlmSuggestionServiceImpl(new OkHttpClient(), om,
                Executors.newSingleThreadExecutor(), 1, true);
        try {
            ValidationResult r = noRegistry.validateTools(KEY, BASE_URL, MODEL, null);
            assertThat(r.isOk(), is(false));
            assertThat(r.getMessage(), containsString("not installed"));
        } finally {
            noRegistry.shutdown();
        }
        LlmSuggestionServiceImpl empty = newService(new DefaultToolRegistry(new McpMetrics(), om));
        try {
            ValidationResult r = empty.validateTools(KEY, BASE_URL, MODEL, null);
            assertThat(r.isOk(), is(false));
            assertThat(r.getMessage(), containsString("not installed"));
        } finally {
            empty.shutdown();
        }
        assertThat("no request was made", bodies.isEmpty(), is(true));
    }

    @Test
    public void validateToolsFailsWhenAlecStatusIsNotRegistered() {
        storeOpenNmsLogin();
        ToolRegistry other = new DefaultToolRegistry(new McpMetrics(), om);
        other.addTool(new McpTool() {
            @Override
            public ToolSpec getSpec() {
                return ToolSpec.builder("get_node").build();
            }

            @Override
            public JsonNode call(JsonNode arguments) {
                return om.createObjectNode();
            }
        });
        LlmSuggestionServiceImpl svc = newService(other);
        try {
            ValidationResult r = svc.validateTools(KEY, BASE_URL, MODEL, null);
            assertThat(r.isOk(), is(false));
            assertThat(r.getMessage(), containsString("alec_status tool is not registered"));
            assertThat(r.getMessage(), containsString("OpenNMS REST login: reached OpenNMS 37"));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void validateToolsRequiresKeyEndpointAndModel() {
        assertThat(service.validateTools("", BASE_URL, MODEL, null).getMessage(), containsString("API key"));
        assertThat(service.validateTools(KEY, "", MODEL, null).getMessage(), containsString("Endpoint"));
        assertThat(service.validateTools(KEY, BASE_URL, null, null).getMessage(), containsString("Model"));
        assertThat(bodies.isEmpty(), is(true));
    }

    @Test
    public void validateToolsHappyPathRoundTripsAlecStatusThenReports() {
        storeOpenNmsLogin();
        script.add(toolCall("alec_status", "{}", "{\"prompt_tokens\":50,\"completion_tokens\":5}"));
        script.add(toolCall("report_tool_check", "{\"ok\":true,\"explanation\":\"alec_status listed 1 tool\"}", null));

        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);

        assertThat(r.getMessage(), r.isOk(), is(true));
        assertThat(r.getMessage().startsWith("Yes —"), is(true));
        assertThat(r.getMessage(), containsString("alec_status listed 1 tool"));
        assertThat(r.getMessage(), containsString("(1 tool call in 2 rounds)"));
        assertThat("the stored login was probed and reported",
                r.getMessage(), containsString("OpenNMS REST login: reached OpenNMS 37 at http://x as admin"));
        assertThat(statusToolCalls, equalTo(1));

        // the probe's wire shape
        assertThat(bodies.size(), equalTo(2));
        JsonNode first = bodies.get(0);
        assertThat(first.get("model").asText(), equalTo(MODEL));
        assertThat(first.get("max_tokens").asInt(), equalTo(LlmSuggestionServiceImpl.VALIDATION_MAX_TOKENS));
        assertThat(toolNames(first), equalTo(java.util.Arrays.asList("alec_status", "report_tool_check")));
        assertThat(first.get("messages").get(0).get("content").asText(),
                equalTo(LlmSuggestionServiceImpl.TOOL_CHECK_SYSTEM_PROMPT));
        assertThat(first.get("messages").get(1).get("content").asText(),
                equalTo(LlmSuggestionServiceImpl.TOOL_CHECK_USER_PROMPT));
        JsonNode second = bodies.get(1);
        assertThat(second.get("messages").get(3).get("role").asText(), equalTo("tool"));
        assertThat(second.get("messages").get(3).get("content").asText(), containsString("\"alec\":\"ok\""));
    }

    @Test
    public void validateToolsUsesTheOverrideLoginWhenGiven() {
        script.add(toolCall("alec_status", "{}", null));
        script.add(toolCall("report_tool_check", "{\"ok\":true,\"explanation\":\"fine\"}", null));
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL,
                new McpConfig(true, "http://typed", "typed-user", "typed-pw"));
        assertThat(r.isOk(), is(true));
        assertThat(r.getMessage(), containsString("OpenNMS REST login: reached OpenNMS 37"));
    }

    @Test
    public void validateToolsFailsWithoutAnOpenNmsLoginBeforeCallingTheModel() {
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage(), containsString("No — an OpenNMS login is required"));
        assertThat(r.getMessage(), containsString("read-only"));
        assertThat("no model round trip was spent", bodies.size(), equalTo(0));
        assertThat(statusToolCalls, equalTo(0));
    }

    @Test
    public void validateToolsReportsAFailedRestLogin() {
        storeOpenNmsLogin();
        LlmSuggestionServiceImpl svc = new LlmSuggestionServiceImpl(new OkHttpClient.Builder().addInterceptor(chain -> {
            Buffer buffer = new Buffer();
            chain.request().body().writeTo(buffer);
            bodies.add(om.readTree(buffer.readUtf8()));
            return new Response.Builder().request(chain.request()).protocol(Protocol.HTTP_1_1).code(200).message("OK")
                    .body(ResponseBody.create(MediaType.parse("application/json"), script.remove(0))).build();
        }).build(), om, Executors.newSingleThreadExecutor(), 1, true, registry, mcpReader, new OpenNmsRestClient() {
            @Override
            public boolean isConfigured() {
                return true;
            }

            @Override
            public JsonNode get(String pathWithQuery) {
                return null;
            }

            @Override
            public JsonNode post(String path, JsonNode body) {
                return null;
            }

            @Override
            public String checkConnectivity(McpConfig config) {
                return "OpenNMS rejected the login (HTTP 401)";
            }
        });
        try {
            ValidationResult r = svc.validateTools(KEY, BASE_URL, MODEL, null);
            assertThat("a broken login is a hard failure", r.isOk(), is(false));
            assertThat(r.getMessage(), containsString("No — the OpenNMS login does not work: OpenNMS rejected the login (HTTP 401)"));
            assertThat("no model round trip was spent", bodies.size(), equalTo(0));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void validateToolsFailsWhenTheModelSkipsAlecStatus() {
        storeOpenNmsLogin();
        script.add(toolCall("report_tool_check", "{\"ok\":true,\"explanation\":\"I am sure it works\"}", null));
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage().startsWith("No —"), is(true));
        assertThat(r.getMessage(), containsString("without calling alec_status"));
        assertThat(r.getMessage(), containsString("I am sure it works"));
        assertThat(r.getMessage(), containsString("\"" + MODEL + "\""));
        assertThat(statusToolCalls, equalTo(0));
        assertThat(bodies.size(), equalTo(1));
    }

    @Test
    public void validateToolsRelaysTheModelsNegativeVerdict() {
        storeOpenNmsLogin();
        script.add(toolCall("alec_status", "{}", null));
        script.add(toolCall("report_tool_check", "{\"ok\":false,\"explanation\":\"the tool returned nothing useful\"}", null));
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage().startsWith("No — the tool returned nothing useful"), is(true));
        assertThat(r.getMessage(), containsString("OpenNMS REST login"));
    }

    @Test
    public void validateToolsFillsInAnExplanationWhenTheModelGivesNone() {
        storeOpenNmsLogin();
        script.add(toolCall("alec_status", "{}", null));
        script.add(toolCall("report_tool_check", "{\"ok\":false}", null));
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage(), containsString("reported failure without a reason"));
    }

    @Test
    public void validateToolsTurnsLoopFailuresIntoOperatorAdvice() {
        storeOpenNmsLogin();
        script.add("{\"choices\":[{\"finish_reason\":\"stop\",\"message\":{\"role\":\"assistant\",\"content\":\"hi\"}}]}");
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage().startsWith("No —"), is(true));
        assertThat(r.getMessage(), containsString("did not make the expected tool call"));
        assertThat(r.getMessage(), containsString("OpenNMS REST login"));
    }

    @Test
    public void validateToolsNeverReportsWhenRoundsRunOut() {
        storeOpenNmsLogin();
        for (int i = 0; i < LlmSuggestionServiceImpl.TOOL_CHECK_ROUNDS; i++) {
            script.add(toolCall("alec_status", "{}", null));
        }
        ValidationResult r = service.validateTools(KEY, BASE_URL, MODEL, null);
        assertThat(r.isOk(), is(false));
        assertThat(r.getMessage(), containsString("did not make the expected tool call"));
        assertThat(bodies.size(), equalTo(LlmSuggestionServiceImpl.TOOL_CHECK_ROUNDS));
        assertThat("the final round offers only the report tool",
                toolNames(bodies.get(bodies.size() - 1)), equalTo(Collections.singletonList("report_tool_check")));
    }

    // --- describeFailure ---

    @Test
    public void describeFailureMapsKindsToAdvice() {
        String length = LlmSuggestionServiceImpl.describeFailure(
                new LlmCallException(LlmCallException.Kind.LENGTH, "x"), MODEL);
        assertThat(length, containsString("output-token limit"));
        assertThat(length, containsString("reasoning model"));
        assertThat(length, containsString("\"" + MODEL + "\""));

        String noCall = LlmSuggestionServiceImpl.describeFailure(
                new LlmCallException(LlmCallException.Kind.NO_TOOL_CALL, "x"), MODEL);
        assertThat(noCall, containsString("did not make the expected tool call"));
        assertThat(noCall, containsString("tool/function calling"));
        assertThat(LlmSuggestionServiceImpl.describeFailure(
                new LlmCallException(LlmCallException.Kind.ROUNDS_EXHAUSTED, "x"), MODEL), equalTo(noCall));

        assertThat(LlmSuggestionServiceImpl.describeFailure(
                new LlmCallException(LlmCallException.Kind.HTTP, "HTTP 401 from provider: bad key", 401, null), MODEL),
                equalTo("HTTP 401 from provider: bad key"));
        assertThat(LlmSuggestionServiceImpl.describeFailure(
                new LlmCallException(LlmCallException.Kind.NETWORK, "Could not reach x"), MODEL),
                equalTo("Could not reach x"));
    }

    // --- requestSuggestions with tools ---

    @Test
    public void requestSuggestionsWithToolsOffersTheRegistryAndExecutesCalls() throws Exception {
        script.add(toolCall("alec_status", "{}", "{\"prompt_tokens\":100,\"completion_tokens\":10}"));
        script.add(toolCall("report_suggestions", "{\"rootCauses\":[\"a\"],\"resolutions\":[\"b\",\"c\"]}",
                "{\"prompt_tokens\":300,\"completion_tokens\":20,\"prompt_tokens_details\":{\"cached_tokens\":100}}"));

        Suggestions s = service.requestSuggestions(stubSituation(), KEY, BASE_URL, MODEL, "PROMPT", true)
                .get(5, TimeUnit.SECONDS);

        assertThat(s.getRootCauses(), equalTo(Collections.singletonList("a")));
        assertThat(s.getResolutions().size(), equalTo(2));
        assertThat(s.getToolCalls(), equalTo(1));
        assertThat(statusToolCalls, equalTo(1));
        assertThat("usage summed across rounds", s.getUsage().getInputTokens(), equalTo(100L + 200L));
        assertThat(s.getUsage().getOutputTokens(), equalTo(30L));
        assertThat(s.getUsage().getCacheReadInputTokens(), equalTo(100L));

        assertThat(bodies.size(), equalTo(2));
        JsonNode first = bodies.get(0);
        assertThat(toolNames(first), equalTo(java.util.Arrays.asList("alec_status", "report_suggestions")));
        String system = first.get("messages").get(0).get("content").asText();
        assertThat(system.startsWith("PROMPT"), is(true));
        assertThat("guidance appended when tools are used",
                system.endsWith(LlmSuggestionServiceImpl.TOOLS_GUIDANCE), is(true));
        assertThat(first.get("max_tokens").asInt(), equalTo(LlmSuggestionServiceImpl.MAX_TOKENS));
        assertThat(first.get("messages").get(1).get("content").asText(), containsString("sit-42"));
        assertThat("node id is rendered for the tools", first.get("messages").get(1).get("content").asText(),
                containsString("node 7 (core-1)"));
    }

    @Test
    public void requestSuggestionsWithoutToolsIsSingleShotWithoutGuidance() throws Exception {
        script.add(toolCall("report_suggestions", "{\"rootCauses\":[\"a\"],\"resolutions\":[\"b\"]}",
                "{\"prompt_tokens\":10,\"completion_tokens\":2}"));
        Suggestions s = service.requestSuggestions(stubSituation(), KEY, BASE_URL, MODEL, "PROMPT", false)
                .get(5, TimeUnit.SECONDS);
        assertThat(s.getToolCalls(), equalTo(0));
        assertThat(s.getUsage().getInputTokens(), equalTo(10L));
        assertThat(bodies.size(), equalTo(1));
        assertThat(toolNames(bodies.get(0)), equalTo(Collections.singletonList("report_suggestions")));
        assertThat(bodies.get(0).get("messages").get(0).get("content").asText(), equalTo("PROMPT"));
        assertThat(bodies.get(0).get("messages").get(0).get("content").asText(),
                not(containsString(LlmSuggestionServiceImpl.TOOLS_GUIDANCE)));
        assertThat(statusToolCalls, equalTo(0));
    }

    @Test
    public void requestSuggestionsWithToolsButNoRegistryIsSingleShot() throws Exception {
        LlmSuggestionServiceImpl noRegistry = newService(null);
        try {
            script.add(toolCall("report_suggestions", "{\"rootCauses\":[],\"resolutions\":[]}", null));
            Suggestions s = noRegistry.requestSuggestions(stubSituation(), KEY, BASE_URL, MODEL, null, true)
                    .get(5, TimeUnit.SECONDS);
            assertThat(s.getToolCalls(), equalTo(0));
            assertThat(toolNames(bodies.get(0)), equalTo(Collections.singletonList("report_suggestions")));
            assertThat("null prompt falls back to the default, without guidance",
                    bodies.get(0).get("messages").get(0).get("content").asText(),
                    equalTo(LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT));
        } finally {
            noRegistry.shutdown();
        }
    }

    @Test
    public void requestSuggestionsMapsHttpFailuresToLlmApiException() throws Exception {
        codes.add(401);
        script.add("{\"error\":{\"message\":\"invalid api key\"}}");
        try {
            service.requestSuggestions(stubSituation(), KEY, BASE_URL, MODEL, "PROMPT", false).get(5, TimeUnit.SECONDS);
            fail("expected failure");
        } catch (ExecutionException e) {
            assertThat(e.getCause() instanceof LlmApiException, is(true));
            assertThat(e.getCause().getMessage(), equalTo("LLM API returned HTTP 401: invalid api key"));
            assertThat(e.getCause().getMessage(), not(containsString(KEY)));
        }
    }

    @Test
    public void requestSuggestionsMapsMissingToolCallToTheLegacyMessage() throws Exception {
        script.add("{\"choices\":[{\"message\":{\"role\":\"assistant\",\"content\":\"text only\"}}]}");
        try {
            service.requestSuggestions(stubSituation(), KEY, BASE_URL, MODEL, "PROMPT", false).get(5, TimeUnit.SECONDS);
            fail("expected failure");
        } catch (ExecutionException e) {
            assertThat(e.getCause().getMessage(), containsString("model did not call report_suggestions"));
        }
    }

    private static Situation stubSituation() {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn("alarm-1");
        when(a.getTime()).thenReturn(1716000000000L);
        when(a.getSeverity()).thenReturn(Severity.MAJOR);
        when(a.getInventoryObjectType()).thenReturn("SnmpInterface");
        when(a.getInventoryObjectId()).thenReturn("Gi1/0/24");
        when(a.getNodeId()).thenReturn(7L);
        when(a.getNodeLabel()).thenReturn("core-1");
        when(a.getSummary()).thenReturn("link down");
        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn("sit-42");
        when(s.getSeverity()).thenReturn(Severity.MAJOR);
        Set<Alarm> alarms = new HashSet<>();
        alarms.add(a);
        when(s.getAlarms()).thenReturn(alarms);
        return s;
    }

    // --- /v1 hint for local servers ---

    @Test
    public void describeFailureSuggestsV1WhenALocalServerRejectsTheRoute() {
        LlmCallException provider = new LlmCallException(LlmCallException.Kind.PROVIDER,
                "Provider error: Unexpected endpoint or method. (POST /chat/completions)");
        String msg = LlmSuggestionServiceImpl.describeFailure(provider, "gemma", "http://127.0.0.1:1234");
        assertThat(msg, containsString("Unexpected endpoint"));
        assertThat(msg, containsString("try http://127.0.0.1:1234/v1"));

        LlmCallException notFound = new LlmCallException(LlmCallException.Kind.HTTP, "HTTP 404 from provider: x", 404, null);
        assertThat(LlmSuggestionServiceImpl.describeFailure(notFound, "m", "http://host:11434/"),
                containsString("try http://host:11434/v1"));
    }

    @Test
    public void describeFailureDoesNotSuggestV1WhenAlreadyPresentOrUnrelated() {
        LlmCallException provider = new LlmCallException(LlmCallException.Kind.PROVIDER, "Provider error: quota");
        assertThat(LlmSuggestionServiceImpl.describeFailure(provider, "m", "http://127.0.0.1:1234/v1"),
                org.hamcrest.CoreMatchers.not(containsString("/v1 path")));
        LlmCallException auth = new LlmCallException(LlmCallException.Kind.HTTP, "HTTP 401 from provider: bad key", 401, null);
        assertThat(LlmSuggestionServiceImpl.describeFailure(auth, "m", "http://127.0.0.1:1234"),
                org.hamcrest.CoreMatchers.not(containsString("/v1 path")));
        LlmCallException length = new LlmCallException(LlmCallException.Kind.LENGTH, "x");
        assertThat(LlmSuggestionServiceImpl.describeFailure(length, "m", "http://127.0.0.1:1234"),
                org.hamcrest.CoreMatchers.not(containsString("/v1 path")));
    }
}
