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

package org.opennms.alec.datasource.shell;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;

import de.vandermeer.asciitable.AsciiTable;
import de.vandermeer.asciitable.CWC_LongestLine;

@Command(scope = "opennms-alec", name = "situations", description="List the situations known by the datasource")
@Service
public class SituationList implements Action {

    @Reference
    private SituationDatasource situationDatasource;

    @Override
    public Object execute() throws InterruptedException {
        printSituations(situationDatasource.getSituations());
        return null;
    }

    private static void printSituations(List<Situation> situations) {
        AsciiTable at = new AsciiTable();
        at.addRule();
        at.addRow("ID", "Creation Time", "Severity", "# Alarms", "Alarm IDs", "Resource Keys");
        at.addRule();

        // Situations
        situations.stream()
                // Sort by creation time descending
                .sorted(Comparator.comparing(Situation::getCreationTime).reversed().thenComparing(Situation::getId))
                .forEach(s -> {
                    at.addRow(s.getId(),
                            new Date(s.getCreationTime()),
                            s.getSeverity(),
                            s.getAlarms().size(),
                            s.getAlarms().stream().map(Alarm::getId).collect(Collectors.joining(",")),
                            s.getResourceKeys().stream().map(ResourceKey::toString).collect(Collectors.joining(",")));
                    at.addRule();
                });

        CWC_LongestLine cwc = new CWC_LongestLine();
        at.getRenderer().setCWC(cwc);

        System.out.println(at.render());
    }
}
