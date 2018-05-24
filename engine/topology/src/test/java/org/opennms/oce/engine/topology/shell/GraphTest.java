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

package org.opennms.oce.engine.topology.shell;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.not;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.opennms.oce.driver.test.MockInventory;
import org.opennms.oce.engine.topology.model.ModelBuilderImpl;
import org.opennms.oce.engine.topology.model.Model;
import org.opennms.oce.engine.topology.model.OperationalState;

public class GraphTest {

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    private Model model;

    @Before
    public void setUp() {
        model = ModelBuilderImpl.buildModel(MockInventory.SAMPLE_NETWORK);
        // another to NSA
        model.getObjectById("Port","n1-c1-p2").setOperationalState(OperationalState.NSA);
        // Set one port to SA
        model.getObjectById("Port","n1-c2-p1").setOperationalState(OperationalState.SA);
    }

    @Test
    public void canGenerateGraph() {
        GenerateGraph generator = new GenerateGraph();
        String dotGraph = generator.generateGraph(model);

        // Verify some known relationships
        assertThat(dotGraph, containsString("\"model(Model)\" -- \"n1(Device)\";"));
        assertThat(dotGraph, containsString("\"n1(Device)\" -- \"n1-c2(Card)\";"));

        // Verify the impacts
        assertThat(dotGraph, containsString("\"n1-c1-p2(Port)\"[color=orange1];"));
        assertThat(dotGraph, containsString("\"n1-c2-p1(Port)\"[color=red];"));

        // Verify color one of the dependent links
        assertThat(dotGraph, containsString("\"n1-c1-p1___n2-c1-p1(Link)\" -- \"n2-c1-p1(Port)\"[color=\"blue\"];"));
    }

    @Test
    public void szlDepth3Test() {
        GenerateGraph generator = new GenerateGraph();
        generator.setObjectType("Link");
        generator.setObjectId("n1-c1-p1___n2-c1-p1");
        generator.setZoomLevel("3");

        String dotGraph = generator.generateGraph(model);
        System.out.println("depth3");
        System.out.println(dotGraph);

        // Model should never print
        assertThat(dotGraph, not(containsString("Test Model")));

        // Device should be in the graph
        assertThat(dotGraph, containsString("Device"));
        // There should be 10 edges
        assertThat(Arrays.stream(dotGraph.split("\n")).filter(s -> s.contains(" -- ")).count(), equalTo(11L));
    }

    @Test
    public void szlDepth2Test() {
        GenerateGraph generator = new GenerateGraph();
        generator.setObjectType("Link");
        generator.setObjectId("n1-c1-p1___n2-c1-p1");
        generator.setZoomLevel("1");

        String dotGraph = generator.generateGraph(model);
        System.out.println("depth2");
        System.out.println(dotGraph);

        // Model should never print
        assertThat(dotGraph, not(containsString("Test Model")));
        // 'Device' should be too many (3) nodes away from the Link
        assertThat(dotGraph, not(containsString("Device")));
        // There should be 5 edges
        //assertThat(Arrays.stream(dotGraph.split("\n")).filter(s -> s.contains(" -- ")).count(), equalTo(6L));
    }
}
