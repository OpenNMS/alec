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

package org.opennms.alec.mcp.llm;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolConsumer;
import org.opennms.alec.mcp.ToolResult;
import org.opennms.alec.mcp.ToolSpec;

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
 * Drives {@link ChatToolLoop} against a scripted, in-process "provider": an
 * OkHttp application interceptor that fabricates each response in order and
 * records every request body. No network.
 */
public class ChatToolLoopTest {

    private static final String BASE_URL = "https://llm.example/v1";
    private static final String API_KEY = "sk-test-key";
    private static final String MODEL = "test/model";

    private final ObjectMapper om = new ObjectMapper();
    private final Deque<Scripted> script = new ArrayDeque<>();
    private final List<Request> requests = new ArrayList<>();
    private final List<JsonNode> bodies = new ArrayList<>();
    private ChatToolLoop loop;
    private final DefaultLlmUsageMetrics metrics = new DefaultLlmUsageMetrics();

    private static final class Scripted {
        final int code;
        final String body;
        final IOException failure;

        Scripted(int code, String body, IOException failure) {
            this.code = code;
            this.body = body;
            this.failure = failure;
        }
    }

    @Before
    public void setUp() {
        Interceptor fake = chain -> {
            Request request = chain.request();
            requests.add(request);
            Buffer buffer = new Buffer();
            request.body().writeTo(buffer);
            bodies.add(om.readTree(buffer.readUtf8()));
            Scripted next = script.poll();
            if (next == null) {
                throw new AssertionError("unexpected request #" + requests.size());
            }
            if (next.failure != null) {
                throw next.failure;
            }
            return new Response.Builder()
                    .request(request)
                    .protocol(Protocol.HTTP_1_1)
                    .code(next.code)
                    .message("OK")
                    .body(ResponseBody.create(MediaType.parse("application/json"), next.body))
                    .build();
        };
        loop = new ChatToolLoop(new OkHttpClient.Builder().addInterceptor(fake).build(), om, metrics);
    }

    // --- scripting helpers ---

    private void respond(String body) {
        script.add(new Scripted(200, body, null));
    }

    private void respond(int code, String body) {
        script.add(new Scripted(code, body, null));
    }

    private void failWith(IOException e) {
        script.add(new Scripted(0, null, e));
    }

    /** A chat-completions response whose assistant message makes the given tool calls. */
    private static String toolCalls(String usage, String... calls) {
        return "{\"choices\":[{\"finish_reason\":\"tool_calls\",\"message\":{\"role\":\"assistant\","
                + "\"content\":null,\"tool_calls\":[" + String.join(",", calls) + "]}}]"
                + (usage == null ? "" : ",\"usage\":" + usage) + "}";
    }

    /** One tool call with the arguments as a JSON-encoded string (the OpenAI wire form). */
    private static String call(String id, String name, String argsJson) {
        String escaped = argsJson.replace("\\", "\\\\").replace("\"", "\\\"");
        return "{" + (id == null ? "" : "\"id\":\"" + id + "\",") + "\"type\":\"function\",\"function\":{\"name\":\""
                + name + "\",\"arguments\":\"" + escaped + "\"}}";
    }

    private static String usage(int prompt, int completion, int cached) {
        return "{\"prompt_tokens\":" + prompt + ",\"completion_tokens\":" + completion
                + ",\"prompt_tokens_details\":{\"cached_tokens\":" + cached + "}}";
    }

    private static ToolSpec terminal() {
        return ToolSpec.builder("report").description("deliver").string("answer", "the answer", true).build();
    }

    private static ToolSpec dataTool() {
        return ToolSpec.builder("get_node_inventory").description("node").string("nodeId", "id", true).build();
    }

    private ChatRequest.Builder request() {
        return ChatRequest.builder()
                .endpoint(new LlmEndpoint(BASE_URL, API_KEY, MODEL))
                .systemPrompt("SYSTEM")
                .userContent("USER")
                .terminalTool(terminal())
                .maxTokens(1234);
    }

    private static final class RecordingExecutor implements ChatRequest.ToolExecutor {
        final List<String> names = new ArrayList<>();
        final List<JsonNode> args = new ArrayList<>();
        final List<ToolConsumer> consumers = new ArrayList<>();
        ToolResult result;

        RecordingExecutor(ToolResult result) {
            this.result = result;
        }

