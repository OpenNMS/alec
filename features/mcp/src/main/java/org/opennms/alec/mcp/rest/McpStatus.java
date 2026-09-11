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

package org.opennms.alec.mcp.rest;

import java.util.List;

import org.opennms.alec.mcp.McpMetrics;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/** GET /alec/mcp/status body. */
@JsonPropertyOrder({"toolsEnabled", "opennmsRestConfigured", "opennmsUrl", "endpointPath", "nativeServerInstalled", "tools", "stats"})
public final class McpStatus {

    /** The OpenNMS MCP server (opennms-mcp-server feature) that serves ALEC's tools to external clients. */
    public static final String ENDPOINT_PATH = "/opennms/rest/mcp";

    private final boolean toolsEnabled;
    private final boolean opennmsRestConfigured;
    private final String opennmsUrl;
    private final boolean nativeServerInstalled;
    private final List<ToolInfo> tools;
    private final McpMetrics.Snapshot stats;

    public McpStatus(boolean toolsEnabled, boolean opennmsRestConfigured, String opennmsUrl,
                     boolean nativeServerInstalled, List<ToolInfo> tools, McpMetrics.Snapshot stats) {
        this.toolsEnabled = toolsEnabled;
        this.opennmsRestConfigured = opennmsRestConfigured;
        this.opennmsUrl = opennmsUrl;
        this.nativeServerInstalled = nativeServerInstalled;
        this.tools = tools;
        this.stats = stats;
    }

    /** Whether the OpenNMS MCP server bundle is active, i.e. the endpoint above exists. */
    public boolean isNativeServerInstalled() {
        return nativeServerInstalled;
    }

    public boolean isToolsEnabled() {
        return toolsEnabled;
    }

    public boolean isOpennmsRestConfigured() {
        return opennmsRestConfigured;
    }

    public String getOpennmsUrl() {
        return opennmsUrl;
    }

    public String getEndpointPath() {
        return ENDPOINT_PATH;
    }

    public List<ToolInfo> getTools() {
        return tools;
    }

    public McpMetrics.Snapshot getStats() {
        return stats;
    }

    @JsonPropertyOrder({"name", "description", "available", "writeAccess", "source"})
    public static final class ToolInfo {
        private final String name;
        private final String description;
        private final boolean available;
        private final boolean writeAccess;
        private final String source;

        public ToolInfo(String name, String description, boolean available) {
            this(name, description, available, false, "alec");
        }

        public ToolInfo(String name, String description, boolean available, boolean writeAccess, String source) {
            this.name = name;
            this.description = description;
            this.available = available;
            this.writeAccess = writeAccess;
            this.source = source;
        }

        /** True for tools that change state; never offered to the model. */
        public boolean isWriteAccess() {
            return writeAccess;
        }

        /** "alec" for ALEC's own tools, else the contributing bundle's symbolic name. */
        public String getSource() {
            return source;
        }

        public String getName() {
            return name;
        }

        public String getDescription() {
            return description;
        }

        public boolean isAvailable() {
            return available;
        }
    }
}
