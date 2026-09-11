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

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.opennms.alec.mcp.ToolResult;
import org.opennms.alec.mcp.ToolSpec;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

/**
 * Drives an OpenAI-compatible {@code /chat/completions} exchange in which the
 * model may call ALEC's data tools any number of times before delivering its
 * answer through one <em>terminal</em> tool call.
 *
 * <p>Every round forces a tool call ({@code tool_choice: "required"}), so the
 * model can never answer in free text — the structural defense against prompt
 * injection that the single-shot callers already relied on. When the model
 * calls data tools, each call is executed and its result appended as a
 * {@code tool} message; the conversation then continues. On the final round
 * only the terminal tool is offered, so a model that keeps exploring is still
 * made to report.
 *
 * <p>With no data tools the loop degenerates to exactly the single forced
 * call ALEC made before tools existed — same body shape, same parsing.
 *
 * <p>The wire format is the de-facto standard implemented by OpenAI,
 * OpenRouter, Anthropic's compatibility endpoint, Azure OpenAI and local
 * servers (vLLM, Ollama, LM Studio).
 */
public class ChatToolLoop {

    private static final Logger LOG = LoggerFactory.getLogger(ChatToolLoop.class);

    public static final String CHAT_COMPLETIONS_PATH = "/chat/completions";
    private static final MediaType JSON_MEDIA_TYPE = MediaType.parse("application/json; charset=utf-8");

    // Used only by the static parsing helpers; configuration-free.
    private static final ObjectMapper PARSER = new ObjectMapper();

    private final OkHttpClient httpClient;
    private final ObjectMapper objectMapper;
    // Token-usage sink (JMX gauges); null when the deployment has none.
    private final LlmUsageMetrics usageMetrics;

    public ChatToolLoop(OkHttpClient httpClient, ObjectMapper objectMapper) {
        this(httpClient, objectMapper, null);
    }

    public ChatToolLoop(OkHttpClient httpClient, ObjectMapper objectMapper, LlmUsageMetrics usageMetrics) {
        this.httpClient = Objects.requireNonNull(httpClient);
        this.objectMapper = Objects.requireNonNull(objectMapper);
        this.usageMetrics = usageMetrics;
    }

    /**
     * Run the exchange, recording every round's token usage and the call's
     * outcome in the usage metrics (when present) — including the tokens
     * already spent by an exchange that then fails.
     */
    public ChatResult run(ChatRequest request) throws LlmCallException {
        try {
            ChatResult result = doRun(request);
            recordCall(request, true);
            return result;
        } catch (LlmCallException | RuntimeException e) {
            recordCall(request, false);
            throw e;
        }
    }

    // The sink is usually a blueprint service proxy; during a bundle shutdown it
    // throws ServiceUnavailableException. Metrics are best-effort — never let
    // them fail (or, worse, mask the outcome of) the exchange itself.
    private void recordCall(ChatRequest request, boolean success) {
        if (usageMetrics == null) {
            return;
        }
        try {
            usageMetrics.recordCall(request.getConsumer(), success);
        } catch (RuntimeException e) {
            LOG.debug("Usage metrics unavailable: {}", e.getMessage());
        }
    }

    private void recordRound(ChatRequest request, TokenUsage usage) {
        if (usageMetrics == null) {
            return;
        }
        try {
            usageMetrics.recordRound(request.getConsumer(), usage);
        } catch (RuntimeException e) {
            LOG.debug("Usage metrics unavailable: {}", e.getMessage());
        }
    }

