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

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.shell.graph.EdgeType;
import org.opennms.oce.model.shell.graph.ModelVisitor;
import org.opennms.oce.model.shell.graph.ModelWalker;

@Command(scope = "oce", name = "generateGraph", description = "Generate DOT file of inventory graph.")
@Service
public class GenerateGraph implements Action, ModelVisitor {

    private static final String START_GRAPH = "graph {";
    private static final String END_GRAPH = "\n}\n";

    @Reference
    private Model model;

    // Used to collect dotGraph encoded nodes for rendering
    private Map<String, String> graphNodes = new HashMap<>();

    private Map<Integer, String> rankedNodes = new HashMap<>();

    // Used to collect dotGraph encoded edges for rendering
    private Set<String> graphEdges = new HashSet<>();

    // Used to collect nodes during partial traversal
    private Set<ModelObject> collected = new HashSet<>();

    @Option(name = "-o", description = "Output file")
    private String outFile;

    @Option(name = "-i", aliases = "--id", description = "Object Id")
    private String objectId;

    @Option(name = "-z", aliases = "--zoom", description = "Zoom Level")
    private String zoomLevel;

    // Converted ZoomLevel
    Integer zoom;

    public GenerateGraph() {
    }

    public GenerateGraph(Model model) {
        this.model = model;
    }

    @Override
    public Object execute() throws Exception {
        String outputFile = outFile != null ? outFile : "inventory.dot";
        String graph = generateGraph();
        Files.write(Paths.get(outputFile), graph.getBytes());
        System.out.println("Wrote inventory graph to " + outputFile);
        System.out.println("Convert this to a graph at https://graphs.grevian.org/graph");
        return graph;
    }

    public String generateGraph() {
        validateSzl();
        if (objectId == null || objectId.isEmpty()) {
            ModelWalker.visit(model, this);
        } else {
            int szl = zoom > 0 ? zoom : 1; // Default to a depth of 1
            ModelWalker.visitNeighbors(model.getObjectById(objectId), szl, this);
        }
        return buildGraph();
    }

    private String buildGraph() {
        StringBuilder sb = new StringBuilder(START_GRAPH);
        sb.append(graphEdges.stream().collect(Collectors.joining("\n")));
        sb.append("\n");
        sb.append(graphNodes.values().stream().collect(Collectors.joining("\n")));
        sb.append(END_GRAPH);
        return sb.toString();
    }

    // Setter for unit tests
    void setObjectId(String id) {
        objectId = id;
    }

    // Setter for unit tests
    void setZoomLevel(String zoom) {
        zoomLevel = zoom;
    }

    // An edge looks like "CARD_01 -- PORT_01;"
    private String getEdge(ModelObject parent, ModelObject child) {
        return "  " + getDisplayName(parent) + " -- " + getDisplayName(child) + ";";
    }

    // A PEER edge is colored BLUE
    private String getPeerEdge(ModelObject object, ModelObject peer) {
        return "  " + getDisplayName(object) + " -- " + getDisplayName(peer) + "[color=\"blue\"];";
    }

    // A UNCLE/DEPENDANT edge is colored ORANGE
    private String getDependentEdge(ModelObject object, ModelObject peer) {
        return "  " + getDisplayName(object) + " -- " + getDisplayName(peer) + "[color=\"orange\"];";
    }

    // A node definition looks like "CARD_02[color=green];"
    private String getNode(ModelObject object) {
        String color = "white";
        switch (object.getOperationalState()) {
        case NORMAL:
            color = "green";
            break;
        case NSA:
            color = "orange1";
            break;
        case SA:
            color = "red";
            break;
        case UNKNOWN:
        default:
            color = "pink";
            break;
        }
        return "  " + getDisplayName(object) + "[color=" + color + "];";
    }

    private String getDisplayName(ModelObject mo) {
        String effectiveName;
        if (mo.getFriendlyName() != null) {
            effectiveName = mo.getFriendlyName();
        } else {
            effectiveName = String.format("%s(%s)", mo.getId(), mo.getType());
        }

        // Remove any existing double quotes
        effectiveName = effectiveName.replaceAll("\"", "");

        // Wrap the string in quotes
        effectiveName = "\"" + effectiveName + "\"";

        // We're safe now
        return effectiveName;
    }

    private void validateSzl() {
        if (zoomLevel == null || zoomLevel.isEmpty()) {
            return; // zoom is 0
        }
        try {
            zoom = Integer.valueOf(zoomLevel);
        } catch (NumberFormatException e) {
            System.out.println("Invalid Zoom Level: " + zoomLevel + " - it must be an integer value");
            throw (e);
        }
    }

    @Override
    public void visitNode(ModelObject node) {
        graphNodes.put(getDisplayName(node), getNode(node));
    }

    @Override
    public void visitEdge(ModelObject nodeA, ModelObject nodeZ, EdgeType type) {
        graphNodes.put(getDisplayName(nodeA), getNode(nodeA));
        graphNodes.put(getDisplayName(nodeZ), getNode(nodeZ));
        switch(type) {
            case PARENT:
                graphEdges.add(getEdge(nodeZ, nodeA));
                break;
            case UNCLE:
                graphEdges.add(getDependentEdge(nodeZ, nodeA));
                break;
            case PEER:
                graphEdges.add(getPeerEdge(nodeZ, nodeA));
                break;
        }
    }
}
