/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.datasource.opennms.jvm;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.opennms.alec.datasource.api.InventoryDatasource;
import org.opennms.alec.datasource.api.InventoryHandler;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.common.HandlerRegistry;
import org.opennms.integration.api.v1.alarms.AlarmLifecycleListener;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.dao.EdgeDao;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.events.EventListener;
import org.opennms.integration.api.v1.events.EventSubscriptionService;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.TopologyEdge;
import org.opennms.integration.api.v1.model.TopologyProtocol;
import org.opennms.integration.api.v1.topology.TopologyEdgeConsumer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.annotations.VisibleForTesting;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Sets;

/**
 * A datasource that provides {@link InventoryObject inventory} via the integration API.
 */
public class DirectInventoryDatasource implements InventoryDatasource, AlarmLifecycleListener, TopologyEdgeConsumer {
    private static final Logger LOG = LoggerFactory.getLogger(DirectInventoryDatasource.class);

    /**
     * The startup thread; handles initialization.
     */
    private Thread initThread;

    /**
     * The registry of handlers interested in receiving callbacks for inventory.
     */
    private final HandlerRegistry<InventoryHandler> inventoryHandlers = new HandlerRegistry<>();

    /**
     * The set of inventory objects derived from alarms initially populated via {@link #init} and subsequently via
     * callbacks {@link #handleAlarmSnapshot} and {@link #handleNewOrUpdatedAlarm}.
     */
    private Set<InventoryObject> inventoryFromAlarms = new LinkedHashSet<>();

    /**
     * The set of inventory objects derived from edges initially populated via {@link #init} and subsequently via
     * callback {@link #onEdgeAddedOrUpdated}.
     */
    private Set<InventoryObject> inventoryFromEdges = new LinkedHashSet<>();

    /**
     * The set of inventory objects derived from nodes populated via {@link #init}. This set is never modified after it
     * is initially populated.
     */
    private Set<InventoryObject> inventoryFromNodes = new LinkedHashSet<>();

    /**
     * A map of {@link InventoryObject inventory objects} to alarm Ids to facilitate tracking which alarms derived which
     * inventory.
     */
    private Map<InventoryObject, Set<Integer>> inventoryToAlarmIdMapping = new HashMap<>();

    /**
     * A map of alarm Ids to {@link InventoryObject inventory objects} to facilitate tracking which alarms derived which
     * inventory.
     */
    private Map<Integer, Set<InventoryObject>> alarmIdToInventoryMapping = new HashMap<>();

    /**
     * A map of {@link InventoryObject inventory objects} to edge Ids to facilitate tracking which edges derived which
     * inventory.
     */
    private Map<InventoryObject, Set<String>> inventoryToEdgeIdMapping = new HashMap<>();

    /**
     * A map of edge Ids to {@link InventoryObject inventory objects} to facilitate tracking which edges derived which
     * inventory.
     */
    private Map<String, Set<InventoryObject>> edgeIdToInventoryMapping = new HashMap<>();

    /**
     * A map of {@link InventoryObject inventory objects} to node Ids to facilitate tracking which nodes derived which
     * inventory.
     */
    private Map<InventoryObject, Set<Integer>> inventoryToNodeIdMapping = new HashMap<>();

    /**
     * A map of node Ids to {@link InventoryObject inventory objects} to facilitate tracking which nodes derived which
     * inventory.
     */
    private Map<Integer, Set<InventoryObject>> nodeIdToInventoryMapping = new HashMap<>();

    /**
     * A lock that prevents callbacks from being processed before we have finished {@link #init initializing}.
     */
    private final CountDownLatch initLock = new CountDownLatch(1);

    /**
     * Used during {@link #init} to initialize {@link #inventoryFromNodes}.
     */
    private final NodeDao nodeDao;

    /**
     * Used during {@link #init} to initialize {@link #inventoryFromAlarms}.
     */
    private final AlarmDao alarmDao;

    /**
     * Used during {@link #init} to initialize {@link #inventoryFromEdges}.
     */
    private final EdgeDao edgeDao;

