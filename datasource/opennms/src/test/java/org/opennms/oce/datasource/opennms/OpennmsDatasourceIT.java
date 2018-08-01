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

import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.RETURNS_DEEP_STUBS;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.opennms.oce.datasource.opennms.OpennmsDatasource.KAFKA_STREAMS_PID;

import java.io.IOException;
import java.util.Collection;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.ByteArraySerializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.osgi.service.cm.ConfigurationAdmin;
import org.springframework.kafka.test.rule.KafkaEmbedded;
import org.springframework.kafka.test.utils.KafkaTestUtils;

public class OpennmsDatasourceIT {

    @Rule
    public KafkaEmbedded embeddedKafka = new KafkaEmbedded(2, true, 2,
            "alarms", "nodes");

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    private KafkaProducer<String, byte[]> producer;

    private OpennmsDatasource datasource;

    @Before
    public void setUp() throws IOException {
        // Create the producer
        Map<String, Object> senderProps = KafkaTestUtils.producerProps(embeddedKafka);
        senderProps.put("key.serializer", StringSerializer.class.getCanonicalName());
        senderProps.put("value.serializer", ByteArraySerializer.class.getCanonicalName());
        producer = new KafkaProducer<>(senderProps);

        // Create, but don't initialize the datasource
        datasource = new OpennmsDatasource(getDatasourceConfig());
        datasource.setAlarmTopic("alarms");
        datasource.setNodeTopic("nodes");
    }

    @After
    public void tearDown() {
        datasource.destroy();
    }

    @Test
    public void canGenerateAlarmsAndInventory() throws ExecutionException, InterruptedException, IOException {
        // Register our handlers
        MyAlarmHandler alarmHandler = new MyAlarmHandler();
        datasource.registerHandler(alarmHandler);
        MyInventoryHandler inventoryHandler = new MyInventoryHandler();
        datasource.registerHandler(inventoryHandler);

        // Init
        datasource.init();

        OpennmsModelProtos.Node node = OpennmsModelProtos.Node.newBuilder()
                .setForeignSource("FS")
                .setForeignId("FID")
                .setId(22)
                .setLabel("n1")
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(1)
                        .setIfAlias("eth0")
                        .build())
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(2)
                        .setIfAlias("eth1")
                        .build())
                .build();
        producer.send(new ProducerRecord<>("nodes", Long.toString(node.getId()), node.toByteArray())).get();

        OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey("SNMP_Link_Down::1")
                .setLastEventTime(2)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource("FS")
                        .setForeignId("FID")
                        .setId(22)
                        .build())
                .build();
        producer.send(new ProducerRecord<>("alarms", alarm.getReductionKey(), alarm.toByteArray())).get();

        // Wait for the alarm
        await().atMost(30, TimeUnit.SECONDS).until(() -> alarmHandler.getAlarmsById().keySet(), hasSize(1));

        // Wait for a node
        await().atMost(30, TimeUnit.SECONDS).until(() -> inventoryHandler.getIosByKey().keySet(), hasSize(greaterThanOrEqualTo(1)));
    }

    private ConfigurationAdmin getDatasourceConfig() throws IOException {
        final Dictionary<String,Object> props = new Hashtable<>();
        KafkaTestUtils.consumerProps("datasource", "false", embeddedKafka)
                .forEach((key, value) -> props.put(key, value.toString()));
        props.put("application.id", "datasource");
        props.put("state.dir", temporaryFolder.newFolder().getAbsolutePath());
        props.put("commit.interval.ms", "500");
        props.remove("enable.auto.commit"); // remove this since we use streams

        ConfigurationAdmin configAdmin = mock(ConfigurationAdmin.class, RETURNS_DEEP_STUBS);
        when(configAdmin.getConfiguration(KAFKA_STREAMS_PID).getProperties()).thenReturn(props);
        return configAdmin;
    }

    private static class MyAlarmHandler implements AlarmHandler {
        private final Map<String, Alarm> alarmsById = new ConcurrentHashMap<>();

        @Override
        public void onAlarmCreatedOrUpdated(Alarm alarm) {
            alarmsById.put(alarm.getId(), alarm);
        }

        @Override
        public void onAlarmCleared(Alarm alarm) {
            alarmsById.put(alarm.getId(), alarm);
        }

        public Map<String, Alarm> getAlarmsById() {
            return alarmsById;
        }
    }

    private static class MyInventoryHandler implements InventoryHandler {
        private final Map<ResourceKey, InventoryObject> iosByKey = new ConcurrentHashMap<>();

        @Override
        public void onInventoryAdded(Collection<InventoryObject> inventoryObjects) {
            inventoryObjects.forEach(io -> iosByKey.put(ResourceKey.key(io.getType(), io.getId()), io));
        }

        @Override
        public void onInventoryRemoved(Collection<InventoryObject> inventoryObjects) {
            inventoryObjects.forEach(io -> iosByKey.remove(ResourceKey.key(io.getType(), io.getId())));
        }

        public Map<ResourceKey, InventoryObject> getIosByKey() {
            return iosByKey;
        }
    }
}
