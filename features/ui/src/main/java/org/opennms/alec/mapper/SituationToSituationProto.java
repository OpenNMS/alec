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

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.grpc.SituationSetProtos;

public class SituationToSituationProto {
    final AlarmToAlarmProto alarmMapper = new AlarmToAlarmProto();

   public org.opennms.alec.grpc.SituationSetProtos.Situation toSituation(Situation situation) {
        return SituationSetProtos.Situation.newBuilder()
                .setAlarms(alarmMapper.toAlarms(situation.getAlarms()))
                .setSeverity(situation.getSeverity().toString())
                .setCreationTime(Utils.getTimestamp(situation.getCreationTime()))
                .setLastModificationTime(Utils.getTimestamp(situation.getLastTime()))
                .setDiagnostic(Optional.ofNullable(situation.getDiagnosticText()).orElse(""))
                .setId(Long.parseLong(situation.getId()))
//                .setEngine(situation.)
                .setStatus(SituationSetProtos.StatusType.valueOf(situation.getStatus().toString()))
//                .setTags()
                .build();
    }

    public SituationSetProtos.SituationSet toSituationSet(List<Situation> situations) {
        return SituationSetProtos.SituationSet.newBuilder().addAllSituations(
                situations
                        .stream()
                        .map(this::toSituation)
                        .collect(Collectors.toUnmodifiableSet()))
                .build();
    }

    public SituationSetProtos.SituationSet toSituationSet(Situation situation) {
        return SituationSetProtos.SituationSet.newBuilder()
                .addSituations(toSituation(situation))
                .build();
    }
}
