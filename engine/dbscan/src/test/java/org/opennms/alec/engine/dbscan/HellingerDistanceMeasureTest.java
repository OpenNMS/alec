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

package org.opennms.alec.engine.dbscan;

import static org.mockito.Mockito.mock;
import static org.opennms.alec.datasource.api.InventoryObject.DEFAULT_WEIGHT;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.opennms.alec.engine.cluster.AbstractClusterEngine;
import org.opennms.alec.engine.jackson.JacksonEngineParameter;

public class HellingerDistanceMeasureTest {

    @Test
    public void canEvaluateDistanceFunction() {

        double minTimeDeltaMs = 0;
        double maxTimeDeltaMs = TimeUnit.MINUTES.toMillis(2);
        double timeDeltaMsStep = TimeUnit.SECONDS.toMillis(5);

        double minSpatialDistance = 0;
        double maxSpatialDistance = 5 * DEFAULT_WEIGHT;
        double spatialDistanceStep = maxSpatialDistance / 10;
        double firstTimeA = 1d;
        double firstTimeB = 2d;

        System.out.printf("Alpha: %.4f, Beta: %.4f, Epsilon: %.4f\n", JacksonEngineParameter.DEFAULT_ALPHA, JacksonEngineParameter.DEFAULT_BETA, HellingerDistanceMeasure.DEFAULT_EPSILON);
        System.out.println("timeDeltaSecs,spatialDistance,distance,ok");
        for (double y = minSpatialDistance; y < maxSpatialDistance; y += spatialDistanceStep) {
            for (double x = minTimeDeltaMs; x <= maxTimeDeltaMs; x += timeDeltaMsStep) {
                double val = eval(x,y, firstTimeA, firstTimeB);
                System.out.printf("%.2f,%.2f,%.2f,%s\n", x / 1000, y, val, val <= HellingerDistanceMeasure.DEFAULT_EPSILON);
            }
        }
    }

    double eval(double timeDeltaMs, double spatialDistance, double firstTimeA, double firstTimeB) {
        final AbstractClusterEngine clusterEngine = mock(AbstractClusterEngine.class);
        final HellingerDistanceMeasure hellingerDistanceMeasure = new HellingerDistanceMeasure(clusterEngine, JacksonEngineParameter.DEFAULT_ALPHA, JacksonEngineParameter.DEFAULT_BETA);
        return hellingerDistanceMeasure.compute(0, timeDeltaMs, firstTimeA, firstTimeB, spatialDistance);
    }
}
