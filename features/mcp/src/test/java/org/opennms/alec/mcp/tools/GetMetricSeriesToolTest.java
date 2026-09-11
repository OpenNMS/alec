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
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GetMetricSeriesToolTest {

    private static final long NOW = 1_700_000_000_000L;

    private final ObjectMapper om = new ObjectMapper();
    private FakeRestClient rest;
    private GetMetricSeriesTool tool;

    @Before
    public void setUp() {
        rest = new FakeRestClient();
        tool = new GetMetricSeriesTool(rest, om, () -> NOW);
    }

    private JsonNode args(int hours, int points) {
        return om.createObjectNode().put("resourceId", "node[5].nodeSnmp[]").put("attribute", "loadavg1")
                .put("hours", hours).put("points", points);
    }

    @Test
    public void postsAMeasurementsQueryWithTheExpectedShape() throws Exception {
        long start = NOW - 2 * 3_600_000L;
        long step = 1_800_000L;
        rest.postReturns("{\"step\":" + step + ",\"timestamps\":[" + start + "," + (start + step) + ","
                + (start + 2 * step) + "," + (start + 3 * step) + "],"
                + "\"columns\":[{\"values\":[1.5,\"NaN\",null,3.5]}]}");

        JsonNode out = tool.call(args(2, 4));

        assertThat(rest.lastPostPath, equalTo("measurements"));
        JsonNode req = rest.lastPostBody;
        assertThat(req.get("start").asLong(), equalTo(start));
        assertThat(req.get("end").asLong(), equalTo(NOW));
        assertThat(req.get("step").asLong(), equalTo(step));
        assertThat(req.get("maxrows").asInt(), equalTo(4));
        JsonNode source = req.get("source").get(0);
        assertThat(source.get("resourceId").asText(), equalTo("node[5].nodeSnmp[]"));
        assertThat(source.get("attribute").asText(), equalTo("loadavg1"));
        assertThat(source.get("label").asText(), equalTo("loadavg1"));
        assertThat(source.get("aggregation").asText(), equalTo("AVERAGE"));

        assertThat(out.get("resourceId").asText(), equalTo("node[5].nodeSnmp[]"));
        assertThat(out.get("attribute").asText(), equalTo("loadavg1"));
        assertThat(out.get("start").asText(), equalTo(java.time.Instant.ofEpochMilli(start).toString()));
        assertThat(out.get("end").asText(), equalTo(java.time.Instant.ofEpochMilli(NOW).toString()));
        assertThat(out.get("stepSeconds").asLong(), equalTo(1800L));
        JsonNode samples = out.get("samples");
        assertThat(samples.size(), equalTo(4));
        assertEquals(1.5d, samples.get(0).get("v").asDouble(), 0.0001d);
        assertThat("NaN string becomes null", samples.get(1).get("v").isNull(), is(true));
        assertThat("JSON null stays null", samples.get(2).get("v").isNull(), is(true));
        assertEquals(3.5d, samples.get(3).get("v").asDouble(), 0.0001d);
        assertThat(out.get("samplesWithData").asInt(), equalTo(2));
        assertEquals(1.5d, out.get("min").asDouble(), 0.0001d);
        assertEquals(3.5d, out.get("max").asDouble(), 0.0001d);
        assertEquals(2.5d, out.get("average").asDouble(), 0.0001d);
        assertEquals(1.5d, out.get("first").asDouble(), 0.0001d);
        assertEquals(3.5d, out.get("last").asDouble(), 0.0001d);
        assertThat(out.has("note"), is(false));
    }

    @Test
    public void defaultsAndClampsHoursAndPoints() throws Exception {
        rest.postReturns("{\"timestamps\":[],\"columns\":[{\"values\":[]}]}");
        tool.call(om.createObjectNode().put("resourceId", "r").put("attribute", "a"));
        JsonNode req = rest.lastPostBody;
        assertThat(req.get("end").asLong() - req.get("start").asLong(),
                equalTo(GetMetricSeriesTool.DEFAULT_HOURS * 3_600_000L));
        assertThat(req.get("maxrows").asInt(), equalTo(GetMetricSeriesTool.DEFAULT_POINTS));

        tool.call(args(100_000, 100_000));
        req = rest.lastPostBody;
        assertThat(req.get("end").asLong() - req.get("start").asLong(),
                equalTo(GetMetricSeriesTool.MAX_HOURS * 3_600_000L));
        assertThat(req.get("maxrows").asInt(), equalTo(GetMetricSeriesTool.MAX_POINTS));
    }

    @Test
    public void allGapsGivesANoteInsteadOfStats() throws Exception {
        rest.postReturns("{\"timestamps\":[1,2],\"columns\":[{\"values\":[\"NaN\",null]}]}");
        JsonNode out = tool.call(args(1, 2));
        assertThat(out.get("samplesWithData").asInt(), equalTo(0));
        assertThat(out.has("min"), is(false));
        assertThat(out.get("note").asText(), containsString("no data points"));
        assertThat(out.get("samples").size(), equalTo(2));
    }

    @Test
    public void noContentIsAToolException() {
        rest.postReturns(null);
        try {
            tool.call(args(3, 4));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No data for loadavg1 on node[5].nodeSnmp[] in the last 3h"));
        }
    }

    @Test
    public void resourceIdAndAttributeAreRequired() {
        try {
            tool.call(om.createObjectNode().put("attribute", "a"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("resourceId"));
        }
        try {
            tool.call(om.createObjectNode().put("resourceId", "r"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("attribute"));
        }
        assertThat(rest.lastPostPath, nullValue());
    }

    @Test
    public void numberParsesNumbersAndStringsAndSkipsGaps() throws Exception {
        assertThat(GetMetricSeriesTool.number(null), nullValue());
        assertThat(GetMetricSeriesTool.number(om.readTree("null")), nullValue());
        assertThat(GetMetricSeriesTool.number(om.readTree("\"NaN\"")), nullValue());
        assertThat(GetMetricSeriesTool.number(om.readTree("\"Infinity\"")), nullValue());
        assertThat(GetMetricSeriesTool.number(om.readTree("\"abc\"")), nullValue());
        assertEquals(2.5d, GetMetricSeriesTool.number(om.readTree("2.5")), 0.0001d);
        assertEquals(7d, GetMetricSeriesTool.number(om.readTree("\"7\"")), 0.0001d);
    }

    @Test
    public void roundKeepsThreeDecimalsBelowAThousand() {
        assertEquals(1.235d, GetMetricSeriesTool.round(1.23456d), 0.0000001d);
        assertEquals(1235d, GetMetricSeriesTool.round(1234.56d), 0.0000001d);
        assertEquals(-1235d, GetMetricSeriesTool.round(-1234.56d), 0.0000001d);
    }

    @Test
    public void isAvailableFollowsTheRestClient() {
        rest.configured = false;
        assertThat(tool.isAvailable(), is(false));
        assertThat(tool.getSpec().getName(), equalTo("get_metric_series"));
    }
}
