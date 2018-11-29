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

package org.opennms.oce.engine.cluster;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.ImmutableSituation;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.features.graph.api.Edge;
import org.opennms.oce.features.graph.api.GraphProvider;
import org.opennms.oce.features.graph.api.OceGraph;
import org.opennms.oce.features.graph.api.Vertex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.annotations.VisibleForTesting;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;

import edu.uci.ics.jung.algorithms.shortestpath.DijkstraShortestPath;
import edu.uci.ics.jung.graph.Graph;

/**
 * Clustering based correlation
 * Hypothesis: We can group alarms into situations by an existing clustering algorithm (i.e. DBSCAN)
 * in conjunction with a distance metric that takes in account both space and time (i.e. spatio-temporal clustering).
 *
 * For measuring distance in time, we can use a metric which grows exponentially as time passes,
 * giving distances which are order of magnitudes smaller for events that are close in time.
 *
 * For measuring distances in space between alarms, we can map the alarms onto a network topology graph and
 * use a standard graph metric which measures the distance in the shortest path between the two vertices.
 *
 * Assume a_i and a_k are some alarms we can define:
 *
 *   d(a_i,a_k) = A(e^|a_i_t - a_k_t| - 1) + B(dg(a_i,a_k) ^2)
 *
 * where a_i_t is the time at which a_i was last observed
 * where dg(a_i,a_k) is the distance of the shortest path of the network graph (the sum of the relative weights of all
 * edges, based on edge relationship type, composing the shortest path)
 * where A and B are some constants (need to be tweaked based on how important we want to make space vs time)
 */
public class ClusterEngine implements Engine, GraphProvider {

    private static final Logger LOG = LoggerFactory.getLogger(ClusterEngine.class);

    public static final double DEFAULT_EPSILON = 100d;
    public static final double DEFAULT_ALPHA = 781.78317629d;
    public static final double DEFAULT_BETA = 0.53244801d;

    private static final int NUM_VERTEX_THRESHOLD_FOR_HOP_DIAG = 10;

    private final AlarmInSpaceTimeDistanceMeasure distanceMeasure;

    private final Map<String, Situation> alarmIdToSituationMap = new HashMap<>();

    private final Map<String, Situation> situationsById = new HashMap<>();

    /**
     * A map of situations and the set of all alarm Id's that have been blacklisted from that situation.
     */
    private final Map<String, Set<String>> situationAlarmBlacklist = new HashMap<>();

    /**
     * The set of situations that have been received feedback since the last tick.
     * 
     * This object also serves as the implicit lock for operations dealing with feedback.
     */
    private final Set<String> situationsWithFeedback = new HashSet<>();

    private long tickResolutionMs = TimeUnit.SECONDS.toMillis(30);

    private SituationHandler situationHandler;

    private long lastRun = 0;

    private final double epsilon;

    private long problemTimeoutMs = TimeUnit.HOURS.toMillis(2);
    private long clearTimeoutMs = TimeUnit.MINUTES.toMillis(5);

    private boolean alarmsChangedSinceLastTick = false;
    private boolean feedbackChangedSinceLastTick = false;
    private DijkstraShortestPath<CEVertex, CEEdge> shortestPath;
    private Set<Long> disconnectedVertices = new HashSet<>();

    private final GraphManager graphManager = new GraphManager();
    
    // Used to prevent processing callbacks before the init has completed
    private final CountDownLatch initLock = new CountDownLatch(1);

    public ClusterEngine() {
        this(DEFAULT_EPSILON, DEFAULT_ALPHA, DEFAULT_BETA);
    }

    public ClusterEngine(double epsilon, double alpha, double beta) {
        this.epsilon = epsilon;
        distanceMeasure = new AlarmInSpaceTimeDistanceMeasure(this, alpha, beta);
    }

    @Override
    public void registerSituationHandler(SituationHandler handler) {
        this.situationHandler = handler;
    }

    @Override
    public long getTickResolutionMs() {
        return tickResolutionMs;
    }

    public void setTickResolutionMs(long tickResolutionMs) {
        this.tickResolutionMs = tickResolutionMs;
    }

