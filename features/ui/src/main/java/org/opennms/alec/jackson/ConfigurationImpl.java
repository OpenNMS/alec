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

import org.opennms.alec.engine.api.EngineParameter;

public class ConfigurationImpl implements Configuration {

    private final Agreement agreement;
    private final EngineParameter engineParameter;

    private ConfigurationImpl(Builder builder) {
        agreement = builder.agreement;
        engineParameter = builder.engineParameter;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(ConfigurationImpl copy) {
        Builder builder = new Builder();
        builder.agreement = copy.getAgreement();
        builder.engineParameter = copy.getEngineParameter();
        return builder;
    }

    @Override
    public Agreement getAgreement() {
        return agreement;
    }

    @Override
    public EngineParameter getEngineParameter() {
        return engineParameter;
    }

    public static final class Builder {
        private Agreement agreement;
        private EngineParameter engineParameter;

        private Builder() {
        }

        public Builder agreement(Agreement val) {
            agreement = val;
            return this;
        }

        public Builder engineParameter(EngineParameter val) {
            engineParameter = val;
            return this;
        }

        public ConfigurationImpl build() {
            return new ConfigurationImpl(this);
        }
    }
}
