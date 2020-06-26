/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.alec.opennms.graph;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.features.graph.api.Edge;
import org.opennms.alec.features.graph.api.Vertex;
import org.opennms.integration.api.v1.graph.NodeRef;
import org.opennms.integration.api.v1.graph.Properties;
import org.opennms.integration.api.v1.graph.immutables.ImmutableEdge;
import org.opennms.integration.api.v1.graph.immutables.ImmutableGraph;
import org.opennms.integration.api.v1.graph.immutables.ImmutableNodeRef;
import org.opennms.integration.api.v1.graph.immutables.ImmutableVertex;

import com.google.common.collect.MultimapBuilder;
import com.google.common.collect.SetMultimap;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.util.Pair;

public class AlecToOpennmsGraphConverter {
    private final Graph<Vertex, Edge> graph;
    private final List<Situation> situations;

    private final ImmutableGraph.Builder graphBuilderAlec = ImmutableGraph.builder();
    private final ImmutableGraph.Builder graphBuilderInventory = ImmutableGraph.builder();
    private final Map<Vertex, ImmutableVertex> alecToOnmsVertexMap = new HashMap<>();
    private final Map<String, org.opennms.integration.api.v1.graph.Vertex> alarmIdToNode = new HashMap<>();
    private Vertex vertexWithMostAlarms = null;

    private final Map<ResourceKey, org.opennms.integration.api.v1.graph.Vertex> inventoryObjectsForAlarms = new HashMap<>();
    private final SetMultimap<org.opennms.integration.api.v1.graph.Vertex, org.opennms.integration.api.v1.graph.Vertex> garbageCollectedAlarmInventoryEdges = MultimapBuilder.hashKeys().hashSetValues().build();

    private Situation situationWithMostAlarms = null;

    AlecToOpennmsGraphConverter(Graph<Vertex, Edge> graph, List<Situation> situations) {
        this.graph = Objects.requireNonNull(graph);
        this.situations = Objects.requireNonNull(situations);
        graphBuilderAlec
                .graphInfo(Constants.GRAPH_INFO_ALEC);
        graphBuilderInventory
                .graphInfo(Constants.GRAPH_INFO_INVENTORY)
                .property(Properties.Enrichment.RESOLVE_NODES, true);
        processGraph();
    }

    public org.opennms.integration.api.v1.graph.Graph getAlecGraph() {
        return graphBuilderAlec.build();
    }

    public org.opennms.integration.api.v1.graph.Graph getInventoryGraph() {
        return graphBuilderInventory.build();
    }

    private void processGraph() {
        // Find all InventoryObjects for all Alarms to ensure they do not get filtered.
        for (Situation s : situations) {
            for (Alarm a : s.getAlarms()) {
                inventoryObjectsForAlarms.put(ResourceKey.key(a.getInventoryObjectType(), a.getInventoryObjectId()), null);
            }
        }

        for (Vertex v : graph.getVertices()) {
            handleVertex(v);
        }
        for (Edge e : graph.getEdges()) {
            handleEdge(e);
        }
        for (Situation situation : situations) {
            handleSituation(situation);
        }
        createEdgesForGcAlarms();
        setFocus();

    }

    private void setFocus() {
        if (situationWithMostAlarms != null) {
            graphBuilderAlec.defaultFocus(graphBuilderAlec.getVertex(getVertexIdFor(situationWithMostAlarms)));
        } else if (vertexWithMostAlarms != null) {
            graphBuilderAlec.defaultFocus(graphBuilderAlec.getVertex(vertexWithMostAlarms.getId()));
        } else if(!graphBuilderAlec.getVertices().isEmpty()) {
            graphBuilderAlec.defaultFocus(graphBuilderAlec.getVertices().get(0));
        }
        if(!graphBuilderInventory.getVertices().isEmpty()) {
            graphBuilderInventory.defaultFocus(graphBuilderInventory.getVertices().get(0));
        }
    }

    private String getIconForInventoryObject(InventoryObject io) {
        if (io == null || io.getType() == null) {
            return Constants.VALUE_ICON_SWITCH;
        }
        if ("snmp-interface".equalsIgnoreCase(io.getType())) {
            return Constants.VALUE_ICON_INTERFACE;
        }
        return Constants.VALUE_ICON_SWITCH;
    }

