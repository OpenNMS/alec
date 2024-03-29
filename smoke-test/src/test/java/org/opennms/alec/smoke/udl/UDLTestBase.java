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

import java.net.InetSocketAddress;
import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.opennms.alec.smoke.ALECSmokeTestBase;
import org.opennms.alec.smoke.util.Karaf;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class UDLTestBase extends ALECSmokeTestBase {
    private static final Logger LOG = LoggerFactory.getLogger(UDLTestBase.class);

    protected abstract InetSocketAddress getALECContainerSSHAddress();
    
    protected void testAddingUDL() {
        LOG.info("Adding test nodes");
        Map<String, Integer> nodeIds = openNMSRestClient.addTestNodes("test1", "test2");
        LOG.info("Adding user defined link");
        openNMSRestClient.addUDLBetweenNodes(nodeIds.get("test1"), nodeIds.get("test2"));
        LOG.info("Waiting for ALEC to populate the user defined link");
        // We should see 3 (or 4) vertices in the ALEC graph, three nodes and one UDL
        await()
                .atMost(1, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .ignoreExceptions()
                .until(() -> {
                    String[] output = Karaf.runKarafCommands(getALECContainerSSHAddress(),
                            "opennms-alec:list-graphs").split("\n");
                    return Arrays.stream(output).anyMatch(row -> row.contains("3 vertices and 2 edges") ||
                            row.contains("4 vertices and 2 edges"));
                });
    }
}
