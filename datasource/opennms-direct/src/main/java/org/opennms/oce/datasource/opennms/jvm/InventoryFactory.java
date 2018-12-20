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

package org.opennms.oce.datasource.opennms.jvm;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.SnmpInterface;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.common.inventory.TypeToInventory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Strings;

/**
 * A utility class used by the OpenNMS direct data source to derive inventory from nodes and alarms.
 */
public class InventoryFactory {
    private static final Logger LOG = LoggerFactory.getLogger(InventoryFactory.class);

    /**
     * Derives inventory from a {@link Node node}.
     *
     * @param node the node to derive inventory from
     * @return the list of derived inventory
     */
    public static List<InventoryObject> createInventoryObjects(Node node) {
        List<InventoryObject> inventoryObjects = new ArrayList<>();

        InventoryObject inventoryObject = ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.Node.getName())
                .setId(toNodeCriteria(node))
                .setFriendlyName(node.getLabel())
                .build();
        inventoryObjects.add(inventoryObject);

        // Attach the SNMP interfaces directly to the node
        node.getSnmpInterfaces().stream()
                .map(snmpInterface -> toInventoryObject(snmpInterface, inventoryObject))
                .forEach(inventoryObjects::add);

        return inventoryObjects;
    }

    /**
     * Derives inventory from an {@link Alarm alarm}.
     *
     * @param alarm the alarm to derive inventory from
     * @return the list of derived inventory
     */
    public static List<InventoryObject> createInventoryObjects(Alarm alarm) {
        // Only derive inventory if the alarm has an MO type and instance
        if (Strings.isNullOrEmpty(alarm.getManagedObjectType()) ||
                Strings.isNullOrEmpty(alarm.getManagedObjectInstance())) {
            return Collections.emptyList();
        }

        ManagedObjectType type;

        try {
            type = ManagedObjectType.fromName(alarm.getManagedObjectType());
        } catch (NoSuchElementException nse) {
            LOG.warn("Found unsupported type: {} with id: {}. Skipping.", alarm.getManagedObjectType(),
                    alarm.getManagedObjectInstance());
            return Collections.emptyList();
        }

        switch (type) {
            case SnmpInterfaceLink:
                return Collections.singletonList(TypeToInventory.getSnmpInterfaceLink(
                        alarm.getManagedObjectInstance()));
            case EntPhysicalEntity:
                return Collections.singletonList(TypeToInventory.getEntPhysicalEntity(
                        alarm.getManagedObjectInstance(), toNodeCriteria(alarm)));
            case BgpPeer:
                return Collections.singletonList(TypeToInventory.getBgpPeer(alarm.getManagedObjectInstance(),
                        toNodeCriteria(alarm)));
            case VpnTunnel:
                return Collections.singletonList(TypeToInventory.getVpnTunnel(alarm.getManagedObjectInstance(),
                        toNodeCriteria(alarm)));
            default:
                return Collections.emptyList();
        }
    }

    /**
     * Derives an {@link InventoryObject inventory object} from an {@link SnmpInterface SNMP interface}.
     *  
     *
     * @param snmpInterface the interface to derive inventory from
     * @param parent        the parent inventory object
     * @return the derived inventory object
     */
    private static InventoryObject toInventoryObject(SnmpInterface snmpInterface, InventoryObject parent) {
        return ImmutableInventoryObject.newBuilder()
                .setType(ManagedObjectType.SnmpInterface.getName())
                .setId(parent.getId() + ":" + snmpInterface.getIfIndex())
                .setFriendlyName(snmpInterface.getIfDescr())
                .setParentType(parent.getType())
                .setParentId(parent.getId())
                .build();
    }

    /**
     * Gets the node criteria string for the given alarm.
     *
     * @param alarm the alarm
     * @return the node criteria string
     */
    private static String toNodeCriteria(Alarm alarm) {
        Node node = alarm.getNode();

        if (node != null) {
            return toNodeCriteria(node);
        }

        return toNodeCriteria(null, null, alarm.getId());
    }

    /**
     * Gets the node criteria string for the given node.
     *
     * @param node the node
     * @return the node criteria string
     */
    private static String toNodeCriteria(Node node) {
        return toNodeCriteria(node.getForeignSource(), node.getForeignId(), node.getId());
    }

    /**
     * @return a node criteria string formatted based on the given values
     */
    private static String toNodeCriteria(String foreignSource, String foreignId, int id) {
        if (!Strings.isNullOrEmpty(foreignSource) && !Strings.isNullOrEmpty(foreignId)) {
            return foreignSource + ":" + foreignId;
        } else {
            return Long.valueOf(id).toString();
        }
    }
}
