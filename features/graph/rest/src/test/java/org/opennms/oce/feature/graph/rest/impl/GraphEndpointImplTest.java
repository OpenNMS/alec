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

package org.opennms.oce.feature.graph.rest.impl;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.hasSize;

import java.util.function.BiConsumer;
import java.util.function.Function;

import org.graphdrawing.graphml.GraphmlType;
import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.feature.graph.rest.api.GraphEndpoint;
import org.opennms.oce.feature.graph.rest.model.InventoryObjectSummary;
import org.opennms.oce.features.graph.api.GraphProvider;
import org.opennms.oce.features.graph.common.GraphProviderLocator;
import org.opennms.oce.features.graph.graphml.GraphML;
import org.opennms.oce.features.graph.graphml.GraphMLReader;

/**
 * Back a provider with a sample graph and verify that we can:
 *  1) Retrieve the complete graph via both JSON and GraphML
 *  2) Retrieve the list of situations, alarms, IO type, and IOs by type on the graph
 *  3) Given an inventory object (i.e. node), we should be able to render the k-neighborhood of the graph
 */
public class GraphEndpointImplTest {

    private GraphEndpoint graphEndpoint;

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
        graphEndpoint = new GraphEndpointImpl(graphProviderLocator);
    }

    @Test
    public void canRetrieveAvailableGraphs() throws Exception {
        assertThat(graphEndpoint.getAvailableGraphs(), hasSize(1));
    }

    @Test
    public void canRetrieveGraphAsGraphDTO() throws Exception {
        assertThat(graphEndpoint.getGraph("mock"), hasSize(1));
    }

    @Test
    public void canRetrieveGraphAsGraphML() throws Exception {
        final GraphmlType graphmlType = graphEndpoint.getGraphAsGraphML("mock");
        final GraphML graphML = GraphMLReader.convert(graphmlType);
        assertThat(graphML.getGraphs(), hasSize(1));
    }

    @Test
    public void canRetrieveSituationsOnGraph() throws Exception {
        assertThat(graphEndpoint.getSituationsOnGraph("mock"), hasSize(1));
    }

    @Test
    public void canRetrieveInventoryObjectsWithTypeOnGraph() throws Exception {
        assertThat(graphEndpoint.getInventoryObjectsWithTypeOnGraph("mock", "c1"), hasSize(1));
    }

    @Test
    public void canRetrieveInventoryTypesOnGraph() throws Exception {
        assertThat(graphEndpoint.getInventoryObjectTypesOnGraph("mock"), containsInAnyOrder("c1", "c2"));
    }

    @Test
    public void canRetrieveAlarmsOnGraph() throws Exception {
        assertThat(graphEndpoint.getAlarmsOnGraph("mock"), hasSize(1));
    }

    @Test
    public void canGetNeighborhoodOfInventoryObject() throws Exception {
        final InventoryObjectSummary io = graphEndpoint.getInventoryObjectsWithTypeOnGraph("mock", "c1").get(0);
        assertThat(graphEndpoint.getNeighborhoodOfVertex("mock", io.getVertexId(), 0).get(0).getVertices(), hasSize(1));
        assertThat(graphEndpoint.getNeighborhoodOfVertex("mock", io.getVertexId(), 1).get(0).getVertices(), hasSize(2));
        assertThat(graphEndpoint.getNeighborhoodOfVertex("mock", io.getVertexId(), 2).get(0).getVertices(), hasSize(3));
    }
}
