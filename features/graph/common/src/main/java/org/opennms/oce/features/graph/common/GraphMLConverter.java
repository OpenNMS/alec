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
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.features.graph.api.Edge;
import org.opennms.oce.features.graph.api.OceGraph;
import org.opennms.oce.features.graph.api.Vertex;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.opennms.oce.features.graph.graphml.GraphMLEdge;
import org.opennms.oce.features.graph.graphml.GraphMLGraph;
import org.opennms.oce.features.graph.graphml.GraphMLNode;

import edu.uci.ics.jung.graph.Graph;

public class GraphMLConverter {
    private final Graph<Vertex, Edge> g;

    private final List<Situation> situations;


    private final GraphML doc = new GraphML();
    private final GraphMLGraph graph = new GraphMLGraph();

    private final Map<String,GraphMLNode> alarmIdToGraphMLNode = new HashMap<>();
    private Vertex vertexWithMostAlarms = null;

    private Situation situationWithMostAlarms = null;
    private boolean includeAlarms = true;

    private static final String ONMS_GRAPHML_GRAPH_NAMESPACE = "namespace";
    private static final String ONMS_GRAPHML_LABEL = "label";
    private static final String ONMS_GRAPHML_TOOLTIP_TEXT = "tooltipText";
    private static final String ONMS_GRAPHML_ICON_KEY = "iconKey";
    private static final String ONMS_GRAPHML_FOCUS_IDS = "focus-ids";
    private static final String ONMS_GRAPHML_FOCUS_STRATEGY = "focus-strategy";

    private static final String ONMS_FOCUS_STRATEGY_SPECIFIC = "SPECIFIC";

    private static final String ONMS_ICON_SWITCH = "switch";
    private static final String ONMS_ICON_REDUCTION_KEY = "reduction_key";
    private static final String ONMS_ICON_IP_SERVICE = "IP_service";

    private static final String EDGE_WEIGHT_KEY = "edgeWeight";
    private static final String CREATED_TIMESTAMP_KEY = "createdTimestamp";
    private static final String UPDATED_TIMESTAMP_KEY = "updatedTimestamp";

    private GraphMLConverter(Graph<Vertex, Edge> g, List<Situation> situations) {
        this.g = Objects.requireNonNull(g);
        this.situations = Objects.requireNonNull(situations);
        graph.setProperty(ONMS_GRAPHML_GRAPH_NAMESPACE, "oce");
        doc.addGraph(graph);
    }

    public static GraphML toGraphMLWithSituations(Graph<? extends Vertex, ? extends Edge> graph, List<Situation> situations) {
        return toGraphMLWithSituations(graph, situations, true);
    }

    public static GraphML toGraphMLWithSituations(Graph<? extends Vertex, ? extends Edge> graph, List<Situation> situations,
            boolean includeAlarms) {
        final GraphMLConverter converter = new GraphMLConverter((Graph<Vertex,Edge>)graph, situations);
        converter.setIncludeAlarms(includeAlarms);
        converter.processGraph();
        return converter.doc;
    }

    public static GraphML toGraphML(OceGraph oceGraph) {
        final GraphMLConverter converter = new GraphMLConverter((Graph<Vertex,Edge>)oceGraph.getGraph(), oceGraph.getSituations());
        converter.processGraph();
        return converter.doc;
    }

    private void processGraph() {
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
        }

