package org.opennms.alec.data;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.when;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

import javax.sql.DataSource;

import org.hamcrest.MatcherAssert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

class DataStoreTest {
    @Mock
    DataSource dataSource;
    @Mock
    private Connection connection;
    @Mock
    private PreparedStatement prepareStatement;
    @Mock
    private ResultSet resultSet;
    @InjectMocks
    DataStore dataStore;

    @BeforeEach
    void setUp() throws SQLException {
        MockitoAnnotations.initMocks(this);
        when(connection.prepareStatement(anyString())).thenReturn(prepareStatement);
        when(dataSource.getConnection()).thenReturn(connection);
        when(prepareStatement.executeQuery(anyString())).thenReturn(resultSet);
        when(prepareStatement.executeQuery()).thenReturn(resultSet);
        when(resultSet.next()).thenReturn(true);
        when(resultSet.getString(anyString())).thenReturn("test");
    }

    @Test
    void testPut() {
        long result = dataStore.put("key", "value", "version");
        MatcherAssert.assertThat(result > 0L, is(true));
    }

    @Test
    void testPut2() {
        long result = dataStore.put("key", "value", "version", 0);
        MatcherAssert.assertThat(result > 0L, is(true));
    }

    @Test
    void testGet() {
        Optional<String> result = dataStore.get("key", "version");
        Assertions.assertEquals(Optional.of("test"), result);
    }
}