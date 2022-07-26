package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.jackson.Agreement;
import org.opennms.alec.jackson.AgreementImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class AgreementImplTest {
    private static final Logger LOG = LoggerFactory.getLogger(AgreementImplTest.class);
    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void serializeSimpleString() throws JsonProcessingException {
        Agreement agreement = AgreementImpl.newBuilder()
                .agreed(Boolean.TRUE)
                .build();
        String json = objectMapper.writeValueAsString(agreement);
        LOG.info("Serializing a plain String: {}", json);

        assertThat(json, equalTo("{\"agreed\":true}"));
    }

    @Test
    public void deserializeSimpleStringBuilder() throws JsonProcessingException {
        String json = "{\"agreed\":true}";
        Agreement agreement = objectMapper.readValue(json, Agreement.class);
        LOG.info("Deserialize agreement: {}", agreement.toString());

        assertThat(Boolean.TRUE, equalTo(agreement.isAgreed()));
    }
}