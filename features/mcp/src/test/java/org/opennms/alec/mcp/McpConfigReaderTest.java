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

package org.opennms.alec.mcp;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class McpConfigReaderTest {

    private InMemoryKVStore kv;
    private McpConfigReader reader;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        reader = new KvMcpConfigReader(kv, new ObjectMapper());
    }

    @Test
    public void emptyStoreReadsAsDisabled() {
        McpConfig c = reader.read();
        assertThat(c == McpConfig.DISABLED, is(true));
        assertThat(c.isToolsEnabled(), is(false));
        assertThat(c.hasOpennmsCredentials(), is(false));
        assertThat(c.getOpennmsUrl(), equalTo(""));
        assertThat(c.getEffectiveOpennmsUrl(), equalTo(McpConfig.DEFAULT_OPENNMS_URL));
    }

    @Test
    public void fieldsAreParsedFromTheSharedLlmConfigRecord() {
        kv.put(KvMcpConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-x\",\"toolsEnabled\":true,"
                        + "\"opennmsUrl\":\" http://nms:8980/opennms \",\"opennmsUsername\":\"admin\","
                        + "\"opennmsPassword\":\"secret\"}",
                KvMcpConfigReader.CONFIG_CONTEXT);
        McpConfig c = reader.read();
        assertThat(c.isToolsEnabled(), is(true));
        assertThat("values are trimmed", c.getOpennmsUrl(), equalTo("http://nms:8980/opennms"));
        assertThat(c.getOpennmsUsername(), equalTo("admin"));
        assertThat(c.getOpennmsPassword(), equalTo("secret"));
        assertThat(c.hasOpennmsCredentials(), is(true));
    }

    @Test
    public void missingFieldsDefaultToOffAndBlank() {
        kv.put(KvMcpConfigReader.CONFIG_KEY, "{\"enabled\":true,\"apiKey\":\"sk-x\"}",
                KvMcpConfigReader.CONFIG_CONTEXT);
        McpConfig c = reader.read();
        assertThat(c.isToolsEnabled(), is(false));
        assertThat(c.getOpennmsUsername(), equalTo(""));
        assertThat(c.getOpennmsPassword(), equalTo(""));
        assertThat(c.hasOpennmsCredentials(), is(false));
    }

    @Test
    public void malformedJsonReadsAsDisabled() {
        kv.put(KvMcpConfigReader.CONFIG_KEY, "{not json", KvMcpConfigReader.CONFIG_CONTEXT);
        assertThat(reader.read() == McpConfig.DISABLED, is(true));
    }

    @Test
    public void readsFreshOnEveryCall() {
        assertThat(reader.read().isToolsEnabled(), is(false));
        kv.put(KvMcpConfigReader.CONFIG_KEY, "{\"toolsEnabled\":true}", KvMcpConfigReader.CONFIG_CONTEXT);
        assertThat(reader.read().isToolsEnabled(), is(true));
    }

    @Test
    public void effectiveUrlDefaultsWhenBlankAndTrimsTrailingSlashes() {
        assertThat(new McpConfig(false, "", "u", "p").getEffectiveOpennmsUrl(),
                equalTo("http://localhost:8980/opennms"));
        assertThat(new McpConfig(false, null, "u", "p").getEffectiveOpennmsUrl(),
                equalTo(McpConfig.DEFAULT_OPENNMS_URL));
        assertThat(new McpConfig(false, "http://nms:8980/opennms/", "u", "p").getEffectiveOpennmsUrl(),
                equalTo("http://nms:8980/opennms"));
        assertThat(new McpConfig(false, "http://nms:8980/opennms///", "u", "p").getEffectiveOpennmsUrl(),
                equalTo("http://nms:8980/opennms"));
        assertThat("the raw value keeps the slash", new McpConfig(false, "http://nms/opennms/", "u", "p")
                .getOpennmsUrl(), equalTo("http://nms/opennms/"));
    }

    @Test
    public void hasCredentialsRequiresBothUsernameAndPassword() {
        assertThat(new McpConfig(true, "", "admin", "").hasOpennmsCredentials(), is(false));
        assertThat(new McpConfig(true, "", "", "pw").hasOpennmsCredentials(), is(false));
        assertThat(new McpConfig(true, "", "  ", " pw ").hasOpennmsCredentials(), is(false));
        assertThat(new McpConfig(true, "", "admin", "pw").hasOpennmsCredentials(), is(true));
        assertThat(new McpConfig(true, "", null, null).hasOpennmsCredentials(), is(false));
    }

    @Test
    public void toStringNeverContainsThePassword() {
        String s = new McpConfig(true, "http://nms/opennms", "admin", "hunter2").toString();
        assertThat(s, not(containsString("hunter2")));
        assertThat(s, containsString("passwordPresent=true"));
        assertThat(s, containsString("opennmsUsername=admin"));
    }

    @Test
    public void contextAndKeyMatchTheUiWriter() {
        assertThat(KvMcpConfigReader.CONFIG_CONTEXT, equalTo("ALEC_CONFIG"));
        assertThat(KvMcpConfigReader.CONFIG_KEY, equalTo("LLM_CONFIG"));
    }
}
