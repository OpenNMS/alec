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

package org.opennms.alec.engine.dbscan.shell;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.alec.engine.api.Engine;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.dbscan.DBScanEngine;

@Command(scope = "opennms-alec", name = "dbscan-distance", description = "Compute the distance between two alarms.")
@Service
public class DBScanDistance implements Action {

    @Argument(index = 0, name = "alarm id 1", description = "ID of the first alarm as stored in graph", required = true)
    private String alarmId1;

    @Argument(index = 1, name = "alarm id 2", description = "ID of the second alarm as stored in graph", required = true)
    private String alarmId2;

    @Reference
    private List<EngineRegistry> engineRegistries = new ArrayList<>();

    @Override
    public Object execute() {
        // Find the engine
        final DBScanEngine engine = findEngine();
        if (engine == null) {
            System.out.println("No suitable engine was found. Ensure the driver is running and initialized. Aborting.");
            return null;
        }

        // Lookup the alarms
        final String alarmIds[] = new String[]{alarmId1, alarmId2};
        final Map<String, AlarmInSpaceTime> alarmById = engine.findAlarmsWithIds(alarmIds);
        for (String alarmId : alarmIds) {
            boolean foundAllAlarms = true;
            if (!alarmById.containsKey(alarmId)) {
                System.out.printf("Did not find alarm with id '%s' in the graph.\n", alarmId);
                foundAllAlarms = false;
            }

            if (!foundAllAlarms) {
                System.out.println("One or more alarms were not found. Aborting.");
                return null;
            }
        }

        // We know we found all of the alarms we were looking for
        final AlarmInSpaceTime a1 = alarmById.get(alarmId1);
        final AlarmInSpaceTime a2 = alarmById.get(alarmId2);
        // Mark the graph as changed so that the spatial distance cache is reset
        engine.resetHopCache();
        // Compute the distance
        final double distance = engine.getDistanceMeasure().compute(a1.getPoint(), a2.getPoint());
        System.out.printf("Distance is: %.4f\n", distance);
        return null;
    }

    private DBScanEngine findEngine() {
        for (EngineRegistry registry : engineRegistries) {
            for (Engine engine : registry.getEngines()) {
                if (engine instanceof DBScanEngine) {
                    return (DBScanEngine)engine;
                }
            }
        }
        return null;
    }

}
