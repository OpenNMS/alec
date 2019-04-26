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

package org.opennms.alec.smoke.udl;

import static org.awaitility.Awaitility.await;

import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.opennms.alec.smoke.ALECSmokeTestBase;
import org.opennms.alec.smoke.util.Karaf;

public abstract class UDLTestBase extends ALECSmokeTestBase {
    protected void testAddingUDL() {
        Map<String, Integer> nodeIds = openNMSRestClient.addTestNodes("test1", "test2");
        openNMSRestClient.addUDLBetweenNodes(nodeIds.get("test1"), nodeIds.get("test2"));
        // We should see 3 vertices in the ALEC graph, two nodes and one UDL
        await()
                .atMost(1, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .ignoreExceptions()
                .until(() -> {
                    String[] output = Karaf.runKarafCommands(getOpennmsContainer().getSSHAddress(),
                            "list-graphs").split("\n");

                    return Arrays.stream(output).anyMatch(row -> row.contains("3 vertices and 2 edges"));
                });
    }
}
