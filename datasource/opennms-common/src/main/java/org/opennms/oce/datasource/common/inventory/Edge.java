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

package org.opennms.oce.datasource.common.inventory;

import java.util.Objects;

/**
 * Utility methods for deriving Edge attributes.
 */
public class Edge {
    /**
     * @return the friendly name using a target port
     */
    public static String generateFriendlyName(long sourceIfIndex, String sourceNodeCriteria, long targetIfIndex,
                                              String targetNodeCriteria, String protocol) {
        return String.format("Link Between %d on %s and %d on %s discovered with " +
                        "protocol %s", sourceIfIndex, Objects.requireNonNull(sourceNodeCriteria), targetIfIndex,
                Objects.requireNonNull(targetNodeCriteria), Objects.requireNonNull(protocol));
    }

    /**
     * @return the friendly name using a target segment
     */
    public static String generateFriendlyName(long sourceIfIndex, String sourceNodeCriteria,
                                              String targetSegmentCriteria, String protocol) {
        return String.format("Link Between %d on %s and segment %s discovered with protocol %s",
                sourceIfIndex, Objects.requireNonNull(sourceNodeCriteria),
                Objects.requireNonNull(targetSegmentCriteria), Objects.requireNonNull(protocol));
    }

    /**
     * @return the Id using a target port
     */
    public static String generateId(long sourceIfIndex, String sourceNodeCriteria, long targetIfIndex,
                                    String targetNodeCriteria, String protocol) {
        return String.format("%s:%s:%d:%s:%d", Objects.requireNonNull(protocol),
                Objects.requireNonNull(sourceNodeCriteria), sourceIfIndex, Objects.requireNonNull(targetNodeCriteria)
                , targetIfIndex);
    }

    /**
     * @return the Id using a target segment
     */
    public static String generateId(long sourceIfIndex, String sourceNodeCriteria, String targetSegmentCriteria,
                                    String protocol) {
        return String.format("%s:%s:%d:%s", Objects.requireNonNull(protocol),
                Objects.requireNonNull(sourceNodeCriteria), sourceIfIndex,
                Objects.requireNonNull(targetSegmentCriteria));
    }
}
