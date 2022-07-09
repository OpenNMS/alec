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

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import javax.sql.DataSource;

public class DataStore {
    private static final String TABLE_NAME = "alec";
    private static final String VALUE_COLUMN = "value";
    private static final String KEY_COLUMN = "key";
    private static final String VERSION = "version";
    private static final String LAST_UPDATED_COLUMN = "last_updated";
    private static final String EXPIRES_AT_COLUMN = "expires_at";
    private static final String CONSTRAINT_PK = "alec_pkey";

    private final DataSource dataSource;

    public DataStore(DataSource dataSource) {
        this.dataSource = Objects.requireNonNull(dataSource);
    }

    /**
     * Check the result set to see if it has already expired due to TTL but has not been cleaned up yet. In this case we
     * will want to treat the record as though it does not exist (it should be automatically cleaned up in the future).
     */
    private static boolean isExpired(ResultSet resultSet) throws SQLException {
        long now = System.currentTimeMillis();
        Timestamp expiresAt = resultSet.getTimestamp(EXPIRES_AT_COLUMN);

        return expiresAt != null && expiresAt.getTime() < now;
    }

    private PreparedStatement getSelectStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format("SELECT %s, %s FROM %s WHERE %s = ? AND %s = ?",
                VALUE_COLUMN, EXPIRES_AT_COLUMN, TABLE_NAME, KEY_COLUMN, VERSION));
    }

    private PreparedStatement getUpsertStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format(
                "INSERT INTO %s (%s, %s, %s, %s, %s) VALUES (?, ?, ?, ?, ?) " +
                        "ON CONFLICT ON CONSTRAINT " + CONSTRAINT_PK +
                        " DO UPDATE SET %s = ?, %s = ?, %s = ?",
                TABLE_NAME, KEY_COLUMN, VERSION, LAST_UPDATED_COLUMN,
                EXPIRES_AT_COLUMN, VALUE_COLUMN, LAST_UPDATED_COLUMN, EXPIRES_AT_COLUMN, VALUE_COLUMN
        ));
    }

    private PreparedStatement getLastUpdatedStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format("SELECT %s, %s FROM %s WHERE %s = ? AND %s = ?",
                LAST_UPDATED_COLUMN, EXPIRES_AT_COLUMN, TABLE_NAME, KEY_COLUMN, VERSION));
    }

    private PreparedStatement getEnumerateStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format("SELECT %s, %s, %s FROM %s WHERE %s = ?",
                KEY_COLUMN, VALUE_COLUMN, EXPIRES_AT_COLUMN, TABLE_NAME, VERSION));
    }

    private PreparedStatement getDeleteStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format("DELETE FROM %s WHERE %s = ? AND %s = ?",
                TABLE_NAME, KEY_COLUMN, VERSION));
    }

    private PreparedStatement getTruncateStatement(Connection connection) throws SQLException {
        return connection.prepareStatement(String.format("DELETE FROM %s WHERE %s = ?",
                TABLE_NAME, VERSION));
    }

    public long put(String key, String value, String version) {
        return put(key, value, version, null);
    }

    public long put(String key, String value, String version, Integer ttlInSeconds) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(value);

        long now = System.currentTimeMillis();

        withStatement(this::getUpsertStatement, upsertStatement -> {
            // The below sets the prepared values for both the INSERT and UPDATE cases hence some values being
            // repeated
            upsertStatement.setString(1, key);
            upsertStatement.setString(2, version);
            upsertStatement.setTimestamp(3, new java.sql.Timestamp(now));
            upsertStatement.setTimestamp(6, new java.sql.Timestamp(now));

            if (ttlInSeconds != null) {
                long expireTime = now + TimeUnit.MILLISECONDS.convert(ttlInSeconds, TimeUnit.SECONDS);
                upsertStatement.setTimestamp(4, new java.sql.Timestamp(expireTime));
                upsertStatement.setTimestamp(7, new java.sql.Timestamp(expireTime));
            } else {
                upsertStatement.setNull(4, Types.DATE);
                upsertStatement.setNull(7, Types.DATE);
            }

            upsertStatement.setObject(5, value);
            upsertStatement.setObject(8, value);
            return upsertStatement.execute();
        });

        return now;
    }

    public Optional<String> get(String key, String version) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(version);

        return withStatement(this::getSelectStatement, selectStatement -> {
            selectStatement.setString(1, key);
            selectStatement.setString(2, version);

            try (ResultSet resultSet = selectStatement.executeQuery()) {
                if (!resultSet.next()) {
                    return Optional.empty();
                }

                // Return an empty result if we find an expired record
                if (isExpired(resultSet)) {
                    return Optional.empty();
                }

                return Optional.of(resultSet.getString(VALUE_COLUMN));
            }
        });
    }

    private <U> U withStatement(ConnectionToStatement connectionToStatement, StatementToResult<U> statementToResult) {
        try (Connection connection = dataSource.getConnection()) {
            try (PreparedStatement statement = connectionToStatement.getStatement(connection)) {
                return statementToResult.getResult(statement);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @FunctionalInterface
    private interface StatementToResult<T> {
        T getResult(PreparedStatement statement) throws SQLException;
    }

    @FunctionalInterface
    private interface ConnectionToStatement {
        PreparedStatement getStatement(Connection connection) throws SQLException;
    }
}
