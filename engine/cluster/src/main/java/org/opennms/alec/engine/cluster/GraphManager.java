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

package org.opennms.alec.engine.cluster;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.InventoryObjectPeerRef;
import org.opennms.alec.datasource.api.InventoryObjectRelativeRef;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.features.graph.api.Edge;
import org.opennms.alec.features.graph.api.Vertex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import edu.uci.ics.jung.graph.Graph;
import edu.uci.ics.jung.graph.SparseMultigraph;

public class GraphManager {

    private static final Logger LOG = LoggerFactory.getLogger(GraphManager.class);

    private final AtomicLong vertexIdGenerator = new AtomicLong();
    private final AtomicLong edgeIdGenerator = new AtomicLong();

    private final Map<Long, CEVertex> idtoVertexMap = new HashMap<>();
    private final Map<ResourceKey, CEVertex> resourceKeyVertexMap = new HashMap<>();

    private final Graph<CEVertex, CEEdge> g = new SparseMultigraph<>();

    private final AtomicBoolean didGraphChange = new AtomicBoolean();

    private final Set<Long> disconnectedVertices = new HashSet<>();

    private final Map<ResourceKey, Set<InventoryObject>> deferredIosByDependency = new HashMap<>();
    private final Map<InventoryObject, Set<ResourceKey>> dependenciesByDeferredIos = new HashMap<>();

    public synchronized void addInventory(Collection<InventoryObject> inventory) {
        addOrUpdateInventory(inventory);
    }

    private synchronized void addOrUpdateInventory(Collection<InventoryObject> inventory) {
        // Keep track of any vertices we've added
        final List<CEVertex> verticesAdded = new LinkedList<>();
        final List<CEVertex> verticesToVerify = new LinkedList<>();

        // Start off by adding vertices to the graph for any new object
        for (InventoryObject io : inventory) {
            final ResourceKey resourceKey = getResourceKeyFor(io);
            verticesToVerify.add(resourceKeyVertexMap.computeIfAbsent(resourceKey, (key) -> {
                LOG.trace("Adding vertex with resource key: {} for inventory object: {}", resourceKey, io);
                final CEVertex vertex = createVertexFor(io);
                g.addVertex(vertex);
                didGraphChange.set(true);
                idtoVertexMap.put(vertex.getNumericId(), vertex);
                verticesAdded.add(vertex);
                return vertex;
            }));
        }

        // Now handle the relationships
        for (InventoryObject io : inventory) {
            final ResourceKey resourceKey = getResourceKeyFor(io);
            final CEVertex vertex = resourceKeyVertexMap.get(resourceKey);
            boolean didDeferRelation = false;

            // Parent relationships
            final ResourceKey parentResourceKey = getResourceKeyForParent(io);
            if (parentResourceKey != null) {
                final CEVertex parentVertex = resourceKeyVertexMap.get(parentResourceKey);
                if (parentVertex == null) {
                    LOG.info("No existing vertex found for parent with resource key '{}' on vertex with resource key '{}'. Deferring edge association.", parentResourceKey, resourceKey);
                    defer(io, parentResourceKey);
                    didDeferRelation = true;
                } else if (!g.isNeighbor(parentVertex, vertex)) {
                    LOG.trace("Adding edge between child: {} and parent: {}", vertex, parentVertex);
                    final CEEdge edge = CEEdge.newParentEdge(edgeIdGenerator.getAndIncrement(), io.getWeightToParent());
                    g.addEdge(edge, parentVertex, vertex);
                    verticesToVerify.add(parentVertex);
                    didGraphChange.set(true);
                }
            }

            // Peer relationships
            for (InventoryObjectPeerRef peerRef : io.getPeers()) {
                final ResourceKey peerResourceKey = getResourceKeyForPeer(peerRef);
                final CEVertex peerVertex = resourceKeyVertexMap.get(peerResourceKey);
                if (peerVertex == null) {
                    LOG.info("No existing vertex found for peer with resource key '{}' on vertex with resource key '{}'. Deferring edge association.", peerResourceKey, resourceKey);
                    defer(io, peerResourceKey);
                    didDeferRelation = true;
                } else if (!g.isNeighbor(peerVertex, vertex)) {
                    LOG.debug("Adding edge between peers A: {} and Z: {}", peerVertex, vertex);
                    final CEEdge edge = CEEdge.newPeerEdge(edgeIdGenerator.getAndIncrement(), peerRef);
                    g.addEdge(edge, peerVertex, vertex);
                    verticesToVerify.add(peerVertex);
                    didGraphChange.set(true);
                }
            }

            // Relative relationships
            for (InventoryObjectRelativeRef relativeRef : io.getRelatives()) {
                final ResourceKey relativeResourceKey = getResourceKeyForPeer(relativeRef);
                final CEVertex relativeVertex = resourceKeyVertexMap.get(relativeResourceKey);
                if (relativeVertex == null) {
                    LOG.info("No existing vertex found for relative with resource key '{}' on vertex with resource key '{}'. Deferring edge association.", relativeResourceKey, resourceKey);
                    defer(io, relativeResourceKey);
                    didDeferRelation = true;
                } else if (!g.isNeighbor(relativeVertex, vertex)) {
                    LOG.debug("Adding edge between relatives A: {} and Z: {}", relativeVertex, vertex);
                    final CEEdge edge = CEEdge.newRelativeEdge(edgeIdGenerator.getAndIncrement(), relativeRef);
                    g.addEdge(edge, relativeVertex, vertex);
                    verticesToVerify.add(relativeVertex);
                    didGraphChange.set(true);
                }
            }

            if (!didDeferRelation) {
                // We successfully matched all of the relations, clear any outstanding deferrals
                clearDeferralsFor(io);
            }
        }

        // Update any deferred IOs that may be related to the vertices we've added
        handleDeferredIos(verticesAdded);

        // Update the set of disconnected vertices
        trackDisconnectedVertices(verticesToVerify);
    }

