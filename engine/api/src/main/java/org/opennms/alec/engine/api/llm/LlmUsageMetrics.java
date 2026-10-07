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

package org.opennms.alec.engine.api.llm;

/**
 * Sink for LLM token usage, fed by every chat exchange ALEC makes — root
 * cause analysis, LLM clustering and the configuration-page probes. The
 * default implementation publishes the counts as Dropwizard gauges the
 * driver reports over JMX, which OpenNMS's stock JMX collection charts on
 * the node's Resource Graphs. An interface so blueprint references in other
 * bundles can proxy it.
 */
public interface LlmUsageMetrics {

    /** Which ALEC feature made the call — a dimension on the gauges. */
    enum Consumer {
        /** Root cause analysis (features/llm-suggestions). */
        RCA("rca"),
        /** The LLM clustering engine (engine/llm). */
        CLUSTERING("clustering"),
        /** The configuration page's validation probes. */
        VALIDATION("validation");

        private final String key;

        Consumer(String key) {
            this.key = key;
        }

        public String getKey() {
            return key;
        }
    }

    /** One chat-completions response's usage block. Called once per round trip. */
    void recordRound(Consumer consumer, TokenUsage usage);

    /** One whole exchange finished, successfully or not. */
    void recordCall(Consumer consumer, boolean success);
}
