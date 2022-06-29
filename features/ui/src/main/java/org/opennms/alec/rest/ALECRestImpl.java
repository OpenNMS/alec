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
            Driver driver = (Driver) bundleContext.getService(refs[0]);
            refs = bundleContext.getAllServiceReferences(EngineFactory.class.getCanonicalName(), null);
            for (ServiceReference<?> ref : refs) {
                EngineFactory factory = (EngineFactory) bundleContext.getService(ref);
                String engineName = factory.getName();
                if (engineName.equalsIgnoreCase(parameter.getEngine())) {
                    switch (engineName) {
                        case "cluster":
                            ClusterEngineFactory clusterEngineFactory = (ClusterEngineFactory) bundleContext.getService(ref);
                            clusterEngineFactory.createEngine(driver.getMetrics());
                            driver.setEngineFactory(clusterEngineFactory);
                            break;
                        case "dbscan":
                        default:
                            DBScanEngineFactory dbScanEngineFactory = (DBScanEngineFactory) bundleContext.getService(ref);
                            dbScanEngineFactory.setAlpha(parameter.getAlpha());
                            dbScanEngineFactory.setBeta(parameter.getBeta());
                            dbScanEngineFactory.setEpsilon(parameter.getEpsilon());
                            dbScanEngineFactory.setDistanceMeasureFactory(parameter.getDistanceMeasure());
                            dbScanEngineFactory.createEngine(driver.getMetrics());
                            driver.setEngineFactory(dbScanEngineFactory);
                            break;
                    }
                }
            }

        } catch (InvalidSyntaxException e) {
            throw new RuntimeException(e);
        }

        return Response.ok().build();
    }

}