    @Override
    public void tick(long timestampInMillis) {
        LOG.debug("Starting tick for {}", timestampInMillis);
        if (timestampInMillis - lastRun >= tickResolutionMs - 1) {
            onTick(timestampInMillis);
            lastRun = timestampInMillis;
        } else {
            LOG.debug("Less than {} milliseconds elapsed since last tick. Ignoring.", tickResolutionMs);
        }
        LOG.debug("Done tick for {}", timestampInMillis);
    }

    @Override
    public void init(List<Alarm> alarms, List<AlarmFeedback> alarmFeedback, List<Situation> situations,
                     List<InventoryObject> inventory) {
        try {
            LOG.debug("Initialized with {} alarms, {} alarm feedback, {} situations and {} inventory objects.",
                    alarms.size(), alarmFeedback.size(), situations.size(), inventory.size());
            LOG.trace("Alarms on init: {}", alarms);
            LOG.trace("Situations on init: {}", situations);
            LOG.trace("Inventory objects on init: {}", inventory);
            graphManager.addInventory(inventory);
            graphManager.addOrUpdateAlarms(alarms);

            // Index the given situations and the alarms they contain, so that we can cluster alarms in existing
            // situations when applicable
            situations.forEach(situation -> {
                        situationsById.put(situation.getId(), situation);
                        if (situation.getAlarms() != null) {
                            for (Alarm alarmInSituation : situation.getAlarms()) {
                                alarmIdToSituationMap.put(alarmInSituation.getId(), situation);
                            }
                        }
                    });
            
            // Process all the alarm feedback provided on init
            alarmFeedback.forEach(this::handleAlarmFeedback);

            if (alarms.size() > 0) {
                alarmsChangedSinceLastTick = true;
            }
        } finally {
            initLock.countDown();
        }
    }

    @Override
    public void destroy() {
        // no-op
    }

    @Override
    public synchronized void deleteSituation(String situationId) throws InterruptedException {
        // Make sure the engine has init'd before we attempt to delete anything since situations can be provided on init
        initLock.await();

        LOG.debug("Deleting situation references for situation with id: {}", situationId);
        situationAlarmBlacklist.remove(situationId);
        Situation situationBeingRemoved = situationsById.remove(situationId);

        if (situationBeingRemoved == null) {
            LOG.warn("Situation with id: {} was not found when attempting to delete.", situationId);
            return;
        }

        situationBeingRemoved.getAlarms().stream()
                .map(Alarm::getId)
                .forEach(alarmIdToSituationMap::remove);
    }

    /**
     * Any operations that update a situation during a tick should be done using this context in order
     * to ensure we get consistent results.
     *
     * This helps align the updates performed by the feedback on the cluster mapping operations, since
     * each of these may end up touching the same situations.
     */
    class TickContext {
        private final long timestampInMillis;
        private final Map<String, ImmutableSituation.Builder> newOrUpdatedSituationsById = new LinkedHashMap<>();

        TickContext(long timestampInMillis) {
            this.timestampInMillis = timestampInMillis;
        }

        long getTimestampInMillis() {
            return timestampInMillis;
        }

        Collection<ImmutableSituation.Builder> getBuildersForNewOrUpdatedSituations() {
            return newOrUpdatedSituationsById.values();
        }

        ImmutableSituation.Builder getBuilderForExistingSituationWithId(String situationId) {
            final Situation existingSituation = situationsById.get(situationId);
            if (existingSituation == null) {
                throw new IllegalArgumentException("Situation with id: " + situationId + " does not exist.");
            }
            return newOrUpdatedSituationsById.computeIfAbsent(situationId,
                    (sid) -> ImmutableSituation.newBuilderFrom(existingSituation));
        }

        ImmutableSituation.Builder getBuilderForNewSituationWithId(String situationId) {
            final ImmutableSituation.Builder situationBuilder = ImmutableSituation.newBuilder()
                    .setId(situationId)
                    .setCreationTime(timestampInMillis);
            newOrUpdatedSituationsById.put(situationId, situationBuilder);
            return situationBuilder;
        }

        List<Situation> getNewOrUpdatedSituations() {
            return newOrUpdatedSituationsById.values().stream()
                    .map(ImmutableSituation.Builder::build)
                    .collect(Collectors.toList());
        }
    }

