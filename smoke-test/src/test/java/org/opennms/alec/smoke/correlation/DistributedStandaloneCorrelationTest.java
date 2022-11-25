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

package org.opennms.alec.smoke.correlation;

import static org.awaitility.Awaitility.await;

import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.alec.smoke.containers.ALECSentinelContainer;
import org.opennms.alec.smoke.util.Karaf;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RunWith(Parameterized.class)
public class DistributedStandaloneCorrelationTest extends CorrelationTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(DistributedStandaloneCorrelationTest.class);
    private ALECSentinelContainer alecSentinelContainer;
    @Parameterized.Parameter
    public String engine;

    @Parameterized.Parameters
    public static Object[] data() {
        return new Object[]{"cluster", "dbscan", "deeplearning"};
    }

    @Override
    protected void adjustCorrelationContainers() {
        // Define a single non-redundant ALEC
        try {
            alecSentinelContainer = new ALECSentinelContainer(false, () -> engine);
            addContainers(Collections.singletonList(alecSentinelContainer));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void canCorrelateAlarms() throws Exception {
        LOG.info("Running test with engine: " + engine);
        verifyCorrectEngineIsRunning();
        runBasicCorrelation();
    }

    private void verifyCorrectEngineIsRunning() {
        LOG.debug("Checking for engine {}", engine);

        await()
                .atMost(60, TimeUnit.
                        SECONDS)
                .pollInterval(5, TimeUnit.SECONDS)
                .ignoreExceptions()
                .until(() -> {
                    String[] output = Karaf.runKarafCommands(alecSentinelContainer.getSSHAddress(), "opennms-alec" +
                            ":list-graphs").split("\n");

                    // We can't check the row startsWith the engine name since there seems to be some random characters
                    // prepended to output rows
                    return Arrays.stream(output).anyMatch(row -> row.contains(engine + ":") &&
                            row.contains("situations") && row.contains("vertices") && row.contains("edges"));
                });
    }
}
