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

package org.opennms.oce.features.graph.common;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.features.graph.api.Edge;
import org.opennms.oce.features.graph.api.Vertex;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.opennms.oce.features.graph.graphml.GraphMLEdge;
import org.opennms.oce.features.graph.graphml.GraphMLGraph;
import org.opennms.oce.features.graph.graphml.GraphMLNode;

import com.google.common.collect.MultimapBuilder;
import com.google.common.collect.SetMultimap;

import edu.uci.ics.jung.graph.Graph;

public class GraphMLConverter {
    private final Graph<Vertex, Edge> g;
    private final List<Situation> situations;

    private final GraphML doc = new GraphML();
    private final GraphMLGraph graph = new GraphMLGraph();

    private final Map<String,GraphMLNode> alarmIdToGraphMLNode = new HashMap<>();
    private Vertex vertexWithMostAlarms = null;

    private final Map<ResourceKey, GraphMLNode> inventoryObjectsForAlarms = new HashMap<>();
    private final SetMultimap<GraphMLNode, GraphMLNode> garbageCollectedAlarmInventoryEdges = MultimapBuilder.hashKeys().hashSetValues().build(); 

    private final EdgeTimeNormalizer edgeTimeNormalizer;

    private Situation situationWithMostAlarms = null;
    private boolean includeAlarms = true;
    private boolean filterEmptyNodes = true;

    private static final String ONMS_GRAPHML_GRAPH_NAMESPACE = "namespace";
    private static final String ONMS_GRAPHML_LABEL = "label";
    private static final String ONMS_GRAPHML_TOOLTIP_TEXT = "tooltipText";
    private static final String ONMS_GRAPHML_ICON_KEY = "iconKey";
    private static final String ONMS_GRAPHML_FOCUS_IDS = "focus-ids";
    private static final String ONMS_GRAPHML_FOCUS_STRATEGY = "focus-strategy";

    private static final String ONMS_FOCUS_STRATEGY_SPECIFIC = "SPECIFIC";

    private static final String ONMS_ICON_SWITCH = "switch";
    private static final String ONMS_ICON_REDUCTION_KEY = "reduction_key";
    private static final String ONMS_ICON_INTERFACE = "interface";
    private static final String ONMS_ICON_SITUATION = "situation";

    private static final String EDGE_WEIGHT_KEY = "edgeWeight";
    private static final String CREATED_TIMESTAMP_KEY = "createdTimestamp";
    private static final String UPDATED_TIMESTAMP_KEY = "updatedTimestamp";

    private static final String GARBAGE_COLLECTED_KEY = "garbage_collected";
    private static final String EDGE_TYPE_KEY = "type";
    private static final String TYPE_INVENTORY = "inventory";
    private static final String TYPE_SITUATION = "situation";

    GraphMLConverter(Graph<Vertex, Edge> g, List<Situation> situations) {
        this.g = Objects.requireNonNull(g);
        this.situations = Objects.requireNonNull(situations);
        long now = new Date().getTime();
        edgeTimeNormalizer = new EdgeTimeNormalizer(now);
        graph.setProperty(ONMS_GRAPHML_GRAPH_NAMESPACE, "oce");
        graph.setProperty(CREATED_TIMESTAMP_KEY, now);
        doc.addGraph(graph);
    }

    public GraphML toGraphML() {
        processGraph();
        return doc;
    }

    private void processGraph() {
        // Find all InventoryObjects for all Alarms to ensure they do not get filtered.
        for (Situation s : situations) {
            for (Alarm a : s.getAlarms()) {
                inventoryObjectsForAlarms.put(ResourceKey.key(a.getInventoryObjectType(), a.getInventoryObjectId()), null);
            }
        }

        for (Vertex v : g.getVertices()) {
            handleVertex(v);
        }
        for (Edge e : g.getEdges()) {
            handleEdge(e);
        }
        if (includeAlarms) {
            for (Situation situation : situations) {
                handleSituation(situation);
            }
            createEdgesForGcAlarms();
        }

        if (situationWithMostAlarms != null) {
            graph.setProperty(ONMS_GRAPHML_FOCUS_STRATEGY, ONMS_FOCUS_STRATEGY_SPECIFIC);
            graph.setProperty(ONMS_GRAPHML_FOCUS_IDS, getVertexIdFor(situationWithMostAlarms));
        } else if (vertexWithMostAlarms != null) {
            graph.setProperty(ONMS_GRAPHML_FOCUS_STRATEGY, ONMS_FOCUS_STRATEGY_SPECIFIC);
            graph.setProperty(ONMS_GRAPHML_FOCUS_IDS, vertexWithMostAlarms.getId());
        }
    }

    private String getIconForInventoryObject(InventoryObject io) {
        if (io == null || io.getType() == null) {
            return ONMS_ICON_SWITCH;
        }
        // TODO: Move the icon mapping logic out to a configuration file
        if ("snmp-interface".equalsIgnoreCase(io.getType())) {
            return ONMS_ICON_INTERFACE;
        }
        return ONMS_ICON_SWITCH;
    }

