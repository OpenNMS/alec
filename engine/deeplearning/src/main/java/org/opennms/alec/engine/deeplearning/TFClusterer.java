/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.deeplearning;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEEdge;
import org.opennms.alec.engine.cluster.CEVertex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.Sets;
import com.google.common.util.concurrent.ThreadFactoryBuilder;

import edu.uci.ics.jung.algorithms.cluster.WeakComponentClusterer;
import edu.uci.ics.jung.graph.Graph;

/**
 * Build clusters of alarms by using the binary classification function provided by the model.
 *
 * @author jwhite
 */
public class TFClusterer {
    private static final Logger LOG = LoggerFactory.getLogger(TFClusterer.class);

    private final TFModel tfModel;
    private final RemoteModel remoteModel;
    private final Vectorizer vectorizer;

    private final double epsilon;
    private final int numGraphThreads;
    private final int numTfThreads;

    private ExecutorService graphExecutor;
    private ExecutorService tfExecutor;

    private final WeakComponentClusterer<CEVertex, CEEdge> weakComponentClusterer = new WeakComponentClusterer<>();

    public TFClusterer(TFModel tfModel, Vectorizer vectorizer, DeepLearningEngineConf conf) {
        this.tfModel = Objects.requireNonNull(tfModel);
        this.vectorizer = Objects.requireNonNull(vectorizer);
        Objects.requireNonNull(conf);
        this.remoteModel = null;

        epsilon = conf.getEpsilon();
        numGraphThreads = conf.getNumGraphProcessingThreads();
        numTfThreads = conf.getNumTensorFlowProcessingThreads();
    }

    public TFClusterer(RemoteModel remoteModel, Vectorizer vectorizer, DeepLearningEngineConf conf) {
        this.remoteModel = Objects.requireNonNull(remoteModel);
        this.vectorizer = Objects.requireNonNull(vectorizer);
        Objects.requireNonNull(conf);
        this.tfModel = null;

        epsilon = conf.getEpsilon();
        numGraphThreads = conf.getNumGraphProcessingThreads();
        numTfThreads = conf.getNumTensorFlowProcessingThreads();
    }

    public void init() {
        graphExecutor = Executors.newFixedThreadPool(numGraphThreads, new ThreadFactoryBuilder()
                .setNameFormat("tf-clusterer-graph-%d")
                .build());
        tfExecutor = Executors.newFixedThreadPool(numTfThreads, new ThreadFactoryBuilder()
                .setNameFormat("tf-clusterer-tf-%d")
                .build());
    }

    public void destroy() {
        graphExecutor.shutdown();
        tfExecutor.shutdown();
    }

