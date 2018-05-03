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
import java.util.Set;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.ModelObject;

@Command(scope = "oce", name = "generateGraph", description="Generate DOT file of inventory graph.")
@Service
public class GenerateGraph implements Action {
	
    @Reference
    private ModelBuilder builder;
    
    @Option(name="-o", description="Output file")
    private String outFile;

    public GenerateGraph() {
	}

	public GenerateGraph(ModelBuilder builder) {
		this.builder = builder;
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
        sb.append("\r\t");
        ModelObject root = builder.buildModel().getRoot();
        walkModel(root, root.getChildren(), sb);
        sb.append("\n}\n");
        return sb.toString();
    }
    
    private void walkModel(ModelObject parent, Set<ModelObject> children, StringBuilder sb) {
        for (ModelObject child : children) {
            sb.append("\n\t");
            sb.append(parent.getFriendlyName()).append(" -- ").append(child.getFriendlyName()).append(";");
            walkModel(child, child.getChildren(), sb);
        }
    }
}

