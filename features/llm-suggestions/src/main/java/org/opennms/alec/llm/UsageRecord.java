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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

/**
 * One row in the per-call token-usage log. Written by LlmSituationHandler
 * after every LLM request completes (success or failure). Aggregated by
 * {@link UsageStore#aggregate(int)} for the 30-day rollup on the config page.
 *
 * Failures still get a row with zero tokens — the call count drives the
 * "successful vs failed" split that surfaces on the dashboard.
 */
@JsonDeserialize(builder = UsageRecord.Builder.class)
@JsonPropertyOrder({"ts", "situationId", "model", "success",
        "inputTokens", "outputTokens", "cacheReadInputTokens", "cacheCreationInputTokens", "toolCalls"})
public final class UsageRecord {

    private final long ts;
    private final String situationId;
    private final String model;
    private final boolean success;
    private final long inputTokens;
    private final long outputTokens;
    private final long cacheReadInputTokens;
    private final long cacheCreationInputTokens;
    private final long toolCalls;

    private UsageRecord(Builder b) {
        this.ts = b.ts;
        this.situationId = b.situationId;
        this.model = b.model;
        this.success = b.success;
        this.inputTokens = b.inputTokens;
        this.outputTokens = b.outputTokens;
        this.cacheReadInputTokens = b.cacheReadInputTokens;
        this.cacheCreationInputTokens = b.cacheCreationInputTokens;
        this.toolCalls = b.toolCalls;
    }

    public long getTs() {
        return ts;
    }

    public String getSituationId() {
        return situationId;
    }

    public String getModel() {
        return model;
    }

    public boolean isSuccess() {
        return success;
    }

    public long getInputTokens() {
        return inputTokens;
    }

    public long getOutputTokens() {
        return outputTokens;
    }

    public long getCacheReadInputTokens() {
        return cacheReadInputTokens;
    }

    public long getCacheCreationInputTokens() {
        return cacheCreationInputTokens;
    }

    /** MCP data-tool calls made during this LLM call (ALEC-308); 0 for records written before it existed. */
    public long getToolCalls() {
        return toolCalls;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    @JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private long ts;
        private String situationId;
        private String model;
        private boolean success;
        private long inputTokens;
        private long outputTokens;
        private long cacheReadInputTokens;
        private long cacheCreationInputTokens;
        private long toolCalls;

        private Builder() {
        }

        public Builder ts(long v) {
            ts = v;
            return this;
        }

        public Builder situationId(String v) {
            situationId = v;
            return this;
        }

        public Builder model(String v) {
            model = v;
            return this;
        }

        public Builder success(boolean v) {
            success = v;
            return this;
        }

        public Builder inputTokens(long v) {
            inputTokens = v;
            return this;
        }

        public Builder outputTokens(long v) {
            outputTokens = v;
            return this;
        }

        public Builder cacheReadInputTokens(long v) {
            cacheReadInputTokens = v;
            return this;
        }

        public Builder cacheCreationInputTokens(long v) {
            cacheCreationInputTokens = v;
            return this;
        }

        public Builder toolCalls(long v) {
            toolCalls = Math.max(0, v);
            return this;
        }

        public UsageRecord build() {
            return new UsageRecord(this);
        }
    }
}
