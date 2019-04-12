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

package org.opennms.alec.features.graph.common;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.util.concurrent.TimeUnit;

import org.junit.Test;

public class EdgeTimeNormalizerTest {

    @Test
    public void canNormalizeScaledValues() {
        long base = 1529619060000L;
        EdgeTimeNormalizer normalizer = new EdgeTimeNormalizer(base);

        assertThat(normalizer.getNormalizedValue(base), is(10));
        // Less than 1 second
        assertThat(normalizer.getNormalizedValue(base + 400), is(10));
        // less than 1 minute
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.SECONDS.toMillis(4)), is(9));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.SECONDS.toMillis(10)), is(8));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.SECONDS.toMillis(25)), is(7));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.SECONDS.toMillis(55)), is(6));
        // less than 1 hour
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.MINUTES.toMillis(3)), is(5));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.MINUTES.toMillis(25)), is(4));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.MINUTES.toMillis(55)), is(3));
        // less than 8 hour
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.MINUTES.toMillis(90)), is(2));
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.HOURS.toMillis(6)), is(2));
        // more than 8 hours
        assertThat(normalizer.getNormalizedValue(base + TimeUnit.DAYS.toMillis(10)), is(1));
    }
}
