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

package org.opennms.alec.engine.cluster;

import java.util.Collection;

/**
 * A graph that can be solved such that the distance from a given set of source vertices in the graph is computed and
 * cached for retrieval.
 *
 * @param <V> the vertex type
 */
public interface SolvableGraph<V> {
    /**
     * Solve distances from the given set of source vertices to the given set of target vertices.
     */
    void solve(Collection<V> sourceVertices, Collection<V> targetVertices);

    default void solve(Collection<V> vertices) {
        solve(vertices, vertices);
    }

    /**
     * Invalidate any cached distances that have been computed. The graph must then be solved again before a distance
     * can be retrieved.
     */
    void invalidate();

    /**
     * Get the shortest path distance between two vertices. The graph must have previously been solved and must not have
     * been invalidated since solving.
     */
    Number getDistance(V source, V target);
}
