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

import static org.opennms.oce.datasource.opennms.SituationToEvent.SITUATION_ID_PARM_NAME;

import org.opennms.oce.datasource.common.inventory.BgpPeerInstance;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;
import org.opennms.oce.datasource.common.inventory.SnmpInterfaceLinkInstance;
import org.opennms.oce.datasource.common.inventory.VpnTunnelInstance;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

import com.google.gson.Gson;

public class MockNetwork {

    private static final Gson gson = new Gson();

    private static final OpennmsModelProtos.Node node1 = buildNode1();
    private static final OpennmsModelProtos.Node node2 = buildNode2();

    public static OpennmsModelProtos.Node getNode1() {
        return node1;
    }

    public static OpennmsModelProtos.Node getNode2() {
        return node2;
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

    private static OpennmsModelProtos.Node buildNode2() {
        return OpennmsModelProtos.Node.newBuilder()
                .setForeignSource("DEVICES")
                .setForeignId("node2")
                .setId(2)
                .setLabel("n2")
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(11)
                        .setIfAlias("eth1/1")
                        .build())
                .addSnmpInterface(OpennmsModelProtos.SnmpInterface.newBuilder()
                        .setIfIndex(12)
                        .setIfAlias("eth1/2")
                        .build())
                .build();
    }

    public static OpennmsModelProtos.Alarm createNodeDownAlarmFor(OpennmsModelProtos.Node node) {
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

    public static OpennmsModelProtos.Alarm createSnmpInterfaceDownAlarmFor(OpennmsModelProtos.Node node, int ifIndex) {
        return createSnmpInterfaceDownAlarmFor(node, ifIndex, 1L);
    }

    public static OpennmsModelProtos.Alarm createSnmpInterfaceDownAlarmFor(OpennmsModelProtos.Node node, int ifIndex, long t) {
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("SNMP_Link_Down::%d::%d", node.getId(),ifIndex))
                .setFirstEventTime(t)
                .setLastEventTime(t)
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

    public static OpennmsModelProtos.Alarm createSnmpInterfaceLinkDownAlarmFor(OpennmsModelProtos.Node nodeA, int ifIndexA, OpennmsModelProtos.Node nodeZ, int ifIndexZ) {
        return createSnmpInterfaceLinkDownAlarmFor(nodeA, ifIndexA, nodeZ, ifIndexZ, 1);
    }

    public static OpennmsModelProtos.Alarm createSnmpInterfaceLinkDownAlarmFor(OpennmsModelProtos.Node nodeA, int ifIndexA, OpennmsModelProtos.Node nodeZ, int ifIndexZ, long t) {
        final SnmpInterfaceLinkInstance snmpInterfaceLinkInstance = new SnmpInterfaceLinkInstance(OpennmsMapper.toNodeCriteria(nodeA), ifIndexA,
                OpennmsMapper.toNodeCriteria(nodeZ), ifIndexZ);
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("SNMP_Link_Down::%d::%d::%d::%d", nodeA.getId(), ifIndexA, nodeZ.getId(), ifIndexZ))
                .setFirstEventTime(t)
                .setLastEventTime(t)
                .setSeverity(OpennmsModelProtos.Severity.MINOR)
                .setManagedObjectInstance(gson.toJson(snmpInterfaceLinkInstance))
                .setManagedObjectType(ManagedObjectType.SnmpInterfaceLink.getName())
                .build();
    }

    public static OpennmsModelProtos.Alarm createBgpPeerAlarmFor(OpennmsModelProtos.Node node, String peer, String vrf) {
        final BgpPeerInstance bgpPeerInstance = new BgpPeerInstance(peer, vrf);
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("bgpBackwardTransition::%d::%s:%s", node.getId(), peer, vrf))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.MINOR)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource(node.getForeignSource())
                        .setForeignId(node.getForeignId())
                        .setId(node.getId())
                        .build())
                .setManagedObjectInstance(gson.toJson(bgpPeerInstance))
                .setManagedObjectType(ManagedObjectType.BgpPeer.getName())
                .build();
    }

    public static OpennmsModelProtos.Alarm createFanDownAlarmFor(OpennmsModelProtos.Node node, int entPhysicalIndex) {
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("cefcFanTrayStatusChange::%d::%d", node.getId(), entPhysicalIndex))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.MINOR)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource(node.getForeignSource())
                        .setForeignId(node.getForeignId())
                        .setId(node.getId())
                        .build())
                .setManagedObjectInstance(Integer.toString(entPhysicalIndex))
                .setManagedObjectType(ManagedObjectType.EntPhysicalEntity.getName())
                .build();
    }

    public static OpennmsModelProtos.Alarm createVpnTunnelAlarmFor(OpennmsModelProtos.Node node, String localAddr, String remoteAddr, String tunnelId) {
        final VpnTunnelInstance vpnTunnelInstance = new VpnTunnelInstance(localAddr, remoteAddr, tunnelId);
        return OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("cikeTunnelStop::%d::%s:%s:%s", node.getId(), localAddr, remoteAddr, tunnelId))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.MINOR)
                .setNodeCriteria(OpennmsModelProtos.NodeCriteria.newBuilder()
                        .setForeignSource(node.getForeignSource())
                        .setForeignId(node.getForeignId())
                        .setId(node.getId())
                        .build())
                .setManagedObjectInstance(gson.toJson(vpnTunnelInstance))
                .setManagedObjectType(ManagedObjectType.VpnTunnel.getName())
                .build();
    }

    public static OpennmsModelProtos.Alarm createAlarmForSituation(String id, OpennmsModelProtos.Alarm... alarms) {
        final OpennmsModelProtos.Alarm.Builder builder = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("%s:%s", SituationToEvent.SITUATION_UEI, id))
                .setSeverity(OpennmsModelProtos.Severity.MINOR);

        OpennmsModelProtos.Event.Builder eventBuilder = OpennmsModelProtos.Event.newBuilder()
                .setUei(SituationToEvent.SITUATION_UEI);
        for (int i = 0; i < alarms.length; i++) {
            for (OpennmsModelProtos.Alarm alarm : alarms) {
                eventBuilder.addParameter(OpennmsModelProtos.EventParameter.newBuilder()
                        .setName("related-reductionKey" + i)
                        .setValue(alarm.getReductionKey()))
                        .addParameter(OpennmsModelProtos.EventParameter.newBuilder()
                                .setName(SITUATION_ID_PARM_NAME)
                                .setValue("test")
                                .build());
            }
        }
        builder.setFirstEventTime(1L);
        builder.setLastEventTime(1L);
        builder.setLastEvent(eventBuilder);

        return builder.build();
    }

    public static OpennmsModelProtos.TopologyEdge createEdgeFor(OpennmsModelProtos.TopologyRef.Protocol protocol,
                                                                String id,
                                                                OpennmsModelProtos.NodeCriteria sourceNodeCriteria,
                                                                OpennmsModelProtos.NodeCriteria targetNodeCriteria,
                                                                long ifIndex) {
        OpennmsModelProtos.TopologyEdge edge = OpennmsModelProtos.TopologyEdge.newBuilder()
                .setRef(OpennmsModelProtos.TopologyRef.newBuilder()
                        .setId(id)
                        .setProtocol(protocol)
                        .build())
                .setSource(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(ifIndex)
                        .setNodeCriteria(sourceNodeCriteria)
                        .build())
                .setTargetPort(OpennmsModelProtos.TopologyPort.newBuilder()
                        .setIfIndex(ifIndex)
                        .setNodeCriteria(targetNodeCriteria)
                        .build())
                .build();

        return edge;
    }
}
