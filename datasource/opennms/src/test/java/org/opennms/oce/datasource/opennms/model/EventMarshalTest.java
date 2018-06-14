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

package org.opennms.oce.datasource.opennms.model;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.xmlunit.matchers.CompareMatcher.isSimilarTo;

import java.io.StringWriter;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

import org.junit.Test;

public class EventMarshalTest {

    @Test
    public void canMarshal() throws JAXBException {
        Event e = new Event();
        e.setUei("someuei");
        e.addParam("k1", "v1");
        e.addParam("k2", "v2");
        StringWriter sw = new StringWriter();
        JAXBContext context = JAXBContext.newInstance(Event.class);
        Marshaller m = context.createMarshaller();
        m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
        m.marshal(e, sw);

        assertThat(JaxbUtils.toXml(e), isSimilarTo("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
                "<event>\n" +
                "    <uei>someuei</uei>\n" +
                "    <source>oce</source>\n" +
                "    <parms>\n" +
                "        <parm>\n" +
                "            <parmName>k1</parmName>\n" +
                "            <value encoding=\"text\" type=\"string\">v1</value>\n" +
                "        </parm>\n" +
                "        <parm>\n" +
                "            <parmName>k2</parmName>\n" +
                "            <value encoding=\"text\" type=\"string\">v2</value>\n" +
                "        </parm>\n" +
                "    </parms>\n" +
                "    <severity>Critical</severity>\n" +
                "</event>"));
    }
}
