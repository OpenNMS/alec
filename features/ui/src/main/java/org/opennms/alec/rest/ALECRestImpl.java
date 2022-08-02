package org.opennms.alec.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.ConfigurationImpl;
import org.opennms.alec.data.Status;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineParameter;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.jackson.JacksonEngineParameter;
import org.opennms.alec.jackson.JacksonSituation;
import org.opennms.alec.jackson.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final Driver driver;
    private final SituationDatasource situationDatasource;

    public ALECRestImpl(KeyValueStore<String> kvStore,
                        EngineRegistry engineRegistry,
                        SituationDatasource situationDatasource) {
        this.kvStore = kvStore;
        this.driver = (Driver) engineRegistry.getEngineRegistry();
        this.situationDatasource = situationDatasource;
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

            storeEngineParameter(ret);
            return Response.ok(ret).build();
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
                return Response.ok().entity(objectMapper.readValue(engineConfiguration.get(), JacksonEngineParameter.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineCurrentConfiguration() {
        LOG.debug("Get current engine configuration");
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

    @Override
    public Response refusedSituation(String id) {
        List<Situation> situations = new ArrayList<>();
        Optional<Situation> situationOptional = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if (situationOptional.isPresent()) {
            try {
                Optional<String> alreadyRefusedSituations = kvStore.get(KeyEnum.REFUSED_SITUATION.toString(), ALEC_CONFIG);
                if (alreadyRefusedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue(alreadyRefusedSituations.get(), new TypeReference<>() {
                    });
                    situations.addAll(jacksonSituations);
                }
                Situation situation = situationOptional.get();
                situations.add(JacksonSituation.newBuilder(situation).status(Status.REJECTED).build());
                long ret = kvStore.put(KeyEnum.REFUSED_SITUATION.toString(), objectMapper.writeValueAsString(situations), ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    @Override
    public Response acceptedSituation(String id) {
        List<Situation> situations = new ArrayList<>();
        Optional<Situation> situationOptional = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if (situationOptional.isPresent()) {
            try {
                Optional<String> alreadyAcceptedSituations = kvStore.get(KeyEnum.ACCEPTED_SITUATION.toString(), ALEC_CONFIG);
                if (alreadyAcceptedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue(alreadyAcceptedSituations.get(), new TypeReference<>() {
                    });
                    situations.addAll(jacksonSituations);
                }
                Situation situation = situationOptional.get();
                situations.add(JacksonSituation.newBuilder(situation).status(Status.ACCEPTED).build());
                long ret = kvStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(situations), ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    private Long storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.ENGINE.toString(),
                objectMapper.writeValueAsString(engineParameter),
                ALEC_CONFIG);
        return future.join();
    }

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }
}
