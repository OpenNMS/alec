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

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/**
 * Aggregated usage rollup returned by {@code GET /alec/llm/usage?days=N}.
 *
 * {@code estimatedCostUsd} is a ballpark using the default model's (Claude
 * Sonnet 4.6) list price — the provider/model are configurable, so this is a
 * reference figure, not a bill. Constants live in {@link UsageStore}.
 */
@JsonPropertyOrder({"daysWindow", "totalTokens", "inputTokens", "outputTokens",
        "cacheReadInputTokens", "cacheCreationInputTokens",
        "calls", "successfulCalls", "failedCalls", "toolCalls",
        "cacheHitRatio", "estimatedCostUsd", "pricingNote"})
public final class UsageReport {

    private final int daysWindow;
    private final long inputTokens;
    private final long outputTokens;
    private final long cacheReadInputTokens;
    private final long cacheCreationInputTokens;
    private final long calls;
    private final long successfulCalls;
    private final long failedCalls;
    private final long toolCalls;
    private final double cacheHitRatio;
    private final double estimatedCostUsd;
    private final String pricingNote;

    public UsageReport(int daysWindow,
                       long inputTokens, long outputTokens,
                       long cacheReadInputTokens, long cacheCreationInputTokens,
                       long calls, long successfulCalls, long failedCalls,
                       double cacheHitRatio, double estimatedCostUsd,
                       String pricingNote) {
        this(daysWindow, inputTokens, outputTokens, cacheReadInputTokens, cacheCreationInputTokens,
                calls, successfulCalls, failedCalls, 0L, cacheHitRatio, estimatedCostUsd, pricingNote);
    }

    public UsageReport(int daysWindow,
                       long inputTokens, long outputTokens,
                       long cacheReadInputTokens, long cacheCreationInputTokens,
                       long calls, long successfulCalls, long failedCalls, long toolCalls,
                       double cacheHitRatio, double estimatedCostUsd,
                       String pricingNote) {
        this.daysWindow = daysWindow;
        this.inputTokens = inputTokens;
        this.outputTokens = outputTokens;
        this.cacheReadInputTokens = cacheReadInputTokens;
        this.cacheCreationInputTokens = cacheCreationInputTokens;
        this.calls = calls;
        this.successfulCalls = successfulCalls;
        this.failedCalls = failedCalls;
        this.toolCalls = toolCalls;
        this.cacheHitRatio = cacheHitRatio;
        this.estimatedCostUsd = estimatedCostUsd;
        this.pricingNote = pricingNote;
    }

    public int getDaysWindow() {
        return daysWindow;
    }

    public long getTotalTokens() {
        return inputTokens + outputTokens + cacheReadInputTokens + cacheCreationInputTokens;
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

    public long getCalls() {
        return calls;
    }

    public long getSuccessfulCalls() {
        return successfulCalls;
    }

    public long getFailedCalls() {
        return failedCalls;
    }

    /** MCP data-tool calls made by ALEC's own LLM requests in the window (ALEC-308). */
    public long getToolCalls() {
        return toolCalls;
    }

    public double getCacheHitRatio() {
        return cacheHitRatio;
    }

    public double getEstimatedCostUsd() {
        return estimatedCostUsd;
    }

    public String getPricingNote() {
        return pricingNote;
    }
}
