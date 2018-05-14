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

package org.opennms.oce.engine.topology;

import java.util.ArrayList;
import java.util.List;

import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;

/**
 * A topology driver processor with Rules Engine
 *
 */
public class TopologyProcessor implements Engine {

    IncidentHandler handler;

    List<Incident> incidents = new ArrayList<>();

    private Model inventory;

    @Override
    public void onAlarm(Alarm alarm) {
        // TODO - find the inventory item and apply the alarm 
        ModelObject object = getObjectForAlarm(alarm);
        // TODO - Add Alarm to ModelObject - TODO - update ModelObject API
        // ModelObject will determine if alarm affects its state and if it should propagate.
        // ModelObjecdt.setAlarm(alarm) could return boolean indicator if state is changed in order to trigger fireAllRules();
    }

    @Override
    public void registerIncidentHandler(IncidentHandler handler) {
        this.handler = handler;
    }

    @Override
    public void setInventory(Model inventory) {
        this.inventory = inventory;
    }

    @Override
    public long getTickResolutionMs() {
        return 100; // TODO 
    }

    @Override
    public void tick(long timestampInMillis) {
        // TODO - update Rules context?
    }

    private ModelObject getObjectForAlarm(Alarm alarm) {
        // TODO Auto-generated method stub
        return null;
    }

}
