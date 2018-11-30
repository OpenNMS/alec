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

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

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
     * The set of inventory objects initially populated via {@link #init} and subsequently via callbacks
     * {@link #handleAlarmSnapshot} and {@link #handleNewOrUpdatedAlarm}.
     */
    private Set<InventoryObject> inventoryObjects = new LinkedHashSet<>();

    /**
     * A lock that prevents callbacks from being processed before we have finished {@link #init}.
     */
    private final CountDownLatch initLock = new CountDownLatch(1);

    /**
     * A {@link ReadWriteLock} to synchronize the readers and writers of {@link #inventoryObjects}.
     */
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    /**
     * Used during {@link #init} to initialize {@link #inventoryObjects}.
     */
    private final NodeDao nodeDao;

    /**
     * Used during {@link #init} to initialize {@link #inventoryObjects}.
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
        nodeDao.getNodes().forEach(n -> inventoryObjects.addAll(Mappers.toInventory(n)));
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
        rwLock.writeLock().lock();
        try {
            // Only add and notify for inventory that was not already known
            Set<InventoryObject> newInventory = Sets.difference(this.inventoryObjects, new HashSet<>(inventoryObjects));

            if (this.inventoryObjects.addAll(newInventory)) {
                if (notifyHandlers) {
                    inventoryHandlers.forEach(handler -> handler.onInventoryAdded(newInventory));
                }
            }
        } finally {
            rwLock.writeLock().unlock();
        }
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

        Node nodeForAlarm = alarm.getNode();

        if (nodeForAlarm != null) {
            addInventory(Mappers.toInventory(nodeForAlarm), waitForInit);
        }

        addInventory(Mappers.toInventory(alarm), waitForInit);
    }

    @Override
    public void handleAlarmSnapshot(List<Alarm> alarms) {
        alarms.forEach(alarm -> processAlarm(alarm, true));
    }

    @Override
    public void handleNewOrUpdatedAlarm(Alarm alarm) {
        processAlarm(alarm, true);
    }

    @Override
    public void handleDeletedAlarm(int alarmId, String reductionKey) {
        // TODO: Anything needed here?
    }

    @Override
    public List<InventoryObject> getInventory() {
        waitForInit();

        rwLock.readLock().lock();
        try {
            return ImmutableList.copyOf(inventoryObjects);
        } finally {
            rwLock.readLock().unlock();
        }
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
        // pass - we're always ready
    }
}
