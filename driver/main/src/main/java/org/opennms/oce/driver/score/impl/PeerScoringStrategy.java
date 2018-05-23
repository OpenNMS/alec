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

package org.opennms.oce.driver.score.impl;

import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.opennms.oce.driver.score.api.ScoreReport;
import org.opennms.oce.driver.score.api.ScoringStrategy;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;

import com.google.common.collect.Maps;

public class PeerScoringStrategy implements ScoringStrategy {

    @Override
    public String getName() {
        return "peer";
    }

    @Override
    public ScoreReport score(Set<Incident> baseline, Set<Incident> sut) {
        final Map<String, Set<String>> baselinePeersById = indexPeers(baseline);
        final Map<String, Set<String>> sutPeersById = indexPeers(sut);

        int numExactMatches = 0;
        int numPartialMatches = 0;
        int numMismatches = 0;

        double score = 0;
        for (Map.Entry<String, Set<String>> entry : baselinePeersById.entrySet()) {
            final String alarmId = entry.getKey();
            final Set<String> baselinePeers = entry.getValue();
            final Set<String> sutPeers = sutPeersById.get(alarmId);

            if (sutPeers == null) {
                // No matching alarm in the SUT, no score
                continue;
            }

            double partialScore = 0d;
            if (baselinePeers.size() == 0) {
                // There is no other alarms in the incident, only match if there are no peers in the SUT
                if (sutPeers.size() == 0) {
                    partialScore = 1.0;
                }
            } else {
                double peersMatched = 0;
                for (String peer : baselinePeers) {
                    if (sutPeers.contains(peer)) {
                        peersMatched++;
                    }
                }

                // Use the max group size as the divider since it is possible that the SUT peers is a superset of the baseline peers
                // and we do not want to give a perfect score in this case
                partialScore = peersMatched / Math.max(baselinePeers.size(), sutPeers.size());
            }

            if (partialScore <= 0d) {
                numMismatches++;
            } else if (partialScore < 1.0d) {
                numPartialMatches++;
            } else if (partialScore == 1.0d) {
                numExactMatches++;
            }

            score += partialScore;
        }

        final ScoreReportBean scoreReport = new ScoreReportBean();
        scoreReport.setScore(baselinePeersById.size() - score);
        scoreReport.setMaxScore(baselinePeersById.size());
        scoreReport.getMetrics().add(new ScoreMetricBean("exactMatches", numExactMatches, "TODO"));
        scoreReport.getMetrics().add(new ScoreMetricBean("partialMatches", numPartialMatches, "TODO"));
        scoreReport.getMetrics().add(new ScoreMetricBean("mismatches", numMismatches, "TODO"));

        return scoreReport;
    }

    private static Map<String, Set<String>> indexPeers(Set<Incident> incidents) {
        final Map<String, Set<String>> alarmIdToPeers = Maps.newHashMap();
        for (Incident incident : incidents) {
            for (Alarm alarm : incident.getAlarms()) {
                if (incident.getAlarms().size() == 1) {
                    alarmIdToPeers.put(alarm.getId(), Collections.emptySet());
                } else {
                    for (Alarm otherAlarm : incident.getAlarms()) {
                        if (alarm == otherAlarm) {
                            continue;
                        }

                        alarmIdToPeers.compute(alarm.getId(), (k, v) -> {
                            Set<String> peers;
                            if (v == null) {
                                peers = new HashSet<>();
                            } else {
                                peers = v;
                            }
                            peers.add(otherAlarm.getId());
                            return peers;
                        });
                    }
                }
            }
        }
        return alarmIdToPeers;
    }

}
