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

package org.opennms.oce.features.graph.janusgraph;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;

import java.io.IOException;
import java.util.Collections;

import org.apache.cassandra.exceptions.ConfigurationException;
import org.apache.thrift.transport.TTransportException;
import org.apache.tinkerpop.gremlin.process.traversal.dsl.graph.GraphTraversalSource;
import org.cassandraunit.utils.EmbeddedCassandraServerHelper;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.driver.test.MockInventoryBuilder;
import org.opennms.oce.driver.test.MockInventoryType;
import org.opennms.oce.engine.cluster.ClusterEngine;

import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Session;

import pl.allegro.tech.embeddedelasticsearch.EmbeddedElastic;
import pl.allegro.tech.embeddedelasticsearch.PopularProperties;

/**
 * Integration tests for {@link ManagedJanusGraph} using Cassandra/Elasticsearch as the storage backend.
 */
public class CassandraESIT {
    private static final String propertiesFilesName = "cassandra.properties";
    private final ClusterEngine engine = new ClusterEngine();
    private ManagedJanusGraph janusGraph;
    private GraphTraversalSource g;
    private static Session cassandraSession;
    private static final EmbeddedElastic embeddedElastic = EmbeddedElastic.builder()
            .withElasticVersion("5.0.0")
            .withSetting(PopularProperties.HTTP_PORT, 9200)
            .withSetting(PopularProperties.CLUSTER_NAME, "janusgraph")
            .build();

    @BeforeClass
    public static void start() throws ConfigurationException, IOException, TTransportException,
            InterruptedException {
        EmbeddedCassandraServerHelper.startEmbeddedCassandra("cassandra.yaml");
        cassandraSession = Cluster.builder().addContactPoints("127.0.0.1").withPort(9042).build().connect();
        embeddedElastic.start();
    }

    @AfterClass
    public static void stop() {
        embeddedElastic.stop();
        cassandraSession.getCluster().close();
    }

    @After
    public void closeGraphs() {
        engine.getGraphManager().close();
    }

    @Before
    public void init() {
        // Start with a fresh Cassandra
        EmbeddedCassandraServerHelper.cleanEmbeddedCassandra();

        engine.registerSituationHandler(mock(SituationHandler.class));
        engine.init(Collections.emptyList(), Collections.emptyList(), Collections.emptyList());

        // Start with a fresh JanusGraph instance
        janusGraph = new ManagedJanusGraph(getClass().getClassLoader()
                .getResource(propertiesFilesName).getPath());
        engine.getGraphManager().onBind(janusGraph, Collections.emptyMap());
    }

    @Test
    public void testGraphPersists() {
        // Add vertices and edges to the graph
        engine.onInventoryAdded(new MockInventoryBuilder()
                .withInventoryObject(MockInventoryType.COMPONENT, "a")
                .withInventoryObject(MockInventoryType.COMPONENT, "b", MockInventoryType.COMPONENT, "a")
                .getInventory());

        // Verify we have the right amount of vertices and edges
        g = janusGraph.getGraphTraversal();
        assertThat(g.E().count().next(), equalTo(1L));
        assertThat(g.V().count().next(), equalTo(2L));

        // Remove the JanusGraph instance and reconnect with a new one
        engine.getGraphManager().onUnbind(janusGraph, Collections.emptyMap());
        janusGraph = new ManagedJanusGraph(getClass().getClassLoader()
                .getResource(propertiesFilesName).getPath());
        engine.getGraphManager().onBind(janusGraph, Collections.emptyMap());

        // Verify we still have the right amount of vertices and edges
        g = janusGraph.getGraphTraversal();
        assertThat(g.E().count().next(), equalTo(1L));
        assertThat(g.V().count().next(), equalTo(2L));
    }
}
