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

package org.opennms.e2e.oce;

import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertThat;
import static org.opennms.e2e.containers.OpenNMSContainer.DB_ALIAS;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.DEFAULT_ALARM_FEEDBACK_TOPIC;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.DEFAULT_ALARM_TOPIC;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.DEFAULT_EDGES_TOPIC;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.DEFAULT_INVENTORY_TOPIC;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.DEFAULT_NODE_TOPIC;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.tuple.Pair;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.kafka.clients.admin.NewTopic;
import org.junit.Rule;
import org.junit.rules.RuleChain;
import org.opennms.e2e.containers.HelmContainer;
import org.opennms.e2e.containers.OCEContainer;
import org.opennms.e2e.containers.OpenNMSContainer;
import org.opennms.e2e.grafana.Grafana44SeleniumDriver;
import org.opennms.e2e.grafana.GrafanaRestClient;
import org.opennms.e2e.opennms.OpenNMSRestClient;
import org.opennms.e2e.util.DockerImageResolver;
import org.opennms.e2e.util.Network;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.BrowserWebDriverContainer;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.KafkaContainer;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.containers.wait.strategy.AbstractWaitStrategy;
import org.testcontainers.containers.wait.strategy.Wait;

public abstract class AbstractCorrelationTest {
    private static final Logger LOG = LoggerFactory.getLogger(AbstractCorrelationTest.class);
    private static final String PLUGIN_NAME = "opennms-helm-app";
    private static final String DATA_SOURCE_NAME = "OpenNMS-Fault-Management";
    private static final String DASHBOARD_NAME = "Helm-Dashboard";
    private static final String GENERIC_ALARM_TITLE = "Alarm: Generic Trigger";

    GrafanaRestClient grafanaRestClient;
    OpenNMSRestClient openNMSRestClient;

    // Define the containers used by all correlation tests
    private final GenericContainer kafkaContainer = new KafkaContainer("4.0.0")
            .withNetwork(Network.getNetwork())
            .withNetworkAliases("kafka")
            .waitingFor(new WaitForKafkaTopics());
    private final GenericContainer postgreSQLContainer = new PostgreSQLContainer(DockerImageResolver.getImageAndTag(
            "postgres"))
            .withNetwork(Network.getNetwork())
            .withNetworkAliases(DB_ALIAS);
    private final OpenNMSContainer opennmsContainer = new OpenNMSContainer();
    private final HelmContainer helmContainer = new HelmContainer();
    private final BrowserWebDriverContainer webDriverContainer = new BrowserWebDriverContainer(DockerImageResolver.
            getImageAndTag("selenium"))
            .withCapabilities(DesiredCapabilities.chrome())
            .withRecordingMode(BrowserWebDriverContainer.VncRecordingMode.RECORD_FAILING,
                    new File(Optional.ofNullable(System.getenv("TEST_RECORDING_DIR")).orElse("/tmp")));

    // This controls the order of startup of the containers
    //
    // Future improvement could be to define a docker compose file and load that rather than individual
    // containers in a rule chain
    @Rule
    public final RuleChain rc = containerStartupRuleChain();

    private RuleChain containerStartupRuleChain() {
        CorrelationSetupAndCleanupRule setupAndCleanup = new CorrelationSetupAndCleanupRule(this::setup,
                this::cleanup, Boolean.parseBoolean(Optional.ofNullable(
                System.getenv("SKIP_CLEANUP_ON_FAILURE")).orElse("false")));

        return RuleChain
                .outerRule(kafkaContainer)
                .around(postgreSQLContainer)
                .around(opennmsContainer)
                .around(helmContainer)
                // Let subclasses add containers
                .around(addTestSpecificContainers())
                // Add the web driver container and the setup/cleanup rules last
                .around(webDriverContainer)
                .around(setupAndCleanup);
    }

    RuleChain addTestSpecificContainers() {
        // Define a single non-redundant OCE by default
        // If additional containers are required this method should be overridden
        try {
            return RuleChain.outerRule(new OCEContainer(false));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    void verifyGenericSituation() throws Exception {
        new Grafana44SeleniumDriver(webDriverContainer.getWebDriver(),
                helmContainer.getHelmUrlForWebDriver())
                .home()
                .dashboard(DASHBOARD_NAME)
                .verifyAnAlarmIsPresent()
                .verifyRelatedAlarmLabels(Collections.singletonList(Pair.of(GENERIC_ALARM_TITLE, 3)));
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
        openNMSRestClient = new OpenNMSRestClient(opennmsContainer.getOpenNMSUrl());
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
        openNMSRestClient.clearAllAlarms();
        cleanupHelm(grafanaRestClient);
    }

    // This ensures the OCE engine can initialize, without the topics it will wait forever
    private static class WaitForKafkaTopics extends AbstractWaitStrategy {
        @Override
        protected void waitUntilReady() {
            Wait.forListeningPort().waitUntilReady(waitStrategyTarget);
            Properties config = new Properties();
            config.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, String.format("%s:%d",
                    "localhost",
                    waitStrategyTarget.getMappedPort(KafkaContainer.KAFKA_PORT)));
            AdminClient admin = AdminClient.create(config);

            int partitions = 8;
            short replication = 1;

            // All of the topics that OCE requires to be present in order to initialize the Kafka datasource
            List<NewTopic> topics = Arrays.asList(
                    new NewTopic(DEFAULT_ALARM_TOPIC, partitions, replication),
                    new NewTopic(DEFAULT_ALARM_FEEDBACK_TOPIC, partitions, replication),
                    new NewTopic(DEFAULT_NODE_TOPIC, partitions, replication),
                    new NewTopic(DEFAULT_INVENTORY_TOPIC, partitions, replication),
                    new NewTopic(DEFAULT_EDGES_TOPIC, partitions, replication));

            CreateTopicsResult result = admin.createTopics(topics);
            await().atMost(1, TimeUnit.MINUTES).until(() -> result.all().isDone());
            admin.close();
        }
    }
}
