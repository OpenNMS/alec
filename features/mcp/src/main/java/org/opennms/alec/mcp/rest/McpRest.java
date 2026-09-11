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

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

/**
 * ALEC's MCP server endpoint at {@code /opennms/rest/alec/mcp} (Streamable
 * HTTP transport, stateless), plus a status document for the configuration
 * page. Sits behind OpenNMS's normal REST authentication; JSON-RPC calls
 * additionally require the ADMIN role, since the tools can read device
 * configuration through the operator's stored OpenNMS login.
 */
@Path("alec/mcp")
public interface McpRest {

    /** One JSON-RPC 2.0 request (or batch). Notifications get 202 with no body. */
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    Response rpc(String body, @Context SecurityContext securityContext);

    /** No server-initiated stream is offered: 405 per the transport spec. */
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    Response stream();

    /** Session termination is a no-op for a stateless server. */
    @DELETE
    Response endSession();

    /** Tool inventory and usage counters for the UI. */
    @GET
    @Path("/status")
    @Produces({MediaType.APPLICATION_JSON})
    Response status();
}
