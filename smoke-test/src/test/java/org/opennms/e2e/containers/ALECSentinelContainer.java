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

import static org.awaitility.Awaitility.await;

import java.io.File;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.commons.io.FileUtils;
import org.opennms.e2e.util.Karaf;
import org.opennms.e2e.util.Network;
import org.opennms.e2e.util.Overlay;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.BindMode;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.SelinuxContext;

public class ALECSentinelContainer extends GenericContainer {
    private static final Logger LOG = LoggerFactory.getLogger(ALECSentinelContainer.class);
    private static final int SENTINEL_SSH_PORT = 8301;
    private static final String OVERLAY_STANDALONE_DIR = "sentinel-overlay-standalone";
    private static final String OVERLAY_REDUNDANT_DIR = "sentinel-overlay-redundant";
    private static final String OVERLAY_DIR = "sentinel-overlay";
    static final String ALIAS = "alec";
    private static AtomicInteger redundantIndex = new AtomicInteger(0);
    private boolean isRedundant;
    private int redundantId;

    public ALECSentinelContainer(boolean isRedundant) throws Exception{
        super(org.opennms.e2e.util.DockerImageResolver.getImageAndTag("sentinel"));
        this.isRedundant = isRedundant;
        redundantId = redundantIndex.getAndIncrement();
        withExposedPorts(SENTINEL_SSH_PORT)
                .withEnv("KARAF_DEBUG_LOGGING", "org.opennms.alec")
                .withNetwork(Network.getNetwork())
                .withNetworkAliases(getIndexedAlias())
                .withCommand("-d")
                .withClasspathResourceMapping(prepareRedundantOverlay().getFileName().toString(), "/opt/sentinel-overlay",
                        BindMode.READ_ONLY,
                        SelinuxContext.SINGLE)
                .waitingFor(new WaitForALEC());
    }

    private void verifyKar(Path overlayDeployPath) {
        // We expect to find exactly 1 kar file that will be overlayed onto the deploy directory of the sentinel
        // container to install ALEC
        File[] karFiles = overlayDeployPath.toFile().listFiles((dir, name) -> name.endsWith(".kar"));
        if (karFiles == null || karFiles.length < 1) {
            throw new RuntimeException("Could not find the .kar file to deploy ALEC");
        }
        if (karFiles.length > 1) {
            throw new RuntimeException("Found too many .kar files for deploying ALEC");
        }
    }

    @SuppressWarnings("ResultOfMethodCallIgnored")
    private Path prepareRedundantOverlay() throws Exception {
        Path sentinelOverlayPath = Overlay.createTmpOverlayInClasspath(OVERLAY_DIR);
        verifyKar(sentinelOverlayPath.resolve("deploy"));

        if (isRedundant) {
            FileUtils.copyDirectory(new File(Thread.currentThread()
                    .getContextClassLoader()
                    .getResource(OVERLAY_REDUNDANT_DIR)
                    .toURI()), sentinelOverlayPath.toFile());
            try {
                insertApplicationId(sentinelOverlayPath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            FileUtils.copyDirectory(new File(Thread.currentThread()
                    .getContextClassLoader()
                    .getResource(OVERLAY_STANDALONE_DIR)
                    .toURI()), sentinelOverlayPath.toFile());
        }

        return sentinelOverlayPath;
    }

    public InetSocketAddress getSSHAddress() {
        return new InetSocketAddress(getContainerIpAddress(), getMappedPort(SENTINEL_SSH_PORT));
    }

    private void waitForALECToTerminate() {
        LOG.info("Waiting for {} to terminate...", getIndexedAlias());

        await()
                .atMost(1, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .until(() -> {
                    try {
                        Karaf.runKarafCommands(getSSHAddress(), "logout");
                    } catch (Exception e) {
                        return true;
                    }

                    return false;
                });

        LOG.info("{} has terminated", getIndexedAlias());
    }

    public void shutdownKaraf() throws Exception {
        LOG.info("Shutting down Karaf on {}", getIndexedAlias());
        Karaf.runKarafCommands(getSSHAddress(), "system:shutdown -f");
        // Make sure the Karaf instance is finished shutting down
        waitForALECToTerminate();
    }

    private String getIndexedAlias() {
        if (isRedundant) {
            return String.format("%s-%d", ALIAS, redundantId);
        }

        return ALIAS;
    }

    private void insertApplicationId(Path overlayDir) throws IOException {
        String applicationIdProperty = "\napplication.id = alec-datasource-instance-" + redundantId;
        Files.write(Paths.get(overlayDir.toString(), "etc", "org.opennms.alec.datasource.opennms.kafka" +
                ".streams.cfg"), applicationIdProperty.getBytes(), StandardOpenOption.APPEND);
    }

    private class WaitForALEC extends org.testcontainers.containers.wait.strategy.AbstractWaitStrategy {
        @Override
        protected void waitUntilReady() {
            LOG.info("Waiting for ALEC {}", getIndexedAlias());
            Karaf.waitForBundleActive("org.opennms.alec.driver", Network.getConnectionAddress(waitStrategyTarget,
                    SENTINEL_SSH_PORT));
        }
    }

    @Override
    public String toString() {
        return getIndexedAlias();
    }
}
