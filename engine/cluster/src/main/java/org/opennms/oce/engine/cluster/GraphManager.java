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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;
import org.opennms.oce.datasource.api.ResourceKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.SparseMultigraph;

public class GraphManager {

    private static final Logger LOG = LoggerFactory.getLogger(GraphManager.class);

    private final AtomicLong vertexIdGenerator = new AtomicLong();

    private final Map<Long, Vertex> idtoVertexMap = new HashMap<>();
    private final Map<ResourceKey, Vertex> resourceKeyVertexMap = new HashMap<>();

    private final Graph<Vertex, Edge> g = new SparseMultigraph<>();

    public synchronized void addInventory(Collection<InventoryObject> inventory) {
        // Start off by adding vertices to the graph for any new object
        for (InventoryObject io : inventory) {
            final ResourceKey resourceKey = getResourceKeyFor(io);
            resourceKeyVertexMap.computeIfAbsent(resourceKey, (key) -> {
                final Vertex vertex = createVertexFor(io);
                g.addVertex(vertex);
                idtoVertexMap.put(vertex.getId(), vertex);
                return vertex;
            });
        }

        // Now handle the relationships
        for (InventoryObject io : inventory) {
            final ResourceKey resourceKey = getResourceKeyFor(io);
            final Vertex vertex = resourceKeyVertexMap.get(resourceKey);

            // Parent relationships
            final ResourceKey parentResourceKey = getResourceKeyForParent(io);
            if (parentResourceKey != null) {
                final Vertex parentVertex = resourceKeyVertexMap.get(parentResourceKey);
                final Edge edge = createEdge();
                g.addEdge(edge, parentVertex, vertex);
            }

            // Peer relationships
            for (InventoryObjectPeerRef peerRef : io.getPeers()) {
                final Vertex peerVertex = resourceKeyVertexMap.get(getResourceKeyForPeer(peerRef));
                final Edge edge = createEdge();
                g.addEdge(edge, peerVertex, vertex);
            }

            // Relative relationships
            for (InventoryObjectRelativeRef relativeRef : io.getRelatives()) {
                final Vertex relativeVertex = resourceKeyVertexMap.get(getResourceKeyForPeer(relativeRef));
                final Edge edge = createEdge();
                g.addEdge(edge, relativeVertex, vertex);
            }
        }
    }

    public synchronized void removeInventory(Collection<InventoryObject> inventory) {
    }

    public synchronized void addOrUpdateAlarms(List<Alarm> alarms) {
        for (Alarm alarm : alarms) {
            addOrUpdateAlarm(alarm);
        }
    }

    public synchronized void addOrUpdateAlarm(Alarm alarm) {
        final ResourceKey resourceKey = getResourceKeyFor(alarm);
        final Vertex vertex = resourceKeyVertexMap.computeIfAbsent(resourceKey, (key) -> {
            LOG.info("No existing vertex was found with resource key: {}. Creating a new vertex.", resourceKey);
            final Vertex v = new Vertex(vertexIdGenerator.getAndIncrement(), resourceKey);
            g.addVertex(v);
            idtoVertexMap.put(v.getId(), v);
            return v;
        });
        vertex.addOrUpdateAlarm(alarm);
    }

    public synchronized void withGraph(Consumer<Graph<Vertex, Edge>> consumer) {
        consumer.accept(g);
    }

    public synchronized void withVertex(String type, String id, BiConsumer<Graph<Vertex, Edge>, Vertex> consumer) {
        consumer.accept(g, resourceKeyVertexMap.get(ResourceKey.key(type, id)));
    }

    protected Graph<Vertex, Edge> getGraph() {
        return g;
    }

    protected Vertex getVertexWithId(Long id) {
        return idtoVertexMap.get(id);
    }

    private Vertex createVertexFor(InventoryObject io) {
        final ResourceKey resourceKey = getResourceKeyFor(io);
        return new Vertex(vertexIdGenerator.getAndIncrement(), resourceKey);
    }

    private Edge createEdge() {
        return new Edge();
    }

    private static ResourceKey getResourceKeyFor(InventoryObject io) {
        return ResourceKey.key(io.getType(), io.getId());
    }


    private static ResourceKey getResourceKeyFor(Alarm alarm) {
        return ResourceKey.key(alarm.getInventoryObjectType(), alarm.getInventoryObjectId());
    }

    private static ResourceKey getResourceKeyForParent(InventoryObject child) {
        if (child.getParentType() != null && child.getParentId() != null) {
            return ResourceKey.key(child.getParentType(), child.getParentId());
        }
        return null;
    }

    private static ResourceKey getResourceKeyForPeer(InventoryObjectPeerRef peerRef) {
        return ResourceKey.key(peerRef.getType(), peerRef.getId());
    }

    private static ResourceKey getResourceKeyForPeer(InventoryObjectRelativeRef relativeRef) {
        return ResourceKey.key(relativeRef.getType(), relativeRef.getId());
    }

}
