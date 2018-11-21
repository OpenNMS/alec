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
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.sameInstance;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.FeedbackType;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.ImmutableAlarmFeedback;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.driver.test.MockInventoryBuilder;
import org.opennms.oce.driver.test.MockInventoryType;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;
import com.google.common.collect.Maps;

import edu.uci.ics.jung.graph.Graph;

public class ClusterEngineTest implements SituationHandler {

    private ClusterEngine engine = new ClusterEngine();

    private Map<String, Situation> situationsById = new LinkedHashMap<>();

    @Before
    public void setUp() {
        engine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList(), Collections.emptyList());
        engine.registerSituationHandler(this);
    }

    @Test
    public void canCreateGraph() {
        // Initial graph should be empty
        Graph<CEVertex, CEEdge> graph = engine.getGraph();
        assertThat(graph.getVertexCount(), equalTo(0));
        assertThat(graph.getEdgeCount(), equalTo(0));

        engine.onInventoryAdded(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "b", MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "c", MockInventoryType.COMPONENT, "b")
                .withInventoryObject(MockInventoryType.COMPONENT, "d", MockInventoryType.COMPONENT, "c")
                .getInventory());

        // Trigger some alarm
        Alarm alarm = mock(Alarm.class);
        when(alarm.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm.getInventoryObjectId()).thenReturn("d");
        engine.onAlarmCreatedOrUpdated(alarm);

        // The graph should be updated
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));

        // Now trigger the same alarm again
        engine.onAlarmCreatedOrUpdated(alarm);

        // The graph should not have changed
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));

        // Let's link another vertex on the existing graph
        engine.onInventoryAdded(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.COMPONENT, "e", MockInventoryType.COMPONENT, "d")
                .getInventory());
        alarm = mock(Alarm.class);
        when(alarm.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm.getInventoryObjectId()).thenReturn("e");
        engine.onAlarmCreatedOrUpdated(alarm);

        // The graph should be updated
        assertThat(graph.getVertexCount(), equalTo(5));
        assertThat(graph.getEdgeCount(), equalTo(4));
    }

    @Test
    public void canClusterAlarmsAndDeleteSituations() {
        long now = System.currentTimeMillis();
        engine.setTickResolutionMs(TimeUnit.SECONDS.toMillis(30));

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn("1");
        when(alarm1.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm1.getInventoryObjectId()).thenReturn("a");
        when(alarm1.getTime()).thenReturn(now);
        engine.onAlarmCreatedOrUpdated(alarm1);

        Alarm alarm2 = mock(Alarm.class);
        when(alarm2.getId()).thenReturn("2");
        when(alarm2.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm2.getInventoryObjectId()).thenReturn("a");
        when(alarm2.getTime()).thenReturn(now+1);
        engine.onAlarmCreatedOrUpdated(alarm2);

        // No situations should be created yet
        assertThat(situationsById.keySet(), hasSize(0));

        // Tick
        engine.tick(now+2);

        // We should now have a single situation with both alarms
        assertThat(situationsById.keySet(), hasSize(1));
        Situation situation = situationsById.values().iterator().next();
        assertThat(situation.getAlarms(), containsInAnyOrder(alarm1, alarm2));

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // Situations should remain unchanged
        assertThat(situationsById.keySet(), hasSize(1));
        situation = situationsById.values().iterator().next();
        assertThat(situation.getAlarms(), hasSize(2));

        // Now add a 3rd (unrelated) alarm on another resource
        Alarm alarm3 = mock(Alarm.class);
        when(alarm3.getId()).thenReturn("3");
        when(alarm3.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm3.getInventoryObjectId()).thenReturn("b");
        when(alarm3.getTime()).thenReturn(now+1);
        engine.onAlarmCreatedOrUpdated(alarm3);

        // And a 4th alarm near the last one in time, but on another resource
        Alarm alarm4 = mock(Alarm.class);
        when(alarm4.getId()).thenReturn("4");
        when(alarm4.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm4.getInventoryObjectId()).thenReturn("c");
        when(alarm4.getTime()).thenReturn(now+1);
        engine.onAlarmCreatedOrUpdated(alarm4);

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // We should get a new situation with #3 and #4
        // TODO: FIXME: Doesn't work with current default settings, maybe consider changing params in another test?
        //assertThat(situationsById.keySet(), hasSize(2));
        //situation = situationsById.get("1");
        //assertThat(situation.getAlarms(), containsInAnyOrder(alarm3, alarm4));
        
        // Verify that situations can be deleted
        Set<String> situations = situationsById.keySet();
        situations.forEach(situationId -> {
            try {
                engine.deleteSituation(situationId);
            } catch (InterruptedException ignore) {
            }
        });
        assertThat(engine.getSituationsById().size(), equalTo(0));
    }

    @Test
    public void canBlacklistAlarms() {
        long now = System.currentTimeMillis();
        engine.setTickResolutionMs(TimeUnit.SECONDS.toMillis(30));

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn("1");
        when(alarm1.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm1.getInventoryObjectId()).thenReturn("a");
        when(alarm1.getTime()).thenReturn(now);
        engine.onAlarmCreatedOrUpdated(alarm1);

        Alarm alarm2 = mock(Alarm.class);
        when(alarm2.getId()).thenReturn("2");
        when(alarm2.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm2.getInventoryObjectId()).thenReturn("a");
        when(alarm2.getTime()).thenReturn(now+1);
        engine.onAlarmCreatedOrUpdated(alarm2);

        // No situations should be created yet
        assertThat(situationsById.keySet(), hasSize(0));

        // Tick
        engine.tick(now+2);

        // We should now have a single situation with both alarms
        assertThat(situationsById.keySet(), hasSize(1));
        Situation situation = situationsById.values().iterator().next();
        assertThat(situation.getAlarms(), containsInAnyOrder(alarm1, alarm2));

        AlarmFeedback alarmFeedback = ImmutableAlarmFeedback.newBuilder()
                .setSituationKey("uei:" + situation.getId())
                .setAlarmKey(alarm1.getId())
                .setFeedbackType(FeedbackType.FALSE_POSITIVE)
                .build();
        engine.handleAlarmFeedback(alarmFeedback);

        // Now add a 3rd (unrelated) alarm on another resource (just so an alarm is seen as being changed)
        ResourceKey otherKey = new ResourceKey("w", "x", "y", "z");
        Alarm alarm3 = mock(Alarm.class);
        when(alarm3.getId()).thenReturn("3");
        when(alarm3.getInventoryObjectType()).thenReturn(MockInventoryType.COMPONENT.getType());
        when(alarm3.getInventoryObjectId()).thenReturn("b");
        when(alarm3.getTime()).thenReturn(now+1);
        engine.onAlarmCreatedOrUpdated(alarm3);
        
        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);
        situation = situationsById.values().iterator().next();
        // The alarm should have been removed from the situation
        assertThat(situation.getAlarms(), not(contains(alarm1)));
    }

    @Test
    @Ignore("Needs rework now that the functions are no longer static")
    public void canHandleAlarmsInClusters() {
        final AtomicLong situationIdGenerator = new AtomicLong();

        // An empty cluster should return no situations
        Cluster<AlarmInSpaceTime> emptyCluster = new Cluster<>();
        Set<Situation> situations = engine.mapClusterToSituations(emptyCluster, Maps.newHashMap(), Maps.newHashMap(), 0L);
        assertThat(situations, hasSize(0));

        AlarmInSpaceTime alarm1InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm1InSpaceTime.getAlarm().getId()).thenReturn("1");

        AlarmInSpaceTime alarm2InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm2InSpaceTime.getAlarm().getId()).thenReturn("2");

        AlarmInSpaceTime alarm3InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm3InSpaceTime.getAlarm().getId()).thenReturn("3");

        // A cluster with a single alarm that was not previously mapped to a situation should be in a new situation
        Cluster<AlarmInSpaceTime> cluster = new Cluster<>();
        cluster.addPoint(alarm1InSpaceTime);
        situations = engine.mapClusterToSituations(cluster, Maps.newHashMap(), Maps.newHashMap(), 0L);
        assertThat(situations, hasSize(1));
        assertThat(Iterables.getFirst(situations, null).getAlarms(), hasSize(1));

        // A cluster with two alarms that were not previously mapped to a situation should be in a new situation
        cluster.addPoint(alarm2InSpaceTime);
        situations = engine.mapClusterToSituations(cluster, Maps.newHashMap(), Maps.newHashMap(), 0L);
        assertThat(situations, hasSize(1));
        assertThat(Iterables.getFirst(situations, null).getAlarms(), hasSize(2));

        // A cluster with an alarm that was previously mapped to a situation, and another alarm that was not previously mapped
        // should be mapped to the same situation
        SituationBean existingSituation = new SituationBean();
        existingSituation.setId(Long.valueOf(situationIdGenerator.incrementAndGet()).toString());
        existingSituation.addAlarm(alarm1InSpaceTime.getAlarm());
        Map<String, Situation> alarmIdToSituationMap = new ImmutableMap.Builder<String, Situation>().put("1", existingSituation)
                .build();
        Map<String, Situation> situationsById = new ImmutableMap.Builder<String, Situation>()
            .put(existingSituation.getId(), existingSituation)
                .build();

        situations = engine.mapClusterToSituations(cluster, alarmIdToSituationMap, situationsById, 0L);
        assertThat(situations, hasSize(1));
        assertThat(Iterables.getFirst(situations, null), sameInstance(existingSituation));
        assertThat(Iterables.getFirst(situations, null).getAlarms(), hasSize(2));

        // A cluster with alarms that are already mapped to separate situations should not updated/create any situations
        SituationBean existingSituation2 = new SituationBean();
        existingSituation2.setId(Long.valueOf(situationIdGenerator.incrementAndGet()).toString());
        existingSituation2.addAlarm(alarm2InSpaceTime.getAlarm());
        alarmIdToSituationMap = new ImmutableMap.Builder<String, Situation>().put("1", existingSituation).put("2", existingSituation2)
                .build();
        situationsById = new ImmutableMap.Builder<String, Situation>().put(existingSituation.getId(), existingSituation)
            .put(existingSituation2.getId(), existingSituation)
                .build();

        situations = engine.mapClusterToSituations(cluster, alarmIdToSituationMap, situationsById, 0L);
        assertThat(situations, hasSize(0));

        // If a cluster contains alarms in different situations and one or more alarms that are not
        // yet associated to a situation, then we chose to add the alarms without situations to their the same situation
        // as their closest neighbor
        existingSituation = new SituationBean();
        existingSituation.setId(Long.valueOf(situationIdGenerator.incrementAndGet()).toString());
        existingSituation.addAlarm(alarm1InSpaceTime.getAlarm());

        existingSituation2 = new SituationBean();
        existingSituation2.setId(Long.valueOf(situationIdGenerator.incrementAndGet()).toString());
        existingSituation2.addAlarm(alarm2InSpaceTime.getAlarm());

        alarmIdToSituationMap = new ImmutableMap.Builder<String, Situation>().put("1", existingSituation).put("2", existingSituation2)
                .build();
        situationsById = new ImmutableMap.Builder<String, Situation>().put(existingSituation.getId(), existingSituation)
            .put(existingSituation2.getId(), existingSituation)
                .build();

        cluster.addPoint(alarm3InSpaceTime);
        situations = engine.mapClusterToSituations(cluster, alarmIdToSituationMap, situationsById, 0L);
        assertThat(situations, hasSize(1));
        assertThat(Iterables.getFirst(situations, null), sameInstance(existingSituation));
        assertThat(Iterables.getFirst(situations, null).getAlarms(), hasSize(2));
    }

    @Test
    public void testWeights() {
        // Initial graph should be empty
        Graph<CEVertex, CEEdge> graph = engine.getGraph();
        assertThat(graph.getVertexCount(), equalTo(0));
        assertThat(graph.getEdgeCount(), equalTo(0));

        // Add vertices and edges to the graph
        engine.onInventoryAdded(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "b", MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "c")
                .withInventoryObject(MockInventoryType.COMPONENT, "d")
                .withInventoryObject(MockInventoryType.COMPONENT, "e")
                .withPeerRelation(MockInventoryType.COMPONENT, "c", MockInventoryType.COMPONENT, "b",
                        MockInventoryType.COMPONENT, "d")
                .withRelativeRelation(MockInventoryType.COMPONENT, "e", MockInventoryType.COMPONENT, "d")
                .getInventory());

        // A-B is a parent relationship
        assertThat(engine.getSpatialDistanceBetween(getVertexIdForComponentId("a"), getVertexIdForComponentId("b")),
                equalTo((int) MockInventoryBuilder.PARENT_WEIGHT));

        // B-C-D is a peer relationship
        assertThat(engine.getSpatialDistanceBetween(getVertexIdForComponentId("b"), getVertexIdForComponentId("c")),
                equalTo((int) MockInventoryBuilder.PEER_WEIGHT));
        assertThat(engine.getSpatialDistanceBetween(getVertexIdForComponentId("b"), getVertexIdForComponentId("d")),
                equalTo(2 * (int) MockInventoryBuilder.PEER_WEIGHT));

        // D-E is a relative relationship
        assertThat(engine.getSpatialDistanceBetween(getVertexIdForComponentId("d"), getVertexIdForComponentId("e")),
                equalTo((int) MockInventoryBuilder.RELATIVE_WEIGHT));
    }

    private int getVertexIdForComponentId(String componentId) {
        Optional<CEVertex> vertex = engine.getGraph().getVertices().stream()
                .filter(vert -> vert.getResourceKey().getTokens().contains(componentId))
                .findFirst();

        if (vertex.isPresent()) {
            return Integer.parseInt(vertex.get().getId());
        }

        throw new RuntimeException("Vertex could not be found for component id: " + componentId);
    }

    @Override
    public void onSituation(Situation situation) {
        situationsById.put(situation.getId(), situation);
    }
}
