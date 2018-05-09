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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import edu.uci.ics.jung.graph.DirectedGraph;
import edu.uci.ics.jung.graph.DirectedSparseMultigraph;
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

    private final DirectedGraph<Vertex, Edge> g = new DirectedSparseMultigraph<>();

    private final Map<ResourceKey, Vertex> resourceToVertexMap = new HashMap<>();

    private long period = TimeUnit.SECONDS.toMillis(30);

    private IncidentHandler incidentHandler;

    private long lastRun = 0;

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
    public void tick(long timestampInMillis) {
        if (timestampInMillis - lastRun >= period) {
            onTick(timestampInMillis);
            lastRun = timestampInMillis;
        }
    }

    public void onTick(long timestampInMillis) {
        final AlarmInSpaceTimeDistanceMeasure distanceMeasure = new AlarmInSpaceTimeDistanceMeasure();
        List<AlarmInSpaceTime> alarms = new ArrayList<>();
        DBSCANClusterer<AlarmInSpaceTime> clusterer = new DBSCANClusterer<>(1.5d, 3, distanceMeasure);
        List<Cluster<AlarmInSpaceTime>> clustersOfAlarms = clusterer.cluster(alarms);
        for (Cluster<AlarmInSpaceTime> clusterOfAlarms : clustersOfAlarms) {
            System.out.println(clusterOfAlarms);
            // TODO: Incident handling.
        }
    }

    private Vertex getVertexForResource(ResourceKey resourceKey) {
        Vertex vertex = resourceToVertexMap.get(resourceKey);
        if (vertex != null) {
            // Already created
            return vertex;
        }

        // TODO: We should start at the parent instead of the root
        // in order to avoid walking the whole tree everytime there is a miss

        // Create the hierarchy of vertices
        // For a key with [k1,k2,k3] it should create a graph with
        // [k1] -> [k1,k2] -> [k1,k2,k3]
        final List<String> tokens = new ArrayList<>();
        Vertex lastVertex = null;
        for (String token : resourceKey.getTokens()) {
            tokens.add(token);
            final ResourceKey key = ResourceKey.key(tokens);
            vertex = resourceToVertexMap.computeIfAbsent(key, (k)-> {
                final Vertex v = new Vertex(k);
                g.addVertex(v);
                return v;
            });
            if (lastVertex != null) {
                g.addEdge(new Edge(), lastVertex, vertex, EdgeType.DIRECTED);
            }
            lastVertex = vertex;
        }

        return vertex;
    }
}
