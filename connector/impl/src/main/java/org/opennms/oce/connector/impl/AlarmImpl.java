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

package org.opennms.oce.connector.impl;

import java.util.Objects;

import org.opennms.oce.connector.model.Alarm;

public class AlarmImpl implements Alarm {
    private final OpennmsModelProtos.Alarm alarm;

    public AlarmImpl(OpennmsModelProtos.Alarm alarm) {
        this.alarm = Objects.requireNonNull(alarm);
    }

    @Override
    public String getRelatedEntityId() {
        Long nodeId = null;
        if (alarm.hasNodeCriteria()) {
            nodeId = alarm.getNodeCriteria().getId();
        }
        Integer ifIndex = null;
        if (alarm.hasLastEvent()) {
             for (OpennmsModelProtos.EventParameter eventParm : alarm.getLastEvent().getParameterList()) {
                 if (Objects.equals(".1.3.6.1.2.1.2.2.1.1", eventParm.getName())) {
                     ifIndex = Integer.parseInt(eventParm.getValue());
                 }
             }
        }
        return String.format("n%d-c%d-p%d", nodeId != null ? nodeId : 0, ifIndex != null ? Math.floorDiv(ifIndex-1, ModelProviderImpl.N_PORTS) + 1 : 0, ifIndex != null ? ifIndex : 0);
    }

    @Override
    public String getReductionKey() {
        return alarm.getReductionKey();
    }

    @Override
    public String toString() {
        return String.format("Alarm[reduction-key=%s, related-entity-id=%s]",
                getReductionKey(), getRelatedEntityId());
    }
}
