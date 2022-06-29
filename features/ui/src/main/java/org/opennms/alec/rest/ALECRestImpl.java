package org.opennms.alec.rest;

import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.Response;
import java.util.Arrays;
import java.util.Optional;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);

    private final BundleContext bundleContext;

    public ALECRestImpl(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    @Override
    public Response ping() {
        // How do I identify the user?
        return Response.ok("pong!!").build();
    }

    @Override
    public Response handleWebhook(String body) {
        LOG.debug("Got payload: {}", body);
        return Response.ok().build();
    }

    @Override
    public Response setParameter(Parameter parameter) {

        LOG.debug("\n=============================================\n" +
                "Got payload: {}\n" +
                "=============================================", parameter.toString());
        try {
            ServiceReference<?>[] refs = bundleContext.getAllServiceReferences(EngineRegistry.class.getCanonicalName(), null);
            Optional<ServiceReference<?>> optionalServiceReference = Arrays.stream(refs).findFirst();
            if (optionalServiceReference.isPresent()) {
                Driver driver = (Driver) bundleContext.getService(optionalServiceReference.get());

                refs = bundleContext.getAllServiceReferences(EngineFactory.class.getCanonicalName(), null);
                for (ServiceReference<?> ref : refs) {
                    EngineFactory factory = (EngineFactory) bundleContext.getService(ref);
                    String engineName = factory.getName();
                    if (engineName.equalsIgnoreCase(parameter.getEngine())) {
                        switch (engineName) {
                            case "dbscan":
                                DBScanEngineFactory dbScanEngineFactory = (DBScanEngineFactory) bundleContext.getService(ref);
                                dbScanEngineFactory.setAlpha(parameter.getAlpha());
                                dbScanEngineFactory.setBeta(parameter.getBeta());
                                dbScanEngineFactory.setEpsilon(parameter.getEpsilon());
                                dbScanEngineFactory.setDistanceMeasureFactory(parameter.getDistanceMeasure());
                                dbScanEngineFactory.createEngine(driver.getMetrics());
                                driver.setEngineFactory(dbScanEngineFactory);
                                return Response.ok().build();
                            case "cluster":
                            default:
                                ClusterEngineFactory clusterEngineFactory = (ClusterEngineFactory) bundleContext.getService(ref);
                                clusterEngineFactory.createEngine(driver.getMetrics());
                                driver.setEngineFactory(clusterEngineFactory);
                                return Response.ok().build();
                        }
                    }
                }
                return Response.serverError().entity("No Engine found !!").build();
            } else {
                return Response.serverError().entity("No Driver found !!").build();
            }
        } catch (InvalidSyntaxException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }
}
