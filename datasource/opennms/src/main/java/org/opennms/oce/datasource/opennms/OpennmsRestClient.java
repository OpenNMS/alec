/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.oce.datasource.opennms;

import java.util.concurrent.TimeUnit;

import com.google.gson.Gson;

import okhttp3.Credentials;
import okhttp3.FormBody;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.logging.HttpLoggingInterceptor;

public class OpennmsRestClient {

    private final HttpUrl baseUrl;

    private final OkHttpClient client;

    private final Gson gson = new Gson();

    public OpennmsRestClient(String url, String username, String password) {
        this.baseUrl = HttpUrl.parse(url);

        HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
        logging.setLevel(HttpLoggingInterceptor.Level.BODY);

        final OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.authenticator((route, response) -> response.request().newBuilder()
                .header("Authorization", Credentials.basic(username, password))
                .build());
        builder.connectTimeout(10, TimeUnit.SECONDS);
        builder.writeTimeout(10, TimeUnit.SECONDS);
        builder.readTimeout(30, TimeUnit.SECONDS);
        builder.addInterceptor(logging);
        client = builder.build();
    }

    private static class ServerInfo {
        private String displayVersion;
        private String version;
        private String packageName;
        private String packageDescription;
    }

    String getServerVersion() throws Exception {
        final HttpUrl url = baseUrl.newBuilder()
                .addPathSegment("rest")
                .addPathSegment("info")
                .build();
        final Request request = new Request.Builder()
                .url(url)
                .get()
                .build();
        final Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) {
            throw new Exception("Retrieving info failed with: " + response.message());
        }
        final ServerInfo info = gson.fromJson(response.body().string(), ServerInfo.class);
        return info.version;
    }

    void sendEvent(OpennmsEvent event) throws Exception {
        final MediaType XML = MediaType.parse("application/xml; charset=utf-8");
        String xml = "<event>\n" +
                "   <uei>"+ event.getUei() + "</uei>\n" +
                "   <source>oce</source> \n" +
                "   <parms>\n" +
                "    <parm>\n" +
                "     <parmName><![CDATA[service]]></parmName>\n" +
                "     <value type=\"string\" encoding=\"text\"><![CDATA[" + event.getService() + "]]></value>\n" +
                "    </parm>\n";
        if (!event.getAssociatedReductionKeys().isEmpty()) {
            xml = xml + "    <parm>\n" +
                    "     <parmName><![CDATA[impacts]]></parmName>\n" +
                    "     <value type=\"string\" encoding=\"text\"><![CDATA[";
            Gson g = new Gson();
            xml = xml + g.toJson(event.getAssociatedReductionKeys());
            xml = xml + "]]></value>\n" + "    </parm>\n";
        }
        xml  = xml + "   </parms>\n" +
                "   <severity>Critical</severity>\n" +
                "  </event>\n";
        final HttpUrl url = baseUrl.newBuilder()
                .addPathSegment("rest")
                .addPathSegment("events")
                .build();
        final Request request = new Request.Builder()
                .url(url)
                .post(RequestBody.create(XML, xml))
                .build();
        final Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) {
            throw new Exception(String.format("Sending event failed with: %s", response.message()));
        }
    }

    void clearAlarm(long alarmId) throws Exception {
        performActionOnAlarm(alarmId, "clear", "true");
    }

    void acknowledgeAlarm(long alarmId) throws Exception {
        performActionOnAlarm(alarmId, "ack", "true");
    }

    private void performActionOnAlarm(long alarmId, String actionName, String actionValue) throws Exception {
        final HttpUrl url = baseUrl.newBuilder()
                .addPathSegment("api")
                .addPathSegment("v2")
                .addPathSegment("alarms")
                .addPathSegment(Long.toString(alarmId))
                .build();
        final RequestBody body = new FormBody.Builder()
                .add(actionName, actionValue)
                .build();
        final Request request = new Request.Builder()
                .url(url)
                .put(body)
                .build();
        final Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) {
            throw new Exception(String.format("%s failed with: %s", actionName, response.message()));
        }
    }
}
