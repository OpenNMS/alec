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

package org.opennms.oce.datasource.common;

import java.util.List;
import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.AlarmHandler;

public class StaticAlarmDatasource implements AlarmDatasource {
    private final List<Alarm> alarms;

    public StaticAlarmDatasource(List<Alarm> alarms) {
        this.alarms = Objects.requireNonNull(alarms);
    }

    @Override
    public List<Alarm> getAlarms() {
        return alarms;
    }

    @Override
    public List<Alarm> getAlarmsAndRegisterHandler(AlarmHandler handler) {
        return alarms;
    }

    @Override
    public void registerHandler(AlarmHandler handler) {
        // pass
    }

    @Override
    public void unregisterHandler(AlarmHandler handler) {
        // pass
    }

    @Override
    public void waitUntilReady() {
        // pass
    }
}
