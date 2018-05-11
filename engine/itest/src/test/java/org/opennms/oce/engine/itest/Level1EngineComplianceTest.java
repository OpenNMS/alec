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


import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.hamcrest.core.IsSame.sameInstance;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.IntStream;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.cluster.ClusterEngineFactory;
import org.opennms.oce.engine.common.AlarmBean;
import org.opennms.oce.engine.driver.Driver;
import org.opennms.oce.engine.temporal.TimeSliceEngineFactory;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;

/**
 * Level 1 compliance: All engines should pass this one.
 */
@RunWith(Parameterized.class)
public class Level1EngineComplianceTest {

    @Parameterized.Parameters(name = "{index}: engine({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][]{
                { new TimeSliceEngineFactory() }, { new ClusterEngineFactory() }
        });
    }

    private final EngineFactory factory;
    private Driver driver;
    private final AtomicLong alarmIdGenerator = new AtomicLong();

    public Level1EngineComplianceTest(EngineFactory factory) {
        this.factory = Objects.requireNonNull(factory);
    }

    @Before
    public void setUp() {
        driver = Driver.builder()
                .withEngineFactory(factory)
                .build();
    }

    @Test
    public void canCreateEngine() {
        Engine engine1 = factory.createEngine();
        assertThat(engine1, notNullValue());

        Engine engine2 = factory.createEngine();
        assertThat(engine2, notNullValue());
        assertThat(engine1, not(sameInstance(engine2)));
    }

    @Test
    public void testFiveAlarmsWithSameTimeOnSameResource() {
        final List<Alarm> alarms = getAlarms(5, 20, new ResourceKey("n1"));
        final List<Incident> incidents = driver.run(alarms);

        // A single incident should have been created
        assertThat(incidents, hasSize(1));

        // All five alarms should be in the same incident
        assertThat(incidents.get(0).getAlarms(), containsInAnyOrder(alarms.toArray()));
    }

    // Get nAlarms all occurring at the same time in seconds
    private List<Alarm> getAlarms(int nAlarms, long seconds, ResourceKey resourceKey) {
        List<Alarm> alarms = new ArrayList<>();
        IntStream.range(0, nAlarms).forEach(index -> {
            AlarmBean alarm = new AlarmBean(Long.valueOf(alarmIdGenerator.getAndIncrement()).toString(), seconds * 1000);
            alarm.getResourceKeys().add(resourceKey);
            alarms.add(alarm);
        });
        return alarms;
    }

}