        @Override
        public ToolResult call(ToolConsumer consumer, String name, JsonNode arguments) {
            consumers.add(consumer);
            names.add(name);
            args.add(arguments);
            return result;
        }
    }

    // --- (a) single-shot ---

    @Test
    public void noDataToolsIsASingleForcedCallReturningTerminalArgsAndUsage() throws Exception {
        respond(toolCalls(usage(100, 10, 40), call("call_1", "report", "{\"answer\":\"x\"}")));

        ChatResult result = loop.run(request().maxRounds(1).build());

        assertThat(requests.size(), equalTo(1));
        JsonNode body = bodies.get(0);
        assertThat(body.get("model").asText(), equalTo(MODEL));
        assertThat(body.get("max_tokens").asInt(), equalTo(1234));
        assertThat(body.get("tool_choice").asText(), equalTo("required"));
        assertThat(body.get("tools").size(), equalTo(1));
        assertThat(body.get("tools").get(0).path("function").path("name").asText(), equalTo("report"));
        assertThat(body.get("messages").size(), equalTo(2));
        assertThat(body.get("messages").get(0).get("role").asText(), equalTo("system"));
        assertThat(body.get("messages").get(0).get("content").asText(), equalTo("SYSTEM"));
        assertThat(body.get("messages").get(1).get("role").asText(), equalTo("user"));
        assertThat(body.get("messages").get(1).get("content").asText(), equalTo("USER"));

        assertThat(result.getTerminalArguments().get("answer").asText(), equalTo("x"));
        assertThat(result.getToolCalls(), equalTo(0));
        assertThat(result.getRounds(), equalTo(1));
        TokenUsage u = result.getUsage();
        assertThat("cached tokens are split out of prompt_tokens", u.getInputTokens(), equalTo(60L));
        assertThat(u.getOutputTokens(), equalTo(10L));
        assertThat(u.getCacheReadInputTokens(), equalTo(40L));
        assertThat(u.getCacheCreationInputTokens(), equalTo(0L));
        assertThat(u.getTotalTokens(), equalTo(110L));
    }

    // --- (m) headers / URL ---

    @Test
    public void requestCarriesBearerKeyAndPostsToChatCompletions() throws Exception {
        respond(toolCalls(null, call("c", "report", "{}")));
        loop.run(request().build());
        Request r = requests.get(0);
        assertThat(r.method(), equalTo("POST"));
        assertThat(r.url().toString(), equalTo("https://llm.example/v1/chat/completions"));
        assertThat(r.header("Authorization"), equalTo("Bearer " + API_KEY));
        assertThat(r.header("Content-Type"), equalTo("application/json"));
        assertThat(r.header("X-Title"), equalTo("OpenNMS ALEC"));
    }

    @Test
    public void missingUsageBlockYieldsEmptyUsage() throws Exception {
        respond(toolCalls(null, call("c", "report", "{}")));
        ChatResult result = loop.run(request().build());
        assertThat(result.getUsage().getTotalTokens(), equalTo(0L));
    }

    // --- (b) data tool round trip ---

    @Test
    public void dataToolCallIsExecutedEchoedAndFollowedByTheTerminalCall() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(
                ToolResult.ok(om.createObjectNode().put("nodeId", 1), "{\"nodeId\":1}"));
        respond(toolCalls(usage(100, 10, 0), call("call_abc", "get_node_inventory", "{\"nodeId\":\"1\"}")));
        respond(toolCalls(usage(200, 5, 50), call("call_2", "report", "{\"answer\":\"done\"}")));

        ChatResult result = loop.run(request()
                .dataTools(Collections.singletonList(dataTool()))
                .executor(executor)
                .consumer(ToolConsumer.CLUSTERING)
                .maxRounds(3)
                .build());

        // executor saw the parsed arguments
        assertThat(executor.names, equalTo(Collections.singletonList("get_node_inventory")));
        assertThat(executor.args.get(0).get("nodeId").asText(), equalTo("1"));
        assertThat(executor.consumers.get(0), equalTo(ToolConsumer.CLUSTERING));

        // first request offered both tools
        assertThat(bodies.get(0).get("tools").size(), equalTo(2));