    private ChatResult doRun(ChatRequest request) throws LlmCallException {
        final String url = chatCompletionsUrl(request.getEndpoint().getBaseUrl());
        final ArrayNode messages = objectMapper.createArrayNode();
        messages.addObject().put("role", "system").put("content", request.getSystemPrompt());
        messages.addObject().put("role", "user").put("content", request.getUserContent());

        TokenUsage usage = TokenUsage.empty();
        int toolCalls = 0;
        final int maxRounds = request.getMaxRounds();
        for (int round = 1; round <= maxRounds; round++) {
            final boolean lastRound = round == maxRounds;
            final List<ToolSpec> offered = new ArrayList<>();
            if (!lastRound) {
                offered.addAll(request.getDataTools());
            }
            offered.add(request.getTerminalTool());

            final String body;
            try {
                body = buildRequestBody(request.getEndpoint().getModel(), messages, offered,
                        request.getMaxTokens(), objectMapper);
            } catch (IOException e) {
                throw new LlmCallException(LlmCallException.Kind.BAD_REQUEST,
                        "Failed to build request body", e);
            }
            final JsonNode root = post(url, request.getEndpoint().getApiKey(), body);
            final TokenUsage roundUsage = readUsage(root);
            recordRound(request, roundUsage);
            usage = usage.plus(roundUsage);

            final JsonNode message;
            try {
                message = firstMessage(root);
            } catch (LlmCallExceptionUnchecked e) {
                throw new LlmCallException(LlmCallException.Kind.MALFORMED, e.getMessage());
            }
            final JsonNode calls = message.path("tool_calls");
            if (!calls.isArray() || calls.isEmpty()) {
                if ("length".equals(firstChoiceFinishReason(root))) {
                    throw new LlmCallException(LlmCallException.Kind.LENGTH,
                            "The model hit the output-token limit before making a tool call");
                }
                throw new LlmCallException(LlmCallException.Kind.NO_TOOL_CALL,
                        "The model did not make a tool call (expected " + request.getTerminalTool().getName() + ")");
            }

            final JsonNode terminalArgs = findArguments(calls, request.getTerminalTool().getName());
            if (terminalArgs != null) {
                LOG.debug("Tool loop finished after {} round(s), {} tool call(s), {}", round, toolCalls, usage);
                return new ChatResult(terminalArgs, usage, toolCalls, round);
            }
            if (lastRound) {
                // Only the terminal tool was offered and the model still called
                // something else — treat as "never reported".
                break;
            }

            // Echo the assistant turn (with its tool_calls) and then one tool
            // message per call, in order, as the wire format requires.
            messages.add(assistantTurn(message, calls));
            for (JsonNode call : calls) {
                String name = call.path("function").path("name").asText("");
                String id = call.path("id").asText("");
                if (id.isEmpty()) {
                    id = "call_" + (toolCalls + 1);
                }
                JsonNode args = parseArguments(call.path("function").path("arguments"));
                ToolResult result = request.getExecutor().call(request.getConsumer(), name, args);
                toolCalls++;
                LOG.debug("Tool loop round {}: {}({}) -> {}", round, name,
                        args == null ? "" : args.toString(), result.isError() ? "error" : "ok");
                ObjectNode toolMsg = messages.addObject();
                toolMsg.put("role", "tool");
                toolMsg.put("tool_call_id", id);
                toolMsg.put("content", result.getText());
            }
        }
        throw new LlmCallException(LlmCallException.Kind.ROUNDS_EXHAUSTED,
                "The model did not call " + request.getTerminalTool().getName() + " within "
                        + maxRounds + " round(s)");
    }

    private JsonNode post(String url, String apiKey, String body) throws LlmCallException {
        final Request request;
        try {
            request = new Request.Builder()
                    .url(url)
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    // Optional attribution header honoured by OpenRouter; ignored
                    // by providers that don't recognise it.
                    .header("X-Title", "OpenNMS ALEC")
                    .post(RequestBody.create(JSON_MEDIA_TYPE, body))
                    .build();
        } catch (IllegalArgumentException e) {
            // OkHttp's IAE for an illegal header value embeds the full value —
            // the API key — in its message. Do NOT attach it as a cause or echo
            // its message.
            throw new LlmCallException(LlmCallException.Kind.BAD_REQUEST,
                    "The API key contains characters that cannot be sent in an HTTP header "
                            + "— check for stray whitespace or line breaks and re-enter it.");
        }
        try (Response response = httpClient.newCall(request).execute()) {
            ResponseBody respBody = response.body();
            String text = respBody == null ? "" : respBody.string();
            if (!response.isSuccessful()) {
                throw new LlmCallException(LlmCallException.Kind.HTTP,
                        "HTTP " + response.code() + " from provider: " + providerError(text, objectMapper),
                        response.code(), null);
            }
            JsonNode root;
            try {
                root = objectMapper.readTree(text);
            } catch (IOException e) {
                throw new LlmCallException(LlmCallException.Kind.MALFORMED,
                        "The endpoint did not return JSON");
            }
            if (root == null || root.isNull() || root.isMissingNode()) {
                throw new LlmCallException(LlmCallException.Kind.MALFORMED, "Empty response from provider");
            }
            // Some providers return a 200 with an error envelope.
            JsonNode err = root.get("error");
            if (err != null && !err.isNull()) {
                throw new LlmCallException(LlmCallException.Kind.PROVIDER,
                        "Provider error: " + providerError(text, objectMapper));
            }
            return root;
        } catch (IOException e) {
            throw new LlmCallException(LlmCallException.Kind.NETWORK,
                    "Could not reach " + url + ": " + e.getMessage(), e);
        }
    }

