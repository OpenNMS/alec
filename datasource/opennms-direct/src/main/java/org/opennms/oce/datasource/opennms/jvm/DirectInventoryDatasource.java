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

package org.opennms.oce.datasource.opennms.jvm;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.stream.Collectors;

import org.opennms.integration.api.v1.alarms.AlarmLifecycleListener;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.HandlerRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Sets;

/**
 * A datasource that provides {@link InventoryObject inventory} via the integration API.
 */
public class DirectInventoryDatasource implements InventoryDatasource, AlarmLifecycleListener {
    private static final Logger LOG = LoggerFactory.getLogger(DirectInventoryDatasource.class);

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
     * A lock that prevents callbacks from being processed before we have finished {@link #init}.
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
     * @param nodeDao  used to retrieve the current inventory
     * @param alarmDao used to retrieve the current inventory
     */
    public DirectInventoryDatasource(NodeDao nodeDao, AlarmDao alarmDao) {
        this.nodeDao = Objects.requireNonNull(nodeDao);
        this.alarmDao = Objects.requireNonNull(alarmDao);
    }

    /**
     * On init we will populate the inventory by retrieving all current inventory from the {@link NodeDao} and
     * {@link AlarmDao}.
     */
    public void init() {
        nodeDao.getNodes().forEach(n -> inventoryFromNodes.addAll(Mappers.toInventory(n)));
        alarmDao.getAlarms().forEach(a -> processAlarm(a, false));
        initLock.countDown();
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
     * Adds the inventory resulting from handling a callback.
     *
     * @param inventoryObjects the inventory mapped from the callback
     * @param notifyHandlers   whether or not to notify handlers
     */
    private void addInventory(List<InventoryObject> inventoryObjects, boolean notifyHandlers) {
        // Only add and notify for inventory that was not already known
        Set<InventoryObject> newInventory = Sets.difference(new HashSet<>(inventoryObjects),
                this.inventoryFromAlarms);

        if (!newInventory.isEmpty()) {
            if (notifyHandlers) {
                inventoryHandlers.forEach(handler -> handler.onInventoryAdded(newInventory));
            }
        }

        inventoryFromAlarms.addAll(newInventory);
    }

    /**
     * Process an alarm depending on if it is associated with a node or not.
     *
     * @param alarm       the alarm to process
     * @param waitForInit whether or not to wait for init to finish first
     */
    private void processAlarm(Alarm alarm, boolean waitForInit) {
        if (waitForInit) {
            waitForInit();
        }

        if (alarm == null) {
            LOG.warn("Received null alarm");
            return;
        }

        List<InventoryObject> inventoryToAdd = new ArrayList<>();
        Node nodeForAlarm = alarm.getNode();

        if (nodeForAlarm != null) {
            inventoryToAdd.addAll(Mappers.toInventory(nodeForAlarm));

        } else {
            inventoryToAdd.addAll(Mappers.toInventory(alarm));
        }

        addInventory(inventoryToAdd, waitForInit);

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

    @Override
    public synchronized void handleAlarmSnapshot(List<Alarm> alarms) {
        // Derive new inventory from the snapshot
        alarms.forEach(alarm -> processAlarm(alarm, true));

        // Determine and process the alarms that must have been deleted according to the snapshot
        Set<Integer> authoritativeAlarmIds = alarms.stream().map(Alarm::getId).collect(Collectors.toSet());
        Set<Integer> deletedAlarms = Sets.difference(alarmIdToInventoryMapping.keySet(), authoritativeAlarmIds);
        deletedAlarms.forEach(deletedAlarmId -> handleDeletedAlarm(deletedAlarmId, null));
    }

    @Override
    public synchronized void handleNewOrUpdatedAlarm(Alarm alarm) {
        processAlarm(alarm, true);
    }

    @Override
    public synchronized void handleDeletedAlarm(int alarmId, String reductionKey) {
        // Check if this alarm had any inventory associated
        Set<InventoryObject> inventoryForAlarm = alarmIdToInventoryMapping.get(alarmId);

        if (inventoryForAlarm != null && !inventoryForAlarm.isEmpty()) {
            Set<InventoryObject> inventoryToRemove = new HashSet<>();

            inventoryForAlarm.forEach(inventory -> {
                Set<Integer> alarmIdsForInventory = inventoryToAlarmIdMapping.get(inventory);
                alarmIdsForInventory.remove(alarmId);

                // If this was the last alarm to reference the inventory then we can mark it for removal
                if (alarmIdsForInventory.isEmpty()) {
                    inventoryToRemove.add(inventory);
                }
            });

            if (!inventoryToRemove.isEmpty()) {
                // Clean up the collections that contain this inventory
                inventoryToRemove.forEach(inventory -> {
                    inventoryToAlarmIdMapping.remove(inventory);
                    inventoryFromAlarms.remove(inventory);
                });

                inventoryHandlers.forEach(handler -> handler.onInventoryRemoved(inventoryToRemove));
            }

            // Since this alarm has been deleted we can clear the inventory associated with it
            inventoryForAlarm.clear();
        }
    }

    @Override
    public synchronized List<InventoryObject> getInventory() {
        waitForInit();
        return ImmutableList.copyOf(Sets.union(inventoryFromAlarms, inventoryFromNodes));
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
}
