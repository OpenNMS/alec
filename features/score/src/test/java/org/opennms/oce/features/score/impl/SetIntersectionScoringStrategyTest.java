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

package org.opennms.oce.features.score.impl;

import static org.junit.Assert.assertEquals;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;

import org.junit.Test;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.jaxb.JaxbUtils;
import org.opennms.oce.features.score.api.ScoreMetric;
import org.opennms.oce.features.score.api.ScoreReport;

public class SetIntersectionScoringStrategyTest {

    @Test
    public void testIntersectionStrategySameAccuracy100() throws Exception {
        Path baselineResource = Paths.get("src", "test", "resources", "Baseline.xml");

        Set<Situation> baseline = JaxbUtils.getSituations(baselineResource);
        SetIntersectionScoringStrategy scorer = new SetIntersectionScoringStrategy();
        ScoreReport report = scorer.score(baseline, baseline);

        // Test for Situations
        assertEquals(0.0, report.getScore(), 0);

        List<ScoreMetric> metrics = report.getMetrics();

        assertEquals(3, metrics.size());

        // TODO - assert each metric

    }

    @Test
    public void testIntersectionStrategySeventyPercentAccuracy() throws Exception {
        Path baselineResource = Paths.get("src", "test", "resources", "Baseline.xml");
        Path seventyPercentResource = Paths.get("src", "test", "resources", "TwentyPercent.xml");

        Set<Situation> baseline = JaxbUtils.getSituations(baselineResource);
        Set<Situation> seventyPercent = JaxbUtils.getSituations(seventyPercentResource);

        SetIntersectionScoringStrategy scorer = new SetIntersectionScoringStrategy();
        ScoreReport report = scorer.score(baseline, seventyPercent);

        assertEquals(175, report.getScore(), 10);

        List<? extends ScoreMetric> metrics = report.getMetrics();

        assertEquals(3, metrics.size());
    }
}
