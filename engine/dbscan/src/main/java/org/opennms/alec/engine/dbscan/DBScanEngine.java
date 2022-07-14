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
 ******************************************************************************/

package org.opennms.alec.engine.dbscan;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.commons.math3.ml.clustering.DBSCANClusterer;
import org.opennms.alec.engine.api.DistanceMeasure;
import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.cluster.AbstractClusterEngine;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEEdge;
import org.opennms.alec.engine.cluster.CEVertex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.codahale.metrics.MetricRegistry;

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
public class DBScanEngine extends AbstractClusterEngine {
    private static final Logger LOG = LoggerFactory.getLogger(DBScanEngine.class);

    public static final double  DEFAULT_EPSILON = 100d;
    public static final double DEFAULT_ALPHA = 144.47117699d;
    public static final double DEFAULT_BETA = 0.55257784d;
    public static final String DEFAULT_DISTANCE_MEASURE = "alarminspaceandtimedistance";
    private final double epsilon;
    private DistanceMeasure distanceMeasure;
    public DBScanEngine(MetricRegistry metrics) {
        this(metrics, DEFAULT_EPSILON, DEFAULT_ALPHA, DEFAULT_BETA, new AlarmInSpaceAndTimeDistanceMeasureFactory());
    }

    public DBScanEngine(MetricRegistry metrics, double epsilon, double alpha, double beta, DistanceMeasureFactory distanceMeasureFactory) {
        super(metrics);
        LOG.debug(
                "\n=======================================================================================================================================\n" +
                "DBScanEngine configuration\nalpha: {}\nbeta: {}\nepsilon: {}\ndistanceMeasure: {}\n" +
                "=======================================================================================================================================",
                alpha, beta, epsilon, distanceMeasureFactory.getName());

        this.epsilon = epsilon;
        this.distanceMeasure = distanceMeasureFactory.createDistanceMeasure(this, alpha, beta);
    }

    @Override
    public List<Cluster<AlarmInSpaceTime>> cluster(long timestampInMillis, Graph<CEVertex, CEEdge> g) {
        LOG.debug("start DBSCan clustering:\nDistanceMeasure: {}\nAlpha: {}\nBeta: {}\nEpsilon: {}",
                distanceMeasure.getName(), distanceMeasure.getAlpha(), distanceMeasure.getBeta(), epsilon);
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
            return null;
        }

        final DBSCANClusterer<AlarmInSpaceTime> clusterer = new DBSCANClusterer<>(epsilon, 1, distanceMeasure);
        return clusterer.cluster(alarms);
    }

    @Override
    public double getDistanceBetween(double t1, double t2, double distance) {
        return distanceMeasure.compute(t1, t2, distance);
    }

    public DistanceMeasure getDistanceMeasure() {
        return distanceMeasure;
    }
}
