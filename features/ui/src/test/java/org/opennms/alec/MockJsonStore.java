/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec;

import java.util.Map;
import java.util.Optional;
import java.util.OptionalLong;
import java.util.concurrent.CompletableFuture;

import org.opennms.features.distributed.kvstore.api.JsonStore;

public class MockJsonStore implements JsonStore {
    @Override
    public long put(String key, String value, String context) {
        return 0;
    }

    @Override
    public long put(String key, String value, String context, Integer ttlInSeconds) {
        return 0;
    }

    @Override
    public Optional<String> get(String key, String context) {
        return Optional.empty();
    }

    @Override
    public Optional<Optional<String>> getIfStale(String key, String context, long timestamp) {
        return Optional.empty();
    }

    @Override
    public OptionalLong getLastUpdated(String key, String context) {
        return null;
    }

    @Override
    public Map<String, String> enumerateContext(String context) {
        return null;
    }

    @Override
    public void delete(String key, String context) {

    }

    @Override
    public void truncateContext(String context) {

    }

    @Override
    public CompletableFuture<Long> putAsync(String key, String value, String context) {
        return null;
    }

    @Override
    public CompletableFuture<Long> putAsync(String key, String value, String context, Integer ttlInSeconds) {
        return null;
    }

    @Override
    public CompletableFuture<Optional<String>> getAsync(String key, String context) {
        return null;
    }

    @Override
    public CompletableFuture<Optional<Optional<String>>> getIfStaleAsync(String key, String context, long timestamp) {
        return null;
    }

    @Override
    public CompletableFuture<OptionalLong> getLastUpdatedAsync(String key, String context) {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public CompletableFuture<Map<String, String>> enumerateContextAsync(String context) {
        return null;
    }

    @Override
    public CompletableFuture<Void> deleteAsync(String key, String context) {
        return null;
    }

    @Override
    public CompletableFuture<Void> truncateContextAsync(String context) {
        return null;
    }
}
