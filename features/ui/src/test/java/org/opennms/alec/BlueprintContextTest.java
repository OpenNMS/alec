/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.mockito.Mockito.mock;

import java.util.Dictionary;
import java.util.Map;

import org.apache.camel.test.blueprint.CamelBlueprintTestSupport;
import org.apache.camel.util.KeyValueHolder;
import org.junit.Test;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.grpc.GrpcConnectionConfig;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.opennms.integration.api.v1.runtime.RuntimeInfo;

public class BlueprintContextTest extends CamelBlueprintTestSupport {

    @Override
    protected String getBlueprintDescriptor() {
        return "/OSGI-INF/blueprint/blueprint.xml" + "," +
                "/OSGI-INF/blueprint/blueprint-empty-camel-context.xml";
    }

    @Override
    protected String getBundleFilter() {
        return "(!(Bundle-SymbolicName=org.glassfish.hk2.osgi-resource-locator))";
    }

    @Override
    protected void addServicesOnStartup(Map<String, KeyValueHolder<Object, Dictionary>> services) {

        KeyValueStore<String> keyValueStore = mock(KeyValueStore.class);
        services.put(KeyValueStore.class.getName(), asService(keyValueStore, null));

        EngineRegistry engineRegistry = mock(EngineRegistry.class);
        services.put(EngineRegistry.class.getName(), asService(engineRegistry, null));

        SituationDatasource situationDatasource = mock(SituationDatasource.class);
        services.put(SituationDatasource.class.getName(), asService(situationDatasource, null));

        AlarmDatasource alarmDatasource = mock(AlarmDatasource.class);
        services.put(AlarmDatasource.class.getName(), asService(alarmDatasource, null));

        RuntimeInfo runtimeInfo = mock(RuntimeInfo.class);
        services.put(RuntimeInfo.class.getName(), asService(runtimeInfo, null));

        GrpcConnectionConfig grpcConnectionConfig = mock(GrpcConnectionConfig.class);
        services.put(GrpcConnectionConfig.class.getName(), asService(grpcConnectionConfig, null));
    }

    @Test
    public void testBlueprintContext() {
        //no assertion just testing if the blueprint context is starting
        assertThat(true, equalTo(true));
    }
}
