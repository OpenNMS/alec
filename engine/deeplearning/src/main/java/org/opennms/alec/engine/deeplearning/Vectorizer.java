/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.deeplearning;

import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEVertex;
import org.opennms.alec.engine.cluster.GraphManager;
import org.opennms.alec.engine.cluster.SpatialDistanceCalculator;

import com.google.common.base.Strings;

import info.debatty.java.stringsimilarity.NormalizedLevenshtein;

/**
 * Used to build a {@link InputVector} from two {@link AlarmInSpaceTime} alarms.
 *
 * @author jwhite
 */
public class Vectorizer {
    private final GraphManager graphManager;
    private final SpatialDistanceCalculator spatialDistanceCalculator;
    private final NormalizedLevenshtein normalizedLevenshtein = new NormalizedLevenshtein();

    public Vectorizer(GraphManager graphManager, SpatialDistanceCalculator spatialDistanceCalculator) {
        this.graphManager = Objects.requireNonNull(graphManager);
        this.spatialDistanceCalculator = Objects.requireNonNull(spatialDistanceCalculator);
    }

    public InputVector vectorize(AlarmInSpaceTime a1, AlarmInSpaceTime a2) {
        return vectorize(a1, a2, distanceOnGraph(a1, a2));
    }

    public InputVector vectorize(AlarmInSpaceTime a1, AlarmInSpaceTime a2, double distanceOnGraph) {
        // Build the input vector
        final InputVector.Builder builder = InputVector.builder()
                .alarmAid(a1.getAlarmId())
                .alarmBid(a2.getAlarmId())
                .typeA(a1.getAlarm().getInventoryObjectType())
                .typeB(a2.getAlarm().getInventoryObjectType())
                .similarityOfInventoryObjectIds(getSimilarityOfInventoryObjectIds(a1.getAlarm().getInventoryObjectId(), a2.getAlarm().getInventoryObjectId()));

        // Process additional facts if we can obtain the IO
        int firstAncestorMatch = -1;
        double similarityOfInventoryObjectLabels = -1;
        final Optional<InventoryObject> io1 = a1.getVertex().getInventoryObject();
        final Optional<InventoryObject> io2 = a2.getVertex().getInventoryObject();
        if (io1.isPresent() && io2.isPresent()) {
            final InventoryObject ioa = io1.get();
            final InventoryObject iob = io2.get();
            firstAncestorMatch = getFirstAncestorMatch(ioa, iob);
            similarityOfInventoryObjectLabels = getSimilarityOfInventoryObjectLabels(ioa, iob);
        }

        builder.sameInstance(firstAncestorMatch == 0)
                .sameParent(firstAncestorMatch == 0 || firstAncestorMatch == 1)
                .shareAncestors(firstAncestorMatch >= 0)
                .timeDifferenceInSeconds(timeDeltaInSeconds(a1, a2))
                .distanceOnGraph(distanceOnGraph)
                .similarityOfInventoryObjectLabels(similarityOfInventoryObjectLabels);

        return builder.build();
    }

    private double getSimilarityOfInventoryObjectIds(String ioId1, String ioId2) {
        return normalizedLevenshtein.distance(ioId1, ioId2);
    }

    private double getSimilarityOfInventoryObjectLabels(final InventoryObject io1, final InventoryObject io2) {
        if (!Strings.isNullOrEmpty(io1.getFriendlyName()) && !Strings.isNullOrEmpty(io2.getFriendlyName())) {
            return normalizedLevenshtein.distance(io1.getFriendlyName(), io2.getFriendlyName());
        }
        return -1d;
    }

    @SuppressWarnings({"java:S3776", "java:S3655"})
    private int getFirstAncestorMatch(final InventoryObject io1, final InventoryObject io2) {
        InventoryObject ioa = io1;
        InventoryObject iob = io2;

        int level = 0;
        while (true) {
            if (Objects.equals(ioa.getType(), iob.getType()) &&
                    Objects.equals(ioa.getId(), iob.getId())) {
                // Same instance
                return level;
            }

            if (ioa.getParentType() == null || iob.getParentType() == null) {
                // One of the IOs does not have a parent, stop here
                return -1;
            }

            if (Objects.equals(ioa.getParentType(), iob.getParentType()) &&
                    Objects.equals(ioa.getParentId(), iob.getParentId())) {
                // Same parent
                return level + 1;
            }

            // We now know that both IOs have parents, and they are not the same, let's go up a level
            level++;

            Optional<CEVertex> va = graphManager.getVertexForParentOf(ioa);
            if (!va.isPresent() || !va.get().getInventoryObject().isPresent()) {
                return -1;
            }
            ioa = va.get().getInventoryObject().get();

            Optional<CEVertex> vb = graphManager.getVertexForParentOf(iob);
            if (!vb.isPresent() || !vb.get().getInventoryObject().isPresent()) {
                return -1;
            }
            iob = vb.get().getInventoryObject().get();
        }
    }

    private double timeDeltaInSeconds(AlarmInSpaceTime a1, AlarmInSpaceTime a2) {
        return Math.abs(a1.getAlarmTime() - a2.getAlarmTime());
    }

    private double distanceOnGraph(AlarmInSpaceTime a1, AlarmInSpaceTime a2) {
        return spatialDistanceCalculator.getSpatialDistanceBetween(a1.getVertex().getNumericId(), a2.getVertex().getNumericId());
    }

    public double distanceOnGraph(CEVertex v1, CEVertex v2) {
        return spatialDistanceCalculator.getSpatialDistanceBetween(v1.getNumericId(), v2.getNumericId());
    }
}
