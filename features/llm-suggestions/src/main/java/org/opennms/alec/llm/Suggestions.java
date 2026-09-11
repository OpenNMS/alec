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

import java.util.Collections;
import java.util.List;

/**
 * Result of asking LLM for situation diagnostics.
 *
 * Carries token usage even though it's not yet displayed — slice 5 (the
 * 30-day meter) will record these without requiring a downstream refactor.
 */
public final class Suggestions {

    private final List<String> rootCauses;
    private final List<String> resolutions;
    private final TokenUsage usage;
    private final int toolCalls;

    public Suggestions(List<String> rootCauses, List<String> resolutions, TokenUsage usage) {
        this(rootCauses, resolutions, usage, 0);
    }

    public Suggestions(List<String> rootCauses, List<String> resolutions, TokenUsage usage, int toolCalls) {
        this.rootCauses = rootCauses == null ? Collections.emptyList() : List.copyOf(rootCauses);
        this.resolutions = resolutions == null ? Collections.emptyList() : List.copyOf(resolutions);
        this.usage = usage == null ? TokenUsage.empty() : usage;
        this.toolCalls = Math.max(0, toolCalls);
    }

    public List<String> getRootCauses() {
        return rootCauses;
    }

    public List<String> getResolutions() {
        return resolutions;
    }

    public TokenUsage getUsage() {
        return usage;
    }

    /** Number of MCP data-tool calls the model made while producing this analysis. */
    public int getToolCalls() {
        return toolCalls;
    }

    public static final class TokenUsage {
        private final long inputTokens;
        private final long outputTokens;
        private final long cacheReadInputTokens;
        private final long cacheCreationInputTokens;

        public TokenUsage(long inputTokens, long outputTokens,
                          long cacheReadInputTokens, long cacheCreationInputTokens) {
            this.inputTokens = inputTokens;
            this.outputTokens = outputTokens;
            this.cacheReadInputTokens = cacheReadInputTokens;
            this.cacheCreationInputTokens = cacheCreationInputTokens;
        }

        public static TokenUsage empty() {
            return new TokenUsage(0L, 0L, 0L, 0L);
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
    }
}
