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

package org.opennms.alec.features.shell;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Completion;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.jaxb.JaxbUtils;
import org.opennms.alec.driver.test.TestDriver;
import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.alec.engine.deeplearning.remote.DeepLearningEngineRemoteFactory;

/**
 * Input an XML Document of Alarms and Output an XML document of Situations.
 * Utilize an AlarmProcessor to create the situations.
 * Alarms are simply serialized to the Processor.
 */
@Command(scope = "opennms-alec", name = "process-alarms", description = "Alarm Processing Runner")
@Service
@SuppressWarnings("java:S106")
public class ProcessAlarms implements Action {

    @Reference
    private List<EngineFactory> engineFactories;
    @Reference
    private List<DistanceMeasureFactory> distanceMeasureFactories;

    @Option(name = "--alarms-in", description = "XML file containing the list of alarms", required = true)
    private String alarmsIn;

    @Option(name = "--inventory-in", description = "XML file containing the list of alarms")
    private String inventoryIn;

    @Option(name = "--situations-out", aliases = {"-o"}, description = "Output file that contains the list of generated situations.")
    private String situationsOut;

    @Option(name = "--graph-output-folder", aliases = {"-g"}, description = "Folder which in which to save the generated graphs.")
    private String graphOutputFolder = System.getProperty("java.io.tmpdir");

    @Option(name = "--graph-export-interval-ms", description = "Frequency in ms at which to generate the graphs.")
    private long graphExportIntervalMs = 0; // disabled

    @Option(name = "--engine", aliases = {"-e"}, description = "Engine Name", required = true)
    @Completion(EngineNameCompleter.class)
    private String engineName;

    @Option(name = "--measure", aliases = {"-m"}, description = "Distance Measure")
    @Completion(DistanceMeasureCompleter.class)
    private String distanceMeasureName;

    @Option(name = "--epsilon", description = "Define epsilon")
    private double epsilon = 100d;

    @Option(name = "--alpha", description = "Define alpha")
    private double alpha = 144.47117699d;

    @Option(name = "--beta", description = "Define beta")
    private double beta = 0.55257784d;

    @Option(name = "--token", description = "Azure token for remote model")
    private String token;

    @Option(name = "--uri", description = "Azure uri for remote model")
    private String uri;

    @Override
    public Object execute() throws Exception {
        EngineFactory engineFactory = getEngineFactory();

        if ("dbscan".equals(engineFactory.getName())) {
            final DistanceMeasureFactory distanceMeasureFactory = getDistanceMeasureFactory();
            ((DBScanEngineFactory) engineFactory).setDistanceMeasureFactoryName(distanceMeasureFactory.getName());
            ((DBScanEngineFactory) engineFactory).setEpsilon(epsilon);
            ((DBScanEngineFactory) engineFactory).setAlpha(alpha);
            ((DBScanEngineFactory) engineFactory).setBeta(beta);
        } else if ("deeplearning-remote".equals(engineFactory.getName())) {
            ((DeepLearningEngineRemoteFactory) engineFactory).setToken(token);
            ((DeepLearningEngineRemoteFactory) engineFactory).setUri(uri);
        }
        final List<Alarm> alarms = JaxbUtils.getAlarms(Paths.get(alarmsIn));
        final List<InventoryObject> inventory;
        if (inventoryIn != null) {
            inventory = JaxbUtils.getInventory(Paths.get(inventoryIn));
        } else {
            inventory = Collections.emptyList();
        }

        final File graphOutput = new File(graphOutputFolder);
        if (graphExportIntervalMs > 0) {
            // Create the folder if necessary
            graphOutput.mkdirs();
        }

        final TestDriver driver = TestDriver.builder()
                .withEngineFactory(engineFactory)
                .withVerboseOutput()
                .withGraphExportIntervalMs(graphExportIntervalMs)
                .withGraphOutputFolder(graphOutput)
                .build();
        final List<Situation> situations = driver.run(alarms, inventory);
        write(situations);
        return null;
    }

    private void write(List<Situation> situations) throws IOException, JAXBException {
        String filepath = situationsOut == null || situationsOut.isEmpty() ? "situations.xml" : situationsOut;
        System.out.printf("Writing %d situations to %s.%n", situations.size(), filepath);
        JaxbUtils.writeSituations(situations, Paths.get(filepath));
    }

    private EngineFactory getEngineFactory() {
        return engineFactories.stream().filter(e -> e.getName().toLowerCase().equals(engineName))
                .findFirst()
                .orElseThrow(() -> {
                    final String engineNames = engineFactories.stream()
                            .map(EngineFactory::getName)
                            .collect(Collectors.joining(","));
                    return new RuntimeException("No engine found for " + engineName
                            + ". Available engines include: " + engineNames);
                });
    }

    private DistanceMeasureFactory getDistanceMeasureFactory() {
        return distanceMeasureFactories.stream().filter(e -> e.getName().toLowerCase().equals(distanceMeasureName))
                .findFirst()
                .orElseThrow(() -> {
                    final String distanceMeasureNames = distanceMeasureFactories.stream()
                            .map(DistanceMeasureFactory::getName)
                            .collect(Collectors.joining(","));
                    return new RuntimeException("No distance measure found for " + distanceMeasureName
                            + ". Available distance measure include: " + distanceMeasureNames);
                });
    }
}