        if (situationWithMostAlarms != null) {
            graph.setProperty(ONMS_GRAPHML_FOCUS_STRATEGY, ONMS_FOCUS_STRATEGY_SPECIFIC);
            graph.setProperty(ONMS_GRAPHML_FOCUS_IDS, getVertexIdFor(situationWithMostAlarms));
        } else if (vertexWithMostAlarms != null) {
            graph.setProperty(ONMS_GRAPHML_FOCUS_STRATEGY, ONMS_FOCUS_STRATEGY_SPECIFIC);
            graph.setProperty(ONMS_GRAPHML_FOCUS_IDS, vertexWithMostAlarms.getId());
        }
    }

    private void handleVertex(Vertex v) {
        final GraphMLNode node = new GraphMLNode();
        node.setId(getVertexIdFor(v));
        node.setProperty(CREATED_TIMESTAMP_KEY, v.getCreatedTimestamp());
        node.setProperty(UPDATED_TIMESTAMP_KEY, v.getUpdatedTimestamp());
        v.getInventoryObject().ifPresent(io -> {
            if (io.getFriendlyName() != null) {
                node.setProperty(ONMS_GRAPHML_LABEL, io.getFriendlyName());
            }
            node.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_SWITCH);

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
        });
        graph.addNode(node);

        if (includeAlarms && v.getAlarms().size() > 0) {
            for (Alarm alarm : v.getAlarms()) {
                final GraphMLNode nodeForAlarm = new GraphMLNode();
                nodeForAlarm.setId(getVertexIdFor(v, alarm));
                nodeForAlarm.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_REDUCTION_KEY);
                nodeForAlarm.setProperty(ONMS_GRAPHML_LABEL, alarm.getId());

                final String tooltip = "Alarm with key: " +
                        alarm.getId() +
                        " and severity: " +
                        alarm.getSeverity() +
                        " and time: " +
                        new Date(alarm.getTime());
                node.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, tooltip);
                graph.addNode(nodeForAlarm);
                alarmIdToGraphMLNode.put(alarm.getId(), nodeForAlarm);

                GraphMLEdge edge = new GraphMLEdge();
                edge.setId(node.getId() + "-" + nodeForAlarm.getId());
                edge.setSource(node);
                edge.setTarget(nodeForAlarm);
                graph.addEdge(edge);
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
        if (incidentVertices.size() == 1) {
            Vertex v = incidentVertices.iterator().next();
            GraphMLNode node = graph.getNodeById(getVertexIdFor(v));
            edge.setSource(node);
            edge.setTarget(node);
        } else if (incidentVertices.size() == 2) {
            Iterator<Vertex> it = incidentVertices.iterator();
            Vertex v1 = it.next();
            Vertex v2 = it.next();
            GraphMLNode node1 = graph.getNodeById(getVertexIdFor(v1));
            GraphMLNode node2 = graph.getNodeById((getVertexIdFor(v2)));
            edge.setSource(node1);
            edge.setTarget(node2);
        } else {
            throw new IllegalStateException(String.format("Edge with id: '%s' has %d situation vertices.", e.getId(),
                                                          incidentVertices.size()));
        }
        graph.addEdge(edge);
    }

    private void handleSituation(Situation situation) {
        final GraphMLNode nodeForSituation = new GraphMLNode();
        nodeForSituation.setId(getVertexIdFor(situation));
        nodeForSituation.setProperty(ONMS_GRAPHML_ICON_KEY, ONMS_ICON_IP_SERVICE);
        nodeForSituation.setProperty(ONMS_GRAPHML_LABEL, "Situation with ID: " + situation.getId());
        final String tooltip = "Situation with ID: " +
                situation.getId() +
                " and severity: " +
                situation.getSeverity() +
                " and creation time: " +
                new Date(situation.getCreationTime());
        nodeForSituation.setProperty(ONMS_GRAPHML_TOOLTIP_TEXT, tooltip);
        graph.addNode(nodeForSituation);

        for (Alarm alarm : situation.getAlarms()) {
            final GraphMLNode nodeForAlarm = alarmIdToGraphMLNode.get(alarm.getId());
            if (nodeForAlarm == null) {
                continue;
            }

            GraphMLEdge edge = new GraphMLEdge();
            edge.setId(nodeForSituation.getId() + "-" + nodeForAlarm.getId());
            edge.setSource(nodeForSituation);
            edge.setTarget(nodeForAlarm);
            graph.addEdge(edge);
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

    public static String getVertexIdFor(Situation situation) {
        return "situation-" + situation.getId();
    }

    public static String getVertexIdFor(Vertex vertex, Alarm alarm) {
        return "alarm-" + vertex.getId() + "-" + alarm.getId();
    }

    public static String getVertexIdFor(Vertex vertex) {
        return "vertex-" + vertex.getId();
    }

}
