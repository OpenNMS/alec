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
import java.util.Set;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

@JsonDeserialize(builder = JacksonSituation.Builder.class)
public class JacksonSituation implements Situation {

    private final String id;
    private final long creationTime;
    private final List<ResourceKey> resourceKeys;
    private final Set<Alarm> alarms;
    private final Severity severity;
    private final String diagnosticText;
    private final Status status;

    private JacksonSituation(Builder builder) {
        id = builder.id;
        creationTime = builder.creationTime;
        resourceKeys = builder.resourceKeys;
        alarms = builder.alarms;
        severity = builder.severity;
        diagnosticText = builder.diagnosticText;
        status = builder.status;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(JacksonSituation copy) {
        Builder builder = new Builder();
        builder.id = copy.getId();
        builder.creationTime = copy.getCreationTime();
        builder.resourceKeys = copy.getResourceKeys();
        builder.alarms = copy.getAlarms();
        builder.severity = copy.getSeverity();
        builder.diagnosticText = copy.getDiagnosticText();
        builder.status = copy.getStatus();
        return builder;
    }

    public static Builder newBuilder(Situation copy) {
        Builder builder = new Builder();
        builder.id = copy.getId();
        builder.creationTime = copy.getCreationTime();
        builder.resourceKeys = copy.getResourceKeys();
        builder.alarms = copy.getAlarms();
        builder.severity = copy.getSeverity();
        builder.diagnosticText = copy.getDiagnosticText();
        return builder;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    @Override
    public List<ResourceKey> getResourceKeys() {
        return resourceKeys;
    }

    @Override
    public Set<Alarm> getAlarms() {
        return alarms;
    }

    @Override
    public Severity getSeverity() {
        return severity;
    }

    @Override
    public String getDiagnosticText() {
        return diagnosticText;
    }

    public Status getStatus() {
        return status;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        private String id;
        private long creationTime;
        @JsonDeserialize(contentAs = ResourceKey.class)
        private List<ResourceKey> resourceKeys;
        @JsonDeserialize(contentAs = JacksonAlarm.class)
        private Set<Alarm> alarms;
        @JsonDeserialize(as = Severity.class)
        private Severity severity;
        private String diagnosticText;
        private Status status;

        private Builder() {
        }

        public Builder id(String val) {
            id = val;
            return this;
        }

        public Builder creationTime(long val) {
            creationTime = val;
            return this;
        }

        public Builder resourceKeys(List<ResourceKey> resourceKeys) {
            this.resourceKeys = resourceKeys;
            return this;
        }

        public Builder alarms(Set<Alarm> alarms) {
            this.alarms = alarms;
            return this;
        }


        public Builder severity(Severity val) {
            severity = val;
            return this;
        }

        public Builder diagnosticText(String val) {
            diagnosticText = val;
            return this;
        }

        public Builder status(Status val) {
            status = val;
            return this;
        }

        public JacksonSituation build() {
            return new JacksonSituation(this);
        }
    }
}
