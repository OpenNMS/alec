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
package org.opennms.oce.model.shell;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.model.v1.schema.AlarmRef;
import org.opennms.oce.model.v1.schema.Incident;
import org.opennms.oce.model.v1.schema.Incidents;

// Derive a score comparing a Set of Tickets to a Base Sample
@Command(scope = "oce", name = "scoreIncidents", description = "Score Correlated Incidents against a baseline.")
@Service
public class Score implements Action {

    private Set<Incident> baseline;

    private Set<Incident> unmatchedBaseline = new HashSet<>();

    private Set<Incident> intersection = new HashSet<>();

    private Set<Incident> sut;

    private Set<Incident> unmatchedSut = new HashSet<>();

    private Set<AlarmRef> baselineAlarms;

    private Set<AlarmRef> sutAlarms;

    private Set<AlarmRef> intersectionAlarms = new HashSet<>();

    private Set<AlarmRef> unmatchedAlarms = new HashSet<>();

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

    private void createSets(Path basepath, Path sutPath) throws JAXBException, IOException {
        baseline = getIncidents(basepath);
        sut = getIncidents(sutPath);
        intersection.addAll(baseline);
        intersection.retainAll(sut);
        unmatchedBaseline.addAll(baseline);
        unmatchedBaseline.removeAll(sut);
        unmatchedSut.addAll(sut);
        unmatchedSut.removeAll(baseline);
        baselineAlarms = baseline.stream().map(i -> i.getAlarmRef()).flatMap(Collection::stream).collect(Collectors.toSet());
        sutAlarms = sut.stream().map(i -> i.getAlarmRef()).flatMap(Collection::stream).collect(Collectors.toSet());
        intersectionAlarms.addAll(baselineAlarms);
        intersectionAlarms.retainAll(sutAlarms);
        unmatchedAlarms.addAll(baselineAlarms);
        unmatchedAlarms.removeAll(sutAlarms);
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

    public int getProximityScore() {
        int score = 0;
        for (Incident i : unmatchedBaseline) {
            // Do we find anything close in the SUT?
            // Perhaps consider a "near-match" for anything that matches > 50% or more than 2?
            // TODO - this will need to be tunable....
            // e.g. a "distance" score where 'x' is closest match in SUT - in practice, this would be search by an AlarmId not TicketId (WIP)
            Incident x = getIncident(unmatchedSut, i.getId());
            score += Math.abs(i.getAlarmRef().size() - x.getAlarmRef().size());
        }
        // FIXME
        return score;
    }

    private static Set<Incident> getIncidents(Path path) throws JAXBException, IOException {
        try (InputStream is = Files.newInputStream(path)) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Incidents.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            return new HashSet<Incident>(((Incidents) unmarshaller.unmarshal(is)).getIncident());
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
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
