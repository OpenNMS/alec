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

import static org.opennms.oce.engine.topology.model.ModelObjectKey.key;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;

/**
 * the class is deprecated now and replaced with stateful InventoryModelManager
 */
@Deprecated
public class ModelBuilderImpl {

    public static final String MODEL_ROOT_TYPE = "Model";
    public static final String MODEL_ROOT_ID = "model";

    public static Model buildModel(List<InventoryObject> inventory) {
        // Create the initial model objects and index them by type/id
        // NOTE: This will throw a IllegalStateException if a duplicate key is found
        final Map<ModelObjectKey, ModelObject> mosByKey = inventory.stream()
                .collect(Collectors.toMap(moe -> key(moe.getType(), moe.getId()), ModelBuilderImpl::toModelObject));

        // Create the root element if missing
        final ModelObjectKey rootKey = key(MODEL_ROOT_TYPE, MODEL_ROOT_ID);
        final ModelObject rootMo = mosByKey.computeIfAbsent(rootKey, (key) -> new ModelObject(MODEL_ROOT_TYPE, MODEL_ROOT_ID));
        // Also index the root element at the null key, so that entries without a parent type/id will be assocated with the root
        final ModelObjectKey nullKey = key(null, null);
        mosByKey.put(nullKey, rootMo);

        // Now build out the relationships
        inventory.forEach(io -> {
            final ModelObjectKey key = key(io.getType(), io.getId());
            final ModelObject mo = mosByKey.get(key);
            if (mo == null) {
                // Should not happen
                throw new IllegalStateException("Oops. Cannot find an MO with key: " + key);
            }

            if (MODEL_ROOT_TYPE.equals(mo.getType())) {
                // This is the root element, nothing else to do here
                return;
            }

            // Setup the parent
            final ModelObjectKey parentKey = key(io.getParentType(), io.getParentId());
            final ModelObject parentMo = mosByKey.get(parentKey);
            if (parentMo == null) {
                throw new IllegalStateException("Oops. Cannot find parent MO with key: " + parentKey + " on MO with key: " + key);
            }
            mo.setParent(parentMo);
            parentMo.addChild(mo);

            // Setup the peers
            for (InventoryObjectPeerRef peerRef : io.getPeers()) {
                final ModelObjectKey peerKey = key(peerRef.getType(), peerRef.getId());
                final ModelObject peerMo = mosByKey.get(peerKey);
                if (peerMo == null) {
                    throw new IllegalStateException("Oops. Cannot find peer MO with key: " + peerKey + " on MO with key: " + key);
                }
                mo.addPeer(peerMo);
                peerMo.addPeer(mo);
            }

            // Setup the relatives
            for (InventoryObjectRelativeRef relativeRef : io.getRelatives()) {
                final ModelObjectKey relativeKey = key(relativeRef.getType(), relativeRef.getId());
                final ModelObject relativeMo = mosByKey.get(relativeKey);
                if (relativeMo == null) {
                    throw new IllegalStateException("Oops. Cannot find relative MO with key: " + relativeRef + " on MO with key: " + key);
                }
                mo.addUncle(relativeMo);
                relativeMo.addNephew(mo);
            }
        });

        // Create a new model instance
        return new Model(rootMo);
    }

    private static ModelObject toModelObject(InventoryObject io) {
        final ModelObject mo = new ModelObject(io.getType(), io.getId());
        mo.setFriendlyName(io.getFriendlyName());
        return mo;
    }


}
