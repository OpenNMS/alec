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

package org.opennms.oce.features.graph.api;

import java.util.Collection;
import java.util.List;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;

/**
 * An interface that specifies the communication channel between the graph manager and the graph implementation. The
 * calls specified in this interface are the primary way in which a graph is manipulated (vertices/edges added or
 * deleted).
 */
public interface ManagedGraph {
    /**
     * Process inventory being added.
     *
     * @param inventory the collection of inventory objects to be added
     */
    void addInventory(Collection<InventoryObject> inventory);

    /**
     * Process inventory being removed.
     *
     * @param inventory the collection of inventory objects to be removed
     */
    void removeInventory(Collection<InventoryObject> inventory);

    /**
     * Process a single alarm being added or updated.
     *
     * @param alarm the alarm that is being added or updated
     */
    void addOrUpdateAlarm(Alarm alarm);

    /**
     * Process a list of alarms being added or updated.
     *
     * @param alarms the list of alarms being added or updated
     */
    void addOrUpdateAlarms(List<Alarm> alarms);

    /**
     * Garbage collect alarms from vertices.
     * 
     * @param currentTimeMs the current timestamp in milliseconds
     * @param problemTimeoutMs the timeout for an alarm in milliseconds
     * @param clearTimeoutMs the timeout for an alarm clear in milliseconds
     */
    void garbageCollectAlarms(long currentTimeMs, long problemTimeoutMs, long clearTimeoutMs);

    /**
     * Instruct the graph to close.
     */
    default void close() {
        // no-op
    }
}
