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

import java.util.ArrayList;
import java.util.List;

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.common.InventoryObjectBean;
import org.opennms.oce.datasource.common.InventoryObjectPeerRefBean;
import org.opennms.oce.datasource.common.InventoryObjectRelativeRefBean;

public class MockInventoryBuilder {

    private final List<InventoryObjectBean> inventoryObjects = new ArrayList<>();

    public MockInventoryBuilder withInventoryObject(String type, String id) {
        return withInventoryObject(type, id, null, null);
    }

    public MockInventoryBuilder withInventoryObject(String type, String id, String parentType, String parentId) {
        final InventoryObjectBean iob = new InventoryObjectBean();
        iob.setType(type);
        iob.setId(id);
        iob.setParentType(parentType);
        iob.setParentId(parentId);
        inventoryObjects.add(iob);
        return this;
    }

    public MockInventoryBuilder withPeerRelation(String type, String id, String typeA, String idA, String typeZ, String idZ) {
        final InventoryObjectBean iob = getIoById(type, id);

        InventoryObjectPeerRefBean peerRefA = new InventoryObjectPeerRefBean();
        peerRefA.setType(typeA);
        peerRefA.setId(idA);
        peerRefA.setEndpoint(InventoryObjectPeerEndpoint.A);
        iob.getPeers().add(peerRefA);

        InventoryObjectPeerRefBean peerRefZ = new InventoryObjectPeerRefBean();
        peerRefZ.setType(typeZ);
        peerRefZ.setId(idZ);
        peerRefZ.setEndpoint(InventoryObjectPeerEndpoint.Z);
        iob.getPeers().add(peerRefZ);

        return this;
    }

    public MockInventoryBuilder withRelativeRelation(String type, String id, String relativeType, String relativeId) {
        final InventoryObjectBean iob = getIoById(type, id);

        InventoryObjectRelativeRefBean relativeRef = new InventoryObjectRelativeRefBean();
        relativeRef.setType(relativeType);
        relativeRef.setId(relativeId);
        iob.getRelatives().add(relativeRef);

        return this;
    }

    private InventoryObjectBean getIoById(String type, String id) {
        return inventoryObjects.stream()
                .filter(io -> type.equals(io.getType()) && id.equals(io.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Could not find element with type: %s and id: %s", type, id)));
    }

    public List<? extends InventoryObject> getInventory() {
        return inventoryObjects;
    }

}
