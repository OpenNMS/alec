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

package org.opennms.oce.engine.deeplearning;

import java.util.Objects;

/**
 * Everything we need to configure a deep learning engine.
 */
public class DeepLearningEngineConf {
    private static final int DEFAULT_NUM_GRAPH_THREADS = 2;
    private static final int DEFAULT_NUM_TF_THREADS = Math.max(Runtime.getRuntime().availableProcessors() - 3, 1);
    private static final double EPSILON = 500;

    private String modelPath;
    private Double epsilon;
    private Integer numGraphProcessingThreads;
    private Integer numTensorFlowProcessingThreads;

    public String getModelPath() {
        return modelPath;
    }

    public void setModelPath(String modelPath) {
        this.modelPath = modelPath;
    }

    public double getEpsilon() {
        if (epsilon == null || epsilon < 0) {
            return EPSILON;
        }
        return epsilon;
    }

    public void setEpsilon(Double epsilon) {
        this.epsilon = epsilon;
    }

    public int getNumGraphProcessingThreads() {
        if (numGraphProcessingThreads == null || numGraphProcessingThreads <= 0) {
            return DEFAULT_NUM_GRAPH_THREADS;
        }
        return numGraphProcessingThreads;
    }

    public void setNumGraphProcessingThreads(Integer numGraphProcessingThreads) {
        this.numGraphProcessingThreads = numGraphProcessingThreads;
    }

    public int getNumTensorFlowProcessingThreads() {
        if (numTensorFlowProcessingThreads == null || numTensorFlowProcessingThreads <= 0) {
            return DEFAULT_NUM_TF_THREADS;
        }
        return numTensorFlowProcessingThreads;
    }

    public void setNumTensorFlowProcessingThreads(Integer numTensorFlowProcessingThreads) {
        this.numTensorFlowProcessingThreads = numTensorFlowProcessingThreads;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeepLearningEngineConf that = (DeepLearningEngineConf) o;
        return Objects.equals(modelPath, that.modelPath) &&
                Objects.equals(epsilon, that.epsilon) &&
                Objects.equals(numGraphProcessingThreads, that.numGraphProcessingThreads) &&
                Objects.equals(numTensorFlowProcessingThreads, that.numTensorFlowProcessingThreads);
    }

    @Override
    public int hashCode() {
        return Objects.hash(modelPath, epsilon, numGraphProcessingThreads, numTensorFlowProcessingThreads);
    }

    @Override
    public String toString() {
        return "DeepLearningEngineConf{" +
                "modelPath='" + getModelPath() + '\'' +
                ", epsilon=" + getEpsilon() +
                ", numGraphProcessingThreads=" + getNumGraphProcessingThreads() +
                ", numTensorFlowProcessingThreads=" + getNumTensorFlowProcessingThreads() +
                '}';
    }
}
