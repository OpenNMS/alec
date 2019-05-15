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

package org.opennms.alec.smoke.containers;

import static java.util.concurrent.TimeUnit.MINUTES;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.notNullValue;

import java.io.File;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Path;

import org.apache.commons.io.FileUtils;
import org.junit.runner.Description;
import org.opennms.alec.smoke.opennms.OpenNMSRestClient;
import org.opennms.alec.smoke.util.Cleanup;
import org.opennms.alec.smoke.util.DockerImageResolver;
import org.opennms.alec.smoke.util.Karaf;
import org.opennms.alec.smoke.util.Network;
import org.opennms.alec.smoke.util.Overlay;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.BindMode;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.containers.SelinuxContext;
import org.testcontainers.containers.wait.strategy.WaitStrategyTarget;

public class OpenNMSContainer extends GenericContainer {
    public static final String DB_ALIAS = "db";
    private static final Logger LOG = LoggerFactory.getLogger(OpenNMSContainer.class);
    private static final int OPENNMS_WEB_PORT = 8980;
    protected static final int OPENNMS_SSH_PORT = 8101;
    private static final int OPENNMS_DEBUG_PORT = 8001;
    static final String ALIAS = "opennms";
    protected static final String OVERLAY_DIR = "opennms-overlay";

    public OpenNMSContainer() {
        super(DockerImageResolver.getImageAndTag("opennms"));
        withExposedPorts(OPENNMS_WEB_PORT, OPENNMS_SSH_PORT, OPENNMS_DEBUG_PORT)
                .withEnv("POSTGRES_HOST", DB_ALIAS)
                .withEnv("POSTGRES_PORT", Integer.toString(PostgreSQLContainer.POSTGRESQL_PORT))
                // User/pass are hardcoded in PostgreSQLContainer but are not exposed
                .withEnv("POSTGRES_USER", "test")
                .withEnv("POSTGRES_PASSWORD", "test")
                .withEnv("OPENNMS_DBNAME", "opennms")
                .withEnv("OPENNMS_DBUSER", "opennms")
                .withEnv("OPENNMS_DBPASS", "opennms")
                .withEnv("KARAF_FEATURES", "producer")
                .withEnv("JAVA_OPTS", "-agentlib:jdwp=transport=dt_socket,server=y,address=0.0.0.0:8001,suspend=n")
                .withClasspathResourceMapping(prepareOverlay().getFileName().toString(), "/opt/opennms-overlay",
                        BindMode.READ_ONLY,
                        SelinuxContext.SINGLE)
                .withNetwork(Network.getNetwork())
                .withNetworkAliases(ALIAS)
                .withCommand("-s")
                .waitingFor(new WaitForOpenNMS());
    }

    public URL getOpenNMSUrl() {
        try {
            return new URL(String.format("http://%s:%d/opennms", getContainerIpAddress(),
                    getMappedPort(OPENNMS_WEB_PORT)));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    public InetSocketAddress getSSHAddress() {
        return new InetSocketAddress(getContainerIpAddress(), getMappedPort(OPENNMS_SSH_PORT));
    }

    protected Path prepareOverlay() {
        Path opennmsOverlayPath = null;
        try {
            opennmsOverlayPath = Overlay.createTmpOverlayInClasspath(OVERLAY_DIR);

            FileUtils.copyDirectory(new File(Thread.currentThread()
                    .getContextClassLoader()
                    .getResource(getOverlayDir())
                    .toURI()), opennmsOverlayPath.toFile());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return opennmsOverlayPath;
    }

    protected String getOverlayDir() {
        return Overlay.getOverlayDir("opennms-distributed-overlay");
    }

    protected class WaitForOpenNMS extends org.testcontainers.containers.wait.strategy.AbstractWaitStrategy {
        @Override
        protected void waitUntilReady() {
            LOG.info("Waiting for OpenNMS...");
            String containerIP = waitStrategyTarget.getContainerIpAddress();
            final OpenNMSRestClient nmsRestClient;
            try {
                nmsRestClient = new OpenNMSRestClient(new URL(String.format("http://%s:%d/opennms", containerIP,
                        waitStrategyTarget.getMappedPort(OPENNMS_WEB_PORT))));
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
            await().atMost(5, MINUTES)
                    .pollInterval(5, SECONDS).pollDelay(0, SECONDS)
                    .ignoreExceptions()
                    .until(nmsRestClient::getDisplayVersion, notNullValue());

            waitForKarafBundles(waitStrategyTarget);
            LOG.info("OpenNMS is ready");
        }
    }

    protected void waitForKarafBundles(WaitStrategyTarget waitStrategyTarget) {
        Karaf.waitForBundleActive("org.opennms.features.kafka", Network.getConnectionAddress(waitStrategyTarget,
                OPENNMS_SSH_PORT));
    }

    @Override
    protected void failed(Throwable e, Description description) {
        Cleanup.skipCleanupIfNeeded(e);
        super.failed(e, description);
    }
}
