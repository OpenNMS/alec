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

import java.io.IOException;
import java.util.Optional;
import java.util.Properties;

public class DockerImageResolver {
    private static final String FLOATING_FILE = "docker_floating_images";
    private static final String FIXED_FILE = "docker_fixed_images";

    public static String getImageAndTag(String name) {
        String imageAndTag;

        try {
            imageAndTag = getFromFile(FLOATING_FILE, name).orElse(getFromFile(FIXED_FILE, name).orElse(null));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        if (imageAndTag == null) {
            throw new RuntimeException("Could not find tag for " + name);
        }

        return imageAndTag;
    }

    private static Optional<String> getFromFile(String file, String name) throws IOException {
        Properties prop = new Properties();
        prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream(file));
        String tag = prop.getProperty(name);
        return tag == null ? Optional.empty() : Optional.of(tag);
    }
}
