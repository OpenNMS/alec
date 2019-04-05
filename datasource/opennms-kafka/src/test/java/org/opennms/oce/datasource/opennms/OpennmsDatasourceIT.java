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

package org.opennms.oce.datasource.opennms;

import static org.mockito.Mockito.RETURNS_DEEP_STUBS;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.KAFKA_PRODUCER_PID;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.KAFKA_STREAMS_PID;

import java.io.IOException;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Map;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.common.serialization.ByteArraySerializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.junit.Before;
import org.junit.Rule;
import org.junit.rules.TemporaryFolder;
import org.osgi.service.cm.ConfigurationAdmin;
import org.springframework.kafka.test.rule.KafkaEmbedded;
import org.springframework.kafka.test.utils.KafkaTestUtils;

/**
 * Base class used for testing the OpennmsDatasource
 */
public abstract class OpennmsDatasourceIT {

    @Rule
    public KafkaEmbedded embeddedKafka = new KafkaEmbedded(2, true, 2,
            "alarms", "alarmFeedback", "nodes", "oce-inventory", "edges");

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    public KafkaProducer<String, byte[]> producer;

    public OpennmsDatasource datasource;

    @Before
    public void setUp() throws IOException {
        // Create the producer
        Map<String, Object> senderProps = KafkaTestUtils.producerProps(embeddedKafka);
        senderProps.put("key.serializer", StringSerializer.class.getCanonicalName());
        senderProps.put("value.serializer", ByteArraySerializer.class.getCanonicalName());
        producer = new KafkaProducer<>(senderProps);

        // Create the datasource
        ScriptedInventoryService inventoryService = OpennmsKafkaScriptedInventory.withDefaults();
        NodeToInventory nodeToInventory = new NodeToInventory(inventoryService);
        AlarmToInventory alarmToInventory = new AlarmToInventory(inventoryService);
        EdgeToInventory edgeToInventory = new EdgeToInventory(inventoryService);
        datasource = new OpennmsDatasource(getDatasourceConfig(), nodeToInventory, alarmToInventory, edgeToInventory);
    }

    public ConfigurationAdmin getDatasourceConfig() throws IOException {
        final Dictionary<String,Object> streamProps = new Hashtable<>();
        KafkaTestUtils.consumerProps("datasource", "false", embeddedKafka)
                .forEach((key, value) -> streamProps.put(key, value.toString()));
        streamProps.put("application.id", "datasource");
        streamProps.put("state.dir", temporaryFolder.getRoot().getAbsolutePath());
        streamProps.put("commit.interval.ms", "500");
        streamProps.remove("enable.auto.commit"); // remove this since we use streams

        ConfigurationAdmin configAdmin = mock(ConfigurationAdmin.class, RETURNS_DEEP_STUBS);
        when(configAdmin.getConfiguration(KAFKA_STREAMS_PID).getProperties()).thenReturn(streamProps);

        final Dictionary<String,Object> producerProps = new Hashtable<>();
        KafkaTestUtils.consumerProps("datasource", "false", embeddedKafka)
                .forEach((key, value) -> producerProps.put(key, value.toString()));
        when(configAdmin.getConfiguration(KAFKA_PRODUCER_PID).getProperties()).thenReturn(producerProps);

        return configAdmin;
    }
}
