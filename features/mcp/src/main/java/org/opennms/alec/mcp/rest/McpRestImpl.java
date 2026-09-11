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

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.McpConfigReader;
import org.opennms.alec.mcp.McpTool;
import org.opennms.alec.mcp.McpVersion;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class McpRestImpl implements McpRest {

    static final String REQUIRED_ROLE = "ROLE_ADMIN";

    private static final Logger LOG = LoggerFactory.getLogger(McpRestImpl.class);

    private final McpJsonRpcHandler handler;
    private final ToolRegistry registry;
    private final McpConfigReader configReader;
    private final OpenNmsRestClient rest;
    private final ObjectMapper om;

    public McpRestImpl(ToolRegistry registry, McpConfigReader configReader, OpenNmsRestClient rest,
                       ObjectMapper om) {
        this(registry, configReader, rest, om, McpVersion.get());
    }

    // Visible for testing.
    McpRestImpl(ToolRegistry registry, McpConfigReader configReader, OpenNmsRestClient rest,
                ObjectMapper om, String serverVersion) {
        this.registry = Objects.requireNonNull(registry);
        this.configReader = Objects.requireNonNull(configReader);
        this.rest = Objects.requireNonNull(rest);
        this.om = Objects.requireNonNull(om);
        this.handler = new McpJsonRpcHandler(registry, om, serverVersion);
    }

    @Override
    public Response rpc(String body, SecurityContext securityContext) {
        if (!isAdmin(securityContext)) {
            return Response.status(Response.Status.FORBIDDEN)
                    .entity(handler.error(null, -32000, "The MCP endpoint requires the OpenNMS ADMIN role"))
                    .build();
        }
        JsonNode message;
        try {
            message = om.readTree(body == null ? "" : body);
        } catch (IOException e) {
            return Response.ok(handler.error(null, McpJsonRpcHandler.ERR_PARSE, "Parse error")).build();
        }
        JsonNode response = handler.handle(message);
        if (response == null) {
            return Response.accepted().build();
        }
        return Response.ok(response).build();
    }

    @Override
    public Response stream() {
        return Response.status(Response.Status.METHOD_NOT_ALLOWED)
                .header("Allow", "POST, DELETE")
                .build();
    }

    @Override
    public Response endSession() {
        return Response.ok().build();
    }

    @Override
    public Response status() {
        McpConfig config = configReader.read();
        List<McpStatus.ToolInfo> tools = new ArrayList<>();
        for (McpTool t : registry.allTools()) {
            tools.add(new McpStatus.ToolInfo(t.getSpec().getName(), t.getSpec().getDescription(), t.isAvailable()));
        }
        return Response.ok(new McpStatus(config.isToolsEnabled(), rest.isConfigured(),
                config.getEffectiveOpennmsUrl(), tools, registry.getMetrics().snapshot())).build();
    }

    static boolean isAdmin(SecurityContext sc) {
        if (sc == null) {
            LOG.debug("No SecurityContext on MCP request; denying");
            return false;
        }
        try {
            return sc.isUserInRole(REQUIRED_ROLE);
        } catch (RuntimeException e) {
            LOG.debug("SecurityContext role check failed: {}", e.getMessage());
            return false;
        }
    }
}
