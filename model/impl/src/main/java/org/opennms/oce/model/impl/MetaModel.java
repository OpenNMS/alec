package org.opennms.oce.model.impl; /*******************************************************************************
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

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

//This statement means that class "org.opennms.oce.model.impl.MetaModel.java" is the root-element
@XmlRootElement( name = "meta-model")
public class MetaModel {

    private ArrayList<MetaModelAttribute> metaModelAttributes;

    @XmlElement(name = "model-object-def")
    public void setMetaModelAttributes(ArrayList<MetaModelAttribute> metaModelAttributes) {
        this.metaModelAttributes = metaModelAttributes;
    }

    public ArrayList<MetaModelAttribute> getMetaModelAttributes() {
        return metaModelAttributes;
    }
}

@XmlType( propOrder = { "type"} )
@XmlRootElement( name = "model-object-def" )
class MetaModelAttribute {
    private String type;

    @XmlAttribute( name = "type", required = true )
    public void setType( String type )
    {
        this.type = type;
    }

    public String getType() {
        return type;
    }

}