    private void handleVertex(Vertex v) {
        // Prune InventoryObjects nodes that have no Alarms and which have only one neighbor
        if (filterEmptyNodes
                && g.getIncidentEdges(v).size() < 2
                && notAttachedToAlarm(v)) {
            return;
        }
        final GraphMLNode node = new GraphMLNode();
        node.setId(getVertexIdFor(v));
        node.setProperty(CREATED_TIMESTAMP_KEY, v.getCreatedTimestamp());
        node.setProperty(UPDATED_TIMESTAMP_KEY, v.getUpdatedTimestamp());
        v.getInventoryObject().ifPresent(io -> {
            if (io.getFriendlyName() != null) {
                node.setProperty(ONMS_GRAPHML_LABEL, io.getFriendlyName());
            }
            node.setProperty(ONMS_GRAPHML_ICON_KEY, getIconForInventoryObject(io));

            final StringBuilder sb = new StringBuilder();
            sb.append("IO of type: ");
            sb.append(io.getType());
            sb.append(" with id: ");
            sb.append(io.getId());
            if (io.getParentType() != null) {
                sb.append(" with parent type: ");
                sb.append(io.getParentType());
                sb.append(" with parent id: ");
                sb.append(io.getParentId());
            }
            node.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, sb.toString());
            // Add to map for later lookup when processing GC'd Alarms
            inventoryObjectsForAlarms.put(new ResourceKey(io.getType(), io.getId()), node);
        });
        graph.addNode(node);