    /**
     * Cluster the alarms on the given graph:
     *
     * 1. Gather the vertices with alarms
     * 2. Split the graph into disconnected subgraphs and process these in parallel
     * 3. Skip graphs without any alarms
     * 4. For every vertex with alarms:
     * 4.a) Compare all of the alarms on that vertex
     * 4.b) Find and compare alarms on all other vertices within an epsilon radius
     *
     * We use two different thread pools to accomplish this.
     *
     * Threads in the graph processing pool are used to traverse the graph and
     * match candidate vertices. When alarms on these vertices need to be matched
     * a task is placed on a queue.
     *
     * Threads in the TensorFlow processing pool consume and process the "pairing"
     * tasks generated the by graph processing. When pairs are matched successfully,
     * the result is placed on a different queue.
     *
     * The main thread (caller) processes the matches to build clusters incrementally
     * as the results are available and will remain blocked until all of the tasks have
     * been completed.
     *
     * Further optimizations include:
     *  * Work to avoid processing alarms that are already in clusters
     *  * Cache previous results?
     *  * Find additional ways of limiting the number of comparisons
     *
     * @param g graph with alarms to cluster
     * @return clusters of alarms
     */
    public List<Cluster<AlarmInSpaceTime>> cluster(Graph<CEVertex, CEEdge> g) {
        // Gather the list of vertices with alarms
        final Set<CEVertex> verticesWithAlarms = new LinkedHashSet<>();
        feedVertices(g, verticesWithAlarms);

        // Split the graph into disconnected sub-graphs - this has complexity O(|V| + |E|)
        final Set<Set<CEVertex>> subgraphs = weakComponentClusterer.apply(g);

        final BlockingQueue<TFClustererTasks.Task> taskQueue = new LinkedBlockingQueue<>();
        final BlockingQueue<TFClustererTasks.RelatesTo> relationQueue = new LinkedBlockingQueue<>();

        final AtomicBoolean doneSubmittingTasks = new AtomicBoolean(false);

        // Spawn K TF processing threads
        List<CompletableFuture<Void>> tfProcessingFutures = new LinkedList<>();
        feedFutures(taskQueue, relationQueue, doneSubmittingTasks, tfProcessingFutures);

        List<CompletableFuture<Void>> subgraphProcessingFutures = new LinkedList<>();
        feedSubGraph(verticesWithAlarms, subgraphs, taskQueue, subgraphProcessingFutures);

        // Wait for the graph processing threads to complete
        CompletableFuture<Void> subgraphProcessed = CompletableFuture.allOf(subgraphProcessingFutures.toArray(new CompletableFuture[0]));
        subgraphProcessed.whenComplete((r,e) -> {
            LOG.trace("Done submitting TF tasks.");
            doneSubmittingTasks.set(true);
        });

        // Wait for the TF processing threads to complete
        CompletableFuture<Void> relationsProcessed = CompletableFuture.allOf(tfProcessingFutures.toArray(new CompletableFuture[0]));

        // Iteratively build the clusters as results are pushed
        int nextClusterIndex = 0;
        Map<String, Integer> alarmIdToClusterId = new LinkedHashMap<>();
        Map<Integer, List<AlarmInSpaceTime>> clustersById = new LinkedHashMap<>();

        processSubGraph(relationQueue, subgraphProcessed, relationsProcessed, nextClusterIndex, alarmIdToClusterId, clustersById);

        // Build clusters from the maps
        List<Cluster<AlarmInSpaceTime>> clusters = new LinkedList<>();
        for (List<AlarmInSpaceTime> clusterAsList : clustersById.values()) {
            Cluster<AlarmInSpaceTime> cluster = new Cluster<>();
            for (AlarmInSpaceTime point : clusterAsList) {
                cluster.addPoint(point);
            }
            clusters.add(cluster);
        }
        return clusters;
    }

    private static void processSubGraph(BlockingQueue<TFClustererTasks.RelatesTo> relationQueue, CompletableFuture<Void> subgraphProcessed, CompletableFuture<Void> relationsProcessed, int nextClusterIndex, Map<String, Integer> alarmIdToClusterId, Map<Integer, List<AlarmInSpaceTime>> clustersById) {
        while (!subgraphProcessed.isDone()
                || !relationsProcessed.isDone()
                || !relationQueue.isEmpty()) {
            try {
                final TFClustererTasks.RelatesTo relatesTo = relationQueue.poll(20, TimeUnit.MILLISECONDS);
                if (relatesTo == null) {
                    continue;
                }

                final AlarmInSpaceTime a1 = relatesTo.getA1();
                final AlarmInSpaceTime a2 = relatesTo.getA2();

                // a1 and a2 are related, so they should be in the same cluster

                // is either a1 or a2 already in a cluster?
                Integer a1c = alarmIdToClusterId.get(a1.getAlarmId());
                Integer a2c = alarmIdToClusterId.get(a2.getAlarmId());
                nextClusterIndex = getNextClusterIndex(nextClusterIndex, alarmIdToClusterId, clustersById, a1, a2, a1c, a2c);
            } catch (InterruptedException e) {
                LOG.info("Interrupted while waiting for results. Aborting cluster operation.");
                Thread.currentThread().interrupt();
            }
        }
    }

    private static int getNextClusterIndex(int nextClusterIndex, Map<String, Integer> alarmIdToClusterId, Map<Integer, List<AlarmInSpaceTime>> clustersById, AlarmInSpaceTime a1, AlarmInSpaceTime a2, Integer a1c, Integer a2c) {
        if (a1c == null && a2c == null) {
            // no existing cluster, create a new one
            int clusterIndex = ++nextClusterIndex;
            alarmIdToClusterId.put(a1.getAlarmId(), clusterIndex);
            alarmIdToClusterId.put(a2.getAlarmId(), clusterIndex);
            clustersById.put(clusterIndex, new LinkedList<>(Arrays.asList(a1, a2)));
        } else if (a1c != null && a2c == null) {
            // a1 is already in a cluster, but a2 is not, add a2 to the same cluster
            int clusterIndex = a1c;
            alarmIdToClusterId.put(a2.getAlarmId(), clusterIndex);
            clustersById.get(clusterIndex).add(a2);
        } else if (a1c == null) {
            // a2 is already in a cluster, but a1 is not, add a1 to the same cluster
            int clusterIndex = a2c;
            alarmIdToClusterId.put(a1.getAlarmId(), clusterIndex);
            clustersById.get(clusterIndex).add(a1);
        } else if (!a1c.equals(a2c)) {
            // they are both already in clusters, but not the same cluster
            // merge the clusters
            int clusterIndexToMergeTo = a1c;
            int clusterIndexToMergeFrom = a2c;

            List<AlarmInSpaceTime> clusterToMergeTo = clustersById.get(clusterIndexToMergeTo);
            for (AlarmInSpaceTime alarm : clustersById.remove(clusterIndexToMergeFrom)) {
                clusterToMergeTo.add(alarm);
                alarmIdToClusterId.put(alarm.getAlarmId(), clusterIndexToMergeTo);
            }
        }
        return nextClusterIndex;
    }

