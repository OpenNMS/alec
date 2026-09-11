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

package org.opennms.alec.engine.llm;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEEdge;
import org.opennms.alec.engine.cluster.CEVertex;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.ToolConsumer;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.alec.mcp.llm.ChatRequest;
import org.opennms.alec.mcp.llm.TokenUsage;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.UndirectedSparseGraph;

/**
 * Unit tests for {@link LlmClusterEngine}. No network calls are made; coverage
 * focuses on the static/package-private methods that contain non-trivial logic.
 */
public class LlmClusterEngineTest {

    private static final String MODEL = "anthropic/claude-sonnet-4-6";
    private final ObjectMapper om = new ObjectMapper();
    private InMemoryKVStore kvStore;
    private LlmClusterEngine engine;

    @Before
    public void setUp() {
        kvStore = new InMemoryKVStore();
        engine = new LlmClusterEngine(new MetricRegistry(), kvStore, om, null);
    }

    // -------------------------------------------------------------------------
    // chatCompletionsUrl
    // -------------------------------------------------------------------------

    @Test
    public void chatCompletionsUrlAppendsPath() {
        assertThat(LlmClusterEngine.chatCompletionsUrl("https://api.example.com/v1"),
                equalTo("https://api.example.com/v1/chat/completions"));
    }

    @Test
    public void chatCompletionsUrlToleratesTrailingSlash() {
        assertThat(LlmClusterEngine.chatCompletionsUrl("https://api.example.com/v1/"),
                equalTo("https://api.example.com/v1/chat/completions"));
    }

    // -------------------------------------------------------------------------
    // buildRequestBody
    // -------------------------------------------------------------------------

