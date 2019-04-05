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
import org.opennms.integration.api.v1.model.*
import org.opennms.oce.datasource.api.InventoryObject
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint
import org.opennms.oce.datasource.api.InventoryObjectPeerRef
import org.opennms.oce.datasource.common.ImmutableAlarm
import org.opennms.oce.datasource.common.ImmutableInventoryObject
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef
import org.opennms.oce.datasource.common.inventory.*

import java.util.concurrent.atomic.AtomicLong

@Slf4j
class InventoryFactory {
    private static final long PORT_LINK_WEIGHT = 100;
    // Use half the regular link weight when there is a segment since there will be twice as many hops
    private static final long SEGMENT_LINK_WEIGHT = 50;

    static List<InventoryObject> nodeToInventory(Node node) {
        List<InventoryObject> inventoryObjects = new ArrayList<>();

        InventoryObject inventoryObject = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.Node.getName())
                .setId(toNodeCriteria(node))
                .setFriendlyName(node.getLabel())
                .build();
        inventoryObjects.add(inventoryObject);

        // Attach the SNMP interfaces directly to the node
        node.getSnmpInterfaces().stream()
                .map { snmpInterface -> toInventoryObject(snmpInterface, inventoryObject) }
                .forEach { io -> inventoryObjects.add(io) };