    private void defer(InventoryObject io, ResourceKey... waitingFor) {
        // Add the IO to a set of IOs we maintain for each key
        for (ResourceKey resourceKey : waitingFor) {
            deferredIosByDependency.compute(resourceKey, (k,v) -> {
               Set<InventoryObject> iosWaiting = v;
               if (iosWaiting == null) {
                   iosWaiting = new HashSet<>();
               }
               iosWaiting.add(io);
               return iosWaiting;
            });
        }

        // Also maintain the reverse mapping
        dependenciesByDeferredIos.compute(io, (k,v) -> {
            Set<ResourceKey> dependencies = v;
            if (dependencies == null) {
                dependencies = new HashSet<>();
            }
            dependencies.addAll(Arrays.asList(waitingFor));
            return dependencies;
        });
    }

    private void handleDeferredIos(List<CEVertex> newVertices) {
        if (newVertices.isEmpty() || deferredIosByDependency.isEmpty()) {
            // Nothing to do
            return;
        }

        // Are there any IOs waiting on any of the vertices that were added?
        final Set<InventoryObject> iosToUpdate = newVertices.stream()
                .flatMap(v -> deferredIosByDependency.getOrDefault(v.getResourceKey(), Collections.emptySet()).stream())
                .collect(Collectors.toSet());

        if (iosToUpdate.isEmpty()) {
            // Nothing to do
            return;
        }

        addOrUpdateInventory(iosToUpdate);
    }

    private void clearDeferralsFor(InventoryObject io) {
        // All of the deferrals for the given IO have been satisfied or
        // the IO is being deleted
        final Set<ResourceKey> dependencies = dependenciesByDeferredIos.remove(io);
        if (dependencies == null || dependencies.isEmpty()) {
            // Nothing to do
            return;
        }

        for (ResourceKey resourceKey : dependencies) {
            final Set<InventoryObject> deferredIos = deferredIosByDependency.get(resourceKey);
            if (deferredIos == null) {
                continue;
            }

            // Remove the IO from the set
            deferredIos.remove(io);

            // If there are no other IOs waiting on this resource key, then delete it from the map
            if (deferredIos.isEmpty()) {
                deferredIosByDependency.remove(resourceKey);
            }
        }
    }

    public synchronized void removeInventory(Collection<InventoryObject> inventory) {
        for (InventoryObject io : inventory) {
            final ResourceKey resourceKey = getResourceKeyFor(io);
            final CEVertex vertex = resourceKeyVertexMap.remove(resourceKey);
            if (vertex != null) {
                // Find the neighbors
                final Collection<CEVertex> neighbors = g.getNeighbors(vertex);
                // Remove the vertex. When a vertex that is referenced by edges is removed, the referencing edges
                // are also removed automatically
                g.removeVertex(vertex);
                // Maybe add the neighboring vertices to the set of disconnected vertices now
                // that we've removed one
                disconnectedVertices.remove(vertex.getNumericId());
                trackDisconnectedVertices(neighbors);
                didGraphChange.set(true);
            }
            clearDeferralsFor(io);
        }
    }

