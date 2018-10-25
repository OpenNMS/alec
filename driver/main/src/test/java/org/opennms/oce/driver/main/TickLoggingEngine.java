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

package org.opennms.oce.driver.main;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.engine.api.Engine;

import com.google.common.collect.ImmutableList;

public class TickLoggingEngine implements Engine {
    private final List<Long> ticks = new ArrayList<>();

    @Override
    public void init(List<Alarm> alarms, List<Situation> situations, List<InventoryObject> inventory) {

    }

    @Override
    public long getTickResolutionMs() {
        return 100;
    }

    @Override
    public synchronized void tick(long timestampInMillis) {
        ticks.add(timestampInMillis);
    }

    @Override
    public void destroy() {

    }

    @Override
    public void registerSituationHandler(SituationHandler handler) {

    }

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {

    }

    @Override
    public void onAlarmCleared(Alarm alarm) {

    }

    @Override
    public void onInventoryAdded(Collection<InventoryObject> inventoryObject) {

    }

    @Override
    public void onInventoryRemoved(Collection<InventoryObject> inventoryObject) {

    }

    public synchronized List<Long> getTicks() {
        return ImmutableList.copyOf(ticks);
    }

    public synchronized void resetTicks() {
        ticks.clear();
    }
}
