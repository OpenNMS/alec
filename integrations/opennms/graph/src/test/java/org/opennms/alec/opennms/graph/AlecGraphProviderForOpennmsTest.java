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

package org.opennms.alec.opennms.graph;

import static org.junit.Assert.assertEquals;

import java.util.function.BiConsumer;
import java.util.function.Function;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.features.graph.api.GraphProvider;
import org.opennms.alec.features.graph.common.GraphProviderLocator;
import org.opennms.integration.api.v1.graph.Graph;
import org.opennms.integration.api.v1.graph.GraphContainer;
import org.opennms.integration.api.v1.graph.Vertex;

public class AlecGraphProviderForOpennmsTest {

    private AlecGraphContainerProviderForOpennms opennmsGraphProvider;

    @Before
    public void setUp() {
        final MockGraphProvider mockGraphProvider = new MockGraphProvider();
        final GraphProviderLocator graphProviderLocator = new GraphProviderLocator() {
            @Override
            public boolean withGraphProviders(BiConsumer<String, GraphProvider> consumer) {
                consumer.accept("mock", mockGraphProvider);
                return true;
            }

            @Override
            public <V> V withGraphProvider(String graphProviderName, Function<GraphProvider, V> function) {
                return function.apply(mockGraphProvider);
            }
        };
        opennmsGraphProvider = new AlecGraphContainerProviderForOpennms(graphProviderLocator, () -> {});
    }

    @Test
    public void canRetrieveGraphAsOpennmsAlecGraph() throws Exception {
        final GraphContainer container = opennmsGraphProvider.loadGraphContainer();
        assertEquals(2, container.getGraphs().size());
        Graph graph = container.getGraph("alec");
        assertEquals ("ALEC", graph.getLabel());
        assertEquals(4, graph.getVertices().size());
        assertEquals(1, graph.getVertices().stream().map(Vertex::getId).filter("situation-s1"::equals).count());
        assertEquals(1, graph.getVertices().stream().map(Vertex::getId).filter("alarm-0-a1"::equals).count());
        assertEquals(1, graph.getVertices().stream().map(Vertex::getId).filter("vertex-0"::equals).count());
    }

}
