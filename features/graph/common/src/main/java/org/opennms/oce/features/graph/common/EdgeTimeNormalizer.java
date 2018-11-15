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

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * Normalizes a Set of times (on a scale of 1-10) to a base time (i.e. the time of the node they are attached to). 
 *
 */
public class EdgeTimeNormalizer {

    //  The anchor time
    private final long base;
    // The most recent time
    private final long max;
    // The oldest time
    private final long min;
    // The greatest delta from the base value
    private long range;

    public EdgeTimeNormalizer(long base, Set<Long> times) {
        this.base = base;
        if (times == null || times.isEmpty()) {
            throw new IllegalArgumentException();
        }
        List<Long> sortedTimes = times.stream().sorted().collect(Collectors.toList());
        Long firstTime = sortedTimes.get(0);
        Long lastTime = sortedTimes.get(sortedTimes.size() - 1);
        max = lastTime > base ? lastTime : base;
        min = firstTime < base ? firstTime : base;
        if (base == min || base == max) {
            range = max - min;
        } else {
            range = max - base > base - min ? max - base : base - min;
        }
        // All events occurred at the same time
        if (range == 0) {
            // add 1 to the range to prevent dive by zero error.
            range = 1;
        }
    }

    // Normalize over the range 1-10
    public int getNormalizedValue(long time) {
        // return 10 - Math.toIntExact(Math.abs(base - time) * 9L / (range));
        long delta = Math.abs(base - time);
        if (delta < TimeUnit.SECONDS.toMillis(5)) {
            return 10;
        } else if (delta < TimeUnit.MINUTES.toMillis(1)) {
            return 9;
        } else if (delta < TimeUnit.MINUTES.toMillis(15)) {
            return 8;
        } else if (delta < TimeUnit.HOURS.toMillis(1)) {
            return 7;
        } else if (delta < TimeUnit.HOURS.toMillis(6)) {
            return 6;
        } else if (delta < TimeUnit.HOURS.toMillis(12)) {
            return 5;
        } else if (delta < TimeUnit.DAYS.toMillis(1)) {
            return 4;
        } else if (delta < TimeUnit.DAYS.toMillis(2)) {
            return 3;
        } else if (delta < TimeUnit.DAYS.toMillis(7)) {
            return 2;
        } else {
            return 1;
        }
    }
}
