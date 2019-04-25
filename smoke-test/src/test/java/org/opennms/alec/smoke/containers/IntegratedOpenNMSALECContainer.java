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

import java.nio.file.Path;

import org.junit.runner.Description;
import org.opennms.alec.smoke.util.Cleanup;
import org.opennms.alec.smoke.util.Karaf;
import org.opennms.alec.smoke.util.Network;
import org.opennms.alec.smoke.util.Overlay;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.wait.strategy.WaitStrategyTarget;

public class IntegratedOpenNMSALECContainer extends OpenNMSContainer {
    private static final Logger LOG = LoggerFactory.getLogger(IntegratedOpenNMSALECContainer.class);

    protected String getOverlayDir() {
        return Overlay.getOverlayDir("opennms-integrated-overlay");
    }

    @Override
    protected Path prepareOverlay() {
        Path overlayPath = super.prepareOverlay();
        Karaf.verifyKar(overlayPath.resolve("deploy"));
        return overlayPath;
    }

    @Override
    protected void waitForKarafBundles(WaitStrategyTarget waitStrategyTarget) {
        LOG.info("Waiting for integrated ALEC");
        Karaf.waitForBundleActive("org.opennms.alec.driver", Network.getConnectionAddress(waitStrategyTarget,
                OPENNMS_SSH_PORT));
    }

    @Override
    protected void failed(Throwable e, Description description) {
        Cleanup.skipCleanupIfNeeded(e);
        super.failed(e, description);
    }
}
