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

import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.List;

import javax.script.ScriptException;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.SnmpInterface;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.common.inventory.script.ScriptedInventoryException;

public class InventoryFactoryTest {

    private ScriptedInventoryService inventoryService;

    @Before
    public void before() {
        System.setProperty("log4j.skipJansi", "true");
        inventoryService = OpennmsDirectScriptedInventory.withDefaults();
    }

    @Test
    public void testCreateFromNode() throws ScriptedInventoryException {
        SnmpInterface snmpInterface = mock(SnmpInterface.class);
        when(snmpInterface.getIfDescr()).thenReturn("descr");
        when(snmpInterface.getIfIndex()).thenReturn(2);
        when(snmpInterface.getIfName()).thenReturn("name");

        Node node = mock(Node.class);
        when(node.getId()).thenReturn(1);
        when(node.getForeignId()).thenReturn("foreignId");
        when(node.getForeignSource()).thenReturn("foreignSource");
        when(node.getLabel()).thenReturn("label");
        when(node.getSnmpInterfaces()).thenReturn(Collections.singletonList(snmpInterface));

        List<InventoryObject> ios = inventoryService.createInventoryObjects(node);

        // Verify we created a node inventory object and an SNMP inventory object
        assertThat(ios.get(0).getType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(ios.get(1).getType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
    }

    @Test
    public void testCreateFromAlarm() throws ScriptedInventoryException {
        Alarm alarm = mock(Alarm.class);
        when(alarm.getManagedObjectInstance()).thenReturn("instance");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());

        List<InventoryObject> ios = inventoryService.createInventoryObjects(alarm);
        // Test that we got an inventory object back with the correct type
        assertThat(ios.get(0).getType(), equalTo(ManagedObjectType.EntPhysicalEntity.getName()));
    }

}
