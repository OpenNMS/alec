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
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.math3.linear.OpenMapRealMatrix;
import org.apache.commons.math3.linear.SparseRealMatrix;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.features.score.api.ScoreReport;
import org.opennms.oce.features.score.api.ScoringStrategy;

public class MatrixScoringStrategy implements ScoringStrategy {
    @Override
    public String getName() {
        return "matrix";
    }

    @Override
    public ScoreReport score(Set<Situation> baseline, Set<Situation> sut) {
        final ScoreReport report = new ScoreReport();

        // Gather the complete set of unique alarm ids
        final Set<String> allAlarmIds = new HashSet<>();
        baseline.stream()
                .flatMap(i -> i.getAlarms().stream())
                .map(Alarm::getId)
                .forEach(allAlarmIds::add);
        sut.stream()
                .flatMap(i -> i.getAlarms().stream())
                .map(Alarm::getId)
                .forEach(allAlarmIds::add);

        final List<String> alarmIdBasis = new ArrayList<>(allAlarmIds);
        alarmIdBasis.sort(Comparator.naturalOrder());

        final int N = alarmIdBasis.size();
        if (N < 1) {
            return report;
        }

        // Make it easy to lookup the index of a given alarm id
        final Map<String, Integer> alarmIdToIndexMap = new HashMap<>();
        for (int i = 0; i < N; i++) {
            alarmIdToIndexMap.put(alarmIdBasis.get(i), i);
        }

        // Build a spare N*N matrix
        SparseRealMatrix m1 = getMatrix(baseline, alarmIdToIndexMap);
        SparseRealMatrix m2 = getMatrix(sut, alarmIdToIndexMap);
        report.setScore(m1.subtract(m2).getNorm());
        return report;
    }

    private static SparseRealMatrix getMatrix(Set<Situation> situations, Map<String, Integer> alarmIdToIndexMap) {
        // Generate the situation id basis
        final List<String> situationIdBasis = new ArrayList<>();
        situations.stream()
                .sorted(Comparator.comparing(Situation::getCreationTime))
                .map(Situation::getId)
            .forEach(situationIdBasis::add);

        // Index the situations by id
        final Map<String, Situation> situationsById = situations.stream()
                .collect(Collectors.toMap(Situation::getId, i -> i));

        final int N = alarmIdToIndexMap.size();
        final int M = situationIdBasis.size();
        if (M > N) {
            throw new IllegalStateException("Cannot have more situations then alarms!");
        }

        final OpenMapRealMatrix m = new OpenMapRealMatrix(N,N);
        for (int i = 0; i < M; i++) {
            final String situationId = situationIdBasis.get(i);
            final Situation situation = situationsById.get(situationId);
            for (Alarm alarm : situation.getAlarms()) {
                int j = alarmIdToIndexMap.get(alarm.getId());
                m.setEntry(i,j,1);
            }
        }
        return m;
    }

}
