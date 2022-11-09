/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.deeplearning.remote;

import java.io.IOException;

import org.apache.http.client.fluent.Content;
import org.apache.http.client.fluent.Request;
import org.apache.http.entity.ContentType;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.opennms.alec.engine.deeplearning.utils.InputVector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TFModel {
    private static final Logger LOG = LoggerFactory.getLogger(TFModel.class);
    private final String token;
    private final String uri;

    public TFModel(String token, String uri) {
        this.token = token;
        this.uri = uri;
    }

    public Content sendRequest(String data) {
        try {
            // Create the request
            return Request.Post(uri)
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "Bearer " + token)
                    .bodyString(data, ContentType.APPLICATION_JSON)
                    .execute().returnContent();
        } catch (IOException e) {
            LOG.error("Error while sending request to target host: '{}'", uri, e.getCause());
            return null;
        }
    }

    public boolean isRelated(InputVector inputVector) {
        JSONObject obj = new JSONObject();
        JSONObject inputData = new JSONObject();
        JSONArray columns = new JSONArray();
        JSONArray index = new JSONArray();
        JSONArray data = new JSONArray();
        // Inner array has 10 elements
        columns.add("type_a");
        columns.add("type_b");
        columns.add("same_instance");
        columns.add("same_parent");
        columns.add("share_ancestor");
        columns.add("time_delta_seconds");
        columns.add("distance_on_graph");
        columns.add("io_id_similarity");
        columns.add("io_label_similarity");

        // Add the first set of data to be scored
        data.add(inputVector.getTypeA()); // type_a
        data.add(inputVector.getTypeB()); // type_b
        data.add(inputVector.isSameInstance() ? 1 : 0); // same_instance
        data.add(inputVector.isSameParent() ? 1 : 0); // same_parent
        data.add(inputVector.isShareAncestor() ? 1 : 0); // share_ancestor
        data.add((float) inputVector.getDistanceOnGraph()); // distance_on_graph
        data.add((float) inputVector.getTimeDifferenceInSeconds()); // time_delta_seconds
        data.add((float) inputVector.getSimilarityOfInventoryObjectIds()); // io_id_similarity
        data.add((float) inputVector.getSimilarityOfInventoryObjectLabels()); // io_label_similarity

        index.add(0);
        JSONArray data2 = new JSONArray();
        data2.add(data);
        inputData.put("columns", columns);
        inputData.put("index", index);
        inputData.put("data", data2);
        obj.put("input_data", inputData);

        String toJSONString = obj.toJSONString();
        LOG.debug(toJSONString);
        Content content = sendRequest(toJSONString);
        LOG.debug("remote engine returns: {}", content);
        if (content != null) {
            return "[1]".equals(content.asString());
        } else {
            return false;
        }
    }
}
