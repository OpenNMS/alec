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

package org.opennms.alec.engine.deeplearning.remote;

import java.util.Objects;

/**
 * A vector representing all of the features we use to help answer:
 *   "is alarm A related to alarm B?"
 *
 * Ideas for additional features we *could* add:
 *  * similarity score between labels of A and B : continuous [0,1]
 *  * similarity score between last parent that is different on A and B : continuous [0,1]
 */
public class InputVector {
    /**
     * Input: Alarm A identifier
     */
    private final String alarmAid;

    /**
     * Input: Alarm B identifier
     */
    private final String alarmBid;

    /**
     * Input: Inventory object type of alarm A
     */
    private final String typeA;

    /**
     * Input: Inventory object type of alarm B
     */
    private final String typeB;

    /**
     * Input: True if alarm A and B have the same type and instance
     */
    private final boolean sameInstance;

    /**
     * Input: True if alarm A and B have the same parent
     */
    private final boolean sameParent;

    /**
     * Input: True if alarm A and B share some common ancestor
     */
    private final boolean shareAncestor;

    /**
     * Input: How many seconds between the last occurrence of A1 and A2?
     */
    private final double timeDifferenceInSeconds;

    /**
     * Input: What is the distance on the shortest path from A1 to A2?
     */
    private final double distanceOnGraph;

    /**
     * Input: How similar are the IO IDs for A1 and A2?
     */
    private final double similarityOfInventoryObjectIds;

    /**
     * Input: How similar are the IO labels (friendly names) for A1 and A2?
     */
    private final double similarityOfInventoryObjectLabels;

    public static Builder builder() {
        return new Builder();
    }

    private InputVector(Builder builder) {
        this.alarmAid = builder.alarmAid;
        this.alarmBid = builder.alarmBid;
        this.typeA = builder.typeA;
        this.typeB = builder.typeB;
        this.sameInstance = builder.sameInstance;
        this.sameParent = builder.sameParent;
        this.shareAncestor = builder.shareAncestors;
        this.timeDifferenceInSeconds = builder.timeDifferenceInSeconds;
        this.distanceOnGraph = builder.distanceOnGraph;
        this.similarityOfInventoryObjectIds = builder.similarityOfInventoryObjectIds;
        this.similarityOfInventoryObjectLabels = builder.similarityOfInventoryObjectLabels;
    }

    public static class Builder {
        private String alarmAid;
        private String alarmBid;
        private String typeA;
        private String typeB;
        private Boolean sameInstance;
        private Boolean sameParent;
        private Boolean shareAncestors;
        private Double timeDifferenceInSeconds;
        private Double distanceOnGraph;
        private Double similarityOfInventoryObjectIds;
        private Double similarityOfInventoryObjectLabels;

        public Builder alarmAid(String alarmAid){
            this.alarmAid = alarmAid;
            return this;
        }

        public Builder alarmBid(String alarmBid){
            this.alarmBid = alarmBid;
            return this;
        }

        public Builder typeA(String typeA) {
            this.typeA = typeA;
            return this;
        }

        public Builder typeB(String typeB) {
            this.typeB = typeB;
            return this;
        }

        public Builder sameInstance(Boolean sameInstance) {
            this.sameInstance = sameInstance;
            return this;
        }

        public Builder sameParent(Boolean sameParent) {
            this.sameParent = sameParent;
            return this;
        }

        public Builder shareAncestors(Boolean shareAncestors) {
            this.shareAncestors = shareAncestors;
            return this;
        }

        public Builder timeDifferenceInSeconds(Double timeDifferenceInSeconds) {
            this.timeDifferenceInSeconds = timeDifferenceInSeconds;
            return this;
        }

        public Builder distanceOnGraph(Double distanceOnGraph) {
            this.distanceOnGraph = distanceOnGraph;
            return this;
        }

        public Builder similarityOfInventoryObjectIds(Double similarityOfInventoryObjectIds) {
            this.similarityOfInventoryObjectIds = similarityOfInventoryObjectIds;
            return this;
        }

