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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.mockito.Mockito.RETURNS_DEEP_STUBS;
import static org.mockito.Mockito.mock;
import static org.opennms.oce.datasource.opennms.OpennmsMapper.toNodeCriteria;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.stream.Collectors;

import org.apache.kafka.common.serialization.StringSerializer;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.TopologyTestDriver;
import org.apache.kafka.streams.state.KeyValueIterator;
import org.apache.kafka.streams.state.KeyValueStore;
import org.apache.kafka.streams.test.ConsumerRecordFactory;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.opennms.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.opennms.oce.datasource.opennms.serialization.AlarmSerializer;
import org.opennms.oce.datasource.opennms.serialization.NodeSerializer;
import org.osgi.service.cm.ConfigurationAdmin;

import com.google.common.collect.Iterators;

public class OpennmsDatasourceStoreTest {

    KeyValueStore<String, InventoryModelProtos.InventoryObjects> inventoryStore;

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    private final ConsumerRecordFactory<String, OpennmsModelProtos.Alarm> alarmRecordFactory =
            new ConsumerRecordFactory<>(new StringSerializer(), new AlarmSerializer());
    private final ConsumerRecordFactory<String, OpennmsModelProtos.Node> nodeRecordFactory =
            new ConsumerRecordFactory<>(new StringSerializer(), new NodeSerializer());

