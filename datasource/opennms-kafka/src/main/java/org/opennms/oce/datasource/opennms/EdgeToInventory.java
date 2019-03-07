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

import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

import com.google.common.annotations.VisibleForTesting;

public class EdgeToInventory {
    public static InventoryModelProtos.InventoryObjects toInventoryObjects(OpennmsModelProtos.TopologyEdge edge) {
        final InventoryModelProtos.InventoryObjects.Builder iosBuilder = InventoryModelProtos.InventoryObjects
                .newBuilder();
        final InventoryModelProtos.InventoryObject.Builder ioBuilder =
                InventoryModelProtos.InventoryObject.newBuilder();

        // The target information could be associated with a node or a segment
        long targetIfIndex;
        String targetNodeCriteria;

        // Note: only port is supported as a target right now
        switch (edge.getTargetCase()) {
            case TARGETPORT:
                targetIfIndex = edge.getTargetPort().getIfIndex();
                targetNodeCriteria = nodeCriteriaToString(edge.getTargetPort().getNodeCriteria());
                break;
            case TARGETSEGMENT:
                // Segment support needs to be added when segments are available
            default:
                throw new UnsupportedOperationException("Unsupported target type + " + edge.getTargetCase());
        }

        String protocol = edge.getRef().getProtocol().name();
        String sourceNodeCriteria = nodeCriteriaToString(edge.getSource().getNodeCriteria());

        // Create a link object by setting the peers to the source and target
        ioBuilder.setType(ManagedObjectType.SnmpInterfaceLink.getName())
                // The Id for this link will incorporate the protocol so that if multiple protocols describe a link 
                // between the same endpoints they will create multiple links (one for each protocol)
                .setId(getIdForEdge(edge))
                .setFriendlyName(String.format("SNMP Interface Link Between %d on %s and %d on %s discovered with " +
                                "protocol %s", edge.getSource().getIfIndex(), sourceNodeCriteria, targetIfIndex,
                        targetNodeCriteria, protocol))
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.A)
                        .setId(String.format("%s:%d", sourceNodeCriteria,
                                edge.getSource().getIfIndex()))
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .build())
                .addPeer(InventoryModelProtos.InventoryObjectPeerRef.newBuilder()
                        .setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.Z)
                        .setId(String.format("%s:%d", targetNodeCriteria,
                                targetIfIndex))
                        .setType(ManagedObjectType.SnmpInterface.getName())
                        .build())
                .build();

        iosBuilder.addInventoryObject(ioBuilder.build());

        return iosBuilder.build();
    }

    private static String nodeCriteriaToString(OpennmsModelProtos.NodeCriteria nodeCriteria) {
        // Note: this may need to be updated to support segments
        if (nodeCriteria.getForeignSource().isEmpty()) {
            throw new IllegalArgumentException("The node criteria's foreign source cannot be empty");
        }
        if (nodeCriteria.getForeignId().isEmpty()) {
            throw new IllegalArgumentException("The node criteria's foreign Id cannot be empty");
        }
        return String.format("%s:%s", nodeCriteria.getForeignSource(), nodeCriteria.getForeignId());
    }

    @VisibleForTesting
    static String getIdForEdge(OpennmsModelProtos.TopologyEdge edge) {
        return String.format("%s:%s:%d:%s:%d", edge.getRef().getProtocol(),
                nodeCriteriaToString(edge.getSource().getNodeCriteria()), edge.getSource().getIfIndex(),
                nodeCriteriaToString(edge.getTargetPort().getNodeCriteria()), edge.getTargetPort().getIfIndex());
    }
}
