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

package org.opennms.oce.engine.api;

import java.util.List;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.AlarmFeedbackHandler;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;

/**
 * An engine that consumes {@link Alarm alarms}, {@link InventoryObject inventory} and
 * {@link AlarmFeedback alarm feedback} to produce correlated {@link Situation situations}.
 */
public interface Engine extends AlarmHandler, InventoryHandler, AlarmFeedbackHandler {

    void init(List<Alarm> alarms, List<AlarmFeedback> alarmFeedback, List<Situation> situations,
              List<InventoryObject> inventory);

    long getTickResolutionMs();

    void tick(long timestampInMillis);

    void destroy();

    /**
     * Passes the reference to the SituationHandler.
     * The SituationHandler exposes <code>onSituation()</code> callback for creating and updating Situations.
     *
     * @param handler
     */
    void registerSituationHandler(SituationHandler handler);

    /**
     * Delete the situation with the given situation Id.
     *
     * @param situationId the situation Id
     * @throws InterruptedException if the thread is interrupted while waiting for the engine to init
     */
    void deleteSituation(String situationId) throws InterruptedException;
}
