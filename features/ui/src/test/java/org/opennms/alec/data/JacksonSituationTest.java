package org.opennms.alec.data;


import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class JacksonSituationTest {
    private static final Logger LOG = LoggerFactory.getLogger(JacksonSituationTest.class);
    private ObjectMapper objectMapper;

    @Before
    public void setUp() throws Exception {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        Situation situation = JacksonSituation.newBuilder()
                .id("dc9c45d2-140b-4b36-a992-fe59c7b65bf6")
                .alarms(Collections.EMPTY_SET)
                .creationTime(1l)
                .resourceKeys(Collections.emptyList())
                .diagnosticText("diagnosticText")
                .severity(Severity.MINOR)
                .build();
        String json = objectMapper.writeValueAsString(situation);
        LOG.info("Serializing a plain String: {}", json);

        assertThat(json, equalTo("{\"id\":\"dc9c45d2-140b-4b36-a992-fe59c7b65bf6\",\"creationTime\":1,\"resourceKeys\":[],\"alarms\":[],\"severity\":\"MINOR\",\"diagnosticText\":\"diagnosticText\"}"));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        String json = "[{\"id\": \"dc9c45d2-140b-4b36-a992-fe59c7b65bf6\", \"alarms\": [{\"id\": \"uei.opennms.org/provisioner/provisioningAdapterFailed::Dynamic Reverse DNS provisioning failed: null\", \"time\": 1657824496658, \"clear\": false, \"nodeId\": 2, \"summary\": \"\\n            <p>A provisioning adapter failed for host.</p>\\n        \", \"severity\": \"MAJOR\", \"description\": \"A provisioning adapter failed for host  with the following condition: Dynamic Reverse DNS provisioning failed: null.<p>\", \"inventoryObjectId\": \"test:1655254874584\", \"inventoryObjectType\": \"node\"}, {\"id\": \"uei.opennms.org/provisioner/provisioningAdapterFailed::Dynamic DNS provisioning failed: org.xbill.DNS.TextParseException: '': empty name\", \"time\": 1657824496622, \"clear\": false, \"nodeId\": 2, \"summary\": \"\\n            <p>A provisioning adapter failed for host.</p>\\n        \", \"severity\": \"MAJOR\", \"description\": \"A provisioning adapter failed for host  with the following condition: Dynamic DNS provisioning failed: org.xbill.DNS.TextParseException: '': empty name.<p>\", \"inventoryObjectId\": \"test:1655254874584\", \"inventoryObjectType\": \"node\"}], \"severity\": \"CRITICAL\", \"creationTime\": 1657740131523, \"resourceKeys\": [], \"diagnosticText\": null}]";
        List<JacksonSituation> situations = objectMapper.readValue(json, new TypeReference<>() {});
        LOG.info("Deserialize situation: {}", situations.toString());

//        assertThat(1d, equalTo(situation.getAlpha()));
//        assertThat(2d, equalTo(situation.getBeta()));
//        assertThat(3d, equalTo(situation.getEpsilon()));
//        assertThat("test", equalTo(situation.getDistanceMeasure()));
//        assertThat("dbscan", equalTo(situation.getEngine()));
    }

}