package org.opennms.e2e.grafana.model;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import java.io.IOException;

import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ModelTest {

    @Test
    public void canUnmarshalDatasources() throws IOException {
        final String dataSourceJson = "{\n" +
                "\t\"id\": 4,\n" +
                "\t\"orgId\": 1,\n" +
                "\t\"name\": \"minion-dev (FM)\",\n" +
                "\t\"type\": \"opennms-helm-fm-ds\",\n" +
                "\t\"typeLogoUrl\": \"public/img/icn-datasource.svg\",\n" +
                "\t\"access\": \"proxy\",\n" +
                "\t\"url\": \"https://nms.opennms.org:8443/opennms\",\n" +
                "\t\"basicAuthPassword\": \"p\",\n" +
                "\t\"basicAuthUser\": \"u\",\n" +
                "\t\"database\": \"\",\n" +
                "\t\"basicAuth\": true,\n" +
                "\t\"isDefault\": false,\n" +
                "\t\"jsonData\": null\n" +
                "}";

        DataSource expectedDs = new DataSource();
        expectedDs.setId(4);
        expectedDs.setOrgId(1);
        expectedDs.setName("minion-dev (FM)");
        expectedDs.setType("opennms-helm-fm-ds");
        expectedDs.setAccess("proxy");
        expectedDs.setUrl("https://nms.opennms.org:8443/opennms");
        expectedDs.setBasicAuthPassword("p");
        expectedDs.setBasicAuthUser("u");
        expectedDs.setDatabase("");
        expectedDs.setBasicAuth(true);
        expectedDs.setDefault(false);

        DataSource actualDs = new ObjectMapper()
                .readerFor(DataSource.class)
                .readValue(dataSourceJson);

        assertThat(expectedDs, equalTo(actualDs));
    }
}
