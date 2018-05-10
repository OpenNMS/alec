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

package org.opennms.oce.model.alarm.api;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class ResourceKey {

    private final List<String> tokens;

    public static ResourceKey key(String... tokens) {
        return new ResourceKey(tokens);
    }

    public static ResourceKey key(List<String> tokens) {
        return new ResourceKey(tokens);
    }

    public ResourceKey(List<String> tokens) {
        this.tokens = new ArrayList<>(tokens);
    }

    public ResourceKey(String... tokens) {
        this.tokens = Arrays.asList(tokens);
    }

    public List<String> getTokens() {
        // Ensure that the key remains immutable
        return new ArrayList<>(tokens);
    }

    public ResourceKey getParentKey() {
        if (tokens.size() < 1) {
            return this;
        } else {
            return ResourceKey.key(tokens.subList(0, tokens.size()-1));
        }
    }

    public int length() {
        return tokens.size();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ResourceKey that = (ResourceKey) o;
        return Objects.equals(tokens, that.tokens);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tokens);
    }

    @Override
    public String toString() {
        return tokens.toString();
    }

}
