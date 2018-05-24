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

package org.opennms.oce.driver.main;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.concurrent.ExecutionException;

import org.junit.Test;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.IncidentDatasource;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.engine.api.EngineFactory;

public class DriverTest {

    @Test
    public void canGenerateTicks() throws InterruptedException, ExecutionException {
        // Mocks
        AlarmDatasource alarmDatasource = mock(AlarmDatasource.class);
        InventoryDatasource inventoryDatasource = mock(InventoryDatasource.class);
        IncidentDatasource incidentDatasource = mock(IncidentDatasource.class);
        EngineFactory engineFactory = mock(EngineFactory.class);
        TickLoggingEngine tickLoggingEngine = new TickLoggingEngine();
        when(engineFactory.createEngine()).thenReturn(tickLoggingEngine);

        // Create and initialize the driver
        Driver driver = new Driver(alarmDatasource, inventoryDatasource, incidentDatasource, engineFactory);
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
