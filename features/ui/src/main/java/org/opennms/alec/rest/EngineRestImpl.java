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
import java.util.concurrent.ExecutionException;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.EngineParameter;
import org.opennms.alec.data.EngineParameterImpl;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.alec.engine.deeplearning.DeepLearningEngineFactory;
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

        EngineParameter engineParameter = (EngineParameter) getEngineConfiguration().getEntity();
        if(engineParameter != null) {
            setEngineConfiguration(engineParameter);
        }
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
                        return configureAndStoreDBScan(engineParameter, driver, (DBScanEngineFactory) factory.get().getEngineFactory());
                    case "deeplearning":
                        return configureAndStoreDeeplearning(engineParameter, driver, (DeepLearningEngineFactory) factory.get().getEngineFactory());
                    case "cluster":
                    default:
                        return configureAndStoreCluster(driver, (ClusterEngineFactory) factory.get().getEngineFactory());
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

    private Response configureAndStoreCluster(Driver driver, ClusterEngineFactory clusterEngineFactory) {
        driver.setEngineFactory(clusterEngineFactory);
        Response response = driverInit(driver);
        if(response != null) {
            return response;
        }
        try {
            return storeEngineParameter(EngineParameterImpl.newBuilder()
                    .engineName(clusterEngineFactory.getName())
                    .build());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private Response configureAndStoreDBScan(EngineParameter engineParameter, Driver driver, DBScanEngineFactory dbScanEngineFactory) {
        dbScanEngineFactory.setAlpha(engineParameter.getAlpha());
        dbScanEngineFactory.setBeta(engineParameter.getBeta());
        dbScanEngineFactory.setEpsilon(engineParameter.getEpsilon());
        dbScanEngineFactory.setDistanceMeasureFactoryName(engineParameter.getDistanceMeasureName());
        driver.setEngineFactory(dbScanEngineFactory);
        Response response = driverInit(driver);
        if(response != null) {
            return response;
        }
        try {
            return storeEngineParameter(EngineParameterImpl.newBuilder()
                    .alpha(dbScanEngineFactory.getAlpha())
                    .beta(dbScanEngineFactory.getBeta())
                    .epsilon(dbScanEngineFactory.getEpsilon())
                    .distanceMeasureName(dbScanEngineFactory.getDistanceMeasureFactoryName())
                    .engineName(dbScanEngineFactory.getName())
                    .build());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private Response configureAndStoreDeeplearning(EngineParameter engineParameter, Driver driver, DeepLearningEngineFactory deepLearningEngineFactory) {
        String token = engineParameter.getToken();
        String remoteUri = engineParameter.getRemoteUri();
        if (token != null && !token.isEmpty() && remoteUri != null && !remoteUri.isEmpty()) {
            deepLearningEngineFactory.setUri(remoteUri);
            deepLearningEngineFactory.setToken(token);
            deepLearningEngineFactory.setRemote(true);
        } else {
            deepLearningEngineFactory.setUri("");
            deepLearningEngineFactory.setToken("");
            deepLearningEngineFactory.setRemote(false);
        }
        driver.setEngineFactory(deepLearningEngineFactory);
        Response response = driverInit(driver);
        if(response != null) {
            return response;
        }
        try {
            return storeEngineParameter(EngineParameterImpl.newBuilder()
                    .engineName(deepLearningEngineFactory.getName())
                    .remoteUri(deepLearningEngineFactory.getUri())
                    .token(deepLearningEngineFactory.getToken())
                    .remote(deepLearningEngineFactory.isRemote())
                    .build());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private Response driverInit(Driver driver) {
        driver.destroy();
        CompletableFuture<Void> future = driver.initAsync();
        try {
            future.get();
        } catch (InterruptedException e) {
            LOG.error("Engine creation failed", e.getCause());
            Thread.currentThread().interrupt();
        } catch (ExecutionException e) {
            LOG.error("Engine creation failed", e.getCause());
            return ALECRestUtils.somethingWentWrong(e);
        }

        return null;
    }
}
