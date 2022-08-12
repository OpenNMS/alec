package org.opennms.alec.rest;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.ConfigurationImpl;
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

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final List<EngineFactory> engineFactories;
    private final Driver driver;

    public ALECRestImpl(KeyValueStore<String> kvStore,
                        EngineRegistry engineRegistry,
                        List<EngineFactory> engineFactories) {
        this.kvStore = kvStore;
        this.driver = (Driver) engineRegistry.getEngineRegistry();
        this.engineFactories = engineFactories;
        objectMapper = new ObjectMapper();
    }

    @Override
    public Response ping() {
        return Response.ok("pong!!").build();
    }

    @Override
    public Response getConfigurations() {
        LOG.debug("Get Configurations");
        ConfigurationImpl.Builder configuration = ConfigurationImpl.newBuilder();
        KeyEnum.stream().forEach(keyEnum -> {
            String value = kvStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("");
            switch (keyEnum) {
                case ENGINE:
                    try {
                        configuration.engineParameter(objectMapper.readValue(value, EngineParameter.class));
                    } catch (JsonProcessingException e) {
                        configuration.engineParameter(null);
                    }
                    break;
                case AGREEMENT:
                    try {
                        configuration.agreement(objectMapper.readValue(value, Agreement.class));
                    } catch (JsonProcessingException e) {
                        configuration.agreement(null);
                    }
                    break;
            }
        });
        return Response.ok().entity(configuration.build()).build();
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
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineConfiguration() {
        LOG.debug("Get engine configuration");
        try {
            Optional<String> engineConfiguration = kvStore.get(KeyEnum.ENGINE.toString(), ALEC_CONFIG);
            if (engineConfiguration.isPresent()) {
                return Response.ok().entity(objectMapper.readValue(engineConfiguration.get(), EngineParameter.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response setAgreementConfiguration(Agreement agreement) {
        LOG.debug("Set agreement configuration: {}", agreement);
        CompletableFuture<Long> future;
        try {
            future = kvStore.putAsync(KeyEnum.AGREEMENT.toString(),
                    objectMapper.writeValueAsString(agreement),
                    ALEC_CONFIG);
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
        return Response.ok(future.join()).build();
    }

    @Override
    public Response getAgreementConfiguration() {
        LOG.debug("Get agreement configuration");
        try {
            Optional<String> agreementConfiguration = kvStore.get(KeyEnum.AGREEMENT.toString(), ALEC_CONFIG);
            if (agreementConfiguration.isPresent()) {
                return Response.ok().entity(objectMapper.readValue(agreementConfiguration.get(), Agreement.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    private Response storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.ENGINE.toString(),
                objectMapper.writeValueAsString(engineParameter),
                ALEC_CONFIG);
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

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }
}
