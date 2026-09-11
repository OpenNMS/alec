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

import com.fasterxml.jackson.databind.JsonNode;

/**
 * Minimal authenticated client for the OpenNMS REST API on the host this
 * plugin runs in. The Integration API exposes nodes, alarms and topology as
 * OSGi services, but event history, collected metrics and device
 * configuration backups are only reachable over REST — so those tools go
 * through this client with the login the operator entered on the LLM Setup
 * page.
 */
public interface OpenNmsRestClient {

    /** True when a URL and login are configured (not whether they work). */
    boolean isConfigured();

    /**
     * GET {@code <base>/rest/<pathWithQuery>} and parse the JSON body.
     *
     * @return the parsed body, or a missing node for an empty (204) response
     */
    JsonNode get(String pathWithQuery) throws ToolException;

    /** POST a JSON body to {@code <base>/rest/<path>} and parse the JSON response. */
    JsonNode post(String path, JsonNode body) throws ToolException;

    /**
     * Probe {@code /rest/info} with the given login (not the stored one) so the
     * configuration page can test an unsaved login. Never throws.
     *
     * @return a short human-readable outcome, prefixed "OK:" on success
     */
    String checkConnectivity(McpConfig config);
}
