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

package org.opennms.oce.feature.graph.rest.impl;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;

import org.graphdrawing.graphml.GraphmlType;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.feature.graph.rest.api.GraphEndpoint;
import org.opennms.oce.feature.graph.rest.model.AlarmSummary;
import org.opennms.oce.feature.graph.rest.model.GraphDTO;
import org.opennms.oce.feature.graph.rest.model.GraphSummary;
import org.opennms.oce.feature.graph.rest.model.InventoryObjectSummary;
import org.opennms.oce.feature.graph.rest.model.SituationSummary;
import org.opennms.oce.features.graph.api.Edge;
import org.opennms.oce.features.graph.api.Vertex;
import org.opennms.oce.features.graph.common.GraphMLConverter;
import org.opennms.oce.features.graph.common.GraphProviderLocator;
import org.opennms.oce.features.graph.common.OsgiGraphProviderLocator;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.opennms.oce.features.graph.graphml.GraphMLWriter;
import org.osgi.framework.BundleContext;

import edu.uci.ics.jung.algorithms.filters.KNeighborhoodFilter;
import edu.uci.ics.jung.graph.Graph;

public class GraphEndpointImpl implements GraphEndpoint {

    private final GraphProviderLocator graphProviderLocator;

    public GraphEndpointImpl(BundleContext bundleContext) {
        this(new OsgiGraphProviderLocator(bundleContext));
    }

    public GraphEndpointImpl(GraphProviderLocator graphProviderLocator) {
        this.graphProviderLocator = Objects.requireNonNull(graphProviderLocator);
    }

    @Override
    public List<GraphSummary> getAvailableGraphs() {
        final List<GraphSummary> graphSummaries = new LinkedList<>();
        graphProviderLocator.withGraphProviders((name,graphProvider) -> {
            final AtomicInteger numVertices = new AtomicInteger();
            final AtomicInteger numEdges = new AtomicInteger();
            final AtomicInteger numSituations = new AtomicInteger();
            graphProvider.withReadOnlyGraph((g -> {
                numVertices.set(g.getGraph().getVertexCount());
                numEdges.set(g.getGraph().getEdgeCount());
                numSituations.set(g.getSituations().size());
            }));
            graphSummaries.add(new GraphSummary(name, numVertices.get(), numEdges.get(), numSituations.get()));
        });
        return graphSummaries;
    }

    @Override
    public List<GraphDTO> getGraph(String name) throws NotFoundException {
        final GraphML graphML = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(GraphMLConverter::toGraphML));
        if (graphML == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return graphML.getGraphs().stream()
                .map(GraphDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public GraphmlType getGraphAsGraphML(String name) throws Exception {
        final GraphML graphML = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(GraphMLConverter::toGraphML));
        if (graphML == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return GraphMLWriter.convert(graphML);
    }

    @Override
    public List<SituationSummary> getSituationsOnGraph(String name) {
        final List<SituationSummary> situationSummaries = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(g -> {
                    return g.getSituations().stream().map(SituationSummary::new).collect(Collectors.toList());
        }));
        if (situationSummaries == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return situationSummaries;
    }

    @Override
    public List<AlarmSummary> getAlarmsOnGraph(String name) {
        final List<AlarmSummary> alarmSummaries = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(g -> {
                    return g.getGraph().getVertices().stream()
                            .flatMap(v -> v.getAlarms().stream()
                                    .map(a -> new AlarmSummary(v,a))
                                    .collect(Collectors.toList()).stream())
                            .collect(Collectors.toList());
                }));
        if (alarmSummaries == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return alarmSummaries;
    }

    @Override
    public List<InventoryObjectSummary> getInventoryObjectsWithTypeOnGraph(String name, String type) {
        if (type == null) {
            throw new BadRequestException("type cannot be null.");
        }
        final List<InventoryObjectSummary> iosSummaries = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(g -> {
                    return g.getGraph().getVertices().stream()
                            .filter(v -> v.getInventoryObject().isPresent())
                            .filter(v -> type.equalsIgnoreCase(v.getInventoryObject().get().getType()))
                            .map(v -> new InventoryObjectSummary(v, v.getInventoryObject().get()))
                            .collect(Collectors.toList());
                }));
        if (iosSummaries == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return iosSummaries;
    }

    @Override
    public Set<String> getInventoryObjectTypesOnGraph(String name) {
        final Set<String> ioTypes = graphProviderLocator.withGraphProvider(name,
                graphProvider -> graphProvider.withReadOnlyGraph(g -> {
                    return g.getGraph().getVertices().stream()
                            .filter(v -> v.getInventoryObject().isPresent())
                            .map(v -> v.getInventoryObject().get())
                            .map(InventoryObject::getType)
                            .collect(Collectors.toSet());
                }));
        if (ioTypes == null) {
            throw new NotFoundException("No graph found with name: " + name);
        }
        return ioTypes;
    }

    @Override
    public List<GraphDTO> getNeighborhoodOfVertex(String name, String vertexId, int hops) {
        if (vertexId == null) {
            throw new BadRequestException("Vertex ID cannot be null.");
        }
        if (hops < 0) {
            throw new BadRequestException("Hops must be non-negative.");
        }

        final String effectiveVertexId;
        if (vertexId.startsWith("vertex-")) {
            effectiveVertexId = vertexId.substring("vertex-".length());
        } else {
            effectiveVertexId = null;
        }

        final GraphML graphML = graphProviderLocator.withGraphProvider(name, graphProvider ->
                graphProvider.withReadOnlyGraph(g -> {
                    // Find the vertex
                    final Vertex v = g.getVertexById(effectiveVertexId);
                    if (v == null) {
                        return null;
                    }

                    // Filter the graph for the neighborhood of the vertex
                    final KNeighborhoodFilter<Vertex,Edge> filter = new KNeighborhoodFilter<>(Collections.singleton(v), hops, KNeighborhoodFilter.EdgeType.IN_OUT);
                    final Graph<Vertex,Edge> filteredGraph = filter.apply((Graph<Vertex,Edge>)g.getGraph());
                    // Ensure that the selected vertex is on the graph
                    filteredGraph.addVertex(v);

                    // Now filter for situations on the graph
            final List<Situation> situationsWithAlarmOnGraph;
                    if (hops >= 2) {
                        final Set<Alarm> alarmsOnFilteredGraph = filteredGraph.getVertices().stream()
                                .flatMap(vv -> vv.getAlarms().stream())
                                .collect(Collectors.toSet());
                        situationsWithAlarmOnGraph = g.getSituations().stream().filter(s -> !Collections.disjoint(s.getAlarms(), alarmsOnFilteredGraph))
                                .collect(Collectors.toList());
                    } else {
                        situationsWithAlarmOnGraph = Collections.emptyList();
                    }

                    final boolean includeAlarms = hops >= 1;

                    // Convert
                    return GraphMLConverter.toGraphMLWithSituations(filteredGraph, situationsWithAlarmOnGraph, includeAlarms);
        }));
        if (graphML == null) {
            throw new NotFoundException("No vertex found with ID: " + effectiveVertexId);
        }
        return graphML.getGraphs().stream()
                .map(GraphDTO::new)
                .collect(Collectors.toList());
    }

}
