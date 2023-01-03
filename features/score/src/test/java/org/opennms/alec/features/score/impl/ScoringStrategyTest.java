/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2021 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2021 The OpenNMS Group, Inc.
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

package org.opennms.alec.features.score.impl;

import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Arrays;
import java.util.Objects;

import org.hamcrest.Matchers;
import org.hamcrest.number.IsCloseTo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.features.score.api.ScoreReport;
import org.opennms.alec.features.score.api.ScoringStrategy;

import com.google.common.collect.Sets;

@RunWith(Parameterized.class)
public class ScoringStrategyTest {
    private static final double delta = 1e-10;

    @Parameterized.Parameters(name = "{index}: scorer({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][]{
                { new SetIntersectionScoringStrategy() },
                { new PeerScoringStrategy() },
                { new MatrixScoringStrategy() },
                { new ARIScoringStrategy() },
                { new AMIScoringStrategy() }
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
        Situation emtpySituation = ImmutableSituation.newBuilderNow().setId("empty").build();
        report = scorer.score(Sets.newHashSet(emtpySituation), Sets.newHashSet(emtpySituation));
        assertThat(report.getScore(), IsCloseTo.closeTo(0.0d, delta));


        // Comparing a situation with a single alarm to an empty situation should generate a score greater than 0
        Situation situation = ImmutableSituation.newBuilderNow()
                .setId("test")
                .addAlarm(ImmutableAlarm.newBuilder().setId("test").build())
                .build();
        report = scorer.score(Sets.newHashSet(situation), Sets.newHashSet(emtpySituation));

        // ARI and AMI currently use the intersection of the alarm sets and will return 0 
        if(scorer.getName().equals("ari") || scorer.getName().equals("ami")){
            assertThat(report.getScore(), IsCloseTo.closeTo(0.0d, delta));
        } else {
            assertThat(report.getScore(), Matchers.greaterThan(0.0d));
        }
    }

}
