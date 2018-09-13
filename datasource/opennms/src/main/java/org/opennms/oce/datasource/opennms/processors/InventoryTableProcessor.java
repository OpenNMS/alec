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

package org.opennms.oce.datasource.opennms.processors;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.processor.Processor;
import org.apache.kafka.streams.processor.ProcessorContext;
import org.apache.kafka.streams.processor.PunctuationType;
import org.apache.kafka.streams.state.KeyValueIterator;
import org.apache.kafka.streams.state.KeyValueStore;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.InventoryObjectBean;
import org.opennms.oce.datasource.common.InventoryObjectPeerRefBean;
import org.opennms.oce.datasource.common.InventoryObjectRelativeRefBean;
import org.opennms.oce.datasource.opennms.HandlerRegistry;
import org.opennms.oce.datasource.opennms.OpennmsDatasource;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Strings;

public class InventoryTableProcessor implements Processor<String, InventoryModelProtos.InventoryObjects> {
    private static final Logger LOG = LoggerFactory.getLogger(InventoryTableProcessor.class);

    private final HandlerRegistry<InventoryHandler> inventoryHandlers;
    private final long inventoryGcIntervalMs;
    private final long inventoryTtlMs;

    private ProcessorContext context;
    private KeyValueStore<String, InventoryModelProtos.InventoryObjects> kvStore;

    public InventoryTableProcessor(HandlerRegistry<InventoryHandler> inventoryHandlers, long inventoryGcIntervalMs, long inventoryTtlMs) {
        this.inventoryHandlers = Objects.requireNonNull(inventoryHandlers);
        this.inventoryGcIntervalMs = inventoryGcIntervalMs;
        this.inventoryTtlMs = inventoryTtlMs;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void init(ProcessorContext context) {
        // keep the processor context locally because we need it in punctuate() and commit()
        this.context = context;

        // retrieve the key-value store
        kvStore = (KeyValueStore) context.getStateStore(OpennmsDatasource.INVENTORY_STORE);

        // schedule a punctuate() method based on clock time
        this.context.schedule(inventoryGcIntervalMs, PunctuationType.WALL_CLOCK_TIME, (timestamp) -> {
            LOG.debug("onPunctuate({})", timestamp);
            final Set<String> keysToDelete = new HashSet<>();
            try (KeyValueIterator<String, InventoryModelProtos.InventoryObjects> iter = this.kvStore.all()) {
                while (iter.hasNext()) {
                    KeyValue<String, InventoryModelProtos.InventoryObjects> entry = iter.next();
                    if (entry.value.getExpiresAt() > 0 && entry.value.getExpiresAt() <= timestamp) {
                        LOG.debug("Deleting expired inventory for key: {} with expiry: {} at: {}", entry.key, entry.value.getExpiresAt(), timestamp);
                        keysToDelete.add(entry.key);
                    }
                }
            }

            final List<InventoryModelProtos.InventoryObjects> inventoryObjects = new ArrayList<>();
            keysToDelete.forEach(key -> {
                final InventoryModelProtos.InventoryObjects deletedIos = this.kvStore.delete(key);
                if (deletedIos != null) {
                    inventoryObjects.add(deletedIos);
                }
            });

            if (inventoryObjects.size() > 0) {
                inventoryHandlers.forEach(h -> {
                    try {
                        h.onInventoryRemoved(toInventory(inventoryObjects));
                    } catch (Exception e) {
                        LOG.error("onInventoryRemoved() call failed with inventory: {} on handler: {}", inventoryObjects, h, e);
                    }
                });
            }

            // commit the current processing progress
            context.commit();
        });
    }

    @Override
    public void process(String key, InventoryModelProtos.InventoryObjects inventory) {
        if (inventory == null) {
            final InventoryModelProtos.InventoryObjects ios = this.kvStore.get(key);
            if (ios == null) {
                LOG.info("No inventory found for key: {}", key);
            } else {
                this.kvStore.put(key, InventoryModelProtos.InventoryObjects.newBuilder(ios)
                        .setExpiresAt(context.timestamp() + inventoryTtlMs)
                        .build());
            }
        } else {
            this.kvStore.put(key, inventory);
            inventoryHandlers.forEach(h -> {
                try {
                    h.onInventoryAdded(toInventory(Collections.singletonList(inventory)));
                } catch (Exception e) {
                    LOG.error("onInventoryAdded() call failed with inventory: {} on handler: {}", inventory, h, e);
                }
            });
        }
    }

    @Override
    public void punctuate(long timestamp) {
        // this method is deprecated and should not be used anymore
    }

    @Override
    public void close() {
        // pass, no external resources managed by this processor
    }

    public static List<InventoryObject> toInventory(List<InventoryModelProtos.InventoryObjects> listOfIos) {
        final List<InventoryObject> inventory = new ArrayList<>();
        for (InventoryModelProtos.InventoryObjects ios : listOfIos) {
            for (InventoryModelProtos.InventoryObject io : ios.getInventoryObjectList()) {
                inventory.add(toInventory(io));
            }
        }
        return inventory;
    }

    private static InventoryObject toInventory(InventoryModelProtos.InventoryObject io) {
        final InventoryObjectBean ioBean = new InventoryObjectBean();
        ioBean.setId(io.getId());
        ioBean.setType(io.getType());

        // Optional fields
        if (!Strings.isNullOrEmpty(io.getParentId())) {
            ioBean.setParentId(io.getParentId());
        }
        if (!Strings.isNullOrEmpty(io.getParentType())) {
            ioBean.setParentType(io.getParentType());
        }
        if (!Strings.isNullOrEmpty(io.getFriendlyName())) {
            ioBean.setFriendlyName(io.getFriendlyName());
        }

        for (InventoryModelProtos.InventoryObjectPeerRef peerRef : io.getPeerList()) {
            final InventoryObjectPeerRefBean ioPeerRefBean = new InventoryObjectPeerRefBean();
            ioPeerRefBean.setType(peerRef.getType());
            ioPeerRefBean.setId(peerRef.getId());
            ioPeerRefBean.setEndpoint(InventoryModelProtos.InventoryObjectPeerEndpoint.A.equals(peerRef.getEndpoint()) ? InventoryObjectPeerEndpoint.A : InventoryObjectPeerEndpoint.Z);
            ioBean.getPeers().add(ioPeerRefBean);
        }

        for (InventoryModelProtos.InventoryObjectRelativeRef relativeRef : io.getRelativeList()) {
            final InventoryObjectRelativeRefBean ioRelativeRefBean = new InventoryObjectRelativeRefBean();
            ioRelativeRefBean.setId(relativeRef.getId());
            ioRelativeRefBean.setType(relativeRef.getType());
            ioBean.getRelatives().add(ioRelativeRefBean);
        }

        return ioBean;
    }
}
