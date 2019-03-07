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
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.ImmutableAlarm;
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.MockInventory;
import org.opennms.oce.driver.test.MockInventoryBuilder;
import org.opennms.oce.driver.test.MockInventoryType;

public class GraphManagerTest {

    @Test
    public void canBuildGraphAndMaintainGraph() {
        // Create a new graph manager and add some inventory
        final GraphManager graphManager = new GraphManager();
        graphManager.addInventory(MockInventory.getSampleNetwork());
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

    @Test
    public void canHandleSameInventory() {
        // Create a new graph manager and add some inventory
        final GraphManager graphManager = new GraphManager();
        graphManager.addInventory(MockInventory.getSampleNetwork());

        AtomicInteger numEdges = new AtomicInteger();
        // Validate the graph
        graphManager.withGraph(g -> {
            // The number of vertices should match the number of elements in the inventory
            assertThat(g.getVertices(), hasSize(MockInventory.SAMPLE_NETWORK.size()));
            // Capture the number of edges
            numEdges.set(g.getEdgeCount());
        });
        // Now add the same inventory again
        graphManager.addInventory(MockInventory.getSampleNetwork());
        // Validate the graph
        graphManager.withGraph(g -> {
            // The number of vertices should match the number of elements in the inventory
            assertThat(g.getVertices(), hasSize(MockInventory.SAMPLE_NETWORK.size()));
            // The number of edges should match the number from the last count
            assertThat(g.getEdgeCount(), equalTo(numEdges.get()));
        });
    }

    /**
     * Verifies that edges will be associated with vertices once they are created,
     * for cases in which we learn about the relationship before the objects
     */
    @Test
    public void canHandleDeferredVertices() {
        final GraphManager graphManager = new GraphManager();
        // Add a link that references two non-existent peers
        graphManager.addInventory(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.LINK, "n1-c1-p1___n2-c1-p1")
                .withPeerRelation(MockInventoryType.LINK, "n1-c1-p1___n2-c1-p1", MockInventoryType.PORT, "n1-c1-p1", MockInventoryType.PORT, "n2-c1-p1")
                .getInventory());

        // The graph should contain a single vertex with no edges
        graphManager.withGraph(g -> {
            assertThat(g.getVertices(), hasSize(1));
            assertThat(g.getEdges(), hasSize(0));
        });

        assertThat(graphManager.getNumDeferredObjects(), equalTo(1));

        // Now, let's add the objects that the link refers to
        graphManager.addInventory(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1")
                .withInventoryObject(MockInventoryType.PORT, "n2-c1-p1")
                .getInventory());

        // The graph should contain 3 vertices and 2 edges
        graphManager.withGraph(g -> {
            assertThat(g.getVertices(), hasSize(3));
            assertThat(g.getEdges(), hasSize(2));
        });

        assertThat(graphManager.getNumDeferredObjects(), equalTo(0));
    }

    @Test
    public void canDeleteInventory() {
        // Create a new graph manager and add some inventory
        final GraphManager graphManager = new GraphManager();
        graphManager.addInventory(MockInventory.getSampleNetwork());
        // The graph should contain some vertices and edges
        graphManager.withGraph(g -> {
            assertThat(g.getVertexCount(), greaterThanOrEqualTo(1));
            assertThat(g.getEdgeCount(), greaterThanOrEqualTo(1));
        });
        // Now delete that same inventory
        graphManager.removeInventory(MockInventory.getSampleNetwork());
        // The graph should be empty
        graphManager.withGraph(g -> {
            assertThat(g.getVertexCount(), equalTo(0));
            assertThat(g.getEdgeCount(),  equalTo(0));
        });
    }

    @Test
    public void canIgnoreAlarmsWithoutInventoryObjects() {
        // Create a new graph manager
        final GraphManager graphManager = new GraphManager();

        // Add an alarm to the graph
        graphManager.addOrUpdateAlarm(ImmutableAlarm.newBuilder()
                .setTime(1)
                .setId("a1")
                .build());

        // The graph should remain empty
        graphManager.withGraph(g -> {
            assertThat(g.getVertexCount(), equalTo(0));
        });
    }

    @Test
    public void canLinkInterfaces() {
        // Note: This could be expanded to handle segments in addition to interfaces when they are supported

        // Create a new graph manager
        final GraphManager graphManager = new GraphManager();

        // Create a node with one interface
        String node1Id = "node1";
        String node1InterfaceId = "node1interface0";
        InventoryObject node1Interface0 = ImmutableInventoryObject.newBuilder()
                .setId(node1InterfaceId)
                .setType(ManagedObjectType.SnmpInterface.getName())
                .setParentId(node1Id)
                .setParentType(ManagedObjectType.Node.getName())
                .build();
        InventoryObject node1 = ImmutableInventoryObject.newBuilder()
                .setId(node1Id)
                .setType(ManagedObjectType.Node.getName())
                .build();

        // Create another node with one interface
        String node2Id = "node2";
        String node2InterfaceId = "node2interface0";
        InventoryObject node2Interface0 = ImmutableInventoryObject.newBuilder()
                .setId(node2InterfaceId)
                .setType(ManagedObjectType.SnmpInterface.getName())
                .setParentId(node2Id)
                .setParentType(ManagedObjectType.Node.getName())
                .build();
        InventoryObject node2 = ImmutableInventoryObject.newBuilder()
                .setId(node2Id)
                .setType(ManagedObjectType.Node.getName())
                .build();

        // Create a link that links the interfaces for both of our nodes together
        InventoryObject linkNode1ToNode2 = ImmutableInventoryObject.newBuilder()
                .setId("linkn1:0n2:0")
                .setType(ManagedObjectType.SnmpInterfaceLink.getName())
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setId(node1InterfaceId)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setEndpoint(InventoryObjectPeerEndpoint.A)
                        .build())
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setId(node2InterfaceId)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setEndpoint(InventoryObjectPeerEndpoint.Z)
                        .build())
                .build();

        // Send the inventory to the graph manager
        Collection<InventoryObject> inventory = Arrays.asList(node1, node2, node1Interface0, node2Interface0,
                linkNode1ToNode2);
        graphManager.addInventory(inventory);

        // Verify that the graph looks as expected
        graphManager.withGraph(g -> {
            assertThat(g.getVertexCount(), equalTo(5));
            assertThat(g.getEdgeCount(), equalTo(4));
        });
    }
}
