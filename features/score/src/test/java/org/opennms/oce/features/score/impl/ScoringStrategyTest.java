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

import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Arrays;
import java.util.Objects;

import org.hamcrest.Matchers;
import org.hamcrest.number.IsCloseTo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.features.score.api.ScoreReport;
import org.opennms.oce.features.score.api.ScoringStrategy;

import com.google.common.collect.Sets;

@RunWith(Parameterized.class)
public class ScoringStrategyTest {
    private static final double delta = 1e-10;

    @Parameterized.Parameters(name = "{index}: scorer({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][]{
                { new SetIntersectionScoringStrategy() },
                { new PeerScoringStrategy() },
                { new MatrixScoringStrategy() }
        });
    }

    private final ScoringStrategy scorer;

    public ScoringStrategyTest(ScoringStrategy scoringStrategy) {
        this.scorer = Objects.requireNonNull(scoringStrategy);
    }

    @Test
    public void canComputeScores() {
        // Comparing two empty sets should generate a score of 0
        ScoreReport report = scorer.score(Sets.newHashSet(), Sets.newHashSet());
        assertThat(report.getScore(), IsCloseTo.closeTo(0.0d, delta));

        // Comparing two empty situations should generate a score of 0
        SituationBean emtpySituation = new SituationBean();
        report = scorer.score(Sets.newHashSet(emtpySituation), Sets.newHashSet(emtpySituation));
        assertThat(report.getScore(), IsCloseTo.closeTo(0.0d, delta));

        // Comparing an situation with a single alarm to an empty situation should generate a score greater than 0
        SituationBean situation = new SituationBean();
        AlarmBean alarm = new AlarmBean();
        situation.addAlarm(alarm);
        report = scorer.score(Sets.newHashSet(situation), Sets.newHashSet(emtpySituation));
        assertThat(report.getScore(), Matchers.greaterThan(0.0d));
    }

}
