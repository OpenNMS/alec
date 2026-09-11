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

import java.util.Objects;
import java.util.regex.Pattern;

import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Device configuration backup status for a node (OpenNMS Device Config
 * Backup), optionally with the latest stored configuration text — redacted
 * of the usual secret-bearing lines and size-capped.
 */
public class GetDeviceConfigTool implements McpTool {

    public static final String NAME = "get_device_config";
    static final int MAX_CONFIG_CHARS = 12_000;
    static final Pattern SECRET_LINE = Pattern.compile(
            "(?i)(password|passwd|secret|community|snmp-server\\s+(community|user)|"
                    + "enable\\s+secret|key-string|pre-shared-key|auth\\s+key|encrypted|tacacs|radius)");

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("Get the device configuration backup status for a node from OpenNMS Device Config "
                    + "Backup: when the last backup succeeded or failed and why, and optionally the latest "
                    + "stored configuration text (secrets redacted). A recent config change near the start "
                    + "of an outage is a strong root-cause signal.")
            .string("nodeId", "Numeric node id, or foreignSource:foreignId.", false)
            .string("nodeLabel", "Exact node label, when the id is unknown.", false)
            .bool("includeContent", "Also return the latest configuration text (default false; can be long).", false)
            .build();

    private final OpenNmsRestClient rest;
    private final NodeLookup lookup;
    private final ObjectMapper om;

    public GetDeviceConfigTool(OpenNmsRestClient rest, NodeDao nodeDao, ObjectMapper om) {
        this.rest = Objects.requireNonNull(rest);
        this.lookup = new NodeLookup(nodeDao);
        this.om = Objects.requireNonNull(om);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public boolean isAvailable() {
        return rest.isConfigured();
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Args args = new Args(arguments);
        Node node = lookup.resolve(args);
        boolean includeContent = args.boolOr("includeContent", false);
        // The "latest" listing searches by device name / IP; filter by node id
        // afterwards because the search is a substring match.
        JsonNode body = rest.get("device-config/latest?limit=25&search=" + urlEncode(node.getLabel()));
        ObjectNode out = om.createObjectNode();
        out.put("nodeId", node.getId());
        out.put("label", node.getLabel());
        ArrayNode configs = out.putArray("configurations");
        if (body.isArray()) {
            for (JsonNode dc : body) {
                if (dc.path("nodeId").asInt(-1) != node.getId()) {
                    continue;
                }
                ObjectNode c = configs.addObject();
                c.put("id", dc.path("id").asLong());
                c.put("ipAddress", dc.path("ipAddress").asText(null));
                c.put("configType", dc.path("configType").asText(null));
                c.put("backupStatus", dc.path("backupStatus").asText(null));
                c.put("lastBackup", millisToIso(dc.path("lastBackupDate")));
                c.put("lastSucceeded", millisToIso(dc.path("lastSucceededDate")));
                c.put("lastFailed", millisToIso(dc.path("lastFailedDate")));
                if (dc.hasNonNull("failureReason")) {
                    c.put("failureReason", Render.truncate(dc.path("failureReason").asText(), 300));
                }
                c.put("nextScheduledBackup", millisToIso(dc.path("nextScheduledBackupDate")));
                if (includeContent) {
                    JsonNode full = dc.hasNonNull("config") ? dc : rest.get("device-config/" + dc.path("id").asLong());
                    String config = full.path("config").asText("");
                    if (!config.isEmpty()) {
                        c.put("configLength", config.length());
                        c.put("config", Render.truncate(redact(config), MAX_CONFIG_CHARS));
                    }
                }
            }
        }
        if (configs.isEmpty()) {
            out.put("note", "No device configuration backups are stored for this node (Device Config Backup "
                    + "not enabled for it, or no backup has run yet)");
        }
        return out;
    }

    /** Mask the value on lines that look like they carry credentials. */
    static String redact(String config) {
        StringBuilder sb = new StringBuilder(config.length());
        for (String line : config.split("\n", -1)) {
            if (SECRET_LINE.matcher(line).find()) {
                // keep the keyword (so the model sees a credential line exists) but drop the value
                String[] words = line.trim().split("\\s+");
                int keep = Math.min(2, words.length);
                StringBuilder masked = new StringBuilder();
                for (int i = 0; i < keep; i++) {
                    masked.append(i > 0 ? " " : "").append(words[i]);
                }
                sb.append(masked).append(" <redacted>");
            } else {
                sb.append(line);
            }
            sb.append('\n');
        }
        return sb.toString();
    }

    private static String millisToIso(JsonNode n) {
        if (n == null || n.isNull() || n.isMissingNode()) {
            return null;
        }
        if (n.isNumber()) {
            return Render.iso(n.asLong());
        }
        return n.asText(null);
    }

    private static String urlEncode(String s) {
        try {
            return java.net.URLEncoder.encode(s == null ? "" : s, "UTF-8");
        } catch (java.io.UnsupportedEncodingException e) {
            return s;
        }
    }
}
