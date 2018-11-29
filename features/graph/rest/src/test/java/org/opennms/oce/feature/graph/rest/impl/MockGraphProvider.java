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

package org.opennms.oce.feature.graph.rest.impl;

import java.util.Collections;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.common.ImmutableAlarm;
import org.opennms.oce.datasource.common.ImmutableInventoryObject;
import org.opennms.oce.datasource.common.ImmutableSituation;
import org.opennms.oce.engine.cluster.ClusterEngine;
import org.opennms.oce.features.graph.api.GraphProvider;
import org.opennms.oce.features.graph.api.OceGraph;

import com.google.common.collect.Lists;

public class MockGraphProvider implements GraphProvider {

    final ClusterEngine clusterEngine = new ClusterEngine();

    public MockGraphProvider() {
        final InventoryObject io1 = ImmutableInventoryObject.newBuilder()
                .setType("c1")
                .setId("io1")
                .build();

        final InventoryObject io2 = ImmutableInventoryObject.newBuilder()
                .setType("c2")
                .setId("io2")
                .build();

        final List<InventoryObject> inventory = Lists.newArrayList(io1, io2);

        Alarm a1 = ImmutableAlarm.newBuilder()
                .setId("a1")
                .setInventoryObjectType("c1")
                .setInventoryObjectId("io1")
                .build();
        final List<Alarm> alarms = Collections.singletonList(a1);

        final List<Situation> situations = Collections.singletonList(ImmutableSituation.newBuilder()
                .setCreationTime(1)
                .setId("s1")
                .addAlarm(a1)
                .build());
        clusterEngine.init(alarms, Collections.emptyList(), situations, inventory);
    }

    @Override
    public <V> V withReadOnlyGraph(Function<OceGraph, V> consumer) {
        return clusterEngine.withReadOnlyGraph(consumer);
    }

    @Override
    public void withReadOnlyGraph(Consumer<OceGraph> consumer) {
        clusterEngine.withReadOnlyGraph(consumer);
    }
}
