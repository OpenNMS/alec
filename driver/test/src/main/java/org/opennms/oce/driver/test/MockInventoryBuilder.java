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
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectPeerRef;
import org.opennms.oce.datasource.common.ImmutableInventoryObjectRelativeRef;

public class MockInventoryBuilder {

    private final List<InventoryObject> inventoryObjects = new ArrayList<>();
    public static final long PARENT_WEIGHT = 100;
    public static final long PEER_WEIGHT = 300;
    public static final long RELATIVE_WEIGHT = 200;

    public MockInventoryBuilder withInventoryObject(MockInventoryType type, String id) {
        return withInventoryObject(type.getType(), id);
    }

    public MockInventoryBuilder withInventoryObject(String type, String id) {
        return withInventoryObject(type, id, null, null);
    }

    public MockInventoryBuilder withInventoryObject(MockInventoryType type, String id, MockInventoryType parentType, String parentId) {
        return withInventoryObject(type.getType(), id, parentType.getType(), parentId);
    }

    public MockInventoryBuilder withInventoryObject(MockInventoryType type, String id, MockInventoryType parentType, String parentId, long weightToParent) {
        return withInventoryObject(type.getType(), id, parentType.getType(), parentId, weightToParent);
    }

    public MockInventoryBuilder withInventoryObject(String type, String id, String parentType, String parentId) {
        return withInventoryObject(type, id, parentType, parentId, PARENT_WEIGHT);
    }

    public MockInventoryBuilder withInventoryObject(String type, String id, String parentType, String parentId, long weightToParent) {
        inventoryObjects.add(ImmutableInventoryObject.newBuilder()
                .setType(type)
                .setId(id)
                .setParentType(parentType)
                .setParentId(parentId)
                .setWeightToParent(weightToParent)
                .build());
        return this;
    }

    public MockInventoryBuilder withPeerRelation(MockInventoryType type, String id, MockInventoryType typeA, String idA, MockInventoryType typeZ, String idZ) {
        return withPeerRelation(type.getType(), id, typeA.getType(), idA, typeZ.getType(), idZ);
    }

    public MockInventoryBuilder withPeerRelation(String type, String id, String typeA, String idA, String typeZ, String idZ) {
        final InventoryObject originalIo = getIoById(type, id);
        final ImmutableInventoryObject.Builder ioBuilder = ImmutableInventoryObject.newBuilderFrom(originalIo);

        ioBuilder.addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                .setType(typeA)
                .setId(idA)
                .setEndpoint(InventoryObjectPeerEndpoint.A)
                .setWeight(PEER_WEIGHT)
                .build());

        ioBuilder.addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                .setType(typeZ)
                .setId(idZ)
                .setEndpoint(InventoryObjectPeerEndpoint.Z)
                .setWeight(PEER_WEIGHT)
                .build());

        // Replace the io with the updated version
        inventoryObjects.set(inventoryObjects.indexOf(originalIo), ioBuilder.build());
        
        return this;
    }

    public MockInventoryBuilder withRelativeRelation(MockInventoryType type, String id, MockInventoryType relativeType, String relativeId) {
        return withRelativeRelation(type.getType(), id, relativeType.getType(), relativeId);
    }

    public MockInventoryBuilder withRelativeRelation(String type, String id, String relativeType, String relativeId) {
        final InventoryObject originalIo = getIoById(type, id);
        final ImmutableInventoryObject.Builder ioBuilder = ImmutableInventoryObject.newBuilderFrom(originalIo);

        ioBuilder.addRelative(ImmutableInventoryObjectRelativeRef.newBuilder()
                .setType(relativeType)
                .setId(relativeId)
                .setWeight(RELATIVE_WEIGHT)
                .build());

        // Replace the io with the updated version
        inventoryObjects.set(inventoryObjects.indexOf(originalIo), ioBuilder.build());
        
        return this;
    }

    private InventoryObject getIoById(String type, String id) {
        return inventoryObjects.stream()
                .filter(io -> type.equals(io.getType()) && id.equals(io.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Could not find element with type: %s and id: %s", type, id)));
    }

    public List<InventoryObject> getInventory() {
        return inventoryObjects;
    }

}