    private void trackDisconnectedVertices(Collection<CEVertex> verticesToVerify) {
        // Update the set of disconnected vertices
        for (CEVertex v : verticesToVerify) {
            if (g.getNeighborCount(v) == 0) {
                disconnectedVertices.add(v.getNumericId());
            } else {
                disconnectedVertices.remove(v.getNumericId());
            }
        }
    }

    public synchronized void addOrUpdateAlarms(List<Alarm> alarms) {
        for (Alarm alarm : alarms) {
            addOrUpdateAlarm(alarm);
        }
    }

    public synchronized Optional<CEVertex> addOrUpdateAlarm(Alarm alarm) {
        if (alarm.getInventoryObjectType() == null || alarm.getInventoryObjectId() == null) {
            LOG.info("Alarm with id: {} is not associated with any resource. It will not be added to the graph.", alarm.getId());
            return Optional.empty();
        }
        final ResourceKey resourceKey = getResourceKeyFor(alarm);
        final CEVertex vertex = resourceKeyVertexMap.computeIfAbsent(resourceKey, (key) -> {
            LOG.info("No existing vertex was found with resource key: {} for alarm with id: {} and contents: {}. Creating a new vertex.", resourceKey, alarm.getId(), alarm);
            final CEVertex v = new CEVertex(vertexIdGenerator.getAndIncrement(), resourceKey);
            g.addVertex(v);
            didGraphChange.set(true);
            idtoVertexMap.put(v.getNumericId(), v);
            handleDeferredIos(Collections.singletonList(v));
            return v;
        });
        LOG.trace("Updating vertex: {} with alarm: {}", vertex, alarm);
        vertex.addOrUpdateAlarm(alarm);
        return Optional.of(vertex);
    }

    public <V> V withReadOnlyGraph(Function<Graph<? extends Vertex, ? extends Edge>, V> consumer) {
        return consumer.apply(g);
    }

    public void withReadOnlyGraph(Consumer<Graph<? extends Vertex, ? extends Edge>> consumer) {
        consumer.accept(g);
    }

    public synchronized <V> V withGraph(Function<Graph<CEVertex, CEEdge>, V> consumer) {
        return consumer.apply(g);
    }

    public synchronized void withGraph(Consumer<Graph<CEVertex, CEEdge>> consumer) {
        consumer.accept(g);
    }

    public synchronized void withVertex(String type, String id, BiConsumer<Graph<CEVertex, CEEdge>, CEVertex> consumer) {
        consumer.accept(g, resourceKeyVertexMap.get(ResourceKey.key(type, id)));
    }

    protected Graph<CEVertex, CEEdge> getGraph() {
        return g;
    }

    protected CEVertex getVertexWithId(Long id) {
        return idtoVertexMap.get(id);
    }

    private CEVertex createVertexFor(InventoryObject io) {
        final ResourceKey resourceKey = getResourceKeyFor(io);
        return new CEVertex(vertexIdGenerator.getAndIncrement(), resourceKey, io);
    }

    private static ResourceKey getResourceKeyFor(InventoryObject io) {
        return ResourceKey.key(io.getType(), io.getId());
    }

    private static ResourceKey getResourceKeyForParentOf(InventoryObject io) {
        return ResourceKey.key(io.getParentType(), io.getParentId());
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

    public boolean getDidGraphChangeAndReset() {
        return didGraphChange.getAndSet(false);
    }

    public Set<Long> getDisconnectedVertices() {
        return disconnectedVertices;
    }

    public int getNumDeferredObjects() {
        return dependenciesByDeferredIos.size();
    }

    public Optional<CEVertex> getVertexFor(InventoryObject io) {
        final ResourceKey resourceKey = getResourceKeyFor(io);
        return Optional.ofNullable(resourceKeyVertexMap.get(resourceKey));
    }

    public Optional<CEVertex> getVertexForParentOf(InventoryObject io) {
        final ResourceKey resourceKey = getResourceKeyForParentOf(io);
        return Optional.ofNullable(resourceKeyVertexMap.get(resourceKey));
    }

}
