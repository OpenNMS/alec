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

package org.opennms.oce.model.impl;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ModelImpl implements Model {

    private static final Logger LOG = LoggerFactory.getLogger(ModelImpl.class);
    private final Map<String, Map<String, ModelObject>> mosByTypeAndById = new HashMap<>();
    private final ModelObject root;

    public ModelImpl(ModelObject root) {
        this.root = Objects.requireNonNull(root);
        // Index the tree
        index(root);
    }

    @Override
    public ModelObject getObjectById(String type, String id) {
        return mosByTypeAndById.getOrDefault(type, Collections.emptyMap()).get(id);
    }

    @Override
    public Map<String, ModelObject> getObjectsByIdForType(String type) {
        return mosByTypeAndById.get(type);
    }

    @Override
    public Set<String> getTypes() {
        return mosByTypeAndById.keySet();
    }

    @Override
    public ModelObject getRoot() {
        return root;
    }

    public void addObjects(Set<ModelObject> moList) {

        if(moList.isEmpty()) {
            LOG.info("Loaded model objects list is empty.");
            return;
        }
        else {
            LOG.debug("Model object list size is : {}", moList.size());
        }

        /** simple iteration for a while
         * THINGS TO CONSIDER:
         * - If model objects in the list are somehow related to each other, eg parent child (device and card)
         * -- define order of insertion/orchestration?
         * -- can they be combined as single insertion?
         * -- etc
        **/
        for(ModelObject mo : moList) {
            addObject(mo);
        }
    }

    /**
     * The assumption is that model object contains all its hierarchy, for example if it is device,
     * then it should have cards and ports, but if it is a new card, then there should be parent provided
     * @param mo
     */
    public void addObject(ModelObject mo) {
        addObject((ModelObjectImpl)mo);
    }

    /**
     * Decouple abstraction from implementation
     * @param mo
     */
    private void addObject(ModelObjectImpl mo) {
        if(getObjectById(mo.getType(), mo.getId()) != null) {
            throw new IllegalStateException("Object " + mo.getId() + " with type " + mo.getType() + " already exists '");
        }

        //TODO

        // Check level of hierarchy
        // -- If it is top level (device), attach to root
        // -- If it is mid level (card), attach to the parent (check if parent exists)
        // -- Consider other cases (find peers etc)
    }

    public void removeObjectById(String type, String id) {
        if(getObjectById(type, id) == null) {
            throw new IllegalStateException("Object " + id + " with type " + type + " doesn't exist'");
        }

        //TODO
    }

    private void index(ModelObject mo) {
        // Index
        final Map<String, ModelObject> mosById = mosByTypeAndById.computeIfAbsent(mo.getType(), e -> new HashMap<>());
        mosById.put(mo.getId(), mo);

        // Recurse
        for (ModelObject child : mo.getChildren()) {
            index(child);
        }
    }
}
