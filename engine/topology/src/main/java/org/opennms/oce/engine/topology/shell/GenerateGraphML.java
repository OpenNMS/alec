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

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import org.apache.commons.text.StringEscapeUtils;
import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.engine.topology.model.ModelBuilderImpl;
import org.opennms.oce.engine.topology.model.Model;
import org.opennms.oce.engine.topology.model.ModelObject;
import org.opennms.oce.engine.topology.model.graph.EdgeType;
import org.opennms.oce.engine.topology.model.graph.ModelVisitor;
import org.opennms.oce.engine.topology.model.graph.ModelWalker;

@Command(scope = "topology", name = "generate-graphml", description = "Generate a GraphML document")
@Service
public class GenerateGraphML implements Action {

    @Reference
    private InventoryDatasource inventoryDatasource;

    private Map<String, ModelObject> graphNodes = new LinkedHashMap<>();
    private Set<Edge> graphEdges = new LinkedHashSet<>();

    @Override
    public Object execute() throws IOException {
        final Model model = ModelBuilderImpl.buildModel(inventoryDatasource.getInventory());
        final StringBuilder sb = new StringBuilder();
        sb.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<graphml xmlns=\"http://graphml.graphdrawing.org/xmlns\"\n" +
                "      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n" +
                "      xsi:schemaLocation=\"http://graphml.graphdrawing.org/xmlns\n" +
                "        http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd\">\n");

        sb.append("<key id=\"label\" for=\"all\" attr.name=\"label\" attr.type=\"string\"></key>\n");
        sb.append("<key id=\"namespace\" for=\"graph\" attr.name=\"namespace\" attr.type=\"string\"></key>\n");
        sb.append("<graph id=\"G\" edgedefault=\"directed\">\n");
        sb.append("\t<data key=\"namespace\">minimalistic</data> \n");

        ModelWalker.visit(model, new ModelVisitor() {
            @Override
            public void visitNode(ModelObject node) {
                graphNodes.put(toKey(node), node);
            }

            @Override
            public void visitEdge(ModelObject nodeA, ModelObject nodeZ, EdgeType type) {
                graphNodes.put(toKey(nodeA), nodeA);
                graphNodes.put(toKey(nodeZ), nodeZ);
                Edge edge = new Edge();
                edge.nodeA = nodeA;
                edge.nodeZ = nodeZ;
                edge.type = type;
                graphEdges.add(edge);
            }
        });

        for (ModelObject node : graphNodes.values()) {
            if (isRoot(node)) {
                continue;
            }
            sb.append(String.format("<node id=\"%s\"/>", toKey(node)));
        }
        for (Edge edge : graphEdges) {
            if (isRoot(edge.nodeA) || isRoot(edge.nodeZ)) {
                continue;
            }
            String keyA = toKey(edge.nodeA);
            String keyZ = toKey(edge.nodeZ);
            sb.append(String.format("<edge id=\"%s\" source=\"%s\" target=\"%s\"/>", keyA + "-" + keyZ, keyA, keyZ));
        }

        sb.append("</graph>\n" +
                "</graphml>");
        System.out.println(sb.toString());
        Files.write(Paths.get("/tmp", "oce.graphml.xml"), sb.toString().getBytes());
        return null;
    }

    public String toKey(ModelObject mo) {
        return StringEscapeUtils.escapeXml11(String.format("%s-%s", mo.getType(), mo.getId()));
    }

    private static class Edge {
        private ModelObject nodeA;
        private ModelObject nodeZ;
        private EdgeType type;
    }

    public boolean isRoot(ModelObject mo) {
        return mo.getParent() == null || mo.getParent().equals(mo);
    }

}
