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

import org.opennms.alec.mcp.AlecTool;
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
public class GetNodeNeighborsTool extends AlecTool {

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
        final String fs = node.getForeignSource();
        final String fid = node.getForeignId();
        ObjectNode out = om.createObjectNode();
        out.put("nodeId", nodeId);
        out.put("label", node.getLabel());
        ArrayNode links = out.putArray("links");
        int total = 0;
        for (TopologyEdge edge : edgeDao.getEdges()) {
            // Cheap first: decide from the endpoints' own identity whether this
            // edge touches the node at all. Only matching edges pay for a node
            // lookup, and only to label the remote end.
            RawEndpoint[] ends = endpoints(edge);
            RawEndpoint local;
            RawEndpoint remote;
            if (ends[0] != null && ends[0].isNode(nodeId, fs, fid)) {
                local = ends[0];
                remote = ends[1];
            } else if (ends[1] != null && ends[1].isNode(nodeId, fs, fid)) {
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
            } else if (remote.segment != null) {
                l.put("remoteSegment", remote.segment);
            } else {
                Endpoint resolved = remote.resolve(nodeDao);
                if (resolved.nodeId != null) {
                    l.put("remoteNodeId", resolved.nodeId);
                }
                l.put("remoteLabel", resolved.label);
                if (resolved.port != null) {
                    l.put("remotePort", resolved.port);
                }
            }
        }
        out.put("linkCount", total);
        if (total > MAX_LINKS) {
            out.put("linksTruncated", true);
        }
        return out;
    }

    private RawEndpoint[] endpoints(TopologyEdge edge) {
        final RawEndpoint[] ends = new RawEndpoint[2];
        edge.visitEndpoints(new TopologyEdge.EndpointVisitor() {
            @Override
            public void visitSource(Node n) {
                ends[0] = RawEndpoint.ofNode(n);
            }

            @Override
            public void visitSource(TopologyPort p) {
                ends[0] = RawEndpoint.ofPort(p);
            }

            @Override
            public void visitSource(TopologySegment s) {
                ends[0] = RawEndpoint.ofSegment(s);
            }

            @Override
            public void visitTarget(Node n) {
                ends[1] = RawEndpoint.ofNode(n);
            }

            @Override
            public void visitTarget(TopologyPort p) {
                ends[1] = RawEndpoint.ofPort(p);
            }

            @Override
            public void visitTarget(TopologySegment s) {
                ends[1] = RawEndpoint.ofSegment(s);
            }
        });
        return ends;
    }

    /** An edge end as the topology model describes it — no DAO access needed to build one. */
    private static final class RawEndpoint {
        final Integer nodeId;
        final String foreignSource;
        final String foreignId;
        final String label;   // known only for Node endpoints
        final String port;
        final String segment;
        final String criteriaRef; // the port's node criteria as text, for an unresolvable node

        private RawEndpoint(Integer nodeId, String foreignSource, String foreignId, String label, String port,
                            String segment, String criteriaRef) {
            this.nodeId = nodeId;
            this.foreignSource = foreignSource;
            this.foreignId = foreignId;
            this.label = label;
            this.port = port;
            this.segment = segment;
            this.criteriaRef = criteriaRef;
        }

        static RawEndpoint ofNode(Node n) {
            return n == null ? null : new RawEndpoint(n.getId(), n.getForeignSource(), n.getForeignId(),
                    n.getLabel(), null, null, null);
        }

        static RawEndpoint ofPort(TopologyPort p) {
            if (p == null) {
                return null;
            }
            NodeCriteria c = p.getNodeCriteria();
            String port = p.getIfName() != null ? p.getIfName()
                    : (p.getIfIndex() != null ? "ifIndex " + p.getIfIndex() : p.getIfAddress());
            return new RawEndpoint(c == null ? null : c.getId(), c == null ? null : c.getForeignSource(),
                    c == null ? null : c.getForeignId(), null, port, null, c == null ? null : c.toRef());
        }

        static RawEndpoint ofSegment(TopologySegment s) {
            return s == null ? null : new RawEndpoint(null, null, null, null, null,
                    (s.getProtocol() == null ? "" : s.getProtocol().name() + " ") + "segment " + s.getSegmentCriteria(),
                    null);
        }

        boolean isNode(int id, String fs, String fid) {
            if (segment != null) {
                return false;
            }
            if (nodeId != null) {
                return nodeId == id;
            }
            return fs != null && fs.equals(foreignSource) && fid != null && fid.equals(foreignId);
        }

        /** Label the remote end, looking the node up only now that the edge is known to matter. */
        Endpoint resolve(NodeDao nodeDao) {
            if (label != null) {
                return new Endpoint(nodeId, label, port);
            }
            Node n = null;
            if (nodeId != null) {
                n = nodeDao.getNodeById(nodeId);
            } else if (foreignSource != null) {
                n = nodeDao.getNodeByForeignSourceAndForeignId(foreignSource, foreignId);
            }
            if (n != null) {
                return new Endpoint(n.getId(), n.getLabel(), port);
            }
            String ref = criteriaRef != null ? criteriaRef
                    : (nodeId != null ? "node " + nodeId : foreignSource + ":" + foreignId);
            return new Endpoint(nodeId, ref, port);
        }
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