    private void handleVertex(Vertex v) {

        ImmutableVertex inventoryNode = createInventoryNode(v);
        this.graphBuilderInventory.addVertex(inventoryNode);
        alecToOnmsVertexMap.put(v, inventoryNode);

        // Prune InventoryObjects nodes that have no Alarms and which have only one neighbor
        if (graph.getIncidentEdges(v).size() < 2
                && notAttachedToAlarm(v)) {
            return;
        }

        org.opennms.integration.api.v1.graph.Vertex alecNode = ImmutableVertex
                .newBuilderFrom(inventoryNode)
                .namespace(Constants.NAMESPACE_ALEC)
                .build();
        // Add to map for later lookup when processing GC'd Alarms
        v.getInventoryObject().ifPresent(io -> inventoryObjectsForAlarms.put(new ResourceKey(io.getType(), io.getId()), alecNode));
        graphBuilderAlec.addVertex(alecNode);

        // connect alec graph with inventory graph
        graphBuilderAlec.addEdge(ImmutableEdge.builder()
                .source(alecNode)
                .target(inventoryNode)
                .id(Constants.NAMESPACE_ALEC + "-" + alecNode.getId() + "_" + Constants.NAMESPACE_INVENTORY + "-" + inventoryNode.getId())
                .namespace(Constants.NAMESPACE_ALEC)
                .build());
        graphBuilderInventory.addEdge(ImmutableEdge.builder()
                .source(inventoryNode)
                .target(alecNode)
                .id(Constants.NAMESPACE_INVENTORY + "-" + inventoryNode.getId() + "_" + Constants.NAMESPACE_ALEC + "-" + alecNode.getId())
                .namespace(Constants.NAMESPACE_INVENTORY)
                .build());

        if (v.getAlarms().size() > 0) {
            for (Alarm alarm : v.getAlarms()) {
                final org.opennms.integration.api.v1.graph.Vertex nodeForAlarm = getOrCreateAlarmNode(alarm, getVertexIdFor(v, alarm));
                createAlarmEdge(nodeForAlarm, alecNode);
            }

            // Track the vertex with the most alarms
            if (vertexWithMostAlarms == null) {
                vertexWithMostAlarms = v;
            } else if (v.getAlarms().size() > vertexWithMostAlarms.getAlarms().size()) {
                vertexWithMostAlarms = v;
            }
        }
    }

    private ImmutableVertex createInventoryNode(final Vertex vertex) {
        final ImmutableVertex.Builder nodeBuilder = ImmutableVertex.builder()
                .namespace(Constants.NAMESPACE_INVENTORY)
                .id(getVertexIdFor(vertex));
        vertex.getInventoryObject().ifPresent(io -> {
            if (io.getFriendlyName() != null) {
                nodeBuilder.property(Properties.Vertex.LABEL, io.getFriendlyName());
            }
            if("node".equals(io.getType())) {
                NodeRef ref = ImmutableNodeRef.newBuilder(io.getId()).build();
                nodeBuilder.property(Properties.Vertex.FOREIGN_SOURCE, ref.getForeignSource());
                nodeBuilder.property(Properties.Vertex.FOREIGN_ID, ref.getForeignId());
            }

            nodeBuilder.property(Properties.Vertex.ICON_ID, getIconForInventoryObject(io));

            final StringBuilder sb = new StringBuilder();
            sb.append("IO of type: ");
            sb.append(io.getType());
            sb.append(" with id: ");
            sb.append(io.getId());
            nodeBuilder.property(Properties.Vertex.LABEL, sb.toString());
            if (io.getParentType() != null) {
                sb.append(" with parent type: ");
                sb.append(io.getParentType());
                sb.append(" with parent id: ");
                sb.append(io.getParentId());
            }
            nodeBuilder.property(Properties.Vertex.TOOLTIP_TEXT, sb.toString());
        });
        return nodeBuilder.build();
    }

