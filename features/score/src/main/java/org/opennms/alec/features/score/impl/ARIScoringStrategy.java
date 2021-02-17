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

package org.opennms.alec.features.score.impl;

import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.features.score.api.ScoreMetric;
import org.opennms.alec.features.score.api.ScoreReport;
import org.opennms.alec.features.score.api.ScoringStrategy;

import com.google.common.collect.Maps;

public class ARIScoringStrategy implements ScoringStrategy {

    @Override
    public String getName() {
        return "ari";
    }

    @Override
    public ScoreReport score(Set<Situation> baseline, Set<Situation> sut) {
        final Map<String, Set<String>> baselinePeersById = indexPeers(baseline);
        final Map<String, Set<String>> sutPeersById = indexPeers(sut);

        int numExactMatches = 0;
        int numPartialMatches = 0;
        int numMismatches = 0;

        long tp = 0;
        long tn = 0;
        long fp = 0;
        long fn = 0;

        // only look at alarms in both situaion lists
        Set<String> alarmIds = new HashSet<>();
        alarmIds.addAll(baselinePeersById.keySet());
        alarmIds.retainAll(sutPeersById.keySet());

        Set<String> processedAlarms = new HashSet<>();
        for (String alarm1 : alarmIds){
            processedAlarms.add(alarm1);
            final Set<String> baselinePeers = baselinePeersById.get(alarm1);
            final Set<String> sutPeers = sutPeersById.get(alarm1);

            for (String alarm2: alarmIds){
                if(processedAlarms.contains(alarm2)){
                    continue;
                }

                if(baselinePeers.contains(alarm2) && sutPeers.contains(alarm2)){
                    tp += 1;
                } else if(baselinePeers.contains(alarm2) && !sutPeers.contains(alarm2)){
                    fn += 1;
                } else if(!baselinePeers.contains(alarm2) && sutPeers.contains(alarm2)){
                    fp += 1;
                } else {
                    tn += 1;
                }

            }

        }

        // From Hubert and Arabie (1985) see https://jmlr.csail.mit.edu/papers/volume11/vinh10a/vinh10a.pdf
        double score = 0.0;
        if(alarmIds.size()>0){
            score = (2.0 * ((tp*tn) - (fp*fn)))/(((tp+fn)*(fn+tn)) + ((tp+fp)*(fp+tn)));
        }

        final ScoreReport scoreReport = new ScoreReport();
        scoreReport.setScore(score);
        scoreReport.getMetrics().add(new ScoreMetric("TP", tp, "TODO"));
        scoreReport.getMetrics().add(new ScoreMetric("FP", fp, "TODO"));
        scoreReport.getMetrics().add(new ScoreMetric("FN", fn, "TODO"));
        scoreReport.getMetrics().add(new ScoreMetric("TN", tn, "TODO"));

        return scoreReport;
    }

    private static Map<String, Set<String>> indexPeers(Set<Situation> situations) {
        final Map<String, Set<String>> alarmIdToPeers = Maps.newHashMap();
        for (Situation situation : situations) {
            for (Alarm alarm : situation.getAlarms()) {
                if (situation.getAlarms().size() == 1) {
                    alarmIdToPeers.put(alarm.getId(), Collections.emptySet());
                } else {
                    for (Alarm otherAlarm : situation.getAlarms()) {
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
