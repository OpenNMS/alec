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

package org.opennms.oce.engine.itest.topology;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.opennms.oce.engine.topology.TopologyEngineFactory;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.impl.ModelBuilderImpl;
import org.opennms.oce.model.impl.ModelObjectImpl;

public class UpdateInventoryTest {

    TopologyEngineFactory topologyEngineFactory;
    Model model;
    @Rule
    public ExpectedException exceptionGrabber = ExpectedException.none();

    @Before
    public void setUp() {
        topologyEngineFactory = new TopologyEngineFactory();

        ModelBuilderImpl modelBuilder = new ModelBuilderImpl();
        model = modelBuilder.buildModel();
    }

    /**
     *      <!-- Devices -->
     *      <model-object-entry type="Device" id="n3" parent-type="Model" parent-id="model"/>
     *
     *      <!-- Cards -->
     *      <model-object-entry type="Card" id="n3-c1" parent-type="Device" parent-id="n3" />
     *
     *      <!-- Ports -->
     *      <model-object-entry type="Port" id="n3-c1-p1" parent-type="Card" parent-id="n3-c1" />
     *      <model-object-entry type="Port" id="n3-c1-p2" parent-type="Card" parent-id="n3-c1" />
     *      <model-object-entry type="Port" id="n3-c1-p3" parent-type="Card" parent-id="n3-c1" />
     *      <model-object-entry type="Port" id="n3-c1-p4" parent-type="Card" parent-id="n3-c1" />
    */
    @Test
    public void canAddModelObject() {
        /** Case: Add new Network Element (simple case adding new device with one card and four ports)
         *
         * Expected Results:
         * - A new device is added with all its children (card and ports)
         * - All relationships are established such as:
         * -- A new device has parent
         * -- A new device has peers (if applicable)
         */

        //Assert that inventory and model are constructed properly
        ModelObject root = model.getRoot();
        assertThat(root, notNullValue());
        assertThat(root.getParent(), nullValue());

        //and have all levels of model object hierarchy (device, card, port)
        assertThat(model.getTypes(), hasItem("Device"));
        assertThat(model.getTypes(), hasItem("Card"));
        assertThat(model.getTypes(), hasItem("Port"));

        //Construct new device with one card and four ports
        final ModelObjectImpl device = new ModelObjectImpl("Device", "n3");

        final ModelObjectImpl card = new ModelObjectImpl("Card", "n3-c1");

        final ModelObjectImpl port1 = new ModelObjectImpl("Port", "n3-c1-p1");
        final ModelObjectImpl port2 = new ModelObjectImpl("Port", "n3-c1-p2");
        final ModelObjectImpl port3 = new ModelObjectImpl("Port", "n3-c1-p3");
        final ModelObjectImpl port4 = new ModelObjectImpl("Port", "n3-c1-p4");

        card.setParent(device);

        port1.setParent(card);
        port2.setParent(card);
        port3.setParent(card);
        port4.setParent(card);

        /**
         * Design question: should updating model flow be delegated to ModelBuilder which is responsible for constructing initial model
         * It can be passed as reference to another build function (updateModel) function which is similar to existing buildModel
         */

        model.addObject(device);

        //Try to add this device again...
        final ModelObjectImpl sameDevice = new ModelObjectImpl("Device", "n3");

        // Exception to be thrown just before that method call
        exceptionGrabber.expect(IllegalStateException.class);
        model.addObject(sameDevice);

        // Expectation is that no exception happens
        model.removeObjectById(device.getType(), device.getId());
    }

    @Test
    public void canDeleteModelObject() {
        /** Case: Delete a new Network Element (simple case deleting previously added device with one card and four ports)
         *
         *  Expected Results:
         *  - Detached from parent
         *  - Detached from peers (if applicable)
         *  - Detached from children (will be clean up in the next step)
         *  - Cleared and removed
         *  Note: currently we do not consider detachments from uncles and nephews
         */

        ModelObject root = model.getRoot();
        assertThat(root, notNullValue());
        assertThat(root.getParent(), nullValue());

        //and have all levels of model object hierarchy (device, card, port)
        assertThat(model.getTypes(), hasItem("Device"));
        assertThat(model.getTypes(), hasItem("Card"));
        assertThat(model.getTypes(), hasItem("Port"));

        //Construct new device with one card and four ports
        final ModelObjectImpl device = new ModelObjectImpl("Device", "n33");

        final ModelObjectImpl card = new ModelObjectImpl("Card", "n33-c1");

        final ModelObjectImpl port1 = new ModelObjectImpl("Port", "n33-c1-p1");
        final ModelObjectImpl port2 = new ModelObjectImpl("Port", "n33-c1-p2");
        final ModelObjectImpl port3 = new ModelObjectImpl("Port", "n33-c1-p3");
        final ModelObjectImpl port4 = new ModelObjectImpl("Port", "n33-c1-p4");

        card.setParent(device);

        port1.setParent(card);
        port2.setParent(card);
        port3.setParent(card);
        port4.setParent(card);

        model.printModel();

        model.addObject(device);

        model.printModel();

        model.removeObjectById(device.getType(), device.getId());

        model.printModel();

        final ModelObjectImpl nonExistingDevice = new ModelObjectImpl("Device", "n999");

        // Exception to be thrown just before that method call
        exceptionGrabber.expect(IllegalStateException.class);
        // No such device in the model
        model.removeObjectById(nonExistingDevice.getType(), nonExistingDevice.getId());
    }
}
