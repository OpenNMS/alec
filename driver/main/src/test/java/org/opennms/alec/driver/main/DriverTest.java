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
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.atomic.AtomicLong;

import org.junit.Test;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.AlarmFeedbackDatasource;
import org.opennms.alec.datasource.api.InventoryDatasource;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.processor.api.SituationProcessor;
import org.opennms.alec.processor.api.SituationProcessorFactory;
import org.osgi.framework.BundleContext;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.Metric;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.MetricSet;

public class DriverTest {

    /** A contributed MetricSet in the shape the MCP bundle publishes (ALEC-308): live gauges. */
    private static MetricSet gaugeSet(AtomicLong calls, AtomicLong errors) {
        return () -> {
            Map<String, Metric> m = new LinkedHashMap<>();
            m.put("toolCalls", (Gauge<Long>) calls::get);
            m.put("toolErrors", (Gauge<Long>) errors::get);
            return m;
        };
    }

    private static Driver newDriver() {
        BundleContext bundleContext = mock(BundleContext.class);
        EngineFactory engineFactory = mock(EngineFactory.class);
        when(engineFactory.getName()).thenReturn("test-engine");
        SituationProcessorFactory situationProcessorFactory = mock(SituationProcessorFactory.class);
        when(situationProcessorFactory.getInstance()).thenReturn(mock(SituationProcessor.class));
        return new Driver(bundleContext, mock(AlarmDatasource.class), mock(AlarmFeedbackDatasource.class),
                mock(InventoryDatasource.class), mock(SituationDatasource.class), engineFactory,
                situationProcessorFactory);
    }

    @Test
    public void registerMetricSetFoldsContributedGaugesIntoTheDriverRegistry() {
        Driver driver = newDriver();
        AtomicLong calls = new AtomicLong(3);
        AtomicLong errors = new AtomicLong(1);
        MetricSet set = gaugeSet(calls, errors);

        driver.registerMetricSet(set);
        MetricRegistry registry = driver.getMetrics();
        assertThat(registry.getGauges().containsKey("toolCalls"), is(true));
        assertThat(registry.getGauges().containsKey("toolErrors"), is(true));
        assertThat("the gauge is live, not a copy",
                (Long) registry.getGauges().get("toolCalls").getValue(), equalTo(3L));
        calls.incrementAndGet();
        assertThat((Long) registry.getGauges().get("toolCalls").getValue(), equalTo(4L));
        assertThat("the driver's own metrics are untouched", registry.getTimers().containsKey("ticks"), is(true));

        driver.unregisterMetricSet(set);
        assertThat(registry.getGauges().containsKey("toolCalls"), is(false));
        assertThat(registry.getGauges().containsKey("toolErrors"), is(false));
        assertThat(registry.getTimers().containsKey("ticks"), is(true));
    }

    @Test
    public void reRegisteringTheSameMetricNamesDoesNotThrow() {
        Driver driver = newDriver();
        AtomicLong first = new AtomicLong(1);
        MetricSet original = gaugeSet(first, new AtomicLong());
        driver.registerMetricSet(original);
        driver.registerMetricSet(original); // same instance again (bundle refresh)

        AtomicLong second = new AtomicLong(42);
        driver.registerMetricSet(gaugeSet(second, new AtomicLong())); // a replacement after a bundle restart
        assertThat("the later registration wins",
                (Long) driver.getMetrics().getGauges().get("toolCalls").getValue(), equalTo(42L));
    }

    @Test
    public void nullMetricSetsAreIgnored() {
        Driver driver = newDriver();
        driver.registerMetricSet(null);
        driver.unregisterMetricSet(null);
        assertThat(driver.getMetrics().getGauges().get("toolCalls"), nullValue());
        // unregistering something never registered is harmless too
        driver.unregisterMetricSet(gaugeSet(new AtomicLong(), new AtomicLong()));
    }

    @Test
    public void canGenerateTicks() throws InterruptedException, ExecutionException {
        // Mocks
        BundleContext bundleContext = mock(BundleContext.class);
        AlarmDatasource alarmDatasource = mock(AlarmDatasource.class);
        AlarmFeedbackDatasource alarmFeedbackDatasource = mock(AlarmFeedbackDatasource.class);
        InventoryDatasource inventoryDatasource = mock(InventoryDatasource.class);
        SituationDatasource situationDatasource = mock(SituationDatasource.class);
        EngineFactory engineFactory = mock(EngineFactory.class);
        SituationProcessorFactory situationProcessorFactory = mock(SituationProcessorFactory.class);
        when(situationProcessorFactory.getInstance()).thenReturn(mock(SituationProcessor.class));
        TickLoggingEngine tickLoggingEngine = new TickLoggingEngine();
        when(engineFactory.createEngine(any(MetricRegistry.class))).thenReturn(tickLoggingEngine);

        // Create and initialize the driver
        Driver driver = new Driver(bundleContext, alarmDatasource, alarmFeedbackDatasource, inventoryDatasource,
                situationDatasource, engineFactory, situationProcessorFactory);
        driver.initAsync().get();

        // Tick tock
        int numExpectedTicks = 10;
        long tickResolutionMs = tickLoggingEngine.getTickResolutionMs();
        Thread.sleep(tickResolutionMs * numExpectedTicks);
        assertThat(tickLoggingEngine.getTicks(), hasSize(greaterThanOrEqualTo(numExpectedTicks)));

        // Clean-up
        driver.destroy();
    }
}
