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

package org.opennms.oce.engine.common;

import java.util.Objects;

import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;

public class SimpleEngineFactory<T extends Engine> implements EngineFactory {
    private final Class<T> clazz;

    public SimpleEngineFactory(Class<T> clazz) {
        this.clazz = Objects.requireNonNull(clazz);
    }

    @Override
    public String getName() {
        return clazz.getName();
    }

    @Override
    public String toString() {
        return getName();
    }

    @Override
    public T createEngine() {
        try {
            return clazz.newInstance();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
