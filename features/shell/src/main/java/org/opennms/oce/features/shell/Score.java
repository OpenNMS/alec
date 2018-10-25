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
package org.opennms.oce.features.shell;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Completion;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.jaxb.JaxbUtils;
import org.opennms.oce.features.score.api.ScoreMetric;
import org.opennms.oce.features.score.api.ScoreReport;
import org.opennms.oce.features.score.api.ScoringStrategy;

// Derive a score comparing a Set of Situations to a Base Sample
@Command(scope = "oce", name = "score-situations", description = "Score Correlated Situations against a baseline.")
@Service
public class Score implements Action {

    @Reference
    private List<ScoringStrategy> scoringStrategies;

    @Option(name = "-s", description = "Scoring strategy name", required = true)
    @Completion(ScoreNameCompleter.class)
    private String scoringStrategyName;

    @Argument(index = 0, name = "baseline", description = "This is the path for the baseline situations.xml file.", required = true, multiValued = false)
    private String baselineFile;

    @Argument(index = 1, name = "score", description = "This is the path for the situations.xml to be scored.", required = true, multiValued = false)
    private String scoreFile;

    @Override
    public Object execute() throws Exception {
        evaluateAndPrint(getScoringStrategy(), Paths.get(baselineFile), Paths.get(scoreFile));
        return null;
    }

    private void evaluateAndPrint(ScoringStrategy strategy, Path basepath, Path sutPath) throws JAXBException, IOException {
        ScoreReport report = strategy.score(getSituations(basepath), getSituations(sutPath));
        System.out.printf("Score: %.4f", report.getScore());
        if (Double.isFinite(report.getMaxScore())) {
            System.out.printf(" (%.2f%%)", ((report.getMaxScore() - report.getScore()) / report.getMaxScore()) * 100);
        }
        System.out.println();
        report.getMetrics().forEach(Score::printMetric);
    }

    private static void printMetric(ScoreMetric m) {
        System.out.println(m.getName() + " : " + m.getValue());
    }

    // Read Situations from XML file and filter out any w/o Alarms
    private Set<Situation> getSituations(Path pathspec) throws JAXBException, IOException {
        return JaxbUtils.getSituations(pathspec).stream().filter(i -> i.getAlarms().size() > 0).collect(Collectors.toSet());
    }

    private ScoringStrategy getScoringStrategy() {
        return scoringStrategies.stream().filter(s -> s.getName().toLowerCase().equals(scoringStrategyName))
                .findFirst()
                .orElseThrow(() -> {
                    final String strategyNames = scoringStrategies.stream()
                            .map(ScoringStrategy::getName)
                            .collect(Collectors.joining( "," ));
                    return new RuntimeException("No scoring strategy found for " + scoringStrategyName
                            + ". Available strategies include: " + strategyNames);
                });
    }

}
