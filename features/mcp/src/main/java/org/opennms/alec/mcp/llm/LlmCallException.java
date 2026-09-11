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
 * A chat-completions call that did not produce the terminal tool call. The
 * {@link Kind} lets callers turn the failure into the right operator-facing
 * advice (a reasoning model that ran out of output budget needs a different
 * fix from a model that cannot call tools at all).
 *
 * <p>Messages never embed the API key, and never reflect the raw response body.
 */
public class LlmCallException extends Exception {

    private static final long serialVersionUID = 1L;

    public enum Kind {
        /** The base URL is not a usable http(s) URL, or the key has illegal header characters. */
        BAD_REQUEST,
        /** The endpoint could not be reached (DNS, connect, timeout). */
        NETWORK,
        /** The endpoint answered with a non-2xx status. */
        HTTP,
        /** A 2xx response carrying a provider error envelope. */
        PROVIDER,
        /** A 2xx response that is not a chat-completions payload. */
        MALFORMED,
        /** The model stopped with finish_reason=length before calling any tool. */
        LENGTH,
        /** The model answered without calling a tool (no function-calling support). */
        NO_TOOL_CALL,
        /** The model kept calling data tools and never produced the terminal call. */
        ROUNDS_EXHAUSTED
    }

    private final Kind kind;
    private final int httpStatus;

    public LlmCallException(Kind kind, String message) {
        this(kind, message, 0, null);
    }

    public LlmCallException(Kind kind, String message, Throwable cause) {
        this(kind, message, 0, cause);
    }

    public LlmCallException(Kind kind, String message, int httpStatus, Throwable cause) {
        super(message, cause);
        this.kind = kind;
        this.httpStatus = httpStatus;
    }

    public Kind getKind() {
        return kind;
    }

    /** The HTTP status for {@link Kind#HTTP}, else 0. */
    public int getHttpStatus() {
        return httpStatus;
    }
}
