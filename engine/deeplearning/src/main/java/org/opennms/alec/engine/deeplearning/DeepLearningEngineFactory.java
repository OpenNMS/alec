/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.deeplearning;

import java.util.Objects;
import java.util.StringJoiner;

import org.opennms.alec.engine.api.EngineFactory;
import org.osgi.framework.BundleContext;

import com.codahale.metrics.MetricRegistry;

public class DeepLearningEngineFactory implements EngineFactory {
    private final BundleContext bundleContext;
    private final DeepLearningEngineConf conf;
    private String token;
    private String uri;
    private boolean isRemote = false;

    public DeepLearningEngineFactory(BundleContext bundleContext, DeepLearningEngineConf conf) {
        this.bundleContext = Objects.requireNonNull(bundleContext);
        this.conf = Objects.requireNonNull(conf);
        this.token = "";
        this.uri = "";
    }

    public DeepLearningEngineFactory(DeepLearningEngineConf conf, String token, String uri) {
        this.conf = Objects.requireNonNull(conf);
        this.token = token;
        this.uri = uri;
        this.bundleContext = null;
    }

    @Override
    public String getName() {
        return "deeplearning";
    }

    @Override
    public String getNameConf() {
        return new StringJoiner(", ", getName() + "[", "]")
                .add("isRemote=" + isRemote)
                .toString();
    }

    @Override
    public DeepLearningEngine createEngine(MetricRegistry metrics) {
        if (!isRemote) {
            return new DeepLearningEngine(metrics, bundleContext, conf);
        } else {
            return new DeepLearningEngine(metrics, conf, token, uri);
        }
    }

    @Override
    public EngineFactory getEngineFactory() {
        return this;
    }

    @Override
    public String getParameters() {
        return String.format("engine: %s", getName());
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public boolean isRemote() {
        return isRemote;
    }

    public void setRemote(boolean remote) {
        isRemote = remote;
    }

    public String getToken() {
        return token;
    }

    public String getUri() {
        return uri;
    }


}