    /**
     * Join the configured base URL with the chat-completions path, tolerating a
     * trailing slash. The base URL is validated first: it must parse as http(s)
     * and must not carry embedded credentials, a query string or a fragment.
     * Without this, a crafted "base URL" could reshape the request path/query
     * that the server's stored API key is sent to.
     */
    public static String chatCompletionsUrl(String baseUrl) throws LlmCallException {
        String trimmed = baseUrl == null ? "" : baseUrl.trim();
        while (trimmed.endsWith("/")) {
            trimmed = trimmed.substring(0, trimmed.length() - 1);
        }
        HttpUrl parsed = HttpUrl.parse(trimmed);
        if (parsed == null) {
            throw new LlmCallException(LlmCallException.Kind.BAD_REQUEST,
                    "Invalid endpoint URL: must be a valid http(s) URL");
        }
        if (!parsed.username().isEmpty() || !parsed.password().isEmpty()) {
            throw new LlmCallException(LlmCallException.Kind.BAD_REQUEST,
                    "Invalid endpoint URL: must not contain embedded credentials");
        }
        if (parsed.encodedQuery() != null || parsed.encodedFragment() != null) {
            throw new LlmCallException(LlmCallException.Kind.BAD_REQUEST,
                    "Invalid endpoint URL: must not contain a query string or fragment");
        }
        return trimmed + CHAT_COMPLETIONS_PATH;
    }

    /**
     * Build a chat-completions body. Declares every offered tool and forces a
     * tool call. We use the string form {@code "required"} because it is the
     * portable spelling: OpenAI, OpenRouter, vLLM, Ollama and LM Studio all
     * accept it, whereas the named-function object form is rejected by some
     * local servers.
     */
    public static String buildRequestBody(String model, ArrayNode messages, List<ToolSpec> tools,
                                          int maxTokens, ObjectMapper om) throws IOException {
        ObjectNode root = om.createObjectNode();
        root.put("model", model);
        root.put("max_tokens", maxTokens);
        root.set("messages", messages);
        ArrayNode toolsArr = root.putArray("tools");
        for (ToolSpec spec : tools) {
            toolsArr.add(spec.toOpenAiTool(om));
        }
        root.put("tool_choice", "required");
        return om.writeValueAsString(root);
    }

    /** Convenience for a fresh system+user exchange (what a single-shot caller sends). */
    public static String buildRequestBody(String model, String systemPrompt, String userContent,
                                          List<ToolSpec> tools, int maxTokens, ObjectMapper om)
            throws IOException {
        ArrayNode messages = om.createArrayNode();
        messages.addObject().put("role", "system").put("content", systemPrompt);
        messages.addObject().put("role", "user").put("content", userContent);
        return buildRequestBody(model, messages, tools, maxTokens, om);
    }

    /**
     * The parsed {@code arguments} of the first tool call named {@code toolName}
     * in a chat-completions response, or null when absent. Per the OpenAI spec
     * arguments arrive as a JSON-encoded string; an object is tolerated too.
     */
    public static JsonNode extractTerminalArguments(JsonNode root, String toolName) throws IOException {
        JsonNode calls;
        try {
            calls = firstMessage(root).path("tool_calls");
        } catch (LlmCallExceptionUnchecked e) {
            throw new IOException(e.getMessage());
        }
        if (!calls.isArray()) {
            return null;
        }
        return findArguments(calls, toolName);
    }

    /** The first choice's {@code finish_reason}, or "" when absent. */
    public static String firstChoiceFinishReason(JsonNode root) {
        if (root == null) {
            return "";
        }
        JsonNode choices = root.get("choices");
        if (choices == null || !choices.isArray() || choices.isEmpty()) {
            return "";
        }
        return choices.get(0).path("finish_reason").asText("");
    }

