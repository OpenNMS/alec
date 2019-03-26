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

import org.opennms.oce.datasource.common.ImmutableInventoryObject
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import static org.opennms.oce.datasource.common.inventory.ManagedObjectType.*;

import org.opennms.oce.datasource.common.inventory.TypeToInventory;
import org.opennms.oce.datasource.opennms.EdgeToInventory
import org.opennms.oce.datasource.opennms.EnrichedAlarm
import org.opennms.oce.datasource.opennms.InventoryFromAlarm
import org.opennms.oce.datasource.opennms.OpennmsMapper
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObject;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObjects;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.Node;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.TopologyEdge
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.TopologyEdge.TargetCase

import com.google.common.base.Strings;

import groovy.util.logging.Slf4j

@Slf4j
class InventoryFactory {
    
    static InventoryObjects edgeToInventory(TopologyEdge edge) {
        log.trace("EdgeToInventory - edge: {}", edge);
        final InventoryModelProtos.InventoryObjects.Builder iosBuilder = InventoryModelProtos.InventoryObjects.newBuilder();
        final InventoryModelProtos.InventoryObject.Builder ioBuilder = InventoryModelProtos.InventoryObject.newBuilder();

        // The target information could be associated with a node or a segment
        long targetIfIndex;
        String targetNodeCriteria;

        // Note: only port is supported as a target right now
        switch (edge.getTargetCase()) {
            case TargetCase.TARGETPORT:
                targetIfIndex = edge.getTargetPort().getIfIndex();
                targetNodeCriteria = OpennmsMapper.toNodeCriteria(edge.getTargetPort().getNodeCriteria());
                break;
            case TargetCase.TARGETSEGMENT:
            // Segment support needs to be added when segments are available
            default:
                throw new UnsupportedOperationException("Unsupported target type + " + edge.getTargetCase());
        }

        String protocol = edge.getRef().getProtocol().name();
        String sourceNodeCriteria = OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria());

        // Create a link object by setting the peers to the source and target
        ioBuilder.setType(ManagedObjectType.SnmpInterfaceLink.getName())
                // The Id for this link will incorporate the protocol so that if multiple protocols describe a link
                // between the same endpoints they will create multiple links (one for each protocol)
                .setId(EdgeToInventory.getIdForEdge(edge))
                .setFriendlyName(String.format("SNMP Interface Link Between %d on %s and %d on %s discovered with " +
                    "protocol %s", edge.getSource().getIfIndex(), sourceNodeCriteria, targetIfIndex, targetNodeCriteria, protocol))
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.A)
                .setId(String.format("%s:%d", sourceNodeCriteria, edge.getSource().getIfIndex()))
                .setType(ManagedObjectType.SnmpInterface.getName())
                .build())
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.Z)
                .setId(String.format("%s:%d", targetNodeCriteria, targetIfIndex))
                .setType(ManagedObjectType.SnmpInterface.getName())
                .build())
                .build();

        iosBuilder.addInventoryObject(ioBuilder.build());

        return iosBuilder.build();
    }

    static EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) {
        if (alarm == null) {
            return null;
        }

        String managedObjectInstance = null;
        String managedObjectType = null;

        final InventoryModelProtos.InventoryObjects.Builder iosBuilder = InventoryModelProtos.InventoryObjects.newBuilder();
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

        if ((managedObjectInstance == null  || managedObjectType == null) && alarm.hasNodeCriteria()) {
            final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
            managedObjectType = ManagedObjectType.Node.getName();
            managedObjectInstance = nodeCriteria;
        }

        return new EnrichedAlarm(alarm, ios, managedObjectType, managedObjectInstance);
    }

    static InventoryFromAlarm getInventoryFromAlarm(OpennmsModelProtos.Alarm alarm) {
        final List<InventoryModelProtos.InventoryObject> ios = new ArrayList<>();
        final ManagedObjectType type;
        try  {
            type = ManagedObjectType.fromName(alarm.getManagedObjectType());
        } catch (NoSuchElementException nse) {
            log.warn("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(), alarm.getManagedObjectInstance());
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
                ios.add(OpennmsMapper.fromInventory(TypeToInventory.getSnmpInterfaceLink(alarm.getManagedObjectInstance())));
                break;
            case EntPhysicalEntity:
                ios.add(OpennmsMapper.fromInventory(TypeToInventory.getEntPhysicalEntity(alarm.getManagedObjectInstance(), nodeCriteria)));
                break;
            case BgpPeer:
                ios.add(OpennmsMapper.fromInventory(TypeToInventory.getBgpPeer(alarm.getManagedObjectInstance(), nodeCriteria)));
                break;
            case VpnTunnel:
                ios.add(OpennmsMapper.fromInventory(TypeToInventory.getVpnTunnel(alarm.getManagedObjectInstance(), nodeCriteria)));
                break;
            default:
                managedObjectType = type.getName();
                // Scope the object id by node
                managedObjectInstance = String.format("%s:%s", nodeCriteria, alarm.getManagedObjectInstance());
        }
        return new InventoryFromAlarm(ios, managedObjectInstance, managedObjectType);
    }

    static InventoryObject toInventoryObject(OpennmsModelProtos.SnmpInterface snmpInterface, InventoryModelProtos.InventoryObject parent) {
        log.trace("toInventoryObject: {} : {}", snmpInterface, parent);
        return InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterface.getName())
                .setId(parent.getId() + ":" + snmpInterface.getIfIndex())
                .setFriendlyName(snmpInterface.getIfDescr())
                .setParentType(parent.getType())
                .setParentId(parent.getId())
                .build();
    }

    static List<InventoryModelProtos.InventoryObject> toInventoryObjects(Node node) {
        log.trace("Node toInventoryObject: {}", node);
        final List<InventoryModelProtos.InventoryObject> inventory = new ArrayList<>();

        InventoryModelProtos.InventoryObject nodeObj = InventoryModelProtos.InventoryObject.newBuilder()
                .setType(ManagedObjectType.Node.getName())
                .setId(OpennmsMapper.toNodeCriteria(node))
                .setFriendlyName(node.getLabel())
                .build();
        inventory.add(nodeObj);

        // Attach the SNMP interfaces directly to the node
        node.getSnmpInterfaceList().stream()
                .map{iff -> toInventoryObject(iff, nodeObj)}
                .forEach{i -> inventory.add(i)};

        return inventory;
    }

}

def InventoryObjects edgeToInventory(TopologyEdge edge) {
    InventoryFactory.edgeToInventory(edge);
}

def EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) {
    InventoryFactory.enrichAlarm(alarm);
}

def List<InventoryObject> toInventoryObjects(OpennmsModelProtos.Node node) {
    InventoryFactory.toInventoryObjects(node);
}


