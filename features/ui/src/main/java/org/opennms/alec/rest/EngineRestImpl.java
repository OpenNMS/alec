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

package org.opennms.alec.rest;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.EngineParameter;
import org.opennms.alec.data.EngineParameterImpl;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class EngineRestImpl implements EngineRest {

    private static final Logger LOG = LoggerFactory.getLogger(EngineRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final List<EngineFactory> engineFactories;
    private final Driver driver;

    public EngineRestImpl(KeyValueStore<String> kvStore,
                          EngineRegistry engineRegistry,
                          List<EngineFactory> engineFactories) {
        this.kvStore = kvStore;
        this.driver = (Driver) engineRegistry.getEngineRegistry();
        this.engineFactories = engineFactories;
        objectMapper = new ObjectMapper();
    }

    @Override
    public Response setEngineConfiguration(EngineParameter engineParameter) {
        LOG.debug("Set engine configuration: {}", engineParameter);
        try {
            String engineName = engineParameter.getEngineName();
            Optional<EngineFactory> factory = engineFactories.stream()
                    .filter(engineFactory -> engineName.equals(engineFactory.getName()))
                    .findFirst();
            if (factory.isPresent()) {
                switch (engineName) {
                    case "dbscan":
                        return storeEngineParameter(configureDBScan(engineParameter, driver, (DBScanEngineFactory) factory.get().getEngineFactory()));
                    case "cluster":
                    default:
                        return storeEngineParameter(configureCluster(driver, (ClusterEngineFactory) factory.get().getEngineFactory()));
                }
            }
            return Response.serverError().entity("No Engine found !!").build();
        } catch (Exception e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineConfiguration() {
        LOG.debug("Get engine configuration");
        try {
            Optional<String> engineConfiguration = kvStore.get(KeyEnum.ENGINE.toString(), ALECRestUtils.ALEC_CONFIG);
            if (engineConfiguration.isPresent()) {
                return Response.ok().entity(objectMapper.readValue(engineConfiguration.get(), EngineParameter.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private Response storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.ENGINE.toString(),
                objectMapper.writeValueAsString(engineParameter),
                ALECRestUtils.ALEC_CONFIG);
        return Response.ok(future.join()).build();
    }

    private EngineParameter configureCluster(Driver driver, ClusterEngineFactory clusterEngineFactory) {
        driver.setEngineFactory(clusterEngineFactory);
        driver.destroy();
        driver.initAsync();

        return EngineParameterImpl.newBuilder()
                .engineName(clusterEngineFactory.getName())
                .build();
    }

    private EngineParameter configureDBScan(EngineParameter engineParameter, Driver driver, DBScanEngineFactory dbScanEngineFactory) {
        dbScanEngineFactory.setAlpha(engineParameter.getAlpha());
        dbScanEngineFactory.setBeta(engineParameter.getBeta());
        dbScanEngineFactory.setEpsilon(engineParameter.getEpsilon());
        dbScanEngineFactory.setDistanceMeasureFactoryName(engineParameter.getDistanceMeasureName());
        driver.setEngineFactory(dbScanEngineFactory);
        driver.destroy();
        driver.initAsync();

        return EngineParameterImpl.newBuilder()
                .alpha(dbScanEngineFactory.getAlpha())
                .beta(dbScanEngineFactory.getBeta())
                .epsilon(dbScanEngineFactory.getEpsilon())
                .distanceMeasureName(dbScanEngineFactory.getDistanceMeasureFactoryName())
                .engineName(dbScanEngineFactory.getName())
                .build();
    }
}
