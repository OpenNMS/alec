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
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ListSituationsToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private SituationDatasource datasource;
    private ListSituationsTool tool;

    @Before
    public void setUp() {
        datasource = mock(SituationDatasource.class);
        tool = new ListSituationsTool(datasource, om);
    }

    private void givenSituations(Situation... situations) throws Exception {
        // Built before stubbing: mocks created inside thenReturn() trip Mockito's UnfinishedStubbing.
        when(datasource.getSituations()).thenReturn(Arrays.asList(situations));
    }

    private static List<String> ids(JsonNode out) {
        List<String> ids = new ArrayList<>();
        for (JsonNode s : out.get("situations")) {
            ids.add(s.get("situationId").asText());
        }
        return ids;
    }

    @Test
    public void listsOpenSituationsNewestFirstWithoutAlarms() throws Exception {
        givenSituations(
                SituationFixtures.situation("s-old", 1, Status.CREATED, 1_000L,
                        SituationFixtures.alarm("a1", 900L, 5L, "x")),
                SituationFixtures.situation("s-accepted", 2, Status.ACCEPTED, 5_000L),
                SituationFixtures.situation("s-new", 3, Status.ADDED_ALARM, 3_000L),
                SituationFixtures.situation("s-rejected", 4, Status.REJECTED, 4_000L),
                SituationFixtures.situation("s-nostatus", 0, null, 2_000L));

        JsonNode out = tool.call(om.createObjectNode());
        assertThat(out.get("total").asInt(), equalTo(5));
        assertThat(out.get("returned").asInt(), equalTo(3));
        assertThat(ids(out), equalTo(Arrays.asList("s-new", "s-nostatus", "s-old")));

        JsonNode newest = out.get("situations").get(0);
        assertThat(newest.get("numericId").asLong(), equalTo(3L));
        assertThat(newest.get("status").asText(), equalTo("ADDED_ALARM"));
        assertThat(newest.get("severity").asText(), equalTo("MAJOR"));
        assertThat(newest.get("created").asText(), equalTo("1970-01-01T00:00:03Z"));
        assertThat(newest.get("lastUpdated").asText(), equalTo("1970-01-01T00:00:03.500Z"));
        assertThat(newest.get("alarmCount").asInt(), equalTo(0));
        assertThat("no alarm detail in the list view", newest.has("alarms"), is(false));

        JsonNode oldest = out.get("situations").get(2);
        assertThat(oldest.get("alarmCount").asInt(), equalTo(1));
        assertThat(oldest.has("alarms"), is(false));
        JsonNode noStatus = out.get("situations").get(1);
        assertThat(noStatus.get("status").isNull(), is(true));
        assertThat("0 long id is omitted", noStatus.has("numericId"), is(false));
    }

    @Test
    public void includeClosedListsAcceptedAndRejected() throws Exception {
        givenSituations(
                SituationFixtures.situation("s-accepted", 2, Status.ACCEPTED, 5_000L),
                SituationFixtures.situation("s-rejected", 4, Status.REJECTED, 4_000L),
                SituationFixtures.situation("s-open", 3, Status.CREATED, 3_000L));
        JsonNode out = tool.call(om.createObjectNode().put("includeClosed", true));
        assertThat(ids(out), equalTo(Arrays.asList("s-accepted", "s-rejected", "s-open")));
        assertThat(out.get("returned").asInt(), equalTo(3));
    }

    @Test
    public void limitCapsTheResultButNotTheTotal() throws Exception {
        List<Situation> many = new ArrayList<>();
        for (int i = 0; i < 30; i++) {
            many.add(SituationFixtures.situation("s-" + i, i + 1, Status.CREATED, i * 1_000L));
        }
        when(datasource.getSituations()).thenReturn(many);
        JsonNode out = tool.call(om.createObjectNode().put("limit", 2));
        assertThat(out.get("total").asInt(), equalTo(30));
        assertThat(ids(out), equalTo(Arrays.asList("s-29", "s-28")));

        JsonNode dflt = tool.call(om.createObjectNode());
        assertThat(dflt.get("returned").asInt(), equalTo(ListSituationsTool.DEFAULT_LIMIT));
    }

    @Test
    public void isOpenTreatsNullStatusAsOpen() {
        assertThat(ListSituationsTool.isOpen(SituationFixtures.situation("a", 1, null, 0)), is(true));
        assertThat(ListSituationsTool.isOpen(SituationFixtures.situation("a", 1, Status.CREATED, 0)), is(true));
        assertThat(ListSituationsTool.isOpen(SituationFixtures.situation("a", 1, Status.ACCEPTED, 0)), is(false));
        assertThat(ListSituationsTool.isOpen(SituationFixtures.situation("a", 1, Status.REJECTED, 0)), is(false));
    }

    @Test
    public void interruptedReadIsAToolException() throws Exception {
        when(datasource.getSituations()).thenThrow(new InterruptedException("stop"));
        try {
            tool.call(om.createObjectNode());
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Interrupted"));
            assertThat("interrupt flag restored", Thread.interrupted(), is(true));
        }
    }
}
