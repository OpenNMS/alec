package org.opennms.oce.model.impl;

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

import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.v1.schema.Inventory;
import org.opennms.oce.model.v1.schema.MetaModel;
import org.opennms.oce.model.v1.schema.ModelObjectDef;
import org.opennms.oce.model.v1.schema.ModelObjectEntry;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;


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

public class ModelBuilderImpl implements ModelBuilder {
    private static final Logger LOG = LoggerFactory.getLogger(ModelBuilderImpl.class);
    private Map<String, Map<String, ModelObjectImpl>> typeBuckets = new HashMap<>();
    private final String METAMODEL_RESOURCE = "/metamodel.xml";
    private final String INVENTORY_RESOURCE = "/inventory.xml";
    private final String SCHEMA_RESOURCE = "/model.xsd";
    private BundleContext bcontext;

    @Override
    public Model buildModel()  {
        ModelImpl model = (ModelImpl)ModelImpl.getInstance();

        try {
            final Schema schema = getSchema(SCHEMA_RESOURCE);


            MetaModel metaModel = getModelObject(schema);

            LOG.info("MetaModels : " + metaModel);

            Inventory inventory =  getInventory(schema);

            LOG.info("Inventory : " + inventory);

            buildModel(metaModel, inventory, model);

            //TODO remove debugging garbage
            LOG.info("Build Model : " + model);
        } catch (IOException e) {
            LOG.error("Model builder failed: ", e);
        } catch (SAXException e) {
            LOG.error("Model builder failed with SAXException: ", e);
        } catch(JAXBException e ) {
            e.printStackTrace();
            LOG.error("Model builder has issues with jaxb: ", e);
        }

        return model;
    }

    private void buildModel(MetaModel metaModel, Inventory inventory, ModelImpl model) {
        prepareModel(metaModel, inventory);

        //Setting up root of the model
        ModelObjectImpl parent = new ModelObjectImpl("Model", null, "Model", "root");
        model.setRoot(parent);

        // TODO - Build model out of map of maps of relationships (typeBuckets)

    }

    private Map<String, Map<String, ModelObjectImpl>> prepareModel(MetaModel metaModel, Inventory inventory) {

        //First, we create buckets of types to fill them later in pass #2
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
            ModelObjectImpl obj = findObjectByTypeAndId(moe.getId(), moe.getType());
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
    }

    private ModelObjectImpl findObjectByTypeAndId(String uniqueId, String type) {
        Map<String, ModelObjectImpl> typeBucket = typeBuckets.get(type);
        if(typeBucket == null) return null;

        return typeBucket.get(uniqueId);

    }

    private MetaModel getModelObject(final Schema schema) throws JAXBException, IOException {
        try(InputStream is = getResourceStream(METAMODEL_RESOURCE)) {
            JAXBContext ctx = JAXBContext.newInstance(MetaModel.class);
            Unmarshaller unmarshaller = ctx.createUnmarshaller();
            unmarshaller.setSchema(schema);
            MetaModel metaModel = (MetaModel) unmarshaller.unmarshal(is);

            //do some tweaks here before return
            return metaModel;
        }
    }

    private Inventory getInventory(final Schema schema) throws JAXBException, IOException {
        try(InputStream is = getResourceStream(INVENTORY_RESOURCE)) {
            JAXBContext ctx = JAXBContext.newInstance(Inventory.class);
            Unmarshaller unmarshaller = ctx.createUnmarshaller();
            unmarshaller.setSchema(schema);
            Inventory inventory = (Inventory) unmarshaller.unmarshal(is);

            //do some tweaks here before return
            return inventory;
        }
    }

    private InputStream getResourceStream(final String resource) throws IOException {
        Bundle bundle = bcontext.getBundle();

        if(bcontext != null) {
            return bundle.getEntry(resource).openStream();
        } else {
            //This currently doesn't work
            InputStream inStream = ModelBuilderImpl.class.getResourceAsStream(resource);
            return inStream;
        }
    }

    private Schema getSchema(final String resource) throws SAXException {
        Bundle bundle = bcontext.getBundle();
        final SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        return sf.newSchema(bundle.getEntry(resource));
    }

    public void setBcontext(BundleContext bcontext) {
        this.bcontext = bcontext;
    }
}
