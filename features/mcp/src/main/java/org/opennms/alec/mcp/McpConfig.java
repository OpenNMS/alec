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

package org.opennms.alec.mcp;

/**
 * The MCP-related slice of the shared LLM configuration record.
 */
public final class McpConfig {

    /** Where the OpenNMS REST API lives when the operator leaves the URL blank. */
    public static final String DEFAULT_OPENNMS_URL = "http://localhost:8980/opennms";

    public static final McpConfig DISABLED = new McpConfig(false, "", "", "");

    private final boolean toolsEnabled;
    private final String opennmsUrl;
    private final String opennmsUsername;
    private final String opennmsPassword;

    public McpConfig(boolean toolsEnabled, String opennmsUrl, String opennmsUsername, String opennmsPassword) {
        this.toolsEnabled = toolsEnabled;
        this.opennmsUrl = trim(opennmsUrl);
        this.opennmsUsername = trim(opennmsUsername);
        this.opennmsPassword = trim(opennmsPassword);
    }

    private static String trim(String s) {
        return s == null ? "" : s.trim();
    }

    /** Whether ALEC's own model calls (RCA + clustering) are offered the tools. */
    public boolean isToolsEnabled() {
        return toolsEnabled;
    }

    /** Configured base URL, or "" if the operator left it blank. */
    public String getOpennmsUrl() {
        return opennmsUrl;
    }

    /** Base URL with the default applied and trailing slashes removed. */
    public String getEffectiveOpennmsUrl() {
        String url = opennmsUrl.isEmpty() ? DEFAULT_OPENNMS_URL : opennmsUrl;
        while (url.endsWith("/")) {
            url = url.substring(0, url.length() - 1);
        }
        return url;
    }

    public String getOpennmsUsername() {
        return opennmsUsername;
    }

    public String getOpennmsPassword() {
        return opennmsPassword;
    }

    /** True when both a username and a password are present. */
    public boolean hasOpennmsCredentials() {
        return !opennmsUsername.isEmpty() && !opennmsPassword.isEmpty();
    }

    @Override
    public String toString() {
        // Never include the password — this ends up in log lines.
        return "McpConfig[toolsEnabled=" + toolsEnabled + ", opennmsUrl=" + getEffectiveOpennmsUrl()
                + ", opennmsUsername=" + opennmsUsername + ", passwordPresent=" + !opennmsPassword.isEmpty() + "]";
    }
}
