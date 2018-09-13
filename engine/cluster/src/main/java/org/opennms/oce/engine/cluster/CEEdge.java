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

package org.opennms.oce.engine.cluster;

import java.util.Optional;

import org.opennms.oce.datasource.api.InventoryObjectPeerRef;
import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;
import org.opennms.oce.features.graph.api.Edge;

public class CEEdge implements Edge {
    private final long id;
    private InventoryObjectPeerRef peerRef;
    private InventoryObjectRelativeRef relativeRef;

    public CEEdge(long id) {
        this.id = id;
    }

    public CEEdge(long id, InventoryObjectPeerRef peerRef) {
        this.id = id;
        this.peerRef = peerRef;
    }

    public CEEdge(long id, InventoryObjectRelativeRef relativeRef) {
        this.id = id;
        this.relativeRef = relativeRef;
    }

    @Override
    public String getId() {
        return Long.toString(id);
    }

    @Override
    public Optional<InventoryObjectPeerRef> getInventoryObjectPeerRef() {
        return Optional.ofNullable(peerRef);
    }

    @Override
    public Optional<InventoryObjectRelativeRef> getInventoryObjectRelativeRef() {
        return Optional.ofNullable(relativeRef);
    }
}
