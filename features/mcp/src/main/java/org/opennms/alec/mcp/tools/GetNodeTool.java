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

import java.util.List;
import java.util.Objects;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.IpInterface;
import org.opennms.integration.api.v1.model.MetaData;
import org.opennms.integration.api.v1.model.MonitoredService;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.NodeAssetRecord;
import org.opennms.integration.api.v1.model.SnmpInterface;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/** Inventory detail for one node. Named to coexist with the OpenNMS MCP server's own {@code get_node}. */
public class GetNodeTool extends AlecTool {

    public static final String NAME = "get_node_inventory";
    static final int MAX_INTERFACES = 60;
    static final int MAX_METADATA = 40;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("Get inventory details for a node: label, location, categories, asset record "
                    + "(vendor/model/OS), IP interfaces with monitored services, SNMP interfaces and metadata.")
            .string("nodeId", "Numeric node id (as carried by alarms), or foreignSource:foreignId.", false)
            .string("nodeLabel", "Exact node label, when the id is unknown.", false)
            .build();

    private final NodeLookup lookup;
    private final ObjectMapper om;

    public GetNodeTool(NodeDao nodeDao, ObjectMapper om) {
        this.lookup = new NodeLookup(nodeDao);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Node node = lookup.resolve(new Args(arguments));
        ObjectNode n = om.createObjectNode();
        n.put("nodeId", node.getId());
        n.put("label", node.getLabel());
        if (node.getForeignSource() != null) {
            n.put("foreignSource", node.getForeignSource());
            n.put("foreignId", node.getForeignId());
        }
        n.put("location", node.getLocation());
        List<String> categories = node.getCategories();
        if (categories != null && !categories.isEmpty()) {
            ArrayNode cats = n.putArray("categories");
            categories.forEach(cats::add);
        }
        NodeAssetRecord asset = node.getAssetRecord();
        if (asset != null) {
            ObjectNode a = n.putObject("asset");
            putIfSet(a, "vendor", asset.getVendor());
            putIfSet(a, "model", asset.getModelNumber());
            putIfSet(a, "operatingSystem", asset.getOperatingSystem());
            putIfSet(a, "description", Render.truncate(asset.getDescription(), 200));
            putIfSet(a, "region", asset.getRegion());
            putIfSet(a, "building", asset.getBuilding());
            putIfSet(a, "floor", asset.getFloor());
            if (asset.getGeolocation() != null && asset.getGeolocation().getCity() != null) {
                a.put("city", asset.getGeolocation().getCity());
            }
        }
        List<IpInterface> ips = node.getIpInterfaces();
        if (ips != null && !ips.isEmpty()) {
            ArrayNode arr = n.putArray("ipInterfaces");
            int count = 0;
            for (IpInterface ip : ips) {
                if (count++ >= MAX_INTERFACES) {
                    n.put("ipInterfacesTruncated", ips.size());
                    break;
                }
                ObjectNode i = arr.addObject();
                i.put("address", ip.getIpAddress() == null ? null : ip.getIpAddress().getHostAddress());
                ip.getSnmpInterface().ifPresent(snmp -> i.put("ifName", snmp.getIfName()));
                List<MonitoredService> services = ip.getMonitoredServices();
                if (services != null && !services.isEmpty()) {
                    ArrayNode svc = i.putArray("services");
                    for (MonitoredService s : services) {
                        svc.add(s.getName() + (s.getStatus() ? "" : " (down)"));
                    }
                }
            }
        }
        List<SnmpInterface> snmps = node.getSnmpInterfaces();
        if (snmps != null && !snmps.isEmpty()) {
            ArrayNode arr = n.putArray("snmpInterfaces");
            int count = 0;
            for (SnmpInterface s : snmps) {
                if (count++ >= MAX_INTERFACES) {
                    n.put("snmpInterfacesTruncated", snmps.size());
                    break;
                }
                ObjectNode i = arr.addObject();
                i.put("ifIndex", s.getIfIndex());
                i.put("ifName", s.getIfName());
                if (s.getIfDescr() != null && !s.getIfDescr().equals(s.getIfName())) {
                    i.put("ifDescr", Render.truncate(s.getIfDescr(), 80));
                }
            }
        }
        List<MetaData> meta = node.getMetaData();
        if (meta != null && !meta.isEmpty()) {
            ObjectNode m = n.putObject("metadata");
            int count = 0;
            for (MetaData md : meta) {
                if (count++ >= MAX_METADATA) {
                    break;
                }
                m.put(md.getContext() + ":" + md.getKey(), Render.truncate(md.getValue(), 120));
            }
        }
        return n;
    }

    private static void putIfSet(ObjectNode n, String field, String value) {
        if (value != null && !value.trim().isEmpty()) {
            n.put(field, value);
        }
    }
}
