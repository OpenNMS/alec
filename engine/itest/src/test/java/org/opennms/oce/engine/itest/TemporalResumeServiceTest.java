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
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThan;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.MockInventoryType;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.temporal.TimeSliceEngineFactory;

public class TemporalResumeServiceTest {

    private List<InventoryObject> inventory = Collections.emptyList(); // Unused by this Engine
    private final EngineFactory factory = new TimeSliceEngineFactory();

    private TestDriver baseDriver;

    private TestDriver aprioriDriver;

    private TestDriver testDriver;

    @Before
    public void setUp() {
        baseDriver = TestDriver.builder().withEngineFactory(factory).build();
        aprioriDriver = TestDriver.builder().withEngineFactory(factory).build();
        testDriver = TestDriver.builder().withEngineFactory(factory).build();
    }

    @Test
    public void resumeServiceBetweenTwoAlarmsTest() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1")
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withInventoryObject(MockInventoryType.PORT, "n1-c1-p2")
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .build());
        
        List<Alarm> sortedAlarms = TestDriver.timeSortAlarms(alarms);

        final List<Situation> baseSituations = baseDriver.run(sortedAlarms, inventory);

        // Now Split the run over a new driver
        // Resumption Time after First Alarm, Before Second
        long startUpTime = SECONDS.toMillis(15);
        List<Situation> priorSituations = aprioriDriver.run(TestDriver.getStartupAlarms(sortedAlarms, startUpTime), inventory);

        final List<Situation> testSituations = testDriver.run(sortedAlarms, inventory, priorSituations, startUpTime);

        // The test is useless if the baseline doesn't have Situations
        assertThat(baseSituations.size(), greaterThan(0));
        // Expect 1 situation after resumption
        assertThat(testSituations.size(), equalTo(1));
    }

    @Test
    public void resumeServiceAfterSituationTest() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                      .withId("a1")
                      .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1")
                      .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                      .withEvent(SECONDS.toMillis(301), Severity.CLEARED) // 5 minutes later
                      .build());
        alarms.addAll(new MockAlarmBuilder()
                      .withId("a2")
                      .withInventoryObject(MockInventoryType.PORT, "n1-c1-p2")
                      .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                      .withEvent(SECONDS.toMillis(331), Severity.CLEARED) // 5 minutes later
                      .build());
        
        List<Alarm> sortedAlarms = TestDriver.timeSortAlarms(alarms);

        final List<Situation> baseSituations = baseDriver.run(sortedAlarms, inventory);
        final List<WrappedSituation> wrappedBaseSituations = baseSituations.stream().map(i -> new WrappedSituation(i))
            .collect(Collectors.toList());

        // Resume Time is now after both alarms  
        long startUpTime = SECONDS.toMillis(120);
        List<Situation> priorSituations = aprioriDriver.run(TestDriver.getStartupAlarms(sortedAlarms, startUpTime), inventory);

        final List<Situation> testSituations = testDriver.run(sortedAlarms, inventory, priorSituations, startUpTime);

        // The test is useless if the baseline doesn't have Situations
        assertThat(baseSituations.size(), greaterThan(0));
        // 2 Cleared Situations after restart
        assertThat(testSituations.size(), equalTo(2));
        assertThat(testSituations.get(0).getSeverity(), equalTo(Severity.CLEARED));
        assertThat(testSituations.get(0).getSeverity(), equalTo(Severity.CLEARED));
    }
    
}
