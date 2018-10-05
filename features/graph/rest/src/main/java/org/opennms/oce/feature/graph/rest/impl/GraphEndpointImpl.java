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

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import javax.ws.rs.NotFoundException;

import org.opennms.oce.feature.graph.rest.api.GraphEndpoint;
import org.opennms.oce.feature.graph.rest.model.Graph;
import org.opennms.oce.feature.graph.rest.model.GraphSummary;
import org.opennms.oce.features.graph.common.GraphMLConverter;
import org.opennms.oce.features.graph.common.GraphProviderLocator;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.osgi.framework.BundleContext;

public class GraphEndpointImpl implements GraphEndpoint {

    private final GraphProviderLocator graphProviderLocator;

    public GraphEndpointImpl(BundleContext bundleContext) {
        this.graphProviderLocator = new GraphProviderLocator(bundleContext);
    }

    @Override
    public List<GraphSummary> getAvailableGraphs() {
        final List<GraphSummary> graphSummaries = new LinkedList<>();
        graphProviderLocator.withGraphProviders((name,graphProvider) -> {
            final AtomicInteger numVertices = new AtomicInteger();
            final AtomicInteger numEdges = new AtomicInteger();
            final AtomicInteger numSituations = new AtomicInteger();
            graphProvider.withReadOnlyGraph((g,s) -> {
                numVertices.set(g.getVertexCount());
                numEdges.set(g.getEdgeCount());
                numSituations.set(s.size());
            });
            graphSummaries.add(new GraphSummary(name, numVertices.get(), numEdges.get(), numSituations.get()));
        });
        return graphSummaries;
    }

    @Override
    public List<Graph> getGraph(String graphProviderName) throws NotFoundException {
        final GraphML graphML = graphProviderLocator.withGraphProvider(graphProviderName,
                graphProvider -> graphProvider.withReadOnlyGraph(GraphMLConverter::toGraphML));
        if (graphML == null) {
            throw new NotFoundException("No graph found with name: " + graphProviderName);
        }
        return graphML.getGraphs().stream()
                .map(Graph::new)
                .collect(Collectors.toList());
    }
}
