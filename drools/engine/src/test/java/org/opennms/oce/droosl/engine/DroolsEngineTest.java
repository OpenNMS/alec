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

import org.junit.Test;
import org.opennms.oce.drools.engine.DroolsEngine;
import org.opennms.oce.drools.model.Card;
import org.opennms.oce.drools.model.Device;
import org.opennms.oce.drools.model.Port;

public class DroolsEngineTest {

    @Test
    public void canCorrelate() {
        DroolsEngine droolsEngine = new DroolsEngine();
        droolsEngine.init();

        Device device = new Device();
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
        droolsEngine.addDevice(device);

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
        droolsEngine.correlate();
        assertThat(c1.isFailed(), equalTo(false));
        assertThat(c2.isFailed(), equalTo(false));

        // Mark the first 5 ports as down on C1
        p1.setFailed(true);
        p2.setFailed(true);
        p3.setFailed(true);
        p4.setFailed(true);
        p5.setFailed(true);
        droolsEngine.correlate();

        // C1 should be down now, C2 should be unchanged
        droolsEngine.correlate();
        assertThat(c1.isFailed(), equalTo(true));
        assertThat(c2.isFailed(), equalTo(false));

//        // FIXME: Broken
//        // Recover P5
//        p5.setFailed(false);
//        droolsEngine.correlate();
//        assertThat(c1.isFailed(), equalTo(false));
//        assertThat(c2.isFailed(), equalTo(false));

        droolsEngine.destroy();
    }
}