    public synchronized void onTick(long timestampInMillis) {
        if (!alarmsChangedSinceLastTick && !feedbackChangedSinceLastTick) {
            LOG.debug("{}: No alarm changes since last tick. Nothing to do.", timestampInMillis);
            return;
        }

        final TickContext context = getTickContextFor(timestampInMillis);
        synchronized (situationsWithFeedback) {
            if (feedbackChangedSinceLastTick) {
                feedbackChangedSinceLastTick = false;

                for (String situationId : situationsWithFeedback) {
                    // Handle the blacklisted alarm case
                    Situation affectedSituation = situationsById.get(situationId);
                    Set<Alarm> prevAlarms = affectedSituation.getAlarms();
                    Set<Alarm> newAlarms = new HashSet<>(prevAlarms);

                    newAlarms.removeIf(alarm -> situationAlarmBlacklist.containsKey(situationId) &&
                            situationAlarmBlacklist.get(situationId).contains(alarm.getId()));

                    if (!newAlarms.equals(prevAlarms)) {
                        context.getBuilderForExistingSituationWithId(affectedSituation.getId())
                                .setAlarms(newAlarms);
                    }
                }
                
                situationsWithFeedback.clear();
            }
        }
        
        if (alarmsChangedSinceLastTick) {
            alarmsChangedSinceLastTick = false;

            // Perform the clustering with the graph locked
            graphManager.withGraph(g -> {
                if (graphManager.getDidGraphChangeAndReset()) {
                    // If the graph has changed, then reset the cache
                    LOG.debug("{}: Graph has changed. Resetting hop cache.", timestampInMillis);
                    spatialDistances.invalidateAll();
                    shortestPath = null;
                    disconnectedVertices = graphManager.getDisconnectedVertices();
                }

                // GC alarms from vertices
                int numGarbageCollectedAlarms = 0;
                for (CEVertex v : g.getVertices()) {
                    numGarbageCollectedAlarms += v.garbageCollectAlarms(timestampInMillis, problemTimeoutMs,
                            clearTimeoutMs);
                }
                LOG.debug("{}: Garbage collected {} alarms.", timestampInMillis, numGarbageCollectedAlarms);

                // Ensure the points are sorted in order to make sure that the output of the clusterer is deterministic
                // OPTIMIZATION: Can we avoid doing this every tick?
                final List<AlarmInSpaceTime> alarms = g.getVertices().stream()
                        .map(v -> v.getAlarms().stream()
                                .map(a -> new AlarmInSpaceTime(v, a))
                                .collect(Collectors.toList()))
                        .flatMap(Collection::stream)
                        .sorted(Comparator.comparing(AlarmInSpaceTime::getAlarmTime).thenComparing(AlarmInSpaceTime::getAlarmId))
                        .collect(Collectors.toList());
                if (alarms.size() < 1) {
                    LOG.debug("{}: The graph contains no alarms. No clustering will be performed.", timestampInMillis);
                    return;
                }

                LOG.debug("{}: Clustering {} alarms.", timestampInMillis, alarms.size());
                final DBSCANClusterer<AlarmInSpaceTime> clusterer = new DBSCANClusterer<>(epsilon, 1, distanceMeasure);
                final List<Cluster<AlarmInSpaceTime>> clustersOfAlarms = clusterer.cluster(alarms);
                LOG.debug("{}: Found {} clusters of alarms.", timestampInMillis, clustersOfAlarms.size());

                synchronized (situationsWithFeedback) {
                    for (Cluster<AlarmInSpaceTime> clusterOfAlarms : clustersOfAlarms) {
                        if (LOG.isDebugEnabled()) {
                            LOG.debug("{}: Processing cluster containing {} alarms.", timestampInMillis,
                                    clusterOfAlarms.getPoints().size());
                        }
                        mapClusterToSituations(clusterOfAlarms, context);
                    }
                }
            });
        }

        // Index and notify the situation handler
        final List<Situation> situations = context.getNewOrUpdatedSituations();
        LOG.debug("{}: Creating/updating {} situations.", timestampInMillis, situations.size());
        for (Situation situation : situations) {
            for (Alarm alarm : situation.getAlarms()) {
                alarmIdToSituationMap.put(alarm.getId(), situation);
            }

            situationsById.put(situation.getId(), situation);
            situationHandler.onSituation(situation);
        }
    }

