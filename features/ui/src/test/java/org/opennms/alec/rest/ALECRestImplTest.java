package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceAndTimeDistanceMeasureFactory;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.alec.jackson.Agreement;
import org.opennms.alec.jackson.AgreementImpl;
import org.opennms.alec.jackson.Configuration;
import org.opennms.alec.jackson.EngineParameter;
import org.opennms.alec.jackson.EngineParameterImpl;
import org.opennms.alec.jackson.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class ALECRestImplTest {
    @Mock
    KeyValueStore<String> kvStore;
    @Mock
    private CompletableFuture<Long> future;
    @Mock
    private Driver driver;
    @Mock
    private EngineRegistry engineRegistry;
    @Mock
    private SituationDatasource situationDatasource;
    @Spy
    private ClusterEngineFactory clusterEngineFactory;

    private DBScanEngineFactory dbScanEngineFactory;
    private ObjectMapper objectMapper;
    private List<EngineFactory> engineFactories;
    private Map<String, DistanceMeasureFactory> distanceMeasureFactoryMap;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
        distanceMeasureFactoryMap = new HashMap<>() {{
            put("alarminspaceandtimedistance", new AlarmInSpaceAndTimeDistanceMeasureFactory());
        }};
        dbScanEngineFactory = new DBScanEngineFactory(DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                DBScanEngine.DEFAULT_EPSILON,
                DBScanEngine.DEFAULT_DISTANCE_MEASURE,
                new AlarmInSpaceAndTimeDistanceMeasureFactory(),
                distanceMeasureFactoryMap);
        when(engineRegistry.getEngineRegistry()).thenReturn(driver);
        engineFactories = Arrays.asList(dbScanEngineFactory, clusterEngineFactory);
    }

    @Test
    public void testPing() {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);
        try (Response result = underTest.ping()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            assertThat(result.getEntity(), equalTo("pong!!"));
        }
    }

    @Test
    public void testGetConfigurations() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));
        when(kvStore.get(eq(KeyEnum.AGREEMENT.toString()), anyString())).thenReturn(Optional.of(getAgreementAsString(getAgreement().build())));

        try (Response result = underTest.getConfigurations()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Configuration configuration = (Configuration) result.getEntity();
            assertThat(configuration.getEngineParameter().getAlpha(), equalTo(1d));
            assertThat(configuration.getEngineParameter().getBeta(), equalTo(2d));
            assertThat(configuration.getEngineParameter().getEpsilon(), equalTo(3d));
            assertThat(configuration.getEngineParameter().getDistanceMeasureName(), equalTo("distanceMeasureName"));
            assertThat(configuration.getEngineParameter().getEngineName(), equalTo("dbscan"));
            assertThat(configuration.getAgreement().isAgreed(), equalTo(Boolean.TRUE));
        }
        verify(kvStore, times(2)).get(anyString(), anyString());
        verifyNoMoreInteractions(kvStore);
    }

    @Test
    public void testGetEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));

        try (Response result = underTest.getEngineConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            EngineParameter engineParameter = (EngineParameter)  result.getEntity();
            assertThat(1d, equalTo(engineParameter.getAlpha()));
            assertThat(2d, equalTo(engineParameter.getBeta()));
            assertThat(3d, equalTo(engineParameter.getEpsilon()));
            assertThat("distanceMeasureName", equalTo(engineParameter.getDistanceMeasureName()));
            assertThat("dbscan", equalTo(engineParameter.getEngineName()));
        }
        verify(kvStore, times(1)).get(anyString(), anyString());
        verifyNoMoreInteractions(kvStore);
    }

    @Test
    public void testSetDbScanEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().build())));
    }

    @Test
    public void testSetClusterEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().engineName("cluster").build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter()
                .alpha(DBScanEngine.DEFAULT_ALPHA)
                .beta(DBScanEngine.DEFAULT_BETA)
                .epsilon(DBScanEngine.DEFAULT_EPSILON)
                .engineName("cluster")
                .distanceMeasureName("alarminspaceandtimedistance").build())));
    }

    @Test
    public void testSetEngineAlphaNullConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().alpha(null).build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().alpha(DBScanEngine.DEFAULT_ALPHA).build())));
    }

    @Test
    public void testSetAgreementConfiguration() {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setAgreementConfiguration(getAgreement().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
    }

    @Test
    public void testGetAgreementConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(kvStore, engineRegistry, engineFactories, situationDatasource);;

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
                .distanceMeasureName("distanceMeasureName")
                .engineName("dbscan");
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