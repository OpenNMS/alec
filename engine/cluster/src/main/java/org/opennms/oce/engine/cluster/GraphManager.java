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

package org.opennms.oce.engine.cluster;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.features.graph.api.ManagedGraph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * This class serves as the primary point of contact for the {@link ClusterEngine} for processing changes that could
 * affect a graph. This class receives the calls specified in {@link ManagedGraph} and proxies them to all of the graph
 * implementations resulting in the graph(s) being kept up to date and consistent.
 * <p>
 * All {@link ManagedGraph} calls handled by this class are synchronized and the processing happens in a single thread.
 * Therefore these methods will block until all graph implementations have handled the call.
 */
public class GraphManager implements ManagedGraph {
    private static final Logger LOG = LoggerFactory.getLogger(GraphManager.class);

    /**
     * The graph instances managed by this graph manager. Updated via runtime binding.
     */
    private final Set<ManagedGraph> graphs = new HashSet<>();

    private GraphManager(Set<ManagedGraph> defaultGraphs) {
        defaultGraphs.forEach(this::addGraph);
    }

    public synchronized void onBind(ManagedGraph managedGraph, Map properties) {
        // Ignore binds for ManagedCEGraph since that implementation is manually managed
        if (managedGraph instanceof ManagedCEGraph) {
            LOG.warn("Attempted to bind an instance of ManagedCEGraph");

            return;
        }

        // This GraphManager should never be managing another GraphManager
        if (managedGraph instanceof GraphManager) {
            LOG.warn("Attempted to bind an instance of GraphManager");

            return;
        }

        LOG.debug("bind called with {}: {}", managedGraph, properties);

        if (managedGraph != null) {
            addGraph(managedGraph);
        }
    }

    public synchronized void onUnbind(ManagedGraph managedGraph, Map properties) {
        // Ignore unbinds for ManagedCEGraph since that implementation is manually managed
        if (managedGraph instanceof ManagedCEGraph) {
            return;
        }

        // This GraphManager should never be managing another GraphManager
        if (managedGraph instanceof GraphManager) {
            LOG.warn("Attempted to unbind an instance of GraphManager");

            return;
        }

        LOG.debug("Unbind called with {}: {}", managedGraph, properties);

        if (managedGraph != null) {
            removeGraph(managedGraph);
        }
    }

    public static GraphManager newGraphManager() {
        return new GraphManager(Collections.emptySet());
    }
    
    public static GraphManager newGraphManagerWithGraphs(Set<ManagedGraph> defaultGraphs) {
        return new GraphManager(defaultGraphs);
    }

    @Override
    public synchronized void addInventory(Collection<InventoryObject> inventory) {
        graphs.forEach(graph -> {
            LOG.debug("Proxying addInventory call to graph {}", graph);

            try {
                graph.addInventory(inventory);
            } catch (Exception e) {
                LOG.warn("addInventory call to graph {} caused an exception", graph, e);
            }
        });
    }

    @Override
    public synchronized void removeInventory(Collection<InventoryObject> inventory) {
        graphs.forEach(graph -> {
            LOG.debug("Proxying removeInventory call to graph {}", graph);

            try {
                graph.removeInventory(inventory);
            } catch (Exception e) {
                LOG.warn("removeInventory call to graph {} caused an exception", graph, e);
            }
        });
    }

    @Override
    public synchronized void addOrUpdateAlarm(Alarm alarm) {
        graphs.forEach(graph -> {
            LOG.debug("Proxying addOrUpdateAlarm call to graph {}", graph);

            try {
                graph.addOrUpdateAlarm(alarm);
            } catch (Exception e) {
                LOG.warn("addOrUpdateAlarm call to graph {} caused an exception", graph, e);
            }
        });
    }

    @Override
    public synchronized void addOrUpdateAlarms(List<Alarm> alarms) {
        graphs.forEach(graph -> {
            LOG.debug("Proxying addOrUpdateAlarms call to graph {}", graph);

            try {
                graph.addOrUpdateAlarms(alarms);
            } catch (Exception e) {
                LOG.warn("addOrUpdateAlarms call to graph {} caused an exception", graph, e);
            }
        });
    }

    @Override
    public synchronized void garbageCollectAlarms(long currentTimeMs, long problemTimeoutMs, long clearTimeoutMs) {
        graphs.forEach(graph -> {
            LOG.debug("Proxying garbageCollectAlarms call to graph {}", graph);

            try {
                graph.garbageCollectAlarms(currentTimeMs, problemTimeoutMs, clearTimeoutMs);
            } catch (Exception e) {
                LOG.warn("garbageCollectAlarms call to graph {} caused an exception", graph, e);
            }
        });
    }

    @Override
    public void close() {
        graphs.forEach(graph -> {
            LOG.debug("Proxying close call to graph {}", graph);

            try {
                graph.close();
            } catch (Exception e) {
                LOG.warn("close call to graph {} caused an exception", graph, e);
            }
        });
    }

    synchronized void addGraph(ManagedGraph managedGraph) {
        graphs.add(managedGraph);
    }

    synchronized void removeGraph(ManagedGraph managedGraph) {
        graphs.remove(managedGraph);
    }
}
