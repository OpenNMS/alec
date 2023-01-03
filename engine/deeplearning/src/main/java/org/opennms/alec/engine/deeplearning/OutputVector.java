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

/**
 * A vector representing the result of:
 *   "is alarm A related to alarm B?"
 *
 * Ideas for additional features we *could* add:
 *   "is alarm A the root cause of alarm B?"
 */
public class OutputVector {

    /**
     * The input vector
     */
    private final InputVector inputVector;

    /**
     * Output: Are alarms A and B related?
     */
    private final boolean areAlarmsRelated;

    public static Builder builder() {
        return new Builder();
    }

    private OutputVector(Builder builder) {
        this.inputVector = builder.inputVector;
        this.areAlarmsRelated = builder.areAlarmsRelated;
    }

    public static class Builder {
        private InputVector inputVector;
        private Boolean areAlarmsRelated;

        public Builder inputVector(InputVector inputVector) {
            this.inputVector = inputVector;
            return this;
        }

        public Builder areAlarmsRelated(Boolean areAlarmsRelated) {
            this.areAlarmsRelated = areAlarmsRelated;
            return this;
        }

        public OutputVector build() {
            Objects.requireNonNull(inputVector, "inputVector must not be null.");
            Objects.requireNonNull(areAlarmsRelated, "areAlarmsRelated must not be null.");
            return new OutputVector(this);
        }
    }

    public InputVector getInputVector() {
        return inputVector;
    }

    public boolean areAlarmsRelated() {
        return areAlarmsRelated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OutputVector that = (OutputVector) o;
        return areAlarmsRelated == that.areAlarmsRelated &&
                Objects.equals(inputVector, that.inputVector);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inputVector, areAlarmsRelated);
    }

    @Override
    public String toString() {
        return "OutputVector{" +
                "inputVector=" + inputVector +
                ", areAlarmsRelated=" + areAlarmsRelated +
                '}';
    }
}
