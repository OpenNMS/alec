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
import java.util.List;

import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlAccessType;

@XmlRootElement( name = "meta-model")
public class MetaModel {

    private ArrayList<MetaModelObjectDef> metaModel;

    @XmlElement(name = "model-object-def")
    public void setMetaModel(ArrayList<MetaModelObjectDef> metaModel) {
        this.metaModel = metaModel;
    }

    public ArrayList<MetaModelObjectDef> getMetaModel() {
        return metaModel;
    }

    @Override
    public String toString() {

        StringBuilder sb = new StringBuilder();
        for(MetaModelObjectDef mm : getMetaModel()) {
            sb.append(" Element : " + "\n");
            sb.append("    Type : " + mm.getType() + "\n");
            if(mm.getParentRef() == null) continue;
            for(MetaModelParentRef parentRef : mm.getParentRef().getParentRef()) {
                sb.append("       Parent ref : " + parentRef.getType()+ "\n");
            }
        }
        return sb.toString();
    }
}

@XmlAccessorType(XmlAccessType.FIELD)
class MetaModelObjectDef {
    @XmlAttribute
    private String type;

    @XmlElement(name = "parents-ref")
    private MetaModelParentsRef parentsRef;

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setParentsRef(MetaModelParentsRef parentsRef) {
        this.parentsRef = parentsRef;
    }

    @XmlElement(name = "parents-ref")
    public MetaModelParentsRef getParentRef() {
        return parentsRef;
    }
}

@XmlAccessorType(XmlAccessType.FIELD)
class MetaModelParentsRef {
    @XmlElement(name = "parent-ref")
    private List<MetaModelParentRef> parentRef;

    public List<MetaModelParentRef> getParentRef() {
        return parentRef;
    }

    public void setParentRef(List<MetaModelParentRef> parentRef) {
        this.parentRef = parentRef;
    }
}


@XmlAccessorType(XmlAccessType.FIELD)
class MetaModelParentRef {
    @XmlAttribute
    private String type;

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}