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

package org.opennms.alec.data;

import org.opennms.alec.datasource.api.Status;

public class SituationStatusImpl implements SituationStatus {
    private final String id;
    private final Status status;

    private SituationStatusImpl(Builder builder) {
        id = builder.id;
        status = builder.status;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(SituationStatus copy) {
        Builder builder = new Builder();
        builder.id = copy.getId();
        builder.status = copy.getStatus();
        return builder;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public Status getStatus() {
        return status;
    }

    public static final class Builder {
        private String id;
        private Status status;

        private Builder() {
        }

        public Builder id(String val) {
            id = val;
            return this;
        }

        public Builder status(Status val) {
            status = val;
            return this;
        }

        public SituationStatusImpl build() {
            return new SituationStatusImpl(this);
        }
    }
}