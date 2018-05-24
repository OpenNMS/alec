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
import java.util.Collection;
import java.util.List;

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.InventoryObjectBean;

public class OpennmsMapper {

    public static String NODE_INVENTORY_TYPE = "Node";
    public static String SNMP_INTERFACE_INVENTORY_TYPE = "Interface";

    protected static AlarmBean toAlarm(OpennmsModelProtos.Alarm alarm) {
        final AlarmBean bean = new AlarmBean();
        bean.setId(alarm.getReductionKey());
        bean.setTime(alarm.getLastEventTime());
        bean.setSeverity(toSeverity(alarm.getSeverity()));
        bean.setResourceKeys(getResourceKeys(alarm));
        return bean;
    }

    protected static List<ResourceKey> getResourceKeys(OpennmsModelProtos.Alarm alarm) {
        final List<ResourceKey> resourceKeys = new ArrayList<>();
        if (alarm.hasNodeCriteria()) {
            final OpennmsModelProtos.NodeCriteria nodeCriteria = alarm.getNodeCriteria();
            if (nodeCriteria.getForeignSource() != null && nodeCriteria.getForeignId() != null) {
                resourceKeys.add(ResourceKey.key(NODE_INVENTORY_TYPE + "," + nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId()));
            }
            resourceKeys.add(ResourceKey.key(NODE_INVENTORY_TYPE + "," +  Long.valueOf(nodeCriteria.getId()).toString()));
        }
        return resourceKeys;
    }

    protected static Severity toSeverity(OpennmsModelProtos.Severity severity) {
        switch (severity) {
            case CLEARED:
                return Severity.CLEARED;
            case NORMAL:
                return Severity.NORMAL;
            case WARNING:
                return Severity.NORMAL;
            case MINOR:
                return Severity.MINOR;
            case MAJOR:
                return Severity.MAJOR;
            case CRITICAL:
                return Severity.CRITICAL;
            case INDETERMINATE:
            case UNRECOGNIZED:
                return Severity.INDETERMINATE;
        }
        return Severity.INDETERMINATE;
    }

    public static Collection<InventoryObject> toInventoryObjects(OpennmsModelProtos.Node node) {
        final List<InventoryObject> inventory = new ArrayList<>();
        final InventoryObjectBean nodeObj = new InventoryObjectBean();
        nodeObj.setType(NODE_INVENTORY_TYPE);
        nodeObj.setId(toNodeCriteria(node));
        nodeObj.setFriendlyName(node.getLabel());
        inventory.add(nodeObj);

        // Add the SNMP interfaces too
        node.getSnmpInterfaceList().stream()
                .map(iff -> toInventoryObject(iff, nodeObj))
                .forEach(inventory::add);

        return inventory;
    }

    public static InventoryObject toInventoryObject(OpennmsModelProtos.SnmpInterface snmpInterface, InventoryObject parent) {
        final InventoryObjectBean snmpInterfaceObj = new InventoryObjectBean();
        snmpInterfaceObj.setType(SNMP_INTERFACE_INVENTORY_TYPE);
        snmpInterfaceObj.setId(parent.getId() + ":" + snmpInterface.getIfIndex());
        snmpInterfaceObj.setFriendlyName(snmpInterface.getIfAlias());
        snmpInterfaceObj.setParentType(parent.getType());
        snmpInterfaceObj.setParentId(parent.getId());
        return snmpInterfaceObj;
    }

    private static String toNodeCriteria(OpennmsModelProtos.Node node) {
        if (node.getForeignSource() != null && node.getForeignId() != null) {
            return node.getForeignSource() + ":" + node.getForeignId();
        } else {
            return Long.valueOf(node.getId()).toString();
        }
    }
}
