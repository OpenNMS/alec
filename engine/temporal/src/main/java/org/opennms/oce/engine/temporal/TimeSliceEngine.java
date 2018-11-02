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
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.engine.api.Engine;

/**
 * A toy processor that simply correlates on time slices
 *
 */
public class TimeSliceEngine implements Engine {

    SituationHandler handler;

    List<Situation> situations = new ArrayList<>();

    // Initial hard-coded default of 10 seconds.
    int sliceMillis = 10000; // time slice size in millis

    long windowStart = 0;

    long windowStop = 0;

    SituationBean current;

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        if (isInCurrentWindow(alarm)) {
            current.addAlarm(alarm);
        } else {
            newWindow(alarm);
        }
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        if (isInCurrentWindow(alarm)) {
            current.addAlarm(alarm);
            current.setSeverity(Severity.CLEARED);
        } else {
            newWindow(alarm);
        }
    }

    private boolean isInCurrentWindow(Alarm alarm) {
        return alarm.getTime() >= windowStart && alarm.getTime() < windowStop;
    }

    // Send the last Situation, start a new one and a new Window
    private void newWindow(Alarm alarm) {
        if (current != null) {
            handler.onSituation(current);
        }
        windowStart = alarm.getTime();
        windowStop = windowStart + sliceMillis;
        current = new SituationBean();
        current.setId(UUID.randomUUID().toString());
        current.addAlarm(alarm);
        current.setSeverity(alarm.getSeverity());
    }

    @Override
    public void registerSituationHandler(SituationHandler handler) {
        this.handler = handler;
    }

    public void setSliceMillis(int sliceMillis) {
        this.sliceMillis = sliceMillis;
    }

    @Override
    public void init(List<Alarm> alarms, List<Situation> situations, List<InventoryObject> inventory) {
        // TODO
    }

    @Override
    public long getTickResolutionMs() {
        return sliceMillis;
    }

    @Override
    public void tick(long timestampInMillis) {
        if (current != null) {
            handler.onSituation(current);
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

    @Override
    public void deleteSituation(String situationId) {

    }
}
