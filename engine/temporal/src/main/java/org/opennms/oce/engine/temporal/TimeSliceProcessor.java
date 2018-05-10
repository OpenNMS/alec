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
import java.util.List;
import java.util.UUID;

import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.engine.common.IncidentBean;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.api.Model;

/**
 * A toy processor that simply correlates on time slices
 *
 */
public class TimeSliceProcessor implements Engine {

    IncidentHandler handler;

    List<Incident> incidents = new ArrayList<>();

    // Initial hard-coded default of 1 second.
    int sliceMillis = 1000; // time slice size in millis

    long windowStart = 0;

    long windowStop = 0;

    IncidentBean current;

    @Override
    public void onAlarm(Alarm alarm) {
        // There is a presumption that alarms will be presented 
        //      in chronological order for this toy implementation.
        if (isInCurrentWindow(alarm)) {
            addToCurrrent(alarm);
        } else {
            newWindow(alarm);
        }

    }

    private void addToCurrrent(Alarm alarm) {
        current.addAlarm(alarm);
    }

    private boolean isInCurrentWindow(Alarm alarm) {
        System.out.println(alarm.getId() + " : " + alarm.getTime() + " -- [" + windowStart + "," + windowStop + "]");
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

    @Override
    public void setInventory(Model inventory) {
        // Ignored by this processor;
    }

    public void setSliceMillis(int sliceMillis) {
        this.sliceMillis = sliceMillis;
    }

    @Override
    public long getTickResolutionMs() {
        return sliceMillis;
    }

    @Override
    public void tick(long timestampInMillis) {
        // TODO: Drive buckets from tick instead of next alarm
    }

}
