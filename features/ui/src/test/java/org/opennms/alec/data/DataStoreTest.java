package org.opennms.alec.data;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.Optional;

import javax.sql.DataSource;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
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
        when(dataSource.getConnection()).thenReturn(connection);
    }

    @Test
    void testPut() throws SQLException {
        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        when(dataSource.getConnection().prepareStatement(anyString())).thenReturn(prepareStatement);
        long result = dataStore.put("key", "value", "ALEC_CONFIG");
        assertThat(result > 0L, is(true));
        verify(dataSource.getConnection()).prepareStatement(captor.capture());
        assertThat(captor.getValue(), equalTo("INSERT INTO kvstore_jsonb (key, context, last_updated, expires_at, value) VALUES (?, ?, ?, ?, ?::JSON) ON CONFLICT ON CONSTRAINT pk_kvstore_jsonb DO UPDATE SET last_updated = ?, expires_at = ?, value = ?::JSON"));
        verify(prepareStatement, times(1)).setString(eq(1), eq("key"));
        verify(prepareStatement, times(1)).setString(eq(2), eq("ALEC_CONFIG"));
        verify(prepareStatement, times(1)).setTimestamp(eq(3), any(Timestamp.class));
        verify(prepareStatement, times(1)).setNull(eq(4), eq(Types.DATE));
        verify(prepareStatement, times(1)).setObject(eq(5), eq("value"));
        verify(prepareStatement, times(1)).setTimestamp(eq(6), any(Timestamp.class));
        verify(prepareStatement, times(1)).setNull(eq(7), eq(Types.DATE));
        verify(prepareStatement, times(1)).setObject(eq(8), eq("value"));
        verify(prepareStatement, times(1)).execute();
        verifyNoMoreInteractions(prepareStatement);
    }

    @Test
    void testGet() throws SQLException {
        when(connection.prepareStatement(anyString())).thenReturn(prepareStatement);
        when(prepareStatement.executeQuery()).thenReturn(resultSet);
        when(resultSet.next()).thenReturn(true);
        when(resultSet.getString(anyString())).thenReturn("test");

        Optional<String> result = dataStore.get("key", "version");
        Assertions.assertEquals(Optional.of("test"), result);
    }
}