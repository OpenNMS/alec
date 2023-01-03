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

import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.assertThat;

import java.util.concurrent.atomic.AtomicBoolean;

import org.junit.Test;
import org.opennms.alec.driver.test.MockInventory;
import org.opennms.alec.driver.test.MockInventoryType;

import edu.uci.ics.jung.graph.Graph;

public class FilterableGraphManagerTest {
    private final FilterableGraphManager graphManager = FilterableGraphManager.withFilter((v, g) -> {
        AtomicBoolean shouldDrop = new AtomicBoolean(false);
        v.getInventoryObject().ifPresent(io -> shouldDrop.set(io.getType().equals(MockInventoryType.PORT.getType())));
        return shouldDrop.get();
    });

    @Test
    public void canFilterVertices() {
        addAndFilter();
        // We dropped all the port objects so we can make sure the counts reflect that
        int totalVertices = graphManager.getGraph().getVertexCount();
        long portVertices = graphManager.getGraph()
                .getVertices()
                .stream()
                .filter(v -> v.getInventoryObject().isPresent())
                .filter(v -> v.getInventoryObject()
                        .get()
                        .getType()
                        .equals(MockInventoryType.PORT.getType()))
                .count();
        Graph<CEVertex, CEEdge> filteredGraph = graphManager.getFilteredGraph();
        assertThat((long) filteredGraph.getVertexCount(), equalTo(totalVertices - portVertices));
    }

    @Test
    public void canSelectVertices() {
        addAndFilter();
        long cardVertexCount = graphManager.getGraph()
                .getVertices()
                .stream()
                .filter(v -> v.getInventoryObject().isPresent())
                .filter(v -> v.getInventoryObject().get().getType().equals(MockInventoryType.CARD.getType()))
                .count();
        long cardVertexCountAfterSelection =
                graphManager.getFilteredMatchingVertices(v -> v.getInventoryObject().isPresent() &&
                        v.getInventoryObject()
                                .get()
                                .getType()
                                .equals(MockInventoryType.CARD.getType()))
                        .size();
        assertThat(cardVertexCount, equalTo(cardVertexCountAfterSelection));
    }

    private void addAndFilter() {
        graphManager.addInventory(MockInventory.getSampleNetwork());
        graphManager.updateAndFilter();
    }
}
