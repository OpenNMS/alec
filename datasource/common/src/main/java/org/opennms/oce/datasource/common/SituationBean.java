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

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;

public class SituationBean implements Situation {
    private String id;
    private long creationTime;

    private Severity severity = Severity.INDETERMINATE;
    private List<ResourceKey> resourceKeys = new ArrayList<>();
    private Set<Alarm> alarms = new LinkedHashSet<>();
    private String diagnosticText;

    public SituationBean() {
    }

    public SituationBean(String id) {
        this.id = id;
    }

    public SituationBean(Situation situation) {
        this.id = situation.getId();
        this.creationTime = situation.getCreationTime();
        this.severity = situation.getSeverity();
        this.resourceKeys.addAll(situation.getResourceKeys());
        this.alarms.addAll(situation.getAlarms());
        this.diagnosticText = situation.getDiagnosticText();
    }

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(long creationTime) {
        this.creationTime = creationTime;
    }

    @Override
    public List<ResourceKey> getResourceKeys() {
        return resourceKeys;
    }

    public void setResourceKeys(List<ResourceKey> resourceKeys) {
        this.resourceKeys = resourceKeys;
    }

    public void addResourceKey(ResourceKey resourceKey) {
        resourceKeys.add(resourceKey);
    }

    @Override
    public Set<Alarm> getAlarms() {
        return alarms;
    }

    public void setAlarms(Set<Alarm> alarms) {
        this.alarms = alarms;
    }

    public void addAlarm(Alarm alarm) {
        alarms.add(alarm);
    }

    public Severity getSeverity() {
        return severity;
    }

    @Override
    public String getDiagnosticText() {
        return diagnosticText;
    }

    public void setDiagnosticText(String diagnosticText) {
        this.diagnosticText = diagnosticText;
    }

    public void setSeverity(Severity severity) {
        this.severity = severity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SituationBean that = (SituationBean) o;
        return creationTime == that.creationTime &&
                Objects.equals(resourceKeys, that.resourceKeys) &&
                Objects.equals(alarms, that.alarms) &&
                Objects.equals(severity, that.severity) &&
                Objects.equals(diagnosticText, that.diagnosticText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(creationTime, resourceKeys, alarms, severity, diagnosticText);
    }

    @Override
    public String toString() {
        return "SituationBean{" +
                "id='" + id + '\'' +
                ", creationTime=" + creationTime +
                ", resourceKeys=" + resourceKeys +
                ", alarms=" + alarms +
                ", severity=" + severity +
                ", diagnosticText=" + diagnosticText +
                '}';
    }
}
