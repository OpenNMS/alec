/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

import java.util.Objects;
import java.util.concurrent.TimeUnit;

import org.opennms.integration.api.v1.health.Context;
import org.opennms.integration.api.v1.health.HealthCheck;
import org.opennms.integration.api.v1.health.Response;
import org.opennms.integration.api.v1.health.Status;
import org.opennms.integration.api.v1.health.immutables.ImmutableResponse;

import com.codahale.metrics.Timer;

public class DriverHealthCheck implements HealthCheck {

    private final Driver driver;

    public DriverHealthCheck(Driver driver) {
        this.driver = Objects.requireNonNull(driver);
    }

    @Override
    public String getDescription() {
        return "ALEC :: Driver";
    }

    @Override
    public Response perform(Context context) {
        // Verify that the engine is running
        final DriverState state = driver.getState();
        if (!Objects.equals(DriverState.RUNNING, state)) {
            return ImmutableResponse.newInstance(Status.Failure, "Driver is " + state);
        }

        // Verify that ticks are completing in a reasonable about of time
        final Timer ticks = driver.getTickTimer();
        final long tickResolutionMs = driver.getTickResolutionMs();
        final long tickDuration99Ms = TimeUnit.NANOSECONDS.toMillis(new Double(ticks.getSnapshot().get99thPercentile()).longValue());
        if (tickDuration99Ms > tickResolutionMs) {
            return ImmutableResponse.newInstance(Status.Failure, String.format("Ticks are taking too long. " +
                    "Expected rate: %d ms Duration (99 percentile): %d ms", tickResolutionMs, tickDuration99Ms));
        }

        // All checks passed
        return ImmutableResponse.newInstance(Status.Success, String.format("Tick duration (99 percentile): %d ms", tickDuration99Ms));
    }
}
