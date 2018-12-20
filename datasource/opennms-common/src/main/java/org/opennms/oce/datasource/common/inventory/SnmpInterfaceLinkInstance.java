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

package org.opennms.oce.datasource.common.inventory;

public class SnmpInterfaceLinkInstance {

    private String aNodeCriteria;
    private Integer aIfIndex;
    private String zNodeCriteria;
    private Integer zIfIndex;

    public SnmpInterfaceLinkInstance(String aNodeCriteria, Integer aIfIndex, String zNodeCriteria, Integer zIfIndex) {
        if (aNodeCriteria != null && zNodeCriteria != null && aNodeCriteria.compareTo(zNodeCriteria) > 0) {
            // Swap
            this.aNodeCriteria = zNodeCriteria;
            this.aIfIndex = zIfIndex;
            this.zNodeCriteria = aNodeCriteria;
            this.zIfIndex = aIfIndex;
        } else {
            this.aNodeCriteria = aNodeCriteria;
            this.aIfIndex = aIfIndex;
            this.zNodeCriteria = zNodeCriteria;
            this.zIfIndex = zIfIndex;
        }
    }

    public SnmpInterfaceLinkInstance() {}

    public String getANodeCriteria() {
        return aNodeCriteria;
    }

    public void setANodeCriteria(String aNodeCriteria) {
        this.aNodeCriteria = aNodeCriteria;
    }

    public Integer getAIfIndex() {
        return aIfIndex;
    }

    public void setAIfIndex(Integer aIfIndex) {
        this.aIfIndex = aIfIndex;
    }

    public String getZNodeCriteria() {
        return zNodeCriteria;
    }

    public void setZNodeCriteria(String zNodeCriteria) {
        this.zNodeCriteria = zNodeCriteria;
    }

    public Integer getZIfIndex() {
        return zIfIndex;
    }

    public void setZIfIndex(Integer zIfIndex) {
        this.zIfIndex = zIfIndex;
    }
}
