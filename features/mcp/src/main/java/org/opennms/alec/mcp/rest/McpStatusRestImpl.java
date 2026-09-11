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

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.ws.rs.core.Response;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.McpConfigReader;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolRegistry;
import org.opennms.integration.api.v1.mcp.McpToolProvider;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;

public class McpStatusRestImpl implements McpStatusRest {

    /** Symbolic name of the OpenNMS MCP server bundle (opennms-mcp-server feature). */
    static final String NATIVE_SERVER_BUNDLE = "org.opennms.integration.api.mcp-server";

    private final ToolRegistry registry;
    private final McpConfigReader configReader;
    private final OpenNmsRestClient rest;
    private final BundleContext bundleContext;

    public McpStatusRestImpl(ToolRegistry registry, McpConfigReader configReader, OpenNmsRestClient rest,
                             BundleContext bundleContext) {
        this.registry = Objects.requireNonNull(registry);
        this.configReader = Objects.requireNonNull(configReader);
        this.rest = Objects.requireNonNull(rest);
        this.bundleContext = bundleContext;
    }

    @Override
    public Response status() {
        McpConfig config = configReader.read();
        List<McpStatus.ToolInfo> tools = new ArrayList<>();
        for (McpToolProvider t : registry.allTools()) {
            tools.add(new McpStatus.ToolInfo(t.getToolName(), t.getToolDescription(), registry.isAvailable(t),
                    t.isWriteAccess(), sourceOf(t)));
        }
        return Response.ok(new McpStatus(config.isToolsEnabled(), rest.isConfigured(),
                config.getEffectiveOpennmsUrl(), isNativeServerInstalled(), tools,
                registry.getMetrics().snapshot())).build();
    }

    boolean isNativeServerInstalled() {
        if (bundleContext == null) {
            return false;
        }
        try {
            for (Bundle b : bundleContext.getBundles()) {
                if (NATIVE_SERVER_BUNDLE.equals(b.getSymbolicName()) && b.getState() == Bundle.ACTIVE) {
                    return true;
                }
            }
        } catch (RuntimeException ignore) {
            // a stopping framework; report "not installed"
        }
        return false;
    }

    private static String sourceOf(McpToolProvider tool) {
        if (tool instanceof AlecTool) {
            return "alec";
        }
        Bundle b = FrameworkUtil.getBundle(tool.getClass());
        return b == null ? "other" : b.getSymbolicName();
    }
}
