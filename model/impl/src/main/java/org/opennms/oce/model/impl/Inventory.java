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

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement( name = "inventory")
public class Inventory {

    private ArrayList<InventoryElement> inventoryElements;

    @XmlElement(name = "model-object")
    public void setInventoryElements(ArrayList<InventoryElement> inventoryElements) {
        this.inventoryElements = inventoryElements;
    }

    public ArrayList<InventoryElement> getInventoryElements() {
        return inventoryElements;
    }

    @Override
    public String toString() {

        StringBuilder sb = new StringBuilder();
        for(InventoryElement mo : getInventoryElements()) {
            sb.append(" Element : " + "\n");
            sb.append("    Type : " + mo.getType() + "\n");
        }
        return sb.toString();
    }
}

@XmlAccessorType(XmlAccessType.FIELD)
class InventoryElement {
    @XmlAttribute
    private String type;

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
