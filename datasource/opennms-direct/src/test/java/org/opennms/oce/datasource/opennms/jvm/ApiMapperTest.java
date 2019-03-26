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

package org.opennms.oce.datasource.opennms.jvm;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.model.beans.AlarmBean;
import org.opennms.integration.api.v1.model.beans.NodeBean;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;

public class ApiMapperTest {

    private ApiMapper mapper;

    @Before
    public void setUp() {
        ScriptedInventoryService inventoryService = new ScriptedInventoryImpl("src/main/resources/inventory.groovy");
        mapper = new ApiMapper(inventoryService);
    }
    /**
     * Verify that we include the parent id (in this case, the fs:fid of the node)
     * in the inventory object id when we map an alarm that relates to an SnmpInterface.
     */
    @Test
    public void canScopeLinkDownAlarms() {
        AlarmBean apiAlarm = new AlarmBean();
        apiAlarm.setId(43);
        apiAlarm.setReductionKey("boo:1");
        apiAlarm.setLastEventTime(new Date(0));
        apiAlarm.setManagedObjectType(ManagedObjectType.SnmpInterface.getName());
        apiAlarm.setManagedObjectInstance("123");

        NodeBean apiNode = new NodeBean();
        apiNode.setForeignId("fid");
        apiNode.setForeignSource("fs");
        apiNode.setId(42);
        apiAlarm.setNode(apiNode);

        Alarm alarm = mapper.toAlarm(apiAlarm);
        assertThat(alarm.getInventoryObjectType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
        assertThat(alarm.getInventoryObjectId(), equalTo("fs:fid:123"));
    }
}