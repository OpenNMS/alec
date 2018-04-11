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

package org.opennms.oce.droosl.engine;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

import java.util.Collections;
import java.util.function.Consumer;

import org.junit.Test;
import org.opennms.oce.connector.api.EventForwarder;
import org.opennms.oce.connector.api.ModelProvider;
import org.opennms.oce.connector.model.Card;
import org.opennms.oce.connector.model.Device;
import org.opennms.oce.connector.model.Port;
import org.opennms.oce.drools.engine.DroolsEngine;

public class DroolsEngineTest {

    @Test
    public void canCorrelate() {
        ModelProvider modelProvider = mock(ModelProvider.class);
        MockAlarmRepository alarmRepository = new MockAlarmRepository();
        EventForwarder eventForwarder = mock(EventForwarder.class);

        Device device = generatedDeviceTree();
        when(modelProvider.getDevices()).thenReturn(Collections.singletonList(device));

        // Ease of access
        Card c1 = device.getCards().get(0);
        Card c2 = device.getCards().get(1);
        Port p1 = c1.getPorts().get(0);
        Port p2 = c1.getPorts().get(1);
        Port p3 = c1.getPorts().get(2);
        Port p4 = c1.getPorts().get(3);
        Port p5 = c1.getPorts().get(4);
        Port p6 = c1.getPorts().get(5);
        Port p7 = c1.getPorts().get(6);
        Port p8 = c1.getPorts().get(7);

        // Verify initial state
        assertThat(c1.isFailed(), equalTo(false));
        assertThat(c2.isFailed(), equalTo(false));

        // Create the engine
        DroolsEngine droolsEngine = new DroolsEngine(modelProvider, alarmRepository, eventForwarder);
        droolsEngine.init();

        // Re-verify after the engine has been initialized
        assertThat(c1.isFailed(), equalTo(false));
        assertThat(c2.isFailed(), equalTo(false));

        // Mark the first 5 ports as down on C1
        MockAlarm alarmOnP1 = new MockAlarm("p1:down", p1.getId());
        alarmRepository.triggerAlarm(alarmOnP1);
        MockAlarm alarmOnP2 = new MockAlarm("p2:down", p2.getId());
        alarmRepository.triggerAlarm(alarmOnP2);
        MockAlarm alarmOnP3 = new MockAlarm("p3:down", p3.getId());
        alarmRepository.triggerAlarm(alarmOnP3);
        MockAlarm alarmOnP4 = new MockAlarm("p4:down", p4.getId());
        alarmRepository.triggerAlarm(alarmOnP4);
        MockAlarm alarmOnP5 = new MockAlarm("p5:down", p5.getId());
        alarmRepository.triggerAlarm(alarmOnP5);

        // C1 should be down now, C2 should be unchanged
        assertThat(c1.isFailed(), equalTo(true));
        assertThat(c2.isFailed(), equalTo(false));

        verify(eventForwarder, times(1)).sendNow(any());

        // Recover P5
        alarmRepository.clearAlarm(alarmOnP5);
        assertThat(c1.isFailed(), equalTo(false));
        assertThat(c2.isFailed(), equalTo(false));

        verify(eventForwarder, times(2)).sendNow(any());

        droolsEngine.destroy();
    }

    private static void walkPorts(Device device, Consumer<Port> callback) {
        for (Card card : device.getCards()) {
            for (Port port : card.getPorts()) {
                callback.accept(port);
            }
         }
    }

    private static Device generatedDeviceTree() {
        final Device device = new Device();
        device.setId("sw1");
        for (int i = 0; i < 2; i++) {
            Card card = new Card();
            card.setId(String.format("sw1-c%d", i));
            device.getCards().add(card);
            for (int j = 0; j < 8; j++) {
                Port port = new Port();
                port.setId(String.format("sw1-c%d-p%d", i, j));
                card.getPorts().add(port);
            }
        }
        return device;
    }
}
