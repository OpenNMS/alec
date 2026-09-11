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

package org.opennms.alec.mcp.tools;

import java.util.Objects;

import org.opennms.alec.mcp.AlecTool;
import org.opennms.alec.mcp.OpenNmsRestClient;
import org.opennms.alec.mcp.ToolException;
import org.opennms.alec.mcp.ToolSpec;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * A collected metric over a time window, via {@code POST /rest/measurements},
 * returned as a summary plus a bounded number of samples — never the raw
 * series.
 */
public class GetMetricSeriesTool extends AlecTool {

    public static final String NAME = "get_metric_series";
    static final int DEFAULT_HOURS = 2;
    static final int MAX_HOURS = 24 * 14;
    static final int DEFAULT_POINTS = 24;
    static final int MAX_POINTS = 96;

    private static final ToolSpec SPEC = ToolSpec.builder(NAME)
            .description("Fetch one collected metric for a resource over a recent time window and return a "
                    + "summary (min/max/average/first/last) with evenly spaced samples. Get the resourceId and "
                    + "attribute names from list_node_resources first.")
            .string("resourceId", "Resource id exactly as returned by list_node_resources.", true)
            .string("attribute", "Metric (attribute) name from that resource.", true)
            .integer("hours", "Window length in hours ending now (default " + DEFAULT_HOURS + ", max " + MAX_HOURS + ").", false)
            .integer("points", "Number of samples to return (default " + DEFAULT_POINTS + ", max " + MAX_POINTS + ").", false)
            .build();

    private final OpenNmsRestClient rest;
    private final ObjectMapper om;
    private final TimeSource clock;

    public GetMetricSeriesTool(OpenNmsRestClient rest, ObjectMapper om) {
        this(rest, om, System::currentTimeMillis);
    }

    GetMetricSeriesTool(OpenNmsRestClient rest, ObjectMapper om, TimeSource clock) {
        this.rest = Objects.requireNonNull(rest);
        this.om = Objects.requireNonNull(om);
        this.clock = Objects.requireNonNull(clock);
    }

    @Override
    public ToolSpec getSpec() {
        return SPEC;
    }

    @Override
    public boolean isAvailable() {
        return rest.isConfigured();
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        Args args = new Args(arguments);
        String resourceId = args.string("resourceId");
        String attribute = args.string("attribute");
        int hours = args.intOr("hours", DEFAULT_HOURS, 1, MAX_HOURS);
        int points = args.intOr("points", DEFAULT_POINTS, 2, MAX_POINTS);

        long end = clock.now();
        long start = end - hours * 3_600_000L;
        long step = Math.max(1_000L, (end - start) / points);

        ObjectNode request = om.createObjectNode();
        request.put("start", start);
        request.put("end", end);
        request.put("step", step);
        request.put("maxrows", points);
        ObjectNode source = request.putArray("source").addObject();
        source.put("resourceId", resourceId);
        source.put("attribute", attribute);
        source.put("label", attribute);
        source.put("aggregation", "AVERAGE");

        JsonNode body = rest.post("measurements", request);
        if (body.isMissingNode()) {
            throw new ToolException("No data for " + attribute + " on " + resourceId + " in the last " + hours + "h");
        }
        JsonNode timestamps = body.path("timestamps");
        JsonNode values = body.path("columns").path(0).path("values");
        ObjectNode out = om.createObjectNode();
        out.put("resourceId", resourceId);
        out.put("attribute", attribute);
        out.put("start", Render.iso(start));
        out.put("end", Render.iso(end));
        out.put("stepSeconds", body.path("step").asLong(step) / 1000);
        ArrayNode samples = out.putArray("samples");
        double min = Double.MAX_VALUE;
        double max = -Double.MAX_VALUE;
        double sum = 0;
        int count = 0;
        Double first = null;
        Double last = null;
        if (timestamps.isArray() && values.isArray()) {
            int n = Math.min(timestamps.size(), values.size());
            for (int i = 0; i < n; i++) {
                Double v = number(values.get(i));
                ObjectNode s = samples.addObject();
                s.put("t", Render.iso(timestamps.get(i).asLong()));
                if (v == null) {
                    s.putNull("v");
                    continue;
                }
                s.put("v", round(v));
                if (first == null) {
                    first = v;
                }
                last = v;
                min = Math.min(min, v);
                max = Math.max(max, v);
                sum += v;
                count++;
            }
        }
        out.put("samplesWithData", count);
        if (count > 0) {
            out.put("min", round(min));
            out.put("max", round(max));
            out.put("average", round(sum / count));
            out.put("first", round(first));
            out.put("last", round(last));
        } else {
            out.put("note", "no data points in the window (metric not collected, or resource/attribute wrong)");
        }
        return out;
    }

    /** The measurements API encodes gaps as "NaN" strings or JSON nulls. */
    static Double number(JsonNode v) {
        if (v == null || v.isNull()) {
            return null;
        }
        if (v.isNumber()) {
            double d = v.asDouble();
            return Double.isNaN(d) || Double.isInfinite(d) ? null : d;
        }
        try {
            double d = Double.parseDouble(v.asText());
            return Double.isNaN(d) || Double.isInfinite(d) ? null : d;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    static double round(double d) {
        return Math.abs(d) >= 1000 ? Math.round(d) : Math.round(d * 1000d) / 1000d;
    }

    @FunctionalInterface
    interface TimeSource {
        long now();
    }
}
