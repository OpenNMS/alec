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

package org.opennms.oce.features.graph.janusgraph;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;

import java.util.Collections;

import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversal;
import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.driver.test.MockInventoryBuilder;
import org.opennms.oce.driver.test.MockInventoryType;
import org.opennms.oce.engine.cluster.ClusterEngine;

public class JanusGraphTest {
    private static final String INVENTORY_OBJECT_ID = "inventoryObjectId";
    private static final String KEY_ALARMS = "alarms";
    private final ClusterEngine engine = new ClusterEngine();
    private final ManagedJanusGraph janusGraph = new ManagedJanusGraph("inmemory");
    private GraphTraversalSource g;

    @Test
    public void testGraphManagerWithJanusGraph() {
        engine.registerSituationHandler(mock(SituationHandler.class));
        engine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList());

        // Explicitly add the graph to the Graph Manager
        engine.getGraphManager().onBind(janusGraph, Collections.emptyMap());

        // Add vertices and edges to the graph
        engine.onInventoryAdded(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "b", MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "c")
                .withInventoryObject(MockInventoryType.COMPONENT, "d")
                .withInventoryObject(MockInventoryType.COMPONENT, "e")
                .withPeerRelation(MockInventoryType.COMPONENT, "c", MockInventoryType.COMPONENT, "b",
                        MockInventoryType.COMPONENT, "d")
                // Purposely add duplicate peer relations to make sure they don't result in duplicated edges
                .withPeerRelation(MockInventoryType.COMPONENT, "c", MockInventoryType.COMPONENT, "b",
                        MockInventoryType.COMPONENT, "d")
                .withRelativeRelation(MockInventoryType.COMPONENT, "e", MockInventoryType.COMPONENT, "d")
                .getInventory());

        AlarmBean alarm1 = createAndProcessAlarm("alarm1", "a");
        AlarmBean alarm2 = createAndProcessAlarm("alarm2", "a");
        engine.onTick(alarm2.getTime());

        g = janusGraph.getGraphTraversal();

        // Verify we have the right amount of vertices, edges and alarms
        assertThat(g.E().count().next(), equalTo(4L));
        assertThat(g.V().count().next(), equalTo(5L));
        assertThat(numAlarmsOnVertex("a"), equalTo(2L));

        // Update the alarm and verify it did not result in a new alarm being created and that the update is reflected
        alarm1.setSeverity(Severity.CRITICAL);
        long newTime = alarm1.getTime() + 1000;
        alarm1.setTime(newTime);
        engine.onAlarmCreatedOrUpdated(alarm1);
        assertThat(numAlarmsOnVertex("a"), equalTo(2L));
        boolean alarm1SeverityUpdated = getVertexTraversal("a").properties(KEY_ALARMS).toStream()
                .anyMatch(alarmProperty -> {
                    Alarm alarm = (Alarm) alarmProperty.value();
                    return alarm.getId().equals("alarm1") && alarm.getSeverity() == Severity.CRITICAL &&
                            alarm.getTime() == newTime;
                });
        assertThat(alarm1SeverityUpdated, equalTo(true));

        // Make sure alarms get GC on clear
        alarm1.setSeverity(Severity.CLEARED);
        engine.onAlarmCleared(alarm1);
        engine.tick(alarm1.getTime() + engine.clearTimeoutMs + 1);
        assertThat(numAlarmsOnVertex("a"), equalTo(1L));

        // Make sure alarms get GC on timeout
        alarm2.setSeverity(Severity.CRITICAL);
        // Need to update the alarm so we are eligible to GC
        engine.onAlarmCreatedOrUpdated(alarm2);
        engine.tick(Long.MAX_VALUE);
        assertThat(numAlarmsOnVertex("a"), equalTo(0L));

        engine.getGraphManager().onUnbind(janusGraph, Collections.emptyMap());
    }

    private GraphTraversal<org.apache.tinkerpop.gremlin.structure.Vertex,
            org.apache.tinkerpop.gremlin.structure.Vertex> getVertexTraversal(String inventoryObjectId) {
        return g.V().has(INVENTORY_OBJECT_ID, inventoryObjectId);
    }

    private long numAlarmsOnVertex(String inventoryObjectId) {
        return getVertexTraversal(inventoryObjectId).properties(KEY_ALARMS).count().next();
    }

    private AlarmBean createAndProcessAlarm(String alarmId, String inventoryId) {
        AlarmBean alarm = new AlarmBean(alarmId);
        alarm.setSeverity(Severity.MAJOR);
        alarm.setInventoryObjectId(inventoryId);
        alarm.setInventoryObjectType(MockInventoryType.COMPONENT.getType());
        alarm.setDescription("Description for alarm " + alarmId);
        alarm.setSummary("Summary for alarm " + alarmId);
        engine.onAlarmCreatedOrUpdated(alarm);

        return alarm;
    }
}
