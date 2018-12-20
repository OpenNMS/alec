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

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef;

import com.google.gson.Gson;

/**
 * Utility class for converting various managed object types to inventory objects.
 */
public class TypeToInventory {
    private static final Gson gson = new Gson();

    public static InventoryObject getSnmpInterfaceLink(String managedObjectInstance) {
        // Retrieve the link details
        final SnmpInterfaceLinkInstance linkInstance = gson.fromJson(managedObjectInstance, SnmpInterfaceLinkInstance.class);
        // Build the object id
        final String ioId = String.format("%s:%d:%s:%d",
                linkInstance.getANodeCriteria(), linkInstance.getAIfIndex(),
                linkInstance.getZNodeCriteria(), linkInstance.getZIfIndex());
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterfaceLink.getName())
                .setId(ioId)
                .setFriendlyName(String.format("SNMP Interface Link Between %d on %s and %d on %s",
                        linkInstance.getAIfIndex(),
                        linkInstance.getANodeCriteria(), linkInstance.getZIfIndex(), linkInstance.getZNodeCriteria()))
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryObjectPeerEndpoint.A)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", linkInstance.getANodeCriteria(), linkInstance.getAIfIndex()))
                        .build())
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryObjectPeerEndpoint.Z)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", linkInstance.getZNodeCriteria(), linkInstance.getZIfIndex()))
                        .build())
                .build();
    }

    public static InventoryObject getEntPhysicalEntity(String managedObjectInstance, String nodeCriteria) {
        final String ioId = String.format("%s:%s", nodeCriteria, managedObjectInstance);
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.EntPhysicalEntity.getName())
                .setId(ioId)
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }

    public static InventoryObject getBgpPeer(String managedObjectInstance, String nodeCriteria) {
        // Retrieve the BGP peer details
        final BgpPeerInstance bgpPeerInstance = gson.fromJson(managedObjectInstance, BgpPeerInstance.class);
        // Build the object id
        final String ioId = String.format("%s:%s:%s", nodeCriteria, bgpPeerInstance.getPeer(),
                bgpPeerInstance.getVrf());
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.BgpPeer.getName())
                .setId(ioId)
                .setFriendlyName(String.format("BGP Peer %s on %s in VRF: %s",
                        bgpPeerInstance.getPeer(), nodeCriteria, bgpPeerInstance.getVrf()))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }

    public static InventoryObject getVpnTunnel(String managedObjectInstance, String nodeCriteria) {
        // Retrieve the VPN tunnel details
        final VpnTunnelInstance vpnTunnelInstance = gson.fromJson(managedObjectInstance, VpnTunnelInstance.class);
        // Build the object id
        final String ioId = String.format("%s:%s:%s:%s", nodeCriteria, vpnTunnelInstance.getPeerLocalAddr(),
                vpnTunnelInstance.getPeerRemoteAddr(), vpnTunnelInstance.getTunnelId());
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.VpnTunnel.getName())
                .setId(ioId)
                .setFriendlyName(String.format("VPN tunnel on %s with local addr: %s, remote addr: %s and tunnel id: " +
                                "%s",
                        nodeCriteria, vpnTunnelInstance.getPeerLocalAddr(), vpnTunnelInstance.getPeerRemoteAddr(),
                        vpnTunnelInstance.getTunnelId()))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }
}
