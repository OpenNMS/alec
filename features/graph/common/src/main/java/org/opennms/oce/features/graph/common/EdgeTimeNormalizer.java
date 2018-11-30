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

package org.opennms.oce.features.graph.common;

import java.util.concurrent.TimeUnit;

/**
 * Normalizes a time (on a scale of 1-10) to a base time (i.e. the time the graph was created). 
 *
 */
public class EdgeTimeNormalizer {

    private final long base;

    public EdgeTimeNormalizer(long base) {
        this.base = base;
    }

    // Normalize over the range 1-10
    // 10 is closest, 1 is farthest.
    public int getNormalizedValue(long time) {
        long delta = Math.abs(base - time);
        if (delta < TimeUnit.SECONDS.toMillis(1)) {
            return 10;
        } else if (delta < TimeUnit.SECONDS.toMillis(5)) {
            return 9;
        } else if (delta < TimeUnit.SECONDS.toMillis(15)) {
            return 8;
        } else if (delta < TimeUnit.SECONDS.toMillis(30)) {
            return 7;
        } else if (delta < TimeUnit.MINUTES.toMillis(1)) {
            return 6;
        } else if (delta < TimeUnit.MINUTES.toMillis(5)) {
            return 5;
        } else if (delta < TimeUnit.MINUTES.toMillis(30)) {
            return 4;
        } else if (delta < TimeUnit.HOURS.toMillis(1)) {
            return 3;
        } else if (delta < TimeUnit.HOURS.toMillis(8)) {
            return 2;
        } else {
            return 1;
        }
    }
}
