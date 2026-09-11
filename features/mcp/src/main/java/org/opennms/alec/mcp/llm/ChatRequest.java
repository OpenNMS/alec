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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.opennms.alec.mcp.ToolConsumer;
import org.opennms.alec.mcp.ToolResult;
import org.opennms.alec.mcp.ToolSpec;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * Everything one {@link ChatToolLoop#run} needs. The <em>terminal</em> tool is
 * the function the model must eventually call to deliver its answer
 * ({@code report_suggestions}, {@code group_alarms}, ...); the optional data
 * tools are offered alongside it and executed through the {@link ToolExecutor}
 * when the model calls them.
 */
public final class ChatRequest {

    /** Executes a data-tool call on the model's behalf. */
    @FunctionalInterface
    public interface ToolExecutor {
        ToolResult call(ToolConsumer consumer, String name, JsonNode arguments);
    }

    private final LlmEndpoint endpoint;
    private final String systemPrompt;
    private final String userContent;
    private final ToolSpec terminalTool;
    private final List<ToolSpec> dataTools;
    private final ToolExecutor executor;
    private final ToolConsumer consumer;
    private final int maxTokens;
    private final int maxRounds;

    private ChatRequest(Builder b) {
        this.endpoint = Objects.requireNonNull(b.endpoint, "endpoint");
        this.systemPrompt = Objects.requireNonNull(b.systemPrompt, "systemPrompt");
        this.userContent = Objects.requireNonNull(b.userContent, "userContent");
        this.terminalTool = Objects.requireNonNull(b.terminalTool, "terminalTool");
        this.dataTools = Collections.unmodifiableList(new ArrayList<>(b.dataTools));
        this.executor = b.executor;
        this.consumer = b.consumer;
        this.maxTokens = b.maxTokens;
        this.maxRounds = Math.max(1, b.maxRounds);
        if (!dataTools.isEmpty() && executor == null) {
            throw new IllegalArgumentException("data tools require an executor");
        }
    }

    public static Builder builder() {
        return new Builder();
    }

    public LlmEndpoint getEndpoint() {
        return endpoint;
    }

    public String getSystemPrompt() {
        return systemPrompt;
    }

    public String getUserContent() {
        return userContent;
    }

    public ToolSpec getTerminalTool() {
        return terminalTool;
    }

    public List<ToolSpec> getDataTools() {
        return dataTools;
    }

    public ToolExecutor getExecutor() {
        return executor;
    }

    public ToolConsumer getConsumer() {
        return consumer;
    }

    public int getMaxTokens() {
        return maxTokens;
    }

    public int getMaxRounds() {
        return maxRounds;
    }

    public static final class Builder {
        private LlmEndpoint endpoint;
        private String systemPrompt;
        private String userContent;
        private ToolSpec terminalTool;
        private List<ToolSpec> dataTools = new ArrayList<>();
        private ToolExecutor executor;
        private ToolConsumer consumer = ToolConsumer.RCA;
        private int maxTokens = 4096;
        private int maxRounds = 1;

        private Builder() {
        }

        public Builder endpoint(LlmEndpoint v) {
            endpoint = v;
            return this;
        }

        public Builder systemPrompt(String v) {
            systemPrompt = v;
            return this;
        }

        public Builder userContent(String v) {
            userContent = v;
            return this;
        }

        public Builder terminalTool(ToolSpec v) {
            terminalTool = v;
            return this;
        }

        public Builder dataTools(List<ToolSpec> v) {
            dataTools = v == null ? new ArrayList<>() : new ArrayList<>(v);
            return this;
        }

        public Builder executor(ToolExecutor v) {
            executor = v;
            return this;
        }

        public Builder consumer(ToolConsumer v) {
            consumer = v == null ? ToolConsumer.RCA : v;
            return this;
        }

        public Builder maxTokens(int v) {
            maxTokens = v;
            return this;
        }

        /** Maximum chat-completions calls, including the one that yields the terminal call. */
        public Builder maxRounds(int v) {
            maxRounds = v;
            return this;
        }

        public ChatRequest build() {
            return new ChatRequest(this);
        }
    }
}
