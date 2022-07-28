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

package org.opennms.alec.datasource.opennms.jvm;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.common.inventory.ManagedObjectType;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.immutables.ImmutableAlarm;
import org.opennms.integration.api.v1.model.immutables.ImmutableNode;

public class ApiMapperTest {

    private ApiMapper mapper;

    @Before
    public void setUp() {
        ScriptedInventoryService inventoryService = OpennmsDirectScriptedInventory.withDefaults();
        mapper = new ApiMapper(inventoryService);
    }
    /**
     * Verify that we include the parent id (in this case, the fs:fid of the node)
     * in the inventory object id when we map an alarm that relates to an SnmpInterface.
     */
    @Test
    public void canScopeLinkDownAlarms() {
        Node apiNode = ImmutableNode.newBuilder()
                .setForeignId("fid")
                .setForeignSource("fs")
                .setId(42)
                .build();
        org.opennms.integration.api.v1.model.Alarm apiAlarm = ImmutableAlarm.newBuilder()
                .setId(43)
                .setFirstEventTime(new Date(0))
                .setReductionKey("boo:1")
                .setLastEventTime(new Date(0))
                .setManagedObjectType(ManagedObjectType.SnmpInterface.getName())
                .setManagedObjectInstance("123")
                .setNode(apiNode)
                .build();

        Alarm alarm = mapper.toAlarm(apiAlarm);
        assertThat(alarm.getInventoryObjectType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
        assertThat(alarm.getInventoryObjectId(), equalTo("fs:fid:123"));
    }
}