    /**
     * A mapper for deriving inventory objects.
     */
    private final ApiMapper mapper;

    /**
     * A {@link EventSubscriptionService service} we use to receive events related to nodes being added/updated/removed.
     */
    private final EventSubscriptionService eventSubscriptionService;

    /**
     * A listener that reacts to the node events.
     */
    private final NodeEventListener nodeEventListener = new NodeEventListener();

    /**
     * The set of protocols we are interested in, in this case we always want to hear about all protocols.
     */
    private static final Set<TopologyProtocol> TOPOLOGY_PROTOCOLS = Collections.singleton(TopologyProtocol.ALL);

    /**
     * @param nodeDao  used to retrieve the current inventory
     * @param alarmDao used to retrieve the current inventory
     * @param edgeDao  used to retrieve the current inventory
     * @param mapper   used to Map between API and ALEC types
     */
    public DirectInventoryDatasource(NodeDao nodeDao, AlarmDao alarmDao, EdgeDao edgeDao, ApiMapper mapper,
                                     EventSubscriptionService eventSubscriptionService) {
        this.nodeDao = Objects.requireNonNull(nodeDao);
        this.alarmDao = Objects.requireNonNull(alarmDao);
        this.edgeDao = Objects.requireNonNull(edgeDao);
        this.mapper = Objects.requireNonNull(mapper);
        this.eventSubscriptionService = Objects.requireNonNull(eventSubscriptionService);
    }

    /**
     * On init we will populate the inventory by retrieving all current inventory from the {@link NodeDao} and
     * {@link AlarmDao}.
     */
    public synchronized void init() {
        // The Blueprint requires the init method to return 'void', so we can't make it call initAsync directly
        initAsync();
    }

    /**
     * Perform the initialization tasks in a dedicated thread.
     *
     * @return the Future of the initialization thread.
     */
    public CompletableFuture<Void> initAsync() {
        final CompletableFuture<Void> future = new CompletableFuture<>();
        LOG.info("Initializing...");

        initThread = new Thread(() -> {
            try {
                doInit();
            } catch (Exception e) {
                if (e.getCause() != null && e.getCause() instanceof InterruptedException) {
                    LOG.warn("Initialization was interrupted.");
                } else {
                    LOG.error("Initialization failed with exception.", e);
                }
                future.completeExceptionally(e);
                return;
            }

            LOG.info("Initialization successful.");
            future.complete(null);
        });

        initThread.setName("ALEC Inventory Datasource Initializer");
        initThread.start();
        return future;
    }

    /**
     * Perform the initialization tasks. Populate inventory from '{@link NodeDao}',
     * '{@link AlarmDao}', and '{@link EdgeDao}'.
     */
    protected void doInit() {
        eventSubscriptionService.addEventListener(nodeEventListener, nodeEventListener.nodeEventUeis);

        LOG.debug("Loading nodes...");
        nodeDao.getNodes().forEach(n -> processNode(n, false));

        LOG.debug("Loading alarms...");
        alarmDao.getAlarms().forEach(a -> processAlarm(a, false));

        LOG.debug("Loading edges...");
        edgeDao.getEdges().forEach(e -> processEdge(e, false));

        initLock.countDown();
    }

    /**
     * On destroy we have to unsubscribe our listener.
     */
    public synchronized void destroy() {
        eventSubscriptionService.removeEventListener(nodeEventListener);

        if (initThread != null && initThread.isAlive()) {
            initThread.interrupt();
            try {
                initThread.join(TimeUnit.MINUTES.toMillis(1));
                if (initThread.isAlive()) {
                    LOG.warn("Initializing thread is still running.");
                }
            } catch (InterruptedException e) {
                LOG.error("Interrupted while waiting for initialization thread to stop.");
            }
        }
    }

    /**
     * Wait for {@link #init the init} to finish to delay callbacks from being processed and clients from polling for
     * inventory.
     */
    private void waitForInit() {
        try {
            initLock.await();
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while waiting for init lock.");
            Thread.currentThread().interrupt();
        }
    }

