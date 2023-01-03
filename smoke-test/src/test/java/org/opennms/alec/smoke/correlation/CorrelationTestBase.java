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

import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertThat;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.tuple.Pair;
import org.junit.rules.TestRule;
import org.opennms.alec.smoke.ALECSmokeTestBase;
import org.opennms.alec.smoke.CorrelationSetupAndCleanupRule;
import org.opennms.alec.smoke.containers.BrowserWebDriverContainer;
import org.opennms.alec.smoke.containers.HelmContainer;
import org.opennms.alec.smoke.grafana.Grafana44SeleniumDriver;
import org.opennms.alec.smoke.grafana.GrafanaRestClient;
import org.opennms.alec.smoke.util.DockerImageResolver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class CorrelationTestBase extends ALECSmokeTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(CorrelationTestBase.class);
    private static final String PLUGIN_NAME = "opennms-helm-app";
    private static final String DATA_SOURCE_NAME = "OpenNMS-Fault-Management";
    private static final String DASHBOARD_NAME = "Helm-Dashboard";
    private static final String GENERIC_ALARM_TITLE = "Alarm: Generic Trigger";
    private GrafanaRestClient grafanaRestClient;
    private HelmContainer helmContainer;
    private org.testcontainers.containers.BrowserWebDriverContainer webDriverContainer;

    @Override
    protected final void adjustContainersForTest() {
        helmContainer = new HelmContainer();
        webDriverContainer =
                new BrowserWebDriverContainer(DockerImageResolver.getImageAndTag("selenium"))
                        .withCapabilities(DesiredCapabilities.chrome())
                        .withRecordingMode(BrowserWebDriverContainer.VncRecordingMode.RECORD_FAILING,
                                new File(Optional.ofNullable(System.getenv("TEST_RECORDING_DIR"))
                                        .orElse("/tmp")));

        addContainers(Collections.singletonList(helmContainer));
        // Any containers sub classes add will be in between the helm container and web driver container in startup
        // order
        adjustCorrelationContainers();
        addContainers(Collections.singletonList(webDriverContainer));
    }

    @Override
    protected final TestRule setupAndCleanupRule() {
        return new CorrelationSetupAndCleanupRule(this::setup, this::cleanup);
    }

    protected abstract void adjustCorrelationContainers();

    private void verifyGenericSituation() {
        Grafana44SeleniumDriver driver = new Grafana44SeleniumDriver(webDriverContainer.getWebDriver(),
                helmContainer.getHelmUrlForWebDriver());

        // Wait for some time in case the situation we receive at first doesn't contain everything we expect but later
        // gets updated to the correct state
        await().atMost(5, TimeUnit.MINUTES).until(() -> {
            try {
                driver
                        .home()
                        .dashboard(DASHBOARD_NAME)
                        .verifyAnAlarmIsPresent()
                        .verifyRelatedAlarmLabels(Collections.singletonList(Pair.of(GENERIC_ALARM_TITLE, 3)));
            } catch (AssertionError e) {
                LOG.warn("Failed to validate generic situation", e);
                return false;
            }

            return true;
        });
    }

    protected final void runBasicCorrelation() throws Exception {
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

    private void setupHelm(GrafanaRestClient grafanaRestClient) throws IOException {
        // Enable Helm plugin
        grafanaRestClient.setPluginStatus(PLUGIN_NAME, true);

        // Create FM datasource
        grafanaRestClient.addFMDataSource(DATA_SOURCE_NAME);

        // Create dashboard with alarm table
        grafanaRestClient.addFMDasboard(DASHBOARD_NAME, DATA_SOURCE_NAME);
    }

    private void cleanupHelm(GrafanaRestClient grafanaRestClient) {
        grafanaRestClient.deleteDashboard(DASHBOARD_NAME);
        grafanaRestClient.deleteDataSource(DATA_SOURCE_NAME);
        grafanaRestClient.setPluginStatus(PLUGIN_NAME, false);
    }

    private void setup() {
        LOG.info("Setting up...");
        grafanaRestClient = new GrafanaRestClient(helmContainer.getHelmExternalUrl());
        try {
            setupHelm(grafanaRestClient);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // No alarms/situations
        assertThat(openNMSRestClient.getAlarms(), hasSize(0));
    }

    private void cleanup() {
        LOG.info("Cleaning up...");
        cleanupHelm(grafanaRestClient);
    }
}
