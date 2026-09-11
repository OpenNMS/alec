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

import java.util.function.Supplier;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/** A configurable {@link AlecTool} for registry / loop tests. */
public class StubTool extends AlecTool {

    @FunctionalInterface
    public interface Body {
        JsonNode call(JsonNode args) throws Exception;
    }

    private final ToolSpec spec;
    private final Body body;
    private final Supplier<Boolean> available;
    public JsonNode lastArgs;
    public int calls;

    public StubTool(String name, Body body) {
        this(name, body, () -> true);
    }

    public StubTool(String name, Body body, Supplier<Boolean> available) {
        this.spec = ToolSpec.builder(name).description("stub " + name).string("x", "any", false).build();
        this.body = body;
        this.available = available;
    }

    public static StubTool returning(String name, String json) {
        ObjectMapper om = new ObjectMapper();
        return new StubTool(name, args -> om.readTree(json));
    }

    public static StubTool unavailable(String name) {
        return new StubTool(name, args -> new ObjectMapper().createObjectNode(), () -> false);
    }

    @Override
    public ToolSpec getSpec() {
        return spec;
    }

    @Override
    public JsonNode call(JsonNode arguments) throws ToolException {
        calls++;
        lastArgs = arguments;
        try {
            return body.call(arguments);
        } catch (ToolException | RuntimeException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean isAvailable() {
        return available.get();
    }
}
