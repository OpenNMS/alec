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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ListNodeResourcesToolTest {

    private static final String PATH = "resources/fornode/5";
    private static final String BODY = "{\"id\":\"node[5]\",\"children\":{\"resource\":["
            + "{\"id\":\"node[5].interfaceSnmp[eth0-00aabb]\",\"label\":\"eth0 (10.0.0.1)\",\"typeLabel\":\"SNMP Interface Data\","
            + "\"rrdGraphAttributes\":{\"ifInOctets\":{\"name\":\"ifInOctets\"},\"ifOutOctets\":{\"name\":\"ifOutOctets\"}}},"
            + "{\"id\":\"node[5].nodeSnmp[]\",\"label\":\"Node-level Performance Data\",\"typeLabel\":\"SNMP Node Data\","
            + "\"rrdGraphAttributes\":{\"loadavg1\":{}}},"
            + "{\"id\":\"node[5].responseTime[10.0.0.1]\",\"label\":\"10.0.0.1\",\"typeLabel\":\"Response Time\"}"
            + "]}}";

    private final ObjectMapper om = new ObjectMapper();
    private FakeRestClient rest;
    private ListNodeResourcesTool tool;

    @Before
    public void setUp() {
        rest = new FakeRestClient();
        NodeDao nodeDao = mock(NodeDao.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("core-1");
        when(nodeDao.getNodeById(5)).thenReturn(node);
        tool = new ListNodeResourcesTool(rest, nodeDao, om);
    }

    @Test
    public void mapsChildResourcesAndAttributeNames() throws Exception {
        rest.onGet(PATH, BODY);
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(rest.getPaths.get(0), equalTo(PATH));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.get("label").asText(), equalTo("core-1"));
        assertThat(out.get("resourceCount").asInt(), equalTo(3));
        assertThat(out.has("resourcesTruncated"), is(false));

        JsonNode r = out.get("resources");
        assertThat(r.size(), equalTo(3));
        assertThat(r.get(0).get("resourceId").asText(), equalTo("node[5].interfaceSnmp[eth0-00aabb]"));
        assertThat(r.get(0).get("label").asText(), equalTo("eth0 (10.0.0.1)"));
        assertThat(r.get(0).get("type").asText(), equalTo("SNMP Interface Data"));
        assertThat(r.get(0).get("attributes").size(), equalTo(2));
        assertThat(r.get(0).get("attributes").get(0).asText(), equalTo("ifInOctets"));
        assertThat(r.get(0).get("attributes").get(1).asText(), equalTo("ifOutOctets"));
        assertThat(r.get(1).get("attributes").get(0).asText(), equalTo("loadavg1"));
        assertThat("no rrdGraphAttributes -> empty attributes array", r.get(2).get("attributes").size(), equalTo(0));
    }

    @Test
    public void filterMatchesLabelOrTypeCaseInsensitively() throws Exception {
        rest.onGet(PATH, BODY);
        JsonNode byLabel = tool.call(om.createObjectNode().put("nodeId", "5").put("filter", "ETH0"));
        assertThat(byLabel.get("resourceCount").asInt(), equalTo(1));
        assertThat(byLabel.get("resources").get(0).get("label").asText(), equalTo("eth0 (10.0.0.1)"));

        JsonNode byType = tool.call(om.createObjectNode().put("nodeId", "5").put("filter", "snmp"));
        assertThat(byType.get("resourceCount").asInt(), equalTo(2));

        JsonNode none = tool.call(om.createObjectNode().put("nodeId", "5").put("filter", "zzz"));
        assertThat(none.get("resourceCount").asInt(), equalTo(0));
        assertThat(none.get("resources").size(), equalTo(0));
    }

    @Test
    public void missingChildrenGivesAnEmptyList() throws Exception {
        rest.onGet(PATH, "{\"id\":\"node[5]\"}");
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("resourceCount").asInt(), equalTo(0));
        assertThat(out.get("resources").size(), equalTo(0));
    }

    @Test
    public void resourcesAndAttributesAreCapped() throws Exception {
        StringBuilder sb = new StringBuilder("{\"children\":{\"resource\":[");
        for (int i = 0; i < ListNodeResourcesTool.MAX_RESOURCES + 2; i++) {
            if (i > 0) {
                sb.append(',');
            }
            sb.append("{\"id\":\"r").append(i).append("\",\"label\":\"l").append(i).append("\",\"rrdGraphAttributes\":{");
            for (int j = 0; j < ListNodeResourcesTool.MAX_ATTRIBUTES + 1; j++) {
                if (j > 0) {
                    sb.append(',');
                }
                sb.append("\"a").append(j).append("\":{}");
            }
            sb.append("}}");
        }
        sb.append("]}}");
        rest.onGet(PATH, sb.toString());
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("resources").size(), equalTo(ListNodeResourcesTool.MAX_RESOURCES));
        assertThat(out.get("resourceCount").asInt(), equalTo(ListNodeResourcesTool.MAX_RESOURCES + 2));
        assertThat(out.get("resourcesTruncated").asBoolean(), is(true));
        JsonNode first = out.get("resources").get(0);
        assertThat(first.get("attributes").size(), equalTo(ListNodeResourcesTool.MAX_ATTRIBUTES));
        assertThat(first.get("attributesTruncated").asInt(), equalTo(ListNodeResourcesTool.MAX_ATTRIBUTES + 1));
    }

    @Test
    public void isAvailableFollowsTheRestClient() {
        rest.configured = false;
        assertThat(tool.isAvailable(), is(false));
        rest.configured = true;
        assertThat(tool.isAvailable(), is(true));
    }
}
