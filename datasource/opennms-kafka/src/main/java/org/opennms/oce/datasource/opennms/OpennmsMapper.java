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

package org.opennms.oce.datasource.opennms;

import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

import com.google.common.base.Strings;

public class OpennmsMapper {

    public static AlarmBean toAlarm(OpennmsModelProtos.Alarm alarm) {
        final AlarmBean bean = new AlarmBean();
        bean.setId(alarm.getReductionKey());
        bean.setTime(alarm.getLastEventTime());
        bean.setSeverity(toSeverity(alarm.getSeverity()));
        bean.setInventoryObjectType(alarm.getManagedObjectType());
        bean.setInventoryObjectId(alarm.getManagedObjectInstance());
        bean.setSummary(alarm.getLogMessage());
        bean.setDescription(alarm.getDescription());
        return bean;
    }

    public static SituationBean toSituation(OpennmsModelProtos.Alarm alarm) {
        final SituationBean bean = new SituationBean();
        bean.setCreationTime(alarm.getFirstEventTime());
        final OpennmsModelProtos.Event lastEvent = alarm.getLastEvent();
        if (lastEvent != null) {
            lastEvent.getParameterList().stream()
                    .filter( p -> SituationToEvent.SITUATION_ID_PARM_NAME.equals(p.getName()))
                    .findFirst()
                    .ifPresent(p -> bean.setId(p.getValue()));
        }
        bean.setSeverity(toSeverity(alarm.getSeverity()));
        alarm.getRelatedAlarmList().forEach(relatedAlarm -> bean.addAlarm(toAlarm(relatedAlarm)));
        return bean;
    }

    protected static Severity toSeverity(OpennmsModelProtos.Severity severity) {
        switch (severity) {
            case CLEARED:
                return Severity.CLEARED;
            case NORMAL:
                return Severity.NORMAL;
            case WARNING:
                return Severity.NORMAL;
            case MINOR:
                return Severity.MINOR;
            case MAJOR:
                return Severity.MAJOR;
            case CRITICAL:
                return Severity.CRITICAL;
            case INDETERMINATE:
            case UNRECOGNIZED:
                return Severity.INDETERMINATE;
        }
        return Severity.INDETERMINATE;
    }

    protected static String toNodeCriteria(OpennmsModelProtos.Node node) {
        if (!Strings.isNullOrEmpty(node.getForeignSource()) &&
                !Strings.isNullOrEmpty(node.getForeignId())) {
            return node.getForeignSource() + ":" + node.getForeignId();
        } else {
            return Long.valueOf(node.getId()).toString();
        }
    }

    public static String toNodeCriteria(OpennmsModelProtos.NodeCriteria nodeCriteria) {
        if (!Strings.isNullOrEmpty(nodeCriteria.getForeignSource()) &&
                !Strings.isNullOrEmpty(nodeCriteria.getForeignId())) {
            return nodeCriteria.getForeignSource() + ":" + nodeCriteria.getForeignId();
        } else {
            return Long.valueOf(nodeCriteria.getId()).toString();
        }
    }

}
