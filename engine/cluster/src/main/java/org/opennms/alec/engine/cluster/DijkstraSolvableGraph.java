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

import java.util.AbstractMap;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Preconditions;
import com.google.common.base.Stopwatch;

import edu.uci.ics.jung.graph.Graph;

/**
 * Uses Dijkstra's single-source algorithm to solve the graph in parallel from N sources at once where N is the
 * configured number of threads to use.
 *
 * @param <V> the vertex type
 * @param <E> the edge type
 */
public class DijkstraSolvableGraph<V, E> implements SolvableGraph<V> {
    private static final Logger LOG = LoggerFactory.getLogger(FilterableGraphManager.class);
    private final Graph<V, E> graphToSolve;
    private final ForkJoinPool threadPool;

    /**
     * Stores the computed distances to other vertices in the graph for a given vertex.
     */
    private final Map<V, SourceData> sourceMap = new HashMap<>();

    /**
     * Function for deriving the weight of a given edge.
     */
    private final Function<E, Double> edgeWeightFunction;

    private DijkstraSolvableGraph(Graph<V, E> graphToSolve, Function<E, Double> edgeWeightFunction, int numThreads) {
        this.graphToSolve = graphToSolve;
        this.edgeWeightFunction = edgeWeightFunction;
        threadPool = new ForkJoinPool(numThreads);
    }

    public static <V, E> DijkstraSolvableGraph<V, E> newInstance(Graph<V, E> graphToSolve,
                                                                 Function<E, Double> edgeWeightFunction,
                                                                 int numThreads) {
        Objects.requireNonNull(graphToSolve);
        Objects.requireNonNull(edgeWeightFunction);
        Preconditions.checkArgument(numThreads > 0);
        return new DijkstraSolvableGraph<>(graphToSolve, edgeWeightFunction, numThreads);
    }

    @Override
    public void solve(Collection<V> sourceVertices, Collection<V> targetVertices) {
        try {
            Stopwatch graphSolvingStopwatch = Stopwatch.createStarted();
            threadPool.submit(() ->
                    sourceVertices.parallelStream().forEach(v -> {
                        getSourceData(v);
                        solveTask(v, targetVertices);
                    })).get();
            LOG.debug("Solved {} source vertices in {}ms", sourceVertices.size(),
                    graphSolvingStopwatch.elapsed(TimeUnit.MILLISECONDS));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    private void solveTask(V source, Collection<V> targets) {
        SourceData sd = getSourceData(source);

        Set<V> to_get = new HashSet<>();
        if (targets != null) {
            to_get.addAll(targets);
        }

        while (!sd.unknownVertices.isEmpty() && !to_get.isEmpty()) {
            Map.Entry<V, Number> p = sd.getNextVertex();
            V v = p.getKey();
            double v_dist = p.getValue().doubleValue();
            to_get.remove(v);

            for (E e : graphToSolve.getOutEdges(v)) {
                for (V w : graphToSolve.getIncidentVertices(e)) {
                    if (!sd.distances.containsKey(w)) {
                        double edge_weight = edgeWeightFunction.apply(e);
                        if (edge_weight < 0)
                            throw new IllegalArgumentException("Edges weights must be non-negative");
                        double new_dist = v_dist + edge_weight;
                        if (!sd.estimatedDistances.containsKey(w)) {
                            sd.createRecord(w, e, new_dist);
                        } else {
                            double w_dist = (Double) sd.estimatedDistances.get(w);
                            if (new_dist < w_dist) // update tentative distance & path for w
                                sd.update(w, e, new_dist);
                        }
                    }
                }
            }
        }
    }

    private synchronized SourceData getSourceData(V source) {
        SourceData sourceData = sourceMap.get(source);

        if (sourceData == null) {
            sourceData = new SourceData(source);
            sourceMap.put(source, sourceData);
        }

        return sourceData;
    }

    @Override
    public void invalidate() {
        sourceMap.clear();
    }

    @Override
    public Number getDistance(V source, V target) {
        if (!graphToSolve.containsVertex(source)) {
            throw new RuntimeException("Graph does not contain source vertex " + source);
        }
        if (!graphToSolve.containsVertex(target)) {
            throw new RuntimeException("Graph does not contain target vertex " + target);
        }

        // If we can't even find this vertex data then the graph has not been solved yet
        SourceData sd = sourceMap.get(source);
        if (sd == null) {
            throw new RuntimeException("Graph has not been solved yet");
        }

        return sd.distances.get(target);
    }

    protected static class VertexComparator<V> implements Comparator<V> {
        private Map<V, Number> distances;

        VertexComparator(Map<V, Number> distances) {
            this.distances = distances;
        }

        public int compare(V o1, V o2) {
            return ((Double) distances.get(o1)).compareTo((Double) distances.get(o2));
        }
    }

    protected class SourceData {
        LinkedHashMap<V, Number> distances;
        Map<V, Number> estimatedDistances;
        PriorityQueue<V> unknownVertices;

        SourceData(V source) {
            distances = new LinkedHashMap<>();
            estimatedDistances = new HashMap<>();
            unknownVertices = new PriorityQueue<>(new VertexComparator<>(estimatedDistances));

            sourceMap.put(source, this);

            // initialize priority queue
            estimatedDistances.put(source, (double) 0); // distance from source to itself is 0
            unknownVertices.add(source);
        }

        Map.Entry<V, Number> getNextVertex() {
            V v = unknownVertices.remove();
            Double dist = (Double) estimatedDistances.remove(v);
            distances.put(v, dist);
            return new AbstractMap.SimpleImmutableEntry<>(v, dist);
        }

        void update(V dest, E tentative_edge, double new_dist) {
            estimatedDistances.put(dest, new_dist);
            // Update the queue via remove->add
            unknownVertices.remove(dest);
            unknownVertices.add(dest);
        }

        void createRecord(V w, E e, double new_dist) {
            estimatedDistances.put(w, new_dist);
            unknownVertices.add(w);
        }
    }
}
