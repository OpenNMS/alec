/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.data;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileStore {

    private String path = "/var/tmp/alec";

    public FileStore(String path) {
        this.path = path;
    }

    public FileStore() {
    }

    public long save(String key, String value, String context) {
        return this.save(key, value, context, null);
    }

    public long save(String key, String value, String context, Integer integer) {
        String lastVersion;
        try {
            lastVersion = getLastVersion(key);
            key += "_v" + (Integer.parseInt(lastVersion) + 1) + ".agr";
            Files.writeString(Path.of(path, key), value);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return 1L;
    }

    public Optional<String> retrieve(String key, String context) {
        try {
            return Optional.ofNullable(read(key, getLastVersion(key)));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Optional<String> retrieve(String key, String context, String version) {
        try {
            return Optional.ofNullable(read(key, version));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public List<String> getVersions(String key) throws IOException {
        try (Stream<Path> stream = Files.walk(Paths.get(path), 1)) {
            return stream.filter(file -> !Files.isDirectory(file))
                    .map(Path::getFileName)
                    .map(Path::toString)
                    .filter(s -> !s.isEmpty())
                    .filter(s -> s.lastIndexOf("_v") > 0)
                    .filter(s -> key.equalsIgnoreCase(s.substring(0, s.lastIndexOf("_v"))))
                    .map(s -> s.substring(s.lastIndexOf("_v") + 2, s.lastIndexOf('.')))
                    .sorted()
                    .collect(Collectors.toList());
        }
    }

    public String getLastVersion(String key) throws IOException {
        return String.valueOf(getVersions(key)
                .stream()
                .mapToInt(Integer::parseInt)
                .max().orElse(0));

    }

    private String read(String key, String version) throws IOException {
        return Files.readString(Path.of(path, key + "_v" + version + ".agr"));
    }
}
