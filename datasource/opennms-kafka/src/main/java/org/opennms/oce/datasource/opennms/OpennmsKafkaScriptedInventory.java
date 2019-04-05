/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.oce.datasource.opennms;

import java.util.Collection;
import java.util.List;

import javax.script.ScriptException;

import org.opennms.oce.datasource.common.inventory.script.AbstractScriptedInventory;
import org.opennms.oce.datasource.common.inventory.script.ScriptedInventoryException;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObjects;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.TopologyEdge;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author smith
 *
 */
public class OpennmsKafkaScriptedInventory extends AbstractScriptedInventory implements ScriptedInventoryService {

    private static final Logger LOG = LoggerFactory.getLogger(OpennmsKafkaScriptedInventory.class);

    public OpennmsKafkaScriptedInventory(String scriptPath, long scriptCacheMillis, BundleContext bundleContext) {
        super(scriptPath, scriptCacheMillis, bundleContext);
    }
    
    public static OpennmsKafkaScriptedInventory withDefaults() {
        // Empty string results in the default script being loaded
        return new OpennmsKafkaScriptedInventory(DEFAULT_SCRIPT_FULL_PATH, 30000, null);
    }

    public void init() {
        LOG.info("OpennmsKafkaScriptedInventory init'd");
    }

    @Override
    public InventoryObjects edgeToInventory(TopologyEdge edge) throws ScriptedInventoryException {
        try {
            return (InventoryObjects) getInvocable().invokeFunction("edgeToInventory", edge);
        } catch (NoSuchMethodException | ScriptException e) {
            throw new ScriptedInventoryException("Failed getInventoryFromAlarm", e);
        }
    }

    @Override
    public EnrichedAlarm enrichAlarm(OpennmsModelProtos.Alarm alarm) throws ScriptedInventoryException {
        try {
            return (EnrichedAlarm) getInvocable().invokeFunction("enrichAlarm", alarm);
        } catch (NoSuchMethodException | ScriptException e) {
            throw new ScriptedInventoryException("Failed enrichAlarm", e);
        }
    }

    @Override
    @SuppressWarnings("unchecked")
    public Collection<InventoryModelProtos.InventoryObject> toInventoryObjects(OpennmsModelProtos.Node node) throws ScriptedInventoryException {
        try {
            return (List<InventoryModelProtos.InventoryObject>) getInvocable().invokeFunction("toInventoryObjects", node);
        } catch (NoSuchMethodException | ScriptException e) {
            throw new ScriptedInventoryException("Failed node toInventoryObjects", e);
        }
    }

}
