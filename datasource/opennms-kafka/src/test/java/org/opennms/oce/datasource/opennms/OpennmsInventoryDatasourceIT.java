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
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

public class OpennmsInventoryDatasourceIT extends OpennmsDatasourceIT {

    MyAlarmHandler alarmHandler = new MyAlarmHandler();

    MyInventoryHandler inventoryHandler = new MyInventoryHandler();
    
    private final EdgeToInventory  edgeToInventory = new EdgeToInventory(OpennmsKafkaScriptedInventory.withDefaults());

    @Before
    public void setUp() throws IOException {
        super.setUp();

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
        OpennmsModelProtos.Node node = MockNetwork.getNode1();
        sendNodeToKafka(node);

        // Send an alarm related to the node
        OpennmsModelProtos.Alarm alarm = MockNetwork.createNodeDownAlarmFor(node);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the node
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(alarm.getManagedObjectInstance()));

        // The node should exist with the same type/id referenced by the alarm
        await().atMost(5, TimeUnit.SECONDS).until(() ->
                inventoryHandler.getIoByKey(ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId())), notNullValue());
    }

    @Test
    public void canGenerateSnmpInterfaceRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = MockNetwork.getNode1();
        sendNodeToKafka(node);

        // Send an alarm related to an SNMP interface on the node
        OpennmsModelProtos.Alarm alarm = MockNetwork.createSnmpInterfaceDownAlarmFor(node, 1);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the SNMP interface
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

    @Test
    public void canGenerateSnmpInterfaceLinkRelatedAlarmsAndInventory() {
        // Create two nodes
        OpennmsModelProtos.Node node1 = MockNetwork.getNode1();
        sendNodeToKafka(node1);

        OpennmsModelProtos.Node node2 = MockNetwork.getNode2();
        sendNodeToKafka(node2);

        // Send an alarm related to a link between the nodes
        OpennmsModelProtos.Alarm alarm = MockNetwork.createSnmpInterfaceLinkDownAlarmFor(node1, 1, node2, 11);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the SNMP interface
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        String expectedId = String.format("%s:%d:%s:%d", OpennmsMapper.toNodeCriteria(node2), 11,
                OpennmsMapper.toNodeCriteria(node1), 1);
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(expectedId));

        // The SNMP interface link should exist with the same type/id referenced by the alarm
        ResourceKey snmpIntfLinkKey = ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId());
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(snmpIntfLinkKey), notNullValue());

        // Wait for the nodes
        ResourceKey node1Key = ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node1));
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(node1Key), notNullValue());
        ResourceKey node2Key = ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node2));
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(node2Key), notNullValue());

        // The SNMP interface link should have the SNMP interfaces as peers
        InventoryObject snmpIntfLink = inventoryHandler.getIoByKey(snmpIntfLinkKey);
        assertThat(snmpIntfLink.getPeers(), hasSize(2));
        InventoryObject snmpIntfA = getPeer(snmpIntfLink, InventoryObjectPeerEndpoint.A);
        assertThat(snmpIntfA.getType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
        assertThat(snmpIntfA.getParentType(), equalTo(ManagedObjectType.Node.getName()));
        InventoryObject snmpIntfZ = getPeer(snmpIntfLink, InventoryObjectPeerEndpoint.Z);
        assertThat(snmpIntfZ.getType(), equalTo(ManagedObjectType.SnmpInterface.getName()));
        assertThat(snmpIntfZ.getParentType(), equalTo(ManagedObjectType.Node.getName()));
    }

    @Test
    public void canGenerateSnmpInterfaceLinksFromEdges() {
        datasource.setInventoryTtlMs(1000);
        datasource.setInventoryGcIntervalMs(500);
        OpennmsModelProtos.NodeCriteria sourceNodeCriteria = OpennmsModelProtos.NodeCriteria.newBuilder()
                .setForeignSource("aFS")
                .setForeignId("aFID")
                .build();
        OpennmsModelProtos.NodeCriteria targetNodeCriteria = OpennmsModelProtos.NodeCriteria.newBuilder()
                .setForeignSource("zFS")
                .setForeignId("zFID")
                .build();
        OpennmsModelProtos.TopologyEdge edge = MockNetwork.createPortToPortEdgeFor(OpennmsModelProtos.TopologyRef.Protocol.CDP,
                "id", sourceNodeCriteria, targetNodeCriteria, 0);

        InventoryObject snmpInterfaceLink = sendEdgeToKafkaAndWaitForIO(edge,
                ManagedObjectType.SnmpInterfaceLink.getName());
        assertThat(snmpInterfaceLink.getType(), equalTo(ManagedObjectType.SnmpInterfaceLink.getName()));
        assertThat(snmpInterfaceLink.getPeers().size(), equalTo(2));
        snmpInterfaceLink.getPeers().forEach(edgePeer -> assertThat(edgePeer.getType(),
                equalTo(ManagedObjectType.SnmpInterface.getName())));

        sendEdgeDeleteToKafkaAndWaitForIO(edge,ManagedObjectType.SnmpInterfaceLink.getName());
        assertThat(inventoryHandler.iosByKey.size(), equalTo(0));
    }

    @Test
    public void canGenerateEntPhysicalEntityRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = MockNetwork.getNode1();
        sendNodeToKafka(node);

        // Send an alarm related to a fan on the node
        OpennmsModelProtos.Alarm alarm = MockNetwork.createFanDownAlarmFor(node, 1);
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the fan
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        String expectedId = String.format("%s:%d", OpennmsMapper.toNodeCriteria(node), 1);
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(expectedId));

        // Wait for the node
        ResourceKey nodeKey = ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node));
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(nodeKey), notNullValue());

        // The fan should exist with the same type/id referenced by the alarm
        ResourceKey fanKey = ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId());
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(fanKey), notNullValue());

        // The fan should have the node as it's parent
        InventoryObject fan = inventoryHandler.getIoByKey(fanKey);
        assertThat(fan.getParentType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(fan.getParentId(), equalTo(toNodeCriteria(node)));
    }

    @Test
    public void canGenerateBgpPeerRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = MockNetwork.getNode1();
        sendNodeToKafka(node);

        // Send an alarm related to a peer on the node
        OpennmsModelProtos.Alarm alarm = MockNetwork.createBgpPeerAlarmFor(node, "192.168.1.1", "kanata");
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the peer
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        String expectedId = String.format("%s:%s:%s", OpennmsMapper.toNodeCriteria(node), "192.168.1.1", "kanata");
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(expectedId));

        // Wait for the node
        ResourceKey nodeKey = ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node));
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(nodeKey), notNullValue());

        // The BGP peer should exist with the same type/id referenced by the alarm
        ResourceKey bgpPeerKey = ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId());
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(bgpPeerKey), notNullValue());

        // The BGP peer should have the node as it's parent
        InventoryObject bgpPeer = inventoryHandler.getIoByKey(bgpPeerKey);
        assertThat(bgpPeer.getParentType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(bgpPeer.getParentId(), equalTo(toNodeCriteria(node)));
    }

    @Test
    public void canGenerateVpnTunnelRelatedAlarmsAndInventory() {
        // Create a node
        OpennmsModelProtos.Node node = MockNetwork.getNode1();
        sendNodeToKafka(node);

        // Send an alarm related to a tunnel on the node
        OpennmsModelProtos.Alarm alarm = MockNetwork.createVpnTunnelAlarmFor(node, "192.168.1.1", "192.168.2.1", "99");
        Alarm oceAlarm = sendAlarmToKafkaAndWaitForRef(alarm);

        // Validate that the alarm references the tunnel
        assertThat(oceAlarm.getInventoryObjectType(), equalTo(alarm.getManagedObjectType()));
        String expectedId = String.format("%s:%s:%s:%s", OpennmsMapper.toNodeCriteria(node), "192.168.1.1", "192.168.2.1", "99");
        assertThat(oceAlarm.getInventoryObjectId(), equalTo(expectedId));

        // Wait for the node
        ResourceKey nodeKey = ResourceKey.key(ManagedObjectType.Node.getName(), toNodeCriteria(node));
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(nodeKey), notNullValue());

        // The tunnel should exist with the same type/id referenced by the alarm
        ResourceKey vpnTunnelKey = ResourceKey.key(oceAlarm.getInventoryObjectType(), oceAlarm.getInventoryObjectId());
        await().atMost(5, TimeUnit.SECONDS).until(() -> inventoryHandler.getIoByKey(vpnTunnelKey), notNullValue());

        // The tunnel should have the node as it's parent
        InventoryObject vpnTunnel = inventoryHandler.getIoByKey(vpnTunnelKey);
        assertThat(vpnTunnel.getParentType(), equalTo(ManagedObjectType.Node.getName()));
        assertThat(vpnTunnel.getParentId(), equalTo(toNodeCriteria(node)));
    }

    private InventoryObject getPeer(InventoryObject ioWithPeers, InventoryObjectPeerEndpoint endpoint) {
        InventoryObjectPeerRef peerRef = ioWithPeers.getPeers().stream()
                .filter(pr -> endpoint.equals(pr.getEndpoint()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("No endpoint " + endpoint));
        ResourceKey peerKey = ResourceKey.key(peerRef.getType(), peerRef.getId());
        InventoryObject peer = inventoryHandler.getIoByKey(peerKey);
        assertThat(String.format("No peer found with key: %s. Available objects include: %s.",
                peerKey, inventoryHandler.getIosByKey().keySet()) , peer, notNullValue());
        return peer;
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

    private InventoryObject sendEdgeToKafkaAndWaitForIO(OpennmsModelProtos.TopologyEdge edge, String type) {
        String expectedId = edgeToInventory.getIdForEdge(edge, type);
        ResourceKey resourceKey = ResourceKey.key(ManagedObjectType.SnmpInterfaceLink.getName(), expectedId);
        // We currently assume that there is no existing link with this resource key
        assertThat(inventoryHandler.getIoByKey(resourceKey), nullValue());

        // Send the edge and block until it was sent to Kafka
        try {
            producer.send(new ProducerRecord<>("edges", String.format("topology:%s:%s",
                    edge.getRef().getProtocol().name(), edge.getRef().getId()), edge.toByteArray())).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // Wait for the link to be published to the handler
        await().atMost(5, TimeUnit.SECONDS).until(() ->
                inventoryHandler.getIoByKey(resourceKey), notNullValue());

        // Grab a reference to the link and return
        InventoryObject link = inventoryHandler.getIoByKey(resourceKey);
        assertThat(link, notNullValue());
        return link;
    }

    private void sendEdgeDeleteToKafkaAndWaitForIO(OpennmsModelProtos.TopologyEdge edge, String type) {
        String expectedId = edgeToInventory.getIdForEdge(edge, type);
        ResourceKey resourceKey = ResourceKey.key(ManagedObjectType.SnmpInterfaceLink.getName(), expectedId);

        // Send the edge and block until it was sent to Kafka
        try {
            producer.send(new ProducerRecord<>("edges", String.format("topology:%s:%s",
                    edge.getRef().getProtocol().name(), edge.getRef().getId()), null)).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // Wait for the link to be published to the handler
        await().atMost(5, TimeUnit.SECONDS).until(() ->
                inventoryHandler.getIoByKey(resourceKey), nullValue());
    }

    private static class MyAlarmHandler implements AlarmHandler {
        private final Map<String, Alarm> alarmsById = new ConcurrentHashMap<>();

        @Override
        public void onAlarmCreatedOrUpdated(Alarm alarm) {
            alarmsById.put(alarm.getId(), alarm);
        }

        @Override
        public void onAlarmCleared(Alarm alarm) {
            alarmsById.put(alarm.getId(), null);
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
