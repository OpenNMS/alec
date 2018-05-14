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

package org.opennms.oce.engine.itest.topology;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.hasSize;
import static java.util.concurrent.TimeUnit.SECONDS;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.opennms.oce.engine.driver.Driver;
import org.opennms.oce.engine.itest.Level2EngineComplianceTest;
import org.opennms.oce.engine.itest.MockAlarmBuilder;
import org.opennms.oce.engine.topology.TopologyEngineFactory;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.impl.ModelBuilderImpl;

import com.google.common.collect.Lists;

public class TopologyEngineTest {

    TopologyEngineFactory topologyEngineFactory;
    Model model;

    @Before
    public void setUp() {
        topologyEngineFactory = new TopologyEngineFactory();

        ModelBuilderImpl modelBuilder = new ModelBuilderImpl();
        model = modelBuilder.buildModel();
    }

    @Test
    public void canRunEngineWithNoAlarms() {
        Driver driver = Driver.builder()
                .withEngineFactory(topologyEngineFactory)
                .build();
        List<Incident> incidents = driver.run(model, Collections.emptyList());
        assertThat(incidents, hasSize(0));
    }

    @Test
    @Ignore
    public void canTriggerIncident() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), MockAlarmBuilder.Severity.MAJOR)
                .withEvent(SECONDS.toMillis(301), MockAlarmBuilder.Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n2-c1-p1"))
                .withEvent(SECONDS.toMillis(31), MockAlarmBuilder.Severity.MAJOR)
                .withEvent(SECONDS.toMillis(331), MockAlarmBuilder.Severity.CLEARED) // 5 minutes later
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a3")
                .withResourceKey(new ResourceKey("Port,n1-c2-p2"))
                .withEvent(SECONDS.toMillis(61), MockAlarmBuilder.Severity.MAJOR)
                .withEvent(SECONDS.toMillis(121), MockAlarmBuilder.Severity.CLEARED) // ~1 minute later
                .build());

        Driver driver = Driver.builder()
                .withEngineFactory(topologyEngineFactory)
                .build();
        List<Incident> incidents = driver.run(model, alarms);

        assertThat(incidents, hasSize(1));
        Incident incident = incidents.get(0);
        assertThat(Level2EngineComplianceTest.getAlarmIdsInIncident(incident), containsInAnyOrder("a1", "a2"));
    }
}
