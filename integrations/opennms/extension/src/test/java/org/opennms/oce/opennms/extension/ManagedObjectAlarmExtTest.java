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

package org.opennms.oce.opennms.extension;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Collections;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.dao.SnmpInterfaceDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.DatabaseEvent;
import org.opennms.integration.api.v1.model.EventParameter;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.beans.EventParameterBean;
import org.opennms.oce.opennms.model.ManagedObjectType;

public class ManagedObjectAlarmExtTest {
    private final NodeDao nodeDao = mock(NodeDao.class);
    private final SnmpInterfaceDao snmpInterfaceDao = mock(SnmpInterfaceDao.class);
    private final ManagedObjectAlarmExt managedObjectAlarmExt = new ManagedObjectAlarmExt(nodeDao, snmpInterfaceDao);

    @Test
    public void canAssociateAlarmWithNodeManagedObject() {
        // First, test a node without a FS:FID
        Alarm alarm = mock(Alarm.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(1);
        when(alarm.getNode()).thenReturn(node);

        InMemoryEvent inMemoryEvent = mock(InMemoryEvent.class);
        when(inMemoryEvent.getSource()).thenReturn("trapd");

        DatabaseEvent databaseEvent = mock(DatabaseEvent.class);

        Alarm updatedalarm = managedObjectAlarmExt.afterAlarmCreated(alarm, inMemoryEvent, databaseEvent);
        assertThat(ManagedObjectType.fromName(updatedalarm.getManagedObjectType()),
                is(equalTo(ManagedObjectType.Node)));
        assertThat(updatedalarm.getManagedObjectInstance(), is(equalTo(Integer.toString(node.getId()))));

        // Now test a node with a FS:FID
        alarm = mock(Alarm.class);
        node = mock(Node.class);
        when(node.getId()).thenReturn(1);
        when(node.getForeignId()).thenReturn("FID");
        when(node.getForeignSource()).thenReturn("FS");
        when(alarm.getNode()).thenReturn(node);

        updatedalarm = managedObjectAlarmExt.afterAlarmCreated(alarm, inMemoryEvent, databaseEvent);
        assertThat(ManagedObjectType.fromName(updatedalarm.getManagedObjectType()),
                is(equalTo(ManagedObjectType.Node)));
        assertThat(updatedalarm.getManagedObjectInstance(), is(equalTo("FS:FID")));
    }

    @Test
    public void canFallbackToNodeManagedObjectIfLookupFails() {
        Alarm alarm = mock(Alarm.class);
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.SnmpInterface.getName());
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(1);
        when(alarm.getNode()).thenReturn(node);

        InMemoryEvent inMemoryEvent = mock(InMemoryEvent.class);
        when(inMemoryEvent.getSource()).thenReturn("syslogd");
        EventParameter eventParameter = new EventParameterBean(ManagedObjectAlarmExt.IFDESCR_PARM_NAME, "ge0/99");
        when(inMemoryEvent.getParametersByName(ManagedObjectAlarmExt.IFDESCR_PARM_NAME)).thenReturn(Collections.singletonList(eventParameter));

        DatabaseEvent databaseEvent = mock(DatabaseEvent.class);

        Alarm updatedalarm = managedObjectAlarmExt.afterAlarmCreated(alarm, inMemoryEvent, databaseEvent);
        assertThat(ManagedObjectType.fromName(updatedalarm.getManagedObjectType()),
                is(equalTo(ManagedObjectType.Node)));
        assertThat(updatedalarm.getManagedObjectInstance(), is(equalTo(Integer.toString(node.getId()))));

        // Verify that we actually tried to perfom the lookup
        verify(snmpInterfaceDao, times(1)).findByNodeIdAndDescrOrName(node.getId(), "ge0/99");
    }

    @Test
    public void canAssociateSituationWithManagedObject() {
        Alarm a1 = mock(Alarm.class);
        when(a1.getManagedObjectType()).thenReturn(ManagedObjectType.Node.getName());
        when(a1.getManagedObjectInstance()).thenReturn("1");

        Alarm a2 = mock(Alarm.class);
        when(a2.getManagedObjectType()).thenReturn(ManagedObjectType.SnmpInterface.getName());
        when(a2.getManagedObjectInstance()).thenReturn("1");

        Alarm situation = mock(Alarm.class);
        when(situation.getRelatedAlarms()).thenReturn(Arrays.asList(a1, a2));

        InMemoryEvent inMemoryEvent = mock(InMemoryEvent.class);
        when(inMemoryEvent.getSource()).thenReturn("syslogd");
        DatabaseEvent databaseEvent = mock(DatabaseEvent.class);
        Alarm updatedSituation = managedObjectAlarmExt.afterAlarmCreated(situation, inMemoryEvent, databaseEvent);
        assertThat(ManagedObjectType.fromName(updatedSituation.getManagedObjectType()),
                is(equalTo(ManagedObjectType.Node)));
        assertThat(updatedSituation.getManagedObjectInstance(), equalTo("1"));
    }

    @Test
    public void testThresholdAlarm() {
        testSnmpInterfaceAlarm("OpenNMS.Threshd.ifHCInOctets", ManagedObjectAlarmExt.IFINDEX_PARM_NAME);
    }

    @Test
    public void testSnmpPollerAlarm() {
        testSnmpInterfaceAlarm("OpenNMS.SnmpPoller.DefaultPollContext", ManagedObjectAlarmExt.SNMPIFINDEX_PARM_NAME);
    }

    private void testSnmpInterfaceAlarm(String source, String parameter) {
        Alarm alarm = mock(Alarm.class);
        InMemoryEvent inMemoryEvent = mock(InMemoryEvent.class);
        DatabaseEvent databaseEvent = mock(DatabaseEvent.class);

        Node node = mock(Node.class);
        when(alarm.getNode()).thenReturn(node);

        when(inMemoryEvent.getSource()).thenReturn(source);
        String ifIndex = "1";
        EventParameter eventParameter = new EventParameterBean(parameter, ifIndex);
        when(inMemoryEvent.getParametersByName(parameter)).thenReturn(Collections.singletonList(eventParameter));

        Alarm updatedalarm = managedObjectAlarmExt.afterAlarmCreated(alarm, inMemoryEvent, databaseEvent);
        assertThat(ManagedObjectType.fromName(updatedalarm.getManagedObjectType()),
                is(equalTo(ManagedObjectType.SnmpInterface)));
        assertThat(updatedalarm.getManagedObjectInstance(), is(equalTo(ifIndex)));
    }
}
