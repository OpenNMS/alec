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
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.core.IsNull.notNullValue;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.InventoryObjectBean;
import org.opennms.oce.datasource.common.InventoryObjectPeerRefBean;
import org.opennms.oce.engine.topology.InventoryModelManager;
import org.opennms.oce.engine.topology.TopologyEngineFactory;
import org.opennms.oce.engine.topology.TopologyInventory;

public class UpdateInventoryTest {

    TopologyEngineFactory topologyEngineFactory;
    InventoryModelManager inventoryManager;
    Model model;

    @Rule
    public ExpectedException exceptionGrabber = ExpectedException.none();

    @Before
    public void setUp() {
        topologyEngineFactory = new TopologyEngineFactory();
        inventoryManager = new InventoryModelManager();
        TopologyInventory inventory = new TopologyInventory();
        inventoryManager.loadInventory(inventory);
    }

    @Test
    public void canBeEmptyModelButHaveRoot() {
        model = inventoryManager.getModel();
        ModelObject root = model.getRoot();

        assertThat(root.getChildren(), hasSize(0));
        assertThat(root.getType(), is("MODEL"));
    }

    @Test
    public void canCleanModel() {
        model = inventoryManager.getModel();
        ModelObject root = model.getRoot();
        assertThat(root.getChildren(), hasSize(0));
        assertThat(root.getType(), is("MODEL"));

        inventoryManager.clean();
        inventoryManager.loadInventory(new TopologyInventory());

        model = inventoryManager.getModel();
        root = model.getRoot();

        assertThat(root.getChildren(), hasSize(0));
        assertThat(root.getType(), is("MODEL"));
    }

    @Test
    public void canLoadSimpleInventory() {
        inventoryManager.clean();

        TopologyInventory inventory = new TopologyInventory();
        InventoryObject obj = new InventoryObjectBean("DEVICE", "n1", null, "MODEL", "model");
        inventory.addObject(obj);
        inventoryManager.loadInventory(inventory);

        model = inventoryManager.getModel();
        ModelObject root = model.getRoot();

        assertThat(root.getChildren(), hasSize(1));
        assertThat(root.getType(), is("MODEL"));
    }

    @Test
    public void canLoadDefaultInventory() {
        inventoryManager.clean();

        TopologyInventory inventory = new TopologyInventory();
        InventoryObject objDevice = new InventoryObjectBean("DEVICE", "n1", null, "MODEL", "model");
        inventory.addObject(objDevice);
        InventoryObject objCard = new InventoryObjectBean("CARD", "n1-c1", null, "DEVICE", "n1");
        inventory.addObject(objCard);
        InventoryObject objPort1 = new InventoryObjectBean("PORT", "n1-c1-p1", null, "CARD", "n1-c1");
        inventory.addObject(objPort1);
        InventoryObject objPort2 = new InventoryObjectBean("PORT", "n1-c1-p2", null, "CARD", "n1-c1");
        inventory.addObject(objPort2);
        inventoryManager.loadInventory(inventory);

        model = inventoryManager.getModel();
        ModelObject root = model.getRoot();

        assertThat(root.getChildren(), hasSize(1));
        assertThat(root.getChildren(), hasSize(1));
        assertThat(root.getType(), is("MODEL"));
        assertThat(model.getObjectById("DEVICE", "n1"), notNullValue());
        assertThat(model.getObjectById("CARD", "n1-c1"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p1"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p2"), notNullValue());
    }

    @Test
    public void canLoadInventoryWithTopology_plus_Link() {
        inventoryManager.clean();

        TopologyInventory inventory = new TopologyInventory();

        InventoryObject objDevice1 = new InventoryObjectBean("DEVICE", "n1", null, "MODEL", "model");
        inventory.addObject(objDevice1);
        InventoryObject objDevice2 = new InventoryObjectBean("DEVICE", "n2", null, "MODEL", "model");
        inventory.addObject(objDevice2);

        InventoryObject objCard1 = new InventoryObjectBean("CARD", "n1-c1", null, "DEVICE", "n1");
        inventory.addObject(objCard1);
        InventoryObject objCard2 = new InventoryObjectBean("CARD", "n1-c2", null, "DEVICE", "n1");
        inventory.addObject(objCard2);
        InventoryObject objCard3 = new InventoryObjectBean("CARD", "n2-c1", null, "DEVICE", "n2");
        inventory.addObject(objCard3);

        InventoryObject objPort1 = new InventoryObjectBean("PORT", "n1-c1-p1", null, "CARD", "n1-c1");
        inventory.addObject(objPort1);
        InventoryObject objPort2 = new InventoryObjectBean("PORT", "n1-c1-p2", null, "CARD", "n1-c1");
        inventory.addObject(objPort2);
        InventoryObject objPort3 = new InventoryObjectBean("PORT", "n1-c1-p3", null, "CARD", "n1-c1");
        inventory.addObject(objPort3);
        InventoryObject objPort4 = new InventoryObjectBean("PORT", "n1-c1-p4", null, "CARD", "n1-c1");
        inventory.addObject(objPort4);

        InventoryObject objPort11 = new InventoryObjectBean("PORT", "n1-c2-p1", null, "CARD", "n1-c2");
        inventory.addObject(objPort11);
        InventoryObject objPort12 = new InventoryObjectBean("PORT", "n1-c2-p2", null, "CARD", "n1-c2");
        inventory.addObject(objPort12);

        InventoryObject objPort21 = new InventoryObjectBean("PORT", "n2-c1-p1", null, "CARD", "n2-c1");
        inventory.addObject(objPort21);
        InventoryObject objPort22 = new InventoryObjectBean("PORT", "n2-c1-p2", null, "CARD", "n2-c1");
        inventory.addObject(objPort22);

        InventoryObjectBean objLink = new InventoryObjectBean("LINK", "n1-c1-p1 <-> n2-c1-p1", null, "MODEL", "model");
        objLink.addPeer(new InventoryObjectPeerRefBean("PORT", "n1-c1-p1", InventoryObjectPeerEndpoint.A));
        objLink.addPeer(new InventoryObjectPeerRefBean("PORT", "n2-c1-p1", InventoryObjectPeerEndpoint.Z));
        inventory.addObject(objLink);

        inventoryManager.loadInventory(inventory);

        model = inventoryManager.getModel();
        ModelObject root = model.getRoot();

        assertThat(root.getType(), is("MODEL"));

        assertThat(model.getObjectById("DEVICE", "n1"), notNullValue());
        assertThat(model.getObjectById("CARD", "n1-c1"), notNullValue());
        assertThat(model.getObjectById("CARD", "n1-c2"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p1"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p2"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p3"), notNullValue());
        assertThat(model.getObjectById("PORT", "n1-c1-p4"), notNullValue());


    }
}
