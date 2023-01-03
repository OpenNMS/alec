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

import java.util.LinkedList;
import java.util.List;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.opennms.alec.datasource.api.Alarm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.codahale.metrics.MetricRegistry;

import edu.uci.ics.jung.graph.Graph;

/**
 * Simple cluster engine implementation
 */
public class ClusterEngine extends AbstractClusterEngine {

    private static final Logger LOG = LoggerFactory.getLogger(ClusterEngine.class);

    public ClusterEngine(MetricRegistry metrics) {
        super(metrics);
    }

    /**
     * Use the graph structure to build clusters:
     *   For every vertex that has 1+ alarms, add all of the alarms on that vertex to a new cluster
     *
     * @param timestampInMillis ignore
     * @param g inventory graph
     * @return list of clusters
     */
    @Override
    public List<Cluster<AlarmInSpaceTime>> cluster(long timestampInMillis, Graph<CEVertex, CEEdge> g) {
        // Build a cluster for each vertex
        final List<Cluster<AlarmInSpaceTime>> clusters = new LinkedList<>();
        for (CEVertex v : g.getVertices()) {
            if (!v.hasAlarms()) {
                // No alarms, skip it
                continue;
            }

            final Cluster<AlarmInSpaceTime> cluster = new Cluster<>();
            for (Alarm a : v.getAlarms()) {
                cluster.addPoint(new AlarmInSpaceTime(v, a));
            }
            clusters.add(cluster);
        }
        return clusters;
    }

}
