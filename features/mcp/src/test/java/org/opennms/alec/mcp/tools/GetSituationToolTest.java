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
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GetSituationToolTest {

    private static final String UUID_ID = "uei.opennms.org/alarms/situation:5c1f-abc";

    private final ObjectMapper om = new ObjectMapper();
    private SituationDatasource datasource;
    private GetSituationTool tool;
    private Situation target;

    @Before
    public void setUp() throws Exception {
        datasource = mock(SituationDatasource.class);
        tool = new GetSituationTool(datasource, om);
        target = SituationFixtures.situation(UUID_ID, 42L, Status.CREATED, 10_000L,
                SituationFixtures.alarm("a2", 9_000L, 6L, "later"),
                SituationFixtures.alarm("a1", 8_000L, 5L, "earlier"));
        when(target.getDescription()).thenReturn("two alarms");
        when(target.getDiagnosticText()).thenReturn("diag");
        when(target.getFeedback()).thenReturn(Arrays.asList("fb1"));
        Situation other = SituationFixtures.situation("other-uuid", 7L, Status.CREATED, 1_000L);
        when(datasource.getSituations()).thenReturn(Arrays.asList(other, target));
    }

    @Test
    public void findsByInternalIdAndRendersAlarmsOldestFirst() throws Exception {
        JsonNode out = tool.call(om.createObjectNode().put("situationId", UUID_ID));
        assertThat(out.get("situationId").asText(), equalTo(UUID_ID));
        assertThat(out.get("numericId").asLong(), equalTo(42L));
        assertThat(out.get("status").asText(), equalTo("CREATED"));
        assertThat(out.get("description").asText(), equalTo("two alarms"));
        assertThat(out.get("diagnostic").asText(), equalTo("diag"));
        assertThat(out.get("feedback").get(0).asText(), equalTo("fb1"));
        assertThat(out.get("alarmCount").asInt(), equalTo(2));
        JsonNode alarms = out.get("alarms");
        assertThat(alarms.size(), equalTo(2));
        assertThat("sorted by time ascending", alarms.get(0).get("alarmId").asText(), equalTo("a1"));
        assertThat(alarms.get(0).get("nodeId").asLong(), equalTo(5L));
        assertThat(alarms.get(0).get("nodeLabel").asText(), equalTo("node-5"));
        assertThat(alarms.get(0).get("object").asText(), equalTo("SnmpInterface/Gi0/a1"));
        assertThat(alarms.get(0).get("summary").asText(), equalTo("earlier"));
        assertThat(alarms.get(0).get("severity").asText(), equalTo("MINOR"));
        assertThat(alarms.get(0).get("cleared").asBoolean(), is(false));
        assertThat(alarms.get(0).get("firstTime").asText(), equalTo("1970-01-01T00:00:07.900Z"));
        assertThat(alarms.get(0).get("lastTime").asText(), equalTo("1970-01-01T00:00:08Z"));
        assertThat(alarms.get(1).get("alarmId").asText(), equalTo("a2"));
        verify(datasource, never()).getSituation(anyInt());
    }

    @Test
    public void findsByNumericIdViaGetLongId() throws Exception {
        JsonNode out = tool.call(om.createObjectNode().put("situationId", "42"));
        assertThat(out.get("situationId").asText(), equalTo(UUID_ID));
        verify(datasource, never()).getSituation(anyInt());
    }

    @Test
    public void numericIdGivenAsANumberWorks() throws Exception {
        JsonNode out = tool.call(om.createObjectNode().put("situationId", 42));
        assertThat(out.get("situationId").asText(), equalTo(UUID_ID));
    }

    @Test
    public void numericIdNotInTheListFallsBackToGetSituation() throws Exception {
        Situation persisted = SituationFixtures.situation("db-uuid", 99L, Status.ACCEPTED, 2_000L);
        when(datasource.getSituation(99)).thenReturn(Optional.of(persisted));
        JsonNode out = tool.call(om.createObjectNode().put("situationId", "99"));
        assertThat(out.get("situationId").asText(), equalTo("db-uuid"));
        assertThat(out.get("status").asText(), equalTo("ACCEPTED"));
        verify(datasource).getSituation(99);
    }

    @Test
    public void unknownIdsAreAToolException() throws Exception {
        when(datasource.getSituation(123)).thenReturn(Optional.empty());
        try {
            tool.call(om.createObjectNode().put("situationId", "123"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No situation with id '123'"));
        }
        try {
            tool.call(om.createObjectNode().put("situationId", "no-such-uuid"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No situation with id 'no-such-uuid'"));
        }
        verify(datasource, never()).getSituation(-1);
    }

    @Test
    public void situationIdIsRequired() {
        try {
            tool.call(om.createObjectNode());
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Missing required argument 'situationId'"));
        }
        JsonNode required = tool.getSpec().parametersSchema(om).get("required");
        assertThat(required.get(0).asText(), equalTo("situationId"));
    }

    @Test
    public void interruptedReadIsAToolException() throws Exception {
        when(datasource.getSituations()).thenThrow(new InterruptedException("stop"));
        try {
            tool.call(om.createObjectNode().put("situationId", "1"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Interrupted"));
            assertThat(Thread.interrupted(), is(true));
        }
    }
}
