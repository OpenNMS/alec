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

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.Collections;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

import org.apache.commons.io.FileUtils;

/**
 * Utility functions for copying resources from the classpath
 *
 * @author stack overflow
 */
class ClasspathUtils {

    /**
     * Recursively copy a folder from the class-path to the filesystem.
     *
     * @param originUrl class-path url
     * @param destination target folder
     * @throws IOException on error
     */
    static void copyResourcesRecursively(URL originUrl, File destination) throws IOException {
        final URLConnection urlConnection = originUrl.openConnection();
        if (urlConnection instanceof JarURLConnection) {
            copyJarResourcesRecursively(destination, (JarURLConnection) urlConnection);
        } else {
            // Assume we have a FileURLConnection
            FileUtils.copyDirectory(new File(originUrl.getPath()), destination);
        }
    }

    private static void copyJarResourcesRecursively(File destination, JarURLConnection jarConnection ) throws IOException {
        final JarFile jarFile = jarConnection.getJarFile();
        for (JarEntry entry : Collections.list(jarFile.entries())) {
            if (entry.getName().startsWith(jarConnection.getEntryName())) {
                final String fileName = removeStart(entry.getName(), jarConnection.getEntryName());
                if (!entry.isDirectory()) {
                    try (InputStream entryInputStream = jarFile.getInputStream(entry)) {
                        FileUtils.copyInputStreamToFile(entryInputStream, new File(destination, fileName));
                    }
                } else {
                    FileUtils.forceMkdir(new File(destination, fileName));
                }
            }
        }
    }

    private static String removeStart(String s, String prefix) {
        if (s != null && prefix != null && s.startsWith(prefix)){
            return s.substring(prefix.length());
        }
        return s;
    }
}