    private void feedSubGraph(Set<CEVertex> verticesWithAlarms, Set<Set<CEVertex>> subgraphs, BlockingQueue<TFClustererTasks.Task> taskQueue, List<CompletableFuture<Void>> subgraphProcessingFutures) {
        for (Set<CEVertex> subgraph : subgraphs) {
            // Only consider the subgraphs that contain some vertex with an alarm
            final Set<CEVertex> verticesInSubgraphWithAlarmsAsSet = Sets.intersection(subgraph, verticesWithAlarms);
            if (verticesInSubgraphWithAlarmsAsSet.isEmpty()) {
                // Ignore this subgraph
                continue;
            }

            subgraphProcessingFutures.add(CompletableFuture.supplyAsync(() -> {
                processSubGraph(verticesInSubgraphWithAlarmsAsSet, taskQueue);
                return null;
            }, graphExecutor));
        }
    }

    private void feedFutures(BlockingQueue<TFClustererTasks.Task> taskQueue, BlockingQueue<TFClustererTasks.RelatesTo> relationQueue, AtomicBoolean doneSubmittingTasks, List<CompletableFuture<Void>> tfProcessingFutures) {
        for (int k = 0; k < numTfThreads; k++) {
            tfProcessingFutures.add(CompletableFuture.supplyAsync(() -> {
                processTfTasks(taskQueue, relationQueue, doneSubmittingTasks);
                // The task processer will return when we're done submitting tasks
                // and the queue is empty
                return null;
            }));
        }
    }

    private static void feedVertices(Graph<CEVertex, CEEdge> g, Set<CEVertex> verticesWithAlarms) {
        for (CEVertex v : g.getVertices()) {
            if (v.hasAlarms()) {
                verticesWithAlarms.add(v);
            }
        }
    }

    private void processSubGraph(Set<CEVertex> verticesInSubgraphWithAlarmsAsSet, BlockingQueue<TFClustererTasks.Task> taskQueue) {
        LOG.trace("Graph Processing thread started.");
        // Compute the distance between all of the vertices with alarms in this subgraph
        final List<CEVertex> verticesInSubgraphWithAlarms = new ArrayList<>(verticesInSubgraphWithAlarmsAsSet);
        for (int i = 0; i < verticesInSubgraphWithAlarms.size(); i++) {
            final CEVertex v1 = verticesInSubgraphWithAlarms.get(i);
            if (v1.getNumAlarms() > 1) {
                taskQueue.add(new TFClustererTasks.PairAlarmsOnVertex(v1));
            }

            for (int j = i + 1; j < verticesInSubgraphWithAlarms.size(); j++) {
                final CEVertex v2 = verticesInSubgraphWithAlarms.get(j);
                final double distance = vectorizer.distanceOnGraph(v1, v2);
                if (distance <= epsilon) {
                    // We want to try and pair alarms on v1 with alarms on v2
                    taskQueue.add(new TFClustererTasks.PairAlarmsOnVertices(v1, v2, distance));
                }
            }
        }
        LOG.trace("Graph Processing thread finished.");
    }

    private void processTfTasks(BlockingQueue<TFClustererTasks.Task> taskQueue, BlockingQueue<TFClustererTasks.RelatesTo> relationQueue, AtomicBoolean doneSubmittingTasks) {
        LOG.trace("TF Processing thread started.");
        while (!doneSubmittingTasks.get() || !taskQueue.isEmpty()) {
            try {
                // If the timeout is any higher, simulations take a while...
                final TFClustererTasks.Task task = taskQueue.poll(50, TimeUnit.MILLISECONDS);
                if (task == null) {
                    continue;
                }

                processTask(relationQueue, task);
            } catch (InterruptedException e) {
                LOG.info("Interrupted while waiting for the next task. Exiting thread.");
                Thread.currentThread().interrupt();
                return;
            }
        }
        LOG.trace("TF Processing thread finished.");
    }

