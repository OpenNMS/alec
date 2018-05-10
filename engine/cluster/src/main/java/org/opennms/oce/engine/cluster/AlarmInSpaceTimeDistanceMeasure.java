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

import java.util.Objects;

import org.apache.commons.math3.exception.DimensionMismatchException;
import org.apache.commons.math3.ml.distance.DistanceMeasure;

public class AlarmInSpaceTimeDistanceMeasure implements DistanceMeasure {
    private final ClusterEngine clusterEngine;

    public AlarmInSpaceTimeDistanceMeasure(ClusterEngine clusterEngine) {
        this.clusterEngine = Objects.requireNonNull(clusterEngine);
    }

    @Override
    public double compute(double[] a, double[] b) throws DimensionMismatchException {
        final double timeA = a[0];
        final double timeB = b[0];

        final long vertexIdA = (long)a[1];
        final long vertexIdB = (long)b[1];

        int numHops = 0;
        if (vertexIdA != vertexIdB) {
            numHops = clusterEngine.getNumHopsBetween(vertexIdA, vertexIdB);
            if (numHops == 0) {
                // No path
                numHops = Integer.MAX_VALUE;
            }
        }

        final double delta = compute(timeA, timeB, numHops);
        //System.out.printf("Distance between %d and %d is: %.4f\n", vertexIdA, vertexIdB, delta);
        return delta;
    }

    public static double compute(double timeA, double timeB, int numHops) {
        // TODO: Revise function, match with what's defined in ClusterEngine
        return Math.abs(timeA - timeB) / 1000 + numHops;
    }
}
