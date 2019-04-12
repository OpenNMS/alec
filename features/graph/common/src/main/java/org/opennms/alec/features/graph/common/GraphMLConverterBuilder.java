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

package org.opennms.alec.features.graph.common;

import java.util.Collections;
import java.util.List;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.features.graph.api.Edge;
import org.opennms.alec.features.graph.api.OceGraph;
import org.opennms.alec.features.graph.api.Vertex;

import edu.uci.ics.jung.graph.Graph;

public class GraphMLConverterBuilder {

    private Graph<Vertex, Edge> graph;
    private List<Situation> situations = Collections.emptyList();
    private boolean filterEmptyNodes = true;
    private boolean includeAlarms = true;

    public GraphMLConverterBuilder withGraph(OceGraph oceGraph) {
        this.graph = (Graph<Vertex, Edge>) oceGraph.getGraph();
        situations = oceGraph.getSituations();
        return this;
    }

    public GraphMLConverterBuilder withGraph(Graph<? extends Vertex, ? extends Edge> graph) {
        this.graph = (Graph<Vertex, Edge>) graph;
        return this;
    }

    public GraphMLConverterBuilder withSituations(List<Situation> situations) {
        this.situations = situations;
        return this;
    }
    
    public GraphMLConverterBuilder withFilterEnptyNodes(boolean value) {
        filterEmptyNodes = value;
        return this;
    }

    public GraphMLConverterBuilder withIncludeAlarms(boolean value) {
        includeAlarms = value;
        return this;
    }

    public GraphMLConverter build() {
        GraphMLConverter converter = new GraphMLConverter(graph, situations);
        converter.setFilterEmptyNodes(filterEmptyNodes);
        converter.setIncludeAlarms(includeAlarms);
        return converter;
    }

}
