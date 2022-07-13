package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Map;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.features.distributed.kvstore.api.JsonStore;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class ALECRestImplTest {
    @Mock
    JsonStore jsonStore;
    @Mock
    BundleContext bundleContext;

    private ObjectMapper objectMapper;

    @Before
    public void setUp() throws Exception {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testPing() {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        try (Response result = underTest.ping()) {
            assertThat(Response.Status.OK.getStatusCode(), equalTo(result.getStatus()));
            assertThat(result.getEntity(), equalTo("pong!!"));
        }
    }

    @Test
    public void testGetConfigurations() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        when(jsonStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString()));
        when(jsonStore.get(eq(KeyEnum.AGREEMENT.toString()), anyString())).thenReturn(Optional.of("agreement"));

        try (Response result = underTest.getConfigurations()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Map<KeyEnum, String> entity = (Map<KeyEnum, String>) result.getEntity();
            Parameter parameter = objectMapper.readValue(entity.get(KeyEnum.ENGINE), Parameter.class);
            String agreement = entity.get(KeyEnum.AGREEMENT);
            assertThat("agreement", equalTo(agreement));
            assertThat(1d, equalTo(parameter.getAlpha()));
            assertThat(2d, equalTo(parameter.getBeta()));
            assertThat(3d, equalTo(parameter.getEpsilon()));
            assertThat("distanceMeasure", equalTo(parameter.getDistanceMeasure()));
            assertThat("dbscan", equalTo(parameter.getEngine()));
        }
        verify(jsonStore, times(2)).get(anyString(), anyString());
        verifyNoMoreInteractions(jsonStore);
    }

    @Test
    public void testGetEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        when(jsonStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString()));
        when(jsonStore.get(eq(KeyEnum.AGREEMENT.toString()), anyString())).thenReturn(Optional.of("agreement"));

        try (Response result = underTest.getConfiguration(getKeyValueEngine().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Map<KeyEnum, String> entity = (Map<KeyEnum, String>) result.getEntity();
            Parameter parameter = objectMapper.readValue(entity.get(KeyEnum.ENGINE), Parameter.class);
            String agreement = entity.get(KeyEnum.AGREEMENT);
            assertThat("agreement", equalTo(agreement));
            assertThat(1d, equalTo(parameter.getAlpha()));
            assertThat(2d, equalTo(parameter.getBeta()));
            assertThat(3d, equalTo(parameter.getEpsilon()));
            assertThat("distanceMeasure", equalTo(parameter.getDistanceMeasure()));
            assertThat("dbscan", equalTo(parameter.getEngine()));
        }
        verify(jsonStore, times(2)).get(anyString(), anyString());
        verifyNoMoreInteractions(jsonStore);
    }

    @Test
    public void testSetConfiguration() throws InvalidSyntaxException, JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);

        ServiceReference<?> driverServiceReference = mock(ServiceReference.class);
        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ServiceReference<?>[] driverServiceReferences = {driverServiceReference};
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        Driver driver = mock(Driver.class);
        DBScanEngineFactory dbScanEngineFactory = mock(DBScanEngineFactory.class);

        ArgumentCaptor  argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(jsonStore.put(anyString(), anyString(), anyString())).thenReturn(0L);
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

        try (Response result = underTest.setConfiguration(KeyValueImpl.newBuilder().key(KeyEnum.ENGINE).value(getParameterAsString()).build())) {
            assertThat(Response.Status.OK.getStatusCode(), equalTo(result.getStatus()));
        }
        verify(jsonStore, times(1)).put(eq(KeyEnum.ENGINE.toString()), (String) argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verify(bundleContext, times(2)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(2)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(bundleContext, jsonStore, driverServiceReference, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString()));
    }

    private ParameterImpl.Builder getParameter() {
        return ParameterImpl.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasure("distanceMeasure")
                .engine("dbscan");
    }

    private String getParameterAsString() throws JsonProcessingException {
        return objectMapper.writeValueAsString(getParameter().build());
    }

    private KeyValueImpl.Builder getKeyValueEngine() throws JsonProcessingException {
        return KeyValueImpl.newBuilder()
                .key(KeyEnum.ENGINE)
                .value(getParameterAsString());
    }

    private KeyValueImpl.Builder getKeyValueAgreement() throws JsonProcessingException {
        return KeyValueImpl.newBuilder()
                .key(KeyEnum.AGREEMENT)
                .value(getParameterAsString());
    }

    private String getKeyValueEngineAsString() throws JsonProcessingException {
        return objectMapper.writeValueAsString(KeyValueImpl.newBuilder().key(KeyEnum.ENGINE).value(getParameterAsString()).build());
    }

    private String getKeyValueAgreementAsString() throws JsonProcessingException {
        return objectMapper.writeValueAsString(KeyValueImpl.newBuilder().key(KeyEnum.AGREEMENT).value("agreement").build());
    }
}