    /**
     * Maps the clusters to situations.
     *
     * @param clusterOfAlarms clusters to group into situations
     * @param context context in which to maintain situation updates
     */
    @VisibleForTesting
    void mapClusterToSituations(Cluster<AlarmInSpaceTime> clusterOfAlarms, TickContext context) {
        // Map the alarms by existing situation id
        // Store them in a separate list if they are not associated with a situation
        final Map<String, List<Alarm>> alarmsBySituationId = new LinkedHashMap<>();
        final List<Alarm> alarmsWithoutSituations = new ArrayList<>();
        for (AlarmInSpaceTime alarmInSpaceTime : clusterOfAlarms.getPoints()) {
            final Alarm alarm = alarmInSpaceTime.getAlarm();
            final Situation situation = alarmIdToSituationMap.get(alarm.getId());
            if (situation != null) {
                alarmsBySituationId.computeIfAbsent(situation.getId(), (sid) -> new ArrayList<>()).add(alarm);
            } else {
                alarmsWithoutSituations.add(alarm);
            }
        }

        if (LOG.isDebugEnabled()) {
            final Map<String, List<String>> alarmIdsBySituationIds = new LinkedHashMap<>();
            alarmsBySituationId.forEach((situationId,alarms) -> {
                alarmIdsBySituationIds.put(situationId, alarms.stream()
                        .map(Alarm::getId).collect(Collectors.toList()));
            });
            LOG.debug("{}: Alarms IDs by Situations IDs in the cluster: {}",
                    context.getTimestampInMillis(), alarmIdsBySituationIds);
            final List<String> alarmIdsWithoutSituations = alarmsWithoutSituations.stream()
                    .map(Alarm::getId).collect(Collectors.toList());
            LOG.debug("{}: Alarms IDs without situations in the cluster: {}",
                    context.getTimestampInMillis(), alarmIdsWithoutSituations);
        }

        if (alarmsWithoutSituations.isEmpty()) {
            // All of the alarms are already in situations, nothing to do here
            LOG.debug("{}: All of the alarms are already in situations, nothing to do here.",
                    context.getTimestampInMillis());
            return;
        }

        if (alarmsBySituationId.isEmpty()) {
            // All of the alarms in the cluster are not associated with a situation yet
            // Create a new situation with all of the alarms
            final String situationId = UUID.randomUUID().toString();
            final ImmutableSituation.Builder situationBuilder = context.getBuilderForNewSituationWithId(situationId);
            for (AlarmInSpaceTime alarm : clusterOfAlarms.getPoints()) {
                situationBuilder.addAlarm(alarm.getAlarm(), this::isAlarmBlacklistedFromSituation);
            }
            LOG.debug("{}: The alarms in the cluster are not part of a situation yet. Creating situation with id: {}",
                    context.getTimestampInMillis(), situationId);
        } else if (alarmsBySituationId.size() == 1) {
            // Some of the alarms in the cluster already belong to a situation whereas other don't
            // Add them all to the same situation
            final String situationId = Iterables.getFirst(alarmsBySituationId.keySet(), null);
            LOG.debug("{}: Some of the alarms in the cluster are not part of a situation yet. Adding alarms to existing situation with id: {}",
                    context.getTimestampInMillis(), situationId);
            // Create a copy of the existing situation
            final ImmutableSituation.Builder situationBuilder = context.getBuilderForExistingSituationWithId(situationId);
            // Add all the alarms to the Situation, replacing any older references...
            for (AlarmInSpaceTime alarm : clusterOfAlarms.getPoints()) {
                situationBuilder.addAlarm(alarm.getAlarm(), this::isAlarmBlacklistedFromSituation);
            }
        } else {
            // The alarms in this cluster already belong to different situations
            LOG.debug("{}: Found {} unclassified alarms in a cluster with existing alarms associated to {} situations.",
                        context.getTimestampInMillis(), alarmsWithoutSituations.size(), alarmsBySituationId.size());

            // Gather the list of candidates from all the existing situations referenced by this cluster
            final List<Alarm> candidateAlarms = alarmsBySituationId.values().stream()
                    .flatMap(Collection::stream)
                    .collect(Collectors.toList());

            final Set<String> situationsUpdated = new HashSet<>();
            // For each alarm without a situation, we want to associate the alarm with the other alarm that is the "closest"
            for (Alarm alarm : alarmsWithoutSituations) {
                final Alarm closestNeighbor = getClosestNeighborInSituation(alarm, candidateAlarms);
                final Situation existingSituationForClosestNeighbor = alarmIdToSituationMap.get(closestNeighbor.getId());
                // Use the situation builder from a previous pass, or create a new copy of the existing situation if there is none
                final String existingSituationId = existingSituationForClosestNeighbor.getId();
                final ImmutableSituation.Builder situationBuilder = context.getBuilderForExistingSituationWithId(existingSituationId);
                situationBuilder.addAlarm(alarm, this::isAlarmBlacklistedFromSituation);
                // Keep track of the situations we actually updated, so we can refresh all of the alarms in them
                situationsUpdated.add(existingSituationId);
            }

            // Refresh the situations with the existing alarms
            for (String situationId : situationsUpdated) {
                final ImmutableSituation.Builder situationBuilder = context.getBuilderForExistingSituationWithId(situationId);
                for (Alarm alarm : alarmsBySituationId.getOrDefault(situationId, Collections.emptyList())) {
                    situationBuilder.addAlarm(alarm, this::isAlarmBlacklistedFromSituation);
                }
            }
        }

        Collection<ImmutableSituation.Builder> situationBuilders = context.getBuildersForNewOrUpdatedSituations();
        LOG.debug("{}: Generating diagnostic texts for {} situations...", context.getTimestampInMillis(), situationBuilders.size());
        situationBuilders.forEach(situationBuilder ->
                situationBuilder.setDiagnosticText(getDiagnosticTextForSituation(situationBuilder.build())));
        LOG.debug("{}: Done generating diagnostic texts.", context.getTimestampInMillis());
    }

