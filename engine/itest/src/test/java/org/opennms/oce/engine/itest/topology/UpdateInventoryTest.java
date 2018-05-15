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

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.engine.topology.TopologyEngineFactory;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.impl.ModelBuilderImpl;
import org.opennms.oce.model.impl.ModelImpl;
import org.opennms.oce.model.impl.ModelObjectImpl;

public class UpdateInventoryTest {

    TopologyEngineFactory topologyEngineFactory;
    Model model;

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

        ((ModelImpl)model).addObject(device);
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

        final ModelObjectImpl device = new ModelObjectImpl("Device", "n3");

        ((ModelImpl)model).removeObjectById(device.getType(), device.getId());
    }
}
