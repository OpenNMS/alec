package org.opennms.oce.model.impl;

import java.io.File;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.ModelObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


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

    @Override
    public Model buildModel()  {

        Model model = ModelImpl.getInstance();
        LOG.info("buildModel: enter");
        //something very simple for a while
        try {
            //FileInputStream file = new FileInputStream("metamodel");
            File file = new File("metamodel.xml");
            JAXBContext ctx = JAXBContext.newInstance(MetaModel.class);
            Unmarshaller um = ctx.createUnmarshaller();
            MetaModel rootElement = (MetaModel) um.unmarshal(file);

            ModelObject mo = new ModelObjectImpl();

            mo.setType(rootElement.getModelObjectList().get(0));
            mo.setFriendlyName("Just dummy name");

            LOG.info("Hello World from Model Builder");
        }
        catch(JAXBException e ) {
            LOG.error("Model builder has issues with jaxb: ", e);
        }

        return model;

    }
}
