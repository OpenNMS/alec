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

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.IpInterface;
import org.opennms.integration.api.v1.model.MetaData;
import org.opennms.integration.api.v1.model.MonitoredService;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.NodeAssetRecord;
import org.opennms.integration.api.v1.model.SnmpInterface;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GetNodeToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private NodeDao nodeDao;
    private GetNodeTool tool;

    @Before
    public void setUp() {
        nodeDao = mock(NodeDao.class);
        tool = new GetNodeTool(nodeDao, om);
    }

    @Test
    public void specDeclaresNodeIdAndNodeLabel() {
        assertThat(tool.getSpec().getName(), equalTo("get_node"));
        JsonNode props = tool.getSpec().parametersSchema(om).get("properties");
        assertThat(props.has("nodeId"), is(true));
        assertThat(props.has("nodeLabel"), is(true));
        assertThat(tool.isAvailable(), is(true));
    }

    @Test
    public void rendersInventoryDetails() throws Exception {
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("core-1");
        when(node.getForeignSource()).thenReturn("Routers");
        when(node.getForeignId()).thenReturn("r1");
        when(node.getLocation()).thenReturn("Default");
        when(node.getCategories()).thenReturn(Arrays.asList("Routers", "Production"));

        NodeAssetRecord asset = mock(NodeAssetRecord.class);
        when(asset.getVendor()).thenReturn("Cisco");
        when(asset.getModelNumber()).thenReturn("ISR4451");
        when(asset.getOperatingSystem()).thenReturn("IOS-XE 17.3");
        when(asset.getDescription()).thenReturn("  ");
        when(node.getAssetRecord()).thenReturn(asset);

        SnmpInterface snmp = mock(SnmpInterface.class);
        when(snmp.getIfIndex()).thenReturn(1);
        when(snmp.getIfName()).thenReturn("Gi0/0");
        when(snmp.getIfDescr()).thenReturn("GigabitEthernet0/0");
        MonitoredService icmp = mock(MonitoredService.class);
        when(icmp.getName()).thenReturn("ICMP");
        when(icmp.getStatus()).thenReturn(true);
        MonitoredService http = mock(MonitoredService.class);
        when(http.getName()).thenReturn("HTTP");
        when(http.getStatus()).thenReturn(false);
        IpInterface ip = mock(IpInterface.class);
        when(ip.getIpAddress()).thenReturn(InetAddress.getByName("10.0.0.1"));
        when(ip.getSnmpInterface()).thenReturn(Optional.of(snmp));
        when(ip.getMonitoredServices()).thenReturn(Arrays.asList(icmp, http));
        when(node.getIpInterfaces()).thenReturn(Arrays.asList(ip));

        SnmpInterface sameName = mock(SnmpInterface.class);
        when(sameName.getIfIndex()).thenReturn(2);
        when(sameName.getIfName()).thenReturn("Gi0/1");
        when(sameName.getIfDescr()).thenReturn("Gi0/1");
        when(node.getSnmpInterfaces()).thenReturn(Arrays.asList(snmp, sameName));

        MetaData md = mock(MetaData.class);
        when(md.getContext()).thenReturn("requisition");
        when(md.getKey()).thenReturn("role");
        when(md.getValue()).thenReturn("core");
        when(node.getMetaData()).thenReturn(Arrays.asList(md));

        when(nodeDao.getNodeById(5)).thenReturn(node);

        JsonNode out = tool.call(om.createObjectNode().put("nodeId", "5"));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.get("label").asText(), equalTo("core-1"));
        assertThat(out.get("foreignSource").asText(), equalTo("Routers"));
        assertThat(out.get("foreignId").asText(), equalTo("r1"));
        assertThat(out.get("location").asText(), equalTo("Default"));
        assertThat(out.get("categories").size(), equalTo(2));
        assertThat(out.get("categories").get(1).asText(), equalTo("Production"));

        JsonNode a = out.get("asset");
        assertThat(a.get("vendor").asText(), equalTo("Cisco"));
        assertThat(a.get("model").asText(), equalTo("ISR4451"));
        assertThat(a.get("operatingSystem").asText(), equalTo("IOS-XE 17.3"));
        assertThat("blank asset fields are omitted", a.has("description"), is(false));
        assertThat(a.has("region"), is(false));

        JsonNode ips = out.get("ipInterfaces");
        assertThat(ips.size(), equalTo(1));
        assertThat(ips.get(0).get("address").asText(), equalTo("10.0.0.1"));
        assertThat(ips.get(0).get("ifName").asText(), equalTo("Gi0/0"));
        assertThat(ips.get(0).get("services").get(0).asText(), equalTo("ICMP"));
        assertThat(ips.get(0).get("services").get(1).asText(), equalTo("HTTP (down)"));

        JsonNode snmps = out.get("snmpInterfaces");
        assertThat(snmps.size(), equalTo(2));
        assertThat(snmps.get(0).get("ifIndex").asInt(), equalTo(1));
        assertThat(snmps.get(0).get("ifName").asText(), equalTo("Gi0/0"));
        assertThat(snmps.get(0).get("ifDescr").asText(), equalTo("GigabitEthernet0/0"));
        assertThat("ifDescr equal to ifName is omitted", snmps.get(1).has("ifDescr"), is(false));

        assertThat(out.get("metadata").get("requisition:role").asText(), equalTo("core"));
    }

    @Test
    public void minimalNodeOmitsEmptySections() throws Exception {
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("bare");
        when(nodeDao.getNodeByLabel("bare")).thenReturn(node);

        JsonNode out = tool.call(om.createObjectNode().put("nodeLabel", "bare"));
        assertThat(out.get("nodeId").asInt(), equalTo(5));
        assertThat(out.has("foreignSource"), is(false));
        assertThat(out.has("categories"), is(false));
        assertThat(out.has("asset"), is(false));
        assertThat(out.has("ipInterfaces"), is(false));
        assertThat(out.has("snmpInterfaces"), is(false));
        assertThat(out.has("metadata"), is(false));
        assertThat("location is always present (null when unknown)", out.has("location"), is(true));
    }

    @Test
    public void interfaceListsAreCapped() throws Exception {
        Node node = mock(Node.class);
        when(node.getId()).thenReturn(5);
        when(node.getLabel()).thenReturn("big");
        List<SnmpInterface> many = new ArrayList<>();
        for (int i = 0; i < GetNodeTool.MAX_INTERFACES + 5; i++) {
            SnmpInterface s = mock(SnmpInterface.class);
            when(s.getIfIndex()).thenReturn(i);
            when(s.getIfName()).thenReturn("if" + i);
            many.add(s);
        }
        when(node.getSnmpInterfaces()).thenReturn(many);
        when(nodeDao.getNodeById(5)).thenReturn(node);

        JsonNode out = tool.call(om.createObjectNode().put("nodeId", 5));
        assertThat(out.get("snmpInterfaces").size(), equalTo(GetNodeTool.MAX_INTERFACES));
        assertThat(out.get("snmpInterfacesTruncated").asInt(), equalTo(GetNodeTool.MAX_INTERFACES + 5));
    }

    @Test
    public void unknownNodeIsAToolException() {
        try {
            tool.call(om.createObjectNode().put("nodeId", "404"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No node found for '404'"));
        }
    }
}
