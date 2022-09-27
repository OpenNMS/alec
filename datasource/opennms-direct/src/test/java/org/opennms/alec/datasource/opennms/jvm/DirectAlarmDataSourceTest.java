/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2020 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2020 The OpenNMS Group, Inc.
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

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.common.inventory.ManagedObjectType;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.events.EventForwarder;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;

public class DirectAlarmDataSourceTest {


    private final AlarmDao mockAlarmDao = mock(AlarmDao.class);
    private final ScriptedInventoryService inventoryService = OpennmsDirectScriptedInventory.withDefaults();
    private final ApiMapper mockMapper = new ApiMapper(inventoryService);
    private final EventForwarder mockEventForwarder = mock(EventForwarder.class);
    private final DirectAlarmDatasource dac = new DirectAlarmDatasource(mockAlarmDao, mockEventForwarder, mockMapper);
    private final Alarm alarm = mock(Alarm.class);

    @Before
    public void setup() {
       when(mockAlarmDao.getAlarms()).thenReturn(Arrays.asList(alarm));
       dac.init();
    }


    @Test
    public void testNewOrUpdatedAlarmWhenAlarmIsASituation() {

        Node node = mock(Node.class);
        when(node.getForeignSource()).thenReturn("fs");
        when(node.getForeignId()).thenReturn("fi");
        when(node.getId()).thenReturn(100);

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn(1);
        when(alarm1.isSituation()).thenReturn(true);
        when(alarm1.getReductionKey()).thenReturn("key");
        when(alarm1.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm1.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm1.getNode()).thenReturn(node);
        when(alarm1.getFirstEventTime()).thenReturn(new Date());
        when(alarm1.getLastEventTime()).thenReturn(new Date());
        dac.handleNewOrUpdatedAlarm(alarm1);
        assertTrue(true);
    }

    @Test
    public void testGetSituation() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.isSituation()).thenReturn(true);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getSituation(1).isPresent());
    }

    @Test
    public void testGetSituationNotFound() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.isSituation()).thenReturn(true);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getSituation(2).isEmpty());
    }

    @Test
    public void testGetAlarm() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getAlarm(1).isPresent());
    }

    @Test
    public void testGetAlarmNotFound() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getAlarm(2).isEmpty());
    }
}
