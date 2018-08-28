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

package org.opennms.oce.datasource.opennms;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.IncidentDatasource;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.opennms.model.Event;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OpennmsIncidentDatasource implements IncidentDatasource {
    private static final Logger LOG = LoggerFactory.getLogger(OpennmsIncidentDatasource.class);

    private final OpennmsRestClient restClient;

    public OpennmsIncidentDatasource(OpennmsRestClient restClient) {
        this.restClient = Objects.requireNonNull(restClient);
    }

    @Override
    public List<Incident> getIncidents() {
        return Collections.emptyList();
    }

    @Override
    public void forwardIncident(Incident incident) throws Exception {
        if (incident.getAlarms().size() < 1) {
            LOG.warn("Got incident with no alarms. Ignoring.");
        }

        final Event e = new Event();
        e.setUei("uei.opennms.org/alarms/situation");

        // Use the max severity as the situation severity
        final Severity maxSeverity = Severity.fromValue(incident.getAlarms().stream()
                .mapToInt(a -> a.getSeverity().getValue())
                .max()
                .getAsInt());
        e.setSeverity(maxSeverity.name().toLowerCase());

        // Relay the incident id
        e.addParam("situationId", incident.getId());

        // Use the log message and description from the first (earliest) alarm
        final Alarm earliestAlarm = incident.getAlarms().stream()
                .min(Comparator.comparing(Alarm::getTime))
                .get();
        e.addParam("situationLogMsg", earliestAlarm.getSummary());

        String description = earliestAlarm.getDescription();
        if (incident.getDiagnosticText() != null) {
            description += "\n<p>OCE Diagnostic: " + incident.getDiagnosticText() + "</p>";
        }
        e.addParam("situationDescr", description);

        // Set the related reduction keys
        incident.getAlarms().stream()
                .map(Alarm::getId)
                .forEach(reductionKey -> e.addParam("related-reductionKey", reductionKey));
        restClient.sendEvent(e);
    }

}
