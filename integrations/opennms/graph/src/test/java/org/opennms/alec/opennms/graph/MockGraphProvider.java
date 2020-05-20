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

package org.opennms.alec.opennms.graph;

import java.util.Collections;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableInventoryObject;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.features.graph.api.GraphChangedListener;
import org.opennms.alec.features.graph.api.GraphProvider;
import org.opennms.alec.features.graph.api.OceGraph;

import com.google.common.collect.Lists;

public class MockGraphProvider implements GraphProvider {

    final DBScanEngine dbScanEngine = new DBScanEngine();

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
        dbScanEngine.init(alarms, Collections.emptyList(), situations, inventory);
    }

    @Override
    public <V> V withReadOnlyGraph(Function<OceGraph, V> consumer) {
        return dbScanEngine.withReadOnlyGraph(consumer);
    }

    @Override
    public void withReadOnlyGraph(Consumer<OceGraph> consumer) {
        dbScanEngine.withReadOnlyGraph(consumer);
    }

    @Override
    public void registerGraphChangeListener(GraphChangedListener listener) {
        // do nothing
    }
}
