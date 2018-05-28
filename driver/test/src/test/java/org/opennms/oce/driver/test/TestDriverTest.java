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

package org.opennms.oce.driver.test;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;

public class TestDriverTest {

    @Test
    public void testReturnsAll() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(31), Severity.MINOR)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(61), Severity.MINOR)
                .build());

        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());
        
        List<Alarm> reduced = TestDriver.reduceAlarms(sortedAlarms);
        assertThat(reduced.size(), equalTo(2));
    }

    @Test
    public void testReturnsLatest() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(31), Severity.MINOR)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(61), Severity.MINOR)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p1"))
                .withEvent(SECONDS.toMillis(31), Severity.MINOR)
                .withEvent(SECONDS.toMillis(61), Severity.MAJOR)
                .build());

        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());
        
        List<Alarm> reduced = TestDriver.reduceAlarms(sortedAlarms);
        assertThat(reduced.size(), equalTo(3));
        assertThat(reduced.stream().map(Alarm::getId).collect(Collectors.toSet()), containsInAnyOrder("a1", "a2", "a3"));
        Map<String, Alarm> mappedAlarms = mappedAlarms(reduced);
        assertThat(mappedAlarms.get("a1").getSeverity(), equalTo(Severity.MINOR));
        assertThat(mappedAlarms.get("a2").getSeverity(), equalTo(Severity.MINOR));
        assertThat(mappedAlarms.get("a3").getSeverity(), equalTo(Severity.MAJOR));
    }


    @Test
    public void testReturnsNoCleared() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(31), Severity.CLEARED)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(61), Severity.CLEARED)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p1"))
                .withEvent(SECONDS.toMillis(31), Severity.MINOR)
                .withEvent(SECONDS.toMillis(61), Severity.MAJOR)
                .build());

        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime).thenComparing(Alarm::getId))
                .collect(Collectors.toList());
        
        List<Alarm> reduced = TestDriver.reduceAlarms(sortedAlarms);
        assertThat(reduced.size(), equalTo(1));
        assertThat(reduced.stream().map(Alarm::getId).collect(Collectors.toSet()), contains("a3"));
        Map<String, Alarm> mappedAlarms = mappedAlarms(reduced);
        assertThat(mappedAlarms.get("a3").getSeverity(), equalTo(Severity.MAJOR));
    }

    private Map<String, Alarm> mappedAlarms(List<Alarm> alarms) {
        Map<String, Alarm> mapped = new HashMap<>(alarms.size());
        for (Alarm a : alarms) {
            mapped.put(a.getId(), a);
        }
        return mapped;
    }

}
