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

/**
 * Thrown when a call to the LLM API fails — network error, non-2xx
 * HTTP status, malformed response, or in-flight rate limit exceeded.
 */
public class LlmApiException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    // Tokens the provider billed before the failure (a multi-round exchange
    // that never reported still cost its completed rounds). Empty by default.
    private transient Suggestions.TokenUsage usage = Suggestions.TokenUsage.empty();

    public Suggestions.TokenUsage getUsage() {
        return usage;
    }

    public LlmApiException withUsage(Suggestions.TokenUsage usage) {
        this.usage = usage == null ? Suggestions.TokenUsage.empty() : usage;
        return this;
    }

    public LlmApiException(String message) {
        super(message);
    }

    public LlmApiException(String message, Throwable cause) {
        super(message, cause);
    }
}