        return inventoryObjects;
    }

    static Collection<InventoryObject> alarmToInventory(Alarm alarm) {
        // Only derive inventory if the alarm has an MO type and instance
        if (Strings.isNullOrEmpty(alarm.getManagedObjectType()) ||
                Strings.isNullOrEmpty(alarm.getManagedObjectInstance())) {
            return Collections.emptyList();
        }

        log.trace("alarmToInventory - type: {} with id: {}.", alarm.getManagedObjectType(), alarm.getManagedObjectInstance());

        ManagedObjectType type;

        try {
            type = ManagedObjectType.fromName(alarm.getManagedObjectType());
        } catch (NoSuchElementException nse) {
            log.warn("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(),
                    alarm.getManagedObjectInstance());
            return Collections.emptyList();
        }

        switch (type) {
            case ManagedObjectType.SnmpInterfaceLink:
                return Collections.singletonList(TypeToInventory.getSnmpInterfaceLink(
                        alarm.getManagedObjectInstance()));
            case ManagedObjectType.EntPhysicalEntity:
                return Collections.singletonList(TypeToInventory.getEntPhysicalEntity(
                        alarm.getManagedObjectInstance(), toNodeCriteria(alarm)));
            case ManagedObjectType.BgpPeer:
                return Collections.singletonList(TypeToInventory.getBgpPeer(alarm.getManagedObjectInstance(),
                        toNodeCriteria(alarm)));
            case ManagedObjectType.VpnTunnel:
                return Collections.singletonList(TypeToInventory.getVpnTunnel(alarm.getManagedObjectInstance(),
                        toNodeCriteria(alarm)));
            default:
                return Collections.emptyList();
        }
    }

    static void overrideTypeAndInstance(ImmutableAlarm.Builder alarmBuilder, Alarm alarm) {
        log.trace("overrideTypeAndInstance: {}", alarm);
        if (!Strings.isNullOrEmpty(alarm.getManagedObjectType()) && !Strings.isNullOrEmpty(alarm.getManagedObjectInstance())) {
            ManagedObjectType type;
            try {
                type = ManagedObjectType.fromName(alarm.getManagedObjectType());
            } catch (NoSuchElementException nse) {
                log.error("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(), alarm.getManagedObjectInstance());
                return;
            }

            Set<ManagedObjectType> alreadyScoped = new HashSet<>(Arrays.asList(
                    ManagedObjectType.Node,
                    ManagedObjectType.SnmpInterfaceLink,
                    ManagedObjectType.EntPhysicalEntity,
                    ManagedObjectType.BgpPeer,
                    ManagedObjectType.VpnTunnel
            ));

            if (!alreadyScoped.contains(type)) {
                alarmBuilder.setInventoryObjectType(type.getName());
                alarmBuilder.setInventoryObjectId(String.format("%s:%s", toNodeCriteria(alarm.getNode()), alarm.getManagedObjectInstance()));
            }
        }

        if ((alarm.getManagedObjectType() == null || alarm.getManagedObjectInstance() == null) && alarm.getNode() != null) {
            alarmBuilder.setInventoryObjectType(ManagedObjectType.Node.getName());
            alarmBuilder.setInventoryObjectId(toNodeCriteria(alarm.getNode()));
        }

    }

    static ImmutableInventoryObject toInventoryObject(SnmpInterface snmpInterface, InventoryObject parent) {
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterface.getName())
                .setId(Port.generateId(snmpInterface.getIfIndex(), parent.getId()))
                .setFriendlyName(snmpInterface.getIfDescr())
                .setParentType(parent.getType())
                .setParentId(parent.getId())
                .build();
    }

    static String toNodeCriteria(Alarm alarm) {
        log.trace("alarmToNodeCriteria {}", alarm);
        Node node = alarm.getNode();
        if (node != null) {
            return toNodeCriteria(node);
        }
        return toNodeCriteria(null, null, alarm.getId());
    }

    static String toNodeCriteria(Node node) {
        log.trace("nodeToCriteria {}", node);
        return toNodeCriteria(node.getForeignSource(), node.getForeignId(), node.getId());
    }

    static String toNodeCriteria(String foreignSource, String foreignId, int id) {
        log.trace("toNodeCriteria: {} {} {}", foreignSource, foreignId, id);
        if (!Strings.isNullOrEmpty(foreignSource) && !Strings.isNullOrEmpty(foreignId)) {
            return foreignSource + ":" + foreignId;
        } else {
            return Integer.valueOf(id).toString();
        }
    }

    static List<InventoryObject> edgeToInventory(TopologyEdge edge) {
        List<InventoryObject> ios = new ArrayList<>();
        ImmutableInventoryObject.Builder edgeIoBuilder = ImmutableInventoryObject.newBuilder();
        edgeIoBuilder.setType(ManagedObjectType.SnmpInterfaceLink.getName());

        final AtomicLong weightForLink = new AtomicLong(PORT_LINK_WEIGHT);

        // Derive segments from the edge if possible and figure out if this is a link between nodes or segments
        edge.visitEndpoints(new TopologyEdge.EndpointVisitor() {
            @Override
            void visitSource(Node node) {
                // If any of the endpoints are a nod then this is a nodelink
                edgeIoBuilder.setType(ManagedObjectType.NodeLink.getName());
            }

            @Override
            void visitSource(TopologySegment segment) {
                ios.add(ImmutableInventoryObject.newBuilder()
                        .setType(ManagedObjectType.BridgeSegment.getName())
                        .setId(Segment.generateId(segment.getId(), segment.getProtocol().name()))
                        .build());
                // If any of the endpoints are a segment, then this is a bridgelink
                weightForLink.set(SEGMENT_LINK_WEIGHT);
                edgeIoBuilder.setType(ManagedObjectType.BridgeLink.getName());
            }

            @Override
            void visitTarget(Node node) {
                edgeIoBuilder.setType(ManagedObjectType.NodeLink.getName());
            }

            @Override
            void visitTarget(TopologySegment segment) {
                ios.add(ImmutableInventoryObject.newBuilder()
                        .setType(ManagedObjectType.BridgeSegment.getName())
                        .setId(Segment.generateId(segment.getId(), segment.getProtocol().name()))
                        .build());
                // If any of the endpoints are a segment, then this is a bridgelink
                weightForLink.set(SEGMENT_LINK_WEIGHT);
                edgeIoBuilder.setType(ManagedObjectType.BridgeLink.getName());
            }
        });

        // Set the edge source and target
        EdgePeerCreator edgePeerCreator = new EdgePeerCreator(edgeIoBuilder, edge, weightForLink.get());
        edge.visitEndpoints(edgePeerCreator);

        edgeIoBuilder.setId(Edge.generateId(edge.getProtocol().name(), edgePeerCreator.getPeerA().getId(),
                edgePeerCreator.getPeerZ().getId()));
        edgeIoBuilder.setFriendlyName(Edge.generateFriendlyName(edge.getProtocol().name(), edgePeerCreator.getPeerA().getId(),
                edgePeerCreator.getPeerZ().getId()));
        ios.add(edgeIoBuilder.build());

        return ios;
    }

    private static class EdgePeerCreator implements TopologyEdge.EndpointVisitor {
        private final ImmutableInventoryObject.Builder edgeIoBuilder;
        private final TopologyEdge edge;
        private final long edgeWeight;
        private InventoryObjectPeerRef peerA;
        private InventoryObjectPeerRef peerZ;

        EdgePeerCreator(ImmutableInventoryObject.Builder edgeIoBuilder, TopologyEdge edge, long edgeWeight) {
            this.edgeIoBuilder = edgeIoBuilder
            this.edge = edge
            this.edgeWeight = edgeWeight
        }

        private ImmutableInventoryObjectPeerRef.Builder nodeEndpoint(Node node) {
            return ImmutableInventoryObjectPeerRef.newBuilder()
                    .setId(toNodeCriteria(node))
                    .setType(ManagedObjectType.Node.getName())
                    .setWeight(edgeWeight);
        }

        private ImmutableInventoryObjectPeerRef.Builder portEndpoint(TopologyPort port) {
            return ImmutableInventoryObjectPeerRef.newBuilder()
                    .setId(Port.generateId(port.getIfIndex(),
                    nodeCriteriaToString(port.getNodeCriteria())))
                    .setType(ManagedObjectType.SnmpInterface.getName())
                    .setWeight(edgeWeight);
        }

        private ImmutableInventoryObjectPeerRef.Builder segmentEndpoint(TopologySegment segment) {
            return ImmutableInventoryObjectPeerRef.newBuilder()
                    .setId(Segment.generateId(segment.getId(), segment.getProtocol().name()))
                    .setType(ManagedObjectType.BridgeSegment.getName())
                    .setWeight(edgeWeight);
        }

        @Override
        public void visitSource(Node node) {
            InventoryObjectPeerRef peer = nodeEndpoint(node).setEndpoint(InventoryObjectPeerEndpoint.A).build();
            peerA = peer;
            edgeIoBuilder.addPeer(peer);
        }

        @Override
        public void visitSource(TopologyPort port) {
            InventoryObjectPeerRef peer = portEndpoint(port).setEndpoint(InventoryObjectPeerEndpoint.A).build();
            peerA = peer;
            edgeIoBuilder.addPeer(peer);
        }

        @Override
        public void visitSource(TopologySegment segment) {
            InventoryObjectPeerRef peer = segmentEndpoint(segment).setEndpoint(InventoryObjectPeerEndpoint.A).build();
            peerA = peer;
            edgeIoBuilder.addPeer(peer);
        }

        @Override
        public void visitTarget(Node node) {
            InventoryObjectPeerRef peer = nodeEndpoint(node).setEndpoint(InventoryObjectPeerEndpoint.Z).build();
            peerZ = peer;
            edgeIoBuilder.addPeer(peer);
        }

        @Override
        public void visitTarget(TopologyPort port) {
            InventoryObjectPeerRef peer = portEndpoint(port).setEndpoint(InventoryObjectPeerEndpoint.Z).build();
            peerZ = peer;
            edgeIoBuilder.addPeer(peer);
        }

        @Override
        public void visitTarget(TopologySegment segment) {
            InventoryObjectPeerRef peer = segmentEndpoint(segment).setEndpoint(InventoryObjectPeerEndpoint.Z).build();
            peerZ = peer;
            edgeIoBuilder.addPeer(peer);
        }

        InventoryObjectPeerRef getPeerA() {
            return peerA
        }

        InventoryObjectPeerRef getPeerZ() {
            return peerZ
        }
    }

    private static String nodeCriteriaToString(NodeCriteria nodeCriteria) {
        if (!Strings.isNullOrEmpty(nodeCriteria.getForeignSource()) &&
                !Strings.isNullOrEmpty(nodeCriteria.getForeignId())) {
            return nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId();
        } else {
            return Long.valueOf(nodeCriteria.getId()).toString();
        }
    }
}

def Collection<InventoryObject> alarmToInventory(Alarm alarm) {
    return InventoryFactory.alarmToInventory(alarm);
}

def List<InventoryObject> nodeToInventory(Node node) {
    return InventoryFactory.nodeToInventory(node);
}

def overrideTypeAndInstance(ImmutableAlarm.Builder alarmBuilder, Alarm alarm) {
    InventoryFactory.overrideTypeAndInstance(alarmBuilder, alarm);
}

def List<InventoryObject> edgeToInventory(TopologyEdge edge) {
    return InventoryFactory.edgeToInventory(edge);
}