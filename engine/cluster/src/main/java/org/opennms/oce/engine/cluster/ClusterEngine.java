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

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.engine.common.IncidentBean;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.annotations.VisibleForTesting;

import edu.uci.ics.jung.algorithms.shortestpath.DijkstraShortestPath;
import edu.uci.ics.jung.graph.DirectedGraph;
import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.SparseMultigraph;
import edu.uci.ics.jung.graph.util.EdgeType;

/**
 * Clustering based correlation
 * Hypothesis: We can group alarms into incidents by an existing clustering algorithm (i.e. DBSCAN)
 * in conjunction with a distance metric that takes in account both space and time (i.e. spatio-temporal clustering).
 *
 * For measuring distance in time, we can use a metric which grows exponentially as time passes,
 * giving distances which are order of magnitudes smaller for events that are close in time.
 *
 * For measuring distances in space between alarms, we can map the alarms onto a network topology graph and
 * use a standard graph metric which measures the number of hops in the shortest path between the two vertices.
 *
 * Assume a_i and a_k are some alarms we can define:
 *
 *   d(a_i,a_k) = A(e^|a_i_t - a_k_t| - 1) + B(dg(a_i,a_k) ^2)
 *
 * where a_i_t is the time at which a_i was last observed
 * where dg(a_i,a_k) is the number of hops in the shortest path of the network graph
 * where A and B are some constants (need to be tweaked based on how important we want to make space vs time)
 */
public class ClusterEngine implements Engine {

    private static final Logger LOG = LoggerFactory.getLogger(ClusterEngine.class);

    private final AtomicLong vertexIdGenerator = new AtomicLong();
    private final AtomicLong incidentIdGenerator = new AtomicLong();

    private final Graph<Vertex, Edge> g = new SparseMultigraph<>();
    private final DijkstraShortestPath<Vertex, Edge> shortestPath = new DijkstraShortestPath<>(g);
    private final AlarmInSpaceTimeDistanceMeasure distanceMeasure = new AlarmInSpaceTimeDistanceMeasure(this);

    private final Map<ResourceKey, Vertex> resourceToVertexMap = new HashMap<>();
    private final Map<Long, Vertex> idtoVertexMap = new HashMap<>();
    private final Map<String, IncidentBean> alarmIdToIncidentMap = new HashMap<>();
    private final Map<String, IncidentBean> incidentsById = new HashMap<>();

    private long tickResolutionMs = TimeUnit.SECONDS.toMillis(30);

    private IncidentHandler incidentHandler;

    private long lastRun = 0;

    private double epsilon = 100d;

    @Override
    public synchronized void onAlarm(Alarm alarm) {
       getVertexForResource(alarm.getResourceKey()).addOrUpdateAlarm(alarm);
    }

    @Override
    public void setInventory(Model inventory) {
        // ignored for now
    }

    @Override
    public void registerIncidentHandler(IncidentHandler handler) {
        this.incidentHandler = handler;
    }

    @Override
    public long getTickResolutionMs() {
        return tickResolutionMs;
    }

    @Override
    public void tick(long timestampInMillis) {
        if (timestampInMillis - lastRun >= tickResolutionMs) {
            onTick(timestampInMillis);
            lastRun = timestampInMillis;
        }
    }

