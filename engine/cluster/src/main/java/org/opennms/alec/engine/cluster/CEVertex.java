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

package org.opennms.alec.engine.cluster;

import java.util.Collection;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.features.graph.api.Vertex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CEVertex implements Vertex {

    private static final Logger LOG = LoggerFactory.getLogger(AbstractClusterEngine.class);

    private final long id;
    private InventoryObject inventoryObject;
    private final ResourceKey resourceKey;
    private final Map<String, Alarm> alarmsById = new LinkedHashMap<>();
    private final long createdTimestamp;
    private long updatedTimestamp;

    public CEVertex(long id, ResourceKey resourceKey) {
        this(id, resourceKey, null);
    }

    public CEVertex(long id, ResourceKey resourceKey, InventoryObject inventoryObject) {
        this.id = id;
        this.resourceKey = Objects.requireNonNull(resourceKey);
        this.inventoryObject = inventoryObject;
        createdTimestamp = System.currentTimeMillis();
        updatedTimestamp = createdTimestamp;
    }

    public void setInventoryObject(InventoryObject inventoryObject) {
        this.inventoryObject = inventoryObject;
    }

    public ResourceKey getResourceKey() {
        return resourceKey;
    }

    public void addOrUpdateAlarm(Alarm alarm) {
        alarmsById.put(alarm.getId(), alarm);
        updatedTimestamp = System.currentTimeMillis();
    }

    @Override
    public Collection<Alarm> getAlarms() {
        return alarmsById.values();
    }

    public int getNumAlarms() {
        return alarmsById.size();
    }

    public boolean hasAlarms() {
        return !alarmsById.isEmpty();
    }

    @Override
    public Optional<InventoryObject> getInventoryObject() {
        return Optional.ofNullable(inventoryObject);
    }

    @Override
    public String getId() {
        return Long.toString(id);
    }

    @Override
    public long getCreatedTimestamp() {
        return createdTimestamp;
    }

    @Override
    public long getUpdatedTimestamp() {
        return updatedTimestamp;
    }

    public long getNumericId() {
        return id;
    }

    public int garbageCollectAlarms(long timestampInMillis, long problemTimeoutMs, long clearTimeoutMs) {
        final long problemCutoffMs = timestampInMillis - problemTimeoutMs;
        final long clearCutoffMs = timestampInMillis - clearTimeoutMs;

        int numAlarmsBefore = alarmsById.size();
        alarmsById.entrySet().removeIf(entry -> {
            final Alarm alarm = entry.getValue();
            if (alarm.isClear() && alarm.getTime() < clearCutoffMs) {
                if (LOG.isDebugEnabled()) {
                    LOG.debug("GCing cleared alarm with id: {}, alarm time is: {} which is before the cutoff time of: {}",
                            alarm.getId(), new Date(alarm.getTime()), new Date(clearCutoffMs));
                }
                return true;
            } else if (!alarm.isClear() && alarm.getTime() < problemCutoffMs) {
                if (LOG.isDebugEnabled()) {
                    LOG.debug("GCing problem alarm with id: {}, alarm time is: {} which is before the cutoff time of: {}",
                            alarm.getId(), new Date(alarm.getTime()), new Date(problemCutoffMs));
                }
                return true;
            } else {
                return false;
            }
        });
        return numAlarmsBefore - alarmsById.size();
    }

    @Override
    public String toString() {
        return String.format("CEVertex[id=%s, resourceKey=%s]", id, resourceKey);
    }

}
