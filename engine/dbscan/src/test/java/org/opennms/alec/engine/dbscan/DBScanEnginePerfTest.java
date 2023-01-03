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

package org.opennms.alec.engine.dbscan;

import static org.mockito.Mockito.mock;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Ignore;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableInventoryObject;
import org.opennms.alec.driver.test.MockInventoryBuilder;
import org.opennms.alec.driver.test.MockInventoryType;

import com.codahale.metrics.MetricRegistry;

public class DBScanEnginePerfTest {

    /**
     * Utility method for testing performance of ticks.
     *
     * No assertions here, but useful for tracking performance.
     */
    @Test
    public void canRunDBScanOnLargeGraphs() {
        final DBScanEngine dbScanEngine = new DBScanEngine(new MetricRegistry(), AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON, DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA, new AlarmInSpaceAndTimeDistanceMeasureFactory());
        dbScanEngine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList(),
                Collections.emptyList());
        final int K = 500;
        for (int k = 0; k < K; k++) {
            dbScanEngine.onInventoryAdded(Collections.singletonList(ImmutableInventoryObject.newBuilder()
                    .setType(MockInventoryType.COMPONENT.getType())
                    .setId(Integer.toString(k))
                    .build()));
        }

        for (int j = 1; j <= 3; j++) {
            // Reset the alarms before every tick
            for (int k = 0; k < K; k++) {
                dbScanEngine.onAlarmCreatedOrUpdated(ImmutableAlarm.newBuilder()
                        .setTime(0)
                        .setId(Integer.toString(k))
                        .setInventoryObjectType(MockInventoryType.COMPONENT.getType())
                        .setInventoryObjectId(Integer.toString(k))
                        .build());
            }

            long start = System.currentTimeMillis();
            dbScanEngine.tick(dbScanEngine.getTickResolutionMs() * j);
            long delta = System.currentTimeMillis() - start;
            System.out.printf("%d ms for %d vertices.\n", delta, K);
        }
    }

    @Test
    public void canRunDBScanOnLargeGraphsHellinger() {
        final DBScanEngine dbScanEngine = new DBScanEngine(new MetricRegistry(), HellingerDistanceMeasure.DEFAULT_EPSILON, DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA, new HellingerDistanceMeasureFactory());
        dbScanEngine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList(),
                Collections.emptyList());
        final int K = 500;
        for (int k = 0; k < K; k++) {
            dbScanEngine.onInventoryAdded(Collections.singletonList(ImmutableInventoryObject.newBuilder()
                    .setType(MockInventoryType.COMPONENT.getType())
                    .setId(Integer.toString(k))
                    .build()));
        }

        for (int j = 1; j <= 3; j++) {
            // Reset the alarms before every tick
            for (int k = 0; k < K; k++) {
                dbScanEngine.onAlarmCreatedOrUpdated(ImmutableAlarm.newBuilder()
                        .setFirstTime(0)
                        .setTime(1)
                        .setId(Integer.toString(k))
                        .setInventoryObjectType(MockInventoryType.COMPONENT.getType())
                        .setInventoryObjectId(Integer.toString(k))
                        .build());
            }

            long start = System.currentTimeMillis();
            dbScanEngine.tick(dbScanEngine.getTickResolutionMs() * j);
            long delta = System.currentTimeMillis() - start;
            System.out.printf("%d ms for %d vertices.\n", delta, K);
        }
    }

    @Test
    @Ignore("For manual testing")
    public void canNotRunOOM() {
        final DBScanEngine engine = new DBScanEngine(new MetricRegistry(), AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON, DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA, new AlarmInSpaceAndTimeDistanceMeasureFactory());
        engine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList(),
                Collections.emptyList());
        engine.registerSituationHandler(mock(SituationHandler.class));

        // With a 1GB heap these values would cause the cluster engine to run OOM before we swapped to using a soft
        // reference backed implementation of Dijkstra's algorithm after ~50 seconds
        //
        // With the new impl this test passes after ~50 seconds
        int numVertices = 3000;
        int numAlarmsToAddPerIteration = 100;

        // Create inventory for numVertices
        MockInventoryBuilder mockInventoryBuilder = new MockInventoryBuilder();
        List<Integer> existingInventoryIds = new ArrayList<>();

        // Add a root inventory element
        existingInventoryIds.add(0);
        mockInventoryBuilder.withInventoryObject(MockInventoryType.COMPONENT, "0");

        Random random = new Random(1);
        // Add the rest of the inventory
        for (int i = 1; i < numVertices; i++) {
            int parent = existingInventoryIds.get(random.nextInt(existingInventoryIds.size()));
            mockInventoryBuilder.withInventoryObject(MockInventoryType.COMPONENT, Integer.toString(i),
                    MockInventoryType.COMPONENT, Integer.toString(parent));
            existingInventoryIds.add(i);
        }

        // Add the inventory to the engine
        Collection<InventoryObject> inventory = mockInventoryBuilder.getInventory();
        engine.onInventoryAdded(inventory);

        long tickTime = System.currentTimeMillis();
        long tickInterval = TimeUnit.MINUTES.toMillis(6);

        int alarmedVertex = 0;
        while (alarmedVertex < numVertices) {
            List<Alarm> alarmsAdded = new ArrayList<>();
            for (int i = 0; i < numAlarmsToAddPerIteration; i++) {
                int id = existingInventoryIds.get(alarmedVertex++);
                Alarm alarmToAdd = ImmutableAlarm.newBuilder()
                        .setInventoryObjectType(MockInventoryType.COMPONENT.getType())
                        .setInventoryObjectId(Integer.toString(id))
                        .setId("test.id." + Integer.toString(id))
                        .setTime(tickTime)
                        .build();
                alarmsAdded.add(alarmToAdd);
                engine.onAlarmCreatedOrUpdated(alarmToAdd);
            }

            engine.onTick(tickTime);

            // Clear the alarms we just added and tick by a big enough interval that they are GC'd so we end up with a
            // fresh set of alarms on the next iteration
            alarmsAdded.forEach(alarm -> engine.onAlarmCleared(ImmutableAlarm.newBuilderFrom(alarm)
                    .setSeverity(Severity.CLEARED)
                    .build()));
            tickTime += tickInterval;
        }
    }

    @Test
    @Ignore("For manual testing")
    public void canNotRunOOMHellinger() {
        final DBScanEngine engine = new DBScanEngine(new MetricRegistry(), HellingerDistanceMeasure.DEFAULT_EPSILON, DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA, new HellingerDistanceMeasureFactory());
        engine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList(),
                Collections.emptyList());
        engine.registerSituationHandler(mock(SituationHandler.class));

        // With a 1GB heap these values would cause the cluster engine to run OOM before we swapped to using a soft
        // reference backed implementation of Dijkstra's algorithm after ~50 seconds
        //
        // With the new impl this test passes after ~50 seconds
        int numVertices = 3000;
        int numAlarmsToAddPerIteration = 100;

        // Create inventory for numVertices
        MockInventoryBuilder mockInventoryBuilder = new MockInventoryBuilder();
        List<Integer> existingInventoryIds = new ArrayList<>();

        // Add a root inventory element
        existingInventoryIds.add(0);
        mockInventoryBuilder.withInventoryObject(MockInventoryType.COMPONENT, "0");

        Random random = new Random(1);
        // Add the rest of the inventory
        for (int i = 1; i < numVertices; i++) {
            int parent = existingInventoryIds.get(random.nextInt(existingInventoryIds.size()));
            mockInventoryBuilder.withInventoryObject(MockInventoryType.COMPONENT, Integer.toString(i),
                    MockInventoryType.COMPONENT, Integer.toString(parent));
            existingInventoryIds.add(i);
        }

        // Add the inventory to the engine
        Collection<InventoryObject> inventory = mockInventoryBuilder.getInventory();
        engine.onInventoryAdded(inventory);

        long tickTime = System.currentTimeMillis();
        long tickInterval = TimeUnit.MINUTES.toMillis(6);

        int alarmedVertex = 0;
        while (alarmedVertex < numVertices) {
            List<Alarm> alarmsAdded = new ArrayList<>();
            for (int i = 0; i < numAlarmsToAddPerIteration; i++) {
                int id = existingInventoryIds.get(alarmedVertex++);
                Alarm alarmToAdd = ImmutableAlarm.newBuilder()
                        .setInventoryObjectType(MockInventoryType.COMPONENT.getType())
                        .setInventoryObjectId(Integer.toString(id))
                        .setId("test.id." + Integer.toString(id))
                        .setTime(tickTime)
                        .build();
                alarmsAdded.add(alarmToAdd);
                engine.onAlarmCreatedOrUpdated(alarmToAdd);
            }

            engine.onTick(tickTime);

            // Clear the alarms we just added and tick by a big enough interval that they are GC'd so we end up with a
            // fresh set of alarms on the next iteration
            alarmsAdded.forEach(alarm -> engine.onAlarmCleared(ImmutableAlarm.newBuilderFrom(alarm)
                    .setSeverity(Severity.CLEARED)
                    .build()));
            tickTime += tickInterval;
        }
    }
}
