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

import static org.opennms.oce.model.impl.ModelObjectKey.key;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;
import java.util.stream.Collectors;

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
import org.opennms.oce.model.v1.schema.ModelObjectEntry;
import org.opennms.oce.model.v1.schema.PeerRef;
import org.opennms.oce.model.v1.schema.RelativeRef;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;

import com.google.common.base.Strings;

public class ModelBuilderImpl implements ModelBuilder {
    private static final Logger LOG = LoggerFactory.getLogger(ModelBuilderImpl.class);

    public static final String MODEL_ROOT_TYPE = "Model";
    public static final String MODEL_ROOT_ID = "model";

    private static final String METAMODEL_RESOURCE = "/metamodel.xml";
    private static final String INVENTORY_RESOURCE = "/inventory.xml";
    private static final String SCHEMA_RESOURCE = "/model.v1.xsd";

    private final BundleContext bundleContext;
    private final Schema modelSchema;
    private final JAXBContext jaxbContext;

    private String metamodelPath = METAMODEL_RESOURCE;
    private String inventoryPath = INVENTORY_RESOURCE;

    public ModelBuilderImpl() {
        this(null);
    }

    public ModelBuilderImpl(BundleContext bundleContext) {
        this.bundleContext = bundleContext;

        // Pre-emptively the schema and JAXB context
        final SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        try {
            modelSchema = sf.newSchema(getResource(SCHEMA_RESOURCE));
            jaxbContext = JAXBContext.newInstance(MetaModel.class, Inventory.class);
        } catch (SAXException|JAXBException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Model buildModel() {
        // Load the meta-model and inventory
        final MetaModel metaModel;
        final Inventory inventory;
        try {
            metaModel = getModelObject();
            LOG.info("Loaded meta-model with {} object.", metaModel.getModelObjectDef().size());
            LOG.debug("Meta-model: {}", metaModel);

            inventory =  getInventory();
            LOG.info("Loaded inventory with {} objects.", inventory.getModelObjectEntry().size());
            LOG.debug("Inventory: {}", inventory);
        } catch (IOException|JAXBException e) {
            LOG.error("Model loading failed: ", e);
            throw new RuntimeException(e);
        }
        return buildModel(metaModel, inventory);
    }

    public Model buildModel(MetaModel metaModel, Inventory inventory) {
        // Create the initial model objects and index them by type/id
        // NOTE: This will throw a IllegalStateException if a duplicate key is found
        final Map<ModelObjectKey, ModelObjectImpl> mosByKey = inventory.getModelObjectEntry().stream()
                .collect(Collectors.toMap(moe -> key(moe.getType(), moe.getId()), ModelBuilderImpl::toModelObject));

        // Now build out the relationships
        inventory.getModelObjectEntry().forEach(moe -> {
            final ModelObjectKey key = key(moe.getType(), moe.getId());
            final ModelObjectImpl mo = mosByKey.get(key);
            if (mo == null) {
                // Should not happen
                throw new IllegalStateException("Oops. Cannot find an MO with key: " + key);
            }

            if (MODEL_ROOT_TYPE.equals(mo.getType())) {
                // This is the root element, nothing else to do here
                return;
            }

            // Setup the parent
            final ModelObjectKey parentKey = key(moe.getParentType(), moe.getParentId());
            final ModelObjectImpl parentMo = mosByKey.get(parentKey);
            if (parentMo == null) {
                throw new IllegalStateException("Oops. Cannot find parent MO with key: " + parentKey + " on MO with key: " + key);
            }
            mo.setParent(parentMo);
            parentMo.addChild(mo);

            // Setup the peers
            for (PeerRef peerRef : moe.getPeerRef()) {
                final ModelObjectKey peerKey = key(peerRef.getType(), peerRef.getId());
                final ModelObjectImpl peerMo = mosByKey.get(peerKey);
                if (peerMo == null) {
                    throw new IllegalStateException("Oops. Cannot find peer MO with key: " + peerKey + " on MO with key: " + key);
                }
                mo.addPeer(peerMo);
                peerMo.addPeer(mo);
            }

            // Setup the relatives
            for (RelativeRef relativeRef : moe.getRelativeRef()) {
                final ModelObjectKey relativeKey = key(relativeRef.getType(), relativeRef.getId());
                final ModelObjectImpl relativeMo = mosByKey.get(relativeKey);
                if (relativeMo == null) {
                    throw new IllegalStateException("Oops. Cannot find relative MO with key: " + relativeRef + " on MO with key: " + key);
                }
                mo.addUncle(relativeMo);
                relativeMo.addNephew(mo);
            }
        });

        // Find the root
        final ModelObjectImpl rootMo = mosByKey.get(key(MODEL_ROOT_TYPE, MODEL_ROOT_ID));
        if (rootMo == null) {
            throw new IllegalStateException("Inventory must contain a single object of type '"
                    + MODEL_ROOT_TYPE + "' with id '" + MODEL_ROOT_ID + "'");
        }

        // Create a new model instance
        return new ModelImpl(rootMo);
    }

    public String getMetamodelPath() {
        return metamodelPath;
    }

    public void setMetamodelPath(String metamodelPath) {
        if (Strings.isNullOrEmpty(metamodelPath)) {
            this.metamodelPath = METAMODEL_RESOURCE;
        } else {
            this.metamodelPath = metamodelPath;
        }
    }

    public String getInventoryPath() {
        return inventoryPath;
    }

    public void setInventoryPath(String inventoryPath) {
        if (Strings.isNullOrEmpty(inventoryPath)) {
            this.inventoryPath = INVENTORY_RESOURCE;
        } else {
            this.inventoryPath = inventoryPath;
        }
    }

    private static ModelObjectImpl toModelObject(ModelObjectEntry moe) {
        final ModelObjectImpl mo = new ModelObjectImpl(moe.getType(), moe.getId());
        mo.setFriendlyName(moe.getFriendlyName());
        return mo;
    }

    private MetaModel getModelObject() throws JAXBException, IOException {
        try (InputStream is = getResource(metamodelPath).openStream()) {
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            unmarshaller.setSchema(modelSchema);
            return (MetaModel) unmarshaller.unmarshal(is);
        }
    }

    private Inventory getInventory() throws JAXBException, IOException {
        try (InputStream is = getResource(inventoryPath).openStream()) {
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            unmarshaller.setSchema(modelSchema);
            return (Inventory) unmarshaller.unmarshal(is);
        }
    }

    private URL getResource(final String resource) {
        // First attempt to load the resource from the filesystem
        final File file = new File(resource);
        if (file.canRead()) {
            try {
                return file.toURI().toURL();
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
        }

        // Next, attempt to load the resource from the classpath
        final URL classpathResourceUrl = MetaModel.class.getResource(resource);
        if (classpathResourceUrl != null) {
            return classpathResourceUrl;
        }

        // Finally, if a bundle context is set, then try loading it from there
        if (bundleContext != null) {
            final URL bundleResourceUrl = bundleContext.getBundle().getResource(resource);
            if (bundleResourceUrl != null) {
                return bundleResourceUrl;
            }
        }

        throw new IllegalArgumentException("Failed to locate resource on the filesystem and in the classpath: " + resource);
    }

}
