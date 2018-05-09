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

package org.opennms.oce.model.api;

import org.opennms.oce.model.v1.schema.Alarm;

/**
 * Receives Alarms and creates Incidents.
 *
 */
public interface AlarmProcessor {

    /**
     * Called on each new Alarm.
     * 
     * @param alarm
     */
    void onAlarm(Alarm alarm);

    /**
     * Set the initial inventory.
     * TODO - updates to inventory.
     * @param inventory
     */
    void setInventory(Model inventory);

    /**
     * An opaque String representation of options used to modify the Processors behavior. 
     * @param options
     */
    void setOptionString(String options);

    /**
     * Passes the reference to the IncidentHandler.
     * The IncidentHandler exposes <code>onIncident()</code> callback for creating and updating Incidents. 
     * @param handler
     */
    void registerIncidentHandler(IncidentHandler handler);

}
