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

package org.opennms.oce.datasource.opennms.jvm;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.dao.EdgeDao;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.NodeCriteria;
import org.opennms.integration.api.v1.model.TopologyEdge;
import org.opennms.integration.api.v1.model.TopologyPort;
import org.opennms.integration.api.v1.model.TopologyProtocol;
import org.opennms.integration.api.v1.model.TopologySegment;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.inventory.ManagedObjectType;

public class DirectInventoryDatasourceTest {
    private final NodeDao mockNodeDao = mock(NodeDao.class);
    private final AlarmDao mockAlarmDao = mock(AlarmDao.class);
    private final ScriptedInventoryService inventoryService = new ScriptedInventoryImpl("src/main/resources/inventory" +
            ".groovy");
    private final ApiMapper mapper = new ApiMapper(inventoryService);
    private final EdgeDao mockEdgeDao = mock(EdgeDao.class);
    private final String protocols = "";
    private final DirectInventoryDatasource dic = new DirectInventoryDatasource(mockNodeDao, mockAlarmDao,
            mockEdgeDao, protocols, mapper);
    private final InventoryHandler inventoryHandler = new InventoryHandlerImpl();
    private final Set<InventoryObject> inventory = new HashSet<>();

    @Before
    public void setUp() {
        dic.init();
    }

    /**
     * Test the reference counting behavior of  {@link DirectInventoryDatasource#handleDeletedAlarm}.
     */
    @Test
    public void testHandleNewAndDeletedAlarm() {
        assertThat(dic.getInventoryAndRegisterHandler(inventoryHandler), hasSize(0));
        assertThat(inventory, hasSize(0));

        // Create two alarms that generate the same inventory
        Node node = mock(Node.class);
        when(node.getForeignSource()).thenReturn("fs");
        when(node.getForeignId()).thenReturn("fi");
        when(node.getId()).thenReturn(100);

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn(1);
        when(alarm1.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm1.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm1.getNode()).thenReturn(node);

        Alarm alarm2 = mock(Alarm.class);
        when(alarm2.getId()).thenReturn(2);
        when(alarm2.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm2.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm2.getNode()).thenReturn(node);

        // After the first alarm we should have the inventory
        dic.handleNewOrUpdatedAlarm(alarm1);
        assertThat(inventory, hasSize(1));

        // After the second alarm we should still have just the one inventory
        dic.handleNewOrUpdatedAlarm(alarm2);
        assertThat(inventory, hasSize(1));

        // Deleting one of the alarms should not remove the inventory
        dic.handleDeletedAlarm(alarm1.getId(), alarm1.getReductionKey());
        assertThat(inventory, hasSize(1));

        // Deleting the second alarm should remove the inventory since there is no longer any alarms referencing the
        // inventory
        dic.handleDeletedAlarm(alarm2.getId(), alarm2.getReductionKey());
        assertThat(inventory, hasSize(0));

        // A snapshot that would cause the alarms to be deleted should be handled without inventory changing
        // since the alarms should already be deleted
        dic.handleAlarmSnapshot(Collections.emptyList());
        assertThat(inventory, hasSize(0));

        // A snapshot containing both alarms should result in the inventory being re-added
        dic.handleAlarmSnapshot(Arrays.asList(alarm1, alarm2));
        assertThat(inventory, hasSize(1));

        // An empty snapshot should now result in the inventory being removed since both references are gone
        dic.handleAlarmSnapshot(Collections.emptyList());
        assertThat(inventory, hasSize(0));
    }

    @Test
    public void testHandleNewAndDeletedEdge() {
        assertThat(dic.getInventoryAndRegisterHandler(inventoryHandler), hasSize(0));
        assertThat(inventory, hasSize(0));

        // Create an edge between a segment and an interface on a node
        int portNodeCriteriaId = 99;
        NodeCriteria portNodeCriteria = mock(NodeCriteria.class);
        when(portNodeCriteria.getId()).thenReturn(portNodeCriteriaId);

        String portId = "port.id";
        int portIfIndex = 1;
        TopologyPort port = mock(TopologyPort.class);
        when(port.getId()).thenReturn(portId);
        when(port.getIfIndex()).thenReturn(portIfIndex);
        when(port.getNodeCriteria()).thenReturn(portNodeCriteria);

        TopologyProtocol protocol = TopologyProtocol.CDP;
        String segmentId = "segment.id";
        String segmentCriteria = "segment:criteria";
        TopologySegment segment = mock(TopologySegment.class);
        when(segment.getId()).thenReturn(segmentId);
        when(segment.getProtocol()).thenReturn(protocol);
        when(segment.getSegmentCriteria()).thenReturn(segmentCriteria);

        String edgeId = "edge.id";
        TopologyEdge edge = new EdgeImpl(protocol, edgeId, port, segment);

        int portNodeCriteriaId2 = 992;
        NodeCriteria portNodeCriteria2 = mock(NodeCriteria.class);
        when(portNodeCriteria2.getId()).thenReturn(portNodeCriteriaId2);
        String portId2 = "port.id.2";
        int portIfIndex2 = 2;
        TopologyPort port2 = mock(TopologyPort.class);
        when(port2.getId()).thenReturn(portId2);
        when(port2.getIfIndex()).thenReturn(portIfIndex2);
        when(port2.getNodeCriteria()).thenReturn(portNodeCriteria2);
        String edgeId2 = "edge.id.2";
        TopologyEdge edge2 = new EdgeImpl(protocol, edgeId2, port2, segment);

        // We should have the bridge link and a segment after the first edge
        dic.onEdgeAddedOrUpdated(edge);
        assertThat(inventory, hasSize(2));

        // We should have the same segment but a new link after the second edge
        dic.onEdgeAddedOrUpdated(edge2);
        assertThat(inventory, hasSize(3));

        // We should still have the segment and original link after deleting edge 2
        dic.onEdgeDeleted(edge2);
        assertThat(inventory, hasSize(2));

        // All inventory should be removed after deleting the last edge
        dic.onEdgeDeleted(edge);
        assertThat(inventory, hasSize(0));
    }

    private class InventoryHandlerImpl implements InventoryHandler {
        @Override
        public void onInventoryAdded(Collection<InventoryObject> inventoryObjects) {
            inventory.addAll(inventoryObjects);
        }

        @Override
        public void onInventoryRemoved(Collection<InventoryObject> inventoryObjects) {
            inventory.removeAll(inventoryObjects);
        }
    }

    private static class EdgeImpl implements TopologyEdge {
        private final TopologyProtocol protocol;
        private final String id;
        private final TopologyPort port;
        private final TopologySegment segment;

        public EdgeImpl(TopologyProtocol protocol, String id, TopologyPort port, TopologySegment segment) {
            this.protocol = protocol;
            this.id = id;
            this.port = port;
            this.segment = segment;
        }

        @Override
        public TopologyProtocol getProtocol() {
            return protocol;
        }

        @Override
        public TopologyPort getSource() {
            return port;
        }

        @Override
        public void visitTarget(TopologyEdgeTargetVisitor v) {
            v.visitTargetSegement(segment);
        }

        @Override
        public String getId() {
            return id;
        }

        @Override
        public String getTooltipText() {
            return null;
        }
    }
}