    private void handleEdge(Edge e) {
        org.opennms.integration.api.v1.graph.Edge inventoryEdge = createEdgeForInventory(e);

        ImmutableEdge.Builder edgeBuilder = ImmutableEdge
                .newBuilderFrom(inventoryEdge)
                .namespace(Constants.NAMESPACE_ALEC);
        Collection<Vertex> incidentVertices = graph.getIncidentVertices(e);
        if (incidentVertices.size() == 2) {
            Iterator<Vertex> it = incidentVertices.iterator();
            Vertex v1 = it.next();
            Vertex v2 = it.next();
            org.opennms.integration.api.v1.graph.Vertex node1 = graphBuilderAlec.getVertex(getVertexIdFor(v1));
            org.opennms.integration.api.v1.graph.Vertex node2 = graphBuilderAlec.getVertex((getVertexIdFor(v2)));
            // A node will be null if it was filtered. Don't add the edge.
            if (node1 == null || node2 == null) {
                return;
            }
            edgeBuilder.source(node1);
            edgeBuilder.target(node2);
        } else {
            throw new IllegalStateException(String.format("Edge with id: '%s' has %d vertices.", e.getId(), incidentVertices.size()));
        }
        graphBuilderAlec.addEdge(edgeBuilder.build());
    }

    public org.opennms.integration.api.v1.graph.Edge createEdgeForInventory(final Edge alecEdge) {
        Pair<Vertex> endpoints = graph.getEndpoints(alecEdge);
        Vertex src = endpoints.getFirst();
        Vertex dest = endpoints.getSecond();

        ImmutableEdge.Builder edgeBuilder = ImmutableEdge.builder()
                .namespace(Constants.NAMESPACE_INVENTORY)
                .id(alecEdge.getId());
        alecEdge.getInventoryObjectPeerRef().ifPresent(peerRef ->  edgeBuilder.property(Properties.Edge.LABEL, "peer reference"));
        alecEdge.getInventoryObjectRelativeRef().ifPresent(relativeRef ->  edgeBuilder.property(Properties.Edge.LABEL, "relative reference"));
        edgeBuilder.source(alecToOnmsVertexMap.get(src));
        edgeBuilder.target(alecToOnmsVertexMap.get(dest))
                .build();
        org.opennms.integration.api.v1.graph.Edge inventoryEdge = edgeBuilder.build();
        graphBuilderInventory.addEdge(inventoryEdge);
        return inventoryEdge;
    }

    private void handleSituation(Situation situation) {
        final ImmutableVertex.Builder nodeForSituation = ImmutableVertex.builder()
                .namespace(Constants.NAMESPACE_ALEC)
                .id(getVertexIdFor(situation))
                .property(Properties.Vertex.ICON_ID, Constants.VALUE_ICON_SITUATION)
                .property(Properties.Vertex.LABEL, "Situation with ID: " + situation.getId());

        final String tooltip = "Situation with ID: " +
                situation.getId() + " and severity: " +
                situation.getSeverity() + " and creation time: " +
                new Date(situation.getCreationTime());
        nodeForSituation.property(Properties.Vertex.TOOLTIP_TEXT, tooltip);
        graphBuilderAlec.addVertex(nodeForSituation.build());

        for (Alarm alarm : situation.getAlarms()) {
            org.opennms.integration.api.v1.graph.Vertex nodeForAlarm = alarmIdToNode.get(alarm.getId());
            if (nodeForAlarm == null) {
                // Alarm has been GC'd. Create a new graphMLNode
                nodeForAlarm = createNodeForGcAlarm(alarm);
                graphBuilderAlec.addVertex(nodeForAlarm);
            }
            createAlarmEdge(nodeForAlarm, nodeForSituation.build());
        }

        // Track the situation with the most alarms
        if (situationWithMostAlarms == null) {
            situationWithMostAlarms = situation;
        } else if (situation.getAlarms().size() > situationWithMostAlarms.getAlarms().size()) {
            situationWithMostAlarms = situation;
        }
    }

    public static String getVertexIdFor(Situation situation) {
        return "situation-" + situation.getId();
    }

    public static String getVertexIdFor(Vertex vertex, Alarm alarm) {
        return "alarm-" + vertex.getId() + "-" + alarm.getId();
    }

    public static String getAlarmVertexIdFor(String vertexId, String alarmId) {
        return "alarm-" + vertexId + "-" + alarmId;
    }

    public static String getVertexIdFor(Vertex vertex) {
        return "vertex-" + vertex.getId();
    }

