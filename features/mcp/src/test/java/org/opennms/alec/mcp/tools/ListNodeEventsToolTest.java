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

package org.opennms.alec.mcp.tools;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ListNodeEventsToolTest {

    private static final String PATH = "events?node.id=5&limit=25&orderBy=eventTime&order=desc";

    private final ObjectMapper om = new ObjectMapper();
    private FakeRestClient rest;
    private NodeDao nodeDao;
    private ListNodeEventsTool tool;
    private long now;

    @Before
    public void setUp() {
        rest = new FakeRestClient();
        nodeDao = mock(NodeDao.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("core-1");
        when(nodeDao.getNodeById(5)).thenReturn(node);
        tool = new ListNodeEventsTool(rest, nodeDao, om);
        now = System.currentTimeMillis();
    }

    private String body(long recentTime, long oldTime) {
        return "{\"totalCount\":7,\"event\":["
                + "{\"id\":101,\"time\":" + recentTime + ",\"uei\":\"uei.opennms.org/nodes/interfaceDown\","
                + "\"severity\":\"MINOR\",\"logMessage\":\"<p>Interface <b>Gi0/1</b> &lt;down&gt; on node.</p>\\n  extra\","
                + "\"serviceType\":{\"id\":1,\"name\":\"ICMP\"},\"ifIndex\":3},"
                + "{\"id\":100,\"time\":" + oldTime + ",\"uei\":\"uei.opennms.org/nodes/nodeUp\","
                + "\"severity\":\"NORMAL\",\"logMessage\":\"Node up\"}"
                + "]}";
    }

    @Test
    public void buildsThePathAndMapsEventFields() throws Exception {
        long recent = now - 60_000L;
        long old = now - 3 * 3_600_000L;
        rest.onGet(PATH, body(recent, old));

        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(rest.getPaths, equalTo(java.util.Collections.singletonList(PATH)));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.get("label").asText(), equalTo("core-1"));
        assertThat(out.get("returned").asInt(), equalTo(2));
        assertThat(out.get("totalOnNode").asInt(), equalTo(7));

        JsonNode e = out.get("events").get(0);
        assertThat(e.get("eventId").asLong(), equalTo(101L));
        assertThat(e.get("time").asText(), equalTo(java.time.Instant.ofEpochMilli(recent).toString()));
        assertThat(e.get("uei").asText(), equalTo("uei.opennms.org/nodes/interfaceDown"));
        assertThat(e.get("severity").asText(), equalTo("MINOR"));
        assertThat("HTML stripped, entities decoded, whitespace collapsed",
                e.get("logMessage").asText(), equalTo("Interface Gi0/1 <down> on node. extra"));
        assertThat(e.get("service").asText(), equalTo("ICMP"));
        assertThat(e.get("ifIndex").asInt(), equalTo(3));

        JsonNode second = out.get("events").get(1);
        assertThat(second.has("service"), is(false));
        assertThat(second.has("ifIndex"), is(false));
    }

    @Test
    public void sinceMinutesFiltersOlderEvents() throws Exception {
        rest.onGet(PATH, body(now - 60_000L, now - 3 * 3_600_000L));
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5").put("sinceMinutes", 60));
        assertThat(out.get("returned").asInt(), equalTo(1));
        assertThat(out.get("events").get(0).get("eventId").asLong(), equalTo(101L));
        assertThat("totalOnNode is the server's count, not the filtered one",
                out.get("totalOnNode").asInt(), equalTo(7));
    }

    @Test
    public void limitIsClampedIntoThePath() throws Exception {
        String capped = "events?node.id=5&limit=" + ListNodeEventsTool.MAX_LIMIT + "&orderBy=eventTime&order=desc";
        rest.onGet(capped, "{\"event\":[]}");
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5").put("limit", 1000));
        assertThat(rest.getPaths.get(0), equalTo(capped));
        assertThat(out.get("returned").asInt(), equalTo(0));
        assertThat("totalCount absent -> falls back to returned", out.get("totalOnNode").asInt(), equalTo(0));
    }

    @Test
    public void longLogMessagesAreTruncated() throws Exception {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < ListNodeEventsTool.MAX_LOG_MESSAGE + 50; i++) {
            sb.append('z');
        }
        rest.onGet(PATH, "{\"event\":[{\"id\":1,\"time\":" + now + ",\"logMessage\":\"" + sb + "\"}]}");
        JsonNode e = tool.call(om.createObjectNode().put("nodeId", "5")).get("events").get(0);
        assertThat(e.get("logMessage").asText().length(), equalTo(ListNodeEventsTool.MAX_LOG_MESSAGE + 3));
        assertThat(e.get("logMessage").asText().endsWith("..."), is(true));
    }

    @Test
    public void isAvailableFollowsTheRestClient() {
        rest.configured = false;
        assertThat(tool.isAvailable(), is(false));
        rest.configured = true;
        assertThat(tool.isAvailable(), is(true));
    }

    @Test
    public void restFailuresPropagateAsToolException() {
        rest.failure = new ToolException("OpenNMS rejected the configured login (HTTP 401)");
        try {
            tool.call(om.createObjectNode().put("nodeId", "5"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("401"));
        }
    }

    @Test
    public void stripTagsHandlesNullAndEntities() {
        assertThat(ListNodeEventsTool.stripTags(null), equalTo(""));
        assertThat(ListNodeEventsTool.stripTags("<b>a</b> &amp; b &quot;c&quot;"), equalTo("a & b \"c\""));
        assertThat(ListNodeEventsTool.stripTags("  multi \n\n line  "), equalTo("multi line"));
    }
}
