/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

package org.opennms.e2e.grafana;

import java.io.File;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.opennms.e2e.grafana.model.DataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Throwables;

import okhttp3.Credentials;

public class GrafanaRestClient {
    private static final Logger LOG = LoggerFactory.getLogger(GrafanaRestClient.class);

    public static final String DEFAULT_USERNAME = "admin";

    public static final String DEFAULT_PASSWORD = "admin";

    private final URL url;
    private final String username;
    private final String password;

    public GrafanaRestClient(InetSocketAddress addr) throws MalformedURLException {
        this(new URL(String.format("http://%s:%d/", addr.getHostString(), addr.getPort())));
    }

    public GrafanaRestClient(URL url) {
        this(url, DEFAULT_USERNAME, DEFAULT_PASSWORD);
    }

    public GrafanaRestClient(URL url, String username, String password) {
        this.url = Objects.requireNonNull(url);
        this.username = Objects.requireNonNull(username);
        this.password = Objects.requireNonNull(password);
    }

    private WebTarget getTarget() {
        final Client client = ClientBuilder.newClient();
        return client.target(url.toString());
    }

    private Invocation.Builder getBuilder(final WebTarget target) {
        Invocation.Builder builder = target.request();
        builder = builder.header("Authorization", Credentials.basic(username, password));
        return builder;
    }

    private String doGet(WebTarget target) {
        LOG.info("Making request to target: {}", target.getUri());
        return getBuilder(target).accept(MediaType.APPLICATION_JSON).get(String.class);
    }

    public List<DataSource> getDataSources() {
        final String json = doGet(getTarget().path("api").path("datasources"));
        return getDataSourcesFromJson(json);
    }

    public void addDataSource(DataSource datasource) {
        final WebTarget target = getTarget().path("api").path("datasources");
        final Response response = getBuilder(target).post(Entity.json(datasource));
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Add failed with %d: %s", response.getStatus(), response));
        }
    }

    public void addFMDataSource(String dataSourceName) {
        DataSource dataSource = new DataSource()
                .setName(dataSourceName)
                .setType("opennms-helm-fault-datasource")
                .setUrl("http://opennms:8980/opennms")
                .setBasicAuth(true)
                .setBasicAuthUser("admin")
                .setBasicAuthPassword("admin")
                .setAccess("proxy");
        addDataSource(dataSource);
    }

    public void deleteDataSource(String name) {
        final WebTarget target = getTarget().path("api").path("datasources").path("name").path(name);
        getBuilder(target).delete();
    }

    public void deleteDashboard(String uid) {
        final WebTarget target = getTarget().path("api").path("dashboards").path("uid").path(uid);
        getBuilder(target).delete();
    }

    public void addFMDasboard(String title, String dataSource) throws IOException {
        final WebTarget target = getTarget().path("api").path("dashboards").path("db");
        File fmDashboardJsonFile = new File(getClass().getClassLoader().getResource("FMDashboard.json").getFile());
        List<String> fmDashboardJsonLines = Files.readAllLines(Paths.get(fmDashboardJsonFile.getPath()));
        StringBuilder fmDashboardJson = new StringBuilder();
        fmDashboardJsonLines.forEach(line -> fmDashboardJson.append(line).append("\n"));

        final Response response = getBuilder(target).post(Entity.json(fmDashboardJson.toString()
                .replaceAll("%DATA_SOURCE%", dataSource)
                .replaceAll("%TITLE%", title)
                .replaceAll("%UID%", title)));

        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Add failed with %d: %s", response.getStatus(), response));
        }
    }

    private List<DataSource> getDataSourcesFromJson(String json) {
        try {
            return Arrays.asList(new ObjectMapper()
                    .readerFor(DataSource[].class)
                    .readValue(json));
        } catch (IOException e) {
            throw Throwables.propagate(e);
        }
    }

    public void setPluginStatus(String plugin, boolean status) {
        final WebTarget target = getTarget()
                .path("api")
                .path("plugins")
                .path(Objects.requireNonNull(plugin))
                .path("settings");
        final Response response = getBuilder(target).post(Entity.json("{\"enabled\": " + status + "}"));

        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Plugin config for %s failed with %d: %s", plugin,
                    response.getStatus(), response));
        }
    }
}
