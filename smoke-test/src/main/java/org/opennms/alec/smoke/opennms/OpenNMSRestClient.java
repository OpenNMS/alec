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

package org.opennms.alec.smoke.opennms;

import static org.awaitility.Awaitility.await;

import java.io.File;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.opennms.alec.smoke.opennms.model.Alarm;
import org.opennms.alec.smoke.opennms.model.AlarmList;
import org.opennms.alec.smoke.opennms.model.Event;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

public class OpenNMSRestClient {

    private static final String DEFAULT_USERNAME = "admin";

    private static final String DEFAULT_PASSWORD = "admin";

    private final URL url;

    private final String authorizationHeader;

    public OpenNMSRestClient(InetSocketAddress addr) throws MalformedURLException {
        this(addr, DEFAULT_USERNAME, DEFAULT_PASSWORD);
    }

    public OpenNMSRestClient(URL url) {
        this(url, DEFAULT_USERNAME, DEFAULT_PASSWORD);
    }

    public OpenNMSRestClient(InetSocketAddress addr, String username, String password) throws MalformedURLException {
        this(new URL(String.format("http://%s:%d/opennms", addr.getHostString(), addr.getPort())), username, password);
    }

    public OpenNMSRestClient(URL url, String username, String password) {
        this.url = url;
        authorizationHeader = "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes());
    }

    public String getDisplayVersion() {
        try {
        final WebTarget target = getTarget().path("info");
        final String json = getBuilder(target).get(String.class);

        final ObjectMapper mapper = new ObjectMapper();
        
            JsonNode actualObj = mapper.readTree(json);
            return actualObj.get("displayVersion").asText();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendEvent(Event event) {
        final WebTarget target = getTarget().path("events");
        final Response response = getBuilder(target).post(Entity.json(event));
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Send event failed with %d: %s", response.getStatus(),
                    response));
        }
    }

    public List<Alarm> getAlarms() {
        final AlarmList alarmList = getBuilder(getTarget().path("alarms"))
                .accept(MediaType.APPLICATION_JSON)
                .get(AlarmList.class);
        return alarmList.getAlarms();
    }

    public List<Alarm> getSituations() {
        return getAlarms().stream()
                .filter(alarm -> alarm.getUei().equals("uei.opennms.org/alarms/situation"))
                .collect(Collectors.toList());
    }

    private boolean testForAlarmWithReductionKey(String reductionKey) {
        List<String> reductionKeys = getAlarms().stream()
                .map(Alarm::getReductionKey)
                .collect(Collectors.toList());
        return reductionKeys.contains(reductionKey);
    }

    private boolean hasActiveSituation() {
        List<Alarm> situations = getSituations();

        if (situations.isEmpty()) {
            return false;
        }

        return getSituations().stream()
                .anyMatch(alarm -> !alarm.getSeverity().equals("CLEARED"));
    }

    public void waitForOutstandingSituation() {
        await()
                .atMost(5, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .until(this::hasActiveSituation);
    }

    public void triggerAlarmsForCorrelation(int nodeId) {
        Event e1 = Event.genericAlarmEventOnNode(nodeId);
        sendEvent(e1);
        await().atMost(15, TimeUnit.SECONDS).until(() -> testForAlarmWithReductionKey(e1.reductionKey()));

        Event e2 = Event.genericAlarmEventOnNode(nodeId);
        sendEvent(e2);
        await().atMost(15, TimeUnit.SECONDS).until(() -> testForAlarmWithReductionKey(e2.reductionKey()));

        Event e3 = Event.genericAlarmEventOnNode(nodeId);
        sendEvent(e3);
        await().atMost(15, TimeUnit.SECONDS).until(() -> testForAlarmWithReductionKey(e3.reductionKey()));
    }
    
    public int addTestNode() throws URISyntaxException {
        // The requisition foreign source is hardcoded to "test" in the XML file
        addRequisition();
        addNodeToRequisition("test");
        importRequisition("test");
        return waitForNode("test:test");
    }
    
    private void addRequisition() throws URISyntaxException {
        final WebTarget target = getTarget().path("requisitions");
        File requisitionFile = new File(getClass().getClassLoader().getResource(Paths.get("requests", "requisition" +
                ".xml").toString()).toURI());
        final Response response = getBuilder(target).post(Entity.xml(requisitionFile));
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Requisition add failed with %d: %s", response.getStatus(),
                    response));
        }
    }

    private void addNodeToRequisition(String requisitionName) throws URISyntaxException {
        final WebTarget target = getTarget().path("requisitions").path(requisitionName).path("nodes");
        File nodeFile = new File(getClass().getClassLoader().getResource(Paths.get("requests", "node" +
                ".xml").toString()).toURI());
        final Response response = getBuilder(target).post(Entity.xml(nodeFile));
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Node add failed with %d: %s", response.getStatus(),
                    response));
        }
    }

    private void importRequisition(String requisitionName) {
        final WebTarget target = getTarget().path("requisitions").path(requisitionName).path("import");
        final Response response = getBuilder(target).put(Entity.json(""));
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            throw new IllegalArgumentException(String.format("Requisition activation failed with %d: %s",
                    response.getStatus(), response));
        }
    }

    int waitForNode(String criteria) {
        final WebTarget target = getTarget().path("nodes").path(criteria);
        await().atMost(1, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .until(() -> Response.Status.Family.SUCCESSFUL.equals(getBuilder(target).get().getStatusInfo().getFamily()));
        Response response = getBuilder(target).accept(MediaType.APPLICATION_JSON_TYPE).get();
        String responseBody = response.readEntity(String.class);

        // Return the ID of the node we waited for
        return Integer.parseInt((String) new Gson().fromJson(responseBody, Map.class).get("id"));
    }

    public void clearAllAlarms() {
        MultivaluedMap<String, String> requestParams =
                new MultivaluedHashMap<>();
        requestParams.put("clear", Collections.singletonList("true"));
        getAlarms().forEach(alarm ->
                getBuilder(getTarget()
                        .path("alarms")
                        .path(alarm.getId().toString()))
                        .put(Entity.form(requestParams)));
    }

    private WebTarget getTarget() {
        final Client client = ClientBuilder.newClient();
        return client.target(url.toString()).path("rest");
    }

    private Invocation.Builder getBuilder(final WebTarget target) {
        return target.request().header("Authorization", authorizationHeader);
    }
}
