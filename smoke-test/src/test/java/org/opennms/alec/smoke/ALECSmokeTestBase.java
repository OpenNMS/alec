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

package org.opennms.alec.smoke;

import static org.awaitility.Awaitility.await;
import static org.opennms.alec.datasource.opennms.OpennmsDatasource.DEFAULT_ALARM_FEEDBACK_TOPIC;
import static org.opennms.alec.datasource.opennms.OpennmsDatasource.DEFAULT_ALARM_TOPIC;
import static org.opennms.alec.datasource.opennms.OpennmsDatasource.DEFAULT_EDGES_TOPIC;
import static org.opennms.alec.datasource.opennms.OpennmsDatasource.DEFAULT_INVENTORY_TOPIC;
import static org.opennms.alec.datasource.opennms.OpennmsDatasource.DEFAULT_NODE_TOPIC;
import static org.opennms.alec.smoke.containers.OpenNMSContainer.DB_ALIAS;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.kafka.clients.admin.NewTopic;
import org.junit.Rule;
import org.junit.rules.RuleChain;
import org.junit.rules.TestRule;
import org.opennms.alec.smoke.containers.KafkaContainer;
import org.opennms.alec.smoke.containers.OpenNMSContainer;
import org.opennms.alec.smoke.containers.PostgreSQLContainer;
import org.opennms.alec.smoke.opennms.OpenNMSRestClient;
import org.opennms.alec.smoke.util.DockerImageResolver;
import org.opennms.alec.smoke.util.Network;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.wait.strategy.AbstractWaitStrategy;
import org.testcontainers.containers.wait.strategy.Wait;

public abstract class ALECSmokeTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(ALECSmokeTestBase.class);
    protected OpenNMSRestClient openNMSRestClient;

    // Define the containers used by all tests
    protected final GenericContainer kafkaContainer = new KafkaContainer("4.0.0")
            .withNetwork(Network.getNetwork())
            .withNetworkAliases("kafka")
            .waitingFor(new ALECSmokeTestBase.WaitForKafkaTopics());

    protected final GenericContainer postgreSQLContainer =
            new PostgreSQLContainer(DockerImageResolver.getImageAndTag(
                    "postgres"))
                    .withNetwork(Network.getNetwork())
                    .withNetworkAliases(DB_ALIAS);

    protected final OpenNMSContainer opennmsContainer = new OpenNMSContainer();

    // The list of containers to use for tests in startup-order which can be modified by tests through the add/replace
    // methods in this class
    private final List<GenericContainer> baseContainers = new ArrayList<>(Arrays.asList(kafkaContainer,
            postgreSQLContainer, opennmsContainer));

    @Rule
    public final RuleChain containerRuleChain = buildContainerStartupRuleChain();

    private RuleChain buildContainerStartupRuleChain() {
        // Let subclasses change the containers
        adjustContainersForTest();

        // Add all the containers to the rule chain
        Iterator<GenericContainer> containerIterator = baseContainers.iterator();
        RuleChain rc = RuleChain.outerRule(containerIterator.next());

        while (containerIterator.hasNext()) {
            rc = rc.around(containerIterator.next());
        }

        // Add setup/cleanup rules
        return rc.around(new CorrelationSetupAndCleanupRule(this::setup, this::cleanup))
                .around(setupAndCleanupRule());
    }

    protected final void addContainers(List<GenericContainer> containersToAdd) {
        baseContainers.addAll(Objects.requireNonNull(containersToAdd));
    }

    protected final void replaceContainer(GenericContainer existingContainer, GenericContainer newContainer) {
        Objects.requireNonNull(existingContainer);
        Objects.requireNonNull(newContainer);
        baseContainers.set(baseContainers.indexOf(existingContainer), newContainer);
    }

    private void setup() {
        LOG.info("Setting up...");
        openNMSRestClient = new OpenNMSRestClient(getOpennmsContainer().getOpenNMSUrl());
    }

    private void cleanup() {
        LOG.info("Cleaning up...");
        openNMSRestClient.clearAllAlarms();
    }

    // The following methods are intended to be overridden by sub classes
    protected abstract void adjustContainersForTest();

    protected TestRule setupAndCleanupRule() {
        return RuleChain.emptyRuleChain();
    }

    protected OpenNMSContainer getOpennmsContainer() {
        return opennmsContainer;
    }

    // This ensures the ALEC engine can initialize, without the topics it will wait forever
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

            // All of the topics that ALEC requires to be present in order to initialize the Kafka datasource
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
