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

package org.opennms.oce.driver.test;

import java.util.List;

import org.opennms.oce.datasource.api.InventoryObject;

import com.google.common.collect.ImmutableList;

public class MockInventory {

    public static List<InventoryObject> SAMPLE_NETWORK = ImmutableList.copyOf(new MockInventoryBuilder()
            // N1
            .withInventoryObject("Device", "n1")
            .withInventoryObject("Card", "n1-c1", "Device", "n1")
            .withInventoryObject("Card", "n1-c2", "Device", "n1")
            .withInventoryObject("Port", "n1-c1-p1", "Card", "n1-c1")
            .withInventoryObject("Port", "n1-c1-p2", "Card", "n1-c1")
            .withInventoryObject("Port", "n1-c2-p1", "Card", "n1-c2")
            .withInventoryObject("Port", "n1-c2-p2", "Card", "n1-c2")
            // N2
            .withInventoryObject("Device", "n2")
            .withInventoryObject("Card", "n2-c1", "Device", "n2")
            .withInventoryObject("Port", "n2-c1-p1", "Card", "n2-c1")
            .withInventoryObject("Port", "n2-c1-p2", "Card", "n2-c1")
            // Link
            // Link between the two
            .withInventoryObject("Link", "n1-c1-p1___n2-c1-p1")
            .withPeerRelation("Link", "n1-c1-p1___n2-c1-p1", "Port", "n1-c1-p1", "Port", "n2-c1-p1")
            // A service over the link
            .withInventoryObject("BGP", "bgp peer n1-n2")
            .withRelativeRelation("Link", "n1-c1-p1___n2-c1-p1", "BGP", "bgp peer n1-n2")
            .getInventory());

}
