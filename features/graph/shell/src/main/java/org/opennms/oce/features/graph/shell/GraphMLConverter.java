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

package org.opennms.oce.features.graph.shell;

import java.util.Collection;
import java.util.Iterator;
import java.util.Objects;
import java.util.Date;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.features.graph.api.Edge;
import org.opennms.oce.features.graph.api.Vertex;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.opennms.oce.features.graph.graphml.GraphMLEdge;
import org.opennms.oce.features.graph.graphml.GraphMLGraph;
import org.opennms.oce.features.graph.graphml.GraphMLNode;

import edu.uci.ics.jung.graph.Graph;

public class GraphMLConverter {
    private final Graph<Vertex, Edge> g;
    final GraphML doc = new GraphML();
    final GraphMLGraph graph = new GraphMLGraph();

    private Vertex vertexWithMostAlarms = null;

    private static final String ONMS_GRAPHML_GRAPH_NAMESPACE = "namespace";
    private static final String ONMS_GRAPHML_LABEL = "label";
    private static final String ONMS_GRAPHML_TOOLTIP_TEXT = "tooltipText";
    private static final String ONMS_GRAPHML_ICON_KEY = "iconKey";
    private static final String ONMS_GRAPHML_FOCUS_IDS = "focus-ids";
    private static final String ONMS_GRAPHML_FOCUS_STRATEGY = "focus-strategy";

    private static final String ONMS_FOCUS_STRATEGY_SPECIFIC = "SPECIFIC";

    private static final String ONMS_ICON_SWITCH = "switch";
    private static final String ONMS_ICON_REDUCTION_KEY = "reduction_key";

    private GraphMLConverter(Graph<Vertex, Edge> g) {
        this.g = Objects.requireNonNull(g);
        graph.setProperty(ONMS_GRAPHML_GRAPH_NAMESPACE, "oce");
        doc.addGraph(graph);
    }

    public static GraphML toGraphML(Graph<? extends Vertex, ? extends Edge> g) {
        final GraphMLConverter converter = new GraphMLConverter((Graph<Vertex,Edge>)g);
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

        if (vertexWithMostAlarms != null) {
            graph.setProperty(ONMS_GRAPHML_FOCUS_STRATEGY, ONMS_FOCUS_STRATEGY_SPECIFIC);
            graph.setProperty(ONMS_GRAPHML_FOCUS_IDS, vertexWithMostAlarms.getId());
        }
    }

    private void handleVertex(Vertex v) {
        final GraphMLNode node = new GraphMLNode();
        node.setId(v.getId());
        v.getInventoryObject().ifPresent(io -> {
            node.setProperty(ONMS_GRAPHML_LABEL, io.getFriendlyName());
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

        if (v.getAlarms().size() > 0) {
            for (Alarm alarm : v.getAlarms()) {
                final GraphMLNode nodeForAlarm = new GraphMLNode();
                nodeForAlarm.setId(v.getId() + "-" + alarm.getId());
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
        e.getInventoryObjectPeerRef().ifPresent(peerRef ->  edge.setProperty(ONMS_GRAPHML_LABEL, "peer reference"));
        e.getInventoryObjectRelativeRef().ifPresent(relativeRef ->  edge.setProperty(ONMS_GRAPHML_LABEL, "relative reference"));

        Collection<Vertex> incidentVertices = g.getIncidentVertices(e);
        if (incidentVertices.size() == 1) {
            Vertex v = incidentVertices.iterator().next();
            GraphMLNode node = graph.getNodeById(v.getId());
            edge.setSource(node);
            edge.setTarget(node);
        } else if (incidentVertices.size() == 2) {
            Iterator<Vertex> it = incidentVertices.iterator();
            Vertex v1 = it.next();
            Vertex v2 = it.next();
            GraphMLNode node1 = graph.getNodeById(v1.getId());
            GraphMLNode node2 = graph.getNodeById(v2.getId());
            edge.setSource(node1);
            edge.setTarget(node2);
        } else {
            throw new IllegalStateException(String.format("Edge with id: '%s' has %d incident vertices.", e.getId(), incidentVertices.size()));
        }
        graph.addEdge(edge);
    }

}
