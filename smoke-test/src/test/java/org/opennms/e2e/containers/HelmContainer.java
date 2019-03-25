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

package org.opennms.e2e.containers;

import static java.util.concurrent.TimeUnit.MINUTES;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

import java.net.MalformedURLException;
import java.net.URL;

import org.opennms.e2e.grafana.GrafanaRestClient;
import org.opennms.e2e.util.DockerImageResolver;
import org.opennms.e2e.util.Network;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.GenericContainer;

public class HelmContainer extends GenericContainer {
    private static final Logger LOG = LoggerFactory.getLogger(HelmContainer.class);
    private static final int HELM_WEB_PORT = 3000;
    static final String ALIAS = "helm";

    public HelmContainer() {
        super(DockerImageResolver.getImageAndTag("helm"));
        withExposedPorts(HELM_WEB_PORT)
                .withNetwork(Network.getNetwork())
                .withNetworkAliases(ALIAS)
                .waitingFor(new WaitForHelm());
    }

    public URL getHelmUrlForWebDriver() {
        return getHelmInternalUrl();
    }

    /**
     * @return the URL in a form consumable by containers networked with this one using the alias and internal port
     */
    private URL getHelmInternalUrl() {
        try {
            return new URL(String.format("http://%s:%d", ALIAS, HELM_WEB_PORT));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * @return the URL in a form consumable by the host using the mapped port
     */
    public URL getHelmExternalUrl() {
        try {
            return new URL(String.format("http://%s:%d", getContainerIpAddress(), getMappedPort(HELM_WEB_PORT)));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    private class WaitForHelm extends org.testcontainers.containers.wait.strategy.AbstractWaitStrategy {
        @Override
        protected void waitUntilReady() {
            LOG.info("Waiting for Helm...");
            // The wait strategy runs on the host so we need to use the external URL
            final GrafanaRestClient grafanaRestClient =
                    new GrafanaRestClient(getHelmExternalUrl());
            await().atMost(2, MINUTES)
                    .pollInterval(5, SECONDS).pollDelay(0, SECONDS)
                    .ignoreExceptions()
                    .until(grafanaRestClient::getDataSources, hasSize(greaterThanOrEqualTo(0)));
            LOG.info("Helm is ready");
        }
    }
}
