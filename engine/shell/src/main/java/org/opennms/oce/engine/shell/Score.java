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
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.engine.common.EngineUtils;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;

// Derive a score comparing a Set of Incidents to a Base Sample
@Command(scope = "oce", name = "scoreIncidents", description = "Score Correlated Incidents against a baseline.")
@Service
public class Score implements Action {

    // Input Baseline Incident Set 
    private Set<Incident> baseline;

    // Incident Set to Score
    private Set<Incident> sut;

    private Set<String> baselineSignatures = new HashSet<>();

    private Set<String> intersection = new HashSet<>();

    private Set<String> missed = new HashSet<>();

    private Set<String> sutSignatures = new HashSet<>();

    private Set<String> baselineAlarms;

    private Set<String> sutAlarms;

    private Set<String> intersectionAlarms = new HashSet<>();

    private Set<String> unmatchedAlarms = new HashSet<>();

    @Argument(index = 0, name = "baseline", description = "This is the path for the baseline incidents.xml file.", required = true, multiValued = false)
    private String baselineFile;

    @Argument(index = 1, name = "score", description = "This is the path for the incidents.xml to be scored.", required = true, multiValued = false)
    private String scoreFile;

    @Override
    public Object execute() throws Exception {
        // calculate the scores 
        createSets(Paths.get(baselineFile), Paths.get(scoreFile));
        // Print scores to SysOut
        System.out.println("Accuracy: " + getAccuracy());
        System.out.println("Type I Errors: " + getTypeOneErrorCount());
        System.out.println("Type II Errors: " + getFalseNegativeCount());
        //
        System.out.println("Alarm Accuracy: " + getAlarmAccuracy());
        return null;
    }

    public Score() {
    }

    public Score(Path basepath, Path sutPath) throws JAXBException, IOException {
        createSets(basepath, sutPath);
    }

    // Percentage of the Base Tickets correctly found in the SUT
    public int getAccuracy() {
        int retained = intersection.size();
        return retained * 100 / baseline.size();
    }

    // Percentage of the Alarms correctly found in the SUT
    public int getAlarmAccuracy() {
        int retained = intersectionAlarms.size();
        return retained * 100 / baselineAlarms.size();
    }

    // Type I Error
    public int getTypeOneErrorCount() {
        // TODO - this error may in fact infer a better algo and the discrepancy needs to be investigated.
        return sut.size() - intersection.size();
    }

    // Type II Error
    public int getFalseNegativeCount() {
        // TODO - initially this may be overstating the error as the set to be scored may have generated Tickets that are good but don't match exactly.
        return baseline.size() - intersection.size();
    }

    private void createSets(Path basepath, Path sutPath) throws JAXBException, IOException {
        baseline = getIncidents(basepath);
        sut = getIncidents(sutPath);
        createAlarmSignatures(baseline, sut);
        baselineAlarms = baseline.stream().map(i -> i.getAlarms()).flatMap(Collection::stream).map(a -> a.getId()).collect(Collectors.toSet());
        sutAlarms = sut.stream().map(i -> i.getAlarms()).flatMap(Collection::stream).map(a -> a.getId()).collect(Collectors.toSet());
        intersectionAlarms.addAll(baselineAlarms);
        intersectionAlarms.retainAll(sutAlarms);
        unmatchedAlarms.addAll(baselineAlarms);
        unmatchedAlarms.removeAll(sutAlarms);
    }

    // Read Incidents from XML file and filter out any w/o Alarms
    private Set<Incident> getIncidents(Path pathspec) throws JAXBException, IOException {
        Set<Incident> incidents = EngineUtils.getIncidents(pathspec).stream().filter(i -> i.getAlarms().size() > 0).collect(Collectors.toSet());
        return incidents;
    }

    private void createAlarmSignatures(Set<Incident> baseline, Set<Incident> sut) {
        baselineSignatures.addAll(baseline.stream().map(i -> getIncidentSignature(i)).collect(Collectors.toSet()));
        intersection.addAll(baselineSignatures);
        sutSignatures.addAll(sut.stream().map(i -> getIncidentSignature(i)).collect(Collectors.toSet()));
        intersection.retainAll(sutSignatures);
        missed.addAll(baselineSignatures);
        missed.removeAll(intersection);
    }

    private String getIncidentSignature(Incident i) {
        return getAlarmSignature(i.getAlarms());
    }

    // Create a standardized signature from a List of Alarms
    private String getAlarmSignature(Set<Alarm> alarms) {
        return alarms.stream().map(a -> a.getId()).sorted().collect(Collectors.joining("."));
    }

    private static Incident getIncident(Set<Incident> incidents, String id) {
        for (Incident i : incidents) {
            // TODO - what we really want to do here is search for a ticket that contains a given alarmId
            // Then we can make that the basis of our secondary comparison - i.e. how different are those two tickets?
            if (i.getId().equals(id)) {
                return i;
            }
        }
        return null;
    }
}
