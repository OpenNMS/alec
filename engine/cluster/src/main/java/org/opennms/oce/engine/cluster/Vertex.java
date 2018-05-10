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

package org.opennms.oce.engine.cluster;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.ResourceKey;

public class Vertex {
    private final long id;
    private final ResourceKey resourceKey;
    private final List<Alarm> alarms = new LinkedList<>();

    public Vertex(long id, ResourceKey resourceKey) {
        this.id = id;
        this.resourceKey = Objects.requireNonNull(resourceKey);
    }

    public ResourceKey getResourceKey() {
        return resourceKey;
    }

    public void addOrUpdateAlarm(Alarm alarm) {
        if (alarm.isClear()) {
            List<Alarm> alarmsToClear = alarms.stream().filter(a -> a.getReductionKey().equals(alarm.getReductionKey())).collect(Collectors.toList());
            alarms.removeAll(alarmsToClear);
        } else {
            alarms.add(alarm);
        }
    }

    public List<Alarm> getAlarms() {
        return alarms;
    }

    public long getId() {
        return id;
    }
}
