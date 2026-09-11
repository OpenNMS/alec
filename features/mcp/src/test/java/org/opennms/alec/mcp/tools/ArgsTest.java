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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

import org.junit.Test;
import org.opennms.alec.mcp.ToolException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ArgsTest {

    private final ObjectMapper om = new ObjectMapper();

    @Test
    public void hasIsFalseForNullMissingNullValueAndBlankText() {
        assertThat(new Args(null).has("x"), is(false));
        ObjectNode n = om.createObjectNode();
        n.putNull("nul");
        n.put("blank", "   ");
        n.put("text", " v ");
        n.put("zero", 0);
        Args a = new Args(n);
        assertThat(a.has("missing"), is(false));
        assertThat(a.has("nul"), is(false));
        assertThat(a.has("blank"), is(false));
        assertThat(a.has("text"), is(true));
        assertThat(a.has("zero"), is(true));
    }

    @Test
    public void stringIsTrimmedAndRequired() throws ToolException {
        Args a = new Args(om.createObjectNode().put("s", "  core-1 ").put("n", 42));
        assertThat(a.string("s"), equalTo("core-1"));
        assertThat("non-text values are read as text", a.string("n"), equalTo("42"));
        try {
            a.string("missing");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Missing required argument 'missing'"));
        }
        assertThat(a.stringOr("missing", "fb"), equalTo("fb"));
        assertThat(a.stringOr("s", "fb"), equalTo("core-1"));
    }

    @Test
    public void intOrClampsParsesTextAndRejectsGarbage() throws ToolException {
        ObjectNode n = om.createObjectNode();
        n.put("num", 500);
        n.put("text", " 7 ");
        n.put("neg", -5);
        n.put("bad", "seven");
        Args a = new Args(n);
        assertThat(a.intOr("missing", 25, 1, 100), equalTo(25));
        assertThat("clamped to max", a.intOr("num", 25, 1, 100), equalTo(100));
        assertThat("clamped to min", a.intOr("neg", 25, 1, 100), equalTo(1));
        assertThat(a.intOr("text", 25, 1, 100), equalTo(7));
        try {
            a.intOr("bad", 25, 1, 100);
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("'bad' must be an integer"));
        }
    }

    @Test
    public void integerIsRequiredAndNotClamped() throws ToolException {
        Args a = new Args(om.createObjectNode().put("n", 99999).put("t", "12").put("bad", "x"));
        assertThat(a.integer("n"), equalTo(99999));
        assertThat(a.integer("t"), equalTo(12));
        try {
            a.integer("missing");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Missing required argument 'missing'"));
        }
        try {
            a.integer("bad");
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("must be an integer"));
        }
    }

    @Test
    public void boolOrReadsBooleansAndText() {
        ObjectNode n = om.createObjectNode();
        n.put("b", true);
        n.put("t", " TRUE ");
        n.put("f", "no");
        Args a = new Args(n);
        assertThat(a.boolOr("missing", true), is(true));
        assertThat(a.boolOr("missing", false), is(false));
        assertThat(a.boolOr("b", false), is(true));
        assertThat(a.boolOr("t", false), is(true));
        assertThat(a.boolOr("f", true), is(false));
    }
}
