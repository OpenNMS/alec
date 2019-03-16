/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.features.deeplearning.shell;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Consumer;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.math3.ml.clustering.Cluster;
import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.Option;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.jaxb.JaxbUtils;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.cluster.AbstractClusterEngine;
import org.opennms.oce.engine.cluster.AlarmInSpaceTime;
import org.opennms.oce.engine.cluster.CEEdge;
import org.opennms.oce.engine.cluster.CEVertex;
import org.opennms.oce.engine.deeplearning.InputVector;
import org.opennms.oce.engine.deeplearning.OutputVector;
import org.opennms.oce.engine.deeplearning.Vectorizer;

import edu.uci.ics.jung.graph.Graph;

@Command(scope = "oce", name = "tensorflow-vectorize", description = "Convert a fault data set to vectors for the purpose of training a TensorFlow model.")
@Service
public class Vectorize implements Action {

    @Option(name = "--alarms-in", description = "XML file containing the list of alarms", required = true)
    private String alarmsIn;

    @Option(name = "--inventory-in", description = "XML file containing the list of alarms", required = true)
    private String inventoryIn;

    @Option(name = "--situations-in", description = "XML file containing the list of situations", required = true)
    private String situationsIn;

    @Option(name = "--csv-out", description = "Output CSV", required = true)
    private String csvOut;

    private CSVPrinter csvPrinter;

    @Override
    public Object execute() throws Exception {
        final List<Alarm> alarms = JaxbUtils.getAlarms(Paths.get(alarmsIn));
        final List<InventoryObject> inventory = JaxbUtils.getInventory(Paths.get(inventoryIn));
        final Set<Situation> situations = JaxbUtils.getSituations(Paths.get(situationsIn));

        final Path path = Paths.get(csvOut);
        System.out.printf("Writing to: %s\n", path);
        try (
                BufferedWriter writer = Files.newBufferedWriter(Paths.get(csvOut));
                CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT
                        .withHeader(getHeader()));
        ) {
            streamVectors(inventory, alarms, situations, v -> {
                try {
                    csvPrinter.printRecord(toRecordValues(v));
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            csvPrinter.flush();
        }
        System.out.println("Done.");

        return null;
    }

    private static class MyEngine extends AbstractClusterEngine {
        private final Consumer<OutputVector> consumer;
        private final Set<Situation> situations;
        private final Map<String,String> alarmIdToSituationId = new LinkedHashMap<>();
        private Vectorizer vectorizer;

        private MyEngine(Set<Situation> situations, Consumer<OutputVector> consumer) {
            this.situations = Objects.requireNonNull(situations);
            this.consumer = Objects.requireNonNull(consumer);

            // Index the alarms by situation id
            for (Situation s : situations) {
                for (Alarm a : s.getAlarms()) {
                    alarmIdToSituationId.put(a.getId(), s.getId());
                }
            }
        }

        @Override
        public void onInit() {
            vectorizer = new Vectorizer(getGraphManager(), this);
        }

        @Override
        public List<Cluster<AlarmInSpaceTime>> cluster(long timestampInMillis, Graph<CEVertex, CEEdge> g) {
            final List<AlarmInSpaceTime> alarms = getAlarmsInSpaceTime(g);
            for (AlarmInSpaceTime a1 : alarms) {
                for (AlarmInSpaceTime a2 : alarms) {
                    if (a1 == a2) {
                        continue;
                    }
                    final InputVector inputVector = vectorizer.vectorize(a1, a2);
                    consumer.accept(OutputVector.builder()
                            .inputVector(inputVector)
                            .areAlarmsRelated(areAlarmsCurrentlyRelated(a1, a2, timestampInMillis))
                            .build());
                }
            }
            return Collections.emptyList();
        }

        private List<AlarmInSpaceTime> getAlarmsInSpaceTime(Graph<CEVertex,CEEdge> g) {
            final List<AlarmInSpaceTime> alarmsInSpaceAndTime = new LinkedList<>();
            for (CEVertex v : g.getVertices()) {
                for (Alarm a : v.getAlarms()) {
                    alarmsInSpaceAndTime.add(new AlarmInSpaceTime(v,a));
                }
            }
            return alarmsInSpaceAndTime;
        }

        private boolean areAlarmsCurrentlyRelated(AlarmInSpaceTime a1, AlarmInSpaceTime a2, long timestampInMillis) {
            // TODO: We should improve this to consider time as well
            final String s1 = alarmIdToSituationId.get(a1.getAlarmId());
            final String s2 = alarmIdToSituationId.get(a2.getAlarmId());
            if (s1 == null || s2 == null) {
                return false;
            }
            return Objects.equals(s1,s2);
        }
    }

    private static class MyEngineFactory implements EngineFactory {
        private final MyEngine engine;

        public MyEngineFactory(MyEngine engine) {
            this.engine = Objects.requireNonNull(engine);
        }

        @Override
        public String getName() {
            return "test";
        }

        @Override
        public Engine createEngine() {
            return engine;
        }
    }

    private void streamVectors(List<InventoryObject> inventory, List<Alarm> alarms, Set<Situation> situations, Consumer<OutputVector> consumer) {
        // Extend the cluster engine
        final MyEngine engine = new MyEngine(situations, consumer);

        // Use the test driver
        final MyEngineFactory factory = new MyEngineFactory(engine);
        final TestDriver driver = TestDriver.builder()
                .withEngineFactory(factory)
                .withVerboseOutput()
                .build();

        // On tick, the engine will perform a pairwise comparison of all active alarms, convert these
        // to vectors and feed it to the consumer
        driver.run(alarms, inventory);
    }

    private static String[] getHeader() {
        return new String[]{
                "type_a",
                "type_b",
                "same_instance",
                "same_parent",
                "share_ancestor",
                "time_delta_seconds",
                "distance_on_graph",
                "related"
        };
    }

    /**
     * Used for CSV output.
     */
    private static Iterable<?> toRecordValues(OutputVector ov) {
        final InputVector v = ov.getInputVector();
        return Arrays.asList(
                v.getTypeA(),
                v.getTypeB(),
                v.isSameInstance() ? 1 : 0,
                v.isSameParent() ? 1 : 0,
                v.isShareAncestor() ? 1 : 0,
                v.getTimeDifferenceInSeconds(),
                v.getDistanceOnGraph(),
                ov.areAlarmsRelated() ? 1 : 0
        );
    }

}
