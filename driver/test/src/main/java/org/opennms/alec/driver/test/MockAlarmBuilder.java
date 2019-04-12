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

package org.opennms.alec.driver.test;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.common.ImmutableAlarm;

public class MockAlarmBuilder {
    private String id;
    private String inventoryObjectId;
    private String inventoryObjectType;
    private List<MockEvent> events = new ArrayList<>();

    public MockAlarmBuilder withId(String id) {
        this.id = id;
        return this;
    }

    public MockAlarmBuilder withInventoryObject(MockInventoryType type, String id) {
        return withInventoryObject(type.getType(), id);
    }

    public MockAlarmBuilder withInventoryObject(String type, String id) {
        inventoryObjectType = type;
        inventoryObjectId = id;
        return this;
    }

    public MockAlarmBuilder withComment(String comment) {
        // ignore
        return this;
    }

    public MockAlarmBuilder withEvent(long time, Severity severity) {
        events.add(new MockEvent(time, severity));
        return this;
    }

    public List<Alarm> build() {
        events.sort(Comparator.comparing(MockEvent::getTime));

        final List<Alarm> alarms = new ArrayList<>();
        for (MockEvent event : events) {
            alarms.add(ImmutableAlarm.newBuilder()
                    .setId(id)
                    .setInventoryObjectType(inventoryObjectType)
                    .setInventoryObjectId(inventoryObjectId)
                    .setTime(event.getTime())
                    .setSeverity(event.getSeverity())
                    .build());
        }

        return alarms;
    }

    private static class MockEvent {
        private long time;
        private Severity severity;

        public MockEvent(long time, Severity severity) {
            this.time = time;
            this.severity = severity;
        }

        public long getTime() {
            return time;
        }

        public Severity getSeverity() {
            return severity;
        }
    }
}


