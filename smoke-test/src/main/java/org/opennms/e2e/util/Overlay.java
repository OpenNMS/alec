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

package org.opennms.e2e.util;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

import org.apache.commons.io.FileUtils;

public class Overlay {
    public static Path createTmpOverlayInClasspath(String fromResourceDir) throws Exception {
        URL resourceDirURL = Thread.currentThread()
                .getContextClassLoader()
                .getResource(Objects.requireNonNull(fromResourceDir));
        Path tmpResourceDir = Files.createTempDirectory(Paths.get(resourceDirURL.getPath()).getParent(), "tmp" +
                ".overlay");

        String envKeepOverlay = System.getenv("KEEP_TMP_OVERLAY");

        if (!Boolean.parseBoolean(envKeepOverlay == null ? "false" : envKeepOverlay)) {
            Runtime.getRuntime().addShutdownHook(new Thread(() -> {
                try {
                    FileUtils.deleteDirectory(tmpResourceDir.toFile());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }));
        }
        FileUtils.copyDirectory(new File(resourceDirURL.toURI()), tmpResourceDir.toFile());

        if (!tmpResourceDir.toFile().setReadable(true, false)) {
            throw new RuntimeException(String.format("Failed to set path %s readable", tmpResourceDir));
        }

        if (!tmpResourceDir.toFile().setExecutable(true, false)) {
            throw new RuntimeException(String.format("Failed to set path %s executable", tmpResourceDir));
        }

        return tmpResourceDir;
    }
}
