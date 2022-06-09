package org.opennms.alec.data;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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


/**
 *
 */
public class StoreFileImpl implements StoreFile {

    @Override
    public void write(String filePath, String filename, String content) throws IOException {
        String lastVersion = getLastVersion(filePath, filename);
        filename += "_v" + (Integer.parseInt(lastVersion) + 1) + ".agr";
        Files.writeString(Path.of(filePath, filename), content);
    }

    @Override
    public List<String> getVersions(String filePath, String filename) {
        try (Stream<Path> stream = Files.walk(Paths.get(filePath), 1)) {
            return stream
                    .filter(file -> !Files.isDirectory(file))
                    .map(Path::getFileName)
                    .map(Path::toString)
                    .filter(s -> filename.equalsIgnoreCase(s.substring(0, s.lastIndexOf("_v"))))
                    .map(s -> s.substring(s.lastIndexOf("_v") + 2, s.lastIndexOf('.')))
                    .sorted()
                    .collect(Collectors.toList());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getLastVersion(String filePath, String filename) {
        return String.valueOf(getVersions(filePath, filename)
                .stream()
                .mapToInt(Integer::parseInt)
                .max().orElseThrow(NoSuchElementException::new));

    }
}