    private boolean isAlarmBlacklistedFromSituation(String alarmId, String situationId) {
        // Here we are doing some very primitive blacklisting to ensure that an alarm does not get re-correlated back to
        // the same situation that it has been removed from via feedback. The result is that the engine will likely
        // attempt to cluster it to the same situation but we will prevent it from being added here via blacklist. This
        // means that we will also be preventing the alarm from being correlated to a different situation since we are
        // performing the blacklisting a layer above the engine logic. So effectively the blacklist will prevent the
        // alarm from being added to any situation.
        //
        // More intelligent blacklisting should follow later.
        if (situationAlarmBlacklist.containsKey(situationId) &&
                situationAlarmBlacklist.get(situationId).contains(alarmId)) {
            LOG.debug("Alarm with id: {} is blacklisted from situation with id: {} and will not be added.", alarmId, situationId);
            
            return false;
        }
        
        return true;
    }

    private String getDiagnosticTextForSituation(Situation situation) {
        long minTime = Long.MAX_VALUE;
        long maxTime = Long.MIN_VALUE;
        Long maxSpatialDistance = null;

        final Set<Long> vertexIds = new HashSet<>();
        for (Alarm alarm : situation.getAlarms()) {
            minTime = Math.min(minTime, alarm.getTime());
            maxTime = Math.max(maxTime, alarm.getTime());
            // The alarm may no longer be in this graph
            getOptionalVertexIdForAlarm(alarm).ifPresent(vertexIds::add);
        }

        if (vertexIds.size() < NUM_VERTEX_THRESHOLD_FOR_HOP_DIAG) {
            maxSpatialDistance = 0L;
            for (Long vertexIdA : vertexIds) {
                for (Long vertexIdB : vertexIds) {
                    if (!vertexIdA.equals(vertexIdB)) {
                        maxSpatialDistance = Math.max(maxSpatialDistance, getSpatialDistanceBetween(vertexIdA,
                                vertexIdB));
                    }
                }
            }
        }

        String diagText = String.format("The %d alarms happened within %.2f seconds across %d vertices",
                situation.getAlarms().size(), Math.abs(maxTime - minTime) / 1000d, vertexIds.size());
        if (maxSpatialDistance != null && maxSpatialDistance > 0) {
            diagText += String.format(" %d distance apart", maxSpatialDistance);
        }
        diagText += ".";
        return diagText;
    }

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        try {
            initLock.await();
            graphManager.addOrUpdateAlarm(alarm);
            alarmsChangedSinceLastTick = true;
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while handling callback, skipping processing onAlarmCreatedOrUpdated.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        try {
            initLock.await();
            graphManager.addOrUpdateAlarm(alarm);
            alarmsChangedSinceLastTick = true;
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while handling callback, skipping processing onAlarmCleared.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void onInventoryAdded(Collection<InventoryObject> inventory) {
        try {
            initLock.await();
            graphManager.addInventory(inventory);
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while handling callback, skipping processing onInventoryAdded.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void onInventoryRemoved(Collection<InventoryObject> inventory) {
        try {
            initLock.await();
            graphManager.removeInventory(inventory);
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while handling callback, skipping processing onInventoryRemoved.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void handleAlarmFeedback(AlarmFeedback alarmFeedback) {
        synchronized (situationsWithFeedback) {
            feedbackChangedSinceLastTick = true;

            switch (alarmFeedback.getFeedbackType()) {
                case FALSE_POSITIVE:
                    situationAlarmBlacklist.compute(alarmFeedback.getSituationId(), (key, value) -> {
                        Set<String> alarmIds = value == null ? new HashSet<>() : value;
                        alarmIds.add(alarmFeedback.getAlarmKey());

                        return alarmIds;
                    });


                    situationsWithFeedback.add(alarmFeedback.getSituationId());

                    break;
                case FALSE_NEGATIVE:
                    if (situationAlarmBlacklist.containsKey(alarmFeedback.getSituationId())) {
                        situationAlarmBlacklist.get(alarmFeedback.getSituationId())
                                .remove(alarmFeedback.getAlarmKey());
                    }
                    break;
            }
        }
    }

    @Override
    public <V> V withReadOnlyGraph(Function<OceGraph, V> consumer) {
        final List<Situation> situations = new ArrayList<>(situationsById.values());
        return graphManager.withReadOnlyGraph(g -> {
            final OceGraph oceGraph = new OceGraph() {
                @Override
                public Graph<? extends Vertex, ? extends Edge> getGraph() {
                    return g;
                }

                @Override
                public List<Situation> getSituations() {
                    return situations;
                }

                @Override
                public Vertex getVertexById(String id) {
                    final Long idAsLong;
                    if (id == null) {
                        idAsLong = null;
                    } else {
                        try {
                            idAsLong = Long.valueOf(id);
                        } catch (NumberFormatException nfe) {
                            return null;
                        }
                    }
                    return graphManager.getVertexWithId(idAsLong);
                }
            };
            return consumer.apply(oceGraph);
        });
    }

    @Override
    public void withReadOnlyGraph(Consumer<OceGraph> consumer) {
        withReadOnlyGraph(g -> {
            consumer.accept(g);
            return null;
        });
    }

    private static class CandidateAlarmWithDistance {

        private final Alarm alarm;
        private final double distance;

        private CandidateAlarmWithDistance(Alarm alarm, double distance) {
            this.alarm = alarm;
            this.distance = distance;
        }

        public Alarm getAlarm() {
            return alarm;
        }

        public double getDistance() {
            return distance;
        }
    }

    private Optional<Long> getOptionalVertexIdForAlarm(Alarm alarm) {
        return graphManager.withGraph(g -> {
            for (CEVertex v : graphManager.getGraph().getVertices()) {
                final Optional<Alarm> match = v.getAlarms().stream()
                        .filter(a -> a.equals(alarm))
                        .findFirst();
                if (match.isPresent()) {
                    return Optional.of(v.getNumericId());
                }
            }
            return Optional.empty();
        });
    }

    private long getVertexIdForAlarm(Alarm alarm) {
        final Optional<Long> vertexId = getOptionalVertexIdForAlarm(alarm);
        if (vertexId.isPresent()) {
            return vertexId.get();
        }
        throw new IllegalStateException("No vertex found for alarm: " + alarm);
    }

    private Alarm getClosestNeighborInSituation(Alarm alarm, List<Alarm> candidates) {
        final double timeA = alarm.getTime();
        final long vertexIdA = getVertexIdForAlarm(alarm);

        return candidates.stream()
                .map(candidate -> {
                    final double timeB = candidate.getTime();
                    final long vertexIdB = getVertexIdForAlarm(candidate);
                    final int spatialDistance = vertexIdA == vertexIdB ? 0 : getSpatialDistanceBetween(vertexIdA,
                            vertexIdB);
                    final double distance = distanceMeasure.compute(timeA, timeB, spatialDistance);
                    return new CandidateAlarmWithDistance(candidate, distance);
                })
                .min(Comparator.comparingDouble(CandidateAlarmWithDistance::getDistance)
                        .thenComparing(c -> c.getAlarm().getId()))
                .orElseThrow(() -> new IllegalStateException("Should not happen!")).alarm;
    }

    protected int getSpatialDistanceBetween(long vertexIdA, long vertexIdB) {
        final EdgeKey key = new EdgeKey(vertexIdA, vertexIdB);
        try {
            return spatialDistances.get(key);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    private final LoadingCache<EdgeKey, Integer> spatialDistances = CacheBuilder.newBuilder()
            .maximumSize(10000)
            .build(new CacheLoader<EdgeKey, Integer>() {
                        public Integer load(EdgeKey key) {
                            if (disconnectedVertices.contains(key.vertexIdA) || disconnectedVertices.contains(key.vertexIdB)) {
                                return 0;
                            }
                            final CEVertex vertexA = graphManager.getVertexWithId(key.vertexIdA);
                            if (vertexA == null) {
                                throw new IllegalStateException("Could not find vertex with id: " + key.vertexIdA);
                            }
                            final CEVertex vertexB = graphManager.getVertexWithId(key.vertexIdB);
                            if (vertexB == null) {
                                throw new IllegalStateException("Could not find vertex with id: " + key.vertexIdB);
                            }

                            if (shortestPath == null) {
                                shortestPath = new DijkstraShortestPath<>(graphManager.getGraph(), CEEdge::getWeight,true);
                            }

                            Number distance = shortestPath.getDistance(vertexA, vertexB);

                            if (distance == null) {
                                // No path exists
                                return Integer.MAX_VALUE;
                            } else {
                                return distance.intValue();
                            }
                        }
                    });

    private static class EdgeKey {
        private long vertexIdA;
        private long vertexIdB;

        private EdgeKey(long vertexIdA, long vertexIdB) {
            if (vertexIdA <= vertexIdB) {
                this.vertexIdA = vertexIdA;
                this.vertexIdB = vertexIdB;
            } else {
                this.vertexIdA = vertexIdB;
                this.vertexIdB = vertexIdA;
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            EdgeKey edgeKey = (EdgeKey) o;
            return vertexIdA == edgeKey.vertexIdA &&
                    vertexIdB == edgeKey.vertexIdB;
        }

        @Override
        public int hashCode() {
            return Objects.hash(vertexIdA, vertexIdB);
        }
    }

    @VisibleForTesting
    Graph<CEVertex, CEEdge> getGraph() {
        return graphManager.getGraph();
    }

    @VisibleForTesting
    TickContext getTickContextFor(long timestampInMillis) {
        return new TickContext(timestampInMillis);
    }

    /**
     * Update the situation and alarm to situation maps to authoritatively
     * use the given list of situations.
     *
     * Only use for testing.
     *
     * @param situations collection of situations to use
     */
    @VisibleForTesting
    void setSituations(Collection<Situation> situations) {
        alarmIdToSituationMap.clear();
        situationsById.clear();
        for (Situation situation : situations) {
            situationsById.put(situation.getId(), situation);
            for (Alarm alarm : situation.getAlarms()) {
                alarmIdToSituationMap.put(alarm.getId(), situation);
            }
        }
    }

    /**
     * Retrieve an immutable copy of the situations keyed by id,
     * as currently known by the engine.
     *
     * @return immutable map
     */
    Map<String, Situation> getSituationsById() {
        return ImmutableMap.copyOf(situationsById);
    }

}
