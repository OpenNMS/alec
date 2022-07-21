package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

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
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.alec.jackson.Agreement;
import org.opennms.alec.jackson.AgreementImpl;
import org.opennms.alec.jackson.Configuration;
import org.opennms.alec.jackson.EngineParameter;
import org.opennms.alec.jackson.EngineParameterImpl;
import org.opennms.alec.jackson.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class ALECRestImplTest {
    @Mock
    BundleContext bundleContext;
    @Mock
    KeyValueStore<String> kvStore;
    @Mock
    private CompletableFuture<Long> future;
    @Mock
    private Driver driver;
    @Mock
    private EngineRegistry engineRegistry;

    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
        when(engineRegistry.getEngineRegistry()).thenReturn(driver);
    }

    @Test
    public void testPing() {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);
        try (Response result = underTest.ping()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            assertThat(result.getEntity(), equalTo("pong!!"));
        }
    }

    @Test
    public void testGetConfigurations() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));
        when(kvStore.get(eq(KeyEnum.AGREEMENT.toString()), anyString())).thenReturn(Optional.of(getAgreementAsString(getAgreement().build())));

        try (Response result = underTest.getConfigurations()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Configuration configuration = (Configuration) result.getEntity();
            assertThat(configuration.getEngineParameter().getAlpha(), equalTo(1d));
            assertThat(configuration.getEngineParameter().getBeta(), equalTo(2d));
            assertThat(configuration.getEngineParameter().getEpsilon(), equalTo(3d));
            assertThat(configuration.getEngineParameter().getDistanceMeasure(), equalTo("distanceMeasure"));
            assertThat(configuration.getEngineParameter().getEngine(), equalTo("dbscan"));
            assertThat(configuration.getAgreement().isAgreed(), equalTo(Boolean.TRUE));
        }
        verify(kvStore, times(2)).get(anyString(), anyString());
        verifyNoMoreInteractions(kvStore);
    }

    @Test
    public void testGetEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));

        try (Response result = underTest.getEngineConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            EngineParameter engineParameter = (EngineParameter)  result.getEntity();
            assertThat(1d, equalTo(engineParameter.getAlpha()));
            assertThat(2d, equalTo(engineParameter.getBeta()));
            assertThat(3d, equalTo(engineParameter.getEpsilon()));
            assertThat("distanceMeasure", equalTo(engineParameter.getDistanceMeasure()));
            assertThat("dbscan", equalTo(engineParameter.getEngine()));
        }
        verify(kvStore, times(1)).get(anyString(), anyString());
        verifyNoMoreInteractions(kvStore);
    }

    @Test
    public void testSetEngineConfiguration() throws InvalidSyntaxException, JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        DBScanEngineFactory dbScanEngineFactory = spy(DBScanEngineFactory.class);

        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);
        when(bundleContext.getAllServiceReferences(anyString(), isNull())).thenAnswer(invocation -> {
            if (EngineFactory.class.getCanonicalName().equals(invocation.getArgument(0))){
                return engineServiceReferences;
            }
            return null;
        });
        when(bundleContext.getService(any(ServiceReference.class))).thenAnswer(invocation -> {
            if (engineServiceReference.equals(invocation.getArgument(0))) {
                return dbScanEngineFactory;
            }

            return null;
        });
        when(driver.getMetrics()).thenReturn(new MetricRegistry());

        try (Response result = underTest.setEngineConfiguration(getParameter().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verify(bundleContext, times(1)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(1)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(kvStore, bundleContext, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().build())));
    }

    @Test
    public void testSetEngineAlphaNullConfiguration() throws InvalidSyntaxException, JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        DBScanEngineFactory dbScanEngineFactory = spy(DBScanEngineFactory.class);

        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);
        when(bundleContext.getAllServiceReferences(anyString(), isNull())).thenAnswer(invocation -> {
            if (EngineFactory.class.getCanonicalName().equals(invocation.getArgument(0))){
                return engineServiceReferences;
            }
            return null;
        });
        when(bundleContext.getService(any(ServiceReference.class))).thenAnswer(invocation -> {
            if (engineServiceReference.equals(invocation.getArgument(0))) {
                return dbScanEngineFactory;
            }

            return null;
        });
        when(driver.getMetrics()).thenReturn(new MetricRegistry());

        try (Response result = underTest.setEngineConfiguration(getParameter().alpha(null).build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verify(bundleContext, times(1)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(1)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(kvStore, bundleContext, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().alpha(DBScanEngine.DEFAULT_ALPHA).build())));
    }

    @Test
    public void testSetAgreementConfiguration() {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setAgreementConfiguration(getAgreement().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
    }

    @Test
    public void testGetAgreementConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(bundleContext, kvStore, engineRegistry);

        when(kvStore.get(anyString(), anyString())).thenReturn(Optional.ofNullable(getAgreementAsString(getAgreement().build())));

        try (Response result = underTest.getAgreementConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Agreement agreement = (Agreement)  result.getEntity();
            assertThat(Boolean.TRUE, equalTo(agreement.isAgreed()));
        }
    }

    private EngineParameterImpl.Builder getParameter() {
        return EngineParameterImpl.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasure("distanceMeasure")
                .engine("dbscan");
    }

    private AgreementImpl.Builder getAgreement() {
        return AgreementImpl.newBuilder()
                .agreed(true);
    }

    private String getParameterAsString(EngineParameter engineParameter) throws JsonProcessingException {
        return objectMapper.writeValueAsString(engineParameter);
    }

    private String getAgreementAsString(Agreement agreement) throws JsonProcessingException {
        return objectMapper.writeValueAsString(agreement);
    }
}