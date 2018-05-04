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

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.opennms.oce.model.v1.schema.Inventory;
import org.opennms.oce.model.v1.schema.MetaModel;
import org.opennms.oce.model.v1.schema.ModelObjectDef;
import org.opennms.oce.model.v1.schema.ModelObjectEntry;
import org.xml.sax.SAXException;


public class Main {

    private Map<String, Map<String, ModelObjectImpl>> prepareModel(MetaModel metaModel, Inventory inventory) {

        //First, we create buckets of types to fill them later in pass #2
        Map<String, Map<String, ModelObjectImpl>> typeBuckets = new HashMap<>();
        for(ModelObjectDef mod : metaModel.getModelObjectDef()) {
            typeBuckets.put(mod.getType(), new HashMap<>());
        }

        //Second, we fill up type buckets with inventory items based on their types (no relationships yet)
        for(ModelObjectEntry moe : inventory.getModelObjectEntry()) {

            Map<String, ModelObjectImpl> typeBucket = typeBuckets.get(moe.getType());
            typeBucket.put(moe.getId(), new ModelObjectImpl(moe.getId(), null, moe.getType(), moe.getFriendlyName()));
        }

        //Third, building relationships (we traverse inventory instead of map of maps because there could be one to many relationships)
        for(ModelObjectEntry moe : inventory.getModelObjectEntry()) {
            //Find the entity
            ModelObjectImpl obj = findObjectByTypeAndId(moe.getId(), moe.getType(), typeBuckets);
            String parentType = moe.getParentType();
            String parentId = moe.getParentId();

            Map<String, ModelObjectImpl> typeBucket = typeBuckets.get(parentType);

            //skip if the parent is not found
            if(typeBucket == null) continue;

            ModelObjectImpl parent = typeBucket.get(parentId);

            //skip if the parent is not found
            if(parent == null) continue;

            obj.setParent(parent);

        }

        return typeBuckets;

        //Setting up root of the model
        /*ModelObjectImpl parent = new ModelObjectImpl("", null, "Model", "root");
        model.setRoot(parent);

        for(ModelObjectEntry moe : inventory.getModelObjectEntry()) {

            ModelObjectImpl moi = new ModelObjectImpl(moe.getId(), parent, moe.getType(), moe.getFriendlyName());
        }*/


    }

    private ModelObjectImpl findObjectByTypeAndId(String uniqueId, String type, Map<String, Map<String, ModelObjectImpl>> typeBuckets) {
        Map<String, ModelObjectImpl> typeBucket = typeBuckets.get(type);
        if(typeBucket == null) return null;

        return typeBucket.get(uniqueId);

    }

    public void doSomeStuff()  throws JAXBException, SAXException, IOException  {
        final MetaModel metaModel;
        final org.opennms.oce.model.v1.schema.Inventory inventory;

        final File file = new File("/Users/skochetkov/dev/opennms/oce/model/impl/src/main/xsd/model.xsd");
        final SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        final Schema schema = sf.newSchema(file.toURL());

        try (InputStream is = Main.class.getResourceAsStream("/metamodel.xml")) {
            final JAXBContext ctx = JAXBContext.newInstance(MetaModel.class);
            final Unmarshaller unmarshaller = ctx.createUnmarshaller();
            unmarshaller.setSchema(schema);
            metaModel = (MetaModel) unmarshaller.unmarshal(is);
        }
        System.out.println(metaModel);


        try (InputStream is = Main.class.getResourceAsStream("/inventory.xml")) {
            final JAXBContext ctx = JAXBContext.newInstance(org.opennms.oce.model.v1.schema.Inventory.class);
            final Unmarshaller unmarshaller = ctx.createUnmarshaller();
            unmarshaller.setSchema(schema);
            inventory = (Inventory) unmarshaller.unmarshal(is);
        }
        System.out.println(inventory);

        ModelImpl model = (ModelImpl)ModelImpl.getInstance();

        //ModelBuilder builder = new ModelBuilderImpl();
        Map<String, Map<String, ModelObjectImpl>> typeBuckets = prepareModel(metaModel, inventory);

        //Setting up root of the model
        /*ModelObjectImpl parent = new ModelObjectImpl("", null, "Model", "root");
        model.setRoot(parent);

        for(ModelObjectEntry moe : inventory.getModelObjectEntry()) {

            ModelObjectImpl moi = new ModelObjectImpl(moe.getId(), parent, moe.getType(), moe.getFriendlyName());
        }*/

        System.out.println(model);
    }

    public static void main(String[] args) throws JAXBException, SAXException, IOException {
        Main m = new Main();
        m.doSomeStuff();
    }
}
