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

package org.opennms.oce.engine.cluster;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;

import edu.uci.ics.jung.graph.DirectedGraph;
import edu.uci.ics.jung.graph.Graph;

public class ClusterEngineTest implements IncidentHandler {

    private ClusterEngine engine = new ClusterEngine();

    private Map<String, Incident> incidentsById = new LinkedHashMap<>();

    @Before
    public void setUp() {
        engine.registerIncidentHandler(this);
    }

    @Test
    public void canCreateGraph() {
        // Initial graph should be empty
        Graph<Vertex, Edge> graph = engine.getGraph();
        assertThat(graph.getVertexCount(), equalTo(0));
        assertThat(graph.getEdgeCount(), equalTo(0));

        // Trigger some alarm
        Alarm alarm = mock(Alarm.class);
        ResourceKey key = new ResourceKey("a", "b", "c", "d");
        when(alarm.getResourceKey()).thenReturn(key);
        engine.onAlarm(alarm);

        // The graph should be updated
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));

        // Now trigger the same alarm again
        engine.onAlarm(alarm);

        // The graph should not have changed
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));
    }

    @Test
    public void canClusterAlarms() {
        long now = System.currentTimeMillis();

        // Trigger two alarms on the same resource very close in time
        ResourceKey key = new ResourceKey("a", "b", "c", "d");

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn("1");
        when(alarm1.getResourceKey()).thenReturn(key);
        when(alarm1.getTime()).thenReturn(now);
        engine.onAlarm(alarm1);

        Alarm alarm2 = mock(Alarm.class);
        when(alarm2.getId()).thenReturn("2");
        when(alarm2.getResourceKey()).thenReturn(key);
        when(alarm2.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm2);

        // No incidents should be created yet
        assertThat(incidentsById.keySet(), hasSize(0));

        // Tick
        engine.tick(now+2);

        // We should now have a single incident with both alarms
        assertThat(incidentsById.keySet(), hasSize(1));
        Incident incident = incidentsById.values().iterator().next();
        assertThat(incident.getAlarms(), containsInAnyOrder(alarm1, alarm2));

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // Incidents should remain unchanged
        assertThat(incidentsById.keySet(), hasSize(1));
        incident = incidentsById.values().iterator().next();
        assertThat(incident.getAlarms(), hasSize(2));

        // Now add a 3rd (unrelated) alarm on another resource
        ResourceKey otherKey = new ResourceKey("w", "x", "y", "z");
        Alarm alarm3 = mock(Alarm.class);
        when(alarm3.getId()).thenReturn("3");
        when(alarm3.getResourceKey()).thenReturn(otherKey);
        when(alarm3.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm3);

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // Incidents should remain unchanged
        assertThat(incidentsById.keySet(), hasSize(1));
        incident = incidentsById.values().iterator().next();
        assertThat(incident.getAlarms(), hasSize(2));

        // Now add a 4th alarm near #3
        ResourceKey otherOtherKey = new ResourceKey("w", "x", "y", "z2");
        Alarm alarm4 = mock(Alarm.class);
        when(alarm4.getId()).thenReturn("4");
        when(alarm4.getResourceKey()).thenReturn(otherOtherKey);
        when(alarm4.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm4);

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // We should get a new incident with #3 and #4
        assertThat(incidentsById.keySet(), hasSize(2));
        incident = incidentsById.get("1");
        assertThat(incident.getAlarms(), containsInAnyOrder(alarm3, alarm4));
    }

    @Override
    public void onIncident(Incident incident) {
        incidentsById.put(incident.getId(), incident);
    }
}
