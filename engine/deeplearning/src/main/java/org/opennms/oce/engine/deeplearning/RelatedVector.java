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
 * A vector representing all of the features we use to help answer:
 *   "is alarm A related to alarm B?"
 *
 * Ideas for additional features we *could* add:
 *  * similarity score between labels of A and B : continuous [0,1]
 *  * similarity score between last parent that is different on A and B : continuous [0,1]
 */
public class RelatedVector {
    /**
     * Input: Inventory object type of alarm A
     */
    private String typeA;

    /**
     * Input: Inventory object type of alarm B
     */
    private String typeB;

    /**
     * Input: True if alarm A and B have the same type and instance
     */
    private boolean sameInstance;

    /**
     * Input: True if alarm A and B have the same parent
     */
    private boolean sameParent;

    /**
     * Input: True if alarm A and B same some common ancestor
     */
    private boolean shareAncestor;

    /**
     * Input: How many seconds between the last occurrence of A1 and A2?
     */
    private double timeDifferenceInSeconds;

    /**
     * Input: What is the distance on the shortest path from A1 to A2?
     */
    private double distanceOnGraph;

    /**
     * Output: Are alarms A and B related?
     */
    private boolean areAlarmsRelated;

    public String getTypeA() {
        return typeA;
    }

    public void setTypeA(String typeA) {
        this.typeA = typeA;
    }

    public String getTypeB() {
        return typeB;
    }

    public void setTypeB(String typeB) {
        this.typeB = typeB;
    }

    public boolean isSameInstance() {
        return sameInstance;
    }

    public void setSameInstance(boolean sameInstance) {
        this.sameInstance = sameInstance;
    }

    public boolean isSameParent() {
        return sameParent;
    }

    public void setSameParent(boolean sameParent) {
        this.sameParent = sameParent;
    }

    public boolean isShareAncestor() {
        return shareAncestor;
    }

    public void setShareAncestor(boolean shareAncestor) {
        this.shareAncestor = shareAncestor;
    }

    public double getTimeDifferenceInSeconds() {
        return timeDifferenceInSeconds;
    }

    public void setTimeDifferenceInSeconds(double timeDifferenceInSeconds) {
        this.timeDifferenceInSeconds = timeDifferenceInSeconds;
    }

    public double getDistanceOnGraph() {
        return distanceOnGraph;
    }

    public void setDistanceOnGraph(double distanceOnGraph) {
        this.distanceOnGraph = distanceOnGraph;
    }

    public boolean isAreAlarmsRelated() {
        return areAlarmsRelated;
    }

    public void setAreAlarmsRelated(boolean areAlarmsRelated) {
        this.areAlarmsRelated = areAlarmsRelated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RelatedVector that = (RelatedVector) o;
        return sameInstance == that.sameInstance &&
                sameParent == that.sameParent &&
                shareAncestor == that.shareAncestor &&
                Double.compare(that.timeDifferenceInSeconds, timeDifferenceInSeconds) == 0 &&
                Double.compare(that.distanceOnGraph, distanceOnGraph) == 0 &&
                areAlarmsRelated == that.areAlarmsRelated &&
                Objects.equals(typeA, that.typeA) &&
                Objects.equals(typeB, that.typeB);
    }

    @Override
    public int hashCode() {
        return Objects.hash(typeA, typeB, sameInstance, sameParent, shareAncestor, timeDifferenceInSeconds, distanceOnGraph, areAlarmsRelated);
    }

    @Override
    public String toString() {
        return "RelatedVector{" +
                "typeA='" + typeA + '\'' +
                ", typeB='" + typeB + '\'' +
                ", sameInstance=" + sameInstance +
                ", sameParent=" + sameParent +
                ", shareAncestor=" + shareAncestor +
                ", timeDifferenceInSeconds=" + timeDifferenceInSeconds +
                ", distanceOnGraph=" + distanceOnGraph +
                ", areAlarmsRelated=" + areAlarmsRelated +
                '}';
    }

}