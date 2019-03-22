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
import static org.hamcrest.Matchers.is;
import static org.opennms.oce.datasource.opennms.EdgeToInventory.getIdForEdge;

import java.util.Collections;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.common.inventory.Port;
import org.opennms.oce.datasource.common.inventory.Segment;
import org.opennms.oce.datasource.opennms.processors.InventoryTableProcessor;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

public class EdgeToInventoryTest {
    private static final OpennmsModelProtos.TopologyRef.Protocol DEFAULT_PROTOCOL =
            OpennmsModelProtos.TopologyRef.Protocol.CDP;
    private final ScriptedInventoryService inventoryService = new ScriptedInventoryImpl("src/main/resources/inventory.groovy");
    private final EdgeToInventory edgeToInventory = new EdgeToInventory(inventoryService);

    @Test
    public void canMapEdgeToInventory() {
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId("id")
                        .setProtocol(DEFAULT_PROTOCOL)
                        .build())
                .setSource(OpennmsModelProtos.TopologyPort.newBuilder()
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
        verifyLinkIo(edge, io);
    }

    @Test
    public void canMapEdgeWithSegmentToInventory() {
        String segmentId = "segment.id";
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId("id")
                        .setProtocol(OpennmsModelProtos.TopologyRef.Protocol.BRIDGE)
                        .build())
                .setSource(OpennmsModelProtos.TopologyPort.newBuilder()
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
                assertThat(io.getType(), is(Matchers.equalTo(ManagedObjectType.BridgeLink.getName())));
                assertThat(io.getPeerList(), hasSize(2));
                assertThat(io.getId(), is(Matchers.equalTo(getIdForEdge(edge))));
                verifiedLink = true;
            } else if (io.getType().equals(ManagedObjectType.Segment.getName())) {
                assertThat(io.getId(), equalTo(Segment.generateId(segmentId,
                        OpennmsModelProtos.TopologyRef.Protocol.BRIDGE.name())));
                verifiedSegment = true;
            }
        }
        assertThat(verifiedLink, equalTo(true));
        assertThat(verifiedSegment, equalTo(true));
    }

    private static void verifyLinkIo(OpennmsModelProtos.TopologyEdge edge, InventoryModelProtos.InventoryObject io) {
        InventoryModelProtos.InventoryObjects inventoryObjects =
                InventoryModelProtos.InventoryObjects.newBuilder().addInventoryObject(io).build();
        verifyLinkIo(edge,
                InventoryTableProcessor.toInventory(Collections.singletonList(inventoryObjects)).iterator().next());
    }

    public static void verifyLinkIo(OpennmsModelProtos.TopologyEdge edge, InventoryObject io) {
        assertThat(io.getType(), is(Matchers.equalTo(ManagedObjectType.SnmpInterfaceLink.getName())));
        assertThat(io.getPeers(), hasSize(2));
        assertThat(io.getId(), is(Matchers.equalTo(getIdForEdge(edge))));

        long aIfIndex = edge.getSource().getIfIndex();
        long zIfIndex = edge.getTargetPort().getIfIndex();

        io.getPeers().forEach(peer -> {
            assertThat(peer.getType(), is(Matchers.equalTo(ManagedObjectType.SnmpInterface.getName())));
            if (peer.getEndpoint() == InventoryObjectPeerEndpoint.A) {
                assertThat(peer.getId(), is(Matchers.equalTo(Port.generateId(aIfIndex,
                        OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria()), DEFAULT_PROTOCOL.name()))));
            } else if (peer.getEndpoint() == InventoryObjectPeerEndpoint.Z) {
                assertThat(peer.getId(), is(Matchers.equalTo(Port.generateId(zIfIndex,
                        OpennmsMapper.toNodeCriteria(edge.getTargetPort().getNodeCriteria()),
                        DEFAULT_PROTOCOL.name()))));
            }
        });
    }

}
