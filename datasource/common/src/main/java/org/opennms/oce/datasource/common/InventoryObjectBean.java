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

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.opennms.oce.datasource.api.InventoryObject;

public class InventoryObjectBean implements InventoryObject {
    private String type;
    private String id;
    private String parentType;
    private String parentId;
    private String subtype;
    private String friendlyName;
    private List<InventoryObjectPeerRefBean> peers = new ArrayList<>();
    private List<InventoryObjectRelativeRefBean> relatives = new ArrayList<>();

    public InventoryObjectBean() {}

    public InventoryObjectBean(String type, String id, String subtype, String parentType, String parentId) {
        this.type = Objects.requireNonNull(type);
        this.id = Objects.requireNonNull(id);
        this.subtype = subtype;
        this.parentType = Objects.requireNonNull(parentType);
        this.parentId = Objects.requireNonNull(parentId);
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

    @Override
    public String getSubtype() { return subtype; }

    public void setSubtype(String value) { this.subtype = value; }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String getParentType() {
        return parentType;
    }

    public void setParentType(String parentType) {
        this.parentType = parentType;
    }

    @Override
    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    @Override
    public String getFriendlyName() {
        return friendlyName;
    }

    public void setFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
    }

    @Override
    public List<InventoryObjectPeerRefBean> getPeers() {
        return peers;
    }

    public void setPeers(List<InventoryObjectPeerRefBean> peers) {
        this.peers = peers;
    }

    public void addPeer(InventoryObjectPeerRefBean pRef) {
        if (peers == null) {
            peers = new ArrayList<>();
        }
        peers.add(pRef);
    }

    @Override
    public List<InventoryObjectRelativeRefBean> getRelatives() {
        return relatives;
    }

    public void setRelatives(List<InventoryObjectRelativeRefBean> relatives) {
        this.relatives = relatives;
    }

    public void addRelative(InventoryObjectRelativeRefBean relRef) {
        if (relatives == null) {
            relatives = new ArrayList<>();
        }
        relatives.add(relRef);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InventoryObjectBean that = (InventoryObjectBean) o;
        return Objects.equals(type, that.type) &&
                Objects.equals(id, that.id) &&
                Objects.equals(parentType, that.parentType) &&
                Objects.equals(parentId, that.parentId) &&
                Objects.equals(friendlyName, that.friendlyName) &&
                Objects.equals(peers, that.peers) &&
                Objects.equals(relatives, that.relatives);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, id, parentType, parentId, friendlyName, peers, relatives);
    }

    @Override
    public String toString() {
        return "InventoryObjectBean{" +
                "type='" + type + '\'' +
                ", id='" + id + '\'' +
                ", parentType='" + parentType + '\'' +
                ", parentId='" + parentId + '\'' +
                ", friendlyName='" + friendlyName + '\'' +
                ", peers=" + peers +
                ", relatives=" + relatives +
                '}';
    }
}
