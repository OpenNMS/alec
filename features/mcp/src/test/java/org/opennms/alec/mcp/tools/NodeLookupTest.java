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
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.mcp.ToolException;
import org.opennms.integration.api.v1.dao.NodeDao;
import org.opennms.integration.api.v1.model.Node;

import com.fasterxml.jackson.databind.ObjectMapper;

public class NodeLookupTest {

    private final ObjectMapper om = new ObjectMapper();
    private NodeDao nodeDao;
    private NodeLookup lookup;
    private Node node;

    @Before
    public void setUp() {
        nodeDao = mock(NodeDao.class);
        lookup = new NodeLookup(nodeDao);
        node = mock(Node.class);
        when(node.getId()).thenReturn(7);
        when(node.getLabel()).thenReturn("core-1");
    }

    private Args args(String key, String value) {
        return new Args(om.createObjectNode().put(key, value));
    }

    @Test
    public void numericNodeIdUsesGetNodeById() throws ToolException {
        when(nodeDao.getNodeById(7)).thenReturn(node);
        assertThat(lookup.resolve(args("nodeId", "7")) == node, is(true));
        verify(nodeDao, never()).getNodeByCriteria(anyString());
        verify(nodeDao, never()).getNodeByLabel(anyString());
    }

    @Test
    public void numericNodeIdGivenAsANumberWorksToo() throws ToolException {
        when(nodeDao.getNodeById(7)).thenReturn(node);
        assertThat(lookup.resolve(new Args(om.createObjectNode().put("nodeId", 7))) == node, is(true));
    }

    @Test
    public void foreignSourceColonForeignIdUsesCriteria() throws ToolException {
        when(nodeDao.getNodeByCriteria("Routers:r1")).thenReturn(node);
        assertThat(lookup.resolve(args("nodeId", "Routers:r1")) == node, is(true));
        verify(nodeDao, never()).getNodeById(anyInt());
        verify(nodeDao, never()).getNodeByLabel(anyString());
    }

    @Test
    public void nonNumericNodeIdFallsBackToLabel() throws ToolException {
        when(nodeDao.getNodeByLabel("core-1")).thenReturn(node);
        assertThat(lookup.resolve(args("nodeId", "core-1")) == node, is(true));
        verify(nodeDao, never()).getNodeByCriteria(anyString());
    }

    @Test
    public void unknownNumericIdFallsThroughToLabelThenFails() {
        when(nodeDao.getNodeById(99)).thenReturn(null);
        try {
            lookup.resolve(args("nodeId", "99"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No node found for '99'"));
            assertThat(e.getMessage(), containsString("foreignSource:foreignId"));
        }
        verify(nodeDao).getNodeByLabel("99");
    }

    @Test
    public void nodeLabelArgumentUsesGetNodeByLabel() throws ToolException {
        when(nodeDao.getNodeByLabel("core-1")).thenReturn(node);
        assertThat(lookup.resolve(args("nodeLabel", "core-1")) == node, is(true));
        try {
            lookup.resolve(args("nodeLabel", "ghost"));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("No node labelled 'ghost'"));
        }
    }

    @Test
    public void nodeIdTakesPrecedenceOverNodeLabel() throws ToolException {
        when(nodeDao.getNodeById(7)).thenReturn(node);
        Args both = new Args(om.createObjectNode().put("nodeId", "7").put("nodeLabel", "other"));
        assertThat(lookup.resolve(both) == node, is(true));
        verify(nodeDao, never()).getNodeByLabel(anyString());
    }

    @Test
    public void neitherArgumentIsAnError() {
        try {
            lookup.resolve(new Args(om.createObjectNode()));
            fail("expected ToolException");
        } catch (ToolException e) {
            assertThat(e.getMessage(), containsString("Provide 'nodeId'"));
            assertThat(e.getMessage(), containsString("'nodeLabel'"));
        }
    }
}
