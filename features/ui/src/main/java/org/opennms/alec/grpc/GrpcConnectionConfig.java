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

package org.opennms.alec.grpc;

import java.util.Objects;

public class GrpcConnectionConfig {
    private final String host;
    private final int port;

    /**
     * Called by blueprint.xml.
     */
    public GrpcConnectionConfig(final String host, final int port) {
        this.host = Objects.requireNonNull(host);
        this.port = requirePositiveNumber(port);
    }

    private GrpcConnectionConfig(Builder builder) {
        host = builder.host;
        port = builder.port;
    }

    public static Builder newBuilder(GrpcConnectionConfig copy) {
        Builder builder = new Builder();
        builder.host = copy.getHost();
        builder.port = copy.getPort();
        return builder;
    }

    private int requirePositiveNumber(int value) {
        if (value < 0) {
            throw new IllegalArgumentException(String.format("A positive number is required but was %s", value));
        }
        return value;
    }

    public static class GrpcConnectionConfigBuilder {
        private String host = "localhost"; // default value
    }

    public static final class Builder {
        private String host;
        private int port;

        private Builder() {
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder host(String val) {
            host = val;
            return this;
        }

        public Builder port(int val) {
            port = val;
            return this;
        }

        public GrpcConnectionConfig build() {
            return new GrpcConnectionConfig(this);
        }
    }

    public String getHost() {
        return host;
    }

    public int getPort() {
        return port;
    }
}