    public void onTick(long timestampInMillis) {
        // FIXME: Very innefficient to do this every tick
        final List<AlarmInSpaceTime> alarms = g.getVertices().stream()
                .map(v -> v.getAlarms().stream()
                            .map(a -> new AlarmInSpaceTime(v,a))
                            .collect(Collectors.toList()))
                .flatMap(Collection::stream)
                .collect(Collectors.toList());

        final DBSCANClusterer<AlarmInSpaceTime> clusterer = new DBSCANClusterer<>(epsilon, 1, distanceMeasure);
        final List<Cluster<AlarmInSpaceTime>> clustersOfAlarms = clusterer.cluster(alarms);
        LOG.debug("Found {} clusters.", clustersOfAlarms.size());
        for (Cluster<AlarmInSpaceTime> clusterOfAlarms : clustersOfAlarms) {
            if (LOG.isDebugEnabled()) {
                LOG.debug("Got cluster with {} alarms.", clusterOfAlarms.getPoints().size());
            }

            // Map the alarms by existing incident id, using an empty string for the id if they are not associated with an incident
            final AtomicBoolean existsAlarmWithoutIncident = new AtomicBoolean(false);
            final Map<String, List<Alarm>> alarmsByIncidentId = clusterOfAlarms.getPoints().stream()
                    .map(AlarmInSpaceTime::getAlarm)
                    .collect(Collectors.groupingBy(a -> {
                        final Incident incident = alarmIdToIncidentMap.get(a.getId());
                        if (incident != null) {
                            return incident.getId();
                        }
                        existsAlarmWithoutIncident.set(true);
                        return "";
                    }));

            if (alarmsByIncidentId.size() == 1) {
                if (existsAlarmWithoutIncident.get()) {
                    // All of the alarms in the cluster are not associated with an incident yet
                    // Create a new incident with all of the alarms
                    final IncidentBean incident = new IncidentBean();
                    incident.setId(Long.valueOf(incidentIdGenerator.getAndIncrement()).toString());
                    for (AlarmInSpaceTime alarm : clusterOfAlarms.getPoints()) {
                        incident.addAlarm(alarm.getAlarm());
                        alarmIdToIncidentMap.put(alarm.getAlarmId(), incident);
                    }
                    incidentsById.put(incident.getId(), incident);
                    incidentHandler.onIncident(incident);
                }
                // else, All of the alarms already belong to the same incident, nothing to do
            } else if (alarmsByIncidentId.size() == 2 && existsAlarmWithoutIncident.get()) {
                // Some of the alarms in the cluster already belong to an incident whereas other don't
                // Add them all to the same incident
                final String incidentId = alarmsByIncidentId.keySet().stream().filter(k -> !"".equals(k))
                        .findFirst().orElseThrow(() -> new IllegalStateException("Should not happen."));
                final IncidentBean incident = incidentsById.get(incidentId);
                if (incident == null) {
                    throw new IllegalStateException("Should not happen.");
                }

                alarmsByIncidentId.get("").forEach(a -> {
                    incident.addAlarm(a);
                    alarmIdToIncidentMap.put(a.getId(), incident);
                });

                incidentHandler.onIncident(incident);
            } else {
                // The alarms in this cluster already belong to different incidents
                // Let's locate the ones that aren't part of any incident
                List<Alarm> alarmsWithoutIncidents = alarmsByIncidentId.get("");

                // TODO: For each of these we want to associate the alarm with the other alarm that is the "closest"
                throw new IllegalStateException("Not implemented yet!");
            }
        }
    }

    private Vertex getVertexForResource(ResourceKey resourceKey) {
        Vertex vertex = resourceToVertexMap.get(resourceKey);
        if (vertex != null) {
            // Already created
            return vertex;
        } else {
            // Create it
            vertex = new Vertex(vertexIdGenerator.getAndIncrement(), resourceKey);
            // Index it
            resourceToVertexMap.put(vertex.getResourceKey(), vertex);
            idtoVertexMap.put(vertex.getId(), vertex);
            // Add it to the graph
            g.addVertex(vertex);
        }

        if (resourceKey.length() <= 1) {
            // This is a root element, no edges to add
            return vertex;
        } else {
            // Retrieve the parent and link the two vertices
            final Vertex parent = getVertexForResource(resourceKey.getParentKey());
            g.addEdge(new Edge(), parent, vertex, EdgeType.UNDIRECTED);
        }

        return vertex;
    }

    public int getNumHopsBetween(long vertexIdA, long vertexIdB) {
        final Vertex vertexA = idtoVertexMap.get(vertexIdA);
        if (vertexA == null) {
            throw new IllegalStateException("Cound not find vertex with id: " + vertexIdA);
        }
        final Vertex vertexB = idtoVertexMap.get(vertexIdB);
        if (vertexB == null) {
            throw new IllegalStateException("Cound not find vertex with id: " + vertexIdB);
        }
        return shortestPath.getPath(vertexA, vertexB).size();
    }

    @VisibleForTesting
    Graph<Vertex, Edge> getGraph() {
        return g;
    }
}
