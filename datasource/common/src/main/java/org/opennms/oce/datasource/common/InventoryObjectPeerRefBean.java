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

package org.opennms.oce.datasource.common;

import java.util.Objects;

import org.opennms.oce.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.oce.datasource.api.InventoryObjectPeerRef;

public class InventoryObjectPeerRefBean implements InventoryObjectPeerRef {
    private String type;
    private String id;
    private InventoryObjectPeerEndpoint endpoint;

    public InventoryObjectPeerRefBean() {}
    public InventoryObjectPeerRefBean(String type, String id, InventoryObjectPeerEndpoint endpoint) {
        this.type = Objects.requireNonNull(type);
        this.id = Objects.requireNonNull(id);
        this.endpoint = Objects.requireNonNull(endpoint);
    }
    @Override
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public InventoryObjectPeerEndpoint getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(InventoryObjectPeerEndpoint endpoint) {
        this.endpoint = endpoint;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InventoryObjectPeerRefBean that = (InventoryObjectPeerRefBean) o;
        return Objects.equals(type, that.type) &&
                Objects.equals(id, that.id) &&
                endpoint == that.endpoint;
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, id, endpoint);
    }

    @Override
    public String toString() {
        return "InventoryObjectPeerRefBean{" +
                "type='" + type + '\'' +
                ", id='" + id + '\'' +
                ", endpoint=" + endpoint +
                '}';
    }
}