    /**
     * Checks if this inventory is new and notifies handlers only on new inventory.
     *
     * @param inventoryObjects the inventory mapped from the callback
     * @param notifyHandlers   whether or not to notify handlers
     * @return the newly added inventory or an empty collection if no new inventory was added
     */
    private synchronized Collection<InventoryObject> considerNewInventory(Set<InventoryObject> inventoryObjects,
                                                                          boolean notifyHandlers) {
        // Only add and notify for inventory that was not already known
        Set<InventoryObject> diffAlarm = Sets.difference(
                inventoryObjects, Collections.unmodifiableSet(inventoryFromAlarms));
        Set<InventoryObject> diffNode = Sets.difference(
                inventoryObjects, Collections.unmodifiableSet(inventoryFromNodes));
        Set<InventoryObject> diffEdge = Sets.difference(
                inventoryObjects, Collections.unmodifiableSet(inventoryFromEdges));

        Set<InventoryObject> newInventory = Sets.intersection(
                Sets.intersection(diffAlarm, diffNode), diffEdge).immutableCopy();

        if (!newInventory.isEmpty()) {
            if (notifyHandlers) {
                inventoryHandlers.forEach(handler -> handler.onInventoryAdded(newInventory));
            }
        }

        return newInventory;
    }

    private void processAlarm(Alarm alarm) {
        processAlarm(alarm, true);
    }

    /**
     * Process an alarm depending on if it is associated with a node or not.
     *
     * @param alarm       the alarm to process
     * @param waitForInit whether or not to wait for init to finish first
     */
    @SuppressWarnings("Duplicates")
    private synchronized void processAlarm(Alarm alarm, boolean waitForInit) {
        if (waitForInit) {
            waitForInit();
        }

        if (alarm == null) {
            LOG.warn("Received null alarm");
            return;
        }

        Set<InventoryObject> inventoryToAdd = new HashSet<>();
        Node nodeForAlarm = alarm.getNode();

        if (nodeForAlarm != null) {
            inventoryToAdd.addAll(mapper.toInventory(nodeForAlarm));

        } else {
            inventoryToAdd.addAll(mapper.toInventory(alarm));
        }

        if (!inventoryToAdd.isEmpty()) {
            Collection<InventoryObject> newInventory = considerNewInventory(inventoryToAdd, waitForInit);
            inventoryFromAlarms.addAll(inventoryToAdd);

            if (!newInventory.isEmpty() && LOG.isTraceEnabled()) {
                LOG.trace("Alarm {} resulted in the following inventory being added {}", alarm, newInventory);
            }

            // Update the set of alarm Ids that this inventory was derived from (alarm reference counting for this
            // inventory)
            inventoryToAdd.forEach(inventory ->
                    inventoryToAlarmIdMapping.compute(inventory, (k, v) -> {
                        if (v == null) {
                            return new HashSet<>(Collections.singleton(alarm.getId()));
                        }

                        v.add(alarm.getId());
                        return v;
                    })
            );

            // Record that this alarm derived this inventory to make the lookup easier when it comes time to delete this
            // alarm
            alarmIdToInventoryMapping.compute(alarm.getId(), (k, v) -> {
                if (v == null) {
                    return new HashSet<>(inventoryToAdd);
                }

                v.addAll(inventoryToAdd);
                return v;
            });
        }
    }

    private void processEdge(TopologyEdge edge) {
        processEdge(edge, true);
    }