    private void processTask(BlockingQueue<TFClustererTasks.RelatesTo> relationQueue, TFClustererTasks.Task task) {
        LOG.trace("Processing task: {}", task);
        try {
            TFTaskVisitor visitor;
            if (tfModel != null) {
                visitor = new TFTaskVisitor(tfModel, vectorizer, relationQueue);
            } else {
                visitor = new TFTaskVisitor(remoteModel, vectorizer, relationQueue);
            }
            task.visit(visitor);
            LOG.trace("Done processing task. {} related calls total.", visitor.getNumIsRelatedCalls());
        } catch (Exception e) {
            LOG.error("Error occurred while executing task: {}: {}", task, e.getMessage(), e);
        }
    }

    private static class TFTaskVisitor implements TFClustererTasks.TaskVisitor {

        private final TFModel tfModel;
        private final RemoteModel remoteModel;
        private final Vectorizer vectorizer;
        private final BlockingQueue<TFClustererTasks.RelatesTo> relationQueue;

        private long numIsRelatedCalls = 0;

        public TFTaskVisitor(TFModel tfModel, Vectorizer vectorizer, BlockingQueue<TFClustererTasks.RelatesTo> relationQueue) {
            this.tfModel = tfModel;
            this.vectorizer = vectorizer;
            this.relationQueue = relationQueue;
            this.remoteModel = null;
        }

        public TFTaskVisitor(RemoteModel remoteModel, Vectorizer vectorizer, BlockingQueue<TFClustererTasks.RelatesTo> relationQueue) {
            this.tfModel = null;
            this.vectorizer = vectorizer;
            this.relationQueue = relationQueue;
            this.remoteModel = remoteModel;
        }

        @Override
        public void pairAlarmsOnVertex(TFClustererTasks.PairAlarmsOnVertex task) {
            // Match all of the alarms on the vertex
            // there are N (N -1) / 2 total combinations to check - where N is the number of alarms -> O(n^2)
            final CEVertex vertex = task.getVertex();
            final List<Alarm> alarms = new ArrayList<>(task.getVertex().getAlarms());
            for (int i = 0; i < alarms.size(); i++) {
                final Alarm a1 = alarms.get(i);
                final AlarmInSpaceTime a1st = new AlarmInSpaceTime(vertex, a1);
                for (int j = i + 1; j < alarms.size(); j++) {
                    final Alarm a2 = alarms.get(j);
                    final AlarmInSpaceTime a2st = new AlarmInSpaceTime(vertex, a2);
                    final InputVector inputVector = vectorizer.vectorize(a1st, a2st);
                    isRelated(a1, a1st, a2, a2st, inputVector);
                    numIsRelatedCalls++;
                }
            }
        }

        private void isRelated(Alarm a1, AlarmInSpaceTime a1st, Alarm a2, AlarmInSpaceTime a2st, InputVector inputVector) {
            if ((tfModel != null && tfModel.isRelated(inputVector)) || (remoteModel!= null && remoteModel.isRelated(inputVector))) {
                LOG.debug("{} is related to {}", a1.getId(), a2.getId());
                relationQueue.add(new TFClustererTasks.RelatesTo(a1st, a2st, inputVector));
            }
        }

        @Override
        public void pairAlarmsOnVertices(TFClustererTasks.PairAlarmsOnVertices pairAlarmsOnVertices) {
            // Compare all the alarms on v1 to all of the alarms on v2
            final CEVertex v1 = pairAlarmsOnVertices.getV1();
            final CEVertex v2 = pairAlarmsOnVertices.getV2();

            for (Alarm a1 : v1.getAlarms()) {
                final AlarmInSpaceTime a1st = new AlarmInSpaceTime(v1, a1);

                for (Alarm a2 : v2.getAlarms()) {
                    final AlarmInSpaceTime a2st = new AlarmInSpaceTime(v2, a2);
                    final InputVector inputVector = vectorizer.vectorize(a1st, a2st);
                    isRelated(a1, a1st, a2, a2st, inputVector);
                    numIsRelatedCalls++;
                }
            }
        }

        public long getNumIsRelatedCalls() {
            return numIsRelatedCalls;
        }
    }

}
