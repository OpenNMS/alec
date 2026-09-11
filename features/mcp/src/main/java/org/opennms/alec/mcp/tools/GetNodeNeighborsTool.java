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

import java.util.Objects;

import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.EdgeDao;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.NodeCriteria;
import org.opennms.integration.api.v1.model.TopologyEdge;
import org.opennms.integration.api.v1.model.TopologyPort;
import org.opennms.integration.api.v1.model.TopologySegment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/** Directly connected devices from the discovered topology (LLDP, CDP, bridge, OSPF, IS-IS, user-defined). */
public class GetNodeNeighborsTool implements McpTool {

    public static final String NAME = "get_node_neighbors";
    static final int MAX_LINKS = 80;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("List the devices directly connected to a node according to OpenNMS's discovered "
                    + "topology (LLDP, CDP, bridge, OSPF, IS-IS, user-defined links), with the ports involved. "
                    + "Use it to tell upstream causes from downstream symptoms.")
            .string("nodeId", "Numeric node id, or foreignSource:foreignId.", false)
            .string("nodeLabel", "Exact node label, when the id is unknown.", false)
            .build();

    private final EdgeDao edgeDao;
    private final NodeDao nodeDao;
    private final NodeLookup lookup;
    private final ObjectMapper om;

    public GetNodeNeighborsTool(EdgeDao edgeDao, NodeDao nodeDao, ObjectMapper om) {
        this.edgeDao = Objects.requireNonNull(edgeDao);
        this.nodeDao = Objects.requireNonNull(nodeDao);
        this.lookup = new NodeLookup(nodeDao);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Node node = lookup.resolve(new Args(arguments));
        final int nodeId = node.getId();
        ObjectNode out = om.createObjectNode();
        out.put("nodeId", nodeId);
        out.put("label", node.getLabel());
        ArrayNode links = out.putArray("links");
        int total = 0;
        for (TopologyEdge edge : edgeDao.getEdges()) {
            Endpoint[] ends = endpoints(edge);
            Endpoint local;
            Endpoint remote;
            if (ends[0] != null && ends[0].nodeId != null && ends[0].nodeId == nodeId) {
                local = ends[0];
                remote = ends[1];
            } else if (ends[1] != null && ends[1].nodeId != null && ends[1].nodeId == nodeId) {
                local = ends[1];
                remote = ends[0];
            } else {
                continue;
            }
            total++;
            if (links.size() >= MAX_LINKS) {
                continue;
            }
            ObjectNode l = links.addObject();
            l.put("protocol", edge.getProtocol() == null ? null : edge.getProtocol().name());
            if (local.port != null) {
                l.put("localPort", local.port);
            }
            if (remote == null) {
                l.put("remote", "unknown");
            } else if (remote.nodeId != null) {
                l.put("remoteNodeId", remote.nodeId);
                l.put("remoteLabel", remote.label);
                if (remote.port != null) {
                    l.put("remotePort", remote.port);
                }
            } else {
                l.put("remoteSegment", remote.label);
            }
        }
        out.put("linkCount", total);
        if (total > MAX_LINKS) {
            out.put("linksTruncated", true);
        }
        return out;
    }

    private Endpoint[] endpoints(TopologyEdge edge) {
        final Endpoint[] ends = new Endpoint[2];
        edge.visitEndpoints(new TopologyEdge.EndpointVisitor() {
            @Override
            public void visitSource(Node n) {
                ends[0] = fromNode(n);
            }

            @Override
            public void visitSource(TopologyPort p) {
                ends[0] = fromPort(p);
            }

            @Override
            public void visitSource(TopologySegment s) {
                ends[0] = fromSegment(s);
            }

            @Override
            public void visitTarget(Node n) {
                ends[1] = fromNode(n);
            }

            @Override
            public void visitTarget(TopologyPort p) {
                ends[1] = fromPort(p);
            }

            @Override
            public void visitTarget(TopologySegment s) {
                ends[1] = fromSegment(s);
            }
        });
        return ends;
    }

    private Endpoint fromNode(Node n) {
        return n == null ? null : new Endpoint(n.getId(), n.getLabel(), null);
    }

    private Endpoint fromPort(TopologyPort p) {
        if (p == null) {
            return null;
        }
        Integer id = null;
        String label = null;
        NodeCriteria criteria = p.getNodeCriteria();
        if (criteria != null) {
            id = criteria.getId();
            Node n = null;
            if (id != null) {
                n = nodeDao.getNodeById(id);
            } else if (criteria.getForeignSource() != null) {
                n = nodeDao.getNodeByForeignSourceAndForeignId(criteria.getForeignSource(), criteria.getForeignId());
            }
            if (n != null) {
                id = n.getId();
                label = n.getLabel();
            } else {
                label = criteria.toRef();
            }
        }
        String port = p.getIfName() != null ? p.getIfName()
                : (p.getIfIndex() != null ? "ifIndex " + p.getIfIndex() : p.getIfAddress());
        return new Endpoint(id, label, port);
    }

    private Endpoint fromSegment(TopologySegment s) {
        return s == null ? null : new Endpoint(null,
                (s.getProtocol() == null ? "" : s.getProtocol().name() + " ") + "segment " + s.getSegmentCriteria(), null);
    }

    private static final class Endpoint {
        final Integer nodeId;
        final String label;
        final String port;

        Endpoint(Integer nodeId, String label, String port) {
            this.nodeId = nodeId;
            this.label = label;
            this.port = port;
        }
    }
}
