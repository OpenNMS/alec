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

package org.opennms.oce.processor.api;

import java.util.Set;

import org.opennms.oce.datasource.api.Incident;

/**
 * A situation processor accepts situations and does something with them such as forwarding them as an event.
 */
public interface SituationProcessor {
    /**
     * Accept an {@link Incident} to process.
     *
     * @param incident the incident to process
     */
    void accept(Incident incident);

    /**
     * Confirm that a situation alarm was received for the generated incident. Implementing this method is optional and
     * defaults to a no-op.
     *
     * @param reductionKeysInAlarm the reduction keys contained in the individual alarms in the situation
     */
    default void confirm(Set<String> reductionKeysInAlarm) {
    }
}
