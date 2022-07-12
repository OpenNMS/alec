package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class ParameterImplTest {

    private static final Logger LOG = LoggerFactory.getLogger(ParameterImplTest.class);

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Parameter personName = ParameterImpl.newBuilder()
                .key("key")
                .value("value")
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasure("test")
                .engine("dbscan")
                .build();
        String json = mapper.writeValueAsString(personName);
        LOG.info("Serializing a plain String: {}", json);

        assertThat(json, equalTo("{\"key\":\"key\",\"value\":\"value\",\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0,\"distanceMeasure\":\"test\",\"engine\":\"dbscan\"}"));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String json = "{\"key\":\"key\",\"value\":\"value\",\"alpha\":1.0,\"beta\":2.0,\"epsilon\":3.0,\"distanceMeasure\":\"test\",\"engine\":\"dbscan\"}";
        Parameter parameter = mapper.readValue(json, Parameter.class);
        LOG.info("Deserialize parameter: {}", parameter.toString());

        assertThat(parameter.getKey(), equalTo("key"));
        assertThat(parameter.getValue(), equalTo("value"));
        assertThat(parameter.getAlpha(), equalTo(1d));
        assertThat(parameter.getBeta(), equalTo(2d));
        assertThat(parameter.getEpsilon(), equalTo(3d));
        assertThat(parameter.getDistanceMeasure(), equalTo("test"));
        assertThat(parameter.getEngine(), equalTo("dbscan"));
    }
}