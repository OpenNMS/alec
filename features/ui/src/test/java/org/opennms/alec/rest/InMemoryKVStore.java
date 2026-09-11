/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
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

package org.opennms.alec.rest;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.OptionalLong;
import java.util.concurrent.CompletableFuture;

import org.opennms.integration.api.v1.distributed.KeyValueStore;

/**
 * Minimal in-memory KeyValueStore for unit tests. Covers just the operations
 * exercised by the bundle; OpenNMS's integration-api test fixtures aren't
 * pulled into this bundle as a dep.
 */
class InMemoryKVStore implements KeyValueStore<String> {
    private final Map<String, Map<String, String>> ctxs = new HashMap<>();

    @Override
    public long put(String key, String value, String context) {
        ctxs.computeIfAbsent(context, c -> new HashMap<>()).put(key, value);
        return System.currentTimeMillis();
    }

    @Override
    public long put(String key, String value, String context, Integer ttl) {
        return put(key, value, context);
    }

    @Override
    public Optional<String> get(String key, String context) {
        Map<String, String> ctx = ctxs.get(context);
        return ctx == null ? Optional.empty() : Optional.ofNullable(ctx.get(key));
    }

    @Override
    public Optional<String> getIfStale(String key, String context, long timestamp) {
        return get(key, context);
    }

    @Override
    public OptionalLong getLastUpdated(String key, String context) {
        return get(key, context).isPresent()
                ? OptionalLong.of(System.currentTimeMillis())
                : OptionalLong.empty();
    }

    @Override
    public Map<String, String> enumerateContext(String context) {
        Map<String, String> ctx = ctxs.get(context);
        return ctx == null ? new HashMap<>() : new HashMap<>(ctx);
    }

    @Override
    public void delete(String key, String context) {
        Map<String, String> ctx = ctxs.get(context);
        if (ctx != null) ctx.remove(key);
    }

    @Override
    public void truncateContext(String context) {
        ctxs.remove(context);
    }

    @Override
    public CompletableFuture<Long> putAsync(String key, String value, String context) {
        return CompletableFuture.completedFuture(put(key, value, context));
    }

    @Override
    public CompletableFuture<Long> putAsync(String key, String value, String context, Integer ttl) {
        return CompletableFuture.completedFuture(put(key, value, context, ttl));
    }

    @Override
    public CompletableFuture<Optional<String>> getAsync(String key, String context) {
        return CompletableFuture.completedFuture(get(key, context));
    }

    @Override
    public CompletableFuture<Optional<String>> getIfStaleAsync(String key, String context, long ts) {
        return CompletableFuture.completedFuture(getIfStale(key, context, ts));
    }

    @Override
    public CompletableFuture<OptionalLong> getLastUpdatedAsync(String key, String context) {
        return CompletableFuture.completedFuture(getLastUpdated(key, context));
    }

    @Override
    public String getName() {
        return "in-memory-test-kv";
    }

    @Override
    public CompletableFuture<Map<String, String>> enumerateContextAsync(String context) {
        return CompletableFuture.completedFuture(enumerateContext(context));
    }

    @Override
    public CompletableFuture<Void> deleteAsync(String key, String context) {
        delete(key, context);
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletableFuture<Void> truncateContextAsync(String context) {
        truncateContext(context);
        return CompletableFuture.completedFuture(null);
    }
}