    /**
     * Process an edge.
     *
     * @param edge        the edge to process
     * @param waitForInit whether or not to wait for init to finish first
     */
    @SuppressWarnings("Duplicates")
    private synchronized void processEdge(TopologyEdge edge, boolean waitForInit) {
        if (waitForInit) {
            waitForInit();
        }

        if (edge == null) {
            LOG.warn("Received null edge");
            return;
        }

        List<InventoryObject> inventoryToAdd = mapper.toInventory(edge);

        if (!inventoryToAdd.isEmpty()) {
            Collection<InventoryObject> newInventory = considerNewInventory(new HashSet<>(inventoryToAdd), waitForInit);
            inventoryFromEdges.addAll(inventoryToAdd);

            if (!newInventory.isEmpty() && LOG.isTraceEnabled()) {
                LOG.trace("Edge {} resulted in the following inventory being added {}", edge, newInventory);
            }

            // Update the set of edge Ids that this inventory was derived from (edge reference counting for this
            // inventory)
            inventoryToAdd.forEach(inventory ->
                    inventoryToEdgeIdMapping.compute(inventory, (k, v) -> {
                        if (v == null) {
                            return new HashSet<>(Collections.singleton(edge.getId()));
                        }

                        v.add(edge.getId());
                        return v;
                    })
            );

            // Record that this edge derived this inventory to make the lookup easier when it comes time to delete this
            // edge
            edgeIdToInventoryMapping.compute(edge.getId(), (k, v) -> {
                if (v == null) {
                    return new HashSet<>(inventoryToAdd);
                }

                v.addAll(inventoryToAdd);
                return v;
            });
        }
    }

    private void processNode(Node node) {
        processNode(node, true);
    }

    /**
     * Process a node
     *
     * @param node        the node to process
     * @param waitForInit whether or not to wait for init to finish first
     */
    @SuppressWarnings("Duplicates")
    private synchronized void processNode(Node node, boolean waitForInit) {
        if (waitForInit) {
            waitForInit();
        }

        if (node == null) {
            LOG.warn("Received null node");
            return;
        }

        List<InventoryObject> inventoryToAdd = mapper.toInventory(node);

        if (!inventoryToAdd.isEmpty()) {
            Collection<InventoryObject> newInventory = considerNewInventory(new HashSet<>(inventoryToAdd), waitForInit);
            inventoryFromNodes.addAll(inventoryToAdd);

            if (!newInventory.isEmpty() && LOG.isTraceEnabled()) {
                LOG.trace("Node {} resulted in the following inventory being added {}", node, newInventory);
            }

            // Update the set of node Ids that this inventory was derived from (alarm reference counting for this
            // inventory)
            inventoryToAdd.forEach(inventory ->
                    inventoryToNodeIdMapping.compute(inventory, (k, v) -> {
                        if (v == null) {
                            return new HashSet<>(Collections.singleton(node.getId()));
                        }

                        v.add(node.getId());
                        return v;
                    })
            );

            // Record that this node derived this inventory to make the lookup easier when it comes time to delete this
            // alarm
            nodeIdToInventoryMapping.compute(node.getId(), (k, v) -> {
                if (v == null) {
                    return new HashSet<>(inventoryToAdd);
                }

                v.addAll(inventoryToAdd);
                return v;
            });
        }
    }

    /**
     * Notifies handlers of removal of an inventory object if it is no longer referenced.
     *
     * @param inventoryObject the inventory to consider for removal
     */
    private synchronized void considerInventoryForRemoval(InventoryObject inventoryObject) {
        if (!isInventoryReferenced(inventoryObject)) {
            // This inventory is no longer referenced by anything so we can notify handlers of its
            // removal
            LOG.trace("Notifying handlers of inventory removal for IO {}", inventoryObject);
            inventoryHandlers.forEach(handler -> handler.onInventoryRemoved(Collections.singleton(inventoryObject)));
        }
    }

    /**
     * Checks if the given inventory is still referenced by an source.
     *
     * @param inventoryObject the inventory to check
     * @return true if referenced by any source, false otherwise
     */
    private synchronized boolean isInventoryReferenced(InventoryObject inventoryObject) {
        boolean isReferenced = false;
        LOG.trace("Checking if inventory is still referenced {}", inventoryObject);
        if (inventoryFromNodes.contains(inventoryObject)) {
            isReferenced = true;
            LOG.trace("IO is still referenced by nodes {}", inventoryObject);
        }
        if (inventoryFromAlarms.contains(inventoryObject)) {
            isReferenced = true;
            LOG.trace("IO is still referenced by alarms {}", inventoryObject);
        }
        if (inventoryFromEdges.contains(inventoryObject)) {
            isReferenced = true;
            LOG.trace("IO is still referenced by edges {}", inventoryObject);
        }
        return isReferenced;
    }

