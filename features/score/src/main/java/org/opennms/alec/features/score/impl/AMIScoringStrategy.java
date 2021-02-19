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

import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.lang.Math;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.features.score.api.ScoreMetric;
import org.opennms.alec.features.score.api.ScoreReport;
import org.opennms.alec.features.score.api.ScoringStrategy;

import com.google.common.collect.Maps;
import org.apache.commons.math3.special.Gamma;

public class AMIScoringStrategy implements ScoringStrategy {

    @Override
    public String getName() {
        return "ami";
    }

    @Override
    public ScoreReport score(Set<Situation> baseline, Set<Situation> sut) {
        double mutualInfo = 0.0;

        // get common alarms between situation sets
        Set<String> alarmIds = new HashSet<>();
        alarmIds.addAll(sitsToAlarmIds(baseline));
        alarmIds.retainAll(sitsToAlarmIds(sut));

        double nElements = alarmIds.size();
        double hu = 0; // entropy of baseline
        double hv = 0; // entropy of sut
        double emi = 0; // running sum for E(MI(U,V))
        boolean calcHv = true;
        for(Situation sx : baseline){
            Set<String> xAlarms = sx.getAlarms().stream().map(al -> al.getId())
                .collect(Collectors.toSet());

            // only use alarms that appear in both partitions
            xAlarms.retainAll(alarmIds);

            if(xAlarms.size()==0)
                continue;

            double px = xAlarms.size()/nElements;
            hu -= px*Math.log(px);
            for(Situation sy : sut){
                Set<String> yAlarms = sy.getAlarms().stream().map(al -> al.getId())
                    .collect(Collectors.toSet());

                // only use alarms that appear in both partitions
                yAlarms.retainAll(alarmIds);
                if(yAlarms.size()==0)
                    continue;


                emi += calcEMITerm(xAlarms.size(), yAlarms.size(), (int) nElements);

                double py = yAlarms.size()/nElements;
                if(calcHv){
                    hv -= py*Math.log(py);
                }


                Set<String> alarmInter = new HashSet<>();
                alarmInter.addAll(yAlarms);
                alarmInter.retainAll(xAlarms);
                if(alarmInter.size()==0){
                    continue;
                }

                double pxy = alarmInter.size()/nElements;
                mutualInfo += pxy * (Math.log(pxy) - (Math.log(px)+(Math.log(py)))); //possible underflow issues here?
            }

            calcHv = false;
        }

        double ami = 0.0;
        if(alarmIds.size()>0){
            ami = (mutualInfo - emi) / ((.5*(hu+hv)) - emi);
        }


        final ScoreReport scoreReport = new ScoreReport();
        scoreReport.setScore(ami);
        scoreReport.getMetrics().add(new ScoreMetric("rawMutualInformation", mutualInfo, "Base mutual information before adjusting for chance"));
        scoreReport.getMetrics().add(new ScoreMetric("baselineEntropy", hu, "Entropy of baseline situations"));
        scoreReport.getMetrics().add(new ScoreMetric("queryEntropy ", hv, "Entropy of query situations"));

        return scoreReport;

    }

    // see https://en.wikipedia.org/wiki/Adjusted_mutual_information
    private double calcEMITerm(int a, int b, int n){
        double emiPart = 0;
        for(int nij = Math.max(1, a + b - n); nij <= Math.min(a,b); nij++) {
             double scale = (((double) nij)/n) * ((Math.log(n) + Math.log(nij)) - (Math.log(a) + Math.log(b)));

             // this term must be calculated in log space to avoid overflows
             double num =  logFac(a) + logFac(b) + logFac(n - a) + logFac(n - b);
             double denom = logFac(n) + logFac(nij) + logFac(a - nij) + logFac(b - nij);
             denom += logFac(n - a - b + nij);
             emiPart += scale * Math.exp(num - denom);
        }
        return emiPart;
    }

    // I tried org.apache.commons.math3.util.CombinatoricsUtils.factorialLog and it is way slower
    private double logFac(int x){
        return Gamma.logGamma(x+1);
        //return CombinatoricsUtils.factorialLog(x);
    }

    private Set<String> sitsToAlarmIds(Set<Situation> sits){
        Set<String> alarms = sits.stream()
            .flatMap(sit -> sit.getAlarms().stream())
            .map(ala -> ala.getId())
            .collect(Collectors.toSet());

        return alarms;
    }

}