    @Test
    public void canBuildAndMaintainStores() throws IOException {
        long step = 10000L;

        ConfigurationAdmin configAdmin = mock(ConfigurationAdmin.class, RETURNS_DEEP_STUBS);
        OpennmsDatasource datasource = new OpennmsDatasource(configAdmin);
        datasource.setInventoryTtlMs(step-1);
        datasource.setInventoryGcIntervalMs(step);

        Topology topology = datasource.getKTopology();
        Properties props = datasource.loadStreamsProperties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "test");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "dummy:1234");
        props.put(StreamsConfig.STATE_DIR_CONFIG, temporaryFolder.newFolder().getAbsolutePath());
        TopologyTestDriver testDriver = new TopologyTestDriver(topology, props, 0);

        inventoryStore = testDriver.getKeyValueStore(OpennmsDatasource.INVENTORY_STORE);
        assertThat(inventoryStore, notNullValue());

        final KeyValueStore<String, OpennmsModelProtos.Alarm> alarmStore = testDriver.getKeyValueStore(OpennmsDatasource.ALARM_STORE);
        assertThat(alarmStore, notNullValue());

        final KeyValueStore<String, OpennmsModelProtos.Alarm> situationStore = testDriver.getKeyValueStore(OpennmsDatasource.SITUATION_STORE);
        assertThat(situationStore, notNullValue());

        // t=1 - Create an alarm and a node
        long t = step;
        OpennmsModelProtos.Node node1 = MockNetwork.getNode1();
        testDriver.pipeInput(nodeRecordFactory.create(datasource.getNodeTopic(), toNodeCriteria(node1), node1, t));

        OpennmsModelProtos.Alarm if1DownOnN1 = MockNetwork.createSnmpInterfaceDownAlarmFor(node1, 1, t);
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), if1DownOnN1.getReductionKey(), if1DownOnN1, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        InventoryModelProtos.InventoryObject node1Inventory = getInventoryObjectByKey(
                ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node1)));
        assertThat(node1Inventory.getType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(node1Inventory.getId(), equalTo(toNodeCriteria(node1)));

        assertThat(getInventoryObjects(), hasSize(3));
        assertThat(Iterators.size(alarmStore.all()), equalTo(1));
        assertThat(Iterators.size(situationStore.all()), equalTo(0));

        // t=2 - Create an alarm and a node
        t = 2*step;

        OpennmsModelProtos.Node node2 = MockNetwork.getNode2();
        testDriver.pipeInput(nodeRecordFactory.create(datasource.getNodeTopic(), toNodeCriteria(node2), node2, t));

        OpennmsModelProtos.Alarm if1DownOnN2 = MockNetwork.createSnmpInterfaceDownAlarmFor(node2, 1, t);
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), if1DownOnN2.getReductionKey(), if1DownOnN2, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        assertThat(getInventoryObjects(), hasSize(6));
        assertThat(Iterators.size(alarmStore.all()), equalTo(2));
        assertThat(Iterators.size(situationStore.all()), equalTo(0));

        // t=3 - Create a situation and a link down alarm
        t = 3*step;

        OpennmsModelProtos.Alarm situationForIfDowns = MockNetwork.createAlarmForSituation("insitu1", if1DownOnN1, if1DownOnN2);
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), situationForIfDowns.getReductionKey(), situationForIfDowns, t));

        OpennmsModelProtos.Alarm linkDownBetweenN1N2 = MockNetwork.createSnmpInterfaceLinkDownAlarmFor(node1, 1, node2, 1, t);
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), linkDownBetweenN1N2.getReductionKey(), linkDownBetweenN1N2, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        assertThat(getInventoryObjects(), hasSize(7));
        assertThat(Iterators.size(alarmStore.all()), equalTo(3));
        assertThat(Iterators.size(situationStore.all()), equalTo(1));

        // t=4 - Update a situation
        t = 4*step;

        situationForIfDowns = MockNetwork.createAlarmForSituation("insitu1", if1DownOnN1, if1DownOnN2, linkDownBetweenN1N2);
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), situationForIfDowns.getReductionKey(), situationForIfDowns, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        assertThat(getInventoryObjects(), hasSize(7));
        assertThat(Iterators.size(alarmStore.all()), equalTo(3));
        assertThat(Iterators.size(situationStore.all()), equalTo(1));

        // t=5 - Delete a node and clear two alarms
        t = 5*step;

        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), linkDownBetweenN1N2.getReductionKey(), null, t));
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), if1DownOnN2.getReductionKey(), null, t));
        testDriver.pipeInput(nodeRecordFactory.create(datasource.getNodeTopic(), toNodeCriteria(node2), null, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        assertThat(getInventoryObjects(), hasSize(7));
        assertThat(Iterators.size(alarmStore.all()), equalTo(1));
        assertThat(Iterators.size(situationStore.all()), equalTo(1));

        // t=6 - Delete the remaining node, alarm, and situation
        t = 6*step;

        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), if1DownOnN1.getReductionKey(), null, t));
        testDriver.pipeInput(alarmRecordFactory.create(datasource.getAlarmTopic(), situationForIfDowns.getReductionKey(), null, t));
        testDriver.pipeInput(nodeRecordFactory.create(datasource.getNodeTopic(), toNodeCriteria(node1), null, t));

        // tick
        testDriver.advanceWallClockTime(step);

        // verify
        assertThat(getInventoryObjects(), hasSize(3));
        assertThat(Iterators.size(alarmStore.all()), equalTo(0));
        assertThat(Iterators.size(situationStore.all()), equalTo(0));

        testDriver.close();
    }

    private List<InventoryModelProtos.InventoryObject> getInventoryObjects() {
        final List<InventoryModelProtos.InventoryObject> ios = new ArrayList<>();
        final KeyValueIterator<String,InventoryModelProtos.InventoryObjects> it = inventoryStore.all();
        while(it.hasNext()) {
            ios.addAll(it.next().value.getInventoryObjectList());
        }
        return ios;
    }

    private Map<ResourceKey, InventoryModelProtos.InventoryObject> getInventoryObjectsMappedByKey() {
        return getInventoryObjects().stream()
                .collect(Collectors.toMap(io -> ResourceKey.key(io.getType(), io.getId()), io -> io));
    }

    private InventoryModelProtos.InventoryObject getInventoryObjectByKey(ResourceKey key) {
        return getInventoryObjectsMappedByKey().get(key);
    }
}
