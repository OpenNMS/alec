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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Ignore;
import org.junit.Test;

public class EdgeTimeNormalizerTest {

    @Ignore("Needs to be reworked with the new scale")
    @Test
    public void canNormalizeScaledValues() {
        long base = 1529619060000L;
        Set<Long> times = new HashSet<Long>(Arrays.asList(1529619077000L, 1529619077000L, 1529619079000L));
        EdgeTimeNormalizer normalizer = new EdgeTimeNormalizer(base, times);

        assertThat(normalizer.getNormalizedValue(base), is(10));
        assertThat(normalizer.getNormalizedValue(1529619079000L), is(9));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.MINUTES.toMillis(2)), is(8));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.MINUTES.toMillis(20)), is(7));

        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.HOURS.toMillis(2)), is(6));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.HOURS.toMillis(10)), is(5));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.HOURS.toMillis(12)), is(4));

        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.DAYS.toMillis(1)), is(3));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.DAYS.toMillis(2)), is(2));
        assertThat(normalizer.getNormalizedValue(1529619077000L + TimeUnit.DAYS.toMillis(10)), is(1));
    }

}
