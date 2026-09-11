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

package org.opennms.alec.llm.client;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * Outcome of a tool invocation through the registry. Never carries an
 * exception: an error is a normal result with {@code error=true} and a
 * message, so a tool loop can hand it back to the model and let it recover
 * (retry with a different argument, or report without that data).
 */
public final class ToolResult {

    private final boolean error;
    private final JsonNode content;
    private final String text;

    private ToolResult(boolean error, JsonNode content, String text) {
        this.error = error;
        this.content = content;
        this.text = text;
    }

    public static ToolResult ok(JsonNode content, String text) {
        return new ToolResult(false, content, text);
    }

    public static ToolResult failure(JsonNode content, String text) {
        return new ToolResult(true, content, text);
    }

    public boolean isError() {
        return error;
    }

    /** The JSON payload (for an error: {@code {"error": "..."}}). */
    public JsonNode getContent() {
        return content;
    }

    /** The payload serialized (and size-capped) for a chat {@code tool} message. */
    public String getText() {
        return text;
    }
}
