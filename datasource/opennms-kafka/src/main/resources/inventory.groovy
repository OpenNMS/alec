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

package org.opennms.oce.datasource.opennms

import com.google.common.base.Strings
import groovy.util.logging.Slf4j
import org.opennms.oce.datasource.common.inventory.Edge
import org.opennms.oce.datasource.common.inventory.ManagedObjectType
import org.opennms.oce.datasource.common.inventory.Port
import org.opennms.oce.datasource.common.inventory.TypeToInventory
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObject
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObjects
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.Node
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.TopologyEdge

import static org.opennms.oce.datasource.common.inventory.ManagedObjectType.*

@Slf4j
class InventoryFactory {
    private static final long PORT_LINK_WEIGHT = 100;
    // Use half the regular link weight when there is a segment since there will be twice as many hops
    private static final long SEGMENT_LINK_WEIGHT = 50;

    static InventoryObjects edgeToInventory(TopologyEdge edge) {
        log.trace("EdgeToInventory - edge: {}", edge);
        final InventoryObjects.Builder iosBuilder = InventoryObjects.newBuilder();
        final InventoryObject.Builder edgeIoBuilder = InventoryObject.newBuilder();

        long weightForLink = PORT_LINK_WEIGHT;
        // Derive a segment if applicable
        if (edge.hasTargetSegment()) {
            weightForLink = SEGMENT_LINK_WEIGHT;
            final InventoryObject.Builder segmentIoBuilder = InventoryObject.newBuilder();
            segmentIoBuilder.setType(Segment.getName())
                    .setId(org.opennms.oce.datasource.common.inventory.Segment.generateId(edge.getTargetSegment().getRef().getId(),
                    edge.getTargetSegment().getRef().getProtocol().toString()));

            iosBuilder.addInventoryObject(segmentIoBuilder.build());
        }

        // Create a link object by setting the peers to the source and target
        // The Id for this link will incorporate the protocol so that if multiple protocols describe a link 
        // between the same endpoints they will create multiple links (one for each protocol)
        edgeIoBuilder.setId(EdgeToInventory.getIdForEdge(edge))
                .setFriendlyName(getFriendlyNameForEdge(edge));
        edgeIoBuilder.addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.A)
                .setWeight(weightForLink)
                .setId(Port.generateId(edge.getSource().getIfIndex(),
                OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria()),
                edge.getRef().getProtocol().name()))
                .setType(SnmpInterface.getName())
                .build());

        // Add the target peer conditionally based on what type it is
        if (edge.hasTargetPort()) {
            edgeIoBuilder.setType(SnmpInterfaceLink.getName());
            edgeIoBuilder.addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                    .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.Z)
                    .setWeight(weightForLink)
                    .setId(Port.generateId(edge.getTargetPort().getIfIndex(),
                    OpennmsMapper.toNodeCriteria(edge.getTargetPort().getNodeCriteria()),
                    edge.getRef().getProtocol().name()))
                    .setType(SnmpInterface.getName())
                    .build());
        } else {
            edgeIoBuilder.setType(BridgeLink.getName());
            edgeIoBuilder.addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                    .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.Z)
                    .setWeight(weightForLink)
                    .setId(org.opennms.oce.datasource.common.inventory.Segment.generateId(edge.getRef().getId(), edge.getRef().getProtocol().toString()))
                    .setType(Segment.getName())
                    .build());
        }

        iosBuilder.addInventoryObject(edgeIoBuilder.build());

        return iosBuilder.build();
    }

    private static String getFriendlyNameForEdge(TopologyEdge edge) {
        if (edge.hasTargetPort()) {
            return Edge.generateFriendlyName(edge.getSource().getIfIndex(),
                    OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria()), edge.getTargetPort().getIfIndex(),
                    OpennmsMapper.toNodeCriteria(edge.getTargetPort().getNodeCriteria()),
                    edge.getRef().getProtocol().toString());
        }
        return Edge.generateFriendlyName(edge.getSource().getIfIndex(),
                OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria()),
                edge.getTargetSegment().getRef().getId(), edge.getRef().getProtocol().toString());
    }

    static EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) {
        if (alarm == null) {
            return null;
        }

        String managedObjectInstance = null;
        String managedObjectType = null;

        final InventoryObjects.Builder iosBuilder = InventoryObjects.newBuilder();
        final InventoryObjects ios;
        if (!Strings.isNullOrEmpty(alarm.getManagedObjectType()) &&
                !Strings.isNullOrEmpty(alarm.getManagedObjectInstance())) {
            final InventoryFromAlarm inventoryFromAlarm = getInventoryFromAlarm(alarm);
            for (InventoryObject io : inventoryFromAlarm.getInventory()) {
                iosBuilder.addInventoryObject(io);
            }
            ios = iosBuilder.build();
            if (inventoryFromAlarm.getManagedObjectInstance() != null && inventoryFromAlarm.getManagedObjectType() != null) {
                managedObjectInstance = inventoryFromAlarm.getManagedObjectInstance();
                managedObjectType = inventoryFromAlarm.getManagedObjectType();
            } else if (ios.getInventoryObjectCount() > 0) {
                final InventoryObject io = ios.getInventoryObject(0);
                managedObjectInstance = io.getId();
                managedObjectType = io.getType();
            }
        } else {
            ios = iosBuilder.build();
        }

        if ((managedObjectInstance == null || managedObjectType == null) && alarm.hasNodeCriteria()) {
            final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
            managedObjectType = ManagedObjectType.Node.getName();
            managedObjectInstance = nodeCriteria;
        }

        return new EnrichedAlarm(alarm, ios, managedObjectType, managedObjectInstance);
    }

    static InventoryFromAlarm getInventoryFromAlarm(OpennmsModelProtos.Alarm alarm) {
        final List<InventoryObject> ios = new ArrayList<>();
        final ManagedObjectType type;
        try {
            type = fromName(alarm.getManagedObjectType());
        } catch (NoSuchElementException nse) {
            log.warn("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(), alarm.getManagedObjectInstance());
            return new InventoryFromAlarm(ios);
        }

        final String nodeCriteria = OpennmsMapper.toNodeCriteria(alarm.getNodeCriteria());
        String managedObjectInstance = null;
        String managedObjectType = null;
        switch (type) {
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

    static InventoryObject toInventoryObject(OpennmsModelProtos.SnmpInterface snmpInterface, InventoryObject parent) {
        log.trace("toInventoryObject: {} : {}", snmpInterface, parent);
        return InventoryObject.newBuilder()
                .setType(SnmpInterface.getName())
                .setId(parent.getId() + ":" + snmpInterface.getIfIndex())
                .setFriendlyName(snmpInterface.getIfDescr())
                .setParentType(parent.getType())
                .setParentId(parent.getId())
                .build();
    }

    static List<InventoryObject> toInventoryObjects(Node node) {
        log.trace("Node toInventoryObject: {}", node);
        final List<InventoryObject> inventory = new ArrayList<>();

        InventoryObject nodeObj = InventoryObject.newBuilder()
                .setType(ManagedObjectType.Node.getName())
                .setId(OpennmsMapper.toNodeCriteria(node))
                .setFriendlyName(node.getLabel())
                .build();
        inventory.add(nodeObj);

        // Attach the SNMP interfaces directly to the node
        node.getSnmpInterfaceList().stream()
                .map { iff -> toInventoryObject(iff, nodeObj) }
                .forEach { i -> inventory.add(i) };

        return inventory;
    }

}

def InventoryObjects edgeToInventory(TopologyEdge edge) {
    InventoryFactory.edgeToInventory(edge);
}

def EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) {
    InventoryFactory.enrichAlarm(alarm);
}

def List<InventoryObject> toInventoryObjects(Node node) {
    InventoryFactory.toInventoryObjects(node);
}


