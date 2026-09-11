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

package org.opennms.alec.mcp.llm;

import com.fasterxml.jackson.databind.JsonNode;

/** The terminal tool call's arguments plus what the whole exchange cost. */
public final class ChatResult {

    private final JsonNode terminalArguments;
    private final TokenUsage usage;
    private final int toolCalls;
    private final int rounds;

    public ChatResult(JsonNode terminalArguments, TokenUsage usage, int toolCalls, int rounds) {
        this.terminalArguments = terminalArguments;
        this.usage = usage == null ? TokenUsage.empty() : usage;
        this.toolCalls = toolCalls;
        this.rounds = rounds;
    }

    /** Parsed arguments object of the terminal tool call. */
    public JsonNode getTerminalArguments() {
        return terminalArguments;
    }

    /** Summed over every round. */
    public TokenUsage getUsage() {
        return usage;
    }

    /** Number of data-tool invocations made on the model's behalf. */
    public int getToolCalls() {
        return toolCalls;
    }

    /** Number of chat-completions calls made. */
    public int getRounds() {
        return rounds;
    }
}
