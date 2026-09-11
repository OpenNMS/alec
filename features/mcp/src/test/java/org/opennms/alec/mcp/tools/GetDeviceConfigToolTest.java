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
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GetDeviceConfigToolTest {

    private static final String LATEST_PATH = "device-config/latest?limit=25&search=core-1";
    private static final String LATEST = "["
            + "{\"id\":11,\"nodeId\":5,\"ipAddress\":\"10.0.0.1\",\"configType\":\"default\",\"backupStatus\":\"SUCCESS\","
            + "\"lastBackupDate\":1700000000000,\"lastSucceededDate\":1700000000000,\"lastFailedDate\":null,"
            + "\"nextScheduledBackupDate\":\"2023-11-15T00:00:00Z\"},"
            + "{\"id\":12,\"nodeId\":6,\"ipAddress\":\"10.0.0.2\",\"configType\":\"default\",\"backupStatus\":\"FAILED\","
            + "\"failureReason\":\"timeout\"}"
            + "]";
    private static final String CONFIG = "hostname r1\n"
            + "enable secret 5 $1$abcd$hash\n"
            + "snmp-server community public RO\n"
            + "username admin password 7 0822455D0A16\n"
            + "interface Gi0/0\n"
            + " description uplink\n";

    private final ObjectMapper om = new ObjectMapper();
    private FakeRestClient rest;
    private GetDeviceConfigTool tool;

    @Before
    public void setUp() {
        rest = new FakeRestClient();
        NodeDao nodeDao = mock(NodeDao.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("core-1");
        when(nodeDao.getNodeById(5)).thenReturn(node);
        tool = new GetDeviceConfigTool(rest, nodeDao, om);
    }

    @Test
    public void listsStatusForTheNodeOnlyWithoutContentByDefault() throws Exception {
        rest.onGet(LATEST_PATH, LATEST);
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(rest.getPaths, equalTo(java.util.Collections.singletonList(LATEST_PATH)));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.get("label").asText(), equalTo("core-1"));
        JsonNode configs = out.get("configurations");
        assertThat("the other node's entry is filtered out", configs.size(), equalTo(1));
        JsonNode c = configs.get(0);
        assertThat(c.get("id").asLong(), equalTo(11L));
        assertThat(c.get("ipAddress").asText(), equalTo("10.0.0.1"));
        assertThat(c.get("configType").asText(), equalTo("default"));
        assertThat(c.get("backupStatus").asText(), equalTo("SUCCESS"));
        assertThat("epoch millis rendered as ISO", c.get("lastBackup").asText(), equalTo("2023-11-14T22:13:20Z"));
        assertThat(c.get("lastSucceeded").asText(), equalTo("2023-11-14T22:13:20Z"));
        assertThat(c.get("lastFailed").isNull(), is(true));
        assertThat("ISO strings pass through", c.get("nextScheduledBackup").asText(), equalTo("2023-11-15T00:00:00Z"));
        assertThat(c.has("failureReason"), is(false));
        assertThat(c.has("config"), is(false));
        assertThat(out.has("note"), is(false));
    }

    @Test
    public void failureReasonIsIncludedWhenPresent() throws Exception {
        NodeDao nodeDao = mock(NodeDao.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(6);
        when(node.getLabel()).thenReturn("core-1");
        when(nodeDao.getNodeById(6)).thenReturn(node);
        tool = new GetDeviceConfigTool(rest, nodeDao, om);
        rest.onGet(LATEST_PATH, LATEST);
        JsonNode c = tool.call(om.createObjectNode().put("nodeId", "6")).get("configurations").get(0);
        assertThat(c.get("id").asLong(), equalTo(12L));
        assertThat(c.get("failureReason").asText(), equalTo("timeout"));
        assertThat(c.get("lastBackup").isNull(), is(true));
    }

    @Test
    public void includeContentFetchesAndRedactsTheConfig() throws Exception {
        rest.onGet(LATEST_PATH, LATEST);
        rest.onGet("device-config/11", "{\"id\":11,\"config\":" + om.writeValueAsString(CONFIG) + "}");
        JsonNode c = tool.call(om.createObjectNode().put("nodeId", "5").put("includeContent", true))
                .get("configurations").get(0);
        assertThat(rest.getPaths.get(1), equalTo("device-config/11"));
        assertThat(c.get("configLength").asInt(), equalTo(CONFIG.length()));
        String config = c.get("config").asText();
        assertThat(config, containsString("hostname r1\n"));
        assertThat(config, containsString("interface Gi0/0\n description uplink\n"));
        assertThat("keyword kept, value masked", config, containsString("enable secret <redacted>"));
        assertThat(config, containsString("snmp-server community <redacted>"));
        assertThat(config, containsString("username admin <redacted>"));
        assertThat(config, not(containsString("$1$abcd$hash")));
        assertThat(config, not(containsString("public")));
        assertThat(config, not(containsString("0822455D0A16")));
    }

    @Test
    public void includeContentUsesInlineConfigWhenTheListingCarriesIt() throws Exception {
        rest.onGet(LATEST_PATH, "[{\"id\":11,\"nodeId\":5,\"config\":\"hostname inline\\n\"}]");
        JsonNode c = tool.call(om.createObjectNode().put("nodeId", "5").put("includeContent", "true"))
                .get("configurations").get(0);
        assertThat(rest.getPaths.size(), equalTo(1));
        // redact() re-joins lines with a trailing newline per segment, so a config that already
        // ends in a newline gains one more.
        assertThat(c.get("config").asText(), equalTo("hostname inline\n\n"));
    }

    @Test
    public void configContentIsCapped() throws Exception {
        StringBuilder big = new StringBuilder();
        for (int i = 0; i < GetDeviceConfigTool.MAX_CONFIG_CHARS + 100; i++) {
            big.append('a');
        }
        rest.onGet(LATEST_PATH, "[{\"id\":11,\"nodeId\":5,\"config\":\"" + big + "\"}]");
        JsonNode c = tool.call(om.createObjectNode().put("nodeId", "5").put("includeContent", true))
                .get("configurations").get(0);
        assertThat(c.get("configLength").asInt(), equalTo(GetDeviceConfigTool.MAX_CONFIG_CHARS + 100));
        assertThat(c.get("config").asText().length(), equalTo(GetDeviceConfigTool.MAX_CONFIG_CHARS + 3));
        assertThat(c.get("config").asText().endsWith("..."), is(true));
    }

    @Test
    public void emptyConfigIsOmitted() throws Exception {
        rest.onGet(LATEST_PATH, "[{\"id\":11,\"nodeId\":5,\"config\":\"\"}]");
        JsonNode c = tool.call(om.createObjectNode().put("nodeId", "5").put("includeContent", true))
                .get("configurations").get(0);
        assertThat(c.has("config"), is(false));
        assertThat(c.has("configLength"), is(false));
    }

    @Test
    public void noBackupsGivesANote() throws Exception {
        rest.onGet(LATEST_PATH, "[]");
        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("configurations").size(), equalTo(0));
        assertThat(out.get("note").asText(), containsString("No device configuration backups"));

        rest.onGet(LATEST_PATH, "{\"unexpected\":true}");
        assertThat(tool.call(om.createObjectNode().put("nodeId", "5")).get("note").asText(),
                containsString("No device configuration backups"));
    }

    @Test
    public void searchTermIsUrlEncoded() throws Exception {
        NodeDao nodeDao = mock(NodeDao.class);
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("core 1&2");
        when(nodeDao.getNodeById(5)).thenReturn(node);
        tool = new GetDeviceConfigTool(rest, nodeDao, om);
        rest.onGet("device-config/latest?limit=25&search=core+1%262", "[]");
        tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(rest.getPaths.get(0), equalTo("device-config/latest?limit=25&search=core+1%262"));
    }

    @Test
    public void redactMasksSecretLinesButKeepsTheKeyword() {
        String redacted = GetDeviceConfigTool.redact(CONFIG);
        String[] lines = redacted.split("\n", -1);
        assertThat(lines[0], equalTo("hostname r1"));
        assertThat(lines[1], equalTo("enable secret <redacted>"));
        assertThat(lines[2], equalTo("snmp-server community <redacted>"));
        assertThat(lines[3], equalTo("username admin <redacted>"));
        assertThat(lines[4], equalTo("interface Gi0/0"));
        assertThat("indentation of non-secret lines preserved", lines[5], equalTo(" description uplink"));
        assertThat("trailing newline preserved as an empty final segment", lines[6], equalTo(""));
        assertThat(GetDeviceConfigTool.redact("password"), equalTo("password <redacted>\n"));
        assertThat(GetDeviceConfigTool.redact("tacacs-server host 1.2.3.4 key K3Y"), equalTo("tacacs-server host <redacted>\n"));
        assertThat(GetDeviceConfigTool.redact("no problems here"), equalTo("no problems here\n"));
        assertThat("case-insensitive", GetDeviceConfigTool.redact("PASSWORD x"), equalTo("PASSWORD x <redacted>\n"));
    }

    @Test
    public void isAvailableFollowsTheRestClient() {
        rest.configured = false;
        assertThat(tool.isAvailable(), is(false));
        assertThat(tool.getSpec().getName(), equalTo("get_device_config"));
    }
}
