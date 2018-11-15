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

import javax.annotation.Resource;

import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.apache.tinkerpop.gremlin.structure.Element;
import org.apache.tinkerpop.gremlin.structure.Vertex;
import org.janusgraph.core.Cardinality;
import org.janusgraph.core.JanusGraph;
import org.janusgraph.core.JanusGraphFactory;
import org.janusgraph.core.JanusGraphTransaction;
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
    private static final String KEY_HAS_ALARMS = "hasAlarms";

    public ManagedJanusGraph(String storageConfigurationFile) {
        janusGraph = JanusGraphFactory.open(Objects.requireNonNull(storageConfigurationFile));
        createSchema();
        g = janusGraph.traversal();
    }

    private void createSchema() {
        JanusGraphManagement mgmt = janusGraph.openManagement();

        try {
            // The resource key property uniquely identifies a vertex and is also used as the vertex's label
            if (!mgmt.containsPropertyKey(KEY_RESOURCE_KEY)) {
                mgmt.makePropertyKey(KEY_RESOURCE_KEY).dataType(String.class).cardinality(Cardinality.SINGLE).make();
                mgmt.buildIndex(KEY_RESOURCE_KEY, Vertex.class).addKey(mgmt.getPropertyKey(KEY_RESOURCE_KEY))
                        .buildCompositeIndex();
            }

            if (!mgmt.containsPropertyKey(KEY_INVENTORY_OBJECT_ID)) {
                mgmt.makePropertyKey(KEY_INVENTORY_OBJECT_ID).dataType(String.class).cardinality(Cardinality.SINGLE).make();
                mgmt.buildIndex(KEY_INVENTORY_OBJECT_ID, Vertex.class)
                        .addKey(mgmt.getPropertyKey(KEY_INVENTORY_OBJECT_ID)).buildCompositeIndex();
            }

            if (!mgmt.containsPropertyKey(KEY_ALARMS)) {
                mgmt.makePropertyKey(KEY_ALARMS).dataType(Object.class).cardinality(Cardinality.SET).make();
            }

            // This property is for indexing purposes and just identifies whether or not a vertex has an alarms attached
            // to it
            if (!mgmt.containsPropertyKey(KEY_HAS_ALARMS)) {
                mgmt.makePropertyKey(KEY_HAS_ALARMS).dataType(Boolean.class).cardinality(Cardinality.SINGLE).make();
                mgmt.buildIndex(KEY_HAS_ALARMS, Vertex.class)
                        .addKey(mgmt.getPropertyKey(KEY_HAS_ALARMS)).buildCompositeIndex();
            }

            mgmt.commit();
        } catch (Exception e) {
            LOG.warn("Encountered exception while creating properties", e);
            mgmt.rollback();
        }
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
                janusGraph.tx().commit();
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
                janusGraph.tx().commit();
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
                janusGraph.tx().commit();
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
        JanusGraphTransaction transaction = janusGraph.newTransaction();

        try {
            for (InventoryObject io : inventory) {
                ResourceKey resourceKey = getResourceKeyFor(io);
                getVertex(resourceKey).ifPresent(Element::remove);
                deferredIos.remove(io);
            }

            transaction.commit();
        } catch (Exception e) {
            LOG.warn("Encountered exception while removing inventory", e);
            transaction.rollback();
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
        // Note: I'm not sure if there is an easier way to enforce a replacement for an updated alarm... for now I am
        // removing the alarm if the ID is the same and then replacing it
        JanusGraphTransaction transaction = janusGraph.newTransaction();

        try {
            removeAlarmFromVertex(resourceKey, alarm);
            Vertex v = getVertex(resourceKey).get();
            v.property(KEY_ALARMS, alarm);
            v.property(KEY_HAS_ALARMS, true);
            transaction.commit();
        } catch (Exception e) {
            LOG.warn("Encountered exception while adding/updating alarm", e);
            transaction.rollback();
        }
    }

    @Override
    public void garbageCollectAlarms(long currentTimeMs, long problemTimeoutMs, long clearTimeoutMs) {
        long problemCutoffMs = currentTimeMs - problemTimeoutMs;
        long clearCutoffMs = currentTimeMs - clearTimeoutMs;

        g.V().has(KEY_HAS_ALARMS, true).forEachRemaining(vertexWithAlarms -> {
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

            if (!vertexWithAlarms.properties(KEY_ALARMS).hasNext()) {
                vertexWithAlarms.property(KEY_HAS_ALARMS, false);
            }
        });

        janusGraph.tx().commit();
    }

    @Override
    public void close() {
        janusGraph.close();
    }

    private void removeAlarmFromVertex(ResourceKey resourceKey, Alarm alarm) {
        // Note: the flag signifying whether or not this vertex has alarms is not modified since it is assumed this
        // vertex is about to have an alarm added and that will take care of the flag
        g.V().has(KEY_RESOURCE_KEY, resourceKey).properties(KEY_ALARMS).forEachRemaining(alarmOnVertex -> {
            if (((Alarm) alarmOnVertex.value()).getId().equals(alarm.getId())) {
                alarmOnVertex.remove();
            }
        });
    }

    private void addVertex(ResourceKey resourceKey, String inventoryObjectId) {
        String label = resourceKey.toString();

        // To enforce a 1:1 mapping between resource keys and vertices
        if (g.V().has(KEY_RESOURCE_KEY, resourceKey).hasNext()) {
            throw new IllegalArgumentException("A vertex with label '" + label + "' already exists");
        }

        LOG.debug("Adding vertex with resource key: {} for inventory object id: {}", resourceKey, inventoryObjectId);
        Vertex v = g.addV(label).next();
        v.property(KEY_RESOURCE_KEY, resourceKey);
        v.property(KEY_INVENTORY_OBJECT_ID, inventoryObjectId);
        janusGraph.tx().commit();
    }

    private Optional<Vertex> getVertex(ResourceKey resourceKey) {
        return g.V().has(KEY_RESOURCE_KEY, resourceKey).tryNext();
    }

    private boolean areVerticesAdjacent(Vertex vertexA, Vertex vertexB) {
        boolean isAdjacent = g.V()
                .has(KEY_RESOURCE_KEY, (String) vertexA.value(KEY_RESOURCE_KEY))
                .both()
                .has(KEY_RESOURCE_KEY, (String) vertexB.value(KEY_RESOURCE_KEY))
                .hasNext();

        LOG.debug("{} is {}adjacent to {}", vertexA.label(), isAdjacent ? "" : "not ", vertexB.label());

        return isAdjacent;
    }

    @Override
    public int hashCode() {
        return janusGraph.hashCode();
    }

    @VisibleForTesting
    GraphTraversalSource getGraphTraversal() {
        return g;
    }
}