    private void createAlarmEdge(org.opennms.integration.api.v1.graph.Vertex nodeForAlarm,
                                 final org.opennms.integration.api.v1.graph.Vertex node) {
        ImmutableEdge.Builder edge = ImmutableEdge.builder()
                .namespace(Constants.NAMESPACE_ALEC)
                .id(node.getId() + "-" + nodeForAlarm.getId())
                .source(node)
                .target(nodeForAlarm);
        graphBuilderAlec.addEdge(edge.build());
    }

    private org.opennms.integration.api.v1.graph.Vertex getOrCreateAlarmNode(Alarm alarm, String nodeId) {
        org.opennms.integration.api.v1.graph.Vertex nodeForAlarmVertex = alarmIdToNode.get(alarm.getId());
        if (nodeForAlarmVertex != null) {
            return nodeForAlarmVertex;
        }

        ImmutableVertex.Builder nodeForAlarmBuilder = ImmutableVertex.builder()
                .namespace(Constants.NAMESPACE_ALEC)
                .id(nodeId)
                .property(Properties.Vertex.ICON_ID, Constants.VALUE_ICON_REDUCTION_KEY)
                .property(Properties.Vertex.LABEL, alarm.getId());

        final String tooltip = "Alarm with key: " + alarm.getId()
                + " and severity: " + alarm.getSeverity()
                + " and time: " + new Date(alarm.getTime());
        nodeForAlarmBuilder.property(Properties.Vertex.TOOLTIP_TEXT, tooltip);
        org.opennms.integration.api.v1.graph.Vertex nodeForAlarm = nodeForAlarmBuilder.build();
        graphBuilderAlec.addVertex(nodeForAlarm);
        alarmIdToNode.put(alarm.getId(), nodeForAlarm);

        return nodeForAlarm;
    }

    private org.opennms.integration.api.v1.graph.Vertex createNodeForGcAlarm(Alarm alarm) {
        ImmutableVertex.Builder alarmNodeBuilder = ImmutableVertex.builder()
                .namespace(Constants.NAMESPACE_ALEC)
                .id(getAlarmVertexIdFor("0", alarm.getId()))
                .property(Properties.Vertex.ICON_ID, Constants.VALUE_ICON_REDUCTION_KEY)
                .property(Properties.Vertex.LABEL, alarm.getId());

        final String tooltip = "Alarm with key: " + alarm.getId() + " and severity: " + alarm.getSeverity() + " and time: " + new Date(alarm.getTime());
        alarmNodeBuilder.property(Properties.Vertex.TOOLTIP_TEXT, tooltip);
        org.opennms.integration.api.v1.graph.Vertex alarmNode = alarmNodeBuilder.build();
        alarmIdToNode.put(alarm.getId(), alarmNode);

        // Add Edge for Alarm <-> InventoryObject
        org.opennms.integration.api.v1.graph.Vertex inventoryObjectNode = inventoryObjectsForAlarms
            .get(new ResourceKey(alarm.getInventoryObjectType(), alarm.getInventoryObjectId()));
        if (inventoryObjectNode == null) {
            // could not find InventoryObject node.
            return alarmNode;
        }

        // Defer calculation of timeWeight until all nodes are scored
        garbageCollectedAlarmInventoryEdges.put(inventoryObjectNode, alarmNode);

        return alarmNode;
    }

    // Create the InventoryObject<->Alarm Edges for Alarms that have been GC'd
    private void createEdgesForGcAlarms() {
        for (org.opennms.integration.api.v1.graph.Vertex inventoryObjectNode : garbageCollectedAlarmInventoryEdges.keySet()) {
            for (org.opennms.integration.api.v1.graph.Vertex alarmNode : garbageCollectedAlarmInventoryEdges.asMap().get(inventoryObjectNode)) {
                createAlarmEdge(alarmNode, inventoryObjectNode);
            }
        }
    }

    private boolean notAttachedToAlarm(Vertex v) {
        return v.getAlarms().isEmpty() && !(v.getInventoryObject().isPresent() && inventoryObjectsForAlarms
            .containsKey(ResourceKey.key(v.getInventoryObject().get().getType(), v.getInventoryObject().get().getId())));
    }
}
