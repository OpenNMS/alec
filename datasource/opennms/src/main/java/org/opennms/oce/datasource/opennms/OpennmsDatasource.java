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

package org.opennms.oce.datasource.opennms;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.Consumed;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.errors.InvalidStateStoreException;
import org.apache.kafka.streams.errors.StreamsException;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Materialized;
import org.apache.kafka.streams.state.QueryableStoreTypes;
import org.apache.kafka.streams.state.ReadOnlyKeyValueStore;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.common.AlarmBean;
import org.osgi.service.cm.ConfigurationAdmin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.protobuf.InvalidProtocolBufferException;

public class OpennmsDatasource implements AlarmDatasource, InventoryDatasource {

    private static final Logger LOG = LoggerFactory.getLogger(OpennmsDatasource.class);

    private static final String ALARM_STORE_NAME = "alarm_store";
    private static final String NODE_STORE_NAME = "node_store";
    private static final String KAFKA_STREAMS_PID = "org.opennms.oce.datasource.opennms.kafka.streams";

    private final ConfigurationAdmin configAdmin;
    private String alarmTopic;
    private String eventTopic;
    private String nodeTopic;

    private final Set<AlarmHandler> alarmHandlers = new HashSet<>();
    private final Set<InventoryHandler> inventoryHandlers = new HashSet<>();
    private final Map<String, OpennmsModelProtos.Alarm> alarmsByReductionKey = new HashMap<>();
    private final Map<String, OpennmsModelProtos.Node> nodesByCriteria = new HashMap<>();
    private KafkaStreams streams;

    public OpennmsDatasource(ConfigurationAdmin configAdmin) {
        this.configAdmin = Objects.requireNonNull(configAdmin);
    }

    public void init() throws IOException {
        final Properties streamProperties = loadStreamsProperties();

        final StreamsBuilder builder = new StreamsBuilder();
        // Build a view of the alarms for lookup
        builder.table(alarmTopic, Consumed.with(Serdes.String(), Serdes.ByteArray()),
                Materialized.as(ALARM_STORE_NAME))
                // Process alarms as they come in
                .toStream().foreach(this::handleNewOrUpdatedAlarm);
        // Build a view of the nodes for lookup
        builder.table(nodeTopic, Consumed.with(Serdes.String(), Serdes.ByteArray()),
                Materialized.as(NODE_STORE_NAME))
                // Process alarms as they come in
                .toStream().foreach(this::handleNewOrUpdatedNode);
        final Topology topology = builder.build();

        final ClassLoader currentClassLoader = Thread.currentThread().getContextClassLoader();
        try {
            // Use the class-loader for the KStream class, since the kafka-client bundle
            // does not import the required classes from the kafka-streams bundle
            Thread.currentThread().setContextClassLoader(KStream.class.getClassLoader());
            streams = new KafkaStreams(topology, streamProperties);
        } finally {
            Thread.currentThread().setContextClassLoader(currentClassLoader);
        }

        streams.setUncaughtExceptionHandler((t, e) ->
                LOG.error(String.format("Stream error on thread: %s", t.getName()), e));
        try {
            streams.start();
        } catch (StreamsException | IllegalStateException e) {
            LOG.error("Stream did not start successfully.", e);
        }
    }

    public void destroy() {
        if (streams != null) {
            if (!streams.close(1, TimeUnit.MINUTES)) {
                LOG.error("Stream failed to close in 1 minute.");
            }
        }
    }

    private void handleNewOrUpdatedAlarm(String reductionKey, byte[] alarmBytes) {
        final OpennmsModelProtos.Alarm alarm;
        try {
            if (alarmBytes == null) {
                alarm = null;
            } else {
                alarm = OpennmsModelProtos.Alarm.parseFrom(alarmBytes);
            }
        } catch (InvalidProtocolBufferException ex) {
            throw new RuntimeException(ex);
        }

        synchronized (alarmHandlers) {
            LOG.info("handleNewOrUpdatedAlarm({})", reductionKey);
            LOG.trace("handleNewOrUpdatedAlarm({}, {})", reductionKey, alarm);
            if (alarm == null) {
                final OpennmsModelProtos.Alarm lastAlarm = alarmsByReductionKey.get(reductionKey);
                if (lastAlarm != null) {
                    final AlarmBean alarmBean = OpennmsMapper.toAlarm(lastAlarm);
                    if (alarmBean.getResourceKeys().size() >= 1) {
                        alarmHandlers.forEach(h -> {
                            try {
                                h.onAlarmCleared(alarmBean);
                            } catch (Exception e) {
                                LOG.error("onAlarmCleared() call failed with alarm: {} on handler: {}", alarmBean, h, e);
                            }
                        });
                    }
                } else {
                    LOG.warn("No existing alarm found for reduction key {}. Skipping callbacks.", reductionKey);
                }
            } else {
                final AlarmBean alarmBean = OpennmsMapper.toAlarm(alarm);
                if (alarmBean.getResourceKeys().size() >= 1) {
                    alarmHandlers.forEach(h -> {
                        try {
                            h.onAlarmCreatedOrUpdated(alarmBean);
                        } catch (Exception e) {
                            LOG.error("onAlarmCreatedOrUpdated() call failed with alarm: {} on handler: {}", alarmBean, h, e);
                        }
                    });
                }
            }
        }
        alarmsByReductionKey.put(reductionKey, alarm);
    }

