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

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.features.score.api.ScoreMetric;
import org.opennms.oce.features.score.api.ScoreReport;
import org.opennms.oce.features.score.api.ScoringStrategy;

/**
 * Scoring Strategy based on Set Intersection
 */
public class SetIntersectionScoringStrategy implements ScoringStrategy {

    @Override
    public String getName() {
        return "set";
    }

    @Override
    public ScoreReport score(Set<Incident> baseline, Set<Incident> sut) {
        return generateReport(baseline, sut);
    }

    // Percentage of the Base Tickets correctly found in the SUT
    public double getAccuracy(Set<Incident> baseline, Set<Incident> sut) {
        return percentOf(baseline.size(), sut.size()) - falsePositivePenalty(baseline, sut);
    }

    // Calculate an arbitrary penalty for false Positives
    private double falsePositivePenalty(Set<Incident> baseline, Set<Incident> sut) {
        Set<Incident> falsePositives = new HashSet<>(sut);
        falsePositives.removeAll(baseline);
        if (falsePositives.size() == 0) {
            // no false positives
            return 0;
        }
        return percentOf(sut.size(), falsePositives.size());
    }

    private double percentOf(int baseline, int sut) {
        if (baseline == 0) {
            if (baseline == sut) {
                return 100d; // both sets are empty
            }
            return 0; // instead of divByZero
        }
        return (double) sut * 100 / (double) baseline;
    }

    private ScoreReport generateReport(Set<Incident> baseline, Set<Incident> sut) {
        ScoreReport report = new ScoreReport();
        report.setScore(Math.abs(100d - getAccuracy(baseline, sut)));
        report.setMaxScore(200d);
        report.setMetrics(getMetrics(baseline, sut));
        return report;
    }

    private List<ScoreMetric> getMetrics(Set<Incident> baseline, Set<Incident> sut) {
        int intersectionSize = getIntersectionSize(baseline, sut);
        List<ScoreMetric> metrics = new ArrayList<>();
        metrics.add(getAlarmAccuracy(getAlarms(baseline), getAlarms(sut)));
        metrics.add(getFalsePositives(sut, intersectionSize));
        metrics.add(getFalseNegatives(baseline, intersectionSize));
        return metrics;
    }

    private Set<Alarm> getAlarms(Set<Incident> incidents) {
        return incidents.stream().map(i -> i.getAlarms()).flatMap(Set::stream).collect(Collectors.toSet());
    }

    // Percentage of the Alarms correctly found in the SUT
    private ScoreMetric getAlarmAccuracy(Set<Alarm> baseline, Set<Alarm> sut) {
        ScoreMetric metric = new ScoreMetric("AlarmAccuracy", "Percents of Alarms in the Baseline found in the Baseline.");
        metric.setValue(percentOf(baseline.size(), sut.size()));
        return metric;
    }

    private ScoreMetric getFalsePositives(Set<Incident> sut, int intersectionSize) {
        ScoreMetric metric = new ScoreMetric("FalsePositives", "Number of Incidents in the SUT not found in the Baseline.");
        metric.setValue(sut.size() - intersectionSize);
        return metric;
    }

    private ScoreMetric getFalseNegatives(Set<Incident> baseline, int intersectionSize) {
        ScoreMetric metric = new ScoreMetric("FalseNegatives", "Number of Incidents in the Baseline not included in the SUT.");
        metric.setValue(baseline.size() - intersectionSize);
        return metric;
    }

    // Calculate intersection size using modified hash
    private int getIntersectionSize(Set<Incident> baseline, Set<Incident> sut) {
        Set<String> signatures = new HashSet<>(baseline.stream().map(i -> getIncidentSignature(i)).collect(Collectors.toSet()));
        signatures.retainAll(new HashSet<>(sut.stream().map(i -> getIncidentSignature(i)).collect(Collectors.toSet())));
        return signatures.size();
    }

    // Cannot include ID or TIME in  the Incident signature
    private String getIncidentSignature(Incident i) {
        return getAlarmSignature(i.getAlarms());
    }

    // Create a signature based only on Alarm Ids
    private String getAlarmSignature(Set<Alarm> alarms) {
        return alarms.stream().map(a -> a.getId()).sorted().collect(Collectors.joining("."));
    }

}
