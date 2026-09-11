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

package org.opennms.alec.llm;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Arrays;
import java.util.Collections;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PastAnalysesToolTest {

    private final ObjectMapper om = new ObjectMapper();
    private InMemoryKVStore kv;
    private SuggestionStore store;
    private PastAnalysesTool tool;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        store = new SuggestionStore(kv, om);
        tool = new PastAnalysesTool(kv, om);
    }

    @Test
    public void specIsAnOptionalLimitOnly() {
        assertThat(tool.getSpec().getName(), equalTo("get_past_analyses"));
        assertThat(tool.getSpec().getParams().size(), equalTo(1));
        assertThat(tool.getSpec().getParams().get(0).getName(), equalTo("limit"));
        assertThat(tool.getSpec().getParams().get(0).isRequired(), is(false));
        assertThat(tool.isAvailable(), is(true));
    }

    @Test
    public void listsReadyAnalysesNewestFirstSkippingPendingAndFailed() throws Exception {
        store.putReady("sit-a", 50L, 100L, "m", Arrays.asList("cause a"), Arrays.asList("fix a"));
        store.putReady("sit-b", 250L, 300L, "m", Arrays.asList("cause b1", "cause b2"), Collections.emptyList());
        store.putPending("sit-c", 400L, "m");
        store.putFailed("sit-d", 450L, 500L, "m", "boom");
        store.putReady("sit-e", 600L, 700L, "m", Collections.emptyList(), Collections.emptyList());
        kv.put("junk", "{not json", SuggestionStore.CONTEXT);

        JsonNode out = tool.call(om.createObjectNode());
        assertThat("empty ready records, pending, failed and junk are skipped", out.get("total").asInt(), equalTo(2));
        JsonNode analyses = out.get("analyses");
        assertThat(analyses.size(), equalTo(2));
        assertThat(analyses.get(0).get("situationId").asText(), equalTo("sit-b"));
        assertThat(analyses.get(0).get("completedAt").asText(), equalTo("1970-01-01T00:00:00.300Z"));
        assertThat(analyses.get(0).get("rootCauses").size(), equalTo(2));
        assertThat(analyses.get(0).get("rootCauses").get(1).asText(), equalTo("cause b2"));
        assertThat(analyses.get(0).get("resolutions").size(), equalTo(0));
        assertThat(analyses.get(1).get("situationId").asText(), equalTo("sit-a"));
        assertThat(analyses.get(1).get("rootCauses").get(0).asText(), equalTo("cause a"));
        assertThat(analyses.get(1).get("resolutions").get(0).asText(), equalTo("fix a"));
    }

    @Test
    public void limitIsClampedAndDoesNotChangeTheTotal() throws Exception {
        for (int i = 0; i < PastAnalysesTool.MAX_LIMIT + 5; i++) {
            store.putReady("sit-" + i, i, i + 1L, "m", Arrays.asList("c" + i), Arrays.asList("r" + i));
        }
        JsonNode one = tool.call(om.createObjectNode().put("limit", 1));
        assertThat(one.get("total").asInt(), equalTo(PastAnalysesTool.MAX_LIMIT + 5));
        assertThat(one.get("analyses").size(), equalTo(1));
        assertThat("newest first", one.get("analyses").get(0).get("situationId").asText(),
                equalTo("sit-" + (PastAnalysesTool.MAX_LIMIT + 4)));

        assertThat("0 clamps to 1", tool.call(om.createObjectNode().put("limit", 0)).get("analyses").size(), equalTo(1));
        assertThat("huge clamps to MAX_LIMIT", tool.call(om.createObjectNode().put("limit", 10_000)).get("analyses").size(),
                equalTo(PastAnalysesTool.MAX_LIMIT));
        assertThat("default limit", tool.call(om.createObjectNode()).get("analyses").size(),
                equalTo(PastAnalysesTool.DEFAULT_LIMIT));
        assertThat("null arguments", tool.call(null).get("analyses").size(), equalTo(PastAnalysesTool.DEFAULT_LIMIT));
    }

    @Test
    public void emptyStoreGivesZeroTotalAndEmptyArray() throws Exception {
        JsonNode out = tool.call(om.createObjectNode());
        assertThat(out.get("total").asInt(), equalTo(0));
        assertThat(out.get("analyses").isArray(), is(true));
        assertThat(out.get("analyses").size(), equalTo(0));
        assertThat(om.writeValueAsString(out), containsString("\"analyses\":[]"));
    }
}
