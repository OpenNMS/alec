package org.opennms.oce.model.impl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;

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

public class ModelImpl implements Model {

    private Map<String, ModelObject> modelMap = new HashMap<>();
    private ModelObject root;
    private static Model model;

    /**
     * Making impl singleton
     */
    private ModelImpl() {}

    public static Model getInstance() {
        if(model == null)
            model = new ModelImpl();

        return model;
    }

    @Override
    public ModelObject getObjectById(String id) {

        for (Map.Entry<String, ModelObject> entry : modelMap.entrySet())
        {
            if(entry.getValue().getId().equals(id))
               return entry.getValue();
        }

        return null;
    }

    public void setObjectById(String id, ModelObject obj) {

        modelMap.put(id, obj);
    }

    /**
     * If type does not exist, return null
     */
    @Override
    public Map<String, ModelObject> getObjectsByIdForType(String type) {

        Map<String, ModelObject> byIdForType = new HashMap<>();

        for (Map.Entry<String, ModelObject> entry : modelMap.entrySet())
        {
            if(entry.getValue().getType().equals(type))
                byIdForType.put(entry.getKey(), entry.getValue());
        }
        return byIdForType;
    }

    @Override
    public ModelObject getRoot() {
        return root;
    }

    @Override
    public Set<String> getTypes() {
        Set<String> typeSet = new HashSet<>();
        for (Map.Entry<String, ModelObject> entry : modelMap.entrySet())
        {
            typeSet.add(entry.getValue().getType());
        }
        return typeSet;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, ModelObject> entry : modelMap.entrySet())
        {
            sb.append("Model object: " + entry.getKey() + " with type: " + entry.getValue().getType() + "\n");
        }
        return sb.toString();
    }
}
