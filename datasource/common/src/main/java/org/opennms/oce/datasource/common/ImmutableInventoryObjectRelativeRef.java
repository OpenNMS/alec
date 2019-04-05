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

package org.opennms.oce.datasource.common;

import static org.opennms.oce.datasource.api.InventoryObject.DEFAULT_WEIGHT;

import java.util.Objects;

import org.opennms.oce.datasource.api.InventoryObjectRelativeRef;

/**
 * An implementation of {@link InventoryObjectRelativeRef} that enforces deep immutability.
 */
public final class ImmutableInventoryObjectRelativeRef implements InventoryObjectRelativeRef {
    private final String type;
    private final String id;
    private final long weight;

    private ImmutableInventoryObjectRelativeRef(Builder builder) {
        this.type = builder.type;
        this.id = builder.id;
        this.weight = builder.weight;
    }

    public static final class Builder {
        private String type;
        private String id;
        private long weight;

        private Builder() {
            weight = DEFAULT_WEIGHT;
        }

        private Builder(InventoryObjectRelativeRef inventoryObjectRelativeRef) {
            this.type = inventoryObjectRelativeRef.getType();
            this.id = inventoryObjectRelativeRef.getId();
            this.weight = inventoryObjectRelativeRef.getWeight();
        }

        public Builder setType(String type) {
            this.type = type;
            return this;
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setWeight(long weight) {
            this.weight = weight;
            return this;
        }

        public ImmutableInventoryObjectRelativeRef build() {
            Objects.requireNonNull(id, "Id cannot be null");
            Objects.requireNonNull(type, "Type cannot be null");

            return new ImmutableInventoryObjectRelativeRef(this);
        }
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilderFrom(InventoryObjectRelativeRef inventoryObjectRelativeRef) {
        return new Builder(inventoryObjectRelativeRef);
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getWeight() {
        return weight;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImmutableInventoryObjectRelativeRef that = (ImmutableInventoryObjectRelativeRef) o;
        return Objects.equals(type, that.type) &&
                Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, id);
    }

    @Override
    public String toString() {
        return "ImmutableInventoryObjectRelativeRef{" +
                "type='" + type + '\'' +
                ", id='" + id + '\'' +
                ", weight=" + weight +
                '}';
    }
}
