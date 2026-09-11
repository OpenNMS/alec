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

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.mcp.McpMetrics;
import org.opennms.alec.mcp.StubTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.DefaultToolRegistry;
import org.opennms.alec.mcp.ToolRegistry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AlecStatusToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private SituationDatasource datasource;
    private ToolRegistry registry;
    private FakeRestClient rest;
    private AlecStatusTool tool;

    @Before
    public void setUp() {
        datasource = mock(SituationDatasource.class);
        registry = new DefaultToolRegistry(new McpMetrics(), om);
        rest = new FakeRestClient();
        tool = new AlecStatusTool(datasource, registry, rest, om);
    }

    private void givenSituations(Situation... situations) throws Exception {
        // Built before stubbing: mocks created inside thenReturn() trip Mockito's UnfinishedStubbing.
        when(datasource.getSituations()).thenReturn(Arrays.asList(situations));
    }

    @Test
    public void specTakesNoArguments() {
        assertThat(tool.getSpec().getName(), equalTo(AlecStatusTool.NAME));
        assertThat(AlecStatusTool.NAME, equalTo("alec_status"));
        assertThat(tool.getSpec().getParams().isEmpty(), is(true));
        assertThat(tool.isAvailable(), is(true));
    }

    @Test
    public void reportsSituationCountsRestStateAndAvailableTools() throws Exception {
        givenSituations(
                SituationFixtures.situation("a", 1, Status.CREATED, 1L),
                SituationFixtures.situation("b", 2, Status.ACCEPTED, 2L),
                SituationFixtures.situation("c", 3, null, 3L),
                SituationFixtures.situation("d", 4, Status.REJECTED, 4L));
        registry.addTool(StubTool.returning("list_node_alarms", "{}"));
        registry.addTool(StubTool.unavailable("get_metric_series"));
        registry.addTool(tool);
        registry.addTool(StubTool.returning("get_node_inventory", "{}"));
        rest.configured = true;

        JsonNode out = tool.call(om.createObjectNode());
        assertThat(out.get("alec").asText(), equalTo("ok"));
        assertThat(out.get("situations").asLong(), equalTo(4L));
        assertThat(out.get("openSituations").asLong(), equalTo(2L));
        assertThat(out.get("opennmsRestConfigured").asBoolean(), is(true));
        JsonNode tools = out.get("tools");
        assertThat(tools.size(), equalTo(3));
        assertThat(tools.get(0).asText(), equalTo("alec_status"));
        assertThat(tools.get(1).asText(), equalTo("get_node_inventory"));
        assertThat(tools.get(2).asText(), equalTo("list_node_alarms"));
    }

    @Test
    public void reportsRestNotConfigured() throws Exception {
        givenSituations();
        rest.configured = false;
        JsonNode out = tool.call(null);
        assertThat(out.get("situations").asLong(), equalTo(0L));
        assertThat(out.get("opennmsRestConfigured").asBoolean(), is(false));
        assertThat(out.get("tools").size(), equalTo(0));
    }

    @Test
    public void interruptedReadIsAToolException() throws Exception {
        when(datasource.getSituations()).thenThrow(new InterruptedException("stop"));
        try {
            tool.call(om.createObjectNode());
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Interrupted"));
            assertThat(Thread.interrupted(), is(true));
        }
    }
}
