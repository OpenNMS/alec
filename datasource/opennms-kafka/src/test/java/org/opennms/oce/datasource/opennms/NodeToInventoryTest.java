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
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.Collection;

import org.junit.Test;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

public class NodeToInventoryTest {

    @Test
    public void canMapNodesToInventory() {
        // Map an empty alarm and make sure no exceptions are thrown
        OpennmsModelProtos.Node node = OpennmsModelProtos.Node.newBuilder()
                .build();
        Collection<InventoryModelProtos.InventoryObject> inventory = NodeToInventory.toInventoryObjects(node);
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
        inventory = NodeToInventory.toInventoryObjects(node);
        assertThat(inventory, hasSize(3));
        InventoryModelProtos.InventoryObject nodeObj = getObjectWithTypeAndId(inventory, ManagedObjectType.Node.getName(), "FS:FID");
        assertThat(nodeObj.getParentType(), equalTo(""));
        assertThat(nodeObj.getParentId(), equalTo(""));
        assertThat(nodeObj.getPeerList(), hasSize(0));
        assertThat(nodeObj.getRelativeList(), hasSize(0));

        InventoryModelProtos.InventoryObject eth0Object = getObjectWithTypeAndId(inventory, ManagedObjectType.SnmpInterface.getName(), "FS:FID:1");
        assertThat(eth0Object.getParentType(), equalTo(nodeObj.getType()));
        assertThat(eth0Object.getParentId(), equalTo(nodeObj.getId()));

        InventoryModelProtos.InventoryObject eth1Object = getObjectWithTypeAndId(inventory, ManagedObjectType.SnmpInterface.getName(), "FS:FID:2");
        assertThat(eth1Object.getParentType(), equalTo(nodeObj.getType()));
        assertThat(eth1Object.getParentId(), equalTo(nodeObj.getId()));
    }

    private static InventoryModelProtos.InventoryObject getObjectWithTypeAndId(Collection<InventoryModelProtos.InventoryObject> inventory, String type, String id) {
        return inventory.stream()
                .filter(obj -> type.equals(obj.getType()) && id.equals(obj.getId()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException(String.format("No object found with type: %s and id: %s", type, id)));
    }
}
