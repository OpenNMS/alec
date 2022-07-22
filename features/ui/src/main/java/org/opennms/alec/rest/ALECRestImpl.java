package org.opennms.alec.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.DataStore;
import org.opennms.alec.data.JacksonSituation;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private final DataStore dataStore;
    private final SituationDatasource situationDatasource;
    private final BundleContext bundleContext;
    private final ObjectMapper objectMapper;

    public ALECRestImpl(DataStore dataStore, SituationDatasource situationDatasource, BundleContext bundleContext) {
        this.dataStore = dataStore;
        this.situationDatasource = situationDatasource;
        this.bundleContext = bundleContext;
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
            String value = (String) dataStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("");
            switch (keyEnum) {
                case ENGINE:
                    try {
                        configuration.engineParameter(objectMapper.readValue(value, EngineParameter.class));
                    } catch (JsonProcessingException e) {
                        configuration.engineParameter(null);
                    }
                    break;
                case AGREEMENT:
                default:
                    configuration.keyValue(KeyValueImpl.newBuilder().key(keyEnum).value(value).build());
            }
        });
        return Response.ok().entity(configuration.build()).build();
    }

    @Override
    public Response getConfiguration(String key) {
        LOG.debug("Get Configuration {}", key);
        KeyEnum keyEnum;
        try {
            keyEnum = KeyEnum.valueOf(key.toUpperCase());
        } catch (IllegalArgumentException e) {
            return somethingWentWrong(e);
        }
        String value = (String) dataStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("");
        switch (keyEnum) {
            case ENGINE:
                try {
                    return Response.ok().entity(objectMapper.readValue(value, EngineParameter.class)).build();
                } catch (JsonProcessingException e) {
                    return somethingWentWrong(e);
                }
            case AGREEMENT:
            default:
                return Response.ok().entity(value).build();
        }
    }

    @Override
    public Response setConfiguration(KeyValue keyValue) {
        LOG.debug("\n=============================================\n" +
                "Set Configuration: {}\n" +
                "=============================================", keyValue.toString());
        return Response.ok().entity(dataStore.put(keyValue.getKey().toString(), keyValue.getValue(), ALEC_CONFIG)).build();
    }

    @Override
    public Response setEngineConfiguration(EngineParameter engineParameter) {
        try {
            //Retrieve Driver, only one driver is registered
            ServiceReference<?>[] engineRegistryRefs = bundleContext.getAllServiceReferences(EngineRegistry.class.getCanonicalName(), null);
            Optional<ServiceReference<?>> engineRegistryRef = Arrays.stream(engineRegistryRefs).findFirst();
            if (engineRegistryRef.isPresent()) {
                Driver driver = (Driver) bundleContext.getService(engineRegistryRef.get());

                //Retrieve Engines list
                ServiceReference<?>[] engineFactoryRefs = bundleContext.getAllServiceReferences(EngineFactory.class.getCanonicalName(), null);
                for (ServiceReference<?> engineFactoryRef : engineFactoryRefs) {
                    EngineFactory factory = (EngineFactory) bundleContext.getService(engineFactoryRef);
                    if (engineParameter.getEngine().equals(factory.getName())) {
                        switch (engineParameter.getEngine()) {
                            case "dbscan":
                                return storeEngineParameter(configureDBScan(engineParameter, driver, (DBScanEngineFactory) factory));
                            case "cluster":
                            default:
                                configureCluster(driver, (ClusterEngineFactory) factory);
                                return storeEngineParameter(engineParameter);
                        }
                    }
                }
                return Response.serverError().entity("No Engine found !!").build();
            }
            return Response.serverError().entity("No Driver found !!").build();
        } catch (Exception e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineConfiguration() {
        try {
            return Response.ok().entity(objectMapper.readValue((String) dataStore.get(KeyEnum.ENGINE.toString(), ALEC_CONFIG).orElse(""), EngineParameter.class)).build();
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response storeSituations() {
        try {
            List<Situation> situationList = situationDatasource.getSituations();
            String situations = objectMapper.writeValueAsString(situationList);
            return Response.ok(dataStore.put(KeyEnum.SITUATION.toString(), situations, ALEC_CONFIG)).build();
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response getSituations() {
        try {
            Optional optional = dataStore.get(KeyEnum.SITUATION.toString(), ALEC_CONFIG);
            if(optional.isEmpty()){
                return Response.noContent().build();
            }
            return Response.ok().entity(objectMapper.readValue((String) optional.orElse(""), new TypeReference<List<JacksonSituation>>(){})).build();
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    @Override
    public Response refusedSituation(String id) {
        List<Situation> refusedSituations = new ArrayList<> ();
        Optional<Situation> refusedSituation = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if(refusedSituation.isPresent()){
            try {
                Optional alreadyRefusedSituations = dataStore.get(KeyEnum.REFUSED_SITUATION.toString(), ALEC_CONFIG);
                if(alreadyRefusedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue((String) alreadyRefusedSituations.get(), new TypeReference<List<JacksonSituation>>() {});
                    refusedSituations.addAll(jacksonSituations);
                }
                refusedSituations.add(refusedSituation.get());
                long ret = dataStore.put(KeyEnum.REFUSED_SITUATION.toString(), objectMapper.writeValueAsString(refusedSituations), ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    @Override
    public Response acceptedSituation(String id) {
        List<Situation> acceptedSituations = new ArrayList<> ();
        Optional<Situation> acceptedSituation = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if(acceptedSituation.isPresent()){
            try {
                Optional alreadyAcceptedSituations = dataStore.get(KeyEnum.ACCEPTED_SITUATION.toString(), ALEC_CONFIG);
                if(alreadyAcceptedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue((String) alreadyAcceptedSituations.get(), new TypeReference<>() {});
                    acceptedSituations.addAll(jacksonSituations);
                }
                acceptedSituations.add(acceptedSituation.get());
                long ret = dataStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(acceptedSituations), ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    private Response storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        return Response.ok()
                .entity(dataStore.put(KeyEnum.ENGINE.toString(),
                        objectMapper.writeValueAsString(engineParameter),
                        ALEC_CONFIG))
                .build();
    }

    private EngineParameter configureCluster(Driver driver, ClusterEngineFactory clusterEngineFactory) {
        clusterEngineFactory.createEngine(driver.getMetrics());
        driver.setEngineFactory(clusterEngineFactory);
        driver.destroy();
        driver.initAsync();

        return EngineParameterImpl.newBuilder()
                .engine(clusterEngineFactory.getName())
                .build();
    }

    private EngineParameter configureDBScan(EngineParameter engineParameter, Driver driver, DBScanEngineFactory dbScanEngineFactory) {
        dbScanEngineFactory.setAlpha(engineParameter.getAlpha());
        dbScanEngineFactory.setBeta(engineParameter.getBeta());
        dbScanEngineFactory.setEpsilon(engineParameter.getEpsilon());
        dbScanEngineFactory.setDistanceMeasureFactory(engineParameter.getDistanceMeasure());
        dbScanEngineFactory.createEngine(driver.getMetrics());
        driver.setEngineFactory(dbScanEngineFactory);
        driver.destroy();
        driver.initAsync();

        return EngineParameterImpl.newBuilder()
                .alpha(dbScanEngineFactory.getAlpha())
                .beta(dbScanEngineFactory.getBeta())
                .epsilon(dbScanEngineFactory.getEpsilon())
                .distanceMeasure(dbScanEngineFactory.getDistanceMeasureFactory())
                .engine(dbScanEngineFactory.getName())
                .build();
    }

    private Response somethingWentWrong(Exception e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }
}
