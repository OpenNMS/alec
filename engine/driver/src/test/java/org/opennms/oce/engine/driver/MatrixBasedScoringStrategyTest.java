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

package org.opennms.oce.engine.driver;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.number.IsCloseTo.closeTo;

import org.junit.Test;
import org.opennms.oce.engine.common.AlarmBean;
import org.opennms.oce.engine.common.IncidentBean;

import com.google.common.collect.Sets;

public class MatrixBasedScoringStrategyTest {

    private static final double delta = 0.00001;
    private MatrixBasedScoringStrategy scorer = new MatrixBasedScoringStrategy();

    @Test
    public void canComputeScores() {
        // Comparing two empty sets should generate a score of 0
        ScoreReport report = scorer.score(Sets.newHashSet(), Sets.newHashSet());
        assertThat(report.getScore(), closeTo(0, delta));

        // Comparing two empty incidents should generate a score of 0
        IncidentBean emtpyIncident = new IncidentBean();
        report = scorer.score(Sets.newHashSet(emtpyIncident), Sets.newHashSet(emtpyIncident));
        assertThat(report.getScore(), closeTo(0, delta));

        // Comparing an incident with a single alarm to an empty incident should generate a score of 1
        IncidentBean incident = new IncidentBean();
        AlarmBean alarm = new AlarmBean();
        incident.addAlarm(alarm);
        report = scorer.score(Sets.newHashSet(incident), Sets.newHashSet(emtpyIncident));
        assertThat(report.getScore(), closeTo(1, delta));
    }
}
