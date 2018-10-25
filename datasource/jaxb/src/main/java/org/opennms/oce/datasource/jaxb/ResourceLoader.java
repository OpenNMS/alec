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

package org.opennms.oce.datasource.jaxb;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collections;
import java.util.List;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.v1.schema.Inventory;
import org.opennms.oce.datasource.v1.schema.MetaModel;
import org.osgi.framework.BundleContext;
import org.xml.sax.SAXException;

public class ResourceLoader {
    private static final String SCHEMA_RESOURCE = "/model.v1.xsd";

    private static final String METAMODEL_RESOURCE = "/metamodel.xml";
    private static final String INVENTORY_RESOURCE = "/inventory.xml";

    private final BundleContext bundleContext;
    private final Schema modelSchema;
    private final JAXBContext jaxbContext;

    private String metamodelPath = METAMODEL_RESOURCE;
    private String inventoryPath = INVENTORY_RESOURCE;

    public ResourceLoader() {
        this(null);
    }

    public ResourceLoader(BundleContext bundleContext) {
        this.bundleContext = bundleContext;

        // Pre-emptively the schema and JAXB context
        final SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        try {
            modelSchema = sf.newSchema(getResource(SCHEMA_RESOURCE));
            jaxbContext = JAXBContext.newInstance(MetaModel.class, Inventory.class);
        } catch (SAXException |JAXBException e) {
            throw new RuntimeException(e);
        }
    }

    public List<Alarm> getAlarms() {
        return Collections.emptyList();
    }

    public List<Situation> getSituations() {
        return Collections.emptyList();
    }

    public List<InventoryObject> getInventory() {
        final Inventory inventory;
        try {
            inventory = getInventoryFromResource();
        } catch (JAXBException|IOException e) {
            throw new RuntimeException(e);
        }

        return Collections.emptyList();
    }

    private MetaModel getModelObject() throws JAXBException, IOException {
        try (InputStream is = getResource(metamodelPath).openStream()) {
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            unmarshaller.setSchema(modelSchema);
            return (MetaModel) unmarshaller.unmarshal(is);
        }
    }

    private Inventory getInventoryFromResource() throws JAXBException, IOException {
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
