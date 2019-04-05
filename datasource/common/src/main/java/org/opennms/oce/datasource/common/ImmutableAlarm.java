/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.oce.datasource.common;

import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Severity;

/**
 * An implementation of {@link Alarm} that enforces deep immutability.
 */
public final class ImmutableAlarm implements Alarm {
    private final String id;
    private final long time;
    private final Severity severity;
    private final String inventoryObjectId;
    private final String inventoryObjectType;
    private final String summary;
    private final String description;
    private final Long nodeId;

    private ImmutableAlarm(Builder builder) {
        this.id = builder.id;
        this.time = builder.time;
        this.severity = builder.severity;
        this.inventoryObjectId = builder.inventoryObjectId;
        this.inventoryObjectType = builder.inventoryObjectType;
        this.summary = builder.summary;
        this.description = builder.description;
        this.nodeId = builder.nodeId;
    }

    public static final class Builder {
        private String id;
        private long time;
        private Severity severity;
        private String inventoryObjectId;
        private String inventoryObjectType;
        private String summary;
        private String description;
        private Long nodeId;

        private Builder() {
            time = System.currentTimeMillis();
        }

        private Builder(Alarm alarm) {
            this.id = alarm.getId();
            this.time = alarm.getTime();
            this.severity = alarm.getSeverity();
            this.inventoryObjectId = alarm.getInventoryObjectId();
            this.inventoryObjectType = alarm.getInventoryObjectType();
            this.summary = alarm.getSummary();
            this.description = alarm.getDescription();
            this.nodeId = alarm.getNodeId();
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setTime(long time) {
            this.time = time;
            return this;
        }

        public Builder setSeverity(Severity severity) {
            this.severity = severity;
            return this;
        }

        public Builder setInventoryObjectId(String inventoryObjectId) {
            this.inventoryObjectId = inventoryObjectId;
            return this;
        }

        public Builder setInventoryObjectType(String inventoryObjectType) {
            this.inventoryObjectType = inventoryObjectType;
            return this;
        }

        public Builder setSummary(String summary) {
            this.summary = summary;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public void setNodeId(Long nodeId) {
            this.nodeId = nodeId;
        }

        public ImmutableAlarm build() {
            Objects.requireNonNull(id, "Id cannot be null");

            return new ImmutableAlarm(this);
        }
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilderFrom(Alarm alarm) {
        return new Builder(alarm);
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
        return Severity.CLEARED == severity;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImmutableAlarm that = (ImmutableAlarm) o;
        return time == that.time &&
                Objects.equals(id, that.id) &&
                severity == that.severity &&
                Objects.equals(inventoryObjectId, that.inventoryObjectId) &&
                Objects.equals(inventoryObjectType, that.inventoryObjectType) &&
                Objects.equals(summary, that.summary) &&
                Objects.equals(description, that.description) &&
                Objects.equals(nodeId, that.nodeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, time, severity, inventoryObjectId, inventoryObjectType, summary, description, nodeId);
    }

    @Override
    public String toString() {
        return "ImmutableAlarm{" +
                "id='" + id + '\'' +
                ", time=" + time +
                ", severity=" + severity +
                ", inventoryObjectId='" + inventoryObjectId + '\'' +
                ", inventoryObjectType='" + inventoryObjectType + '\'' +
                ", summary='" + summary + '\'' +
                ", description='" + description + '\'' +
                ", nodeId=" + nodeId +
                '}';
    }
}
