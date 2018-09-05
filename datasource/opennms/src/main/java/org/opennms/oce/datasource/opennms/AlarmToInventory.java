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

package org.opennms.oce.datasource.opennms;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

import org.opennms.oce.datasource.opennms.inventory.BgpPeerInstance;
import org.opennms.oce.datasource.opennms.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.inventory.SnmpInterfaceLinkInstance;
import org.opennms.oce.datasource.opennms.inventory.VpnTunnelInstance;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Strings;
import com.google.gson.Gson;

public class AlarmToInventory {

    private static final Logger LOG = LoggerFactory.getLogger(AlarmToInventory.class);

    private static final Gson gson = new Gson();

    public static EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) {
        if (alarm == null) {
            return null;
        }

        String managedObjectInstance = null;
        String managedObjectType = null;

        final InventoryModelProtos.InventoryObjects.Builder iosBuilder = InventoryModelProtos.InventoryObjects
                .newBuilder();
        final InventoryModelProtos.InventoryObjects ios;
        if (!Strings.isNullOrEmpty(alarm.getManagedObjectType()) &&
                !Strings.isNullOrEmpty(alarm.getManagedObjectInstance())) {
            final InventoryFromAlarm inventoryFromAlarm = getInventoryFromAlarm(alarm);
            for (InventoryModelProtos.InventoryObject io : inventoryFromAlarm.getInventory()) {
                iosBuilder.addInventoryObject(io);
            }
            ios = iosBuilder.build();
            if (inventoryFromAlarm.getManagedObjectInstance() != null && inventoryFromAlarm.getManagedObjectType() != null) {
                managedObjectInstance = inventoryFromAlarm.getManagedObjectInstance();
                managedObjectType = inventoryFromAlarm.getManagedObjectType();
            } else if (ios.getInventoryObjectCount() > 0) {
                final InventoryModelProtos.InventoryObject io = ios.getInventoryObject(0);
                managedObjectInstance = io.getId();
                managedObjectType = io.getType();
            }
        } else {
            ios = iosBuilder.build();
        }

        if (managedObjectInstance == null  || managedObjectType == null) {
            if (alarm.hasNodeCriteria()) {
                final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
                managedObjectType = ManagedObjectType.Node.getName();
                managedObjectInstance = nodeCriteria;
            } else {
                // No specific type and/or id - use the alarm type and id
                managedObjectType = "alarm";
                managedObjectInstance = "" + alarm.getId();
            }
        }

        return new EnrichedAlarm(alarm, ios, managedObjectType, managedObjectInstance);
    }

    private static final class InventoryFromAlarm {

        private final List<InventoryModelProtos.InventoryObject> inventory;
        private final String managedObjectInstance;
        private final String managedObjectType;

        public InventoryFromAlarm(List<InventoryModelProtos.InventoryObject> inventory) {
            this(inventory, null, null);
        }

        public InventoryFromAlarm(List<InventoryModelProtos.InventoryObject> inventory, String managedObjectInstance, String managedObjectType) {
            this.inventory = Objects.requireNonNull(inventory);
            this.managedObjectInstance = managedObjectInstance;
            this.managedObjectType = managedObjectType;
        }

        public List<InventoryModelProtos.InventoryObject> getInventory() {
            return inventory;
        }

        public String getManagedObjectInstance() {
            return managedObjectInstance;
        }

        public String getManagedObjectType() {
            return managedObjectType;
        }
    }

    public static InventoryFromAlarm getInventoryFromAlarm(OpennmsModelProtos.Alarm alarm) {
        final List<InventoryModelProtos.InventoryObject> ios = new ArrayList<>();
        final ManagedObjectType type;
        try  {
            type = ManagedObjectType.fromName(alarm.getManagedObjectType());
        } catch (NoSuchElementException nse) {
            LOG.warn("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(), alarm.getManagedObjectInstance());
            return new InventoryFromAlarm(ios);
        }

        final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
        String managedObjectInstance = null;
        String managedObjectType = null;
        switch(type) {
            case Node:
                // Nothing to do here
                break;
            case SnmpInterfaceLink:
                ios.add(getSnmpInterfaceLinkFromAlarm(alarm));
                break;
            case EntPhysicalEntity:
                ios.add(handleEntPhysicalEntity(alarm));
                break;
            case BgpPeer:
                ios.add(handleBgpPeer(alarm));
                break;
            case VpnTunnel:
                ios.add(handleVpnTunnel(alarm));
                break;
            default:
                managedObjectType = type.getName();
                // Scope the object id by node
                managedObjectInstance = String.format("%s:%s", nodeCriteria, alarm.getManagedObjectInstance());
        }
        return new InventoryFromAlarm(ios, managedObjectInstance, managedObjectType);
    }

    private static InventoryModelProtos.InventoryObject getSnmpInterfaceLinkFromAlarm(OpennmsModelProtos.Alarm alarm) {
        // Retrieve the link details
        final SnmpInterfaceLinkInstance linkInstance = gson.fromJson(alarm.getManagedObjectInstance(), SnmpInterfaceLinkInstance.class);
        // Build the object id
        final String ioId = String.format("%s:%d:%s:%d",
                linkInstance.getANodeCriteria(), linkInstance.getAIfIndex(),
                linkInstance.getZNodeCriteria(), linkInstance.getZIfIndex());
        return InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterfaceLink.getName())
                .setId(ioId)
                .setFriendlyName(String.format("SNMP Interface Link Between %d on %s and %d on %s", linkInstance.getAIfIndex(),
                        linkInstance.getANodeCriteria(), linkInstance.getZIfIndex(), linkInstance.getZNodeCriteria()))
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.A)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", linkInstance.getANodeCriteria(), linkInstance.getAIfIndex())))
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.Z)
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .setId(String.format("%s:%d", linkInstance.getZNodeCriteria(), linkInstance.getZIfIndex())))
                .build();
    }

    private static InventoryModelProtos.InventoryObject handleEntPhysicalEntity(OpennmsModelProtos.Alarm alarm) {
        // Scope the entPhysicalIndex to the node
        final String entPhysicalIndex = alarm.getManagedObjectInstance();
        final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
        final String ioId = String.format("%s:%s", nodeCriteria, entPhysicalIndex);
        return InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.EntPhysicalEntity.getName())
                .setId(ioId)
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }

    private static InventoryModelProtos.InventoryObject handleBgpPeer(OpennmsModelProtos.Alarm alarm) {
        // Retrieve the BGP peer details
        final BgpPeerInstance bgpPeerInstance = gson.fromJson(alarm.getManagedObjectInstance(), BgpPeerInstance.class);
        // Build the object id
        final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
        final String ioId = String.format("%s:%s:%s", nodeCriteria, bgpPeerInstance.getPeer(), bgpPeerInstance.getVrf());
        return InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.BgpPeer.getName())
                .setId(ioId)
                .setFriendlyName(String.format("BGP Peer %s on %s in VRF: %s",
                        bgpPeerInstance.getPeer(), nodeCriteria, bgpPeerInstance.getVrf()))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }

    private static InventoryModelProtos.InventoryObject handleVpnTunnel(OpennmsModelProtos.Alarm alarm) {
        // Retrieve the VPN tunnel details
        final VpnTunnelInstance vpnTunnelInstance = gson.fromJson(alarm.getManagedObjectInstance(), VpnTunnelInstance.class);
        // Build the object id
        final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
        final String ioId = String.format("%s:%s:%s:%s", nodeCriteria, vpnTunnelInstance.getPeerLocalAddr(), vpnTunnelInstance.getPeerRemoteAddr(), vpnTunnelInstance.getTunnelId());
        return InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.VpnTunnel.getName())
                .setId(ioId)
                .setFriendlyName(String.format("VPN tunnel on %s with local addr: %s, remote addr: %s and tunnel id: %s",
                        nodeCriteria, vpnTunnelInstance.getPeerLocalAddr(), vpnTunnelInstance.getPeerRemoteAddr(), vpnTunnelInstance.getTunnelId()))
                .setParentType(ManagedObjectType.Node.getName())
                .setParentId(nodeCriteria)
                .build();
    }
}