        if (includeAlarms && v.getAlarms().size() > 0) {
            for (Alarm alarm : v.getAlarms()) {
                final GraphMLNode nodeForAlarm = getOrCreateAlarmNode(alarm, getVertexIdFor(v, alarm));
                createAlarmEdge(nodeForAlarm, node, edgeTimeNormalizer, TYPE_INVENTORY);
            }

            // Track the vertex with the most alarms
            if (vertexWithMostAlarms == null) {
                vertexWithMostAlarms = v;
            } else if (v.getAlarms().size() > vertexWithMostAlarms.getAlarms().size()) {
                vertexWithMostAlarms = v;
            }
        }
    }

    private void handleEdge(Edge e) {
        GraphMLEdge edge = new GraphMLEdge();
        edge.setId(e.getId());
        edge.setProperty(CREATED_TIMESTAMP_KEY, e.getCreatedTimestamp());
        edge.setProperty(EDGE_WEIGHT_KEY, e.getWeight());
        e.getInventoryObjectPeerRef().ifPresent(peerRef ->  edge.setProperty(ONMS_GRAPHML_LABEL, "peer reference"));
        e.getInventoryObjectRelativeRef().ifPresent(relativeRef ->  edge.setProperty(ONMS_GRAPHML_LABEL, "relative reference"));

        Collection<Vertex> incidentVertices = g.getIncidentVertices(e);
        if (incidentVertices.size() == 2) {
            Iterator<Vertex> it = incidentVertices.iterator();
            Vertex v1 = it.next();
            Vertex v2 = it.next();
            GraphMLNode node1 = graph.getNodeById(getVertexIdFor(v1));
            GraphMLNode node2 = graph.getNodeById((getVertexIdFor(v2)));
            // A node will be null if it was filtered. Don't add the edge.
            if (node1 == null || node2 == null) {
                return;
            }
            edge.setSource(node1);
            edge.setTarget(node2);
        } else {
            throw new IllegalStateException(String.format("Edge with id: '%s' has %d vertices.", e.getId(), incidentVertices.size()));
        }
        graph.addEdge(edge);
    }

    private void handleSituation(Situation situation) {
        final GraphMLNode nodeForSituation = new GraphMLNode();
        nodeForSituation.setId(getVertexIdFor(situation));
        nodeForSituation.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_SITUATION);
        nodeForSituation.setProperty(ONMS_GRAPHML_LABEL, "Situation with ID: " + situation.getId());
        nodeForSituation.setProperty(CREATED_TIMESTAMP_KEY, situation.getCreationTime());

        final String tooltip = "Situation with ID: " +
                situation.getId() + " and severity: " +
                situation.getSeverity() + " and creation time: " +
                new Date(situation.getCreationTime());
        nodeForSituation.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, tooltip);
        graph.addNode(nodeForSituation);

        // Situation <-> Alarm edges will be weighted relative to the Cration Time of the Situation.
        EdgeTimeNormalizer edgeTimeNormalizer = new EdgeTimeNormalizer(situation.getCreationTime());
        for (Alarm alarm : situation.getAlarms()) {
            GraphMLNode nodeForAlarm = alarmIdToGraphMLNode.get(alarm.getId());
            if (nodeForAlarm == null) {
                // Alarm has been GC'd. Create a new graphMLNode
                nodeForAlarm = createNodeForGcAlarm(alarm);
                graph.addNode(nodeForAlarm);
            }
            createAlarmEdge(nodeForAlarm, nodeForSituation, edgeTimeNormalizer, TYPE_SITUATION);
        }

        // Track the situation with the most alarms
        if (situationWithMostAlarms == null) {
            situationWithMostAlarms = situation;
        } else if (situation.getAlarms().size() > situationWithMostAlarms.getAlarms().size()) {
            situationWithMostAlarms = situation;
        }
    }

    public void setIncludeAlarms(boolean includeAlarms) {
        this.includeAlarms = includeAlarms;
    }

    public void setFilterEmptyNodes(boolean filterEmptyNodes) {
        this.filterEmptyNodes = filterEmptyNodes;
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

    private static long getCreatedTime(GraphMLNode alarmNode) {
        return (long) alarmNode.getProperty(CREATED_TIMESTAMP_KEY);
    }

    private void createAlarmEdge(GraphMLNode nodeForAlarm, final GraphMLNode node, EdgeTimeNormalizer edgeTimeNormalizer, String edgeType) {
        GraphMLEdge edge = new GraphMLEdge();
        edge.setId(node.getId() + "-" + nodeForAlarm.getId());
        edge.setSource(node);
        edge.setTarget(nodeForAlarm);
        edge.setProperty(EDGE_WEIGHT_KEY, edgeTimeNormalizer.getNormalizedValue(getCreatedTime(nodeForAlarm)));
        edge.setProperty(EDGE_TYPE_KEY, edgeType);
        if (nodeForAlarm.getProperty(GARBAGE_COLLECTED_KEY) != null) {
            edge.setProperty(GARBAGE_COLLECTED_KEY, nodeForAlarm.getProperty(GARBAGE_COLLECTED_KEY));
        }
        graph.addEdge(edge);
    }

    private GraphMLNode getOrCreateAlarmNode(Alarm alarm, String nodeId) {
        GraphMLNode nodeForAlarm = alarmIdToGraphMLNode.get(alarm.getId());
        if (nodeForAlarm != null) {
            return nodeForAlarm;
        }

        nodeForAlarm = new GraphMLNode();
        nodeForAlarm.setId(nodeId);
        nodeForAlarm.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_REDUCTION_KEY);
        nodeForAlarm.setProperty(ONMS_GRAPHML_LABEL, alarm.getId());
        nodeForAlarm.setProperty(CREATED_TIMESTAMP_KEY, alarm.getTime());

        final String tooltip = "Alarm with key: " + alarm.getId()
                + " and severity: " + alarm.getSeverity()
                + " and time: " + new Date(alarm.getTime());
        nodeForAlarm.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, tooltip);

        graph.addNode(nodeForAlarm);
        alarmIdToGraphMLNode.put(alarm.getId(), nodeForAlarm);

        return nodeForAlarm;
    }

    private GraphMLNode createNodeForGcAlarm(Alarm alarm) {
        GraphMLNode alarmNode = new GraphMLNode();
        alarmNode.setId(getAlarmVertexIdFor("0", alarm.getId()));
        alarmNode.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_REDUCTION_KEY);
        alarmNode.setProperty(ONMS_GRAPHML_LABEL, alarm.getId());
        alarmNode.setProperty(CREATED_TIMESTAMP_KEY, alarm.getTime());
        alarmNode.setProperty(GARBAGE_COLLECTED_KEY, "true");

        final String tooltip = "Alarm with key: " + alarm.getId() + " and severity: " + alarm.getSeverity() + " and time: " + new Date(alarm.getTime());
        alarmNode.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, tooltip);

        alarmIdToGraphMLNode.put(alarm.getId(), alarmNode);

        // Add Edge for Alarm <-> InventoryObject
        GraphMLNode inventoryObjectNode = inventoryObjectsForAlarms
            .get(new ResourceKey(alarm.getInventoryObjectType(), alarm.getInventoryObjectId()));
        if (inventoryObjectNode == null) {
            // could not find InventoryObject node.
            return alarmNode;
        }

        // Defer calculation of timeWeight until all nodes are scored
        garbageCollectedAlarmInventoryEdges.put(inventoryObjectNode, alarmNode);

        return alarmNode;
    }

    // Create the InvetoryObject<->Alarm Edges for Alarms that have been GC'd
    private void createEdgesForGcAlarms() {
        for (GraphMLNode inventoryObjectNode : garbageCollectedAlarmInventoryEdges.keySet()) {
            for (GraphMLNode alarmNode : garbageCollectedAlarmInventoryEdges.asMap().get(inventoryObjectNode)) {
                createAlarmEdge(alarmNode, inventoryObjectNode, edgeTimeNormalizer, TYPE_INVENTORY);
            }
        }
    }

    private boolean notAttachedToAlarm(Vertex v) {
        return v.getAlarms().isEmpty() && !(v.getInventoryObject().isPresent() && inventoryObjectsForAlarms
            .containsKey(ResourceKey.key(v.getInventoryObject().get().getType(), v.getInventoryObject().get().getId())));
    }
}
