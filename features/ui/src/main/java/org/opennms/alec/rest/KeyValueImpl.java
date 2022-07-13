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

package org.opennms.alec.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class KeyValueImpl implements KeyValue {
    private KeyEnum keyEnum;
    private String value;

    private KeyValueImpl(Builder builder) {
        keyEnum = builder.keyEnum;
        value = builder.value;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(KeyValue copy) {
        Builder builder = new Builder();
        builder.keyEnum = copy.getKey();
        builder.value = copy.getValue();
        return builder;
    }

    @Override
    public KeyEnum getKey() {
        return keyEnum;
    }

    @Override
    public String getValue() {
        return value;
    }

    @JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private KeyEnum keyEnum;
        private String value;

        private Builder() {
        }

        public Builder key(KeyEnum val) {
            keyEnum = val;
            return this;
        }

        public Builder value(String val) {
            value = val;
            return this;
        }

        public KeyValueImpl build() {
            return new KeyValueImpl(this);
        }
    }
}
