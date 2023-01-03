package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.EngineParameter;
import org.opennms.alec.data.EngineParameterImpl;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.HellingerDistanceMeasure;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class EngineParameterImplTest {

    private static final Logger LOG = LoggerFactory.getLogger(EngineParameterImplTest.class);
    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        EngineParameter parameter = EngineParameterImpl.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasureName("test")
                .engineName("dbscan")
                .build();
        String json = objectMapper.writeValueAsString(parameter);
        LOG.info("Serializing a plain String: {}", json);

        assertThat(json, equalTo("{\"engineName\":\"dbscan\",\"distanceMeasureName\":\"test\",\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0,\"remoteUri\":null,\"token\":null,\"remote\":false}"));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        String json = "{\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0,\"distanceMeasureName\":\"test\",\"engineName\":\"dbscan\"}";
        EngineParameter engineParameter = objectMapper.readValue(json, EngineParameter.class);
        LOG.info("Deserialize parameter: {}", engineParameter.toString());

        assertThat(1d, equalTo(engineParameter.getAlpha()));
        assertThat(2d, equalTo(engineParameter.getBeta()));
        assertThat(3d, equalTo(engineParameter.getEpsilon()));
        assertThat("test", equalTo(engineParameter.getDistanceMeasureName()));
        assertThat("dbscan", equalTo(engineParameter.getEngineName()));
    }

    @Test
    public void deserializeDefaultStringBuilder() throws JsonProcessingException {
        String json = "{\"engineName\":\"dbscan\"}";
        EngineParameter engineParameter = objectMapper.readValue(json, EngineParameter.class);
        LOG.info("Deserialize parameter: {}", engineParameter.toString());

        assertThat(DBScanEngine.DEFAULT_ALPHA, equalTo(engineParameter.getAlpha()));
        assertThat(DBScanEngine.DEFAULT_BETA, equalTo(engineParameter.getBeta()));
        assertThat(null, equalTo(engineParameter.getEpsilon()));
        assertThat(DBScanEngine.DEFAULT_DISTANCE_MEASURE, equalTo(engineParameter.getDistanceMeasureName()));
        assertThat("dbscan", equalTo(engineParameter.getEngineName()));
    }

    @Test
    public void deserializeDefaultHellingerStringBuilder() throws JsonProcessingException {
        String json = "{\"engineName\":\"dbscan\",\"distanceMeasureName\":\"hellinger\"}";
        EngineParameter engineParameter = objectMapper.readValue(json, EngineParameter.class);
        LOG.info("Deserialize parameter: {}", engineParameter.toString());

        assertThat(DBScanEngine.DEFAULT_ALPHA, equalTo(engineParameter.getAlpha()));
        assertThat(DBScanEngine.DEFAULT_BETA, equalTo(engineParameter.getBeta()));
        assertThat(HellingerDistanceMeasure.DEFAULT_EPSILON, equalTo(engineParameter.getEpsilon()));
        assertThat("hellinger", equalTo(engineParameter.getDistanceMeasureName()));
        assertThat("dbscan", equalTo(engineParameter.getEngineName()));
    }
}