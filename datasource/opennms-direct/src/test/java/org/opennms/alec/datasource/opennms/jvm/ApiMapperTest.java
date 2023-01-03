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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.common.inventory.ManagedObjectType;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.immutables.ImmutableAlarm;
import org.opennms.integration.api.v1.model.immutables.ImmutableNode;

public class ApiMapperTest {

    private ApiMapper mapper;
    List<Situation> situations = new ArrayList<>();
    List<Alarm> alarms = new ArrayList<>();

    @Before
    public void setUp() {
        ScriptedInventoryService inventoryService = OpennmsDirectScriptedInventory.withDefaults();
        mapper = new ApiMapper(inventoryService);
        getAlarmsAndSituations();
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

    @Test
    public void toEventRejectedSituation() {
        Situation situation = ImmutableSituation.newBuilderNow().setStatus(Status.REJECTED).setDescription("Description").setId("123").build();
        InMemoryEvent result = mapper.toEvent(situation);
        assertThat(result.getNodeId(), equalTo(null));
        assertThat(result.getUei(), equalTo(ApiMapper.SITUATION_UEI));
        assertThat(result.getSource(), equalTo("alec"));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_ID_PARM_NAME), equalTo(Optional.of("123")));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_STATUS_PARM_NAME), equalTo(Optional.of(Status.REJECTED.toString())));
        assertThat(result.getParameterValue("situationDescr"), equalTo(Optional.of("Description")));
        assertThat(result.getParameterValue("situationLogMsg"), equalTo(Optional.of("situation rejected")));
        assertThat(result.getParameters().size(), equalTo(4));
    }

    @Test
    public void toEventAcceptedSituation() {
        InMemoryEvent result = mapper.toEvent(ImmutableSituation.newBuilderFrom(situations.get(1)).setStatus(Status.ACCEPTED).setDescription("description").build());
        assertThat(result.getNodeId(), equalTo(null));
        assertThat(result.getUei(), equalTo(ApiMapper.SITUATION_UEI));
        assertThat(result.getSource(), equalTo("alec"));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_ID_PARM_NAME), equalTo(Optional.of("11")));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_STATUS_PARM_NAME), equalTo(Optional.of(Status.ACCEPTED.toString())));
        assertThat(result.getParameterValue("situationDescr"), equalTo(Optional.of("description")));
        assertThat(result.getParameterValue("situationLogMsg"), equalTo(Optional.of("situation accepted")));
        assertThat(result.getParameters().size(), equalTo(8));
        assertThat(result.getSeverity(), equalTo(org.opennms.integration.api.v1.model.Severity.MAJOR));
    }

    @Test
    public void toEventCreatedSituation() {
        InMemoryEvent result = mapper.toEvent(situations.get(1));
        assertThat(result.getNodeId(), equalTo(null));
        assertThat(result.getUei(), equalTo(ApiMapper.SITUATION_UEI));
        assertThat(result.getSource(), equalTo("alec"));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_ID_PARM_NAME), equalTo(Optional.of("11")));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_STATUS_PARM_NAME), equalTo(Optional.of(Status.CREATED.toString())));
        assertThat(result.getParameterValue("situationDescr"), equalTo(Optional.of("description")));
        assertThat(result.getParameterValue("situationLogMsg"), equalTo(Optional.of("summary")));
        assertThat(result.getParameters().size(), equalTo(8));
        assertThat(result.getSeverity(), equalTo(org.opennms.integration.api.v1.model.Severity.NORMAL));
    }

    @Test
    public void toEventUserCreatedSituation() {
        InMemoryEvent result = mapper.toEvent(ImmutableSituation.newBuilderFrom(situations.get(2)).build());
        assertThat(result.getNodeId(), equalTo(null));
        assertThat(result.getUei(), equalTo(ApiMapper.SITUATION_UEI));
        assertThat(result.getSource(), equalTo("alec"));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_ID_PARM_NAME), equalTo(Optional.of("12")));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_STATUS_PARM_NAME), equalTo(Optional.of(Status.ADDED_ALARM.toString())));
        assertThat(result.getParameterValue("situationDescr"), equalTo(Optional.of("description")));
        assertThat(result.getParameterValue("situationLogMsg"), equalTo(Optional.of("feedback")));
        assertThat(result.getParameters().size(), equalTo(8));
        assertThat(result.getSeverity(), equalTo(org.opennms.integration.api.v1.model.Severity.NORMAL));
    }

    @Test
    public void toEventAddAlarmsSituation() {
        InMemoryEvent result = mapper.toEvent(ImmutableSituation.newBuilderFrom(situations.get(3)).build());
        assertThat(result.getNodeId(), equalTo(null));
        assertThat(result.getUei(), equalTo(ApiMapper.SITUATION_UEI));
        assertThat(result.getSource(), equalTo("alec"));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_ID_PARM_NAME), equalTo(Optional.of("13")));
        assertThat(result.getParameterValue(ApiMapper.SITUATION_STATUS_PARM_NAME), equalTo(Optional.of(Status.USER_CREATED.toString())));
        assertThat(result.getParameterValue("situationDescr"), equalTo(Optional.of("description\n" + "<p>ALEC Diagnostic: null</p>")));
        assertThat(result.getParameterValue("situationLogMsg"), equalTo(Optional.of("situation created 4 alarm(s) correlated")));
        assertThat(result.getParameters().size(), equalTo(8));
        assertThat(result.getSeverity(), equalTo(org.opennms.integration.api.v1.model.Severity.NORMAL));
    }

    private void getAlarmsAndSituations() {
        for (int i = 0; i < 10; i++) {
            alarms.add(org.opennms.alec.datasource.common.ImmutableAlarm.newBuilder()
                    .setId(String.valueOf(i))
                    .setReductionKey("reduction:" + i)
                    .setSeverity(org.opennms.alec.datasource.api.Severity.NORMAL)
                    .setDescription("description")
                    .setSummary("summary")
                    .setInventoryObjectId("inventoryObjectId")
                    .setInventoryObjectType("inventoryObjectType")
                    .setLongId(i).setReductionKey(String.valueOf(i)).build());
        }

        situations.add(ImmutableSituation.newBuilderNow()
                .setId("10")
                .setLongId(10)
                .addAlarm(alarms.get(0))
                .addAlarm(alarms.get(1))
                .setSeverity(org.opennms.alec.datasource.api.Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.CREATED)
                .build());
        situations.add(ImmutableSituation.newBuilderNow()
                .setId("11")
                .setLongId(11)
                .addAlarm(alarms.get(2))
                .addAlarm(alarms.get(3))
                .addAlarm(alarms.get(4))
                .addAlarm(alarms.get(5))
                .setSeverity(Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.CREATED)
                .build());
        situations.add(ImmutableSituation.newBuilderNow()
                .setId("12")
                .setLongId(12)
                .addAlarm(alarms.get(2))
                .addAlarm(alarms.get(3))
                .addAlarm(alarms.get(4))
                .addAlarm(alarms.get(5))
                .setSeverity(Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.ADDED_ALARM)
                .addFeedback("feedback")
                .setDescription("description")
                .build());
        situations.add(ImmutableSituation.newBuilderNow()
                .setId("13")
                .setLongId(13)
                .addAlarm(alarms.get(2))
                .addAlarm(alarms.get(3))
                .addAlarm(alarms.get(4))
                .addAlarm(alarms.get(5))
                .setSeverity(Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.USER_CREATED)
                .addFeedback("feedback")
                .setDescription("description")
                .build());
    }
}