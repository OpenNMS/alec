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

package org.opennms.alec.engine.cluster;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.IsEqual.equalTo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableSituation;

import com.google.common.collect.Iterables;

public class ClusterEngineSituationTest implements SituationHandler {

    private List<Situation> triggeredSituations = new ArrayList<>();

    /**
     * Verifies that alarms are added to existing situations when given.
     */
    @Test
    public void canHandleExistingSituations() {
        // Define 3 alarms which should be clustered together
        ImmutableAlarm.Builder alarmBuilder = ImmutableAlarm.newBuilder()
                .setInventoryObjectId("n1")
                .setInventoryObjectType("node")
                .setTime(0);
        
        Alarm a1 = alarmBuilder.setId("a1").build();
        Alarm a2 = alarmBuilder.setId("a2").build();
        Alarm a3 = alarmBuilder.setId("a3").build();

        List<Alarm> alarms = Arrays.asList(a1, a2, a3);


        // No situations should have been triggered yet
        assertThat(triggeredSituations, hasSize(0));

        ClusterEngine clusterEngine = new ClusterEngine();
        clusterEngine.init(alarms, Collections.emptyList(), Collections.emptyList(), Collections.emptyList());
        clusterEngine.registerSituationHandler(this);
        clusterEngine.tick(clusterEngine.getTickResolutionMs());

        // There should now be a single situation
        assertThat(triggeredSituations, hasSize(1));

        // The situation should contain a1,a2 and a3
        assertThat(triggeredSituations.get(0).getAlarms(), containsInAnyOrder(a1, a2, a3));

        // Now we know that the 3 alarms are clustered together, let's provide an initial situation with the first two alarms
        triggeredSituations.clear();

        Situation initialSituation = ImmutableSituation.newBuilderNow()
                .setId("i1")
                .setAlarms(new HashSet<>(Arrays.asList(a1, a2)))
                .build();

        clusterEngine = new ClusterEngine();
        clusterEngine.init(alarms, Collections.emptyList(), Collections.singletonList(initialSituation),
                Collections.emptyList());
        clusterEngine.registerSituationHandler(this);
        clusterEngine.tick(clusterEngine.getTickResolutionMs());

        // There should now be a single situation
        assertThat(triggeredSituations, hasSize(1));

        // The situation should have the same id as the initial situation
        assertThat(Iterables.getLast(triggeredSituations).getId(), equalTo(initialSituation.getId()));
        assertThat(Iterables.getLast(triggeredSituations).getAlarms(), containsInAnyOrder(a1, a2, a3));
        assertThat(Iterables.getLast(triggeredSituations).getDiagnosticText(),
                   equalTo("The 3 alarms happened within 0.00 seconds across 1 vertices."));

        // Assert that the situation alarm has been updated and has the correct time
        alarms = Arrays.asList(ImmutableAlarm.newBuilder()
                .setId("a1")
                .setInventoryObjectId("n1")
                .setInventoryObjectType("node")
                .setTime(10000L)
                .build(), a2, a3);
        clusterEngine = new ClusterEngine();
        clusterEngine.init(alarms, Collections.emptyList(), Collections.singletonList(initialSituation), Collections.emptyList());
        clusterEngine.registerSituationHandler(this);
        clusterEngine.tick(clusterEngine.getTickResolutionMs());
        assertThat(Iterables.getLast(triggeredSituations).getAlarms().stream().filter(a -> a.getId().equals("a1")).findFirst().get().getTime(),
                   equalTo(10000L));
        assertThat(Iterables.getLast(triggeredSituations).getDiagnosticText(),
                   equalTo("The 3 alarms happened within 10.00 seconds across 1 vertices."));

    }

    @Override
    public void onSituation(Situation i) {
        triggeredSituations.add(i);
    }
}
