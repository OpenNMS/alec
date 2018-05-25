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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.Collection;

import org.junit.Test;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;

public class OpennmsMapperTest {

    @Test
    public void canMapAlarms() {
        // Map an empty alarm and make sure no exceptions are thrown
        OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.newBuilder()
                .build();
        OpennmsMapper.toAlarm(alarm);

        // Now map a complete alarm and verify all of the properties
        alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey("nodeLostService::1")
                .setLastEventTime(2)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource("FS")
                        .setForeignId("FID")
                        .setId(22)
                        .build())
                .build();
        AlarmBean alarmBean = OpennmsMapper.toAlarm(alarm);
        assertThat(alarmBean.getId(), equalTo(alarm.getReductionKey()));
        assertThat(alarmBean.getTime(), equalTo(alarm.getLastEventTime()));
        assertThat(alarmBean.getSeverity(), equalTo(Severity.CRITICAL));
        assertThat(alarmBean.getResourceKeys(), contains(ResourceKey.key(OpennmsMapper.NODE_INVENTORY_TYPE + ",FS:FID")));
    }

    @Test
    public void canMapNodes() {
        // Map an empty alarm and make sure no exceptions are thrown
        OpennmsModelProtos.Node node = OpennmsModelProtos.Node.newBuilder()
                .build();
        Collection<InventoryObject> inventory = OpennmsMapper.toInventoryObjects(node);
        assertThat(inventory, hasSize(1));
        // Now map a complete node and verify all of the properties
        node = OpennmsModelProtos.Node.newBuilder()
                .setForeignSource("FS")
                .setForeignId("FID")
                .setId(22)
                .setLabel("n1")
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(1)
                        .setIfAlias("eth0")
                        .build())
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(2)
                        .setIfAlias("eth1")
                        .build())
                .build();
        inventory = OpennmsMapper.toInventoryObjects(node);
        assertThat(inventory, hasSize(4));
        InventoryObject nodeObj = getObjectWithTypeAndId(inventory, OpennmsMapper.NODE_INVENTORY_TYPE, "FS:FID");
        assertThat(nodeObj.getParentType(), nullValue());
        assertThat(nodeObj.getParentId(), nullValue());
        assertThat(nodeObj.getPeers(), hasSize(0));
        assertThat(nodeObj.getRelatives(), hasSize(0));

        InventoryObject cardObj = getObjectWithTypeAndId(inventory, OpennmsMapper.CARD_INVENTORY_TYPE, "FS:FID:Card0");
        assertThat(cardObj.getParentType(), equalTo(nodeObj.getType()));
        assertThat(cardObj.getParentId(), equalTo(nodeObj.getId()));

        InventoryObject eth0Object = getObjectWithTypeAndId(inventory, OpennmsMapper.SNMP_INTERFACE_INVENTORY_TYPE, "FS:FID:Card0:1");
        assertThat(eth0Object.getParentType(), equalTo(cardObj.getType()));
        assertThat(eth0Object.getParentId(), equalTo(cardObj.getId()));

        InventoryObject eth1Object = getObjectWithTypeAndId(inventory, OpennmsMapper.SNMP_INTERFACE_INVENTORY_TYPE, "FS:FID:Card0:2");
        assertThat(eth1Object.getParentType(), equalTo(cardObj.getType()));
        assertThat(eth1Object.getParentId(), equalTo(cardObj.getId()));
    }

    private static InventoryObject getObjectWithTypeAndId(Collection<InventoryObject> inventory, String type, String id) {
        return inventory.stream()
                .filter(obj -> type.equals(obj.getType()) && id.equals(obj.getId()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException(String.format("No object found with type: %s and id: %s", type, id)));
    }

}
