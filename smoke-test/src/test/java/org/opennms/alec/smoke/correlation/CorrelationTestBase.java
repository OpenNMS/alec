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

package org.opennms.alec.smoke.correlation;

import java.util.Collections;

import org.apache.commons.lang3.tuple.Pair;
import org.opennms.alec.smoke.ALECSmokeTestBase;
import org.opennms.alec.smoke.grafana.Grafana44SeleniumDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class CorrelationTestBase extends ALECSmokeTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(CorrelationTestBase.class);

    private void verifyGenericSituation() throws Exception {
        new Grafana44SeleniumDriver(webDriverContainer.getWebDriver(),
                helmContainer.getHelmUrlForWebDriver())
                .home()
                .dashboard(DASHBOARD_NAME)
                .verifyAnAlarmIsPresent()
                .verifyRelatedAlarmLabels(Collections.singletonList(Pair.of(GENERIC_ALARM_TITLE, 3)));
    }

    protected void runBasicCorrelation() throws Exception {
        // Add a node
        LOG.info("Adding node");
        int nodeId = openNMSRestClient.addTestNode();

        // Trigger some alarms
        LOG.info("Triggering alarms that should end up related");
        openNMSRestClient.triggerAlarmsForCorrelation(nodeId);

        // ALEC Should now correlate them, we need to wait here for the situation alarm to show up
        LOG.info("Waiting for a situation to be received by OpenNMS...");
        openNMSRestClient.waitForOutstandingSituation();

        // Login, navigate to dashboard, view alarm in table, verify the related alarms
        LOG.info("Situation received, verifying via Helm...");
        verifyGenericSituation();
    }
}