    @Test
    public void buildRequestBodyForcesToolChoice() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("tool_choice").asText(), equalTo("required"));
    }

    @Test
    public void buildRequestBodyDeclaresGroupAlarmsTool() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        JsonNode toolName = root.path("tools").get(0).path("function").path("name");
        assertThat(toolName.asText(), equalTo(LlmClusterEngine.TOOL_NAME));
    }

    @Test
    public void buildRequestBodyIncludesAlarmIdInUserMessage() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("alarm-xyz", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        String userContent = root.path("messages").get(1).path("content").asText();
        assertThat(userContent, containsString("alarm-xyz"));
    }

    @Test
    public void buildRequestBodyIncludesModelName() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("model").asText(), equalTo(MODEL));
    }

    @Test
    public void buildRequestBodySetsMaxTokens() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("max_tokens").asInt(), equalTo(LlmClusterEngine.MAX_TOKENS));
    }

    // -------------------------------------------------------------------------
    // parseResponse
    // -------------------------------------------------------------------------

    @Test
    public void parseResponseExtractsSingleCluster() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);

        String json = groupAlarmsResponse("[\"alarm-1\",\"alarm-2\"]");
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    @Test
    public void parseResponseExtractsTwoClusters() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        AlarmInSpaceTime a3 = makeAlarm("alarm-3", 3L);
        AlarmInSpaceTime a4 = makeAlarm("alarm-4", 4L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2, a3, a4);

        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-2\\\"]},"
                + "{\\\"alarm_ids\\\":[\\\"alarm-3\\\",\\\"alarm-4\\\"]}]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        assertThat(clusters.size(), equalTo(2));
    }

    @Test
    public void parseResponseReturnsEmptyListForEmptyGroups() throws IOException {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);
        assertThat(clusters.size(), equalTo(0));
    }

    @Test
    public void parseResponseSkipsUnknownAlarmIds() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);

        // Response references alarm-99 which isn't in the map; the two known
        // alarms still form a valid (>= 2) cluster.
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-2\\\",\\\"alarm-99\\\"]}]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    @Test
    public void parseResponseDropsSingletonGroups() throws IOException {
        // A group that resolves to a single alarm (per the >=2 rule) is dropped,
        // so repeated/unknown IDs can't inflate a singleton into a situation.
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1);
        String json = groupAlarmsResponse("[\"alarm-1\"]");
        assertThat(LlmClusterEngine.parseResponse(json, alarmsById, om).size(), equalTo(0));
    }

    @Test
    public void parseResponseDedupsRepeatedIdWithinGroup() throws IOException {
        // A single distinct alarm repeated within one group must not pass the
        // 2-alarm minimum.
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1);
        String json = groupAlarmsResponse("[\"alarm-1\",\"alarm-1\"]");
        assertThat(LlmClusterEngine.parseResponse(json, alarmsById, om).size(), equalTo(0));
    }

    @Test
    public void parseResponseAssignsEachAlarmToAtMostOneCluster() throws IOException {
        // alarm-1 appears in both groups; it must land in only the first, and
        // the second group then drops below the 2-alarm minimum.
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        AlarmInSpaceTime a3 = makeAlarm("alarm-3", 3L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2, a3);
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-2\\\"]},"
                + "{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-3\\\"]}]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);
        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    @Test
    public void parseGroupsReturnsRawIdGroupsWithoutAlarmResolution() throws IOException {
        // The split hoists the HTTP-fed parse (parseGroups) off the graph lock;
        // it must yield the raw ID groups verbatim, independent of any alarm map.
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"a\\\",\\\"b\\\"]},"
                + "{\\\"alarm_ids\\\":[\\\"c\\\"]}]}\"}}]}}]}";
        List<List<String>> groups = LlmClusterEngine.parseGroups(json, om);
        assertThat(groups.size(), equalTo(2));
        assertThat(groups.get(0), equalTo(Arrays.asList("a", "b")));
        assertThat(groups.get(1), equalTo(Collections.singletonList("c")));
    }

    @Test
    public void resolveClustersMapsIdGroupsAgainstCurrentAlarms() {
        // resolveClusters runs under the graph lock against the live alarm map,
        // applying the >=2 rule; the singleton group from parseGroups is dropped.
        AlarmInSpaceTime a1 = makeAlarm("a", 1L);
        AlarmInSpaceTime a2 = makeAlarm("b", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);
        List<List<String>> idGroups = Arrays.asList(
                Arrays.asList("a", "b"), Collections.singletonList("c"));
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.resolveClusters(idGroups, alarmsById);
        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    @Test
    public void parseResponseThrowsOnMissingToolCalls() {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{\"choices\":[{\"message\":{\"content\":\"plain text\"}}]}";
        try {
            LlmClusterEngine.parseResponse(json, alarmsById, om);
            fail("Expected IOException for missing tool_calls");
        } catch (IOException e) {
            assertThat(e.getMessage(), containsString("tool_calls"));
        }
    }

    @Test
    public void parseResponseThrowsOnMissingChoices() {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{\"model\":\"x\"}";
        try {
            LlmClusterEngine.parseResponse(json, alarmsById, om);
            fail("Expected IOException for missing choices");
        } catch (IOException e) {
            assertThat(e.getMessage(), containsString("choices"));
        }
    }

    @Test
    public void parseResponseHandlesArgumentsAsJsonObject() throws IOException {
        // Some providers return arguments as a pre-parsed object rather than a string
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);

        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":{\"groups\":[{\"alarm_ids\":[\"alarm-1\",\"alarm-2\"]}]}}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);
        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    // -------------------------------------------------------------------------
    // LlmConfig (inner class) — constructed directly
    // -------------------------------------------------------------------------

    @Test
    public void llmConfigStoresFields() {
        LlmClusterEngine.LlmConfig cfg =
                new LlmClusterEngine.LlmConfig("key", "https://api.example.com", "model-x", 1000L, 5000L);
        assertThat(cfg.apiKey, equalTo("key"));
        assertThat(cfg.baseUrl, equalTo("https://api.example.com"));
        assertThat(cfg.model, equalTo("model-x"));
        assertThat(cfg.dailyTokenLimit, equalTo(1000L));
        assertThat(cfg.monthlyTokenLimit, equalTo(5000L));
    }

    // -------------------------------------------------------------------------
    // Default prompt fallback
    // -------------------------------------------------------------------------

    @Test
    public void nullPromptFallsBackToDefault() throws IOException {
        LlmClusterEngine engineWithNullPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, null);
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithNullPrompt.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        assertThat(sysContent, containsString("group_alarms"));
    }

    @Test
    public void blankPromptFallsBackToDefault() throws IOException {
        LlmClusterEngine engineWithBlankPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, "   ");
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithBlankPrompt.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        // Default prompt contains "group_alarms" tool name reference
        assertThat(sysContent, containsString("group_alarms"));
    }

    @Test
    public void customPromptIsUsed() throws IOException {
        LlmClusterEngine engineWithCustomPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, "MY_CUSTOM_PROMPT");
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithCustomPrompt.buildRequestBody(Collections.singletonList(ait), null, MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        assertThat(sysContent, equalTo("MY_CUSTOM_PROMPT"));
    }

    // -------------------------------------------------------------------------
    // Topology (fix: include connectivity)
    // -------------------------------------------------------------------------

    @Test
    public void buildRequestBodyIncludesTopologyConnectivity() throws IOException {
        CEVertex v1 = makeVertex("n1");
        CEVertex v2 = makeVertex("n2");
        AlarmInSpaceTime a1 = makeAlarmOn(v1, "alarm-1");
        AlarmInSpaceTime a2 = makeAlarmOn(v2, "alarm-2");
        Graph<CEVertex, CEEdge> g = new UndirectedSparseGraph<>();
        g.addVertex(v1);
        g.addVertex(v2);
        g.addEdge(mock(CEEdge.class), v1, v2);

        String body = engine.buildRequestBody(Arrays.asList(a1, a2), g, MODEL, om);
        String userContent = om.readTree(body).path("messages").get(1).path("content").asText();
        assertThat(userContent, containsString("n1 <-> n2"));
        assertThat(userContent, containsString("device: n1"));
    }

    // -------------------------------------------------------------------------
    // Shared token budget (fix: enforce + record)
    // -------------------------------------------------------------------------

    @Test
    public void budgetExceededTrueWhenDailyLimitReached() {
        long now = 1_700_000_000_000L;
        seedUsage(now, 900); // same UTC day as now
        assertThat(engine.budgetExceeded(now, 500L, 0L), equalTo(true));
    }

    @Test
    public void budgetExceededFalseUnderLimitAndWhenUnlimited() {
        long now = 1_700_000_000_000L;
        seedUsage(now, 300);
        assertThat(engine.budgetExceeded(now, 500L, 0L), equalTo(false));
        assertThat("0 limits mean unlimited", engine.budgetExceeded(now, 0L, 0L), equalTo(false));
    }

    @Test
    public void budgetCacheFoldsInOwnSpendWithinRescanInterval() throws IOException {
        long now = 1_700_000_000_000L;
        // First call does a full scan (no usage yet) — under the 1000 limit.
        assertThat(engine.budgetExceeded(now, 1000L, 0L), equalTo(false));
        // A 1000-token clustering call must fold into the cached total immediately.
        engine.recordUsage("{\"usage\":{\"prompt_tokens\":1000,\"completion_tokens\":0}}", MODEL, now);
        // Same tick time (within the rescan interval, no new scan): cached total
        // now 1000 >= limit, so the budget is enforced from the cache.
        assertThat(engine.budgetExceeded(now, 1000L, 0L), equalTo(true));
    }

    @Test
    public void recordUsageSplitsPromptAndCachedTokens() throws IOException {
        long now = 1_700_000_000_000L;
        String resp = "{\"usage\":{\"prompt_tokens\":1000,\"completion_tokens\":50,"
                + "\"prompt_tokens_details\":{\"cached_tokens\":200}}}";
        engine.recordUsage(resp, MODEL, now);

        Map<String, String> rows = kvStore.enumerateContext(LlmClusterEngine.USAGE_CONTEXT);
        assertThat(rows.size(), equalTo(1));
        JsonNode rec = om.readTree(rows.values().iterator().next());
        assertThat(rec.get("inputTokens").asLong(), equalTo(800L));   // 1000 - 200 cached
        assertThat(rec.get("outputTokens").asLong(), equalTo(50L));
        assertThat(rec.get("cacheReadInputTokens").asLong(), equalTo(200L));
        assertThat(rec.get("situationId").asText(), equalTo(LlmClusterEngine.CLUSTER_USAGE_MARKER));
    }

    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------

    private void seedUsage(long ts, long totalTokens) {
        kvStore.put(java.util.UUID.randomUUID().toString(),
                "{\"ts\":" + ts + ",\"inputTokens\":" + totalTokens + ",\"outputTokens\":0,"
                        + "\"cacheReadInputTokens\":0,\"cacheCreationInputTokens\":0}",
                LlmClusterEngine.USAGE_CONTEXT);
    }

    private static CEVertex makeVertex(String id) {
        CEVertex v = mock(CEVertex.class);
        when(v.getId()).thenReturn(id);
        return v;
    }

    private static AlarmInSpaceTime makeAlarmOn(CEVertex v, String id) {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn(id);
        when(a.getTime()).thenReturn(1_000L);
        when(a.getFirstTime()).thenReturn(1_000L);
        return new AlarmInSpaceTime(v, a);
    }

    private static AlarmInSpaceTime makeAlarm(String id, long nodeId) {
        CEVertex v = mock(CEVertex.class);
        when(v.getNumericId()).thenReturn(nodeId);
        when(v.getId()).thenReturn("node-" + nodeId);
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn(id);
        when(a.getTime()).thenReturn(1_000L);
        when(a.getFirstTime()).thenReturn(1_000L);
        return new AlarmInSpaceTime(v, a);
    }

    private static Map<String, AlarmInSpaceTime> alarmsMap(AlarmInSpaceTime... alarms) {
        Map<String, AlarmInSpaceTime> map = new HashMap<>();
        for (AlarmInSpaceTime a : alarms) {
            map.put(a.getAlarm().getId(), a);
        }
        return map;
    }

    /**
     * Build a minimal valid group_alarms response JSON with the arguments as a
     * JSON-encoded string (the OpenAI wire format).
     */
    private static String groupAlarmsResponse(String alarmIdsJsonArray) {
        String args = "{\\\"groups\\\":[{\\\"alarm_ids\\\":" + alarmIdsJsonArray.replace("\"", "\\\"") + "}]}";
        return "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"" + args + "\"}}]}}]}";
    }

    // -------------------------------------------------------------------------
    // ALEC-308: tool-enabled chat requests
    // -------------------------------------------------------------------------

    private static ToolRegistry registryWith(String... toolNames) {
        ToolRegistry registry = new DefaultToolRegistry(new McpMetrics(), new ObjectMapper());
        for (String name : toolNames) {
            registry.addTool(new McpTool() {
                private final ToolSpec spec = ToolSpec.builder(name).description("stub").build();

                @Override
                public ToolSpec getSpec() {
                    return spec;
                }

                @Override
                public JsonNode call(JsonNode arguments) {
                    return new ObjectMapper().createObjectNode();
                }
            });
        }
        return registry;
    }

    private static LlmClusterEngine.LlmConfig config(boolean toolsEnabled) {
        return new LlmClusterEngine.LlmConfig("key", "https://api.example.com/v1", MODEL, 0L, 0L, toolsEnabled);
    }

    @Test
    public void buildChatRequestWithoutToolsIsSingleRoundWithNoDataTools() {
        LlmClusterEngine withRegistry = new LlmClusterEngine(new MetricRegistry(), kvStore, om, null,
                registryWith("get_node"));
        ChatRequest r = withRegistry.buildChatRequest(Collections.singletonList(makeAlarm("alarm-1", 1L)), null,
                config(false));
        assertThat(r.getDataTools().isEmpty(), is(true));
        assertThat(r.getMaxRounds(), equalTo(1));
        assertThat(r.getSystemPrompt(), equalTo(LlmClusterEngine.DEFAULT_CLUSTER_PROMPT));
        assertThat(r.getSystemPrompt().endsWith(LlmClusterEngine.TOOLS_GUIDANCE), is(false));
        assertThat(r.getTerminalTool().getName(), equalTo(LlmClusterEngine.TOOL_NAME));
        assertThat(r.getConsumer(), equalTo(ToolConsumer.CLUSTERING));
        assertThat(r.getMaxTokens(), equalTo(LlmClusterEngine.MAX_TOKENS));
        assertThat(r.getEndpoint().getApiKey(), equalTo("key"));
        assertThat(r.getEndpoint().getBaseUrl(), equalTo("https://api.example.com/v1"));
        assertThat(r.getEndpoint().getModel(), equalTo(MODEL));
        assertThat(r.getUserContent(), containsString("alarm-1"));
        assertThat(r.getUserContent(), containsString("Topology"));
    }

    @Test
    public void buildChatRequestWithToolsOffersTheRegistryAndAllowsSeveralRounds() {
        ToolRegistry registry = registryWith("get_node");
        LlmClusterEngine withRegistry = new LlmClusterEngine(new MetricRegistry(), kvStore, om, "CUSTOM", registry);
        ChatRequest r = withRegistry.buildChatRequest(Collections.singletonList(makeAlarm("alarm-1", 1L)), null,
                config(true));
        assertThat(r.getDataTools().size(), equalTo(1));
        assertThat(r.getDataTools().get(0).getName(), equalTo("get_node"));
        assertThat(r.getMaxRounds(), equalTo(LlmClusterEngine.MAX_TOOL_ROUNDS));
        assertThat(r.getSystemPrompt(), equalTo("CUSTOM" + LlmClusterEngine.TOOLS_GUIDANCE));
        assertThat(r.getExecutor() != null, is(true));
        // the executor dispatches through the registry (and is metered there)
        r.getExecutor().call(ToolConsumer.CLUSTERING, "get_node", om.createObjectNode());
        assertThat(registry.getMetrics().getCalls(ToolConsumer.CLUSTERING), equalTo(1L));
    }

    @Test
    public void buildChatRequestWithToolsButNoRegistryOffersNothing() {
        ChatRequest r = engine.buildChatRequest(Collections.singletonList(makeAlarm("alarm-1", 1L)), null,
                config(true));
        assertThat(r.getDataTools().isEmpty(), is(true));
        assertThat(r.getMaxRounds(), equalTo(1));
        assertThat(r.getSystemPrompt().endsWith(LlmClusterEngine.TOOLS_GUIDANCE), is(false));

        LlmClusterEngine emptyRegistry = new LlmClusterEngine(new MetricRegistry(), kvStore, om, null, registryWith());
        ChatRequest r2 = emptyRegistry.buildChatRequest(Collections.singletonList(makeAlarm("alarm-1", 1L)), null,
                config(true));
        assertThat(r2.getDataTools().isEmpty(), is(true));
        assertThat(r2.getMaxRounds(), equalTo(1));
    }

    @Test
    public void parseGroupsFromArgumentsHandlesNumericIdsAndMissingGroups() throws IOException {
        JsonNode args = om.readTree("{\"groups\":[{\"alarm_ids\":[1,2,\"three\"]},{\"nope\":[]},{\"alarm_ids\":\"x\"}]}");
        List<List<String>> groups = LlmClusterEngine.parseGroups(args);
        assertThat(groups.size(), equalTo(1));
        assertThat(groups.get(0), equalTo(Arrays.asList("1", "2", "three")));
        assertThat(LlmClusterEngine.parseGroups(om.readTree("{}")).isEmpty(), is(true));
        assertThat(LlmClusterEngine.parseGroups((JsonNode) null).isEmpty(), is(true));
        assertThat(LlmClusterEngine.parseGroups(om.readTree("{\"groups\":{}}")).isEmpty(), is(true));
    }

    @Test
    public void recordUsageFromTokenUsageWritesAllBucketsAndToolCalls() throws IOException {
        long now = 1_700_000_000_000L;
        engine.recordUsage(new TokenUsage(800L, 50L, 200L, 10L), 3, MODEL, now);

        Map<String, String> rows = kvStore.enumerateContext(LlmClusterEngine.USAGE_CONTEXT);
        assertThat(rows.size(), equalTo(1));
        JsonNode rec = om.readTree(rows.values().iterator().next());
        assertThat(rec.get("ts").asLong(), equalTo(now));
        assertThat(rec.get("situationId").asText(), equalTo(LlmClusterEngine.CLUSTER_USAGE_MARKER));
        assertThat(rec.get("model").asText(), equalTo(MODEL));
        assertThat(rec.get("success").asBoolean(), is(true));
        assertThat(rec.get("inputTokens").asLong(), equalTo(800L));
        assertThat(rec.get("outputTokens").asLong(), equalTo(50L));
        assertThat(rec.get("cacheReadInputTokens").asLong(), equalTo(200L));
        assertThat(rec.get("cacheCreationInputTokens").asLong(), equalTo(10L));
        assertThat(rec.get("toolCalls").asInt(), equalTo(3));
        assertThat("USAGE_CONTEXT matches the RCA UsageStore context",
                LlmClusterEngine.USAGE_CONTEXT, equalTo("ALEC_LLM_USAGE"));
    }

    @Test
    public void recordUsageFromTokenUsageFoldsIntoTheBudgetCache() {
        long now = 1_700_000_000_000L;
        assertThat(engine.budgetExceeded(now, 1000L, 0L), equalTo(false));
        engine.recordUsage(new TokenUsage(500L, 300L, 150L, 50L), 0, MODEL, now);
        assertThat("all four buckets count toward the budget", engine.budgetExceeded(now, 1000L, 0L), equalTo(true));
    }

    @Test
    public void groupAlarmsSpecDeclaresNestedAlarmIdsSchema() {
        ToolSpec spec = LlmClusterEngine.groupAlarmsSpec();
        assertThat(spec.getName(), equalTo("group_alarms"));
        JsonNode schema = spec.parametersSchema(om);
        JsonNode groups = schema.path("properties").path("groups");
        assertThat(groups.path("type").asText(), equalTo("array"));
        JsonNode alarmIds = groups.path("items").path("properties").path("alarm_ids");
        assertThat(alarmIds.path("type").asText(), equalTo("array"));
        assertThat(alarmIds.path("items").path("type").asText(), equalTo("string"));
        assertThat(groups.path("items").path("required").get(0).asText(), equalTo("alarm_ids"));
        assertThat(schema.path("required").get(0).asText(), equalTo("groups"));
        assertThat(schema.path("additionalProperties").asBoolean(), is(false));
    }

    @Test
    public void llmConfigToolsEnabledDefaultsToFalseAndIsReadFromJson() {
        assertThat(new LlmClusterEngine.LlmConfig("k", "u", "m", 0L, 0L).toolsEnabled, is(false));
        assertThat(config(true).toolsEnabled, is(true));
    }

    @Test
    public void recordFailedCallWritesAFailureRowWithZeroTokens() throws Exception {
        long now = 1_700_000_000_000L;
        engine.recordFailedCall(MODEL, now);
        Map<String, String> rows = kvStore.enumerateContext(LlmClusterEngine.USAGE_CONTEXT);
        assertThat(rows.size(), equalTo(1));
        JsonNode rec = om.readTree(rows.values().iterator().next());
        assertThat(rec.get("success").asBoolean(), equalTo(false));
        assertThat(rec.get("situationId").asText(), equalTo(LlmClusterEngine.CLUSTER_USAGE_MARKER));
        assertThat(rec.get("model").asText(), equalTo(MODEL));
        assertThat(rec.get("ts").asLong(), equalTo(now));
        assertThat(rec.get("inputTokens").asLong() + rec.get("outputTokens").asLong(), equalTo(0L));
        assertThat(rec.get("toolCalls").asLong(), equalTo(0L));
    }

    @Test
    public void readTimeoutIsGenerousEnoughForLocalModels() {
        assertThat(LlmClusterEngine.READ_TIMEOUT_SECONDS >= 120, equalTo(true));
    }
}
