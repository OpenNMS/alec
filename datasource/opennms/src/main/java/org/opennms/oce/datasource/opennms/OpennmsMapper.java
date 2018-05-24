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
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.InventoryObjectBean;

public class OpennmsMapper {

    public static String NODE_INVENTORY_TYPE = "Node";
    public static String CARD_INVENTORY_TYPE = "Card";
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
        if (!alarm.hasNodeCriteria()) {
            // The alarm is not associated with a node
            return Collections.emptyList();
        }

        final String nodeCriteria = toNodeCriteria(alarm.getNodeCriteria());

        Integer ifIndex = null;
        // Attempt to determine the associated ifIndex
        if (alarm.getIfIndex() > 0) {
            ifIndex = alarm.getIfIndex();
        } else if (alarm.hasLastEvent()) {
            for (OpennmsModelProtos.EventParameter eventParm : alarm.getLastEvent().getParameterList()) {
                if (Objects.equals(".1.3.6.1.2.1.2.2.1.1", eventParm.getName())) {
                    ifIndex = Integer.parseInt(eventParm.getValue());
                }
            }
        }

        if (ifIndex != null) {
            // The alarm is associated with an interface
            return Collections.singletonList(ResourceKey.key(String.format("%s,%s:Card0:%d", SNMP_INTERFACE_INVENTORY_TYPE, nodeCriteria, ifIndex)));
        } else {
            // The alarm is associated with a node
            return Collections.singletonList(ResourceKey.key(String.format("%s,%s", NODE_INVENTORY_TYPE, nodeCriteria)));
        }
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

        if (node.getSnmpInterfaceList().size() > 0) {
            // One or more SNMP interfaces are present, attach these to a card
            final InventoryObjectBean cardObj = new InventoryObjectBean();
            cardObj.setType(CARD_INVENTORY_TYPE);
            cardObj.setId(nodeObj.getId() + ":Card0");
            cardObj.setParentType(nodeObj.getType());
            cardObj.setParentId(nodeObj.getId());
            inventory.add(cardObj);

            node.getSnmpInterfaceList().stream()
                    .map(iff -> toInventoryObject(iff, cardObj))
                    .forEach(inventory::add);
        }
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


    private static String toNodeCriteria(OpennmsModelProtos.NodeCriteria nodeCriteria) {
        if (nodeCriteria.getForeignSource() != null && nodeCriteria.getForeignId() != null) {
            return nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId();
        } else {
            return Long.valueOf(nodeCriteria.getId()).toString();
        }
    }

}
