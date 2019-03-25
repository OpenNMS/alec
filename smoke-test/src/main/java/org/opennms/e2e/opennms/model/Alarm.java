/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
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

package org.opennms.e2e.opennms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Alarm {
    private Integer id;
    private String description;
    private Integer ackId;
    private String uei;
    private String reductionKey;
    private Long firstEventTime;
    private Long lastEventTime;
    private Integer type;
    private Integer count;
    private String severity;
    private String logMessage;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAckId() {
        return ackId;
    }

    public void setAckId(Integer ackId) {
        this.ackId = ackId;
    }

    public String getUei() {
        return uei;
    }

    public void setUei(String uei) {
        this.uei = uei;
    }

    public String getReductionKey() {
        return reductionKey;
    }

    public void setReductionKey(String reductionKey) {
        this.reductionKey = reductionKey;
    }

    public Long getFirstEventTime() {
        return firstEventTime;
    }

    public void setFirstEventTime(Long firstEventTime) {
        this.firstEventTime = firstEventTime;
    }

    public Long getLastEventTime() {
        return lastEventTime;
    }

    public void setLastEventTime(Long lastEventTime) {
        this.lastEventTime = lastEventTime;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getLogMessage() {
        return logMessage;
    }

    public void setLogMessage(String logMessage) {
        this.logMessage = logMessage;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Alarm alarm = (Alarm) o;
        return Objects.equals(id, alarm.id) &&
                Objects.equals(description, alarm.description) &&
                Objects.equals(ackId, alarm.ackId) &&
                Objects.equals(uei, alarm.uei) &&
                Objects.equals(reductionKey, alarm.reductionKey) &&
                Objects.equals(firstEventTime, alarm.firstEventTime) &&
                Objects.equals(lastEventTime, alarm.lastEventTime) &&
                Objects.equals(type, alarm.type) &&
                Objects.equals(count, alarm.count) &&
                Objects.equals(severity, alarm.severity) &&
                Objects.equals(logMessage, alarm.logMessage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, ackId, uei, reductionKey, firstEventTime, lastEventTime, type, count, severity, logMessage);
    }

    @Override
    public String toString() {
        return "Alarm{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", ackId=" + ackId +
                ", uei='" + uei + '\'' +
                ", reductionKey='" + reductionKey + '\'' +
                ", firstEventTime=" + firstEventTime +
                ", lastEventTime=" + lastEventTime +
                ", type=" + type +
                ", count=" + count +
                ", severity='" + severity + '\'' +
                ", logMessage='" + logMessage + '\'' +
                '}';
    }
}
