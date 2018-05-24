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

package org.opennms.oce.engine.topology.model;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.Matchers.sameInstance;

import java.util.Set;

import org.junit.Test;
import org.opennms.oce.driver.test.MockInventory;

public class ModelBuilderImplTest {

    @Test
    public void canGenerateModel() {
        // Build the sample network model
        Model model = ModelBuilderImpl.buildModel(MockInventory.SAMPLE_NETWORK);

        System.out.println("Types: " + model.getTypes());

        assertThat(model.getTypes(), hasItem("Device"));
        assertThat(model.getTypes(), hasItem("Link"));
        // ... and others

        ModelObject root = model.getRoot();
        assertThat(root, notNullValue());

        // Parent of the root should always be null
        assertThat(root.getParent(), nullValue());

        // as defined in the inventory
        assertThat(root.getId(), equalTo(ModelBuilderImpl.MODEL_ROOT_ID));

        Set<ModelObject> rootChildren = root.getChildren();
        assertThat(rootChildren, hasSize(greaterThanOrEqualTo(2)));

        // TODO: How to get children of a specific type
        ModelObject rootLink = rootChildren.stream()
                .filter(mo -> mo.getType().equals("Link"))
                .findFirst()
                .get();
        assertThat(rootLink, notNullValue());


        Set<ModelObject> rootLinkPeers = rootLink.getPeers();
        assertThat(rootLinkPeers, hasSize(2));

        ModelObject rootLinkPeerA = rootLinkPeers.stream()
                .filter(mo -> mo.getId().equals("n1-c1-p1"))
                .findFirst()
                .get();
        ModelObject rootLinkPeerZ = rootLinkPeers.stream()
                .filter(mo -> mo.getId().equals("n2-c1-p1"))
                .findFirst()
                .get();

        // Get back to the port from the link
        assertThat(rootLinkPeerA.getPeers(), hasSize(1));
        assertThat(rootLinkPeerZ.getPeers(), hasSize(1));

        ModelObject n1c1 = rootLinkPeerA.getParent();
        assertThat(n1c1.getId(), equalTo("n1-c1"));

        ModelObject n1 = n1c1.getParent();
        assertThat(n1.getId(), equalTo("n1"));

        // Back at the same root
        assertThat(n1.getParent(), sameInstance(root));
    }
}
