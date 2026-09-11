/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
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

package org.opennms.alec.mcp.tools;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.LinkedHashSet;
import java.util.Set;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.Status;

/** Mock builders for the ALEC datasource model shared by the situation tools' tests. */
final class SituationFixtures {

    private SituationFixtures() {
    }

    static Situation situation(String id, long longId, Status status, long created, Alarm... alarms) {
        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn(id);
        when(s.getLongId()).thenReturn(longId);
        when(s.getStatus()).thenReturn(status);
        when(s.getSeverity()).thenReturn(Severity.MAJOR);
        when(s.getCreationTime()).thenReturn(created);
        when(s.getLastTime()).thenReturn(created + 500);
        Set<Alarm> set = new LinkedHashSet<>();
        for (Alarm a : alarms) {
            set.add(a);
        }
        when(s.getAlarms()).thenReturn(set);
        return s;
    }

    static Alarm alarm(String id, long time, Long nodeId, String summary) {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn(id);
        when(a.getTime()).thenReturn(time);
        when(a.getFirstTime()).thenReturn(time - 100);
        when(a.getSeverity()).thenReturn(Severity.MINOR);
        when(a.getNodeId()).thenReturn(nodeId);
        when(a.getNodeLabel()).thenReturn(nodeId == null ? null : "node-" + nodeId);
        when(a.getInventoryObjectType()).thenReturn("SnmpInterface");
        when(a.getInventoryObjectId()).thenReturn("Gi0/" + id);
        when(a.getSummary()).thenReturn(summary);
        return a;
    }
}
