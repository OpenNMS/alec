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

package org.opennms.oce.engine.itest;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.MockInventory;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.topology.TopologyEngineFactory;

public class TopologyEngineTest {

    private TopologyEngineFactory topologyEngineFactory;
    private List<InventoryObject> inventory = MockInventory.SAMPLE_NETWORK;

    @Before
    public void setUp() {
        topologyEngineFactory = new TopologyEngineFactory();
    }

    @Test
    public void canRunEngineWithNoAlarms() {
        List<Incident> incidents = run(Collections.emptyList());
        assertThat(incidents, hasSize(0));
    }

    @Test
    public void canTriggerIncidentOnCardDown() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(301), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(331), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n2-c1-p1"))
                .withEvent(SECONDS.toMillis(61), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(121), Severity.CLEARED) // ~1 minute later
                .build());

        List<Incident> incidents = run(alarms);

        assertThat(incidents, hasSize(4));
        // The 2nd incident is the Card Down and must contain the 2 alarms
        Incident incident = incidents.get(1);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident), containsInAnyOrder("a1", "a2"));
        assertThat(incident.getResourceKeys().get(0), equalTo(ResourceKey.key("Card", "n1-c1")));
    }

    @Test
    public void canTriggerIncidentOnLinkDown() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(301), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n2-c1-p1"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(331), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p2"))
                .withEvent(SECONDS.toMillis(61), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(121), Severity.CLEARED) // ~1 minute later
                .build());

        List<Incident> incidents = run(alarms);

        assertThat(incidents, hasSize(3));
        Incident incident0 = incidents.get(0);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident0), contains("a1"));
        Incident incident1 = incidents.get(1);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident1), containsInAnyOrder("a1", "a2"));
        Incident incident2 = incidents.get(2);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident2), contains("a2"));
        assertThat(incident2.getResourceKeys().get(0), equalTo(ResourceKey.key("Link", "n1-c1-p1___n2-c1-p1")));
    }
    
    @Test
    public void canTriggerIncidentOnChassisDown() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(301), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(331), Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p1"))
                .withEvent(SECONDS.toMillis(61), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(121), Severity.CLEARED) // ~1 minute later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p2"))
                .withEvent(SECONDS.toMillis(91), Severity.MAJOR)
                .withEvent(SECONDS.toMillis(151), Severity.CLEARED) // ~1 minute later
                .build());

        List<Incident> incidents = run(alarms);

        assertThat(incidents, hasSize(4));
        Incident incident0 = incidents.get(0);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident0), contains("a1"));
        Incident incident1 = incidents.get(1);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident1), containsInAnyOrder("a1", "a2"));
        Incident incident2 = incidents.get(2);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident2), contains("a3"));
        Incident incident3 = incidents.get(3);
        assertThat(incident3.getResourceKeys().get(0), equalTo(ResourceKey.key("Device", "n1")));
    }

    private List<Incident> run(List<Alarm> alarms) {
        final TestDriver driver = TestDriver.builder()
                .withEngineFactory(topologyEngineFactory)
                .build();
        return driver.run(alarms, inventory);
    }
}
