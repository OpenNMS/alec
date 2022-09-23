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

package org.opennms.alec.engine.deeplearning;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.Enumeration;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;
import java.util.zip.ZipException;

import org.apache.commons.io.FileUtils;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Utility functions for copying resources from the classpath
 *
 * @author stack overflow
 */
class ClasspathUtils {
    public static final int THRESHOLD_ENTRIES = 10000;
    public static final int THRESHOLD_SIZE = 1000000000;// 1 GB
    public static final double THRESHOLD_RATIO = 10;
    private static final Logger LOG = LoggerFactory.getLogger(ClasspathUtils.class);

    private ClasspathUtils(){
    }

    /**
     * Recursively copy a folder from a bundle to the filesystem.
     *
     * @param bundleContext bundle context
     * @param path path of the resources within the bundle
     * @param destination target folder
     * @throws IOException on error
     */
    static void copyResourcesRecursively(BundleContext bundleContext, String path, File destination) throws IOException {
        final Enumeration<URL> urls = bundleContext.getBundle().findEntries(path, "*", true);
        while (urls.hasMoreElements()) {
            final URL url = urls.nextElement();
            final String fileName = removeStart(url.getPath(), path);
            if (fileName!= null && fileName.endsWith("/")) {
                // This is a directory, skip it
                continue;
            }
            try (InputStream entryInputStream = url.openStream()) {
                final File targetFile = new File(destination, fileName);
                LOG.debug("Copying '{}' to '{}'.", url, targetFile);
                // Create the parent directory if necessary
                FileUtils.forceMkdir(new File(targetFile.getParent()));
                // Copy the bytes
                FileUtils.copyInputStreamToFile(entryInputStream, targetFile);
            }
        }
    }

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

    private static void copyJarResourcesRecursively(File destination, JarURLConnection jarConnection) throws IOException {
        int totalSizeArchive = 0;
        int totalEntryArchive = 0;

        final JarFile jarFile = jarConnection.getJarFile();
        Enumeration<JarEntry> entries = jarFile.entries();
        while (entries.hasMoreElements()) {
            ZipEntry ze = entries.nextElement();
            try (InputStream in = new BufferedInputStream(jarFile.getInputStream(ze))) {
                totalEntryArchive++;

                int nBytes = -1;
                byte[] buffer = new byte[2048];
                double totalSizeEntry = 0;

                final String fileName = removeStart(ze.getName(), jarConnection.getEntryName());
                while ((nBytes = in.read(buffer)) > 0) {
                    createDirectoryOrCopyFile(destination, jarFile, ze, fileName);

                    totalSizeEntry += nBytes;
                    totalSizeArchive += nBytes;

                    double compressionRatio = totalSizeEntry / ze.getCompressedSize();
                    if (compressionRatio > THRESHOLD_RATIO) {
                        LOG.warn("ratio between compressed and uncompressed data is highly suspicious, looks like a Zip Bomb Attack");
                        throw new ZipException("ratio between compressed and uncompressed data is highly suspicious, looks like a Zip Bomb Attack");
                    }
                }
            }

            if (totalSizeArchive > THRESHOLD_SIZE) {
                LOG.warn("the uncompressed data size is too much for the application resource capacity");
                throw new ZipException("the uncompressed data size is too much for the application resource capacity");
            }

            if (totalEntryArchive > THRESHOLD_ENTRIES) {
                LOG.warn("too much entries in this archive, can lead to inodes exhaustion of the system");
                throw new ZipException("too much entries in this archive, can lead to inodes exhaustion of the system");
            }
        }
    }

    private static void createDirectoryOrCopyFile(File destination, JarFile jarFile, ZipEntry ze, String fileName) throws IOException {
        if (!ze.isDirectory()) {
            try (InputStream entryInputStream = jarFile.getInputStream(ze)) {
                FileUtils.copyInputStreamToFile(entryInputStream, new File(destination, fileName));
            }
        } else {
            FileUtils.forceMkdir(new File(destination, fileName));
        }
    }

    private static String removeStart(String s, String prefix) {
        if (s != null && prefix != null && s.startsWith(prefix)){
            return s.substring(prefix.length());
        }
        return s;
    }
}
