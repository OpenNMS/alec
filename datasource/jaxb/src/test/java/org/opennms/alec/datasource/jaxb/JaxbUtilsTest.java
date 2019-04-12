/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.datasource.jaxb;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.IsNot.not;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.v1.schema.Alarms;
import org.opennms.alec.datasource.v1.schema.Inventory;
import org.opennms.alec.datasource.v1.schema.Situations;
import org.opennms.alec.driver.test.MockInventory;

import com.google.common.collect.Sets;

public class JaxbUtilsTest {

    @Test
    public void canConvertToAndFromInventoryObjects() {
        // Convert the sample network to inventory suitable for marshaling
        final Inventory inventory = JaxbUtils.toInventory(MockInventory.SAMPLE_NETWORK);
        // We should have the same number of elements
        assertThat(inventory.getModelObjectEntry(), hasSize(MockInventory.SAMPLE_NETWORK.size()));

        // Now convert back to IOs and make sure we match
        final List<InventoryObject> ios = JaxbUtils.toInventoryObjects(inventory);
        assertThat(ios, equalTo(MockInventory.SAMPLE_NETWORK));
    }

    @Test
    public void canConvertToAndFromAlarms() {
        // Build some alarm
        Alarm a1 = ImmutableAlarm.newBuilder()
                .setId("1")
                .setDescription("abc")
                .setInventoryObjectId("io-id")
                .setInventoryObjectType("io-type")
                .setTime(0)
                .setSeverity(Severity.MAJOR)
                .build();
        List<Alarm> apiAlarms = Arrays.asList(a1);

        // Map
        Alarms alarms = JaxbUtils.toAlarms(apiAlarms);
        assertThat(alarms.getAlarm(), hasSize(apiAlarms.size()));

        // Map back
        List<Alarm> mappedApiAlarms = new LinkedList<>();
        for (org.opennms.alec.datasource.v1.schema.Alarm alarm : alarms.getAlarm()) {
            // Use the first event since we only expect there to be 1 (the datasource doesn't keep alarm history)
            mappedApiAlarms.add(JaxbUtils.toAlarm(alarm, alarm.getEvent().get(0)));
        }
        assertThat(mappedApiAlarms, equalTo(apiAlarms));
    }

    @Test
    public void canConvertToAndFromSituations() {
        // Build some alarm
        Alarm a1 = ImmutableAlarm.newBuilder()
                .setId("1")
                .setDescription("abc")
                .setInventoryObjectId("io-id")
                .setInventoryObjectType("io-type")
                .setTime(0)
                .setSeverity(Severity.MAJOR)
                .build();
        // Build some situation
        Situation s1 = ImmutableSituation.newBuilder()
                .setId("1")
                .setAlarms(Sets.newHashSet(a1))
                .setSeverity(Severity.MAJOR)
                .setCreationTime(1)
                .build();
        List<Situation> apiSituations = Arrays.asList(s1);

        // Map
        Situations situations = JaxbUtils.toSituations(apiSituations);
        assertThat(situations.getSituation(), hasSize(apiSituations.size()));

        // Map back
        List<Situation> mappedApiSituations = new LinkedList<>();
        for (org.opennms.alec.datasource.v1.schema.Situation situation : situations.getSituation()) {
            mappedApiSituations.add(JaxbUtils.toEngineSituation(situation));
        }
        // We can't compare, since the alarms won't match - the alarm ref in the model doesn't contain enough information
        assertThat(mappedApiSituations, not(equalTo(apiSituations)));
    }
}
