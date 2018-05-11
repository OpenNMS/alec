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
package org.opennms.oce.engine.shell;

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
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.engine.driver.EngineUtils;
import org.opennms.oce.engine.driver.ScoreMetric;
import org.opennms.oce.engine.driver.ScoreReport;
import org.opennms.oce.engine.driver.ScoringStrategy;
import org.opennms.oce.model.alarm.api.Incident;

// Derive a score comparing a Set of Incidents to a Base Sample
@Command(scope = "oce", name = "scoreIncidents", description = "Score Correlated Incidents against a baseline.")
@Service
public class Score implements Action {

    private ScoringStrategy strategy;

    private double score;

    private List<ScoreMetric> metrics;

    @Argument(index = 0, name = "baseline", description = "This is the path for the baseline incidents.xml file.", required = true, multiValued = false)
    private String baselineFile;

    @Argument(index = 1, name = "score", description = "This is the path for the incidents.xml to be scored.", required = true, multiValued = false)
    private String scoreFile;

    @Override
    public Object execute() throws Exception {
        evaluate(Paths.get(baselineFile), Paths.get(scoreFile));
        printScore();
        return score;
    }

    public Score() {
    }

    public Score(Path basepath, Path sutPath, ScoringStrategy strategy) throws JAXBException, IOException {
        this.strategy = strategy;
        evaluate(basepath, sutPath);
    }

    public double getScore() {
        return score;
    }

    public List<ScoreMetric> getMetrics() {
        return metrics;
    }

    // for Unit Tests
    void setStrategy(ScoringStrategy strategy) {
        this.strategy = strategy;
    }

    private void evaluate(Path basepath, Path sutPath) throws JAXBException, IOException {
        ScoreReport report = strategy.score(getIncidents(basepath), getIncidents(sutPath));
        score = report.getScore();
        metrics = (List<ScoreMetric>) report.getMetrics();
    }

    // Read Incidents from XML file and filter out any w/o Alarms
    private Set<Incident> getIncidents(Path pathspec) throws JAXBException, IOException {
        Set<Incident> incidents = EngineUtils.getIncidents(pathspec).stream().filter(i -> i.getAlarms().size() > 0).collect(Collectors.toSet());
        return incidents;
    }

    private void printScore() {
        System.out.println("Score: " + score);
        metrics.stream().forEach(m -> printMetric(m));
    }

    private static void printMetric(ScoreMetric m) {
        System.out.println(m.getName() + " : " + m.getValue());
    }

}
