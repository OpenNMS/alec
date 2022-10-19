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
import org.opennms.alec.data.EngineParameter;
import org.opennms.alec.data.EngineParameterImpl;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceAndTimeDistanceMeasureFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceTimeDistanceMeasure;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class EngineRestImplTest {
    @Mock
    KeyValueStore<String> kvStore;
    @Mock
    private CompletableFuture<Long> future;
    @Mock
    private Driver driver;
    @Mock
    private EngineRegistry engineRegistry;
    @Spy
    private ClusterEngineFactory clusterEngineFactory;

    private ObjectMapper objectMapper;
    private List<EngineFactory> engineFactories;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
        Map<String, DistanceMeasureFactory> distanceMeasureFactoryMap = new HashMap<>() {{
            put("alarminspaceandtimedistance", new AlarmInSpaceAndTimeDistanceMeasureFactory());
        }};
        DBScanEngineFactory dbScanEngineFactory = new DBScanEngineFactory(DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON,
                DBScanEngine.DEFAULT_DISTANCE_MEASURE,
                new AlarmInSpaceAndTimeDistanceMeasureFactory(),
                distanceMeasureFactoryMap);
        when(engineRegistry.getEngineRegistry()).thenReturn(driver);
        engineFactories = Arrays.asList(dbScanEngineFactory, clusterEngineFactory);
    }

    @Test
    public void testGetEngineConfiguration() throws JsonProcessingException {
        EngineRestImpl underTest = new EngineRestImpl(kvStore, engineRegistry, engineFactories);
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));

        try (Response result = underTest.getEngineConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            EngineParameter engineParameter = (EngineParameter) result.getEntity();
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
    public void testGetEngineConfigurationNoContent() {
        EngineRestImpl underTest = new EngineRestImpl(kvStore, engineRegistry, engineFactories);
        when(kvStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.empty());

        try (Response result = underTest.getEngineConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.NO_CONTENT.getStatusCode()));
        }
        verify(kvStore, times(1)).get(anyString(), anyString());
        verifyNoMoreInteractions(kvStore);
    }

    @Test
    public void testSetDbScanEngineConfiguration() throws JsonProcessingException {
        EngineRestImpl underTest = new EngineRestImpl(kvStore, engineRegistry, engineFactories);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestUtils.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().build())));
    }

    @Test
    public void testSetClusterEngineConfiguration() throws JsonProcessingException {
        EngineRestImpl underTest = new EngineRestImpl(kvStore, engineRegistry, engineFactories);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().engineName("cluster").build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestUtils.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter()
                .alpha(DBScanEngine.DEFAULT_ALPHA)
                .beta(DBScanEngine.DEFAULT_BETA)
                .epsilon(AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON)
                .engineName("cluster")
                .distanceMeasureName("alarminspaceandtimedistance").build())));
    }

    @Test
    public void testSetEngineAlphaNullConfiguration() throws JsonProcessingException {
        EngineRestImpl underTest = new EngineRestImpl(kvStore, engineRegistry, engineFactories);

        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);
        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setEngineConfiguration(getParameter().alpha(null).build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
        }
        verify(kvStore, times(1)).putAsync(eq(KeyEnum.ENGINE.toString()), argumentCaptor.capture(), eq(ALECRestUtils.ALEC_CONFIG));
        verifyNoMoreInteractions(kvStore, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().alpha(DBScanEngine.DEFAULT_ALPHA).build())));
    }

    private EngineParameterImpl.Builder getParameter() {
        return EngineParameterImpl.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasureName("distanceMeasureName")
                .engineName("dbscan");
    }

    private String getParameterAsString(EngineParameter engineParameter) throws JsonProcessingException {
        return objectMapper.writeValueAsString(engineParameter);
    }
}