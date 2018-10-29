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
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.HandlerRegistry;

/**
 * TODO: We need to periodically refresh the inventory here - as there
 * is currently no way for getting callbacks when the inventory changes.
 */
public class DirectInventoryDatasource implements InventoryDatasource {

    private final HandlerRegistry<InventoryHandler> inventoryHandlers = new HandlerRegistry<>();

    private List<InventoryObject> inventoryObjects = new LinkedList<>();

    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    private final NodeDao nodeDao;

    public DirectInventoryDatasource(NodeDao nodeDao) {
        this.nodeDao = Objects.requireNonNull(nodeDao);
    }

    public void init() {
        /// Populate the map with the current set of inventory
        rwLock.writeLock().lock();
        try {
            inventoryObjects.clear();
            nodeDao.getNodes().forEach(n -> inventoryObjects.addAll(Mappers.toInventory(n)));
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    @Override
    public List<InventoryObject> getInventory() {
        return inventoryObjects;
    }

    @Override
    public List<InventoryObject> getInventoryAndRegisterHandler(InventoryHandler handler) {
        final List<InventoryObject> ios = new ArrayList<>();
        inventoryHandlers.register(handler, (h) -> ios.addAll(getInventory()));
        return ios;
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
