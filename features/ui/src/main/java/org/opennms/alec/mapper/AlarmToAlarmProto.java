/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.mapper;

import java.util.Set;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.grpc.generated.AlarmSet;

public class AlarmToAlarmProto {

    public org.opennms.alec.grpc.generated.Alarm toAlarm(Alarm alarm) {
        return org.opennms.alec.grpc.generated.Alarm.newBuilder()
                .setAlarmId(alarm.getLongId())
                .setSalarmId(alarm.getId())
                .setFirstTimeSeen(AlecProtoMapperUtils.getTimestamp(alarm.getFirstTime()))
                .setLastTimeSeen(AlecProtoMapperUtils.getTimestamp(alarm.getTime()))
                .setSeverity(alarm.getSeverity().toString())
                .setDescription(alarm.getDescription())
                .setSummary(alarm.getSummary())
                .setInventoryObjectId(alarm.getInventoryObjectId())
                .setInventoryObjectType(alarm.getInventoryObjectType())
                .build();
    }

    public AlarmSet toAlarms(Set<Alarm> alarms) {
        AlarmSet.Builder builder = AlarmSet.newBuilder();
        for (Alarm alarm : alarms) {
            builder.addAlarms(toAlarm(alarm));
        }
        return builder.build();
    }
}
