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

package org.opennms.alec.engine.cluster;

import static junit.framework.TestCase.assertNull;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.Arrays;

import org.junit.Test;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.SparseMultigraph;

public class DijkstraSolvableGraphTest {
    @Test
    public void canSolveTrivialGraphCorrectly() {
        Graph<String, String> graph = new SparseMultigraph<>();
        double edgeWeight = 100.0;
        SolvableGraph<String> paths = DijkstraSolvableGraph.newInstance(graph, s -> edgeWeight,
                Runtime.getRuntime().availableProcessors());

        // Create a topology that looks like the following
        // *-*-*-*-*-*-*-*-*-*
        // |       |
        // *-*-*-*-*-*-*-*-*-*
        //
        // *-*-*
        int chainSize = 100000;
        createLinkedVertexChain(0, chainSize, graph);
        createLinkedVertexChain(chainSize, chainSize * 2, graph);
        createLinkedVertexChain(chainSize * 2, chainSize * 2 + 5, graph);

        String connectEdge1 = getEdge(0, chainSize);
        graph.addEdge(connectEdge1, String.valueOf(0), String.valueOf(chainSize));

        String middleEdge = getEdge(chainSize / 2, (chainSize / 2) + chainSize);
        graph.addEdge(middleEdge, String.valueOf(chainSize / 2), String.valueOf((chainSize / 2) + chainSize));

        paths.solve(Arrays.asList(String.valueOf(0), String.valueOf(chainSize)), graph.getVertices());
        assertThat(paths.getDistance(String.valueOf(0), String.valueOf(chainSize)).doubleValue(), equalTo(edgeWeight));
        assertThat(paths.getDistance(String.valueOf(chainSize), String.valueOf(0)).doubleValue(), equalTo(edgeWeight));
        assertThat(paths.getDistance(String.valueOf(0), String.valueOf(chainSize - 1)).doubleValue(),
                equalTo(edgeWeight * (chainSize - 1)));
        assertThat(paths.getDistance(String.valueOf(0), String.valueOf((chainSize * 2) - 1)).doubleValue(),
                equalTo(edgeWeight * chainSize));
        assertNull(paths.getDistance(String.valueOf(0), String.valueOf(chainSize * 2)));
    }

    private void createLinkedVertexChain(int startId, int endId, Graph<String, String> graph) {
        for (int i = startId; i < endId; i++) {
            String vertex = String.valueOf(i);
            graph.addVertex(vertex);
            if (i > startId) {
                String linkedVertex = String.valueOf(i - 1);
                String edge = getEdge(linkedVertex, vertex);
                graph.addEdge(edge, linkedVertex, vertex);
            }
        }
    }


    private String getEdge(int v1, int v2) {
        return getEdge(String.valueOf(v1), String.valueOf(v2));
    }

    private String getEdge(String v1, String v2) {
        return String.format("%s<->%s", v1, v2);
    }
}
