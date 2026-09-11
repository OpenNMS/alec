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

/**
 * Token counts for one or more chat-completions calls, with the buckets kept
 * disjoint: {@code inputTokens} excludes the automatically-cached input that
 * providers report under {@code prompt_tokens_details.cached_tokens}, so the
 * sum of all buckets is the true total.
 */
public final class TokenUsage {

    private static final TokenUsage EMPTY = new TokenUsage(0, 0, 0, 0);

    private final long inputTokens;
    private final long outputTokens;
    private final long cacheReadInputTokens;
    private final long cacheCreationInputTokens;

    public TokenUsage(long inputTokens, long outputTokens, long cacheReadInputTokens,
                      long cacheCreationInputTokens) {
        this.inputTokens = inputTokens;
        this.outputTokens = outputTokens;
        this.cacheReadInputTokens = cacheReadInputTokens;
        this.cacheCreationInputTokens = cacheCreationInputTokens;
    }

    public static TokenUsage empty() {
        return EMPTY;
    }

    public TokenUsage plus(TokenUsage other) {
        if (other == null) {
            return this;
        }
        return new TokenUsage(inputTokens + other.inputTokens,
                outputTokens + other.outputTokens,
                cacheReadInputTokens + other.cacheReadInputTokens,
                cacheCreationInputTokens + other.cacheCreationInputTokens);
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

    public long getTotalTokens() {
        return inputTokens + outputTokens + cacheReadInputTokens + cacheCreationInputTokens;
    }

    @Override
    public String toString() {
        return "TokenUsage[in=" + inputTokens + ", out=" + outputTokens + ", cacheRead="
                + cacheReadInputTokens + ", cacheCreate=" + cacheCreationInputTokens + "]";
    }
}
