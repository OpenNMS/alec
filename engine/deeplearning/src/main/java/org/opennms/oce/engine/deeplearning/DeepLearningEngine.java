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

package org.opennms.oce.engine.deeplearning;

import java.util.List;
import java.util.Objects;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.opennms.oce.engine.cluster.AbstractClusterEngine;
import org.opennms.oce.engine.cluster.AlarmInSpaceTime;
import org.opennms.oce.engine.cluster.CEEdge;
import org.opennms.oce.engine.cluster.CEVertex;
import org.osgi.framework.BundleContext;

import edu.uci.ics.jung.graph.Graph;

/**
 * A clustering engine based on Tensorflow.
 *
 * We load a Tensorlfow model delegate to the {@link TFClusterer} to
 * perform the clustering.
 */
public class DeepLearningEngine extends AbstractClusterEngine {
    private final DeepLearningEngineConf conf;
    private final TFModel tfModel;
    private Vectorizer vectorizer;
    private TFClusterer tfClusterer;

    public DeepLearningEngine(BundleContext bundleContext, DeepLearningEngineConf conf) {
        this(new TFModel(bundleContext, conf.getModelPath()), conf);
    }

    private DeepLearningEngine(TFModel tfModel, DeepLearningEngineConf conf) {
        this.tfModel = Objects.requireNonNull(tfModel);
        this.conf = Objects.requireNonNull(conf);
    }

    @Override
    public void onInit() {
        vectorizer = new Vectorizer(getGraphManager(), this);
        tfClusterer = new TFClusterer(tfModel, vectorizer, conf);
        tfClusterer.init();
    }

    @Override
    public void onDestroy() {
        tfClusterer.destroy();
        tfModel.close();
    }

    @Override
    public List<Cluster<AlarmInSpaceTime>> cluster(long timestampInMillis, Graph<CEVertex, CEEdge> g) {
        return tfClusterer.cluster(g);
    }

}
