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
            .withInventoryObject(MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.CARD, "n1-c1", MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.CARD, "n1-c2", MockInventoryType.DEVICE, "n1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c1-p1", MockInventoryType.CARD, "n1-c1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c1-p2", MockInventoryType.CARD, "n1-c1")
            .withInventoryObject(MockInventoryType.PORT, "n1-c2-p1", MockInventoryType.CARD, "n1-c2")
            .withInventoryObject(MockInventoryType.PORT, "n1-c2-p2", MockInventoryType.CARD, "n1-c2")
            // N2
            .withInventoryObject(MockInventoryType.DEVICE, "n2")
            .withInventoryObject(MockInventoryType.CARD, "n2-c1", MockInventoryType.DEVICE, "n2")
            .withInventoryObject(MockInventoryType.PORT, "n2-c1-p1", MockInventoryType.CARD, "n2-c1")
            .withInventoryObject(MockInventoryType.PORT, "n2-c1-p2", MockInventoryType.CARD, "n2-c1")
            // Link
            // Link between the two
            .withInventoryObject(MockInventoryType.LINK, "n1-c1-p1___n2-c1-p1")
            .withPeerRelation(MockInventoryType.LINK, "n1-c1-p1___n2-c1-p1", MockInventoryType.PORT, "n1-c1-p1", MockInventoryType.PORT, "n2-c1-p1")
            // A service over the link
            .withInventoryObject(MockInventoryType.BGP, "bgp peer n1-n2")
            .withRelativeRelation(MockInventoryType.LINK, "n1-c1-p1___n2-c1-p1", MockInventoryType.BGP, "bgp peer n1-n2")
            .getInventory());

}