    private Set<InventoryObject> allInventory() {
        //noinspection unchecked
        return Collections.unmodifiableSet(mergeSets(inventoryFromAlarms, inventoryFromNodes, inventoryFromEdges));
    }

    @SafeVarargs
    private static Set<InventoryObject> mergeSets(Set<InventoryObject>... sets) {
        return Stream.of(sets)
                .flatMap(Set::stream)
                .collect(Collectors.toSet());
    }

    @VisibleForTesting
    synchronized boolean hasAnyAlarmReferences() {
        return !inventoryFromAlarms.isEmpty() || !alarmIdToInventoryMapping.isEmpty() ||
                !inventoryToAlarmIdMapping.isEmpty();
    }

    @VisibleForTesting
    synchronized boolean hasAnyNodeReferences() {
        return !inventoryFromNodes.isEmpty() || !nodeIdToInventoryMapping.isEmpty() ||
                !inventoryToNodeIdMapping.isEmpty();
    }

    @VisibleForTesting
    synchronized boolean hasAnyEdgeReferences() {
        return !inventoryFromEdges.isEmpty() || !edgeIdToInventoryMapping.isEmpty() ||
                !inventoryToEdgeIdMapping.isEmpty();
    }

    @VisibleForTesting
    synchronized boolean hasAnyInventoryReferences() {
        return hasAnyAlarmReferences() || hasAnyNodeReferences() || hasAnyEdgeReferences();
    }

    @Override
    public synchronized void handleAlarmSnapshot(List<Alarm> alarms) {
        if (LOG.isTraceEnabled()) {
            LOG.trace("Received alarm snapshot {}", alarms);
        }
        // Derive new inventory from the snapshot
        alarms.forEach(this::processAlarm);

        // Determine and process the alarms that must have been deleted according to the snapshot
        Set<Integer> authoritativeAlarmIds = alarms.stream().map(Alarm::getId).collect(Collectors.toSet());
        Set<Integer> deletedAlarms = Sets.difference(alarmIdToInventoryMapping.keySet(),
                authoritativeAlarmIds).immutableCopy();
        deletedAlarms.forEach(deletedAlarmId -> handleDeletedAlarm(deletedAlarmId, null));
    }

    @Override
    public void handleNewOrUpdatedAlarm(Alarm alarm) {
        LOG.trace("Received new or updated alarm {}", alarm);
        processAlarm(alarm);
    }

    @SuppressWarnings("Duplicates")
    @Override
    public synchronized void handleDeletedAlarm(int alarmId, String reductionKey) {
        LOG.trace("Received delete for alarm Id {}", alarmId);
        // Check if this alarm had any inventory associated
        Set<InventoryObject> inventoryForAlarm = alarmIdToInventoryMapping.get(alarmId);

        if (inventoryForAlarm != null) {
            // Since this alarm has been deleted we can clear the inventory associated with it
            alarmIdToInventoryMapping.remove(alarmId);

            inventoryForAlarm.forEach(inventory -> {
                Set<Integer> alarmIdsForInventory = inventoryToAlarmIdMapping.get(inventory);
                alarmIdsForInventory.remove(alarmId);

                if (alarmIdsForInventory.isEmpty()) {
                    // This inventory is no longer derived via alarms
                    inventoryFromAlarms.remove(inventory);
                    inventoryToAlarmIdMapping.remove(inventory);
                }
                considerInventoryForRemoval(inventory);
            });
        }
    }

    @Override
    public void onEdgeAddedOrUpdated(TopologyEdge topologyEdge) {
        LOG.trace("Received add/update for edge {}", topologyEdge);
        processEdge(topologyEdge);
    }

