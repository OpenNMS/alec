/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.deeplearning;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.driver.test.MockInventoryBuilder;
import org.opennms.alec.driver.test.MockInventoryType;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.GraphManager;
import org.opennms.alec.engine.cluster.SpatialDistanceCalculator;
import org.opennms.alec.engine.deeplearning.utils.DeepLearningEngineConf;
import org.opennms.alec.engine.deeplearning.utils.Vectorizer;

public class TFClustererTest {

    // Define our own network instead of using the MockInventory.SAMPLE_NETWORK
    // since we want to have disconnected graphs i.e. no links between n1 and n2
    private static final List<InventoryObject> network = new MockInventoryBuilder()
            // N1
            .withInventoryObject(MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.CARD, "n1-c1", MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.CARD, "n1-c2", MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1", MockInventoryType.CARD, "n1-c1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c1-p2", MockInventoryType.CARD, "n1-c1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c2-p1", MockInventoryType.CARD, "n1-c2")
            .withInventoryObject(MockInventoryType.PORT, "n1-c2-p2", MockInventoryType.CARD, "n1-c2")
            // N2
            .withInventoryObject(MockInventoryType.DEVICE, "n2")
            .withInventoryObject(MockInventoryType.CARD, "n2-c1", MockInventoryType.DEVICE, "n2")
            .withInventoryObject(MockInventoryType.PORT, "n2-c1-p1", MockInventoryType.CARD, "n2-c1")
            .withInventoryObject(MockInventoryType.PORT, "n2-c1-p2", MockInventoryType.CARD, "n2-c1")
            .getInventory();


    @Test
    public void canCluster() {
        // Build a graph from the inventory
        GraphManager graphManager = new GraphManager();
        graphManager.addInventory(network);

        // Build our clusterer
        TFModel tfModel = mock(TFModel.class);
        when(tfModel.isRelated(any())).thenReturn(true);
        SpatialDistanceCalculator spatialDistanceCalculator = mock(SpatialDistanceCalculator.class);
        Vectorizer vectorizer = new Vectorizer(graphManager, spatialDistanceCalculator);
        TFClusterer tfClusterer = new TFClusterer(tfModel, vectorizer, new DeepLearningEngineConf());
        tfClusterer.init();

        // There are no alarms to cluster, so we should get 0 clusters
        List<Cluster<AlarmInSpaceTime>> clusters = graphManager.withGraph(tfClusterer::cluster);
        assertThat(clusters, hasSize(0));

        // Add 2 alarms on the same vertex, at the same time
        ImmutableAlarm.Builder alarmBuilder = ImmutableAlarm.newBuilder()
                .setInventoryObjectId("n1-c1-p1")
                .setInventoryObjectType(MockInventoryType.PORT.getType())
                .setTime(0);
        Alarm a1 = alarmBuilder.setId("a1").build();
        Alarm a2 = alarmBuilder.setId("a2").build();
        graphManager.addOrUpdateAlarms(Arrays.asList(a1, a2));

        // We expect these to be clustered together
        clusters = graphManager.withGraph(tfClusterer::cluster);
        assertThat(clusters, hasSize(1));
        assertThat(clusters.get(0).getPoints(), hasSize(2));
    }

    @Test(timeout = 180000)
    public void canPerformanceTestClusterer() {
        // Build a graph from the inventory
        GraphManager graphManager = new GraphManager();
        graphManager.addInventory(network);

        // Build our clusterer
        TFModel tfModel = new TFModel();
        SpatialDistanceCalculator spatialDistanceCalculator = (vertexIdA, vertexIdB) -> 0;
        Vectorizer vectorizer = new Vectorizer(graphManager, spatialDistanceCalculator);
        TFClusterer tfClusterer = new TFClusterer(tfModel, vectorizer, new DeepLearningEngineConf());
        tfClusterer.init();

        // There are no alarms to cluster, so we should get 0 clusters
        List<Cluster<AlarmInSpaceTime>> clusters = graphManager.withGraph(tfClusterer::cluster);
        assertThat(clusters, hasSize(0));

        long start = System.currentTimeMillis();
        int N = 200;
        int K = 2;
        for (int k = 1; k <= K; k++) {
            for (int i = 0; i < N; i++) {
                Alarm alarm = ImmutableAlarm.newBuilder()
                        .setInventoryObjectId("n" + k + "-c1-p1")
                        .setInventoryObjectType(MockInventoryType.PORT.getType())
                        .setTime(0)
                        .setId("a-n" + k + "-" + i)
                        .build();
                graphManager.addOrUpdateAlarm(alarm);
            }
        }

        clusters = graphManager.withGraph(tfClusterer::cluster);
        long deltaMs = System.currentTimeMillis() - start;
        System.out.printf("took %.2f seconds for %d alarms.\n", deltaMs / 1000d, K * N);

        // We expect these to be clustered together
        assertThat(clusters, hasSize(K));
        for (int k = 0; k < K; k++) {
            assertThat(clusters.get(k).getPoints(), hasSize(N));
        }
    }

}
