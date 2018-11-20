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

package org.opennms.oce.features.graph.janusgraph;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.function.Supplier;

import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.apache.tinkerpop.gremlin.structure.Element;
import org.apache.tinkerpop.gremlin.structure.Vertex;
import org.janusgraph.core.Cardinality;
import org.janusgraph.core.JanusGraph;
import org.janusgraph.core.JanusGraphFactory;
import org.janusgraph.core.schema.JanusGraphManagement;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.features.graph.api.AbstractManagedGraph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.annotations.VisibleForTesting;

public class ManagedJanusGraph extends AbstractManagedGraph {
    private static final Logger LOG = LoggerFactory.getLogger(ManagedJanusGraph.class);
    private final JanusGraph janusGraph;
    private final GraphTraversalSource g;
    private final Set<InventoryObject> deferredIos = new HashSet<>();

    // The keys used to associate properties to JanusGraph elements
    private static final String KEY_RESOURCE_KEY = "resourceKey";
    private static final String KEY_INVENTORY_OBJECT_ID = "inventoryObjectId";
    private static final String KEY_ALARMS = "alarms";

    public ManagedJanusGraph(String storageBackend) {
        janusGraph = JanusGraphFactory.build()
                // Set the configurable properties
                .set("storage.backend", storageBackend)
                // The following properties should remain hardcoded
                .set("attributes.custom.attribute1.attribute-class", "org.opennms.oce.datasource.common.AlarmBean")
                .set("attributes.custom.attribute1.serializer-class",
                        "org.opennms.oce.features.graph.janusgraph.AlarmBeanSerializer")
                .open();

        // Set up the vertex properties
        JanusGraphManagement mgmt = janusGraph.openManagement();
        mgmt.makePropertyKey(KEY_RESOURCE_KEY).dataType(String.class).cardinality(Cardinality.SINGLE).make();
        mgmt.makePropertyKey(KEY_INVENTORY_OBJECT_ID).dataType(String.class).cardinality(Cardinality.SINGLE).make();
        mgmt.makePropertyKey(KEY_ALARMS).dataType(Object.class).cardinality(Cardinality.SET).make();
        mgmt.commit();

        g = janusGraph.traversal();
    }

    @Override
    public synchronized void addInventory(Collection<InventoryObject> inventory) {
        addInventory(inventory, false);
    }

    private synchronized void addInventory(Collection<InventoryObject> inventory, boolean isDeferred) {
        // Start off by adding vertices to the graph for any new object
        for (InventoryObject io : inventory) {
            ResourceKey resourceKey = getResourceKeyFor(io);
            addVertex(resourceKey, io.getId());
        }

        // Now handle the relationships
        for (InventoryObject io : inventory) {
            ResourceKey resourceKey = getResourceKeyFor(io);
            //noinspection OptionalGetWithoutIsPresent
            Vertex vertex = getVertex(resourceKey).get();

            if (!buildParentRelationships(io, resourceKey, vertex) || !buildPeerRelationships(io, resourceKey,
                    vertex) || !buildRelativeRelationships(io, resourceKey, vertex)) {
                if (!isDeferred) {
                    deferredIos.add(io);
                }
            } else if (isDeferred) {
                deferredIos.remove(io);
            }
        }

        if (!isDeferred) {
            handleDeferredIos();
        }
    }

    private boolean buildParentRelationships(InventoryObject io, ResourceKey resourceKey, Vertex vertex) {
        ResourceKey parentResourceKey = getResourceKeyForParent(io);

        if (parentResourceKey != null) {
            Optional<Vertex> parentVertex = getVertex(parentResourceKey);

            if (!parentVertex.isPresent()) {
                LOG.info("No existing vertex found for parent with resource key '{}' on vertex with resource key " +
                        "'{}'. Deferring edge association.", parentResourceKey, resourceKey);

                return false;
            }

            if (!areVerticesAdjacent(vertex, parentVertex.get())) {
                LOG.debug("Adding edge between child: {} and parent: {}", vertex, parentVertex.get());
                vertex.addEdge("parent", parentVertex.get(), "id", edgeIdGenerator.getAndIncrement(),
                        "weight", io.getWeightToParent());
            }
        }

        return true;
    }

    private boolean buildPeerRelationships(InventoryObject io, ResourceKey resourceKey, Vertex vertex) {
        for (InventoryObjectPeerRef peerRef : io.getPeers()) {
            ResourceKey peerResourceKey = getResourceKeyForPeer(peerRef);
            Optional<Vertex> peerVertex = getVertex(peerResourceKey);

            if (!peerVertex.isPresent()) {
                LOG.info("No existing vertex found for peer with resource key '{}' on vertex with resource key " +
                        "'{}'. Deferring edge association.", peerResourceKey, resourceKey);

                return false;
            }

            if (!areVerticesAdjacent(vertex, peerVertex.get())) {
                LOG.debug("Adding edge between peers A: {} and Z: {}", peerVertex.get(), vertex);
                vertex.addEdge("peer", peerVertex.get(), "id",
                        edgeIdGenerator.getAndIncrement(), "weight", peerRef.getWeight());
            }
        }

        return true;
    }

