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

package org.opennms.alec.engine.deeplearning;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

import java.util.List;

import org.junit.Test;
import org.tensorflow.Tensor;

public class TFModelTest {
    /**
     * This also verifies that the default model can be loaded from the classpath.
     */
    private final TFModel tfModel = new TFModel();

    @Test
    public void canConvertVectorToTensor() {
        InputVector inputVector = InputVector.builder()
                .alarmAid("a1")
                .alarmBid("b1")
                .typeA("a")
                .typeB("b")
                .sameInstance(false)
                .sameParent(false)
                .shareAncestors(true)
                .timeDifferenceInSeconds(1d)
                .distanceOnGraph(2d)
                .similarityOfInventoryObjectLabels(1.0)
                .similarityOfInventoryObjectIds(1.0)
                .build();
        List<Tensor<?>> tensors = tfModel.toTensors(inputVector);
        assertThat(tensors, hasSize(9));
    }

    /**
     * Evaluate the model to determine the average amount of time
     * (milliseconds) it takes to compute.
     */
    @Test(timeout=30000)
    public void canMeasureLatency() {
        InputVector inputVector = InputVector.builder()
                .alarmAid("a1")
                .alarmBid("b1")
                .typeA("a")
                .typeB("b")
                .sameInstance(false)
                .sameParent(false)
                .shareAncestors(true)
                .timeDifferenceInSeconds(1d)
                .distanceOnGraph(2d)
                .similarityOfInventoryObjectLabels(1.0)
                .similarityOfInventoryObjectIds(1.0)
                .build();
        int N = 5000;
        long startMs = System.currentTimeMillis();
        for (int i = 0; i < N; i++) {
            tfModel.isRelated(inputVector);
        }
        long deltaMs = System.currentTimeMillis() - startMs;

        System.out.printf("Took %d ms for %d calls - %.2f ms on average.\n", deltaMs, N, deltaMs / (double)N);
    }
}
