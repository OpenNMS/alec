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

package org.opennms.alec.llm;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Validates an LLM configuration by probing the provider, so the user can
 * confirm the endpoint/model/key work before saving (or after a failed call).
 * Shares the {@code alec/llm} root with the config + suggestions endpoints.
 */
@Path("alec/llm")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public interface LlmValidationRest {

    /**
     * Probe the endpoint with the supplied {@link ValidationRequest}. Blank
     * fields fall back to the persisted config (so an already-stored key can be
     * validated without re-sending it).
     *
     * @return 200 with a {@link ValidationResult} body. The HTTP status is 200
     *         even when validation fails — {@code ok=false} carries the reason —
     *         so the UI can render the message either way.
     */
    @POST
    @Path("/validate")
    Response validate(ValidationRequest request);

    /**
     * ALEC-308: probe the endpoint <em>with the MCP tools offered</em> — the
     * model is asked to call {@code alec_status} and then report whether it
     * could read ALEC's tools, as a yes/no plus a one-line explanation. Same
     * key/endpoint fallback rules as {@link #validate}. Optional OpenNMS login
     * fields test an unsaved login for the REST-backed tools.
     */
    @POST
    @Path("/validate-tools")
    Response validateTools(ValidationRequest request);
}
