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
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
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
import org.opennms.oce.datasource.opennms.inventory.ManagedObjectType;
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

    MyAlarmHandler alarmHandler = new MyAlarmHandler();

    MyInventoryHandler inventoryHandler = new MyInventoryHandler();

    @Before
    public void setUp() throws IOException {
        // Create the producer
        Map<String, Object> senderProps = KafkaTestUtils.producerProps(embeddedKafka);
        senderProps.put("key.serializer", StringSerializer.class.getCanonicalName());
        senderProps.put("value.serializer", ByteArraySerializer.class.getCanonicalName());
        producer = new KafkaProducer<>(senderProps);

        // Create the datasource
        datasource = new OpennmsDatasource(getDatasourceConfig());
        datasource.setAlarmTopic("alarms");
        datasource.setNodeTopic("nodes");

        // Register our handlers
        datasource.registerHandler(alarmHandler);
        datasource.registerHandler(inventoryHandler);

        // Init
        datasource.init();
    }

    @After
    public void tearDown() {
        datasource.destroy();
    }

    @Test
    public void canGenerateNodeRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = buildNode1();
        sendNodeToKafka(node);

        // Send an alarm related to the node
        OpennmsModelProtos.Alarm alarm = createNodeDownAlarmFor(node);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the the node
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(alarm.getManagedObjectInstance()));

        // The node should exist with the same type/id referenced by the alarm
        await().atMost(5, TimeUnit.SECONDS).until(() ->
                inventoryHandler.getIoByKey(ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId())), notNullValue());
    }

    @Test
    public void canGenerateSnmpInterfaceRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = buildNode1();
        sendNodeToKafka(node);

        // Send an alarm related to an SNMP interface on the node
        OpennmsModelProtos.Alarm alarm = createSnmpInterfaceDownAlarmFor(node, 1);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the the SNMP interface
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(OpennmsMapper.toNodeCriteria(node) + ":" + alarm.getManagedObjectInstance()));

        // The SNMP interface should exist with the same type/id referenced by the alarm
        ResourceKey snmpIntfKey = ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId());
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(snmpIntfKey), notNullValue());

        // The SNMP interface should have the node as it's parent
        InventoryObject snmpIntf = inventoryHandler.getIoByKey(snmpIntfKey);
        assertThat(snmpIntf.getParentType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(snmpIntf.getParentId(), equalTo(toNodeCriteria(node)));
    }

    private static String toNodeCriteria(OpennmsModelProtos.Node node) {
        return String.format("%s:%s", node.getForeignSource(), node.getForeignId());
    }

    private void sendNodeToKafka(OpennmsModelProtos.Node node) {
        try {
            producer.send(new ProducerRecord<>("nodes", toNodeCriteria(node), node.toByteArray())).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private Alarm sendAlarmToKafkaAndWaitForRef(OpennmsModelProtos.Alarm alarm) {
        // We currently assume that there is no existing alarm with the given reduction key
        assertThat(alarmHandler.getAlarmById(alarm.getReductionKey()), nullValue());

        // Send the alarm and block until it was sent to Kafka
        try {
            producer.send(new ProducerRecord<>("alarms", alarm.getReductionKey(), alarm.toByteArray())).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // Wait for the alarm to be published to the handler
        await().atMost(5, TimeUnit.SECONDS).until(() -> alarmHandler.getAlarmById(alarm.getReductionKey()), notNullValue());

        // Grab a reference to the alarm and return
        Alarm oceAlarm = alarmHandler.getAlarmById(alarm.getReductionKey());
        assertThat(oceAlarm, notNullValue());
        return oceAlarm;
    }

    private static OpennmsModelProtos.Node buildNode1() {
        return OpennmsModelProtos.Node.newBuilder()
                .setForeignSource("NODES")
                .setForeignId("node1")
                .setId(1)
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
    }

    private static OpennmsModelProtos.Alarm createNodeDownAlarmFor(OpennmsModelProtos.Node node) {
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("nodeDown::%d", node.getId()))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource(node.getForeignSource())
                        .setForeignId(node.getForeignId())
                        .setId(node.getId())
                        .build())
                .setManagedObjectInstance(String.format("%s:%s", node.getForeignSource(), node.getForeignId()))
                .setManagedObjectType(ManagedObjectType.Node.getName())
                .build();
    }

    private static OpennmsModelProtos.Alarm createSnmpInterfaceDownAlarmFor(OpennmsModelProtos.Node node, int ifIndex) {
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("SNMP_Link_Down::%d::%d", node.getId(),ifIndex))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.MINOR)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource(node.getForeignSource())
                        .setForeignId(node.getForeignId())
                        .setId(node.getId())
                        .build())
                .setManagedObjectInstance(Integer.toString(ifIndex))
                .setManagedObjectType(ManagedObjectType.SnmpInterface.getName())
                .build();
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

        public Alarm getAlarmById(String id) {
            return alarmsById.get(id);
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

        public InventoryObject getIoByKey(ResourceKey key) {
            return iosByKey.get(key);
        }
    }
}
