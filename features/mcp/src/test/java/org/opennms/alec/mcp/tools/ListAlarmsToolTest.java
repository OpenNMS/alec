/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
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

package org.opennms.alec.mcp.tools;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.DatabaseEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.Severity;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ListAlarmsToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private AlarmDao alarmDao;
    private ListAlarmsTool tool;

    @Before
    public void setUp() {
        alarmDao = mock(AlarmDao.class);
        tool = new ListAlarmsTool(alarmDao, om);
    }

    private static Alarm alarm(int id, Severity severity, Integer nodeId, long lastEventMs) {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn(id);
        when(a.getSeverity()).thenReturn(severity);
        when(a.getLastEventTime()).thenReturn(new Date(lastEventMs));
        when(a.getFirstEventTime()).thenReturn(new Date(lastEventMs - 1000));
        when(a.getLogMessage()).thenReturn("alarm " + id);
        if (nodeId != null) {
            Node n = mock(Node.class);
            when(n.getId()).thenReturn(nodeId);
            when(n.getLabel()).thenReturn("node-" + nodeId);
            when(a.getNode()).thenReturn(n);
        }
        DatabaseEvent ev = mock(DatabaseEvent.class);
        when(ev.getUei()).thenReturn("uei.opennms.org/test/" + id);
        when(a.getLastEvent()).thenReturn(ev);
        return a;
    }

    private void givenAlarms(Alarm... alarms) {
        // Built before stubbing: mocks created inside thenReturn() trip Mockito's UnfinishedStubbing.
        when(alarmDao.getAlarms()).thenReturn(Arrays.asList(alarms));
    }

    private static List<Integer> ids(JsonNode out) {
        List<Integer> ids = new ArrayList<>();
        for (JsonNode a : out.get("alarms")) {
            ids.add(a.get("alarmId").asInt());
        }
        return ids;
    }

    @Test
    public void defaultsToWarningAndAboveNewestFirstIncludingCleared() throws Exception {
        givenAlarms(
                alarm(1, Severity.NORMAL, 5, 1_000L),
                alarm(2, Severity.WARNING, 5, 2_000L),
                alarm(3, Severity.CRITICAL, 6, 4_000L),
                alarm(4, Severity.CLEARED, 5, 3_000L),
                alarm(5, Severity.INDETERMINATE, 5, 5_000L));
        JsonNode out = tool.call(om.createObjectNode());
        assertThat(ids(out), equalTo(Arrays.asList(3, 4, 2)));
        assertThat(out.get("returned").asInt(), equalTo(3));
        assertThat("no node filter -> no nodeId in the output", out.has("nodeId"), is(false));
        JsonNode first = out.get("alarms").get(0);
        assertThat(first.get("severity").asText(), equalTo("CRITICAL"));
        assertThat(first.get("nodeId").asInt(), equalTo(6));
        assertThat(first.get("nodeLabel").asText(), equalTo("node-6"));
        assertThat(first.get("uei").asText(), equalTo("uei.opennms.org/test/3"));
        assertThat(first.get("logMessage").asText(), equalTo("alarm 3"));
        assertThat(first.get("acknowledged").asBoolean(), is(false));
        assertThat(first.has("isSituation"), is(false));
        assertThat(first.get("lastEventTime").asText(), equalTo("1970-01-01T00:00:04Z"));
    }

    @Test
    public void nodeIdFilterKeepsOnlyThatNode() throws Exception {
        givenAlarms(
                alarm(1, Severity.MAJOR, 5, 1_000L),
                alarm(2, Severity.MAJOR, 6, 2_000L),
                alarm(3, Severity.MAJOR, null, 3_000L));
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "6"));
        assertThat(ids(out), equalTo(Arrays.asList(2)));
        assertThat(out.get("nodeId").asInt(), equalTo(6));
    }

    @Test
    public void minSeverityRaisesTheBar() throws Exception {
        givenAlarms(
                alarm(1, Severity.WARNING, 5, 1_000L),
                alarm(2, Severity.MINOR, 5, 2_000L),
                alarm(3, Severity.MAJOR, 5, 3_000L),
                alarm(4, Severity.CLEARED, 5, 4_000L));
        JsonNode out = tool.call(om.createObjectNode().put("minSeverity", "major"));
        assertThat("cleared alarms are still included by default", ids(out), equalTo(Arrays.asList(4, 3)));
    }

    @Test
    public void includeClearedFalseDropsClearedAlarms() throws Exception {
        givenAlarms(
                alarm(1, Severity.MAJOR, 5, 1_000L),
                alarm(2, Severity.CLEARED, 5, 2_000L));
        JsonNode out = tool.call(om.createObjectNode().put("includeCleared", false));
        assertThat(ids(out), equalTo(Arrays.asList(1)));
    }

    @Test
    public void limitIsAppliedAfterOrderingAndClamped() throws Exception {
        List<Alarm> alarms = new ArrayList<>();
        for (int i = 1; i <= 150; i++) {
            alarms.add(alarm(i, Severity.MAJOR, 5, i * 1_000L));
        }
        when(alarmDao.getAlarms()).thenReturn(alarms);
        JsonNode out = tool.call(om.createObjectNode().put("limit", 2));
        assertThat(ids(out), equalTo(Arrays.asList(150, 149)));

        JsonNode capped = tool.call(om.createObjectNode().put("limit", 1000));
        assertThat(capped.get("returned").asInt(), equalTo(ListAlarmsTool.MAX_LIMIT));

        JsonNode dflt = tool.call(om.createObjectNode());
        assertThat(dflt.get("returned").asInt(), equalTo(ListAlarmsTool.DEFAULT_LIMIT));
    }

    @Test
    public void alarmsWithoutSeverityOrLastEventTimeAreHandled() throws Exception {
        Alarm noSeverity = alarm(1, null, 5, 1_000L);
        Alarm noTime = alarm(2, Severity.MAJOR, 5, 1_000L);
        when(noTime.getLastEventTime()).thenReturn(null);
        when(noTime.getFirstEventTime()).thenReturn(null);
        givenAlarms(noSeverity, noTime, alarm(3, Severity.MAJOR, 5, 2_000L));
        JsonNode out = tool.call(om.createObjectNode());
        assertThat(ids(out), equalTo(Arrays.asList(3, 2)));
        assertThat(out.get("alarms").get(1).get("lastEventTime").isNull(), is(true));
    }

    @Test
    public void situationAlarmsCarryRelatedAlarmCountAndManagedObject() throws Exception {
        Alarm sit = alarm(9, Severity.MAJOR, 5, 1_000L);
        when(sit.isSituation()).thenReturn(true);
        when(sit.getRelatedAlarms()).thenReturn(Arrays.asList(mock(Alarm.class), mock(Alarm.class)));
        when(sit.getManagedObjectType()).thenReturn("SnmpInterface");
        when(sit.getManagedObjectInstance()).thenReturn("Gi0/1");
        givenAlarms(sit);
        ObjectNode a = (ObjectNode) tool.call(om.createObjectNode()).get("alarms").get(0);
        assertThat(a.get("isSituation").asBoolean(), is(true));
        assertThat(a.get("relatedAlarms").asInt(), equalTo(2));
        assertThat(a.get("managedObject").asText(), equalTo("SnmpInterface/Gi0/1"));
    }

    @Test
    public void unknownSeverityIsAToolException() {
        when(alarmDao.getAlarms()).thenReturn(new ArrayList<>());
        try {
            tool.call(om.createObjectNode().put("minSeverity", "SCARY"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Unknown severity 'SCARY'"));
        }
    }

    @Test
    public void nonNumericNodeIdIsAToolException() {
        try {
            tool.call(om.createObjectNode().put("nodeId", "core-1"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("numeric node id"));
        }
    }
}
