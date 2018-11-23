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
import static org.mockito.Mockito.when;

import java.util.Collections;

import org.junit.Test;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.dao.SnmpInterfaceDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.DatabaseEvent;
import org.opennms.integration.api.v1.model.EventParameter;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.beans.EventParameterBean;
import org.opennms.oce.opennms.model.ManagedObjectType;

public class ManagedObjectAlarmExtTest {
    private final ManagedObjectAlarmExt managedObjectAlarmExt = new ManagedObjectAlarmExt(mock(NodeDao.class),
            mock(SnmpInterfaceDao.class));

    @Test
    public void testThreshholdAlarm() {
        testSnmpInterfaceAlarm("OpenNMS.Threshd.ifHCInOctets", "ifIndex");
    }

    @Test
    public void testSnmpPollerAlarm() {
        testSnmpInterfaceAlarm("OpenNMS.SnmpPoller.DefaultPollContext", "snmpifindex");
    }

    private void testSnmpInterfaceAlarm(String source, String parameter) {
        Alarm alarm = mock(Alarm.class);
        InMemoryEvent inMemoryEvent = mock(InMemoryEvent.class);
        DatabaseEvent databaseEvent = mock(DatabaseEvent.class);

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
