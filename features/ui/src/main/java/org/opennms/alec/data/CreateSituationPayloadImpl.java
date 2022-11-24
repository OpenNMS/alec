/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.data;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class CreateSituationPayloadImpl implements CreateSituationPayload {

    private final List<String> alarmIdList;
    private final String diagnosticText;
    private final String description;
    private final String feedback;


    private CreateSituationPayloadImpl(Builder builder) {
        alarmIdList = builder.alarmIdList;
        diagnosticText = builder.diagnosticText;
        description = builder.description;
        feedback = builder.feedback;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(CreateSituationPayload copy) {
        Builder builder = new Builder();
        builder.alarmIdList = copy.getAlarmIdList();
        builder.diagnosticText = copy.getDiagnosticText();
        builder.description = copy.getDescription();
        builder.feedback = copy.getFeedback();
        return builder;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        private List<String> alarmIdList;
        private String diagnosticText;
        private String description;
        private String feedback;

        private Builder() {
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder alarmIdList(List<String> val) {
            alarmIdList = val;
            return this;
        }

        public Builder diagnosticText(String val) {
            diagnosticText = val;
            return this;
        }

        public Builder description(String val) {
            description = val;
            return this;
        }

        public Builder feedback(String val) {
            feedback = val;
            return this;
        }

        public CreateSituationPayloadImpl build() {
            return new CreateSituationPayloadImpl(this);
        }
    }

    @Override
    public List<String> getAlarmIdList() {
        return alarmIdList;
    }

    @Override
    public String getDiagnosticText() {
        return diagnosticText;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getFeedback() {
        return feedback;
    }
}
