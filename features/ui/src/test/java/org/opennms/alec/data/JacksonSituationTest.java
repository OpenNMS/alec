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
import org.opennms.alec.datasource.api.Status;
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
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        Situation situation = JacksonSituation.newBuilder()
                .id("dc9c45d2-140b-4b36-a992-fe59c7b65bf6")
                .alarms(Collections.EMPTY_SET)
                .creationTime(1L)
                .resourceKeys(Collections.emptyList())
                .diagnosticText("diagnosticText")
                .severity(Severity.MINOR)
                .build();
        String json = objectMapper.writeValueAsString(situation);
        LOG.info("Serializing a plain String: {}", json);

        assertThat("{\"id\":\"dc9c45d2-140b-4b36-a992-fe59c7b65bf6\",\"creationTime\":1,\"resourceKeys\":[],\"alarms\":[],\"severity\":\"MINOR\",\"diagnosticText\":\"diagnosticText\",\"status\":\"CREATED\"}", equalTo(json));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        String json = "[{\"id\":\"dc9c45d2-140b-4b36-a992-fe59c7b65bf6\",\"creationTime\":1,\"resourceKeys\":[],\"alarms\":[],\"severity\":\"MINOR\",\"diagnosticText\":\"diagnosticText\",\"status\":\"CREATED\"}]";
        List<JacksonSituation> situations = objectMapper.readValue(json, new TypeReference<>() {
        });
        LOG.info("Deserialize situation: {}", situations.toString());
        assertThat(situations.size(), equalTo(1));
        assertThat(situations.get(0).getStatus(), equalTo(Status.CREATED));
    }

}