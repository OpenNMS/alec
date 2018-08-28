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
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.IncidentBean;
import org.opennms.oce.datasource.common.InventoryObjectBean;
import org.opennms.oce.datasource.opennms.inventory.ManagedObjectType;

public class OpennmsMapper {

    protected static AlarmBean toAlarm(OpennmsModelProtos.Alarm alarm) {
        final AlarmBean bean = new AlarmBean();
        bean.setId(alarm.getReductionKey());
        bean.setTime(alarm.getLastEventTime());
        bean.setSeverity(toSeverity(alarm.getSeverity()));
        bean.setInventoryObjectType(alarm.getManagedObjectType());
        bean.setInventoryObjectId(alarm.getManagedObjectInstance());
        bean.setSummary(alarm.getLogMessage());
        bean.setDescription(alarm.getDescription());
        return bean;
    }

    protected static IncidentBean toIncident(OpennmsModelProtos.Alarm alarm) {
        final IncidentBean bean = new IncidentBean();
        bean.setCreationTime(alarm.getFirstEventTime());
        final OpennmsModelProtos.Event lastEvent = alarm.getLastEvent();
        if (lastEvent != null) {
            lastEvent.getParameterList().stream()
                    .filter( p -> "situationId".equals(p.getName()))
                    .findFirst()
                    .ifPresent(p -> bean.setId(p.getValue()));
        }
        bean.setSeverity(toSeverity(alarm.getSeverity()));
        return bean;
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
        nodeObj.setType(ManagedObjectType.Node.getName());
        nodeObj.setId(toNodeCriteria(node));
        nodeObj.setFriendlyName(node.getLabel());
        inventory.add(nodeObj);

        // Attach the SNMP interfaces directly to the node
        node.getSnmpInterfaceList().stream()
                .map(iff -> toInventoryObject(iff, nodeObj))
                .forEach(inventory::add);

        // TODO: Use the hardware inventory data if available

        return inventory;
    }

    public static InventoryObject toInventoryObject(OpennmsModelProtos.SnmpInterface snmpInterface, InventoryObject parent) {
        final InventoryObjectBean snmpInterfaceObj = new InventoryObjectBean();
        snmpInterfaceObj.setType(ManagedObjectType.SnmpInterface.getName());
        snmpInterfaceObj.setId(parent.getId() + ":" + snmpInterface.getIfIndex());
        snmpInterfaceObj.setFriendlyName(snmpInterface.getIfAlias());
        snmpInterfaceObj.setParentType(parent.getType());
        snmpInterfaceObj.setParentId(parent.getId());
        return snmpInterfaceObj;
    }

    protected static String toNodeCriteria(OpennmsModelProtos.Node node) {
        if (node.getForeignSource() != null && node.getForeignId() != null) {
            return node.getForeignSource() + ":" + node.getForeignId();
        } else {
            return Long.valueOf(node.getId()).toString();
        }
    }

    protected static String toNodeCriteria(OpennmsModelProtos.NodeCriteria nodeCriteria) {
        if (nodeCriteria.getForeignSource() != null && nodeCriteria.getForeignId() != null) {
            return nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId();
        } else {
            return Long.valueOf(nodeCriteria.getId()).toString();
        }
    }

}
