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

import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.JsonNode;

/** Typed, validated access to a tool's JSON arguments. */
final class Args {

    private final JsonNode node;

    Args(JsonNode node) {
        this.node = node;
    }

    boolean has(String name) {
        JsonNode v = node == null ? null : node.get(name);
        return v != null && !v.isNull() && !(v.isTextual() && v.asText().trim().isEmpty());
    }

    String string(String name) throws ToolException {
        if (!has(name)) {
            throw new ToolException("Missing required argument '" + name + "'");
        }
        return node.get(name).asText().trim();
    }

    String stringOr(String name, String fallback) {
        return has(name) ? node.get(name).asText().trim() : fallback;
    }

    int intOr(String name, int fallback, int min, int max) throws ToolException {
        if (!has(name)) {
            return fallback;
        }
        JsonNode v = node.get(name);
        int value;
        if (v.isNumber()) {
            value = v.asInt();
        } else {
            try {
                value = Integer.parseInt(v.asText().trim());
            } catch (NumberFormatException e) {
                throw new ToolException("Argument '" + name + "' must be an integer");
            }
        }
        return Math.max(min, Math.min(max, value));
    }

    /** Required integer (no clamping). */
    int integer(String name) throws ToolException {
        if (!has(name)) {
            throw new ToolException("Missing required argument '" + name + "'");
        }
        JsonNode v = node.get(name);
        if (v.isNumber()) {
            return v.asInt();
        }
        try {
            return Integer.parseInt(v.asText().trim());
        } catch (NumberFormatException e) {
            throw new ToolException("Argument '" + name + "' must be an integer");
        }
    }

    boolean boolOr(String name, boolean fallback) {
        if (!has(name)) {
            return fallback;
        }
        JsonNode v = node.get(name);
        return v.isBoolean() ? v.asBoolean() : Boolean.parseBoolean(v.asText().trim());
    }
}
