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

import com.google.common.base.Strings;
import com.google.common.util.concurrent.SimpleTimeLimiter;
import com.google.common.util.concurrent.TimeLimiter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testcontainers.containers.BindMode;
import org.testcontainers.containers.Container;
import org.testcontainers.containers.SelinuxContext;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class DevDebugUtils {
    private static final Logger LOG = LoggerFactory.getLogger(DevDebugUtils.class);

    public static void copyLogs(Container container, Path targetLogFolder, Path sourceLogFolder, List<String> logFiles) {
        try {
            Files.createDirectories(targetLogFolder);
        } catch (IOException e) {
            throw new RuntimeException("Failed to create " + targetLogFolder, e);
        }

        // Copying files from the containers seems to block some times
        // We limit their execution times so we don't block for too long when this happen
        final ExecutorService executor = Executors.newCachedThreadPool();
        final TimeLimiter limiter = SimpleTimeLimiter.create(executor);

        final Path containerLogOutputFile = targetLogFolder.resolve("container_stdout_stderr");
        try {
            limiter.runWithTimeout(() -> {
                try {
                    Files.write(containerLogOutputFile, container.getLogs().getBytes(StandardCharsets.UTF_8));
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }, 1, TimeUnit.MINUTES);
        } catch (Exception e) {
            LOG.info("Failed to copy stdout/stderr from container to file {}: {}", containerLogOutputFile, e.getMessage());
        }

        for (String logFile : logFiles) {
            try {
                limiter.runWithTimeout(() -> {
                    try {
                        container.copyFileFromContainer(sourceLogFolder.resolve(logFile).toString(),
                                targetLogFolder.resolve(logFile).toString());
                    } catch (IOException|InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }, 1, TimeUnit.MINUTES);
            } catch (Exception e) {
                LOG.info("Failed to copy log file {} from container: {}", logFile, e.getMessage());
            }
        }

        executor.shutdownNow();
    }
}
