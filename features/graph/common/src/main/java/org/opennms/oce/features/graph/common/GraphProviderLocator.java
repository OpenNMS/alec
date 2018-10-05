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

package org.opennms.oce.features.graph.common;

import java.util.Objects;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.opennms.oce.features.graph.api.GraphProvider;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

public class GraphProviderLocator {

    private final BundleContext bundleContext;

    public GraphProviderLocator(BundleContext bundleContext) {
        this.bundleContext = Objects.requireNonNull(bundleContext);
    }

    public boolean withGraphProviders(BiConsumer<String, GraphProvider> consumer) {
        boolean didFindGraphProvider = false;
        final ServiceReference<?>[] graphProviderRefs;
        try {
            graphProviderRefs = bundleContext.getAllServiceReferences(GraphProvider.class.getCanonicalName(), null);
        } catch (InvalidSyntaxException e) {
            throw new RuntimeException(e);
        }
        if (graphProviderRefs != null) {
            for (ServiceReference<?> graphProviderRef : graphProviderRefs) {
                final String name = (String)graphProviderRef.getProperty("name");
                if (name != null) {
                    final GraphProvider graphProvider = bundleContext.getService((ServiceReference<GraphProvider>)graphProviderRef);
                    try {
                        didFindGraphProvider = true;
                        consumer.accept(name, graphProvider);
                    } finally {
                        bundleContext.ungetService(graphProviderRef);
                    }
                }
            }
        }
        return didFindGraphProvider;
    }

    public <V> V withGraphProvider(String graphProviderName, Function<GraphProvider, V> function) {
        final ServiceReference<?>[] graphProviderRefs;
        try {
            graphProviderRefs = bundleContext.getAllServiceReferences(GraphProvider.class.getCanonicalName(), null);
        } catch (InvalidSyntaxException e) {
            throw new RuntimeException(e);
        }
        if (graphProviderRefs != null) {
            for (ServiceReference<?> graphProviderRef : graphProviderRefs) {
                final String name = (String)graphProviderRef.getProperty("name");
                if (graphProviderName.equalsIgnoreCase(name)) {
                    final GraphProvider graphProvider = bundleContext.getService((ServiceReference<GraphProvider>)graphProviderRef);
                    try {
                        return function.apply(graphProvider);
                    } finally {
                        bundleContext.ungetService(graphProviderRef);
                    }
                }
            }
        }
        return null;
    }
}
