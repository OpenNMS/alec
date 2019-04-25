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

package org.opennms.alec.datasource.opennms.events;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.xmlunit.matchers.CompareMatcher.isSimilarTo;

import java.text.ParseException;
import java.util.Date;

import org.junit.Test;

public class EventMarshalTest {

    @Test
    public void canMarshalAndUnmarshal() {
        Event e = new Event();
        e.setTime("Tuesday, 9 April 2019 14:07:27 o'clock EDT");
        e.setUei("someuei");
        e.setNodeId(99L);
        e.addParam("k1", "v1");
        e.addParam("k2", "v2");
        assertThat(JaxbUtils.toXml(e, Event.class), isSimilarTo("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
                "<event xmlns=\"http://xmlns.opennms.org/xsd/event\">\n" +
                "    <uei>someuei</uei>\n" +
                "    <source>alec</source>\n" +
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
                "    <time>Tuesday, 9 April 2019 14:07:27 o'clock EDT</time>\n" +
                "    <nodeid>99</nodeid>\n" +
                "</event>"));
        assertThat(JaxbUtils.fromXml(JaxbUtils.toXml(e, Event.class), Event.class), equalTo(e));

        Log log = new Log(e);
        assertThat(JaxbUtils.toXml(log, Log.class), isSimilarTo("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
                "<log xmlns=\"http://xmlns.opennms.org/xsd/event\">\n" +
                "    <events>\n" +
                "        <event>\n" +
                "            <uei>someuei</uei>\n" +
                "            <source>alec</source>\n" +
                "            <parms>\n" +
                "                <parm>\n" +
                "                    <parmName>k1</parmName>\n" +
                "                    <value encoding=\"text\" type=\"string\">v1</value>\n" +
                "                </parm>\n" +
                "                <parm>\n" +
                "                    <parmName>k2</parmName>\n" +
                "                    <value encoding=\"text\" type=\"string\">v2</value>\n" +
                "                </parm>\n" +
                "            </parms>\n" +
                "            <severity>Critical</severity>\n" +
                "            <time>Tuesday, 9 April 2019 14:07:27 o'clock EDT</time>\n" +
                "            <nodeid>99</nodeid>\n" +
                "        </event>\n" +
                "    </events>\n" +
                "</log>"));
        assertThat(JaxbUtils.fromXml(JaxbUtils.toXml(log, Log.class), Log.class), equalTo(log));
    }

    @Test
    public void canParseDate() throws ParseException {
        Date start = new Date();

        // Create a new event and parse the date from the default string that was generated
        Event e = new Event();
        Date dateFromEvent = Event.getDateFormat().parse(e.getTime());

        // The parsed date should be >= the date from the start of the test - add 1 second to adjust for miissing millis
        assertThat(dateFromEvent.getTime() + 1000, greaterThanOrEqualTo(start.getTime()));
    }
}
