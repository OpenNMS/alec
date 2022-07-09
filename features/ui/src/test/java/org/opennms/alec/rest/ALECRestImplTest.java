package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Optional;

import javax.ws.rs.core.Response;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.data.DataStore;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class ALECRestImplTest {
    @Mock
    DataStore dataStore;
    @Mock
    BundleContext bundleContext;

    @Test
    public void testPing() {
        ALECRestImpl underTest = new ALECRestImpl(dataStore, bundleContext);
        try (Response result = underTest.ping()) {
            assertThat(Response.Status.OK.getStatusCode(), is(result.getStatus()));
            assertThat("pong!!", is(result.getEntity()));
        }
    }

    @Test
    public void testGetDB() {
        ALECRestImpl underTest = new ALECRestImpl(dataStore, bundleContext);
        when(dataStore.get(anyString(), anyString())).thenReturn(Optional.of("123"));

        try (Response result = underTest.getDB("key")) {
            assertThat(Response.Status.OK.getStatusCode(), is(result.getStatus()));
            assertThat("123", is(result.getEntity()));
        }
        verify(dataStore, times(1)).get(anyString(), anyString());
        verifyNoMoreInteractions(dataStore);
    }

    @Test
    public void testStoreDB() {
        ALECRestImpl underTest = new ALECRestImpl(dataStore, bundleContext);
        when(dataStore.put(anyString(), anyString(), anyString())).thenReturn(0L);

        try (Response result = underTest.storeDB("key", "body")) {
            assertThat(Response.Status.OK.getStatusCode(), is(result.getStatus()));
            assertThat(0L, is(result.getEntity()));
        }
        verify(dataStore, times(1)).put(anyString(), anyString(), anyString());
        verifyNoMoreInteractions(dataStore);
    }

    @Test
    public void testSetParameter() throws InvalidSyntaxException {
        ALECRestImpl underTest = new ALECRestImpl(dataStore, bundleContext);

        ServiceReference<?> driverServiceReference = mock(ServiceReference.class);
        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ServiceReference<?>[] driverServiceReferences = {driverServiceReference};
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        Driver driver = mock(Driver.class);
        DBScanEngineFactory dbScanEngineFactory = mock(DBScanEngineFactory.class);

        when(dataStore.put(anyString(), anyString(), anyString())).thenReturn(0L);
        when(bundleContext.getAllServiceReferences(anyString(), isNull())).thenAnswer(invocation -> {
            if(EngineRegistry.class.getCanonicalName().equals(invocation.getArgument(0))){
                return driverServiceReferences;
            } else if (EngineFactory.class.getCanonicalName().equals(invocation.getArgument(0))){
                return engineServiceReferences;
            }
            return null;
        });
        when(bundleContext.getService(any(ServiceReference.class))).thenAnswer(invocation -> {
            if(driverServiceReference.equals(invocation.getArgument(0))){
                return driver;
            } else if (engineServiceReference.equals(invocation.getArgument(0))) {
                return dbScanEngineFactory;
            }

            return null;
        });
        when(dbScanEngineFactory.getName()).thenReturn("dbscan");

        try (Response result = underTest.setParameter(ParameterBuilderImpl.newBuilder().alpha(1d).beta(2d).epsilon(3d).distanceMeasure("distanceMeasure").engine("dbscan").build())) {
            assertThat(Response.Status.OK.getStatusCode(), is(result.getStatus()));
        }
        verify(dataStore, times(1)).put(anyString(), anyString(), anyString());
        verify(bundleContext, times(2)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(2)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(bundleContext, dataStore, driverServiceReference, engineServiceReference);
    }
}