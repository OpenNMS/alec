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

package org.opennms.oce.engine.score.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.opennms.oce.engine.score.api.ScoreReport;
import org.opennms.oce.engine.score.api.ScoringStrategy;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;

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
        return percentOf(baseline.size(), sut.size());
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
        ScoreReportBean report = new ScoreReportBean();
        report.setScore(Math.abs(100d - getAccuracy(baseline, sut)));
        report.setMaxScore(100d);
        report.setMetrics(getMetrics(baseline, sut));
        return report;
    }

    private List<ScoreMetricBean> getMetrics(Set<Incident> baseline, Set<Incident> sut) {
        int intersectionSize = getIntersectionSize(baseline, sut);
        List<ScoreMetricBean> metrics = new ArrayList<>();
        metrics.add(getAlarmAccuracy(getAlarms(baseline), getAlarms(sut)));
        metrics.add(getFalsePositives(sut, intersectionSize));
        metrics.add(getFalseNegatives(baseline, intersectionSize));
        return metrics;
    }

    private Set<Alarm> getAlarms(Set<Incident> incidents) {
        return incidents.stream().map(i -> i.getAlarms()).flatMap(Set::stream).collect(Collectors.toSet());
    }

    // Percentage of the Alarms correctly found in the SUT
    private ScoreMetricBean getAlarmAccuracy(Set<Alarm> baseline, Set<Alarm> sut) {
        ScoreMetricBean metric = new ScoreMetricBean("AlarmAccuracy", "Percents of Alarms in the Baseline found in the Baseline.");
        metric.setValue(percentOf(baseline.size(), sut.size()));
        return metric;
    }

    private ScoreMetricBean getFalsePositives(Set<Incident> sut, int intersectionSize) {
        ScoreMetricBean metric = new ScoreMetricBean("FalsePositives", "Number of Incidents in the SUT not found in the Baseline.");
        metric.setValue(sut.size() - intersectionSize);
        return metric;
    }

    private ScoreMetricBean getFalseNegatives(Set<Incident> baseline, int intersectionSize) {
        ScoreMetricBean metric = new ScoreMetricBean("FalseNegatives", "Number of Incidents in the Baseline not included in the SUT.");
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
