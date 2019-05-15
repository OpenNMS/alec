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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.opennms.alec.smoke.containers.ALECSentinelContainer;
import org.opennms.alec.smoke.util.Karaf;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DistributedRedundantCorrrelationTest extends CorrelationTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(DistributedRedundantCorrrelationTest.class);
    private static final int NUM_REDUNDANT_ALEC = 2;
    private List<ALECSentinelContainer> redundantALECs;

    @Override
    protected void adjustCorrelationContainers() {
        redundantALECs = new ArrayList<>();
        // Define NUM_REDUNDANT_ALEC redundant ALECs
        for (int i = 0; i < NUM_REDUNDANT_ALEC; i++) {
            ALECSentinelContainer alecSentinelContainer = null;
            try {
                alecSentinelContainer = new ALECSentinelContainer(true, () -> "oce-engine-cluster");
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            redundantALECs.add(alecSentinelContainer);
            addContainers(Collections.singletonList(alecSentinelContainer));
        }
    }

    @Test
    public void canCorrelateAlarmsAfterFailure() throws Exception {
        waitForActiveALEC().shutdownKaraf();
        runBasicCorrelation();
    }

    private Optional<ALECSentinelContainer> getActiveOCE() throws Exception {
        for (ALECSentinelContainer alecSentinelContainer : redundantALECs) {
            String[] output = Karaf.runKarafCommands(alecSentinelContainer.getSSHAddress(),
                    "processor:current-role").split("\n");

            if (Arrays.stream(output).anyMatch(row -> row.contains("ACTIVE"))) {
                return Optional.of(alecSentinelContainer);
            }
        }

        return Optional.empty();
    }

    private ALECSentinelContainer waitForActiveALEC() throws Exception {
        LOG.info("Waiting for an active ALEC instance...");
        await()
                .atMost(2, TimeUnit.MINUTES)
                .pollInterval(10, TimeUnit.SECONDS)
                .until(() -> getActiveOCE().isPresent());

        ALECSentinelContainer activeALEC = getActiveOCE().get();
        LOG.info("ALEC {} is now active", activeALEC);
        return activeALEC;
    }
}
