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

package org.opennms.alec.opennms.extension;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.dao.SnmpInterfaceDao;
import org.opennms.integration.api.v1.model.beans.AlarmBean;
import org.opennms.integration.api.v1.model.beans.InMemoryEventBean;
import org.opennms.integration.api.v1.model.beans.NodeBean;
import org.opennms.integration.api.v1.model.beans.SnmpInterfaceBean;
import org.opennms.alec.opennms.model.ManagedObjectType;
import org.opennms.alec.opennms.model.SnmpInterfaceLinkInstance;

import com.google.gson.Gson;

public class SnmpInterfaceLinkTest {

    private static final Gson gson = new Gson();

    @Test
    public void canBuildSnmpInterfaceLinkInstanceFromEventParameters() {
        // Mock the related objects and the DAOs
        NodeBean nodeA = new NodeBean();
        nodeA.setId(1);

        SnmpInterfaceBean snmpInterfaceA = new SnmpInterfaceBean();
        snmpInterfaceA.setIfIndex(1);

        NodeBean nodeZ = new NodeBean();
        nodeZ.setId(2);

        SnmpInterfaceBean snmpInterfaceZ = new SnmpInterfaceBean();
        snmpInterfaceZ.setIfIndex(2);

        NodeDao nodeDao = mock(NodeDao.class);
        when(nodeDao.getNodeByLabel("switch.fqdn.com")).thenReturn(nodeZ);

        SnmpInterfaceDao snmpInterfaceDao = mock(SnmpInterfaceDao.class);
        when(snmpInterfaceDao.findByNodeIdAndDescrOrName(1,"Ethernet1/1")).thenReturn(snmpInterfaceA);
        when(snmpInterfaceDao.findByNodeIdAndDescrOrName(2,"Ethernet2/1")).thenReturn(snmpInterfaceZ);

        ManagedObjectAlarmExt managedObjectAlarmdExt = new ManagedObjectAlarmExt(nodeDao, snmpInterfaceDao);

        // Tag the alarm
        AlarmBean alarm = new AlarmBean();
        alarm.setNode(nodeA);

        InMemoryEventBean event = new InMemoryEventBean("uei", "test");
        event.addParameter(ManagedObjectAlarmExt.A_IFDESCR_PARM_NAME, "Ethernet1/1");
        event.addParameter(ManagedObjectAlarmExt.Z_HOSTNAME_PARM_NAME, "switch.fqdn.com");
        event.addParameter(ManagedObjectAlarmExt.Z_IFDESCR_PARM_NAME, "Ethernet2/1");
        ManagedObjectAlarmExt.ManagedObject mo = managedObjectAlarmdExt.getManagedObjectFor(ManagedObjectType.SnmpInterfaceLink, alarm, event);

        // Verify
        assertThat(mo.getType(), equalTo(ManagedObjectType.SnmpInterfaceLink));
        assertThat(mo.getInstance(), equalTo("{\"aNodeCriteria\":\"1\",\"aIfIndex\":1,\"zNodeCriteria\":\"2\",\"zIfIndex\":2}"));

        // Make sure we can deserialize
        SnmpInterfaceLinkInstance snmpInterfaceLinkInstance = gson.fromJson(mo.getInstance(), SnmpInterfaceLinkInstance.class);
        assertThat(snmpInterfaceLinkInstance.getAIfIndex(), equalTo(1));
        assertThat(snmpInterfaceLinkInstance.getANodeCriteria(), equalTo("1"));
        assertThat(snmpInterfaceLinkInstance.getZIfIndex(), equalTo(2));
        assertThat(snmpInterfaceLinkInstance.getZNodeCriteria(), equalTo("2"));
    }
}
