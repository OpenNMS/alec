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

package org.opennms.oce.engine.cluster;

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
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.IncidentBean;
import org.opennms.oce.engine.api.IncidentHandler;

public class ClusterEngineIncidentTest implements IncidentHandler {

    private List<Incident> triggeredIncidents = new ArrayList<>();

    /**
     * Verifies that alarms are added to existing incidents when given.
     */
    @Test
    public void canHandleExistingIncidents() {
        // Define 3 alarms which should be clustered together
        AlarmBean a1 = new AlarmBean();
        a1.setId("a1");
        AlarmBean a2 = new AlarmBean();
        a2.setId("a2");
        AlarmBean a3 = new AlarmBean();
        a3.setId("a3");
        List<Alarm> alarms = Arrays.asList(a1,a2,a3);
        for (Alarm a : alarms) {
            AlarmBean ab = (AlarmBean)a;
            ab.setInventoryObjectId("n1");
            ab.setInventoryObjectType("node");
            ab.setTime(0);
        }

        // No incidents should have been triggered yet
        assertThat(triggeredIncidents, hasSize(0));

        ClusterEngine clusterEngine = new ClusterEngine();
        clusterEngine.init(alarms, Collections.emptyList(), Collections.emptyList());
        clusterEngine.registerIncidentHandler(this);
        clusterEngine.tick(clusterEngine.getTickResolutionMs());

        // There should now be a single incident
        assertThat(triggeredIncidents, hasSize(1));

        // The incident should contain a1,a2 and a3
        assertThat(triggeredIncidents.get(0).getAlarms(), containsInAnyOrder(a1,a2,a3));

        // Now we know that the 3 alarms are clustered together, let's provide an initial incident with the first two alarms
        triggeredIncidents.clear();

        IncidentBean initialIncident = new IncidentBean();
        initialIncident.setId("i1");
        initialIncident.setAlarms(new HashSet<>(Arrays.asList(a1,a2)));

        clusterEngine = new ClusterEngine();
        clusterEngine.init(alarms, Collections.singletonList(initialIncident), Collections.emptyList());
        clusterEngine.registerIncidentHandler(this);
        clusterEngine.tick(clusterEngine.getTickResolutionMs());

        // There should now be a single incident
        assertThat(triggeredIncidents, hasSize(1));

        // The incident should have the same id as the initial incident
        assertThat(triggeredIncidents.get(0).getId(), equalTo(initialIncident.getId()));
        assertThat(triggeredIncidents.get(0).getAlarms(), containsInAnyOrder(a1,a2,a3));
    }

    @Override
    public void onIncident(Incident i) {
        triggeredIncidents.add(i);
    }
}
