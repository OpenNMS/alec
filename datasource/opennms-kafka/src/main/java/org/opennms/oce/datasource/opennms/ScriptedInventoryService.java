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

import org.opennms.oce.datasource.common.inventory.script.ScriptedInventoryException;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObject;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos.InventoryObjects;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.Alarm;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.Node;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos.TopologyEdge;

public interface ScriptedInventoryService {

    Collection<InventoryObject> toInventoryObjects(Node node) throws ScriptedInventoryException;

    EnrichedAlarm enrichAlarm(Alarm alarm) throws ScriptedInventoryException;

    InventoryObjects edgeToInventory(TopologyEdge edge) throws ScriptedInventoryException;

}
