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
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.hamcrest.core.IsSame.sameInstance;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
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
import org.opennms.oce.engine.topology.TopologyEngineFactory;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.impl.ModelBuilderImpl;

import com.google.common.collect.Sets;

/**
 * Level 1 compliance: All engines should pass this one.
 */
@RunWith(Parameterized.class)
public class Level1EngineComplianceTest {

    @Parameterized.Parameters(name = "{index}: engine({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][]{
                { new TimeSliceEngineFactory() }, { new ClusterEngineFactory() },
                // { new TopologyEngineFactory() }
        });
    }

    private final EngineFactory factory;
    private Driver driver;
    private Model model;
    private final AtomicLong alarmIdGenerator = new AtomicLong();

    public Level1EngineComplianceTest(EngineFactory factory) {
        this.factory = Objects.requireNonNull(factory);
    }

    @Before
    public void setUp() {
        driver = Driver.builder()
                .withEngineFactory(factory)
                .build();

        final ModelBuilderImpl modelBuilder = new ModelBuilderImpl();
        model = modelBuilder.buildModel();
    }

    @Test
    public void canCreateDistinctEngines() {
        Engine engine1 = factory.createEngine();
        assertThat(engine1, notNullValue());

        Engine engine2 = factory.createEngine();
        assertThat(engine2, notNullValue());
        assertThat(engine1, not(sameInstance(engine2)));
    }

    @Test
    public void canCorrelateFiveAlarmsWithSameTimeOnSameResource() {
        final List<Alarm> alarms = getAlarms(5, 20, new ResourceKey("n1"));
        final List<Incident> incidents = driver.run(model, alarms);

        // A single incident should have been created
        assertThat(incidents, hasSize(1));

        // All five alarms should be in the same incident
        assertThat(incidents.get(0).getAlarms(), containsInAnyOrder(alarms.toArray()));

        // The incident should have been created some time after the first alarm
        final long minTimestamp = alarms.stream().mapToLong(Alarm::getTime).sorted().findFirst().getAsLong();
        // TODO: Not currently implemented
        //assertThat(incidents.get(0).getCreationTime(), greaterThanOrEqualTo(minTimestamp));
    }

    /**
     * Given some noisy data verify that the results from multiple runs.
     * Also run these in parallel to also make sure that different instances of the engine are properly isolated.
     *
     * TODO: Ensure that 2+ incidents are created instead of 1
     */
    @Test
    public void canGenerateDeterministicResults() throws ExecutionException, InterruptedException {
        // Generate some noisy alarms. We need to ensure that these:
        // * Are the same from one test run to another (i.e. no random value)
        // * They will generate 1 or more incidents
        final List<Alarm> alarms = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            MockAlarmBuilder builder = new MockAlarmBuilder()
                    .withId("" + i)
                    .withResourceKey(new ResourceKey(""+ i % 2, "" + i % 5));
            for (int j = 0; j < 100; j++) {
                builder.withEvent((i+1)*(j+1),  j % 2 == 0 ? MockAlarmBuilder.Severity.MINOR : MockAlarmBuilder.Severity.CLEARED);
            }
            alarms.addAll(builder.build());
        }

        final List<Incident> initialIncidents = driver.run(model, alarms);
        // Expect 1+ incidents
        assertThat(initialIncidents, hasSize(greaterThanOrEqualTo(1)));

        // Now rerun the driver several times in series, and expect the same results
        final int K = 20;
        for (int k = 0; k < K; k++) {
            final List<Incident> subsequentIncidents = driver.run(model, alarms);
            compareIncidents(initialIncidents, subsequentIncidents);

            Set<Incident> initialIncidentsInSet = Sets.newHashSet(initialIncidents);
            Set<Incident> generatedIncidentsInSet = Sets.newHashSet(subsequentIncidents);
        }

        // Rerun the driver again over serveral threads and expect the same results
        final ExecutorService executor = Executors.newFixedThreadPool(10);
        final List<CompletableFuture<List<Incident>>> incidentFutures = new ArrayList<>();
        for (int k = 0; k < K; k++) {
            incidentFutures.add(CompletableFuture.supplyAsync(() -> driver.run(model, alarms), executor));
        }
        CompletableFuture.allOf(incidentFutures.toArray(new CompletableFuture[0])).get();
        for (CompletableFuture<List<Incident>> incidentFuture : incidentFutures) {
            compareIncidents(initialIncidents, incidentFuture.get());
        }
    }

    private static void compareIncidents(List<Incident> base, List<Incident> sut) {
        // Incident IDs may vary, so we take a closer look
        assertThat(sut, hasSize(base.size()));

        // Extract the alarmIds and compare both their contents and orders
        for (int l = 0; l < base.size(); l++) {
            final List<String> initialAlarmIds = getAlarmIdsFromIncident(base.get(l));
            final List<String> subsequentAlarmIds = getAlarmIdsFromIncident(sut.get(l));
            assertThat(subsequentAlarmIds, equalTo(initialAlarmIds));
        }
    }

    private static List<String> getAlarmIdsFromIncident(Incident incident) {
        return incident.getAlarms().stream()
                .map(Alarm::getId)
                .collect(Collectors.toList());
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
