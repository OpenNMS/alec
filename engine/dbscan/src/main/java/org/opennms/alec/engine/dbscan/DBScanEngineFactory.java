/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.dbscan;

import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.cluster.AbstractClusterEngine;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.codahale.metrics.MetricRegistry;

public class DBScanEngineFactory implements EngineFactory {

    private static final Logger LOG = LoggerFactory.getLogger(DBScanEngineFactory.class);

    private double epsilon;// = DBScanEngine.DEFAULT_EPSILON;
    private double alpha;// = DBScanEngine.DEFAULT_ALPHA;
    private double beta;// = DBScanEngine.DEFAULT_BETA;
    private String distanceMeasureFactory;
    private BundleContext bundleContext;

    public DBScanEngineFactory(double epsilon, double alpha, double beta, BundleContext bundleContext, String distanceMeasureFactory) {
        this.epsilon = epsilon;
        this.alpha = alpha;
        this.beta = beta;
        this.bundleContext = bundleContext;
        this.distanceMeasureFactory = distanceMeasureFactory;
    }

    @Override
    public String getName() {
        return "dbscan";
    }

    @Override
    public AbstractClusterEngine createEngine(MetricRegistry metrics) {
        try {
            ServiceReference<?>[] refs = bundleContext.getAllServiceReferences(DistanceMeasureFactory.class.getCanonicalName(), null);
            for (ServiceReference<?> ref : refs) {
                DistanceMeasureFactory factory = (DistanceMeasureFactory) bundleContext.getService(ref);
                if (factory.getName().equalsIgnoreCase(distanceMeasureFactory)) {
                    return new DBScanEngine(metrics, epsilon, alpha, beta, factory);
                }
            }
        } catch (InvalidSyntaxException e) {
            throw new RuntimeException(e);
        }

        LOG.error("Wrong distance measure configuration, we'll use default");
        return new DBScanEngine(metrics, epsilon, alpha, beta, new AlarmInSpaceAndTimeDistanceMeasureFactory());
    }

    public double getEpsilon() {
        return epsilon;
    }

    public void setEpsilon(double epsilon) {
        this.epsilon = epsilon;
    }

    public double getAlpha() {
        return alpha;
    }

    public void setAlpha(double alpha) {
        this.alpha = alpha;
    }

    public double getBeta() {
        return beta;
    }

    public void setBeta(double beta) {
        this.beta = beta;
    }

    public void setDistanceMeasureFactory(String distanceMeasureFactory) {
        this.distanceMeasureFactory = distanceMeasureFactory;
    }
}
