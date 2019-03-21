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

package org.opennms.oce.datasource.common;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * A thread-safe registry for maintaining a set of handlers.
 *
 * @param <T> handler type
 */
public class HandlerRegistry<T> {
    private static final Logger LOG = LoggerFactory.getLogger(HandlerRegistry.class);

    private final ReadWriteLock handlerLock = new ReentrantReadWriteLock();
    private final Set<T> handlers = new HashSet<>();

    public void forEach(Consumer<T> consumer) {
        handlerLock.readLock().lock();
        try {
            handlers.forEach(t -> {
                try {
                    consumer.accept(t);
                } catch (Exception e) {
                    LOG.error("Error occurred on handler {}: {}", t, e.getMessage(), e);
                }
            });
        } finally {
            handlerLock.readLock().unlock();
        }
    }

    /**
     * Register the handler, and invoke the given callack while the write lock is held.
     *
     * This can be used to prevent callbacks to the handler (provided they are done using #forEach),
     * until the callback is completed.
     *
     * @param handler handler to register
     * @param withLock callback to make while the lock is held
     */
    public void register(T handler, Consumer<Void> withLock) {
        handlerLock.writeLock().lock();
        try {
            handlers.add(handler);
            withLock.accept(null);
        } finally {
            handlerLock.writeLock().unlock();
        }
    }

    public void register(T handler) {
        handlerLock.writeLock().lock();
        try {
            handlers.add(handler);
        } finally {
            handlerLock.writeLock().unlock();
        }
    }

    public void unregister(T handler) {
        handlerLock.writeLock().lock();
        try {
            handlers.remove(handler);
        } finally {
            handlerLock.writeLock().unlock();
        }
    }
}
