package org.opennms.alec.rest;

import java.util.Arrays;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.features.distributed.kvstore.api.JsonStore;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private final JsonStore jsonStore;
    private final BundleContext bundleContext;
    private final ObjectMapper objectMapper;

    public ALECRestImpl(JsonStore jsonStore, BundleContext bundleContext) {
        this.jsonStore = jsonStore;
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
            String value = jsonStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("");
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
    public Response getConfiguration(KeyEnum keyEnum) {
        LOG.debug("Get Configuration {}", keyEnum);
        String value = jsonStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("");
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
        return Response.ok().entity(jsonStore.put(keyValue.getKey().toString(), keyValue.getValue(), ALEC_CONFIG)).build();
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
            return Response.ok().entity(objectMapper.readValue(jsonStore.get(KeyEnum.ENGINE.toString(), ALEC_CONFIG).orElse(""), EngineParameter.class)).build();
        } catch (JsonProcessingException e) {
            return somethingWentWrong(e);
        }
    }

    private Response storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        return Response.ok()
                .entity(jsonStore.put(KeyEnum.ENGINE.toString(),
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
        return Response.serverError().entity("something went wrong").build();
    }
}
