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

import java.util.List;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Completion;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.engine.api.EngineFactory;

/**
 * Input an XML Document of Alarms and Output an XML document of Incidents.
 * Utilize an AlarmProcessor to create the incidents.
 * Alarms are simply serialized to the Processor.
 */
@Command(scope = "oce", name = "process-alarms", description = "Alarm Processing Runner")
@Service
public class ProcessAlarms implements Action {

    @Reference
    private List<EngineFactory> engineFactories;

    @Option(name = "-i", description = "Input file", required = true)
    private String inFile;

    @Option(name = "-o", description = "Output file", required = false)
    private String outFile; // Default to "incidents.xml"

    @Option(name = "-e", description = "Processor Engine Name", required = false)
    @Completion(EngineNameCompleter.class)
    private String engineName;

    @Override
    public Object execute() throws Exception {
        return null;
    }

    /*
    @Override
    public Object execute() throws Exception {
        final EngineFactory engineFactory = getEngineFactory();
        final List<Alarm> alarms = EngineUtils.getAlarms(Paths.get(inFile));
        final Driver driver = Driver.builder()
                .withEngineFactory(engineFactory)
                .withVerboseOutput()
                .build();
        final List<Incident> incidents = driver.run(model, alarms);
        write(incidents);
        return incidents;
    }


    private void write(List<Incident> incidents) throws JAXBException, IOException {
        String filepath = outFile == null || outFile.isEmpty() ? "incidents.xml" : outFile;
        System.out.printf("Writing %d incidents to %s.\n", incidents.size(), filepath);
        try (OutputStream os = Files.newOutputStream(Paths.get(filepath))) {
            JAXBContext jaxbContext = JAXBContext.newInstance(Incidents.class);
            Marshaller marshaller = jaxbContext.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
            Incidents list = new Incidents();
            list.getIncident().addAll(incidents.stream()
                .map(EngineUtils::toModelIncident)
                .collect(Collectors.toList()));
            marshaller.marshal(list, os);
        }
    }

    private EngineFactory getEngineFactory() {
        return engineFactories.stream().filter(e -> e.getName().toLowerCase().equals(engineName))
                .findFirst()
                .orElseThrow(() -> {
                    final String engineNames = engineFactories.stream()
                            .map(EngineFactory::getName)
                            .collect(Collectors.joining( "," ));
                    return new RuntimeException("No engine found for " + engineName
                            + ". Available engines include: " + engineNames);
                });
    }
    */
}