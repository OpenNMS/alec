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

package org.opennms.oce.engine.temporal;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.IncidentBean;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;

/**
 * A toy processor that simply correlates on time slices
 *
 */
public class TimeSliceProcessor implements Engine {

    IncidentHandler handler;

    List<Incident> incidents = new ArrayList<>();

    // Initial hard-coded default of 10 seconds.
    int sliceMillis = 10000; // time slice size in millis

    long windowStart = 0;

    long windowStop = 0;

    IncidentBean current;

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        // There is a presumption that alarms will be presented
        //      in chronological order for this toy implementation.
        if (isInCurrentWindow(alarm)) {
            addToCurrrent(alarm);
        } else {
            newWindow(alarm);
        }
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        // TODO
    }

    private void addToCurrrent(Alarm alarm) {
        current.addAlarm(alarm);
    }

    private boolean isInCurrentWindow(Alarm alarm) {
        return alarm.getTime() >= windowStart && alarm.getTime() < windowStop;
    }

    // Send the last Incident, start a new one and a new Window
    private void newWindow(Alarm alarm) {
        if (current != null) {
            handler.onIncident(current);
        }
        windowStart = alarm.getTime();
        windowStop = windowStart + sliceMillis;
        current = new IncidentBean();
        current.setId(UUID.randomUUID().toString());
        current.addAlarm(alarm);
    }

    @Override
    public void registerIncidentHandler(IncidentHandler handler) {
        this.handler = handler;
    }

    public void setSliceMillis(int sliceMillis) {
        this.sliceMillis = sliceMillis;
    }

    @Override
    public void init(List<Alarm> alarms, List<Incident> incidents, List<InventoryObject> inventory) {
        // TODO
    }

    @Override
    public long getTickResolutionMs() {
        return sliceMillis;
    }

    @Override
    public void tick(long timestampInMillis) {
        if (current != null) {
            handler.onIncident(current);
        }
    }

    @Override
    public void destroy() {
        // no-op
    }

    @Override
    public void onInventoryAdded(Collection<InventoryObject> inventory) {
        // pass
    }

    @Override
    public void onInventoryRemoved(Collection<InventoryObject> inventory) {
        // pass
    }
}
