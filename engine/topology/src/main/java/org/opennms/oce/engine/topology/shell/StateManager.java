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

package org.opennms.oce.engine.topology.shell;

import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.api.OperationalState;

import com.google.gson.Gson;

@Command(scope = "oce", name = "state-manager", description="State manager")
@Service
public class StateManager implements Action {
    @Reference
    private Model model;

    @Option(name="-i", description="Input file", required = true)
    private String inFile;

    @Option(name="-f", description="From")
    private String dateFrom;

    @Option(name="-t", description="To")
    private String dateTo;

    @Override
    public Object execute() throws Exception {
        final Gson gson = new Gson();

        // Load the state change records
        final List<StateChangeRecord> stateChangeRecords = new ArrayList<>();
        try (
                Reader reader = Files.newBufferedReader(Paths.get(inFile));
                CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT
                        .withFirstRecordAsHeader()
                        .withIgnoreHeaderCase()
                        .withTrim());
        ) {
            for (CSVRecord csvRecord : csvParser) {
                String timeStr = csvRecord.get("Time");
                final Date time = new Date(Long.valueOf(timeStr));

                String keyJson = csvRecord.get("Key");
                final List<String> keyTokens = (List<String>)gson.fromJson(keyJson, List.class);

                final String severity = csvRecord.get("Severity");

                stateChangeRecords.add(new StateChangeRecord(time, keyTokens.get(0), keyTokens.get(1), severity));
            }
        }

        // Sort by time
        stateChangeRecords.sort(Comparator.comparing(StateChangeRecord::getTime));

        // Apply!
        final Date from = dateFrom != null ? new Date(Long.valueOf(dateFrom)) : null;
        final Date to = dateTo != null ? new Date(Long.valueOf(dateTo)) : null;

        int numChangesApplied = 0;
        for (StateChangeRecord scr : stateChangeRecords) {
            if (from != null && from.compareTo(scr.time) > 0) {
                continue;
            }
            if (to != null && to.compareTo(scr.time) < 0) {
                break;
            }
            System.out.printf("%s (%d): on %s (of type %s) with severity %s\n",
                    scr.getTime(), scr.getTime().getTime(),
                    scr.getId(), scr.getType(),
                    scr.getSeverity());

            final Map<String, ModelObject> typeMap = model.getObjectsByIdForType(scr.getType());
            if (typeMap == null) {
                System.err.printf("No objects found with type: %s. Ignoring state change.\n", scr.getType());
                continue;
            }
            final ModelObject mo = typeMap.get(scr.getId());
            if (mo == null) {
                System.err.printf("No model object found with id: %s. Ignoring state change.\n", scr.getId());
                continue;
            }

            System.out.printf("\tUpdating operational state from: %s to: %s\n", mo.getOperationalState(), scr.getOperationalState());
            mo.setOperationalState(scr.getOperationalState());
            numChangesApplied++;
        }

        System.out.printf("Applied %d out of %d state changes.\n", numChangesApplied, stateChangeRecords.size());
        return null;
    }

    private static class StateChangeRecord {
        private Date time;
        private String type;
        private String id;
        private String severity;

        public StateChangeRecord(Date time, String type, String id, String severity) {
            this.time = Objects.requireNonNull(time);
            this.type = Objects.requireNonNull(type);
            this.id = Objects.requireNonNull(id);
            this.severity = Objects.requireNonNull(severity);
        }

        public Date getTime() {
            return time;
        }

        public String getType() {
            return type;
        }

        public String getId() {
            return id;
        }

        public String getSeverity() {
            return severity;
        }

        public OperationalState getOperationalState() {
            switch(severity) {
                case "Critical":
                case "Major":
                    return OperationalState.SA;
                case "Warning":
                case "Minor":
                case "Information":
                    return OperationalState.NSA;
                case "Cleared":
                    return OperationalState.NORMAL;
            }
            return OperationalState.UNKNOWN;
        }
    }
}
