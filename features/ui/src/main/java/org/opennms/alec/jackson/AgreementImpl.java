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

package org.opennms.alec.jackson;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AgreementImpl implements Agreement {
    private final boolean agreed;

    private AgreementImpl(Builder builder) {
        agreed = builder.agreed;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(AgreementImpl copy) {
        Builder builder = new Builder();
        builder.agreed = copy.isAgreed();
        return builder;
    }

    @Override
    public boolean isAgreed() {
        return agreed;
    }

    public static final class Builder {
        @JsonProperty("agreed")
        private boolean agreed;

        private Builder() {
        }

        public Builder agreed(boolean val) {
            agreed = val;
            return this;
        }

        public AgreementImpl build() {
            return new AgreementImpl(this);
        }
    }
}
