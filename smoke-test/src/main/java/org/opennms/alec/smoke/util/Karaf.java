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

package org.opennms.alec.smoke.util;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;

import java.io.File;
import java.io.PrintStream;
import java.net.InetSocketAddress;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.opennms.alec.smoke.util.ssh.SshClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Karaf {
    private static final Logger LOG = LoggerFactory.getLogger(Karaf.class);

    public static String runKarafCommands(InetSocketAddress serviceAddress, String... commands) throws Exception {
        try (final SshClient sshClient = new SshClient(serviceAddress, "admin", "admin")) {
            PrintStream pipe = sshClient.openShell();

            for (String s : commands) {
                LOG.debug("Running Karaf command {}", s);
                pipe.println(s);
            }

            // Logout of the shell if a logout command was not provided
            if (!commands[commands.length - 1].equals("logout")) {
                pipe.println("logout");
            }

            await()
                    .atMost(10, SECONDS)
                    .until(sshClient.isShellClosedCallable());

            String stdout = sshClient.getStdout();
            LOG.debug("Karaf command stdout: {}", stdout);
            return stdout;
        }
    }

    public static void waitForBundleActive(String bundleName, InetSocketAddress serviceAddress) {
        LOG.debug("Checking for active bundle with prefix {}", bundleName);

        await()
                .atMost(4, TimeUnit.MINUTES)
                .pollInterval(5, TimeUnit.SECONDS)
                .ignoreExceptions()
                .until(() -> {
                    String[] output = runKarafCommands(serviceAddress, "bundle:list -s").split("\n");
                    return Arrays.stream(output).anyMatch(row -> row.contains(bundleName) &&
                            row.contains("Active"));
                });
    }

    public static void verifyKar(Path overlayDeployPath) {
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
}
