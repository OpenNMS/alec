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

package org.opennms.oce.engine.topology;

import java.util.Map;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;
import org.opennms.oce.datasource.common.InventoryObjectBean;
import org.opennms.oce.engine.topology.model.Model;
import org.opennms.oce.engine.topology.model.ModelObject;
import org.opennms.oce.engine.topology.model.ModelObjectKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class InventoryModelManager {
    private TopologyInventory inventory;
    private Model model;

    private static final Logger LOG = LoggerFactory.getLogger(InventoryModelManager.class);

    public static final String MODEL_ROOT_TYPE = "MODEL";
    public static final String MODEL_ROOT_ID = "model";

    public InventoryModelManager() {

        initInventory();
    }

    private void initInventory() {
        inventory = new TopologyInventory();
        // Create the root
        final InventoryObjectBean rootEntry = new InventoryObjectBean();
        rootEntry.setType(MODEL_ROOT_TYPE);
        rootEntry.setId(MODEL_ROOT_ID);
        inventory.addObject(rootEntry);
    }

    /**
     * Initial load of inventory.
     */
    public InventoryModelManager(TopologyInventory ti) {
        this();
        loadInventory(ti);
    }

    public void appendObject(InventoryObject io) {
        //TODO
    }

    public void removeInventory(TopologyInventory inventoryToRemove) {
        final Map<ModelObjectKey, ModelObject> mosByKey = inventoryToRemove.getInventoryObjectList().stream()
                .collect(Collectors.toMap(ioe -> ModelObjectKey.key(ioe.getType(), ioe.getId()), InventoryModelManager::toModelObject));

        organizeTopologyInventory(mosByKey, inventoryToRemove);

        for (InventoryObject ioe : inventoryToRemove.getInventoryObjectList()) {
            if (((InventoryObjectBean) ioe).isTopLevel()) {
                model.removeObjectById(ioe.getType(), ioe.getId());
            }
        }
    }

    //This assumes that input topology may not be organized structurally
    private void organizeTopologyInventory(Map<ModelObjectKey,ModelObject> mosByKey, TopologyInventory inventoryToProcess) {
        for (InventoryObject ioe : inventoryToProcess.getInventoryObjectList()) {
            final ModelObjectKey key = ModelObjectKey.key(ioe.getType(), ioe.getId());
            final ModelObject mo = mosByKey.get(key);
            if (mo == null) {
                // Should not happen
                throw new IllegalStateException("Cannot find an MO with key: " + key);
            }

            if (MODEL_ROOT_TYPE.equals(mo.getType())) {
                // This is the root element, nothing else to do here
                continue;
            }

            // Setup the parent
            if (ioe.getParentType() == null || ioe.getParentId() == null) {
                throw new IllegalStateException("Parent for MO id '" + ioe.getId() + "' is not provided. " +
                        "If you try appending inventory to existing model you must define a parent of the top level element.");
            }

            final ModelObjectKey parentKey = ModelObjectKey.key(ioe.getParentType(), ioe.getParentId());
            ModelObject parentMo = mosByKey.get(parentKey);


            /** if a parent is provided but it is not in current inventory, it means this is top level element and the parent must live
             * in model. If not, an exception will throw
             */
            if (parentMo == null) {
                parentMo = findParentInModel(ioe.getParentType(), ioe.getParentId());

                //if parent from model found mark the object as top level, else it's bad
                if (parentMo != null) {
                    ((InventoryObjectBean) ioe).setTopLevel(true);
                }
                else {
                    throw new IllegalStateException("Cannot find parent MO with key: " + parentKey + " on MO with key: " + key);
                }
            }
            else {
                mo.setParent(parentMo);
                parentMo.addChild(mo);
            }
        }
    }

    public Model getModel() {
        return model;
    }

    public void clean() {
        model = null;
        initInventory();
    }

    /**
     * Note: in case of using loadInventory for loading additional inventory, it will rebuild the whole inventory.
     * Not efficient. For big structures use appendInventory
     */
    public void loadInventory(TopologyInventory ti) {
        this.inventory.appendInventory(ti);

        if(model != null) {
            //If model exists but there is no root:
            if (model.getRoot() == null) {
                throw new IllegalStateException("Inventory must contain a single object of type '"
                        + MODEL_ROOT_TYPE + "' with id '" + MODEL_ROOT_ID + "'");
            }
            //TODO consider using appendInventory here
            //appendInventory(inventory);
            //return;
        }

        // Create the initial model objects and index them by type/id
        // NOTE: This will throw a IllegalStateException if a duplicate key is found
        final Map<ModelObjectKey, ModelObject> mosByKey = inventory.getInventoryObjectList().stream()
                .collect(Collectors.toMap(ioe -> ModelObjectKey.key(ioe.getType(), ioe.getId()), InventoryModelManager::toModelObject));

        // Now build out the relationships
        buildRelationships(mosByKey, inventory, false);

        // Create the root
        final ModelObject rootMo = mosByKey.get(ModelObjectKey.key(MODEL_ROOT_TYPE, MODEL_ROOT_ID));
        // Create a new model instance
        model = new Model(rootMo);
    }

    /**
     * TODO - The problem is that buildRelationships tries to cover many cases (initial inventory, appending inventory, bulk update with different
     * elements that are not related to each other (example: new device with new cards, new cards for existing device etc etc...))
     * This is currently working properly but each additional scenarios need to be thought carefully.
     *
     */
    public void appendInventory(TopologyInventory ti) {

        //Construct a new inventory model hierarchy to process
        final Map<ModelObjectKey, ModelObject> mosByKey = ti.getInventoryObjectList().stream()
                .collect(Collectors.toMap(ioe -> ModelObjectKey.key(ioe.getType(), ioe.getId()), InventoryModelManager::toModelObject));

        buildRelationships(mosByKey, ti, true);

        //append if above was successful
        this.inventory.appendInventory(ti);

        indexModel(mosByKey, ti);
    }

    private void indexModel(Map<ModelObjectKey,ModelObject> mosByKey, TopologyInventory inventoryToAppend) {
        for (InventoryObject ioe : inventoryToAppend.getInventoryObjectList()) {
            final ModelObjectKey key = ModelObjectKey.key(ioe.getType(), ioe.getId());
            final ModelObject mo = mosByKey.get(key);

            //Index top level elements only to exclude "dangling" nodes
            if (((InventoryObjectBean) ioe).isTopLevel()) {
                model.indexHierarchy(mo);
            }
        }
    }

    /**
     * TODO - (Another refactoring) It is more efficient to use buildRelationships for building relationships only and
     * to insert top level properly structured elements after.
     * Currently buildRelationships takes too much responsibilities..
     * @param mosByKey
     * @param inventoryToProcess
     * @param isAppend - specify if this is to append to existing inventory. False is default.
     */
    private void buildRelationships(Map<ModelObjectKey,ModelObject> mosByKey, TopologyInventory inventoryToProcess, boolean isAppend) {
        for (InventoryObject ioe : inventoryToProcess.getInventoryObjectList()) {
            final ModelObjectKey key = ModelObjectKey.key(ioe.getType(), ioe.getId());
            final ModelObject mo = mosByKey.get(key);
            if (mo == null) {
                // Should not happen
                throw new IllegalStateException("Cannot find an MO with key: " + key);
            }

            if (MODEL_ROOT_TYPE.equals(mo.getType())) {
                // This is the root element, nothing else to do here
                continue;
            }

            // Setup the parent
            if (ioe.getParentType() == null || ioe.getParentId() == null) {
                throw new IllegalStateException("Parent for MO id '" + ioe.getId() + "' is not provided. " +
                        "If you try appending inventory to existing model you must define a parent of the top level element.");
            }

            final ModelObjectKey parentKey = ModelObjectKey.key(ioe.getParentType(), ioe.getParentId());
            ModelObject parentMo = mosByKey.get(parentKey);

            /** if a parent is provided but it is not in current inventory, it means this is top level element and the parent must live
             * in model. If not, an exception will throw
             */

            if (isAppend && parentMo == null) {
                parentMo = findParentInModel(ioe.getParentType(), ioe.getParentId());

                //Mark the object as top level
                if (parentMo != null) {
                    ((InventoryObjectBean) ioe).setTopLevel(true);
                }
            }

            //if a parent is provided but not found for initial topology
            if (parentMo == null) {
                throw new IllegalStateException("Cannot find parent MO with key: " + parentKey + " on MO with key: " + key);
            }

            mo.setParent(parentMo);
            parentMo.addChild(mo);

            // Setup the peers
            for (InventoryObjectPeerRef peerRef : ioe.getPeers()) {
                final ModelObjectKey peerKey = ModelObjectKey.key(peerRef.getType(), peerRef.getId());
                final ModelObject peerMo = mosByKey.get(peerKey);
                if (peerMo == null) {
                    throw new IllegalStateException("Cannot find peer MO with key: " + peerKey + " on MO with key: " + key);
                }
                mo.addPeer(peerMo);
                peerMo.addPeer(mo);
            }

            // Setup the relatives
            for (InventoryObjectRelativeRef relativeRef : ioe.getRelatives()) {
                final ModelObjectKey relativeKey = ModelObjectKey.key(relativeRef.getType(), relativeRef.getId());
                final ModelObject relativeMo = mosByKey.get(relativeKey);
                if (relativeMo == null) {
                    throw new IllegalStateException("Cannot find relative MO with key: " + relativeRef + " on MO with key: " + key);
                }
                mo.addUncle(relativeMo);
                relativeMo.addNephew(mo);
            }
        }
    }

    private ModelObject findParentInModel(String parentType, String parentId) {
        return model.getObjectById(parentType, parentId);
    }

    private static ModelObject toModelObject(InventoryObject ioe) {
        final ModelObject mo = new ModelObject(ioe.getType(), ioe.getId());
        mo.setFriendlyName(ioe.getFriendlyName());
        return mo;
    }
}
