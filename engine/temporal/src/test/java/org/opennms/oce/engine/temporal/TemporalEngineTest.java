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

package org.opennms.oce.engine.temporal;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.engine.api.Engine;

public class TemporalEngineTest implements SituationHandler {

    List<Situation> situations;

    Random r = new Random();

    @Before
    public void setSituations() {
        situations = new ArrayList<>();
    }

    @Test
    public void testFiveAlarmsSameTime() {
        Engine processor = new TimeSliceEngine();
        processor.registerSituationHandler(this);
        List<Alarm> alarms = getAlarms(5, 20);
        alarms.forEach(processor::onAlarmCreatedOrUpdated);
        // Terminate the test
        sendterminalAlarm(processor, 100);
        // All five alarms should be in a single situation
        assertEquals(1, situations.size());
        // All 5 Alarms should be there
        assertEquals(5,
                     situations.stream().map(i -> i.getAlarms()).flatMap(a -> a.stream()).collect(Collectors.toSet()).size());
    }

    @Test
    public void testTwoAlarmsSameSituation() {
        Engine processor = new TimeSliceEngine();
        processor.registerSituationHandler(this);
        List<Alarm> alarms = getAlarms(2, 20);
        alarms.forEach(processor::onAlarmCreatedOrUpdated);
        // Terminate the test
        sendterminalAlarm(processor, 100);
        // 1 situation
        assertEquals(1, situations.size());
        // 2 Alarms
        assertEquals(2, situations.get(0).getAlarms().size());
    }

    @Test
    public void testTwoSituations() {
        Engine processor = new TimeSliceEngine();
        processor.registerSituationHandler(this);
        // First Situation
        processor.onAlarmCreatedOrUpdated(new AlarmBean("A", 11000));
        processor.onAlarmCreatedOrUpdated(new AlarmBean("B", 12000));
        processor.onAlarmCreatedOrUpdated(new AlarmBean("C", 13000));
        // Second Situation
        processor.onAlarmCreatedOrUpdated(new AlarmBean("X", 31000));
        processor.onAlarmCreatedOrUpdated(new AlarmBean("Y", 32000));

        // Terminate the test
        sendterminalAlarm(processor, 100);
        // 2 Situations
        assertEquals(2, situations.size());
        // All 5 Alarms
        assertEquals(5, situations.stream().map(i -> i.getAlarms()).flatMap(a -> a.stream()).collect(Collectors.toSet()).size());
        // 3 Alarms in the first Situation
        assertEquals(3, situations.get(0).getAlarms().size());
        // 2 Alarms in the second Situation
        assertEquals(2, situations.get(1).getAlarms().size());
    }

    // Get nAlarms all occurring at the same time in seconds
    private List<Alarm> getAlarms(int nAlarms, long seconds) {
        List<Alarm> alarms = new ArrayList<>();
        IntStream.range(0, nAlarms).forEach(index -> alarms.add(new AlarmBean(Integer.toString(index + 1) + "." + getRandom(),
                seconds * 1000)));
        return alarms;
    }

    private String getRandom() {
        return Integer.toString(r.nextInt(10000));
    }

    private void sendterminalAlarm(Engine processor, long t) {
        Alarm terminalAlarm = new AlarmBean("terminal-alarm", t * 1000);
        processor.onAlarmCreatedOrUpdated(terminalAlarm);
    }

    @Override
    public void onSituation(Situation i) {
        situations.add(i);
    }

}
