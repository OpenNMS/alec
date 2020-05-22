/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2020 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2020 The OpenNMS Group, Inc.
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

package org.opennms.alec.datasource.opennms;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.timeout;
import static org.mockito.Mockito.verify;

import java.io.IOException;
import java.time.Duration;

import org.apache.kafka.streams.KafkaStreams;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import io.github.resilience4j.core.IntervalFunction;

public class KafkaStreamMonitorTest {

    private KafkaStreamMonitor monitor;
    private OpennmsDatasource datasource;

    @Before
    public void setUp(){
        datasource = Mockito.mock(OpennmsDatasource.class);
        monitor = new KafkaStreamMonitor(datasource);
        monitor.setWaitDurationForRetry(Duration.ofMillis(1)); // let's make it short so the Test ist fast
        monitor.setWaitDurationForStateChange(Duration.ofMillis(1)); // let's make it short so the Test ist fast
    }

    @After
    public void tearDown() {
        monitor.destroy();
    }

    @Test
    public void shouldRetryMultipleTimes() throws IOException, InterruptedException {
        // let's put the state into error and leave it there
        monitor.onChange(KafkaStreams.State.ERROR, KafkaStreams.State.RUNNING);
        verify(datasource, timeout(1000).times(3)).init();
    }

    @Test
    public void shouldStopRetryingIfOk() throws IOException, InterruptedException {
        monitor.setWaitDurationForRetry(Duration.ofMillis(100)); // let's have a bit of delay so we can test the amount of invocations
        monitor.onChange(KafkaStreams.State.ERROR, KafkaStreams.State.RUNNING);
        Thread.sleep(50); // wait a bit for the retry thread to start but not long enough for the second retry
        // let's recover
        monitor.onChange(KafkaStreams.State.RUNNING, KafkaStreams.State.ERROR);
        verify(datasource, timeout(1000).times(1)).init();
    }

    @Test
    public void shouldRetryWithIncreasingDurationAndPlateau(){
        IntervalFunction function = KafkaStreamMonitor.createIncreasingIntervalWithPlateauFunction(Duration.ofMillis(1));
        assertEquals(1L, (long)function.apply(1));
        assertEquals(4L, (long)function.apply(2));
        assertEquals(9L, (long)function.apply(3));
        assertEquals(16L, (long)function.apply(4));
        assertEquals(16L, (long)function.apply(5));
        assertEquals(16L, (long)function.apply(10));
    }
}
