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

package org.opennms.alec.driver.main;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.AlarmFeedbackDatasource;
import org.opennms.alec.datasource.api.InventoryDatasource;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceAndTimeDistanceMeasureFactory;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.jackson.JacksonEngineParameter;
import org.opennms.alec.processor.api.SituationProcessor;
import org.opennms.alec.processor.api.SituationProcessorFactory;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.osgi.framework.BundleContext;

import com.codahale.metrics.MetricRegistry;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class DriverTest {

    @Mock
    private BundleContext bundleContext;
    @Mock
    private AlarmDatasource alarmDatasource;
    @Mock
    private AlarmFeedbackDatasource alarmFeedbackDatasource;
    @Mock
    private InventoryDatasource inventoryDatasource;
    @Mock
    private SituationDatasource situationDatasource;
    @Mock
    private EngineFactory engineFactory;
    @Mock
    private KeyValueStore<String> kvStore;
    @Mock
    private SituationProcessorFactory situationProcessorFactory;

    private List<EngineFactory> engineFactories;

    @Before
    public void setUp() throws Exception {
        engineFactories = Arrays.asList(engineFactory);
    }

    @Test
    public void canGenerateTicks() throws InterruptedException, ExecutionException {
        when(engineFactory.getName()).thenReturn(JacksonEngineParameter.CLUSTER);
        when(situationProcessorFactory.getInstance()).thenReturn(mock(SituationProcessor.class));
        TickLoggingEngine tickLoggingEngine = new TickLoggingEngine();
        when(engineFactory.createEngine(any(MetricRegistry.class))).thenReturn(tickLoggingEngine);

        // Create and initialize the driver
        Driver driver = new Driver(bundleContext, alarmDatasource, alarmFeedbackDatasource, inventoryDatasource,
                situationDatasource, engineFactories, situationProcessorFactory, kvStore);
        driver.initAsync().get();

        // Tick tock
        int numExpectedTicks = 10;
        long tickResolutionMs = tickLoggingEngine.getTickResolutionMs();
        Thread.sleep(tickResolutionMs * numExpectedTicks);
        assertThat(tickLoggingEngine.getTicks(), hasSize(greaterThanOrEqualTo(numExpectedTicks)));

        // Clean-up
        driver.destroy();
    }

    @Test
    public void retrieveParameterTest() throws ExecutionException, InterruptedException {
        KeyValueStore<String> kvStore = mock(KeyValueStore.class);
        when(kvStore.get(eq("ENGINE"), eq("ALEC_CONFIG"))).thenReturn(Optional.of("{\"engineName\":\"dbscan\",\"distanceMeasureName\":\"hellinger\"}"));
        when(engineFactory.createEngine(any(MetricRegistry.class))).thenReturn(new DBScanEngine(
                new MetricRegistry(),
                JacksonEngineParameter.DEFAULT_ALARN_IN_SPACE_EPSILON,
                JacksonEngineParameter.DEFAULT_ALPHA,
                JacksonEngineParameter.DEFAULT_BETA,
                new AlarmInSpaceAndTimeDistanceMeasureFactory()));
        when(engineFactory.getName()).thenReturn("dbscan");

        Driver driver = new Driver(bundleContext, alarmDatasource, alarmFeedbackDatasource, inventoryDatasource,
                situationDatasource, engineFactories, situationProcessorFactory, kvStore);

        driver.initAsync().get();

        // Clean-up
        driver.destroy();

    }
}
