package org.opennms.alec.rest;

import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineParameter;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.jackson.JacksonEngineParameter;
import org.opennms.alec.jackson.Agreement;
import org.opennms.alec.jackson.ConfigurationImpl;
import org.opennms.alec.jackson.KeyEnum;
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
    private final Driver driver;

    public ALECRestImpl(KeyValueStore<String> kvStore, EngineRegistry engineRegistry) {
        this.kvStore = kvStore;
        this.driver = (Driver) engineRegistry.getEngineRegistry();
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
                        configuration.engineParameter(objectMapper.readValue(value, JacksonEngineParameter.class));
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
    public Response setEngineConfiguration(JacksonEngineParameter engineParameter) {
        LOG.debug("Set engine configuration: {}", engineParameter);
        try {
            EngineParameter ret = driver.setEngineParameter(engineParameter);
            driver.destroy();
            driver.initAsync();

            return Response.ok(storeEngineParameter(ret)).build();
        } catch (Exception e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineConfiguration() {
        LOG.debug("Get engine configuration");
        try {
            return Response.ok().entity(objectMapper.readValue(kvStore.get(KeyEnum.ENGINE.toString(), ALEC_CONFIG).orElse(""), JacksonEngineParameter.class)).build();
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineCurrentConfiguration() {
        return Response.ok(driver.getEngineCurrentParameter()).build();
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
            return Response.ok().entity(objectMapper.readValue(kvStore.get(KeyEnum.AGREEMENT.toString(), ALEC_CONFIG).orElse(""), Agreement.class)).build();
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

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }
}
