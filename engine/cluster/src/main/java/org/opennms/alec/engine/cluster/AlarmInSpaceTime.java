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

package org.opennms.alec.engine.cluster;

import java.util.Objects;

import org.apache.commons.math3.ml.clustering.Clusterable;
import org.opennms.alec.datasource.api.Alarm;

public class AlarmInSpaceTime implements Clusterable {
    private final CEVertex vertex;
    private final Alarm alarm;
    private final double[] point;

    public AlarmInSpaceTime(CEVertex vertex, Alarm alarm) {
        this.vertex = Objects.requireNonNull(vertex);
        this.alarm = Objects.requireNonNull(alarm);
        point = new double[]{alarm.getTime(), vertex.getNumericId(), alarm.getFirstTime()};
    }

    @Override
    public double[] getPoint() {
        return point;
    }

    public String getAlarmId() {
        return alarm.getId();
    }

    public Alarm getAlarm() {
        return alarm;
    }

    public long getAlarmTime() {
        return alarm.getTime();
    }

    public long getAlarmFirstTime() {
        return alarm.getFirstTime();
    }

    public CEVertex getVertex() {
        return vertex;
    }
}
