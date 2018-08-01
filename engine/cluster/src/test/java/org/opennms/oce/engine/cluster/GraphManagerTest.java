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

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

import java.util.List;

import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.MockInventory;
import org.opennms.oce.driver.test.MockInventoryType;

/**
 * Things to add tests for:
 *  * A new vertex gets created with we get an alarm for a unknown IO
 *  * Remove of inventory objects
 *  * Updating alarms
 */
public class GraphManagerTest {

    @Test
    public void canBuildGraphAndMaintainGraph() {
        // Create a new graph manager and add some inventory
        final GraphManager graphManager = new GraphManager();
        graphManager.addInventory(MockInventory.SAMPLE_NETWORK);
        // Validate the graph
        graphManager.withGraph(g -> {
            // The number of vertices should match the number of elements in the inventory
            assertThat(g.getVertices(), hasSize(MockInventory.SAMPLE_NETWORK.size()));

            // The vertices shouldn't have any alarms yet
            int numAlarmsOnVertices = g.getVertices().stream()
                    .mapToInt(v -> v.getAlarms().size())
                    .sum();
            assertThat(numAlarmsOnVertices, equalTo(0));
        });

        // Add some alarm(s)
        List<Alarm> alarms = new MockAlarmBuilder()
                .withId("a2")
                .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1")
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .build();
        graphManager.addOrUpdateAlarms(alarms);

        graphManager.withVertex("Port", "n1-c1-p1", (g,v) -> {
            // No new vertices should of been added
            assertThat(g.getVertices(), hasSize(MockInventory.SAMPLE_NETWORK.size()));

            // Validate that the alarm gets associated with the vertex
            assertThat(v.getAlarms(), hasSize(1));
        });
    }
}
