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

package org.opennms.e2e.oce;

import static org.awaitility.Awaitility.await;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.rules.RuleChain;
import org.opennms.e2e.containers.OCEContainer;
import org.opennms.e2e.util.Karaf;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Ignore("Ignored due to dependency issue on sentinel container related to integration API")
public class End2EndRedundantCorrelationTest extends AbstractCorrelationTest {
    private static final Logger LOG = LoggerFactory.getLogger(End2EndRedundantCorrelationTest.class);
    private static final int NUM_REDUNDANT_OCE = 2;
    private final List<OCEContainer> redundantOCEs = new ArrayList<>();

    @Override
    RuleChain addTestSpecificContainers() {
        RuleChain ruleChain = RuleChain.emptyRuleChain();
        // Define NUM_REDUNDANT_OCE redundant OCEs
        for (int i = 0; i < NUM_REDUNDANT_OCE; i++) {
            OCEContainer oceContainer = null;
            try {
                oceContainer = new OCEContainer(true);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            redundantOCEs.add(oceContainer);
            // Initialize the first rule chain for the first OCE
            if (redundantOCEs.size() == 1) {
                ruleChain = RuleChain.outerRule(oceContainer);
            } else {
                ruleChain.around(oceContainer);
            }
        }
        return ruleChain;
    }

    @Test
    public void canCorrelateAlarmsAfterFailure() throws Exception {
        waitForActiveOCE().shutdownKaraf();

        LOG.info("Triggering alarms for correlation via API...");
        openNMSRestClient.triggerAlarmsForCorrelation();

        // OCE Should now correlate them, we need to wait here for the situation alarm to show up
        LOG.info("Waiting for a situation to be received by OpenNMS...");
        openNMSRestClient.waitForOutstandingSituation();

        // Login, navigate to dashboard, view alarm in table, verify the related alarms
        LOG.info("Situation received, verifying via Helm...");
        verifyGenericSituation();
    }

    private Optional<OCEContainer> getActiveOCE() throws Exception {
        for (OCEContainer oceContainer : redundantOCEs) {
            String[] output = Karaf.runKarafCommands(oceContainer.getSSHAddress(),
                    "processor:current-role").split("\n");

            if (Arrays.stream(output).anyMatch(row -> row.contains("ACTIVE"))) {
                return Optional.of(oceContainer);
            }
        }

        return Optional.empty();
    }

    private OCEContainer waitForActiveOCE() throws Exception {
        LOG.info("Waiting for an active OCE instance...");
        await()
                .atMost(2, TimeUnit.MINUTES)
                .pollInterval(10, TimeUnit.SECONDS)
                .until(() -> getActiveOCE().isPresent());

        OCEContainer activeOCE = getActiveOCE().get();
        LOG.info("OCE {} is now active", activeOCE);
        return activeOCE;
    }
}
