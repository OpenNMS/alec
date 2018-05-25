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
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.temporal.TimeSliceEngineFactory;

@RunWith(Parameterized.class)
public class ResumeServiceTest {

    @Parameterized.Parameters(name = "{index}: engine({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][] { { new TimeSliceEngineFactory() },
                        // { new ClusterEngineFactory() },
                        // { new TopologyEngineFactory() }
        });
    }

    private final EngineFactory factory;
    private TestDriver driver;
    private final AtomicLong alarmIdGenerator = new AtomicLong();

    public ResumeServiceTest(EngineFactory factory) {
        this.factory = Objects.requireNonNull(factory);
    }

    @Before
    public void setUp() {
        driver = TestDriver
                .builder()
                .withEngineFactory(factory)
                .build();
    }

    @Test
    public void resumeServiceTest() {
        final List<Alarm> alarms = new ArrayList<>();
        // Fail all ports on all cards of node: n1
        alarms.addAll(new MockAlarmBuilder()
                .withId("a1")
                .withResourceKey(new ResourceKey("Port,n1-c1-p1"))
                .withEvent(SECONDS.toMillis(1), Severity.MAJOR)
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("a2")
                .withResourceKey(new ResourceKey("Port,n1-c1-p2"))
                .withEvent(SECONDS.toMillis(31), Severity.MAJOR)
                .build());
        
        final List<Incident> baseIncidents = driver.run(alarms);
        final List<WrappedIncident> wrappedBaseIncidents = baseIncidents.stream().map(i -> new WrappedIncident(i))
            .collect(Collectors.toList());

        // Now Split the run over a new driver
        TestDriver driver2 = TestDriver.builder().withEngineFactory(factory).build();
        final List<Incident> testIncidents = driver2.run(alarms, Collections.emptyList(), SECONDS.toMillis(15));
        final List<WrappedIncident> wrappedTestIncidents = testIncidents.stream().map(i -> new WrappedIncident(i))
            .collect(Collectors.toList());

        assertThat(testIncidents.size(), equalTo(baseIncidents.size()));

        assertThat(wrappedTestIncidents, equalTo(wrappedBaseIncidents));
    }

    private Matcher<Incident> matchesIncident(final Incident i) {
        return new BaseMatcher<Incident>() {
           @Override
           public boolean matches(final Object o) {
              final Incident incident = (Incident) o;
              return i.getSeverity() == incident.getSeverity() && i.getResourceKeys() == incident.getResourceKeys();
           }
           @Override
           public void describeTo(final Description description) {
              description.appendText("getNumber should return ").appendValue(i);
           }
        };
     }
    
    public class WrappedIncident {
        private Incident i;

        public WrappedIncident(Incident i) {
            this.i = i;
        }
        @Override
        public int hashCode() {
            return Objects.hash(i.getSeverity(), i.getResourceKeys(), i.getAlarms());
        }
        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || getClass() != obj.getClass()) {
                return false;
            }
            WrappedIncident other = (WrappedIncident) obj;
            return other.i.getSeverity().equals(i.getSeverity()) &&
                    other.i.getResourceKeys().equals(i.getResourceKeys()) &&
                    other.i.getAlarms().equals(i.getAlarms());
        }
        
    }
}
