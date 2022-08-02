package org.opennms.alec.engine.jackson;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.engine.api.EngineParameter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class JacksonEngineParameterTest {

    private static final Logger LOG = LoggerFactory.getLogger(JacksonEngineParameterTest.class);
    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        EngineParameter parameter = JacksonEngineParameter.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasureName("test")
                .engineName("dbscan")
                .build();
        String json = objectMapper.writeValueAsString(parameter);
        LOG.info("Serializing a plain String: {}", json);

        assertThat(json, equalTo("{\"engineName\":\"dbscan\",\"distanceMeasureName\":\"test\",\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0}"));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        String json = "{\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0,\"distanceMeasureName\":\"test\",\"engineName\":\"dbscan\"}";
        EngineParameter engineParameter = objectMapper.readValue(json, JacksonEngineParameter.class);
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
        EngineParameter engineParameter = objectMapper.readValue(json, JacksonEngineParameter.class);
        LOG.info("Deserialize parameter: {}", engineParameter.toString());

        assertThat(JacksonEngineParameter.DEFAULT_ALPHA, equalTo(engineParameter.getAlpha()));
        assertThat(JacksonEngineParameter.DEFAULT_BETA, equalTo(engineParameter.getBeta()));
        assertThat(JacksonEngineParameter.DEFAULT_ALARN_IN_SPACE_EPSILON, equalTo(engineParameter.getEpsilon()));
        assertThat(JacksonEngineParameter.DEFAULT_DISTANCE_MEASURE, equalTo(engineParameter.getDistanceMeasureName()));
        assertThat("dbscan", equalTo(engineParameter.getEngineName()));
    }

    @Test
    public void deserializeDefaultHellingerStringBuilder() throws JsonProcessingException {
        String json = "{\"engineName\":\"dbscan\",\"distanceMeasureName\":\"hellinger\"}";
        EngineParameter engineParameter = objectMapper.readValue(json, JacksonEngineParameter.class);
        LOG.info("Deserialize parameter: {}", engineParameter.toString());

        assertThat(JacksonEngineParameter.DEFAULT_ALPHA, equalTo(engineParameter.getAlpha()));
        assertThat(JacksonEngineParameter.DEFAULT_BETA, equalTo(engineParameter.getBeta()));
        assertThat(JacksonEngineParameter.DEFAULT_HELLINGER_EPSILON, equalTo(engineParameter.getEpsilon()));
        assertThat("hellinger", equalTo(engineParameter.getDistanceMeasureName()));
        assertThat("dbscan", equalTo(engineParameter.getEngineName()));
    }
}