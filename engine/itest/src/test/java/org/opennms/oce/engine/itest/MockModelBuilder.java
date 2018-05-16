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

import java.util.ArrayList;
import java.util.List;

import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.impl.ModelBuilderImpl;
import org.opennms.oce.model.v1.schema.Inventory;
import org.opennms.oce.model.v1.schema.MetaModel;
import org.opennms.oce.model.v1.schema.ModelObjectEntry;
import org.opennms.oce.model.v1.schema.PeerRef;
import org.opennms.oce.model.v1.schema.RelativeRef;

public class MockModelBuilder {
    private final List<ModelObjectEntry> modelObjects = new ArrayList<>();

    public MockModelBuilder withModelObject(String type, String id) {
        return withModelObject(type, id, ModelBuilderImpl.MODEL_ROOT_TYPE, ModelBuilderImpl.MODEL_ROOT_ID);
    }

    public MockModelBuilder withModelObject(String type, String id, String parentType, String parentId) {
        final ModelObjectEntry moe = new ModelObjectEntry();
        moe.setType(type);
        moe.setId(id);
        moe.setParentType(parentType);
        moe.setParentId(parentId);
        modelObjects.add(moe);
        return this;
    }

    public MockModelBuilder withPeerRelation(String type, String id, String typeA, String idA, String typeZ, String idZ) {
        final ModelObjectEntry moe = getMoById(type, id);

        PeerRef peerRefA = new PeerRef();
        peerRefA.setType(typeA);
        peerRefA.setId(idA);
        peerRefA.setEndpoint("A");
        moe.getPeerRef().add(peerRefA);

        PeerRef peerRefZ = new PeerRef();
        peerRefZ.setType(typeZ);
        peerRefZ.setId(idZ);
        peerRefZ.setEndpoint("Z");
        moe.getPeerRef().add(peerRefZ);

        return this;
    }

    public MockModelBuilder withRelativeRelation(String type, String id, String relativeType, String relativeId) {
        final ModelObjectEntry moe = getMoById(type, id);

        RelativeRef relativeRef = new RelativeRef();
        relativeRef.setType(relativeType);
        relativeRef.setId(relativeId);
        moe.getRelativeRef().add(relativeRef);

        return this;
    }

    private ModelObjectEntry getMoById(String type, String id) {
        return modelObjects.stream()
                .filter(mo -> type.equals(mo.getType()) && id.equals(mo.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Could not find element with type: %s and id: %s", type, id)));
    }

    public Model build() {
        final MetaModel metaModel = new MetaModel();
        final Inventory inventory = new Inventory();

        final ModelObjectEntry rootEntry = new ModelObjectEntry();
        rootEntry.setType(ModelBuilderImpl.MODEL_ROOT_TYPE);
        rootEntry.setId(ModelBuilderImpl.MODEL_ROOT_ID);
        inventory.getModelObjectEntry().add(rootEntry);

        inventory.getModelObjectEntry().addAll(modelObjects);

        final ModelBuilderImpl modelBuilder = new ModelBuilderImpl();
        return modelBuilder.buildModel(metaModel, inventory);
    }


}
