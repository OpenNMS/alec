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

package org.opennms.alec.engine.deeplearning;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.number.IsCloseTo.closeTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.driver.test.MockInventory;
import org.opennms.alec.driver.test.MockInventoryType;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEVertex;
import org.opennms.alec.engine.cluster.GraphManager;
import org.opennms.alec.engine.cluster.SpatialDistanceCalculator;

public class VectorizerTest {

    @Test
    public void canVectorizeAlarms() {
        // Build a graph from a sample network
        GraphManager graphManager = new GraphManager();
        graphManager.addInventory(MockInventory.SAMPLE_NETWORK);

        // Build the vectorizer
        SpatialDistanceCalculator spatialDistanceCalculator = mock(SpatialDistanceCalculator.class);
        Vectorizer vectorizer = new Vectorizer(graphManager, spatialDistanceCalculator);

        // Build a few alarms, and relate them to IOs on the graph
        Alarm a1_n1_c1_p1 = ImmutableAlarm.newBuilder()
                .setInventoryObjectId("n1-c1-p1")
                .setInventoryObjectType(MockInventoryType.PORT.getType())
                .setTime(0)
                .setId("1")
                .build();
        CEVertex n1_c1_p1 = graphManager.addOrUpdateAlarm(a1_n1_c1_p1).get();

        Alarm a2_n1_c2_p1 = ImmutableAlarm.newBuilder()
                .setInventoryObjectId("n1-c2-p1")
                .setInventoryObjectType(MockInventoryType.PORT.getType())
                .setTime(0)
                .setId("2")
                .build();
        CEVertex n1_c2_p1 = graphManager.addOrUpdateAlarm(a2_n1_c2_p1).get();

        Alarm a3_n2_c1_p2 = ImmutableAlarm.newBuilder()
                .setInventoryObjectId("n2-c1-p2")
                .setInventoryObjectType(MockInventoryType.PORT.getType())
                .setTime(0)
                .setId("3")
                .build();
        CEVertex n2_c1_p2 = graphManager.addOrUpdateAlarm(a3_n2_c1_p2).get();

        // Mock the distance calculation to some non-zero value
        when(spatialDistanceCalculator.getSpatialDistanceBetween(n1_c1_p1.getNumericId(), n1_c2_p1.getNumericId()))
                .thenReturn(0.2016);

        InputVector v = vectorizer.vectorize(new AlarmInSpaceTime(n1_c1_p1, a1_n1_c1_p1), new AlarmInSpaceTime(n1_c2_p1, a2_n1_c2_p1));
        assertThat(v.isSameParent(), equalTo(false));
        assertThat(v.isShareAncestor(), equalTo(true));
        assertThat(v.getSimilarityOfInventoryObjectIds(), closeTo(0.125, 0.001));
        assertThat(v.getSimilarityOfInventoryObjectLabels(), closeTo(-1.0, 0.001));
        assertThat(v.getDistanceOnGraph(), closeTo(0.2016, 0.0001));

        v = vectorizer.vectorize(new AlarmInSpaceTime(n1_c1_p1, a1_n1_c1_p1), new AlarmInSpaceTime(n2_c1_p2, a3_n2_c1_p2));
        assertThat(v.isSameParent(), equalTo(false));
        assertThat(v.isShareAncestor(), equalTo(false));

        v = vectorizer.vectorize(new AlarmInSpaceTime(n1_c2_p1, a2_n1_c2_p1), new AlarmInSpaceTime(n2_c1_p2, a3_n2_c1_p2));
        assertThat(v.isSameParent(), equalTo(false));
        assertThat(v.isShareAncestor(), equalTo(false));

    }
}
