/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
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

package org.opennms.e2e.opennms.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.opennms.e2e.grafana.model.DataSource;

import java.io.IOException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class ModelTest {

    @Test
    public void canReadAlarms() throws IOException {
        AlarmList expectedAlarmList = new AlarmList();
        expectedAlarmList.setTotalCount(1);
        expectedAlarmList.setCount(1);
        expectedAlarmList.setOffset(null);

        Alarm alarm = new Alarm();
        alarm.setId(82);
        alarm.setAckId(82);
        alarm.setDescription("");
        alarm.setUei("uei.opennms.org/alarms/trigger");
        alarm.setReductionKey("uei.opennms.org/alarms/trigger:::");
        alarm.setFirstEventTime(1501256840100L);
        alarm.setLastEventTime(1501256840100L);
        alarm.setType(1);
        alarm.setCount(1);
        alarm.setSeverity("CRITICAL");
        alarm.setLogMessage("A problem has been triggered on //.");
        expectedAlarmList.getAlarms().add(alarm);

        AlarmList actualAlarmList = new ObjectMapper()
                .readerFor(AlarmList.class)
                .readValue(alarmJson);

        assertThat(actualAlarmList, equalTo(actualAlarmList));
    }

    private static final String alarmJson = "{\n" +
            "\t\"totalCount\": 1,\n" +
            "\t\"count\": 1,\n" +
            "\t\"offset\": null,\n" +
            "\t\"alarm\": [{\n" +
            "\t\t\"id\": 82,\n" +
            "\t\t\"description\": \"A problem has been triggered.\",\n" +
            "\t\t\"ackId\": 82,\n" +
            "\t\t\"serviceType\": null,\n" +
            "\t\t\"ifIndex\": null,\n" +
            "\t\t\"uei\": \"uei.opennms.org/alarms/trigger\",\n" +
            "\t\t\"reductionKey\": \"uei.opennms.org/alarms/trigger:::\",\n" +
            "\t\t\"x733AlarmType\": null,\n" +
            "\t\t\"x733ProbableCause\": 0,\n" +
            "\t\t\"firstEventTime\": 1501256840100,\n" +
            "\t\t\"suppressedUntil\": 1501256840100,\n" +
            "\t\t\"suppressedTime\": 1501256840100,\n" +
            "\t\t\"lastEvent\": {\n" +
            "\t\t\t\"id\": 671,\n" +
            "\t\t\t\"serviceType\": null,\n" +
            "\t\t\t\"ifIndex\": null,\n" +
            "\t\t\t\"severity\": \"CRITICAL\",\n" +
            "\t\t\t\"time\": 1501256840100,\n" +
            "\t\t\t\"uei\": \"uei.opennms.org/alarms/trigger\",\n" +
            "\t\t\t\"source\": \"ReST\",\n" +
            "\t\t\t\"createTime\": 1501256840106,\n" +
            "\t\t\t\"description\": \"A problem has been triggered.\",\n" +
            "\t\t\t\"logMessage\": \"A problem has been triggered on //.\",\n" +
            "\t\t\t\"log\": \"Y\",\n" +
            "\t\t\t\"display\": \"Y\"\n" +
            "\t\t},\n" +
            "\t\t\"lastEventTime\": 1501256840100,\n" +
            "\t\t\"managedObjectInstance\": null,\n" +
            "\t\t\"managedObjectType\": null,\n" +
            "\t\t\"ossPrimaryKey\": null,\n" +
            "\t\t\"qosAlarmState\": null,\n" +
            "\t\t\"type\": 1,\n" +
            "\t\t\"count\": 1,\n" +
            "\t\t\"severity\": \"CRITICAL\",\n" +
            "\t\t\"logMessage\": \"A problem has been triggered on //.\"\n" +
            "\t}]\n" +
            "}";
}