    /** Token usage of one response, with cached input split out of {@code prompt_tokens}. */
    public static TokenUsage readUsage(JsonNode root) {
        JsonNode u = root == null ? null : root.get("usage");
        if (u == null || u.isNull()) {
            return TokenUsage.empty();
        }
        // cached_tokens is a SUBSET of prompt_tokens, not an extra bucket —
        // store them disjointly so a rollup can sum without double-counting.
        long prompt = u.path("prompt_tokens").asLong(0L);
        long cachedInput = Math.min(prompt, u.path("prompt_tokens_details").path("cached_tokens").asLong(0L));
        return new TokenUsage(prompt - cachedInput, u.path("completion_tokens").asLong(0L), cachedInput, 0L);
    }

    private static JsonNode firstMessage(JsonNode root) {
        JsonNode choices = root == null ? null : root.get("choices");
        if (choices == null || !choices.isArray() || choices.isEmpty()) {
            throw new LlmCallExceptionUnchecked("Response missing choices array");
        }
        JsonNode message = choices.get(0).get("message");
        if (message == null || message.isNull()) {
            throw new LlmCallExceptionUnchecked("Response missing message in first choice");
        }
        return message;
    }

    private static JsonNode findArguments(JsonNode calls, String toolName) {
        for (JsonNode call : calls) {
            JsonNode fn = call.get("function");
            if (fn != null && toolName.equals(fn.path("name").asText(""))) {
                return parseArguments(fn.get("arguments"));
            }
        }
        return null;
    }

    private static JsonNode parseArguments(JsonNode argsNode) {
        if (argsNode == null || argsNode.isNull() || argsNode.isMissingNode()) {
            return PARSER.createObjectNode();
        }
        if (argsNode.isTextual()) {
            String text = argsNode.asText().trim();
            if (text.isEmpty()) {
                return PARSER.createObjectNode();
            }
            try {
                return PARSER.readTree(text);
            } catch (IOException e) {
                // Hand the raw text back so a data-tool error message can say
                // "arguments must be a JSON object" instead of silently ignoring.
                return argsNode;
            }
        }
        return argsNode;
    }

    private ObjectNode assistantTurn(JsonNode message, JsonNode calls) {
        ObjectNode turn = objectMapper.createObjectNode();
        turn.put("role", "assistant");
        JsonNode content = message.get("content");
        if (content == null || content.isNull() || content.asText("").isEmpty()) {
            turn.putNull("content");
        } else {
            turn.set("content", content);
        }
        ArrayNode echoed = turn.putArray("tool_calls");
        int i = 0;
        for (JsonNode call : calls) {
            i++;
            ObjectNode c = echoed.addObject();
            String id = call.path("id").asText("");
            c.put("id", id.isEmpty() ? "call_" + i : id);
            c.put("type", "function");
            ObjectNode fn = c.putObject("function");
            fn.put("name", call.path("function").path("name").asText(""));
            JsonNode args = call.path("function").path("arguments");
            // The echo must be a string per the wire format.
            fn.put("arguments", args.isTextual() ? args.asText() : args.toString());
        }
        return turn;
    }

    /**
     * Extract a provider's {@code error.message} if present. Deliberately does
     * NOT fall back to echoing the raw response body: the endpoint is
     * operator-influenced, so reflecting arbitrary response bytes back through
     * results would turn this into a read primitive against whatever the
     * server can reach.
     */
    static String providerError(String body, ObjectMapper om) {
        try {
            JsonNode root = om.readTree(body);
            JsonNode err = root == null ? null : root.get("error");
            if (err != null) {
                String msg = err.isTextual() ? err.asText() : err.path("message").asText("");
                if (!msg.isEmpty()) {
                    return msg.length() <= 300 ? msg : msg.substring(0, 300) + "...";
                }
            }
        } catch (IOException ignore) {
            // not JSON — deliberately not echoed
        }
        return body == null || body.isEmpty() ? "(empty response)"
                : "(endpoint returned no parseable error message)";
    }

    /** Internal: a malformed-response signal raised from static helpers, converted in {@link #run}. */
    private static final class LlmCallExceptionUnchecked extends RuntimeException {
        private static final long serialVersionUID = 1L;

        LlmCallExceptionUnchecked(String message) {
            super(message);
        }
    }
}