    @SuppressWarnings("Duplicates")
    @Override
    public synchronized void onEdgeDeleted(TopologyEdge topologyEdge) {
        LOG.trace("Received delete for edge {}", topologyEdge);
        // Check if this edge had any inventory associated
        Set<InventoryObject> inventoryForEdge = edgeIdToInventoryMapping.get(topologyEdge.getId());

        if (inventoryForEdge != null) {
            // Since this edge has been deleted we can clear the inventory associated with it
            edgeIdToInventoryMapping.remove(topologyEdge.getId());

            inventoryForEdge.forEach(inventory -> {
                Set<String> edgeIdsForInventory = inventoryToEdgeIdMapping.get(inventory);
                edgeIdsForInventory.remove(topologyEdge.getId());

                if (edgeIdsForInventory.isEmpty()) {
                    // This inventory is no longer derived via edges
                    inventoryFromEdges.remove(inventory);
                    inventoryToEdgeIdMapping.remove(inventory);
                }
                considerInventoryForRemoval(inventory);
            });
        }
    }

    @Override
    public Set<TopologyProtocol> getProtocols() {
        return TOPOLOGY_PROTOCOLS;
    }

    @Override
    public synchronized List<InventoryObject> getInventory() {
        waitForInit();
        return ImmutableList.copyOf(allInventory());
    }

    @Override
    public List<InventoryObject> getInventoryAndRegisterHandler(InventoryHandler handler) {
        inventoryHandlers.register(handler);
        return getInventory();
    }

    @Override
    public void registerHandler(InventoryHandler handler) {
        inventoryHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(InventoryHandler handler) {
        inventoryHandlers.unregister(handler);
    }

    @Override
    public void waitUntilReady() {
        waitForInit();
    }

    /**
     * A {@link EventListener listener} that specifically listens to events related to nodes being
     * added/updated/removed.
     */
    class NodeEventListener implements EventListener {
        static final String NODE_ADDED_UEI = "uei.opennms.org/nodes/nodeAdded";
        static final String NODE_UPDATED_UEI = "uei.opennms.org/nodes/nodeUpdated";
        static final String NODE_DELETED_UEI = "uei.opennms.org/nodes/nodeDeleted";
        private final Collection<String> nodeEventUeis = Arrays.asList(NODE_ADDED_UEI, NODE_UPDATED_UEI,
                NODE_DELETED_UEI);

        @SuppressWarnings("Duplicates")
        private void handleNodeDeleted(Integer nodeId) {
            Objects.requireNonNull(nodeId);
            waitForInit();

            synchronized (DirectInventoryDatasource.this) {
                // Check if this node had any inventory associated
                Set<InventoryObject> inventoryForNode = nodeIdToInventoryMapping.get(nodeId);

                if (inventoryForNode != null) {
                    // Since this node has been deleted we can clear the inventory associated with it
                    nodeIdToInventoryMapping.remove(nodeId);

                    inventoryForNode.forEach(inventory -> {
                        Set<Integer> nodeIdsForInventory = inventoryToNodeIdMapping.get(inventory);
                        nodeIdsForInventory.remove(nodeId);

                        if (nodeIdsForInventory.isEmpty()) {
                            // This inventory is no longer derived via nodes
                            inventoryFromNodes.remove(inventory);
                            inventoryToNodeIdMapping.remove(inventory);
                        }
                        considerInventoryForRemoval(inventory);
                    });
                }
            }
        }

        @Override
        public String getName() {
            return "DirectInventoryDatasource NodeEventListener";
        }

        @Override
        public int getNumThreads() {
            // One thread should be fine since all the work that results form the callback is synchronized anyway
            return 1;
        }

        @Override
        public void onEvent(InMemoryEvent inMemoryEvent) {
            switch (inMemoryEvent.getUei()) {
                case NODE_ADDED_UEI:
                case NODE_UPDATED_UEI:
                    Node node = nodeDao.getNodeById(inMemoryEvent.getNodeId());
                    LOG.trace("Received add/update for node {}", node);
                    processNode(node);
                    break;
                case NODE_DELETED_UEI:
                    LOG.trace("Received delete for node Id {}", inMemoryEvent.getNodeId());
                    handleNodeDeleted(inMemoryEvent.getNodeId());
            }
        }
    }
}
