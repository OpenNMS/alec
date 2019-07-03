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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Function;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;

import edu.uci.ics.jung.algorithms.shortestpath.DijkstraShortestPath;
import edu.uci.ics.jung.graph.Graph;

/**
 * An extension of {@link DijkstraShortestPath} that always caches and uses soft references for the values it caches.
 * The result is that this implementation will behave as if it is un-cached if the JVM is under memory pressure as the
 * softly referenced cached values will be evicted.
 * <p>
 * Once under memory pressure it is expected that this implementation will perform significantly slower but will not
 * cause the JVM to run out of memory.
 */
public class SoftValueDijkstraShortestPath<V, E> extends DijkstraShortestPath<V, E> {
    private static final Logger LOG = LoggerFactory.getLogger(SoftValueDijkstraShortestPath.class);

    public SoftValueDijkstraShortestPath(Graph<V, E> g, Function<E, ? extends Number> nev) {
        super(g, nev, true);
        initializeMap();
    }

    @Override
    public void reset() {
        initializeMap();
    }

    @Override
    public void enableCaching(boolean enable) {
        throw new UnsupportedOperationException("Caching cannot be controlled for this implementation");
    }

    private void initializeMap() {
        Cache<V, SourceData> softValueCache = CacheBuilder.newBuilder()
                .softValues()
                .removalListener(notification -> {
                    if (notification.wasEvicted()) {
                        LOG.debug("Shortest path data for {} was evicted from the cache", notification.getKey());
                    }
                })
                .build();
        sourceMap = softValueCache.asMap();
    }
}
