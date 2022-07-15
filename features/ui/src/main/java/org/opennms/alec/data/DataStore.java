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

package org.opennms.alec.data;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.OptionalLong;
import java.util.concurrent.CompletableFuture;

import javax.sql.DataSource;

import org.opennms.integration.api.v1.distributed.KeyValueStore;

public class DataStore implements KeyValueStore<String> {

    private static final String VALUE_COLUMN = "value";
    private static final String KEY_COLUMN = "key";
    private static final String CONTEXT_COLUMN = "context";
    private static final String LAST_UPDATED_COLUMN = "last_updated";
    private static final String EXPIRES_AT_COLUMN = "expires_at";

    private final DataSource dataSource;

    public DataStore(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public long put(String key, String value, String context) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(value);

        long now = System.currentTimeMillis();

        try {
            PreparedStatement upsertStatement = dataSource.getConnection().prepareStatement(String.format(
                    "INSERT INTO %s (%s, %s, %s, %s, %s) VALUES (?, ?, ?, ?, ?::JSON) ON " +
                            "CONFLICT ON CONSTRAINT " + getPkConstraintName() + " DO UPDATE SET %s = ?, %s = ?, %s = ?::JSON",
                            getTableName(), KEY_COLUMN, CONTEXT_COLUMN, LAST_UPDATED_COLUMN,
                    EXPIRES_AT_COLUMN, VALUE_COLUMN, LAST_UPDATED_COLUMN, EXPIRES_AT_COLUMN, VALUE_COLUMN));

            upsertStatement.setString(1, key);
            upsertStatement.setString(2, context);
            upsertStatement.setTimestamp(3, new java.sql.Timestamp(now));
            upsertStatement.setNull(4, Types.DATE);
            upsertStatement.setObject(5, value);
            upsertStatement.setTimestamp(6, new java.sql.Timestamp(now));
            upsertStatement.setNull(7, Types.DATE);
            upsertStatement.setObject(8, value);
            upsertStatement.execute();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return now;
    }

    @Override
    public long put(String s, String s2, String s1, Integer integer) {
        return 0;
    }

    @Override
    public Optional get(String key, String context) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(context);
        try {
            PreparedStatement selectStatement = dataSource.getConnection().prepareStatement(String.format(
                    "SELECT %s, %s FROM %s WHERE %s = ? AND %s = ?",
                    VALUE_COLUMN, EXPIRES_AT_COLUMN, getTableName(), KEY_COLUMN, CONTEXT_COLUMN));

            selectStatement.setString(1, key);
            selectStatement.setString(2, context);

            try (ResultSet resultSet = selectStatement.executeQuery()) {
                if (!resultSet.next()) {
                    return Optional.empty();
                }

                return Optional.of(resultSet.getString(VALUE_COLUMN));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    private String getPkConstraintName() {
        return "pk_kvstore_jsonb";
    }

    private String getTableName() {
        return "kvstore_jsonb";
    }

    @Override
    public Optional<String> getIfStale(String s, String s1, long l) {
        return Optional.empty();
    }

    @Override
    public OptionalLong getLastUpdated(String s, String s1) {
        return null;
    }

    @Override
    public Map<String, String> enumerateContext(String s) {
        return null;
    }

    @Override
    public void delete(String s, String s1) {

    }

    @Override
    public void truncateContext(String s) {

    }

    @Override
    public CompletableFuture<Long> putAsync(String s, String s2, String s1) {
        return null;
    }

    @Override
    public CompletableFuture<Long> putAsync(String s, String s2, String s1, Integer integer) {
        return null;
    }

    @Override
    public CompletableFuture<Optional<String>> getAsync(String s, String s1) {
        return null;
    }

    @Override
    public CompletableFuture<Optional<String>> getIfStaleAsync(String s, String s1, long l) {
        return null;
    }

    @Override
    public CompletableFuture<OptionalLong> getLastUpdatedAsync(String s, String s1) {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public CompletableFuture<Map<String, String>> enumerateContextAsync(String s) {
        return null;
    }

    @Override
    public CompletableFuture<Void> deleteAsync(String s, String s1) {
        return null;
    }

    @Override
    public CompletableFuture<Void> truncateContextAsync(String s) {
        return null;
    }
}
