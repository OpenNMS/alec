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

import java.util.ArrayDeque;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Queue;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Model {

    private static final Logger LOG = LoggerFactory.getLogger(Model.class);
    private final Map<String, Map<String, ModelObject>> mosByTypeAndById = new HashMap<>();
    private final ModelObject root;

    public Model(ModelObject root) {
        this.root = Objects.requireNonNull(root);
        // Index the tree
        index(root);
    }

    
    public ModelObject getObjectById(String type, String id) {
        return mosByTypeAndById.getOrDefault(type, Collections.emptyMap()).get(id);
    }

    
    public Map<String, ModelObject> getObjectsByIdForType(String type) {
        return mosByTypeAndById.get(type);
    }

    
    public Set<String> getTypes() {
        return mosByTypeAndById.keySet();
    }

    
    public ModelObject getRoot() {
        return root;
    }

    
    public int getSize() {
        //TODO efficiently
        return 0;
    }

    
    public void printModel() {

        Queue<ModelObject> q = new LinkedList<>();
        LOG.info("Model is:");


        q.add(root);
        while(!q.isEmpty()) {
            int levelSize = q.size();
            for(int i = 0; i < levelSize; i++) {
                ModelObject currNode = q.poll();

                LOG.info(currNode.toString());

                for(ModelObject someChild : currNode.getChildren()) {
                    q.add(someChild);
                }
            }
        }
    }

    
    public void updateObjects(List<ModelObject> moList){}

    
    public void updateObject(ModelObject mo){}

    
    public void addObjects(List<ModelObject> moList) {

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
        String type = mo.getType();
        if(getObjectById(type, mo.getId()) != null) {
            throw new IllegalStateException("Object " + mo.getId() + " with type " + type + " already exists '");
        }

        //checking if this is a new type, if yes, create new typ
        if(mosByTypeAndById.get(type) == null) {
            mosByTypeAndById.put(type, new HashMap<>());
        }

        //if there is no parent we assume that this is top level network element
        if(mo.getParent() == null) {
            mo.setParent(root);
        }

        Map<String, ModelObject> typeMap = mosByTypeAndById.get(type);
        typeMap.put(mo.getId(), mo);

        //handle hierarchy etc
        Queue<ModelObject> q = new LinkedList<>();

        q.add(mo);
        while(!q.isEmpty()) {
            int levelSize = q.size();
            for(int i = 0; i < levelSize; i++) {
                ModelObject currNode = q.poll();

                if(mosByTypeAndById.get(currNode.getType()) == null) {
                    mosByTypeAndById.put(currNode.getType(), new HashMap<>());
                }

                mosByTypeAndById.get(currNode.getType()).put(currNode.getId(), currNode);

                for(ModelObject someChild : currNode.getChildren()) {
                    q.add(someChild);
                }
            }
        }

        //TODO
        // Check level of hierarchy
        // -- If it is mid level (card), attach to the parent (check if parent exists)
    }

    
    public void removeObjectById(String type, String id) {
        if(getObjectById(type, id) == null) {
            throw new IllegalStateException("Object " + id + " with type " + type + " doesn't exist'");
        }

        //start removing from the bottom up
        Deque<ModelObject> stack = new ArrayDeque<ModelObject>();
        Queue<ModelObject> stackToRemove = new LinkedList<>();

        ModelObject obj = getObjectById(type, id);
        stack.push(obj);
        while(!stack.isEmpty()) {
            int levelSize = stack.size();
            for(int i = 0; i < levelSize; i++) {
                ModelObject currNode = stack.pop();
                stackToRemove.add(currNode);

                if(mosByTypeAndById.get(currNode.getType()) == null) {
                    mosByTypeAndById.put(currNode.getType(), new HashMap<>());
                }

                mosByTypeAndById.get(currNode.getType()).put(currNode.getId(), currNode);

                for(ModelObject someChild : currNode.getChildren()) {
                    stack.push(someChild);
                }
            }
        }

        ModelObject first = ((LinkedList<ModelObject>) stackToRemove).peekFirst();
        ModelObject last = ((LinkedList<ModelObject>) stackToRemove).peekLast();

        for(ModelObject objToRemove : stackToRemove) {
            mosByTypeAndById.get(objToRemove.getType()).remove(objToRemove.getId());
        }

        //TODO
        // Handle cases of non top level objects (cards)
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
