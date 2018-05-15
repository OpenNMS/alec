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

package org.opennms.oce.engine.itest;

import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;

public class MockModelBuilderTest {

    @Test
    public void canBuildEmptyModel() {
        final Model model = new MockModelBuilder()
                .build();
        assertThat(model, notNullValue());
    }

    @Test
    public void canBuildSimpleModel() {
        final Model model = new MockModelBuilder()
                .withModelObject("NODE", "n1")
                .withModelObject("CARD", "c1", "NODE", "n1")
                .withModelObject("PORT", "p1", "CARD", "c1")
                .build();
        assertThat(model, notNullValue());
        assertThat(model.getObjectById("NODE", "n1"), notNullValue());
        assertThat(model.getObjectById("CARD", "c1"), notNullValue());
    }

    @Test
    public void canBuildModel() {
        final Model model = new MockModelBuilder()
                // N1
                .withModelObject("NODE", "n1")
                .withModelObject("CARD", "n1-c1", "NODE", "n1")
                .withModelObject("PORT", "n1-c1-p1", "CARD", "n1-c1")
                // N2
                .withModelObject("NODE", "n2")
                .withModelObject("CARD", "n2-c1", "NODE", "n2")
                .withModelObject("PORT", "n2-c1-p1", "CARD", "n2-c1")
                // Link between the two
                .withModelObject("LINK", "n1-c1-p1 <-> n2-c1-p1")
                .withPeerRelation("LINK", "n1-c1-p1 <-> n2-c1-p1", "PORT", "n1-c1-p1", "PORT", "n2-c1-p1")
                // A service over the link
                .withModelObject("BGP", "bgp peer n1-n2")
                .withRelativeRelation("LINK", "n1-c1-p1 <-> n2-c1-p1", "BGP", "bgp peer n1-n2")
                .build();
        assertThat(model, notNullValue());
        assertThat(model.getObjectById("NODE", "n1"), notNullValue());
        assertThat(model.getObjectById("CARD", "n1-c1"), notNullValue());

        ModelObject linkMo = model.getObjectById("LINK", "n1-c1-p1 <-> n2-c1-p1");
        assertThat(linkMo.getPeers(), hasSize(2));

        assertThat(linkMo.getUncles(), hasSize(1));
    }
}
