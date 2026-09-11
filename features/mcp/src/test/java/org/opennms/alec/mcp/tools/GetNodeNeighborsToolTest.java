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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;
import org.opennms.integration.api.v1.dao.EdgeDao;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.NodeCriteria;
import org.opennms.integration.api.v1.model.TopologyEdge;
import org.opennms.integration.api.v1.model.TopologyPort;
import org.opennms.integration.api.v1.model.TopologyProtocol;
import org.opennms.integration.api.v1.model.TopologySegment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GetNodeNeighborsToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private EdgeDao edgeDao;
    private NodeDao nodeDao;
    private GetNodeNeighborsTool tool;
    private Node local;
    private Node remote;

    @Before
    public void setUp() {
        edgeDao = mock(EdgeDao.class);
        nodeDao = mock(NodeDao.class);
        tool = new GetNodeNeighborsTool(edgeDao, nodeDao, om);
        local = node(5, "core-1");
        remote = node(9, "sw-2");
        when(nodeDao.getNodeById(5)).thenReturn(local);
        when(nodeDao.getNodeById(9)).thenReturn(remote);
    }

    private static Node node(int id, String label) {
        Node n = mock(Node.class);
        when(n.getId()).thenReturn(id);
        when(n.getLabel()).thenReturn(label);
        return n;
    }

    private static TopologyPort port(Integer nodeId, String fs, String fid, String ifName, Integer ifIndex) {
        TopologyPort p = mock(TopologyPort.class);
        NodeCriteria c = mock(NodeCriteria.class);
        when(c.getId()).thenReturn(nodeId);
        when(c.getForeignSource()).thenReturn(fs);
        when(c.getForeignId()).thenReturn(fid);
        when(c.toRef()).thenReturn(nodeId != null ? String.valueOf(nodeId) : fs + ":" + fid);
        when(p.getNodeCriteria()).thenReturn(c);
        when(p.getIfName()).thenReturn(ifName);
        when(p.getIfIndex()).thenReturn(ifIndex);
        return p;
    }

    /** An edge whose visitEndpoints hands the given source/target objects to the visitor. */
    private static TopologyEdge edge(TopologyProtocol protocol, Object source, Object target) {
        TopologyEdge e = mock(TopologyEdge.class);
        when(e.getProtocol()).thenReturn(protocol);
        doAnswer(inv -> {
            TopologyEdge.EndpointVisitor v = inv.getArgument(0);
            visit(v, source, true);
            visit(v, target, false);
            return null;
        }).when(e).visitEndpoints(any());
        return e;
    }

    private static void visit(TopologyEdge.EndpointVisitor v, Object end, boolean source) {
        if (end instanceof Node) {
            if (source) {
                v.visitSource((Node) end);
            } else {
                v.visitTarget((Node) end);
            }
        } else if (end instanceof TopologyPort) {
            if (source) {
                v.visitSource((TopologyPort) end);
            } else {
                v.visitTarget((TopologyPort) end);
            }
        } else if (end instanceof TopologySegment) {
            if (source) {
                v.visitSource((TopologySegment) end);
            } else {
                v.visitTarget((TopologySegment) end);
            }
        }
    }

    private void edges(TopologyEdge... edges) {
        Set<TopologyEdge> set = new LinkedHashSet<>(Arrays.asList(edges));
        when(edgeDao.getEdges()).thenReturn(set);
    }

    @Test
    public void portToNodeLinkIsRenderedWithLocalPortAndRemoteNode() throws Exception {
        edges(edge(TopologyProtocol.LLDP, port(5, null, null, "Gi0/1", 1), remote));
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.get("label").asText(), equalTo("core-1"));
        assertThat(out.get("linkCount").asInt(), equalTo(1));
        assertThat(out.has("linksTruncated"), is(false));
        JsonNode link = out.get("links").get(0);
        assertThat(link.get("protocol").asText(), equalTo("LLDP"));
        assertThat(link.get("localPort").asText(), equalTo("Gi0/1"));
        assertThat(link.get("remoteNodeId").asInt(), equalTo(9));
        assertThat(link.get("remoteLabel").asText(), equalTo("sw-2"));
        assertThat("a node endpoint has no port", link.has("remotePort"), is(false));
    }

    @Test
    public void linkIsFoundWhenTheNodeIsTheTargetEnd() throws Exception {
        edges(edge(TopologyProtocol.CDP, port(9, null, null, "Gi1/1", 11), port(5, null, null, null, 3)));
        JsonNode link = tool.call(om.createObjectNode().put("nodeId", "5")).get("links").get(0);
        assertThat(link.get("protocol").asText(), equalTo("CDP"));
        assertThat("ifName missing -> ifIndex", link.get("localPort").asText(), equalTo("ifIndex 3"));
        assertThat(link.get("remoteNodeId").asInt(), equalTo(9));
        assertThat(link.get("remoteLabel").asText(), equalTo("sw-2"));
        assertThat(link.get("remotePort").asText(), equalTo("Gi1/1"));
    }

    @Test
    public void edgesNotTouchingTheNodeAreSkipped() throws Exception {
        Node a = node(20, "a");
        Node b = node(21, "b");
        edges(edge(TopologyProtocol.OSPF, a, b), edge(TopologyProtocol.LLDP, local, remote));
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("linkCount").asInt(), equalTo(1));
        assertThat(out.get("links").get(0).get("remoteNodeId").asInt(), equalTo(9));
        assertThat(out.get("links").get(0).get("protocol").asText(), equalTo("LLDP"));
    }

    @Test
    public void segmentEndpointIsRenderedAsRemoteSegment() throws Exception {
        TopologySegment seg = mock(TopologySegment.class);
        when(seg.getProtocol()).thenReturn(TopologyProtocol.BRIDGE);
        when(seg.getSegmentCriteria()).thenReturn("bridge:1:vlan10");
        edges(edge(TopologyProtocol.BRIDGE, port(5, null, null, "Gi0/2", 2), seg));
        JsonNode link = tool.call(om.createObjectNode().put("nodeId", "5")).get("links").get(0);
        assertThat(link.get("remoteSegment").asText(), equalTo("BRIDGE segment bridge:1:vlan10"));
        assertThat(link.has("remoteNodeId"), is(false));
    }

    @Test
    public void portWithForeignSourceCriteriaIsResolvedThroughTheDao() throws Exception {
        when(nodeDao.getNodeByForeignSourceAndForeignId("Switches", "sw2")).thenReturn(remote);
        edges(edge(TopologyProtocol.LLDP, local, port(null, "Switches", "sw2", "Gi1/1", 11)));
        JsonNode link = tool.call(om.createObjectNode().put("nodeId", "5")).get("links").get(0);
        assertThat(link.get("remoteNodeId").asInt(), equalTo(9));
        assertThat(link.get("remoteLabel").asText(), equalTo("sw-2"));
        assertThat("a plain Node endpoint has no local port", link.has("localPort"), is(false));
    }

    @Test
    public void unresolvablePortKeepsTheCriteriaRef() throws Exception {
        edges(edge(TopologyProtocol.ISIS, local, port(77, null, null, "eth0", 1)));
        JsonNode link = tool.call(om.createObjectNode().put("nodeId", "5")).get("links").get(0);
        assertThat(link.get("remoteNodeId").asInt(), equalTo(77));
        assertThat(link.get("remoteLabel").asText(), equalTo("77"));
        assertThat(link.get("remotePort").asText(), equalTo("eth0"));
    }

    @Test
    public void missingRemoteEndpointIsUnknown() throws Exception {
        TopologyEdge e = mock(TopologyEdge.class);
        when(e.getProtocol()).thenReturn(TopologyProtocol.USERDEFINED);
        doAnswer(inv -> {
            TopologyEdge.EndpointVisitor v = inv.getArgument(0);
            v.visitSource(local);
            return null;
        }).when(e).visitEndpoints(any());
        edges(e);
        JsonNode link = tool.call(om.createObjectNode().put("nodeId", "5")).get("links").get(0);
        assertThat(link.get("remote").asText(), equalTo("unknown"));
    }

    @Test
    public void noEdgesGivesAnEmptyListNotAnError() throws Exception {
        edges();
        JsonNode out = tool.call(om.createObjectNode().put("nodeLabel", "core-1").put("nodeId", "5"));
        assertThat(out.get("linkCount").asInt(), equalTo(0));
        assertThat(out.get("links").size(), equalTo(0));
    }

    @Test
    public void linksAreCappedWithATruncationFlag() throws Exception {
        TopologyEdge[] many = new TopologyEdge[GetNodeNeighborsTool.MAX_LINKS + 3];
        for (int i = 0; i < many.length; i++) {
            many[i] = edge(TopologyProtocol.LLDP, local, node(100 + i, "n" + i));
        }
        edges(many);
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("links").size(), equalTo(GetNodeNeighborsTool.MAX_LINKS));
        assertThat(out.get("linkCount").asInt(), equalTo(GetNodeNeighborsTool.MAX_LINKS + 3));
        assertThat(out.get("linksTruncated").asBoolean(), is(true));
    }

    @Test
    public void unknownNodeIsAToolException() {
        try {
            tool.call(om.createObjectNode().put("nodeId", "404"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No node found"));
        }
    }
}
