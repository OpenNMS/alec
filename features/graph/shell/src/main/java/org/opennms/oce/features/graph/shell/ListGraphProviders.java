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

package org.opennms.oce.features.graph.shell;


import java.util.concurrent.atomic.AtomicInteger;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.features.graph.common.GraphProviderLocator;
import org.opennms.oce.features.graph.common.OsgiGraphProviderLocator;
import org.osgi.framework.BundleContext;

@Command(scope = "oce", name = "list-graphs", description = "List the available graph providers.")
@Service
public class ListGraphProviders  implements Action {

    @Reference
    private BundleContext bundleContext;

    @Override
    public Object execute() {
        final GraphProviderLocator graphProviderLocator = new OsgiGraphProviderLocator(bundleContext);
        boolean didFindGraphProvider = graphProviderLocator.withGraphProviders((name,graphProvider) -> {
            final AtomicInteger numVertices = new AtomicInteger();
            final AtomicInteger numEdges = new AtomicInteger();
            final AtomicInteger numSituations = new AtomicInteger();
            graphProvider.withReadOnlyGraph(g -> {
                numVertices.set(g.getGraph().getVertexCount());
                numEdges.set(g.getGraph().getEdgeCount());
                numSituations.set(g.getSituations().size());
            });
            System.out.printf("%s: %d situations on %d vertices and %d edges.\n", name,
                    numSituations.get(), numVertices.get(), numEdges.get());
        });

        if (!didFindGraphProvider) {
            System.out.println("(No graph providers found)");
        }
        return null;
    }

}