    @Override
    public List<Alarm> getAlarms() {
        final List<Alarm> alarms = new ArrayList<>();
        try {
            waitUntilAlarmStoreIsQueryable().all().forEachRemaining(entry -> {
                try {
                    final OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.parseFrom(entry.value);
                    alarms.add(OpennmsMapper.toAlarm(alarm));
                } catch (InvalidProtocolBufferException e) {
                    LOG.error("Failed to parse alarm from bytes.", e);
                }
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return alarms;
    }

    @Override
    public List<Alarm> getAlarmsAndRegisterHandler(AlarmHandler handler) {
        synchronized (alarmHandlers) {
            // Lock to make sure we don't miss any alarms between the call to register and get
            registerHandler(handler);
            return getAlarms();
        }
    }

    @Override
    public void registerHandler(AlarmHandler handler) {
        alarmHandlers.add(handler);
    }

    @Override
    public void unregisterHandler(AlarmHandler handler) {
        alarmHandlers.remove(handler);
    }

    private void handleNewOrUpdatedNode(String nodeCriteria, byte[] nodeBytes) {
        final OpennmsModelProtos.Node node;
        try {
            if (nodeBytes == null) {
                node = null;
            } else {
                node = OpennmsModelProtos.Node.parseFrom(nodeBytes);
            }
        } catch (InvalidProtocolBufferException ex) {
            throw new RuntimeException(ex);
        }

        synchronized (inventoryHandlers) {
            LOG.info("handleNewOrUpdatedNode({})", nodeCriteria);
            LOG.trace("handleNewOrUpdatedNode({}, {})", nodeCriteria, node);
            if (node == null) {
                final OpennmsModelProtos.Node lastNode = nodesByCriteria.get(nodeCriteria);
                if (lastNode != null) {
                    inventoryHandlers.forEach(h -> h.onInventoryRemoved(OpennmsMapper.toInventoryObjects(lastNode)));
                } else {
                    LOG.warn("No existing node found with criteria {}. Skipping callbacks.", nodeCriteria);
                }
            } else {
                // TODO: Was it added or updated? If it was updated, we may need to call remove first.
                inventoryHandlers.forEach(h -> h.onInventoryAdded(OpennmsMapper.toInventoryObjects(node)));
            }
        }
        nodesByCriteria.put(nodeCriteria, node);
    }

    @Override
    public List<InventoryObject> getInventory() {
        final List<InventoryObject> inventory = new ArrayList<>();
        try {
            waitUntilNodeStoreIsQueryable().all().forEachRemaining(entry -> {
                try {
                    final OpennmsModelProtos.Node node = OpennmsModelProtos.Node.parseFrom(entry.value);
                    inventory.addAll(OpennmsMapper.toInventoryObjects(node));
                } catch (InvalidProtocolBufferException e) {
                    LOG.error("Failed to parse node from bytes.", e);
                }
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return inventory;
    }

    @Override
    public List<InventoryObject> getInventoryAndRegisterHandler(InventoryHandler handler) {
        synchronized (inventoryHandlers) {
            // Lock to make sure we don't miss any alarms between the call to register and get
            registerHandler(handler);
            return getInventory();
        }
    }

    @Override
    public void registerHandler(InventoryHandler handler) {
        inventoryHandlers.add(handler);
    }

    @Override
    public void unregisterHandler(InventoryHandler handler) {
        inventoryHandlers.remove(handler);
    }

    private ReadOnlyKeyValueStore<String, byte[]> waitUntilAlarmStoreIsQueryable() throws InterruptedException {
        while (true) {
            try {
                return streams.store(ALARM_STORE_NAME, QueryableStoreTypes.keyValueStore());
            } catch (InvalidStateStoreException ignored) {
                Thread.sleep(100);
            }
        }
    }

    private ReadOnlyKeyValueStore<String, byte[]> waitUntilNodeStoreIsQueryable() throws InterruptedException {
        while (true) {
            try {
                return streams.store(NODE_STORE_NAME, QueryableStoreTypes.keyValueStore());
            } catch (InvalidStateStoreException ignored) {
                Thread.sleep(100);
            }
        }
    }

    private Properties loadStreamsProperties() throws IOException {
        final Properties streamsProperties = new Properties();
        final Dictionary<String, Object> properties = configAdmin.getConfiguration(KAFKA_STREAMS_PID).getProperties();
        if (properties != null) {
            final Enumeration<String> keys = properties.keys();
            while (keys.hasMoreElements()) {
                final String key = keys.nextElement();
                streamsProperties.put(key, properties.get(key));
            }
        }
        streamsProperties.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        streamsProperties.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.ByteArray().getClass());
        streamsProperties.put(StreamsConfig.APPLICATION_ID_CONFIG, "oce-datasource");
        if (streamsProperties.get(StreamsConfig.STATE_DIR_CONFIG) == null) {
            Path kafkaDir = Paths.get(System.getProperty("karaf.data"), "kafka");
            streamsProperties.put(StreamsConfig.STATE_DIR_CONFIG, kafkaDir.toString());
        }
        return streamsProperties;
    }

    public String getAlarmTopic() {
        return alarmTopic;
    }

    public void setAlarmTopic(String alarmTopic) {
        this.alarmTopic = alarmTopic;
    }

    public String getEventTopic() {
        return eventTopic;
    }

    public void setEventTopic(String eventTopic) {
        this.eventTopic = eventTopic;
    }

    public String getNodeTopic() {
        return nodeTopic;
    }

    public void setNodeTopic(String nodeTopic) {
        this.nodeTopic = nodeTopic;
    }

}
