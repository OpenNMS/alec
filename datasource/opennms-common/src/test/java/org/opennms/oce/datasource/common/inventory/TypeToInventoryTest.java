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

package org.opennms.oce.datasource.common.inventory;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef;

public class TypeToInventoryTest {
    @Test
    public void testGetSnmpInterfaceLink() {
        String aNodeCriteria = "nodecriteria.a";
        int aIfIndex = 1;
        String zNodeCriteria = "nodecriteria.z";
        int zIfIndex = 2;

        InventoryObject io = TypeToInventory.getSnmpInterfaceLink("{\"aNodeCriteria\": \"" + aNodeCriteria + "\"," +
                "\"aIfIndex\": \"" + aIfIndex + "\"," +
                "\"zNodeCriteria\": \"" + zNodeCriteria + "\"," +
                "\"zIfIndex\": \"" + zIfIndex + "\"}");

        InventoryObject testIo = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterfaceLink.getName())
                .setId(String.format("%s:%d:%s:%d", aNodeCriteria, aIfIndex, zNodeCriteria, zIfIndex))
                .setFriendlyName(String.format("SNMP Interface Link Between %d on %s and %d on %s", aIfIndex,
                        aNodeCriteria, zIfIndex, zNodeCriteria))
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", aNodeCriteria, aIfIndex))
                        .setEndpoint(InventoryObjectPeerEndpoint.A)
                        .build())
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", zNodeCriteria, zIfIndex))
                        .setEndpoint(InventoryObjectPeerEndpoint.Z)
                        .build())
                .build();

        assertThat(io, equalTo(testIo));
    }

    @Test
    public void testGetEntPhysicalEntity() {
        String nodeCriteria = "nodecriteria";
        String moInstance = "instance";
        InventoryObject io = TypeToInventory.getEntPhysicalEntity(moInstance, nodeCriteria);
        InventoryObject testIo = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.EntPhysicalEntity.getName())
                .setId(String.format("%s:%s", nodeCriteria, moInstance))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();

        assertThat(io, equalTo(testIo));
    }

    @Test
    public void testGetBgpPeer() {
        String nodeCriteria = "nodecriteria";
        String peer = "peer";
        String vrf = "vrf";
        String moInstance = "{\"peer\": \"" + peer + "\", \"vrf\": \"" + vrf + "\"}";

        InventoryObject io = TypeToInventory.getBgpPeer(moInstance, nodeCriteria);
        InventoryObject testIo = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.BgpPeer.getName())
                .setId(String.format("%s:%s:%s", nodeCriteria, peer, vrf))
                .setFriendlyName(String.format("BGP Peer %s on %s in VRF: %s", peer, nodeCriteria, vrf))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();

        assertThat(io, equalTo(testIo));
    }

    @Test
    public void testGetVpnTunnel() {
        String nodeCriteria = "nodecriteria";
        String peerLocalAddr = "peerlocal";
        String peerRemoteAddr = "peerremote";
        String tunnelId = "tunnelid";
        String moInstance = "{\"peerLocalAddr\": \"" + peerLocalAddr + "\", \"peerRemoteAddr\": \"" + peerRemoteAddr +
                "\", \"tunnelId\": \"" + tunnelId + "\"}";

        InventoryObject io = TypeToInventory.getVpnTunnel(moInstance, nodeCriteria);
        InventoryObject testIo = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.VpnTunnel.getName())
                .setId(String.format("%s:%s:%s:%s", nodeCriteria, peerLocalAddr, peerRemoteAddr, tunnelId))
                .setFriendlyName(String.format("VPN tunnel on %s with local addr: %s, remote addr: %s and tunnel id: " +
                        "%s", nodeCriteria, peerLocalAddr, peerRemoteAddr, tunnelId))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();

        assertThat(io, equalTo(testIo));
    }
}
