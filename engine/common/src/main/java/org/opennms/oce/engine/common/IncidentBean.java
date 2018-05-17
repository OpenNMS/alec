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

package org.opennms.oce.engine.common;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.api.ModelObject;

public class IncidentBean implements Incident {
    private String id;
    private ModelObject modelObject;
    private Set<Alarm> alarms = new LinkedHashSet<>();
    private long creationTime;

    public IncidentBean() {
    }

    public IncidentBean(String id) {
        this.id = id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(long creationTime) {
        this.creationTime = creationTime;
    }

    public void addAlarm(Alarm alarm) {
        alarms.add(alarm);
    }

    @Override
    public Set<Alarm> getAlarms() {
        return alarms;
    }

    @Override
    public ModelObject getModelObject() {
        return modelObject;
    }

    public void setModelObject(ModelObject object) {
        modelObject = object;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncidentBean that = (IncidentBean) o;
        return creationTime == that.creationTime &&
                Objects.equals(id, that.id) &&
                Objects.equals(alarms, that.alarms);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, alarms, creationTime);
    }

    @Override
    public String toString() {
        return String.format("IncidentBean[id=%s, creationTime=%d, alarms=%s]", id, creationTime, alarms);
    }
}
