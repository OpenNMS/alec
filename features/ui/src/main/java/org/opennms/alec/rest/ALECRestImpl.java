package org.opennms.alec.rest;

import java.util.Arrays;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.DataStore;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);

    private final DataStore dataStore;
    private final BundleContext bundleContext;

    public ALECRestImpl(DataStore dataStore, BundleContext bundleContext) {
        this.dataStore = dataStore;
        this.bundleContext = bundleContext;
    }

    @Override
    public Response ping() {
        return Response.ok("pong!!").build();
    }

    @Override
    public Response getDB(String key) {
        if (key.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get DB {}", key);
        Optional<String> value = dataStore.get(key, "1");
        return getResponse(value);
    }

    @Override
    public Response storeDB(String key, String body) {
        Long ret = dataStore.put(key, body, "1");
        return Response.ok().entity(ret).build();
    }

    @Override
    public Response setParameter(Parameter parameter) {

        LOG.debug("\n=============================================\n" +
                "Got payload: {}\n" +
                "=============================================", parameter.toString());
        if(parameter.getEngine() != null) {
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
                        if (parameter.getEngine().equals(factory.getName())) {
                            switch (parameter.getEngine()) {
                                case "dbscan":
                                    configureDBScan(parameter, driver, (DBScanEngineFactory) factory);
                                    dataStore.put("engineParameter", new ObjectMapper().writeValueAsString(parameter), "1");
                                    return Response.ok().build();
                                case "cluster":
                                default:
                                    configureCluster(driver, (ClusterEngineFactory) factory);
                                    dataStore.put("engineParameter", new ObjectMapper().writeValueAsString(parameter), "1");
                                    return Response.ok().build();
                            }
                        }
                    }
                    return Response.serverError().entity("No Engine found !!").build();
                } else {
                    return Response.serverError().entity("No Driver found !!").build();
                }
            } catch (Exception e) {
                LOG.error(e.getMessage(), e.fillInStackTrace());
                return Response.serverError().entity("something went wrong").build();
            }
        }

        return Response.ok().build();
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