        // second request continues the conversation per the wire format
        JsonNode messages = bodies.get(1).get("messages");
        assertThat(messages.size(), equalTo(4));
        JsonNode assistant = messages.get(2);
        assertThat(assistant.get("role").asText(), equalTo("assistant"));
        assertThat(assistant.get("content").isNull(), is(true));
        JsonNode echoed = assistant.get("tool_calls").get(0);
        assertThat(echoed.get("id").asText(), equalTo("call_abc"));
        assertThat(echoed.get("type").asText(), equalTo("function"));
        assertThat(echoed.path("function").path("name").asText(), equalTo("get_node_inventory"));
        assertThat("arguments echoed as a string", echoed.path("function").path("arguments").isTextual(), is(true));
        assertThat(echoed.path("function").path("arguments").asText(), equalTo("{\"nodeId\":\"1\"}"));
        JsonNode toolMsg = messages.get(3);
        assertThat(toolMsg.get("role").asText(), equalTo("tool"));
        assertThat(toolMsg.get("tool_call_id").asText(), equalTo("call_abc"));
        assertThat(toolMsg.get("content").asText(), equalTo("{\"nodeId\":1}"));

        assertThat(result.getTerminalArguments().get("answer").asText(), equalTo("done"));
        assertThat(result.getToolCalls(), equalTo(1));
        assertThat(result.getRounds(), equalTo(2));
        TokenUsage u = result.getUsage();
        assertThat("usage summed over rounds", u.getInputTokens(), equalTo(100L + 150L));
        assertThat(u.getOutputTokens(), equalTo(15L));
        assertThat(u.getCacheReadInputTokens(), equalTo(50L));
    }

    @Test
    public void toolCallWithoutIdGetsASyntheticIdUsedInBothEchoAndToolMessage() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond(toolCalls(null, call(null, "get_node_inventory", "{}")));
        respond(toolCalls(null, call("c", "report", "{}")));
        loop.run(request().dataTools(Collections.singletonList(dataTool())).executor(executor).maxRounds(2).build());
        JsonNode messages = bodies.get(1).get("messages");
        assertThat(messages.get(2).get("tool_calls").get(0).get("id").asText(), equalTo("call_1"));
        assertThat(messages.get(3).get("tool_call_id").asText(), equalTo("call_1"));
    }

    @Test
    public void toolErrorResultIsRelayedAsTheToolMessageContent() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(
                ToolResult.failure(om.createObjectNode().put("error", "No node"), "{\"error\":\"No node\"}"));
        respond(toolCalls(null, call("a", "get_node_inventory", "{\"nodeId\":\"9\"}")));
        respond(toolCalls(null, call("c", "report", "{}")));
        ChatResult result = loop.run(request().dataTools(Collections.singletonList(dataTool()))
                .executor(executor).maxRounds(2).build());
        assertThat(bodies.get(1).get("messages").get(3).get("content").asText(), equalTo("{\"error\":\"No node\"}"));
        assertThat("an error result still counts as a tool call", result.getToolCalls(), equalTo(1));
    }

    @Test
    public void multipleToolCallsInOneRoundAreAllExecutedInOrder() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond(toolCalls(null, call("a", "get_node_inventory", "{\"nodeId\":\"1\"}"), call("b", "get_node_inventory", "{\"nodeId\":\"2\"}")));
        respond(toolCalls(null, call("c", "report", "{}")));
        ChatResult result = loop.run(request().dataTools(Collections.singletonList(dataTool()))
                .executor(executor).maxRounds(2).build());
        assertThat(executor.args.size(), equalTo(2));
        assertThat(executor.args.get(0).get("nodeId").asText(), equalTo("1"));
        assertThat(executor.args.get(1).get("nodeId").asText(), equalTo("2"));
        JsonNode messages = bodies.get(1).get("messages");
        assertThat(messages.size(), equalTo(5));
        assertThat(messages.get(3).get("tool_call_id").asText(), equalTo("a"));
        assertThat(messages.get(4).get("tool_call_id").asText(), equalTo("b"));
        assertThat(result.getToolCalls(), equalTo(2));
    }

    // --- (c) last round offers only the terminal tool ---

    @Test
    public void lastRoundOffersOnlyTheTerminalTool() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond(toolCalls(null, call("a", "get_node_inventory", "{}")));
        respond(toolCalls(null, call("c", "report", "{}")));
        loop.run(request().dataTools(Collections.singletonList(dataTool())).executor(executor).maxRounds(2).build());
        assertThat(bodies.get(0).get("tools").size(), equalTo(2));
        JsonNode lastTools = bodies.get(1).get("tools");
        assertThat(lastTools.size(), equalTo(1));
        assertThat(lastTools.get(0).path("function").path("name").asText(), equalTo("report"));
    }

    // --- (d) rounds exhausted ---

    @Test
    public void modelThatNeverReportsIsRoundsExhausted() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond(toolCalls(null, call("a", "get_node_inventory", "{}")));
        respond(toolCalls(null, call("b", "get_node_inventory", "{}")));
        try {
            loop.run(request().dataTools(Collections.singletonList(dataTool())).executor(executor).maxRounds(2).build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.ROUNDS_EXHAUSTED));
            assertThat(e.getMessage(), containsString("report"));
            assertThat(e.getMessage(), containsString("2 round(s)"));
        }
        assertThat(requests.size(), equalTo(2));
        assertThat("the unoffered call on the last round is not executed", executor.names.size(), equalTo(1));
    }

    // --- (e) / (f) no tool call ---

    @Test
    public void finishReasonLengthWithoutToolCallsIsLength() {
        respond("{\"choices\":[{\"finish_reason\":\"length\",\"message\":{\"role\":\"assistant\","
                + "\"content\":\"\",\"tool_calls\":[]}}]}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.LENGTH));
            assertThat(e.getMessage(), containsString("output-token limit"));
        }
    }

    @Test
    public void plainTextReplyIsNoToolCall() {
        respond("{\"choices\":[{\"finish_reason\":\"stop\",\"message\":{\"role\":\"assistant\","
                + "\"content\":\"Sure, here is my answer\"}}]}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.NO_TOOL_CALL));
            assertThat(e.getMessage(), containsString("report"));
        }
    }

    // --- (g) HTTP errors ---

    @Test
    public void httpErrorCarriesStatusAndProviderMessageButNeverTheRawBody() {
        respond(429, "{\"error\":{\"message\":\"rate limited\",\"type\":\"rate_limit\"},\"debug\":\"RAWBODY\"}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.HTTP));
            assertThat(e.getHttpStatus(), equalTo(429));
            assertThat(e.getMessage(), containsString("HTTP 429 from provider: rate limited"));
            assertThat(e.getMessage(), not(containsString("RAWBODY")));
        }
    }

    @Test
    public void httpErrorWithNonJsonBodyDoesNotEchoTheBody() {
        respond(502, "<html>upstream gateway oops</html>");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.HTTP));
            assertThat(e.getHttpStatus(), equalTo(502));
            assertThat(e.getMessage(), not(containsString("oops")));
            assertThat(e.getMessage(), containsString("no parseable error message"));
        }
    }

    @Test
    public void httpErrorWithEmptyBodySaysSo() {
        respond(500, "");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getHttpStatus(), equalTo(500));
            assertThat(e.getMessage(), containsString("(empty response)"));
        }
    }

    @Test
    public void providerErrorHelperTruncatesLongMessagesAndAcceptsStringErrors() {
        StringBuilder longMsg = new StringBuilder();
        for (int i = 0; i < 400; i++) {
            longMsg.append('m');
        }
        String out = ChatToolLoop.providerError("{\"error\":{\"message\":\"" + longMsg + "\"}}", om);
        assertThat(out.length(), equalTo(303));
        assertThat(out.endsWith("..."), is(true));
        assertThat(ChatToolLoop.providerError("{\"error\":\"plain string\"}", om), equalTo("plain string"));
        assertThat(ChatToolLoop.providerError("", om), equalTo("(empty response)"));
    }

    // --- (h) / (i) 200 but not usable ---

    @Test
    public void okWithErrorEnvelopeIsProviderError() {
        respond("{\"error\":{\"message\":\"model not found\"}}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.PROVIDER));
            assertThat(e.getMessage(), containsString("model not found"));
            assertThat(e.getHttpStatus(), equalTo(0));
        }
    }

    @Test
    public void missingChoicesIsMalformed() {
        respond("{\"id\":\"chatcmpl-1\"}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.MALFORMED));
            assertThat(e.getMessage(), containsString("choices"));
        }
    }

    @Test
    public void missingMessageInFirstChoiceIsMalformed() {
        respond("{\"choices\":[{\"finish_reason\":\"stop\"}]}");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.MALFORMED));
            assertThat(e.getMessage(), containsString("message"));
        }
    }

    @Test
    public void nonJsonOkBodyIsMalformed() {
        respond("<html>not json</html>");
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.MALFORMED));
            assertThat(e.getMessage(), containsString("did not return JSON"));
            assertThat(e.getMessage(), not(containsString("html")));
        }
    }

    // --- (j) URL validation ---

    @Test
    public void chatCompletionsUrlToleratesTrailingSlashesAndWhitespace() throws Exception {
        assertThat(ChatToolLoop.chatCompletionsUrl("https://api.example.com/v1"),
                equalTo("https://api.example.com/v1/chat/completions"));
        assertThat(ChatToolLoop.chatCompletionsUrl("https://api.example.com/v1/"),
                equalTo("https://api.example.com/v1/chat/completions"));
        assertThat(ChatToolLoop.chatCompletionsUrl("  https://api.example.com/v1// "),
                equalTo("https://api.example.com/v1/chat/completions"));
        assertThat(ChatToolLoop.CHAT_COMPLETIONS_PATH, equalTo("/chat/completions"));
    }

    @Test
    public void chatCompletionsUrlRejectsCredentialsQueryFragmentAndNonHttp() {
        assertUrlRejected("https://user:pass@api.example.com/v1", "credentials");
        assertUrlRejected("https://user@api.example.com/v1", "credentials");
        assertUrlRejected("https://api.example.com/v1?next=x", "query");
        assertUrlRejected("https://api.example.com/v1#frag", "query");
        assertUrlRejected("ftp://api.example.com/v1", "http");
        assertUrlRejected("not a url", "http");
        assertUrlRejected(null, "http");
    }

    private static void assertUrlRejected(String url, String expectedWord) {
        try {
            ChatToolLoop.chatCompletionsUrl(url);
            fail("expected rejection for " + url);
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.BAD_REQUEST));
            assertThat(e.getMessage(), containsString(expectedWord));
        }
    }

    @Test
    public void badBaseUrlFailsBeforeAnyRequest() {
        try {
            loop.run(request().endpoint(new LlmEndpoint("https://u:p@x.example/v1", API_KEY, MODEL)).build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.BAD_REQUEST));
        }
        assertThat(requests.isEmpty(), is(true));
    }

    @Test
    public void apiKeyWithIllegalHeaderCharactersIsBadRequestAndNeverEchoed() {
        try {
            loop.run(request().endpoint(new LlmEndpoint(BASE_URL, "sk-leak\nme", MODEL)).build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.BAD_REQUEST));
            assertThat(e.getMessage(), not(containsString("sk-leak")));
            assertThat(e.getCause() == null, is(true));
        }
        assertThat(requests.isEmpty(), is(true));
    }

    // --- (k) arguments as an object ---

    @Test
    public void argumentsGivenAsAnObjectAreAccepted() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond("{\"choices\":[{\"message\":{\"tool_calls\":[{\"id\":\"a\",\"type\":\"function\","
                + "\"function\":{\"name\":\"get_node_inventory\",\"arguments\":{\"nodeId\":\"7\"}}}]}}]}");
        respond("{\"choices\":[{\"message\":{\"tool_calls\":[{\"id\":\"b\",\"type\":\"function\","
                + "\"function\":{\"name\":\"report\",\"arguments\":{\"answer\":\"obj\"}}}]}}]}");
        ChatResult result = loop.run(request().dataTools(Collections.singletonList(dataTool()))
                .executor(executor).maxRounds(2).build());
        assertThat(executor.args.get(0).get("nodeId").asText(), equalTo("7"));
        assertThat(result.getTerminalArguments().get("answer").asText(), equalTo("obj"));
        // the echo still serializes the object as a string
        JsonNode echoedArgs = bodies.get(1).get("messages").get(2).get("tool_calls").get(0).path("function").path("arguments");
        assertThat(echoedArgs.isTextual(), is(true));
        assertThat(om.readTree(echoedArgs.asText()).get("nodeId").asText(), equalTo("7"));
    }

    @Test
    public void emptyOrMissingArgumentsBecomeAnEmptyObject() throws Exception {
        respond("{\"choices\":[{\"message\":{\"tool_calls\":[{\"id\":\"b\",\"type\":\"function\","
                + "\"function\":{\"name\":\"report\",\"arguments\":\"\"}}]}}]}");
        assertThat(loop.run(request().build()).getTerminalArguments().isObject(), is(true));
        respond("{\"choices\":[{\"message\":{\"tool_calls\":[{\"id\":\"b\",\"type\":\"function\","
                + "\"function\":{\"name\":\"report\"}}]}}]}");
        assertThat(loop.run(request().build()).getTerminalArguments().size(), equalTo(0));
    }

    @Test
    public void unparseableArgumentStringIsHandedToTheExecutorAsText() throws Exception {
        RecordingExecutor executor = new RecordingExecutor(ToolResult.ok(om.createObjectNode(), "{}"));
        respond(toolCalls(null, call("a", "get_node_inventory", "{not json")));
        respond(toolCalls(null, call("b", "report", "{}")));
        loop.run(request().dataTools(Collections.singletonList(dataTool())).executor(executor).maxRounds(2).build());
        assertThat(executor.args.get(0).isTextual(), is(true));
        assertThat(executor.args.get(0).asText(), equalTo("{not json"));
    }

    // --- (l) network ---

    @Test
    public void ioExceptionFromTheClientIsNetwork() {
        failWith(new IOException("Connection refused"));
        try {
            loop.run(request().build());
            fail("expected LlmCallException");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.NETWORK));
            assertThat(e.getMessage(), containsString("Could not reach https://llm.example/v1/chat/completions"));
            assertThat(e.getMessage(), containsString("Connection refused"));
        }
    }

    // --- static helpers ---

    @Test
    public void staticHelpersParseUsageFinishReasonAndTerminalArguments() throws Exception {
        JsonNode root = om.readTree(toolCalls(usage(1000, 20, 1500), call("x", "report", "{\"answer\":\"a\"}")));
        TokenUsage u = ChatToolLoop.readUsage(root);
        assertThat("cached capped at prompt_tokens", u.getCacheReadInputTokens(), equalTo(1000L));
        assertThat(u.getInputTokens(), equalTo(0L));
        assertThat(ChatToolLoop.readUsage(null).getTotalTokens(), equalTo(0L));
        assertThat(ChatToolLoop.firstChoiceFinishReason(root), equalTo("tool_calls"));
        assertThat(ChatToolLoop.firstChoiceFinishReason(null), equalTo(""));
        assertThat(ChatToolLoop.extractTerminalArguments(root, "report").get("answer").asText(), equalTo("a"));
        assertThat(ChatToolLoop.extractTerminalArguments(root, "other") == null, is(true));
        try {
            ChatToolLoop.extractTerminalArguments(om.readTree("{}"), "report");
            fail("expected IOException");
        } catch (IOException expected) {
            assertThat(expected.getMessage(), containsString("choices"));
        }
    }

    @Test
    public void buildRequestBodyConvenienceProducesSystemAndUserMessages() throws Exception {
        String body = ChatToolLoop.buildRequestBody(MODEL, "S", "U", Collections.singletonList(terminal()), 99, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("messages").size(), equalTo(2));
        assertThat(root.get("messages").get(0).get("content").asText(), equalTo("S"));
        assertThat(root.get("messages").get(1).get("content").asText(), equalTo("U"));
        assertThat(root.get("max_tokens").asInt(), equalTo(99));
        assertThat(root.get("tool_choice").asText(), equalTo("required"));
    }

    @Test
    public void chatRequestBuilderValidatesAndDefaults() {
        ChatRequest r = request().maxRounds(0).build();
        assertThat("maxRounds is at least 1", r.getMaxRounds(), equalTo(1));
        assertThat(r.getConsumer(), equalTo(ToolConsumer.RCA));
        assertThat(r.getDataTools().isEmpty(), is(true));
        try {
            request().dataTools(Collections.singletonList(dataTool())).build();
            fail("data tools without an executor must be rejected");
        } catch (IllegalArgumentException expected) {
            // ok
        }
        assertThat(new LlmEndpoint(BASE_URL, API_KEY, MODEL).toString(), not(containsString(API_KEY)));
    }

    // --- token usage metrics (JMX gauges) ---

    @Test
    public void recordsEveryRoundsUsageAndASuccessfulCall() throws Exception {
        respond(toolCalls(usage(100, 10, 0), call("c1", "lookup", "{}")));
        respond(toolCalls(usage(200, 20, 50), call("c2", "report", "{\"ok\":true}")));
        ChatRequest request = ChatRequest.builder()
                .endpoint(new LlmEndpoint("http://x/v1", "k", "m"))
                .systemPrompt("s").userContent("u")
                .terminalTool(ToolSpec.builder("report").build())
                .dataTools(List.of(ToolSpec.builder("lookup").build()))
                .executor((c, n, a) -> ToolResult.ok(om.createObjectNode(), "{}"))
                .consumer(ToolConsumer.CLUSTERING)
                .maxRounds(3)
                .build();
        ChatResult result = loop.run(request);
        assertThat(result.getRounds(), equalTo(2));
        assertThat(metrics.getTotalTokens(), equalTo(330L));
        assertThat(metrics.getTokens(ToolConsumer.CLUSTERING), equalTo(330L));
        assertThat(metrics.getTokens(ToolConsumer.RCA), equalTo(0L));
        assertThat(metrics.getCalls(), equalTo(1L));
        assertThat(metrics.getFailedCalls(), equalTo(0L));
        assertThat(metrics.getCalls(ToolConsumer.CLUSTERING), equalTo(1L));
    }

    @Test
    public void recordsTokensSpentByAnExchangeThatThenFails() {
        // A plain-text answer (no tool call) after consuming tokens.
        respond("{\"choices\":[{\"message\":{\"role\":\"assistant\",\"content\":\"hi\"},"
                + "\"finish_reason\":\"stop\"}],\"usage\":{\"prompt_tokens\":40,\"completion_tokens\":2}}");
        ChatRequest request = ChatRequest.builder()
                .endpoint(new LlmEndpoint("http://x/v1", "k", "m"))
                .systemPrompt("s").userContent("u")
                .terminalTool(ToolSpec.builder("report").build())
                .consumer(ToolConsumer.RCA)
                .build();
        try {
            loop.run(request);
            org.junit.Assert.fail("expected NO_TOOL_CALL");
        } catch (LlmCallException e) {
            assertThat(e.getKind(), equalTo(LlmCallException.Kind.NO_TOOL_CALL));
        }
        assertThat(metrics.getTotalTokens(), equalTo(42L));
        assertThat(metrics.getCalls(), equalTo(1L));
        assertThat(metrics.getFailedCalls(), equalTo(1L));
        assertThat(metrics.getCalls(ToolConsumer.RCA), equalTo(1L));
    }

    @Test
    public void loopWithoutMetricsStillWorks() throws Exception {
        respond(toolCalls(null, call("c1", "report", "{}")));
        ChatToolLoop bare = new ChatToolLoop(new OkHttpClient.Builder().addInterceptor(chain -> {
            Scripted next = script.poll();
            return new Response.Builder().request(chain.request()).protocol(Protocol.HTTP_1_1).code(200)
                    .message("OK").body(ResponseBody.create(MediaType.parse("application/json"), next.body)).build();
        }).build(), om, null);
        ChatResult result = bare.run(ChatRequest.builder()
                .endpoint(new LlmEndpoint("http://x/v1", "k", "m"))
                .systemPrompt("s").userContent("u")
                .terminalTool(ToolSpec.builder("report").build())
                .build());
        assertThat(result.getRounds(), equalTo(1));
    }

    @Test
    public void aThrowingMetricsSinkDoesNotBreakTheExchange() throws Exception {
        respond(toolCalls(usage(10, 1, 0), call("c1", "report", "{}")));
        LlmUsageMetrics broken = new LlmUsageMetrics() {
            @Override
            public void recordRound(ToolConsumer consumer, TokenUsage usage) {
                throw new IllegalStateException("container is being destroyed");
            }

            @Override
            public void recordCall(ToolConsumer consumer, boolean success) {
                throw new IllegalStateException("container is being destroyed");
            }
        };
        ChatToolLoop fragile = new ChatToolLoop(new OkHttpClient.Builder().addInterceptor(chain -> {
            Scripted next = script.poll();
            return new Response.Builder().request(chain.request()).protocol(Protocol.HTTP_1_1).code(200)
                    .message("OK").body(ResponseBody.create(MediaType.parse("application/json"), next.body)).build();
        }).build(), om, broken);
        ChatResult result = fragile.run(ChatRequest.builder()
                .endpoint(new LlmEndpoint("http://x/v1", "k", "m"))
                .systemPrompt("s").userContent("u")
                .terminalTool(ToolSpec.builder("report").build())
                .build());
        assertThat(result.getUsage().getTotalTokens(), equalTo(11L));
    }
}
