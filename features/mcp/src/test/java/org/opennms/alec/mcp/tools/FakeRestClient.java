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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.opennms.alec.mcp.McpConfig;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.MissingNode;

/** In-memory {@link OpenNmsRestClient}: canned bodies per path, records what was asked. */
class FakeRestClient implements OpenNmsRestClient {

    private final ObjectMapper om = new ObjectMapper();
    private final Map<String, JsonNode> gets = new HashMap<>();
    boolean configured = true;
    final List<String> getPaths = new ArrayList<>();
    String lastPostPath;
    JsonNode lastPostBody;
    JsonNode postResponse = MissingNode.getInstance();
    ToolException failure;

    FakeRestClient onGet(String path, String json) {
        try {
            gets.put(path, om.readTree(json));
        } catch (java.io.IOException e) {
            throw new IllegalArgumentException(e);
        }
        return this;
    }

    FakeRestClient postReturns(String json) {
        try {
            postResponse = json == null ? MissingNode.getInstance() : om.readTree(json);
        } catch (java.io.IOException e) {
            throw new IllegalArgumentException(e);
        }
        return this;
    }

    @Override
    public boolean isConfigured() {
        return configured;
    }

    @Override
    public JsonNode get(String pathWithQuery) throws ToolException {
        getPaths.add(pathWithQuery);
        if (failure != null) {
            throw failure;
        }
        JsonNode body = gets.get(pathWithQuery);
        if (body == null) {
            throw new ToolException("OpenNMS REST returned 404 for " + pathWithQuery);
        }
        return body;
    }

    @Override
    public JsonNode post(String path, JsonNode body) throws ToolException {
        lastPostPath = path;
        lastPostBody = body;
        if (failure != null) {
            throw failure;
        }
        return postResponse;
    }

    @Override
    public String checkConnectivity(McpConfig config) {
        return configured ? "OK: reached OpenNMS test at http://x as admin" : "No OpenNMS login configured";
    }
}
