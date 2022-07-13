package org.opennms.alec.rest;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
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

import com.fasterxml.jackson.databind.ObjectMapper;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private final JsonStore jsonStore;
    private final BundleContext bundleContext;

    public ALECRestImpl(JsonStore jsonStore, BundleContext bundleContext) {
        this.jsonStore = jsonStore;
        this.bundleContext = bundleContext;
    }

    @Override
    public Response ping() {
        return Response.ok("pong!!").build();
    }

    @Override
    public Response getConfigurations() {
        LOG.debug("Get Configurations");
        Map<KeyEnum, String> rets = new HashMap();
        KeyEnum.stream().forEach(keyEnum -> rets.put(keyEnum, jsonStore.get(keyEnum.toString(), ALEC_CONFIG).orElse("")));
        return Response.ok().entity(rets).build();
    }

    @Override
    public Response getConfiguration(KeyValue keyValue) {
        LOG.debug("Get Configuration {}", keyValue.getKey());
        return Response.ok().entity(jsonStore.get(keyValue.getKey().toString(), ALEC_CONFIG).orElse("")).build();
    }

    @Override
    public Response setConfiguration(KeyValue keyValue) {

        LOG.debug("\n=============================================\n" +
                "Set Configuration: {}\n" +
                "=============================================", keyValue.toString());
        try {
            if (KeyEnum.ENGINE.equals(keyValue.getKey())) {
                Parameter parameter = new ObjectMapper().readValue(keyValue.getValue(), Parameter.class);
                //Retrieve Driver, only one driver is registered
                ServiceReference<?>[] engineRegistryRefs = bundleContext.getAllServiceReferences(EngineRegistry.class.getCanonicalName(), null);
                Optional<ServiceReference<?>> engineRegistryRef = Arrays.stream(engineRegistryRefs).findFirst();
                if (engineRegistryRef.isPresent()) {
                    Driver driver = (Driver) bundleContext.getService(engineRegistryRef.get());

                    //Retrieve Engines list
                    ServiceReference<?>[] engineFactoryRefs = bundleContext.getAllServiceReferences(EngineFactory.class.getCanonicalName(), null);
                    boolean ret = false;
                    for (ServiceReference<?> engineFactoryRef : engineFactoryRefs) {
                        EngineFactory factory = (EngineFactory) bundleContext.getService(engineFactoryRef);
                        if (parameter.getEngine().equals(factory.getName())) {
                            switch (parameter.getEngine()) {
                                case "dbscan":
                                    configureDBScan(parameter, driver, (DBScanEngineFactory) factory);
                                    ret = true;
                                    break;
                                case "cluster":
                                default:
                                    configureCluster(driver, (ClusterEngineFactory) factory);
                                    ret = true;
                            }
                        }
                    }
                    if(!ret) {
                        return Response.serverError().entity("No Engine found !!").build();
                    }
                } else {
                    return Response.serverError().entity("No Driver found !!").build();
                }
            }

            //Store keyValue
            return Response.ok().entity(jsonStore.put(keyValue.getKey().toString(), keyValue.getValue(), ALEC_CONFIG)).build();
        } catch (Exception e) {
            LOG.error(e.getMessage(), e.fillInStackTrace());
            return Response.serverError().entity("something went wrong").build();
        }
    }

    private void configureCluster(Driver driver, ClusterEngineFactory clusterEngineFactory) {
        clusterEngineFactory.createEngine(driver.getMetrics());
        driver.setEngineFactory(clusterEngineFactory);
        driver.destroy();
        driver.initAsync();
    }

    private void configureDBScan(Parameter parameter, Driver driver, DBScanEngineFactory dbScanEngineFactory) {
        dbScanEngineFactory.setAlpha(parameter.getAlpha());
        dbScanEngineFactory.setBeta(parameter.getBeta());
        dbScanEngineFactory.setEpsilon(parameter.getEpsilon());
        dbScanEngineFactory.setDistanceMeasureFactory(parameter.getDistanceMeasure());
        dbScanEngineFactory.createEngine(driver.getMetrics());
        driver.setEngineFactory(dbScanEngineFactory);
        driver.destroy();
        driver.initAsync();
    }

    private Response getResponse(Optional<String> value) {
        if (value.isPresent()) {
            return Response.ok().entity(value.get()).build();
        } else {
            return Response.noContent().build();
        }
    }
}
