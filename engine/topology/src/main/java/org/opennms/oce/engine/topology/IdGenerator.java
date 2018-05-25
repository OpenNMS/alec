/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.oce.engine.topology;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

// Encapsulate the ID generation for internal Alarms, Reports and Incidents so that they can be ovverridden by test harness.
public class IdGenerator {

    int index = 0;

    List<String> preparedIds;

    public String next() {
        if (preparedIds == null) {
            // Default behaviour.
            return UUID.randomUUID().toString().substring(0, 8);
        }
        return preparedIds.get(index++);
    }

    // Load a prepared list of IDs from the test harness
    public void setIds(List<String> ids) {
        preparedIds = ids;
    }

    // auto-gen list for tests
    public List<String> generateIds(int number, int length) {
        List<String> ids = new ArrayList<>(number);
        for (int i = 0; i < length; i++) {
            ids.add(UUID.randomUUID().toString().substring(0, length));
        }
        return ids;
    }

}
