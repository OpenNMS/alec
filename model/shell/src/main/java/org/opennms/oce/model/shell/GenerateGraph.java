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

@Command(scope = "oce", name = "generateGraph", description="Generate DOT file of inventory graph.")
@Service
public class GenerateGraph implements Action {
	
    @Reference
    private Model model;
    
    private Map<String, String> nodes = new HashMap<>();

    @Option(name="-o", description="Output file")
    private String outFile;

    public GenerateGraph() {
	}

    public GenerateGraph(Model model) {
        this.model = model;
    }

    @Override
    public Object execute() throws Exception {
        String outputFile = outFile != null ? outFile : "inventory.dot";
        String graph = generateGraph();
        Files.write(Paths.get(outputFile ), graph.getBytes());
        System.out.println("Wrote inventory graph to " + outputFile);
        System.out.println("Convert this to a graph at https://graphs.grevian.org/graph");
        return graph;
    }
    
    public String generateGraph() {
        StringBuilder sb = new StringBuilder("graph {");
        ModelObject root = model.getRoot();
        walkChildren(root, root.getChildren(), sb);
        sb.append("\n");
        sb.append(nodes.values().stream().collect(Collectors.joining("\n")));
        sb.append("\n}\n");
        return sb.toString();
    }
    
    private void walkChildren(ModelObject parent, Set<ModelObject> children, StringBuilder sb) {
        for (ModelObject child : children) {
            // Collect Each node description - uniquely via the map
            nodes.put(getDisplayName(parent), getNode(parent));
            nodes.put(getDisplayName(child), getNode(child));
            // Add an edge for each relationship
            sb.append(getEdge(parent, child));
            // Add Dependency and Peer relations
            sb.append(getNonChildRelations(child));
            // recurse through each child.
            walkChildren(child, child.getChildren(), sb);
        }
    }

    private String getNonChildRelations(ModelObject object) {
        //
        StringBuilder sb = new StringBuilder();
        for (ModelObject peer : object.getPeers()) {
            nodes.put(getDisplayName(peer), getNode(peer));
            sb.append(getPeerEdge(object, peer));
        }
        for (ModelObject peer : object.getUncles()) {
            nodes.put(getDisplayName(peer), getNode(peer));
            sb.append(getDependentEdge(object, peer));
        }
        return sb.toString();
    }

    // An edge looks like "CARD_01 -- PORT_01;"
    private String getEdge(ModelObject parent, ModelObject child) {
        return "\n  " + getDisplayName(parent) + " -- " + getDisplayName(child) + ";";
    }

    // A PEER edge is colored BLUE
    private String getPeerEdge(ModelObject object, ModelObject peer) {
        return "\n  " + getDisplayName(object) + " -- " + getDisplayName(peer) + "[color=\"blue\"];";
    }

    // A UNCLE/DEPENDANT edge is colored ORANGE
    private String getDependentEdge(ModelObject object, ModelObject peer) {
        return "\n  " + getDisplayName(object) + " -- " + getDisplayName(peer) + "[color=\"orange\"];";
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
            // Y'atta notice this....
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
}

