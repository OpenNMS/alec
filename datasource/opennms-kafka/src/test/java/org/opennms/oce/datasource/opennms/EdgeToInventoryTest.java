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

package org.opennms.oce.datasource.opennms;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

import org.junit.Test;
import org.opennms.oce.datasource.common.inventory.Edge;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.common.inventory.Segment;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

public class EdgeToInventoryTest {
    private static final OpennmsModelProtos.TopologyRef.Protocol DEFAULT_PROTOCOL =
            OpennmsModelProtos.TopologyRef.Protocol.CDP;
    private final ScriptedInventoryService inventoryService = OpennmsKafkaScriptedInventory.withDefaults();
    private final EdgeToInventory edgeToInventory = new EdgeToInventory(inventoryService);

    @Test
    public void canMapPortToPortEdgeToInventory() {
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId("id")
                        .setProtocol(DEFAULT_PROTOCOL)
                        .build())
                .setSourcePort(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(0)
                        .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                                // The source port will have a node criteria with FS/FID/ID
                                .setForeignSource("aFS")
                                .setForeignId("aFID")
                                .setId(1)
                                .build())
                        .build())
                .setTargetPort(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(1)
                        .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                                // The target port will have a node criteria with just an ID
                                .setId(2)
                                .build())
                        .build())
                .build();
        InventoryModelProtos.InventoryObjects inventory = edgeToInventory.toInventoryObjects(edge);
        assertThat(inventory.getInventoryObjectList(), hasSize(1));
        InventoryModelProtos.InventoryObject io = inventory.getInventoryObjectList().iterator().next();
        assertThat(io.getType(), equalTo(ManagedObjectType.SnmpInterfaceLink.getName()));
        String peerAId = null;
        String peerZId = null;
        for (InventoryModelProtos.InventoryObjectPeerRef inventoryObjectPeerRef : io.getPeerList()) {
            assertThat(inventoryObjectPeerRef.getType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
            if (inventoryObjectPeerRef.getEndpoint() == InventoryModelProtos.InventoryObjectPeerEndpoint.A) {
                peerAId = inventoryObjectPeerRef.getId();
            } else if (inventoryObjectPeerRef.getEndpoint() == InventoryModelProtos.InventoryObjectPeerEndpoint.Z) {
                peerZId = inventoryObjectPeerRef.getId();
            }
        }
        assertThat(io.getId(), equalTo(Edge.generateId(edge.getRef().getProtocol().toString(), peerAId, peerZId)));
    }

    @Test
    public void canMapPortToSegmentEdgeToInventory() {
        String segmentId = "segment.id";
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId("id")
                        .setProtocol(OpennmsModelProtos.TopologyRef.Protocol.BRIDGE)
                        .build())
                .setSourcePort(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(0)
                        .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                                // The source port will have a node criteria with FS/FID/ID
                                .setForeignSource("aFS")
                                .setForeignId("aFID")
                                .setId(1)
                                .build())
                        .build())
                .setTargetSegment(OpennmsModelProtos.TopologySegment.newBuilder()
                        .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                                .setId(segmentId)
                                .setProtocol(OpennmsModelProtos.TopologyRef.Protocol.BRIDGE)
                                .build())
                        .build())
                .build();
        InventoryModelProtos.InventoryObjects inventory = edgeToInventory.toInventoryObjects(edge);
        // Expect two inventory, a segment and an edge
        assertThat(inventory.getInventoryObjectList(), hasSize(2));
        boolean verifiedLink = false;
        boolean verifiedSegment = false;
        for (InventoryModelProtos.InventoryObject io : inventory.getInventoryObjectList()) {
            if (io.getType().equals(ManagedObjectType.BridgeLink.getName())) {
                assertThat(io.getType(), equalTo(ManagedObjectType.BridgeLink.getName()));
                assertThat(io.getPeerList(), hasSize(2));
                String peerAId = null;
                String peerZId = null;
                for (InventoryModelProtos.InventoryObjectPeerRef inventoryObjectPeerRef : io.getPeerList()) {
                    if (inventoryObjectPeerRef.getEndpoint() == InventoryModelProtos.InventoryObjectPeerEndpoint.A) {
                        peerAId = inventoryObjectPeerRef.getId();
                    } else if (inventoryObjectPeerRef.getEndpoint() == InventoryModelProtos.InventoryObjectPeerEndpoint.Z) {
                        peerZId = inventoryObjectPeerRef.getId();
                    }
                }
                assertThat(io.getId(), equalTo(Edge.generateId(OpennmsModelProtos.TopologyRef.Protocol.BRIDGE.name(),
                        peerAId, peerZId)));
                verifiedLink = true;
            } else if (io.getType().equals(ManagedObjectType.BridgeSegment.getName())) {
                assertThat(io.getId(), equalTo(Segment.generateId(segmentId,
                        OpennmsModelProtos.TopologyRef.Protocol.BRIDGE.name())));
                verifiedSegment = true;
            }
        }
        assertThat(verifiedLink, equalTo(true));
        assertThat(verifiedSegment, equalTo(true));
    }
}
