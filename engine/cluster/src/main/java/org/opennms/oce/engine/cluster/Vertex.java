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

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.ResourceKey;

public class Vertex {
    private final long id;
    private final ResourceKey resourceKey;
    private final Map<String, Alarm> alarmsById = new LinkedHashMap<>();

    public Vertex(long id, ResourceKey resourceKey) {
        this.id = id;
        this.resourceKey = Objects.requireNonNull(resourceKey);
    }

    public ResourceKey getResourceKey() {
        return resourceKey;
    }

    public void addOrUpdateAlarm(Alarm alarm) {
        alarmsById.put(alarm.getId(), alarm);
    }

    public Collection<Alarm> getAlarms() {
        return alarmsById.values();
    }

    public long getId() {
        return id;
    }

    public void garbageCollectAlarms(long timestampInMillis, long problemTimeoutMs, long clearTimeoutMs) {
        final long problemCutoffMs = timestampInMillis - problemTimeoutMs;
        final long clearCutoffMs = timestampInMillis - clearTimeoutMs;

        alarmsById.entrySet().removeIf(entry -> {
            final Alarm alarm = entry.getValue();
            if (alarm.isClear() && alarm.getTime() < clearCutoffMs) {
                return true;
            } else if (!alarm.isClear() && alarm.getTime() < problemCutoffMs) {
                return true;
            } else {
                return false;
            }
        });
    }

    @Override
    public String toString() {
        return String.format("Vertex[id=%s, resourceKey=%s]", id, resourceKey);
    }
}
