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

package org.opennms.alec.engine.dbscan;

import static org.opennms.alec.datasource.api.InventoryObject.DEFAULT_WEIGHT;

import java.util.Objects;

import org.apache.commons.math3.exception.DimensionMismatchException;
import org.opennms.alec.engine.api.DistanceMeasure;
import org.opennms.alec.engine.cluster.SpatialDistanceCalculator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AlarmInSpaceTimeDistanceMeasure implements DistanceMeasure {
    private static final Logger LOG = LoggerFactory.getLogger(AlarmInSpaceTimeDistanceMeasure.class);
    private final SpatialDistanceCalculator spatialDistanceCalculator;
    private final double alpha;
    private final double beta;

    public AlarmInSpaceTimeDistanceMeasure(SpatialDistanceCalculator SpatialDistanceCalculator, double alpha, double beta) {
        this.spatialDistanceCalculator = Objects.requireNonNull(SpatialDistanceCalculator);
        this.alpha = alpha;
        this.beta = beta;
    }

    @Override
    public double compute(double[] a, double[] b) throws DimensionMismatchException {
        final double timeA = a[0];
        final double timeB = b[0];

        final long vertexIdA = (long)a[1];
        final long vertexIdB = (long)b[1];

        double spatialDistance = 0;
        if (vertexIdA != vertexIdB) {
            spatialDistance = spatialDistanceCalculator.getSpatialDistanceBetween(vertexIdA, vertexIdB);
            if (spatialDistance == 0) {
                // No path
                spatialDistance = Integer.MAX_VALUE;
            }
        }

        final double distance = compute(timeA, timeB, spatialDistance);
        /* Too noisy - even for trace
        if (LOG.isTraceEnabled()) {
            LOG.trace("v1: {}, v2: {}, d({},{},{}) = {}", vertexIdA, vertexIdB, timeA, timeB, spatialDistance, distance);
        }
        */
        return distance;
    }

    public double compute(double timeA, double timeB, double spatialDistance) {
        return alpha * ( beta * (Math.abs(timeA - timeB) / 1000d / 60d) + (1-beta) * spatialDistance / DEFAULT_WEIGHT);
    }

    @Override
    public double compute(double timeA, double timeB, double firstTimeA, double firstTimeB, double spatialDistance) {
        return 0;
    }
}
