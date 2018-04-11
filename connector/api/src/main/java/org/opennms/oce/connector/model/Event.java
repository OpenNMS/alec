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

package org.opennms.oce.connector.model;

import java.util.Objects;

public class Event {

    public static final String TRIGGER_UEI = "uei.opennms.org/alarms/trigger";
    public static final String CLEAR_UEI = "uei.opennms.org/alarms/clear";

    final String uei;
    final String service;

    public Event(String uei, String service) {
        this.uei = Objects.requireNonNull(uei);
        this.service = Objects.requireNonNull(service);
    }

    public String getUei() {
        return uei;
    }

    public String getService() {
        return service;
    }

    @Override
    public String toString() {
        return String.format("Event[uei=%s, service=%s]", uei, service);
    }
}
