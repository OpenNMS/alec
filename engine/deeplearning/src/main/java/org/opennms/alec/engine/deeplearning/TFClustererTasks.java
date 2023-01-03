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

import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEVertex;

public class TFClustererTasks {

    public interface TaskVisitor {
        void pairAlarmsOnVertex(PairAlarmsOnVertex task);

        void pairAlarmsOnVertices(PairAlarmsOnVertices pairAlarmsOnVertices);
    }

    public interface Task {

        void visit(TaskVisitor visitor);
    }

    public static class PairAlarmsOnVertex implements Task {
        private final CEVertex v;

        public PairAlarmsOnVertex(CEVertex v) {
            this.v = Objects.requireNonNull(v);
        }

        @Override
        public void visit(TaskVisitor visitor) {
            visitor.pairAlarmsOnVertex(this);
        }

        public CEVertex getVertex() {
            return v;
        }
    }

    public static class PairAlarmsOnVertices implements Task {
        private final CEVertex v1;
        private final CEVertex v2;
        private final double distance;

        public PairAlarmsOnVertices(CEVertex v1, CEVertex v2, double distance) {
            this.v1 = v1;
            this.v2 = v2;
            this.distance = distance;
        }

        @Override
        public void visit(TaskVisitor visitor) {
            visitor.pairAlarmsOnVertices(this);
        }

        public CEVertex getV1() {
            return v1;
        }

        public CEVertex getV2() {
            return v2;
        }

        public double getDistance() {
            return distance;
        }
    }

    public static class RelatesTo {
        private final AlarmInSpaceTime a1;
        private final AlarmInSpaceTime a2;
        private final InputVector inputVector;

        public RelatesTo(AlarmInSpaceTime a1, AlarmInSpaceTime a2, InputVector inputVector) {
            this.a1 = a1;
            this.a2 = a2;
            this.inputVector = inputVector;
        }

        public AlarmInSpaceTime getA1() {
            return a1;
        }

        public AlarmInSpaceTime getA2() {
            return a2;
        }

        public InputVector getInputVector() {
            return inputVector;
        }
    }

}
