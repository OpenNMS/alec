/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.cluster;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.function.BiPredicate;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Stopwatch;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.SparseMultigraph;

/**
 * An extension of {@link GraphManager} that maintains a separate copy of the graph that contains a subset of vertices.
 * The subset of vertices is dictated by the filter used, any vertices matching the filter will be dropped from the
 * filtered copy of the graph.
 */
public class FilterableGraphManager extends GraphManager {
    private static final Logger LOG = LoggerFactory.getLogger(FilterableGraphManager.class);
    private final BiPredicate<CEVertex, Graph<CEVertex, CEEdge>> dropVertexFilter;
    private final Graph<CEVertex, CEEdge> filteredGraph = new SparseMultigraph<>();

    private FilterableGraphManager(BiPredicate<CEVertex, Graph<CEVertex, CEEdge>> dropVertexFilter) {
        this.dropVertexFilter = dropVertexFilter;
    }

    public static FilterableGraphManager withFilter(BiPredicate<CEVertex, Graph<CEVertex, CEEdge>> dropVertexFilter) {
        return new FilterableGraphManager(Objects.requireNonNull(dropVertexFilter));
    }

    public Graph<CEVertex, CEEdge> getFilteredGraph() {
        return filteredGraph;
    }

    public List<CEVertex> getFilteredMatchingVertices(Predicate<CEVertex> vertexMustMatch) {
        return filteredGraph.getVertices()
                .stream()
                .filter(vertexMustMatch)
                .collect(Collectors.toList());
    }

    public void updateAndFilter() {
        Stopwatch timeToFilterStopwatch = Stopwatch.createStarted();
        clearFilteredGraph();

        // Copy the graph
        getGraph().getVertices().forEach(filteredGraph::addVertex);
        getGraph().getEdges().forEach(e -> {
            Collection<CEVertex> incidentVertices = getGraph().getIncidentVertices(e);
            if (filteredGraph.getVertices().containsAll(incidentVertices)) {
                filteredGraph.addEdge(e, incidentVertices);
            }
        });

        long copyGraphTime = timeToFilterStopwatch.elapsed(TimeUnit.MILLISECONDS);
        LOG.debug("Copied graph in {}ms", copyGraphTime);

        // Filter dead vertices off the graph (this will also remove dead edges)
        recursivelyFilter(getGraph());
        LOG.debug("Filtered graph from {} vertices to {} vertices in {}ms", getGraph().getVertexCount(),
                filteredGraph.getVertexCount(), timeToFilterStopwatch.elapsed(TimeUnit.MILLISECONDS) - copyGraphTime);
    }

    /**
     * Keep filtering until we find no more vertices to drop.
     */
    private void recursivelyFilter(Graph<CEVertex, CEEdge> graph) {
        Set<CEVertex> verticesToRemove = new HashSet<>();
        graph.getVertices().forEach(v -> {
            if (dropVertexFilter.test(v, graph)) {
                verticesToRemove.add(v);
            }
        });

        verticesToRemove.forEach(filteredGraph::removeVertex);

        if (!verticesToRemove.isEmpty()) {
            recursivelyFilter(filteredGraph);
        }
    }

    private void clearFilteredGraph() {
        Collection<CEVertex> verticesToRemove = new HashSet<>(filteredGraph.getVertices());
        verticesToRemove.forEach(filteredGraph::removeVertex);
    }
}
