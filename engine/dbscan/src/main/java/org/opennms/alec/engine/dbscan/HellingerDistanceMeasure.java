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

public class HellingerDistanceMeasure implements DistanceMeasure {
    public static final double  DEFAULT_EPSILON = 75d;

    private final SpatialDistanceCalculator spatialDistanceCalculator;
    private final double alpha;
    private final double beta;

    public HellingerDistanceMeasure(SpatialDistanceCalculator SpatialDistanceCalculator, double alpha, double beta) {
        this.spatialDistanceCalculator = Objects.requireNonNull(SpatialDistanceCalculator);
        this.alpha = alpha;
        this.beta = beta;
    }

    @Override
    public double compute(double[] a, double[] b) throws DimensionMismatchException {
        final double timeA = a[0];
        final double timeB = b[0];
        final double firstTimeA = a[2];
        final double firstTimeB = b[2];
        final long vertexIdA = (long) a[1];
        final long vertexIdB = (long) b[1];

        double spatialDistance = 0;
        if (vertexIdA != vertexIdB) {
            spatialDistance = spatialDistanceCalculator.getSpatialDistanceBetween(vertexIdA, vertexIdB);
            if (spatialDistance == 0) {
                // No path
                spatialDistance = Integer.MAX_VALUE;
            }
        }

        final double distance = compute(timeA, timeB, firstTimeA, firstTimeB, spatialDistance);

        return distance;
    }

    @Override
    public double compute(double timeA, double timeB, double firstTimeA, double firstTimeB, double spatialDistance) {
        double w = 4851.28;
        double bias = -1986.00;
        double var_a = Math.pow(((timeA - firstTimeA) * w) + bias, 2);
        double mean_a = 0.5 * (timeA + firstTimeA);
        double var_b = Math.pow(((timeB - firstTimeB) * w) + bias, 2);
        double mean_b = 0.5 * (timeB + firstTimeB);
        double var_sum = var_a + var_b;
        double eps_for_grad_sqrt = 1.0e-32;
        double hellinger = Math.sqrt(1 - Math.sqrt((2 * Math.sqrt(var_a) * Math.sqrt(var_b)) / var_sum) * Math.exp(-0.25 * Math.pow(mean_a - mean_b, 2) / var_sum) + eps_for_grad_sqrt);

        return alpha * (beta * (Math.abs(timeA - timeB) / 1000d / 60d) + (1 - beta) * spatialDistance / DEFAULT_WEIGHT) * (1 + hellinger);
    }

    @Override
    public double getAlpha() {
        return alpha;
    }

    @Override
    public double getBeta() {
        return beta;
    }

    @Override
    public String getName() {
        return "hellinger";
    }
}
