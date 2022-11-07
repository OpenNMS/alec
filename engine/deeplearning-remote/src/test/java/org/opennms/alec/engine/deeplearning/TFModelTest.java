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

import org.junit.Test;
import org.opennms.alec.engine.deeplearning.remote.InputVector;
import org.opennms.alec.engine.deeplearning.remote.TFModel;

//Use to test remote model connection
// token and uri should be specified on testing but not push
//@Ignore
public class TFModelTest {
    /**
     * This also verifies that the default model can be loaded from the classpath.
     */
    private final TFModel tfModel = new TFModel("", "");


    /**
     * Evaluate the model to determine the average amount of time
     * (milliseconds) it takes to compute.
     */
    @Test(timeout=10000)
    @SuppressWarnings("java:S2699")
    public void canMeasureLatency() {
        InputVector inputVector = InputVector.builder()
                .alarmAid("a1")
                .alarmBid("b1")
                .typeA("SnmpInterface")
                .typeB("SnmpInterface")
                .sameInstance(false)
                .sameParent(false)
                .shareAncestors(false)
                .timeDifferenceInSeconds(1d)
                .distanceOnGraph(2d)
                .similarityOfInventoryObjectIds(0.4666)
                .similarityOfInventoryObjectLabels(-1.0)
                .build();
        int N = 50;
        long startMs = System.currentTimeMillis();
        for (int i = 0; i < N; i++) {
            tfModel.isRelated(inputVector);
        }
        long deltaMs = System.currentTimeMillis() - startMs;

        System.out.printf("Took %d ms for %d calls - %.2f ms on average.\n", deltaMs, N, deltaMs / (double)N);
    }
}