        public Builder similarityOfInventoryObjectLabels(Double similarityOfInventoryObjectLabels) {
            this.similarityOfInventoryObjectLabels = similarityOfInventoryObjectLabels;
            return this;
        }

        public InputVector build() {
            Objects.requireNonNull(alarmAid, "alarmAid is required");
            Objects.requireNonNull(alarmBid, "alarmBid is required");
            Objects.requireNonNull(typeA, "typeA is required");
            Objects.requireNonNull(typeB, "typeB is required");
            Objects.requireNonNull(sameInstance, "sameInstance is required");
            Objects.requireNonNull(sameParent, "sameParent is required");
            Objects.requireNonNull(shareAncestors, "shareAncestors is required");
            Objects.requireNonNull(timeDifferenceInSeconds, "timeDifferenceInSeconds is required");
            Objects.requireNonNull(distanceOnGraph, "distanceOnGraph is required");
            Objects.requireNonNull(similarityOfInventoryObjectIds, "similarityOfInventoryObjectIds is required");
            Objects.requireNonNull(similarityOfInventoryObjectLabels, "similarityOfInventoryObjectLabels is required");
            return new InputVector(this);
        }
    }

    public String getAlarmAId(){
        return alarmAid;
    }

    public String getAlarmBId(){
        return alarmBid;
    }

    public String getTypeA() {
        return typeA;
    }

    public String getTypeB() {
        return typeB;
    }

    public boolean isSameInstance() {
        return sameInstance;
    }

    public boolean isSameParent() {
        return sameParent;
    }

    public boolean isShareAncestor() {
        return shareAncestor;
    }

    public double getTimeDifferenceInSeconds() {
        return timeDifferenceInSeconds;
    }

    public double getDistanceOnGraph() {
        return distanceOnGraph;
    }

    public double getSimilarityOfInventoryObjectIds() {
        return similarityOfInventoryObjectIds;
    }

    public double getSimilarityOfInventoryObjectLabels() {
        return similarityOfInventoryObjectLabels;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InputVector that = (InputVector) o;
        return sameInstance == that.sameInstance &&
                sameParent == that.sameParent &&
                shareAncestor == that.shareAncestor &&
                Double.compare(that.timeDifferenceInSeconds, timeDifferenceInSeconds) == 0 &&
                Double.compare(that.distanceOnGraph, distanceOnGraph) == 0 &&
                Double.compare(that.similarityOfInventoryObjectIds, similarityOfInventoryObjectIds) == 0 &&
                Double.compare(that.similarityOfInventoryObjectLabels, similarityOfInventoryObjectLabels) == 0 &&
                Objects.equals(typeA, that.typeA) &&
                Objects.equals(typeB, that.typeB) &&
                Objects.equals(alarmAid, that.alarmAid) &&
                Objects.equals(alarmBid, that.alarmAid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(alarmAid, alarmBid, typeA, typeB, sameInstance, sameParent, shareAncestor, timeDifferenceInSeconds, distanceOnGraph, similarityOfInventoryObjectIds, similarityOfInventoryObjectLabels);
    }

    @Override
    public String toString() {
        return "InputVector{" +
                "alarmAid='" + alarmAid + '\'' +
                "alarmBid='" + alarmBid + '\'' +
                "typeA='" + typeA + '\'' +
                ", typeB='" + typeB + '\'' +
                ", sameInstance=" + sameInstance +
                ", sameParent=" + sameParent +
                ", shareAncestor=" + shareAncestor +
                ", timeDifferenceInSeconds=" + timeDifferenceInSeconds +
                ", distanceOnGraph=" + distanceOnGraph +
                ", similarityOfInventoryObjectIds=" + similarityOfInventoryObjectIds +
                ", similarityOfInventoryObjectLabels=" + similarityOfInventoryObjectLabels +
                '}';
    }

}