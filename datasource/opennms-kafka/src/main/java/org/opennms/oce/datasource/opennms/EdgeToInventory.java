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

import java.util.Objects;

import org.opennms.oce.datasource.common.inventory.script.ScriptedInventoryException;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.annotations.VisibleForTesting;

public class EdgeToInventory {

    private static final Logger LOG = LoggerFactory.getLogger(EdgeToInventory.class);

    private final ScriptedInventoryService inventoryService;
    
    public EdgeToInventory(ScriptedInventoryService inventoryService) {
        this.inventoryService = Objects.requireNonNull(inventoryService);
    }

    public InventoryModelProtos.InventoryObjects toInventoryObjects(OpennmsModelProtos.TopologyEdge edge) {
        try {
            return inventoryService.edgeToInventory(edge);
        } catch (ScriptedInventoryException e) {
            LOG.error("Failed to get Inventory for Edge: {} : {}", edge, e.getCause().getMessage());
            throw new RuntimeException(e);
        }
    }

    @VisibleForTesting
    static String getIdForEdge(OpennmsModelProtos.TopologyEdge edge) {
        return String.format("%s:%s:%d:%s:%d", edge.getRef().getProtocol(),
                OpennmsMapper.toNodeCriteria(edge.getSource().getNodeCriteria()), edge.getSource().getIfIndex(),
                OpennmsMapper.toNodeCriteria(edge.getTargetPort().getNodeCriteria()), edge.getTargetPort().getIfIndex());
    }
}