    private boolean buildRelativeRelationships(InventoryObject io, ResourceKey resourceKey, Vertex vertex) {
        for (InventoryObjectRelativeRef relativeRef : io.getRelatives()) {
            ResourceKey relativeResourceKey = getResourceKeyForPeer(relativeRef);
            Optional<Vertex> relativeVertex = getVertex(relativeResourceKey);

            if (!relativeVertex.isPresent()) {
                LOG.info("No existing vertex found for relative with resource key '{}' on vertex with resource " +
                        "key '{}'. Deferring edge association.", relativeResourceKey, resourceKey);

                return false;
            }

            if (!areVerticesAdjacent(vertex, relativeVertex.get())) {
                LOG.debug("Adding edge between relatives A: {} and Z: {}", relativeVertex.get(),
                        vertex);
                vertex.addEdge("relative", relativeVertex.get(), "id",
                        edgeIdGenerator.getAndIncrement(), "weight", relativeRef.getWeight());
            }
        }

        return true;
    }

    private void handleDeferredIos() {
        if (deferredIos.isEmpty()) {
            return;
        }

        addInventory(Collections.unmodifiableCollection(deferredIos), true);
    }

    @Override
    public void removeInventory(Collection<InventoryObject> inventory) {
        for (InventoryObject io : inventory) {
            ResourceKey resourceKey = getResourceKeyFor(io);
            getVertex(resourceKey).ifPresent(Element::remove);
            deferredIos.remove(io);
        }
    }

    @Override
    public void addOrUpdateAlarm(Alarm alarm) {
        if (alarm.getInventoryObjectType() == null || alarm.getInventoryObjectId() == null) {
            LOG.info("Alarm with id: {} is not associated with any resource. It will not be added to the graph.",
                    alarm.getId());
            return;
        }

        ResourceKey resourceKey = getResourceKeyFor(alarm);

        if (!getVertex(resourceKey).isPresent()) {
            addVertex(resourceKey, alarm.getInventoryObjectId());
            LOG.info("No existing vertex was found with resource key: {} for alarm with id: {}. Creating a new  " +
                    "vertex.", resourceKey, alarm.getId());
            handleDeferredIos();
        }

        // Add this alarm to the vertex replacing an existing alarm that is being updated if necessary
        getVertex(resourceKey).get().property(KEY_ALARMS, alarm);
    }

    @Override
    public void garbageCollectAlarms(long currentTimeMs, long problemTimeoutMs, long clearTimeoutMs) {
        long problemCutoffMs = currentTimeMs - problemTimeoutMs;
        long clearCutoffMs = currentTimeMs - clearTimeoutMs;

        g.V().has(KEY_ALARMS).forEachRemaining(vertexWithAlarms -> {
            LOG.debug("GCing vertex {}", vertexWithAlarms);

            vertexWithAlarms.properties(KEY_ALARMS).forEachRemaining(alarmProperty -> {
                Alarm alarm = (Alarm) alarmProperty.value();
                LOG.trace("Considering alarm {} for GC", alarm);

                if (alarm.isClear() && alarm.getTime() < clearCutoffMs) {
                    LOG.debug("GCing cleared alarm with id: {}, alarm time is: {} " +
                                    "which is before the cutoff time of: {}", alarm.getId(), new Date(alarm.getTime()),
                            new Date(clearCutoffMs));
                    alarmProperty.remove();
                } else if (!alarm.isClear() && alarm.getTime() < problemCutoffMs) {
                    LOG.debug("GCing problem alarm with id: {}, alarm time is: {} " +
                                    "which is before the cutoff time of: {}", alarm.getId(), new Date(alarm.getTime()),
                            new Date(problemCutoffMs));
                    alarmProperty.remove();
                }
            });
        });
    }

    @Override
    public void close() {
        janusGraph.close();
    }

    private void addVertex(ResourceKey resourceKey, String inventoryObjectId) {
        String label = resourceKey.toString();

        // To enforce a 1:1 mapping between resource keys and vertices
        if (g.V().hasLabel(label).hasNext()) {
            throw new IllegalArgumentException("A vertex with label '" + label + "' already exists");
        }

        LOG.debug("Adding vertex with resource key: {} for inventory object id: {}", resourceKey, inventoryObjectId);
        Vertex v = g.addV(label).next();
        v.property(KEY_RESOURCE_KEY, resourceKey);
        v.property(KEY_INVENTORY_OBJECT_ID, inventoryObjectId);
    }

    private Optional<Vertex> getVertex(ResourceKey resourceKey) {
        return g.V().hasLabel(resourceKey.toString()).tryNext();
    }

    private boolean areVerticesAdjacent(Vertex vertexA, Vertex vertexB) {
        boolean isAdjacent = g.V()
                .is(vertexA)
                .both()
                .is(vertexB)
                .hasNext();

        LOG.debug("{} is {}adjacent to {}", vertexA.label(), isAdjacent ? "" : "not ", vertexB.label());
        
        return isAdjacent;
    }

    @Override
    public int hashCode() {
        return janusGraph.hashCode();
    }

    @VisibleForTesting
    public GraphTraversalSource getGraphTraversal() {
        return g;
    }
}
