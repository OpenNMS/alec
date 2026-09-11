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

/**
 * POST body for {@code /alec/llm/validate}. Any field left blank tells the
 * server to fall back to the currently-persisted config value — so the user can
 * validate an already-stored key (which the UI never sees) without re-typing it.
 * Unknown fields are ignored so the UI can post the whole config form verbatim.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class ValidationRequest {

    private String baseUrl;
    private String model;
    private String apiKey;
    // ALEC-308 (validate-tools only): an unsaved OpenNMS REST login to test
    // instead of the stored one. Blank fields fall back to the stored values.
    private String opennmsUrl;
    private String opennmsUsername;
    private String opennmsPassword;

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getOpennmsUrl() {
        return opennmsUrl;
    }

    public void setOpennmsUrl(String opennmsUrl) {
        this.opennmsUrl = opennmsUrl;
    }

    public String getOpennmsUsername() {
        return opennmsUsername;
    }

    public void setOpennmsUsername(String opennmsUsername) {
        this.opennmsUsername = opennmsUsername;
    }

    public String getOpennmsPassword() {
        return opennmsPassword;
    }

    public void setOpennmsPassword(String opennmsPassword) {
        this.opennmsPassword = opennmsPassword;
    }
}
