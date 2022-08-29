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

package org.opennms.alec.datasource.common;

import java.util.Objects;
import java.util.StringJoiner;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;

/**
 * An implementation of {@link Alarm} that enforces deep immutability.
 */
public final class ImmutableAlarm implements Alarm {
    private final String id;
    private final long firstTime;
    private final long time;
    private final Severity severity;
    private final String inventoryObjectId;
    private final String inventoryObjectType;
    private final String summary;
    private final String description;
    private final Long nodeId;
    private final String nodeLocation;
    private final String nodeLabel;
    private final String reductionKey;

    private ImmutableAlarm(Builder builder) {
        this.id = builder.id;
        this.firstTime = builder.firstTime;
        this.time = builder.time;
        this.severity = builder.severity;
        this.inventoryObjectId = builder.inventoryObjectId;
        this.inventoryObjectType = builder.inventoryObjectType;
        this.summary = builder.summary;
        this.description = builder.description;
        this.nodeId = builder.nodeId;
        this.nodeLabel = builder.nodeLabel;
        this.nodeLocation = builder.nodeLocation;
        this.reductionKey = builder.reductionKey;
    }

    public static final class Builder {
        private String id;
        private long firstTime;
        private long time;
        private Severity severity;
        private String inventoryObjectId;
        private String inventoryObjectType;
        private String summary;
        private String description;
        private Long nodeId;
        private String nodeLabel;
        private String nodeLocation;
        private String reductionKey;

        private Builder() {
            firstTime = System.currentTimeMillis();
            time = System.currentTimeMillis();
        }

        private Builder(Alarm alarm) {
            this.id = alarm.getId();
            this.firstTime = alarm.getFirstTime();
            this.time = alarm.getTime();
            this.severity = alarm.getSeverity();
            this.inventoryObjectId = alarm.getInventoryObjectId();
            this.inventoryObjectType = alarm.getInventoryObjectType();
            this.summary = alarm.getSummary();
            this.description = alarm.getDescription();
            this.nodeId = alarm.getNodeId();
            this.nodeLabel = alarm.getNodeLabel();
            this.nodeLocation = alarm.getNodeLocation();
            this.reductionKey = alarm.getReductionKey();
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setFirstTime(long firstTime){
            this.firstTime = firstTime;
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

        public Builder setNodeId(Long nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        public Builder setNodeLabel(String nodeLabel) {
            this.nodeLabel = nodeLabel;
            return this;
        }

        public Builder setNodeLocation(String nodeLocation) {
            this.nodeLocation = nodeLocation;
            return this;
        }

        public Builder setReductionKey(String reductionKey) {
            this.reductionKey = reductionKey;
            return this;
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
    public long getFirstTime(){
        return firstTime;
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
    public String getNodeLabel() {
        return nodeLabel;
    }

    @Override
    public String getNodeLocation() {
        return nodeLocation;
    }

    @Override
    public String getReductionKey() {
        return reductionKey;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImmutableAlarm that = (ImmutableAlarm) o;
        return time == that.time &&
                firstTime == that.firstTime &&
                Objects.equals(id, that.id) &&
                severity == that.severity &&
                Objects.equals(inventoryObjectId, that.inventoryObjectId) &&
                Objects.equals(inventoryObjectType, that.inventoryObjectType) &&
                Objects.equals(summary, that.summary) &&
                Objects.equals(description, that.description) &&
                Objects.equals(nodeId, that.nodeId) &&
                Objects.equals(nodeLabel, that.nodeLabel) &&
                Objects.equals(nodeLocation, that.nodeLocation) &&
                Objects.equals(reductionKey, that.reductionKey);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, time, severity, inventoryObjectId, inventoryObjectType, summary, description, nodeId, nodeLabel, nodeLocation, reductionKey);
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", ImmutableAlarm.class.getSimpleName() + "[", "]")
                .add("id='" + id + "'")
                .add("firstTime=" + firstTime)
                .add("time=" + time)
                .add("severity=" + severity)
                .add("inventoryObjectId='" + inventoryObjectId + "'")
                .add("inventoryObjectType='" + inventoryObjectType + "'")
                .add("summary='" + summary + "'")
                .add("description='" + description + "'")
                .add("nodeId=" + nodeId)
                .add("nodeLocation='" + nodeLocation + "'")
                .add("nodeLabel='" + nodeLabel + "'")
                .add("reductionKey='" + reductionKey + "'")
                .toString();
    }
}
