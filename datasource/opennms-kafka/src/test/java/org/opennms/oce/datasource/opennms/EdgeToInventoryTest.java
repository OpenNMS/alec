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
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.opennms.oce.datasource.opennms.EdgeToInventory.getIdForEdge;

import java.util.Collections;

import org.hamcrest.Matchers;
import org.junit.Test;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.processors.InventoryTableProcessor;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

public class EdgeToInventoryTest {
    @Test
    public void canMapEdgeToInventory() {
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId("id")
                        .setProtocol(OpennmsModelProtos.TopologyRef.Protocol.CDP)
                        .build())
                .setSource(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(0)
                        .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                                .setForeignSource("aFS")
                                .setForeignId("aFID")
                                .build())
                        .build())
                .setTargetPort(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(1)
                        .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                                .setForeignSource("zFS")
                                .setForeignId("zFID")
                                .build())
                        .build())
                .build();
        InventoryModelProtos.InventoryObjects inventory = EdgeToInventory.toInventoryObjects(edge);
        assertThat(inventory.getInventoryObjectList(), hasSize(1));
        InventoryModelProtos.InventoryObject io = inventory.getInventoryObjectList().iterator().next();
        verifyLinkIo(edge, io);
    }

    private static void verifyLinkIo(OpennmsModelProtos.TopologyEdge edge, InventoryModelProtos.InventoryObject io) {
        InventoryModelProtos.InventoryObjects inventoryObjects =
                InventoryModelProtos.InventoryObjects.newBuilder().addInventoryObject(io).build();
        verifyLinkIo(edge,
                InventoryTableProcessor.toInventory(Collections.singletonList(inventoryObjects)).iterator().next());
    }

    static void verifyLinkIo(OpennmsModelProtos.TopologyEdge edge, InventoryObject io) {
        assertThat(io.getType(), is(Matchers.equalTo(ManagedObjectType.SnmpInterfaceLink.getName())));
        assertThat(io.getPeers(), hasSize(2));
        assertThat(io.getId(), is(Matchers.equalTo(getIdForEdge(edge))));

        String aFS = edge.getSource().getNodeCriteria().getForeignSource();
        String aFID = edge.getSource().getNodeCriteria().getForeignId();
        // Note: needs to be updated for segments
        String zFS = edge.getTargetPort().getNodeCriteria().getForeignSource();
        String zFID = edge.getTargetPort().getNodeCriteria().getForeignId();
        long aIfIndex = edge.getSource().getIfIndex();
        long zIfIndex = edge.getTargetPort().getIfIndex();

        io.getPeers().forEach(peer -> {
            assertThat(peer.getType(), is(Matchers.equalTo(ManagedObjectType.SnmpInterface.getName())));
            if (peer.getEndpoint() == InventoryObjectPeerEndpoint.A) {
                assertThat(peer.getId(), is(Matchers.equalTo(String.format("%s:%s:%d", aFS, aFID, aIfIndex))));
            } else if (peer.getEndpoint() == InventoryObjectPeerEndpoint.Z) {
                assertThat(peer.getId(), is(Matchers.equalTo(String.format("%s:%s:%d", zFS, zFID, zIfIndex))));
            }
        });
    }
}
