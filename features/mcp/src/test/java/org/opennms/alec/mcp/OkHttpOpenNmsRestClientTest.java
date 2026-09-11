/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
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

package org.opennms.alec.mcp;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import okhttp3.Credentials;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Protocol;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;

/**
 * No network: an application interceptor fabricates every response and records
 * the request it was handed.
 */
public class OkHttpOpenNmsRestClientTest {

    private final ObjectMapper om = new ObjectMapper();
    private InMemoryKVStore kv;
    private McpConfigReader reader;
    private final List<Request> requests = new ArrayList<>();
    private int nextCode = 200;
    private String nextBody = "{}";
    private IOException nextFailure;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        reader = new KvMcpConfigReader(kv, om);
        storeLogin("http://nms.example:8980/opennms/", "admin", "secret");
    }

    private void storeLogin(String url, String user, String password) {
        kv.put(KvMcpConfigReader.CONFIG_KEY,
                "{\"opennmsUrl\":\"" + url + "\",\"opennmsUsername\":\"" + user
                        + "\",\"opennmsPassword\":\"" + password + "\"}",
                KvMcpConfigReader.CONFIG_CONTEXT);
    }

    private OkHttpOpenNmsRestClient client() {
        Interceptor fake = chain -> {
            requests.add(chain.request());
            if (nextFailure != null) {
                throw nextFailure;
            }
            return new Response.Builder()
                    .request(chain.request())
                    .protocol(Protocol.HTTP_1_1)
                    .code(nextCode)
                    .message("OK")
                    .body(ResponseBody.create(MediaType.parse("application/json"), nextBody))
                    .build();
        };
        return new OkHttpOpenNmsRestClient(reader, om, new OkHttpClient.Builder().addInterceptor(fake).build());
    }

    @Test
    public void getSendsBasicAuthAndAcceptHeadersToTheJoinedRestUrl() throws Exception {
        nextBody = "{\"id\":1,\"label\":\"core-1\"}";
        JsonNode node = client().get("nodes/1");
        assertThat(node.get("label").asText(), equalTo("core-1"));

        assertThat(requests.size(), equalTo(1));
        Request r = requests.get(0);
        assertThat(r.method(), equalTo("GET"));
        assertThat("base URL trailing slash trimmed, /rest/ joined",
                r.url().toString(), equalTo("http://nms.example:8980/opennms/rest/nodes/1"));
        assertThat(r.header("Authorization"), equalTo(Credentials.basic("admin", "secret")));
        assertThat(r.header("Accept"), equalTo("application/json"));
    }

    @Test
    public void getKeepsTheQueryString() throws Exception {
        client().get("events?node.id=5&limit=10");
        assertThat(requests.get(0).url().toString(),
                equalTo("http://nms.example:8980/opennms/rest/events?node.id=5&limit=10"));
    }

    @Test
    public void postSendsJsonBody() throws Exception {
        nextBody = "{\"ok\":true}";
        JsonNode body = om.createObjectNode().put("start", 1).put("end", 2);
        JsonNode result = client().post("measurements", body);
        assertThat(result.get("ok").asBoolean(), is(true));

        Request r = requests.get(0);
        assertThat(r.method(), equalTo("POST"));
        assertThat(r.url().toString(), equalTo("http://nms.example:8980/opennms/rest/measurements"));
        assertThat(r.header("Authorization"), equalTo(Credentials.basic("admin", "secret")));
        assertThat(r.body().contentType().toString(), containsString("application/json"));
        Buffer buffer = new Buffer();
        r.body().writeTo(buffer);
        assertThat(om.readTree(buffer.readUtf8()), equalTo(body));
    }

    @Test
    public void noContentReturnsMissingNode() throws Exception {
        nextCode = 204;
        nextBody = "";
        JsonNode result = client().get("nodes/1");
        assertThat(result.isMissingNode(), is(true));
    }

    @Test
    public void emptyOkBodyReturnsMissingNode() throws Exception {
        nextBody = "";
        assertThat(client().get("nodes/1").isMissingNode(), is(true));
    }

    @Test
    public void unauthorizedMentionsTheLogin() {
        nextCode = 401;
        nextBody = "";
        try {
            client().get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("rejected the configured login"));
            assertThat(e.getMessage(), containsString("401"));
            assertThat("password never appears", e.getMessage(), not(containsString("secret")));
        }
        nextCode = 403;
        try {
            client().get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("403"));
        }
    }

    @Test
    public void notFoundNamesThePath() {
        nextCode = 404;
        try {
            client().get("device-config/99");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("404"));
            assertThat(e.getMessage(), containsString("/opennms/rest/device-config/99"));
        }
    }

    @Test
    public void otherHttpErrorsReportTheStatus() {
        nextCode = 500;
        nextBody = "<html>boom</html>";
        try {
            client().get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("HTTP 500"));
            assertThat("body is not echoed", e.getMessage(), not(containsString("boom")));
        }
    }

    @Test
    public void nonJsonBodyIsAToolException() {
        nextBody = "<html>login page</html>";
        try {
            client().get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("OpenNMS REST call failed"));
        }
    }

    @Test
    public void networkFailureIsAToolException() {
        nextFailure = new IOException("Connection refused");
        try {
            client().get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Connection refused"));
        }
    }

    @Test
    public void notConfiguredFailsBeforeAnyRequest() {
        kv.truncateContext(KvMcpConfigReader.CONFIG_CONTEXT);
        OkHttpOpenNmsRestClient c = client();
        assertThat(c.isConfigured(), is(false));
        try {
            c.get("nodes/1");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("not configured"));
        }
        try {
            c.post("measurements", om.createObjectNode());
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("not configured"));
        }
        assertThat(requests.isEmpty(), is(true));
    }

    @Test
    public void isConfiguredReflectsStoredCredentials() {
        assertThat(client().isConfigured(), is(true));
        storeLogin("", "admin", "");
        assertThat(client().isConfigured(), is(false));
    }

    @Test
    public void checkConnectivityReportsOkWithVersionUrlAndUser() {
        nextBody = "{\"displayVersion\":\"37.0.1\"}";
        McpConfig cfg = new McpConfig(true, "http://other:8980/opennms/", "probe", "pw");
        String outcome = client().checkConnectivity(cfg);
        assertThat(outcome, equalTo("OK: reached OpenNMS 37.0.1 at http://other:8980/opennms as probe"));
        Request r = requests.get(0);
        assertThat("probes /rest/info with the GIVEN login, not the stored one",
                r.url().toString(), equalTo("http://other:8980/opennms/rest/info"));
        assertThat(r.header("Authorization"), equalTo(Credentials.basic("probe", "pw")));
    }

    @Test
    public void checkConnectivityToleratesNonJsonOkBody() {
        nextBody = "<html>ok</html>";
        String outcome = client().checkConnectivity(new McpConfig(true, "", "admin", "pw"));
        assertThat(outcome, equalTo("OK: reached OpenNMS  at http://localhost:8980/opennms as admin"));
    }

    @Test
    public void checkConnectivityReportsRejectedLogin() {
        nextCode = 401;
        String outcome = client().checkConnectivity(new McpConfig(true, "", "admin", "bad"));
        assertThat(outcome, equalTo("OpenNMS rejected the login (HTTP 401)"));
        assertThat(outcome.startsWith("OK:"), is(false));
    }

    @Test
    public void checkConnectivityReportsOtherHttpErrors() {
        nextCode = 503;
        String outcome = client().checkConnectivity(new McpConfig(true, "", "admin", "pw"));
        assertThat(outcome, equalTo("OpenNMS returned HTTP 503 for /rest/info"));
    }

    @Test
    public void checkConnectivityReportsUnreachable() {
        nextFailure = new IOException("Connection refused");
        String outcome = client().checkConnectivity(new McpConfig(true, "http://down:8980/opennms", "admin", "pw"));
        assertThat(outcome, equalTo("Could not reach http://down:8980/opennms: Connection refused"));
    }

    @Test
    public void checkConnectivityWithoutLoginNeverSendsARequest() {
        assertThat(client().checkConnectivity(null), equalTo("No OpenNMS login configured"));
        assertThat(client().checkConnectivity(new McpConfig(true, "", "admin", "")),
                equalTo("No OpenNMS login configured"));
        assertThat(requests.isEmpty(), is(true));
    }

    @Test
    public void checkConnectivityRejectsAnUnparseableUrl() {
        String outcome = client().checkConnectivity(new McpConfig(true, "not a url", "admin", "pw"));
        assertThat(outcome, containsString("Invalid OpenNMS REST URL"));
        assertThat(requests.isEmpty(), is(true));
    }
}
