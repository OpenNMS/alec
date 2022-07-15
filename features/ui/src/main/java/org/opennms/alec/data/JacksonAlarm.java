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

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

@JsonDeserialize(builder = JacksonAlarm.Builder.class)
public class JacksonAlarm implements Alarm {

    private final String id;
    private final long time;
    private final boolean clear;
    private final Severity severity;
    private final String inventoryObjectId;
    private final String inventoryObjectType;
    private final String summary;
    private final String description;
    private final Long nodeId;

    private JacksonAlarm(Builder builder) {
        id = builder.id;
        time = builder.time;
        clear = builder.clear;
        severity = builder.severity;
        inventoryObjectId = builder.inventoryObjectId;
        inventoryObjectType = builder.inventoryObjectType;
        summary = builder.summary;
        description = builder.description;
        nodeId = builder.nodeId;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(Alarm copy) {
        Builder builder = new Builder();
        builder.id = copy.getId();
        builder.time = copy.getTime();
        builder.clear = copy.isClear();
        builder.severity = copy.getSeverity();
        builder.inventoryObjectId = copy.getInventoryObjectId();
        builder.inventoryObjectType = copy.getInventoryObjectType();
        builder.summary = copy.getSummary();
        builder.description = copy.getDescription();
        builder.nodeId = copy.getNodeId();
        return builder;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getTime() {
        return time;
    }

    @Override
    public boolean isClear() {
        return clear;
    }

    @Override
    public Severity getSeverity() {
        return severity;
    }

    @Override
    public String getInventoryObjectId() {
        return inventoryObjectId;
    }

    @Override
    public String getInventoryObjectType() {
        return inventoryObjectType;
    }

    @Override
    public String getSummary() {
        return summary;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public Long getNodeId() {
        return nodeId;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        private String id;
        private long time;
        private boolean clear;
        private Severity severity;
        private String inventoryObjectId;
        private String inventoryObjectType;
        private String summary;
        private String description;
        private Long nodeId;

        private Builder() {
        }

        public Builder id(String val) {
            id = val;
            return this;
        }

        public Builder time(long val) {
            time = val;
            return this;
        }

        public Builder clear(boolean val) {
            clear = val;
            return this;
        }

        public Builder severity(Severity val) {
            severity = val;
            return this;
        }

        public Builder inventoryObjectId(String val) {
            inventoryObjectId = val;
            return this;
        }

        public Builder inventoryObjectType(String val) {
            inventoryObjectType = val;
            return this;
        }

        public Builder summary(String val) {
            summary = val;
            return this;
        }

        public Builder description(String val) {
            description = val;
            return this;
        }

        public Builder nodeId(Long val) {
            nodeId = val;
            return this;
        }

        public JacksonAlarm build() {
            return new JacksonAlarm(this);
        }
    }
}
