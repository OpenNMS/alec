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
package org.opennms.oce.model.shell;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.not;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.OperationalState;
import org.opennms.oce.model.impl.ModelBuilderImpl;

public class GraphTest {

    ModelBuilder modelBuilder = new ModelBuilderImpl();
    Model model;

    @Before
    public void buildModel() {
        model = modelBuilder.buildModel();
        // another to NSA
        model.getObjectById("n1-c1-p2").setOperationalState(OperationalState.NSA);
        // Set one port to SA
        model.getObjectById("n1-c2-p1").setOperationalState(OperationalState.SA);
    }

    @Test
    public void canGenerateGraph() {
        GenerateGraph generator = new GenerateGraph(model);
        String dotGraph = generator.generateGraph();

        // Verify some known relationships
        assertThat(dotGraph, containsString("\"Test Model\" -- \"n1(Device)\";"));
        assertThat(dotGraph, containsString("\"n1(Device)\" -- \"n1-c2(Card)\";"));

        // Verify the impacts
        assertThat(dotGraph, containsString("\"n1-c1-p2(Port)\"[color=orange1];"));
        assertThat(dotGraph, containsString("\"n1-c2-p1(Port)\"[color=red];"));

        // Verify color one of the dependent links
        assertThat(dotGraph, containsString("\"n1-c1-p1___n1-c2-p1(Link)\" -- \"n1-c2-p1(Port)\"[color=\"blue\"];"));
    }

    @Test
    public void szlDepth3Test() {
        GenerateGraph generator = new GenerateGraph(model);
        generator.setObjectId("n1-c1-p1___n1-c2-p1");
        generator.setZoomLevel("3");

        String dotGraph = generator.generateGraph();

        // Model should never print
        assertThat(dotGraph, not(containsString("Test Model")));

        // Device shoudl be in the graph
        assertThat(dotGraph, containsString("Device"));
        // There should be 11 edges
        assertThat(Arrays.stream(dotGraph.split("\n")).filter(s -> s.contains(" -- ")).count(), equalTo(9L));

        System.out.println(dotGraph);
    }

    @Test
    public void szlDepth2Test() {
        GenerateGraph generator = new GenerateGraph(model);
        generator.setObjectId("n1-c1-p1___n1-c2-p1");
        generator.setZoomLevel("2");

        String dotGraph = generator.generateGraph();

        // Model should never print
        assertThat(dotGraph, not(containsString("Test Model")));
        // 'Device' should be too many (3) nodes away from the Link
        assertThat(dotGraph, not(containsString("Device")));
        // There should be 5 edges
        assertThat(Arrays.stream(dotGraph.split("\n")).filter(s -> s.contains(" -- ")).count(), equalTo(6L));

        System.out.println(dotGraph);
    }
}
