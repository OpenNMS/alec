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
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.common.serialization.StringSerializer;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.errors.InvalidStateStoreException;
import org.apache.kafka.streams.errors.StreamsException;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.state.KeyValueStore;
import org.apache.kafka.streams.state.QueryableStoreTypes;
import org.apache.kafka.streams.state.ReadOnlyKeyValueStore;
import org.apache.kafka.streams.state.StoreBuilder;
import org.apache.kafka.streams.state.Stores;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.AlarmFeedbackDatasource;
import org.opennms.oce.datasource.api.AlarmFeedbackHandler;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationDatasource;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.HandlerRegistry;
import org.opennms.oce.datasource.opennms.events.Event;
import org.opennms.oce.datasource.opennms.events.JaxbUtils;
import org.opennms.oce.datasource.opennms.events.Log;
import org.opennms.oce.datasource.opennms.processors.AlarmFeedbackTableProcessor;
import org.opennms.oce.datasource.opennms.processors.AlarmTableProcessor;
import org.opennms.oce.datasource.opennms.processors.InventoryTableProcessor;
import org.opennms.oce.datasource.opennms.processors.SituationTableProcessor;
import org.opennms.oce.datasource.opennms.proto.FeedbackModelProtos;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.opennms.oce.datasource.opennms.serialization.AlarmDeserializer;
import org.opennms.oce.datasource.opennms.serialization.AlarmFeedbackDeserializer;
import org.opennms.oce.datasource.opennms.serialization.NodeDeserializer;
import org.opennms.oce.datasource.opennms.serialization.OpennmsSerdes;
import org.opennms.oce.datasource.opennms.serialization.ProtobufDeserializer;
import org.opennms.oce.datasource.opennms.serialization.TopologyEdgeDeserializer;
import org.osgi.service.cm.ConfigurationAdmin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OpennmsDatasource implements SituationDatasource, AlarmDatasource, InventoryDatasource,
        AlarmFeedbackDatasource {
    private static final Logger LOG = LoggerFactory.getLogger(OpennmsDatasource.class);

    public static final String KAFKA_STREAMS_PID = "org.opennms.oce.datasource.opennms.kafka.streams";
    public static final String KAFKA_PRODUCER_PID = "org.opennms.oce.datasource.opennms.kafka.producer";

    public static final String DEFAULT_APPLICATION_ID = "oce-datasource";
    public static final String DEFAULT_ALARM_TOPIC = "alarms";
    public static final String DEFAULT_ALARM_FEEDBACK_TOPIC = "alarmFeedback";
    public static final String DEFAULT_NODE_TOPIC = "nodes";
    public static final String DEFAULT_EVENT_SINK_TOPIC = "OpenNMS.Sink.Events";
    public static final String DEFAULT_INVENTORY_TOPIC = "oce-inventory";
    public static final String DEFAULT_EDGES_TOPIC = "edges";

    public static final long DEFAULT_INVENTORY_GC_INTERVAL_MS = TimeUnit.MINUTES.toMillis(5);
    public static final long DEFAULT_INVENTORY_TTL_MS = TimeUnit.DAYS.toMillis(1);

    private static final String INVENTORY_STORE_NODE_PREFIX = "node:";
    private static final String INVENTORY_STORE_ALARM_PREFIX = "alarm:";
    private static final String INVENTORY_STORE_EDGE_PREFIX = "edge:";

    public static final String INVENTORY_STORE = "inventoryStore";
    public static final String ALARM_STORE = "alarmStore";
    public static final String ALARM_FEEDBACK_STORE = "alarmFeedbackStore";
    public static final String SITUATION_STORE = "situationStore";
    public static final String EDGE_STORE = "edgeStore";

    private final HandlerRegistry<AlarmHandler> alarmHandlers = new HandlerRegistry<>();
    private final HandlerRegistry<AlarmFeedbackHandler> alarmFeedbackHandlers = new HandlerRegistry<>();
    private final HandlerRegistry<InventoryHandler> inventoryHandlers = new HandlerRegistry<>();
    private final HandlerRegistry<SituationHandler> situationHandlers = new HandlerRegistry<>();

    private final ConfigurationAdmin configAdmin;

    private KafkaStreams streams;

    private String alarmTopic = DEFAULT_ALARM_TOPIC;
    private String alarmFeedbackTopic = DEFAULT_ALARM_FEEDBACK_TOPIC;
    private String nodeTopic = DEFAULT_NODE_TOPIC;
    private String eventSinkTopic = DEFAULT_EVENT_SINK_TOPIC;
    private String inventoryTopic = DEFAULT_INVENTORY_TOPIC;
    private String edgesTopic = DEFAULT_EDGES_TOPIC;

    private long inventoryGcIntervalMs = DEFAULT_INVENTORY_GC_INTERVAL_MS;
    private long inventoryTtlMs = DEFAULT_INVENTORY_TTL_MS;

    private KafkaProducer<String, String> producer;

    private final NodeToInventory nodeToInventory;

    private final AlarmToInventory alarmToInventory;

    private final EdgeToInventory edgeToInventory;

    public OpennmsDatasource(ConfigurationAdmin configAdmin, NodeToInventory nodeToInventory, AlarmToInventory alarmToInventory,
            EdgeToInventory edgeToInventory) {
        this.configAdmin = Objects.requireNonNull(configAdmin);
        this.nodeToInventory = Objects.requireNonNull(nodeToInventory);
        this.alarmToInventory = Objects.requireNonNull(alarmToInventory);
        this.edgeToInventory = Objects.requireNonNull(edgeToInventory);
    }

    public void init() throws IOException {
        final Properties producerProperties = loadProducerProperties();
        producer = KafkaUtils.runWithGivenClassLoader(() -> new KafkaProducer<>(producerProperties), KafkaProducer.class.getClassLoader());

        final Properties streamProperties = loadStreamsProperties();

        // Use the class-loader for the KStream class, since the kafka-client bundle
        // does not import the required classes from the kafka-streams bundle
        streams = KafkaUtils.runWithGivenClassLoader(() -> new KafkaStreams(getKTopology(), streamProperties), KStream.class.getClassLoader());

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

    private static void putProperties(Dictionary<String, Object> propertiesToPut, Properties properties) {
        if (propertiesToPut != null) {
            final Enumeration<String> keys = propertiesToPut.keys();
            while (keys.hasMoreElements()) {
                final String key = keys.nextElement();
                properties.put(key, propertiesToPut.get(key));
            }
        }
    }

    protected Properties loadProducerProperties() throws IOException {        
        final Properties producerProperties = new Properties();
        // User
        final Dictionary<String, Object> properties = configAdmin.getConfiguration(KAFKA_PRODUCER_PID).getProperties();
        putProperties(properties, producerProperties);

        // Overrides
        producerProperties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        producerProperties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        return producerProperties;
    }

    protected Properties loadStreamsProperties() throws IOException {
        final Properties streamsProperties = new Properties();
        // Defaults
        streamsProperties.put(StreamsConfig.APPLICATION_ID_CONFIG, DEFAULT_APPLICATION_ID);
        final Path kafkaDir = Paths.get(System.getProperty("karaf.data"), "kafka");
        streamsProperties.put(StreamsConfig.STATE_DIR_CONFIG, kafkaDir.toString());
        streamsProperties.put(StreamsConfig.NUM_STREAM_THREADS_CONFIG, Math.max(Runtime.getRuntime().availableProcessors()-2, 1));
        // User
        final Dictionary<String, Object> properties = configAdmin.getConfiguration(KAFKA_STREAMS_PID).getProperties();
        putProperties(properties, streamsProperties);

        // Overrides
        streamsProperties.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        streamsProperties.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.ByteArray().getClass());
        return streamsProperties;
    }

    protected Topology getKTopology() {
        final StreamsBuilder builder = new StreamsBuilder();
        createStores(builder);

        // Produce a KStream of EnrichedAlarm objects from the alarm stream
        final AlarmDeserializer alarmDeserializer = new AlarmDeserializer();
        KStream<String, byte[]> alarmBytesStream = builder.stream(getAlarmTopic());
        KStream<String, OpennmsModelProtos.Alarm> allAlarmStream = alarmBytesStream.mapValues(alarmBytes -> alarmDeserializer.deserialize(null, alarmBytes));
        KStream<String, OpennmsModelProtos.Alarm> alarmStream = allAlarmStream.filter((k, v) -> !isSituation(k));
        KStream<String, EnrichedAlarm> enrichedAlarmStream = alarmStream.mapValues(alarmToInventory::enrichAlarm);

        mapEnrichedAlarmsToInventory(enrichedAlarmStream);
        processEnrichedAlarms(enrichedAlarmStream);
        processSituations(allAlarmStream);
        mapEdgesToInventory(builder);
        mapNodesToInventory(builder);
        processInventory(builder);

        return builder.build();
    }

    // From the stream of enriched alarms, derive inventory objects
    private void mapEnrichedAlarmsToInventory(KStream<String, EnrichedAlarm> enrichedAlarmStream) {
        KStream<String, InventoryModelProtos.InventoryObjects> alarmInventoryStream =
                enrichedAlarmStream.map((reductionKey, enrichedAlarm) -> {
                    final String key = INVENTORY_STORE_ALARM_PREFIX + reductionKey;
                    if (enrichedAlarm == null) {
                        return KeyValue.pair(key, null);
                    }
                    return KeyValue.pair(key, enrichedAlarm.getInventory());
                });
        // Take the newly created stream of inventory objects and serialize them onto the inventory topic
        alarmInventoryStream.mapValues(ios -> ios != null ? ios.toByteArray() : null).to(getInventoryTopic());
    }

    // Map the enriched alarms back to regular alarm objects overriding the MO type and id with the ones set in the
    // enriched alarm, since these were updated to be properly scoped and reference the inventory
    private void processEnrichedAlarms(KStream<String, EnrichedAlarm> enrichedAlarmStream) {
        enrichedAlarmStream.mapValues(enrichedAlarm -> {
            if (enrichedAlarm == null) {
                return null;
            }
            final OpennmsModelProtos.Alarm.Builder alarmBuilder =
                    OpennmsModelProtos.Alarm.newBuilder(enrichedAlarm.getAlarm());
            if (enrichedAlarm.getManagedObjectInstance() != null) {
                alarmBuilder.setManagedObjectInstance(enrichedAlarm.getManagedObjectInstance());
            }
            if (enrichedAlarm.getManagedObjectType() != null) {
                alarmBuilder.setManagedObjectType(enrichedAlarm.getManagedObjectType());
            }
            return alarmBuilder.build();
        }).process(() -> new AlarmTableProcessor(alarmHandlers), ALARM_STORE);
    }

    // Handle converting topology edges to inventory links
    private void mapEdgesToInventory(StreamsBuilder builder) {
        final TopologyEdgeDeserializer topologyEdgeDeserializer = new TopologyEdgeDeserializer();
        KStream<String, byte[]> edgesBytesStream = builder.stream(getEdgesTopic());
        KStream<String, OpennmsModelProtos.TopologyEdge> edgesStream =
                edgesBytesStream.mapValues(edgeBytes -> topologyEdgeDeserializer.deserialize(null, edgeBytes));
        // From the stream of topology edges, derive inventory objects and create a KStream of those
        KStream<String, InventoryModelProtos.InventoryObjects> edgesInventoryStream =
                edgesStream.map((edgeKey, topologyEdge) -> {
                    final String key = INVENTORY_STORE_EDGE_PREFIX + edgeKey;
                    if (topologyEdge == null) {
                        return KeyValue.pair(key, null);
                    }
                    return KeyValue.pair(key, edgeToInventory.toInventoryObjects(topologyEdge));
                });
        // Take the newly created stream of inventory objects and serialize them onto the inventory topic
        edgesInventoryStream.mapValues(ios -> ios != null ? ios.toByteArray() : null).to(getInventoryTopic());
    }

    // Filter out situations from the alarm stream and process them
    private void processSituations(KStream<String, OpennmsModelProtos.Alarm> allAlarmStream) {
        KStream<String, OpennmsModelProtos.Alarm> situationStream = allAlarmStream.filter((k, v) -> isSituation(k));
        situationStream.process(() -> new SituationTableProcessor(situationHandlers), SITUATION_STORE);
    }

    // From the nodes stream derive inventory and map the inventory back to the inventory topic
    private void mapNodesToInventory(StreamsBuilder builder) {
        final NodeDeserializer nodeDeserializer = new NodeDeserializer();
        KStream<String, byte[]> nodeBytesStream = builder.stream(getNodeTopic());
        KStream<String, OpennmsModelProtos.Node> nodeStream =
                nodeBytesStream.mapValues(nodeBytes -> nodeDeserializer.deserialize(null, nodeBytes));
        KStream<String, InventoryModelProtos.InventoryObjects> nodeInventoryStream = nodeStream.map((nodeCriteria,
                                                                                                     node) -> {
            final String key = INVENTORY_STORE_NODE_PREFIX + nodeCriteria;
            if (node == null) {
                return KeyValue.pair(key, null);
            }
            final InventoryModelProtos.InventoryObjects.Builder iosBuilder = InventoryModelProtos.InventoryObjects.newBuilder();
            for (InventoryModelProtos.InventoryObject io : nodeToInventory.toInventoryObjects(node)) {
                iosBuilder.addInventoryObject(io);
            }
            return KeyValue.pair(key, iosBuilder.build());
        });
        nodeInventoryStream.mapValues(ios -> ios != null ? ios.toByteArray() : null).to(getInventoryTopic());
    }

    // Process the inventory from the inventory topic now that alarms, nodes and edges have been mapped to the inventory
    // topic
    private void processInventory(StreamsBuilder builder) {
        final ProtobufDeserializer<InventoryModelProtos.InventoryObjects> inventoryObjectsDeserializer =
                new ProtobufDeserializer<>(InventoryModelProtos.InventoryObjects.class);
        KStream<String, byte[]> inventoryByteStream = builder.stream(getInventoryTopic());
        KStream<String, InventoryModelProtos.InventoryObjects> inventoryStream =
                inventoryByteStream.mapValues(iosBytes -> inventoryObjectsDeserializer.deserialize(null, iosBytes));
        inventoryStream.process(() -> new InventoryTableProcessor(inventoryHandlers, inventoryGcIntervalMs,
                inventoryTtlMs), INVENTORY_STORE);

        // Process the alarm feedback
        final AlarmFeedbackDeserializer alarmFeedbackDeserializer = new AlarmFeedbackDeserializer();
        KStream<String, byte[]> alarmFeedbackBytesStream = builder.stream(getAlarmFeedbackTopic());
        KStream<String, OpennmsModelProtos.AlarmFeedback> alarmFeedbackStream =
                alarmFeedbackBytesStream.mapValues(alarmFeedbackBytes -> alarmFeedbackDeserializer.deserialize(null,
                        alarmFeedbackBytes));
        alarmFeedbackStream.process(() -> new AlarmFeedbackTableProcessor(alarmFeedbackHandlers), ALARM_FEEDBACK_STORE);
    }

    private void createStores(StreamsBuilder builder) {
        final StoreBuilder<KeyValueStore<String, InventoryModelProtos.InventoryObjects>> inventoryStore =
                Stores.keyValueStoreBuilder(
                        Stores.persistentKeyValueStore(INVENTORY_STORE),
                        Serdes.String(),
                        OpennmsSerdes.InventoryObjects());
        final StoreBuilder<KeyValueStore<String, OpennmsModelProtos.Alarm>> alarmStore = Stores.keyValueStoreBuilder(
                Stores.persistentKeyValueStore(ALARM_STORE),
                Serdes.String(),
                OpennmsSerdes.Alarm());
        final StoreBuilder<KeyValueStore<String, OpennmsModelProtos.Alarm>> situationStore =
                Stores.keyValueStoreBuilder(
                        Stores.persistentKeyValueStore(SITUATION_STORE),
                        Serdes.String(),
                        OpennmsSerdes.Alarm());
        final StoreBuilder<KeyValueStore<String, FeedbackModelProtos.AlarmFeedbacks>> alarmFeedbackStore =
                Stores.keyValueStoreBuilder(
                        Stores.persistentKeyValueStore(ALARM_FEEDBACK_STORE),
                        Serdes.String(),
                        OpennmsSerdes.AlarmFeedbacks());
        final StoreBuilder<KeyValueStore<String, OpennmsModelProtos.TopologyEdge>> topologyEdgeStore =
                Stores.keyValueStoreBuilder(
                        Stores.persistentKeyValueStore(EDGE_STORE),
                        Serdes.String(),
                        OpennmsSerdes.TopologyEdge());

        builder.addStateStore(inventoryStore);
        builder.addStateStore(alarmStore);
        builder.addStateStore(situationStore);
        builder.addStateStore(alarmFeedbackStore);
        builder.addStateStore(topologyEdgeStore);
    }

    @Override
    public List<Alarm> getAlarms() {
        final List<Alarm> alarms = new ArrayList<>();
        try {
            waitUntilAlarmStoreIsQueryable().all().forEachRemaining(entry -> {
                alarms.add(OpennmsMapper.toAlarm(entry.value));
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return alarms;
    }

    @Override
    public List<Alarm> getAlarmsAndRegisterHandler(AlarmHandler handler) {
        final List<Alarm> alarms = new ArrayList<>();
        alarmHandlers.register(handler, (h) -> alarms.addAll(getAlarms()));
        return alarms;
    }

    @Override
    public void registerHandler(AlarmHandler handler) {
        alarmHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(AlarmHandler handler) {
        alarmHandlers.unregister(handler);
    }

    @Override
    public List<AlarmFeedback> getAlarmFeedback() {
        final List<AlarmFeedback> alarmFeedback = new ArrayList<>();
        try {
            waitUntilAlarmFeedbackStoreIsQueryable().all().forEachRemaining(entry ->
                    alarmFeedback.addAll(OpennmsMapper.toAlarmFeedbackList(entry.value))
            );
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return alarmFeedback;
    }

    @Override
    public List<AlarmFeedback> getAlarmFeedbackAndRegisterHandler(AlarmFeedbackHandler handler) {
        final List<AlarmFeedback> alarmFeedback = new ArrayList<>();
        alarmFeedbackHandlers.register(handler, (h) -> alarmFeedback.addAll(getAlarmFeedback()));
        return alarmFeedback;
    }

    @Override
    public void registerHandler(AlarmFeedbackHandler handler) {
        alarmFeedbackHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(AlarmFeedbackHandler handler) {
        alarmFeedbackHandlers.unregister(handler);
    }

    @Override
    public void registerHandler(SituationHandler handler) {
        situationHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(SituationHandler handler) {
        situationHandlers.unregister(handler);
    }

    @Override
    public List<InventoryObject> getInventory() {
        final List<InventoryModelProtos.InventoryObjects> inventory = new ArrayList<>();
        try {
            waitUntilInventoryStoreIsQueryable().all().forEachRemaining(entry -> {
                inventory.add(entry.value);
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        Set<ResourceKey> uniqueIds = new HashSet<>();

        // Discard any duplicate inventory objects
        return InventoryTableProcessor.toInventory(inventory).stream()
                .filter(io -> {
                    ResourceKey id = new ResourceKey(io.getId(), io.getType());

                    if (uniqueIds.contains(id)) {
                        return false;
                    }

                    uniqueIds.add(id);

                    return true;
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<InventoryObject> getInventoryAndRegisterHandler(InventoryHandler handler) {
        final List<InventoryObject> inventory = new ArrayList<>();
        inventoryHandlers.register(handler, (h) -> inventory.addAll(getInventory()));
        return inventory;
    }

    @Override
    public void registerHandler(InventoryHandler handler) {
        inventoryHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(InventoryHandler handler) {
        inventoryHandlers.unregister(handler);
    }

    @Override
    public List<Situation> getSituations() {
        final List<Situation> situations = new ArrayList<>();
        try {
            waitUntilSituationStoreIsQueryable().all().forEachRemaining(entry -> {
                situations.add(OpennmsMapper.toSituation(entry.value));
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return situations;
    }

    private ReadOnlyKeyValueStore<String, OpennmsModelProtos.Alarm> waitUntilSituationStoreIsQueryable() throws InterruptedException {
        return waitUntilStoreIsQueryable(SITUATION_STORE);
    }

    private ReadOnlyKeyValueStore<String, OpennmsModelProtos.Alarm> waitUntilAlarmStoreIsQueryable() throws InterruptedException {
        return waitUntilStoreIsQueryable(ALARM_STORE);
    }

    private ReadOnlyKeyValueStore<String, InventoryModelProtos.InventoryObjects> waitUntilInventoryStoreIsQueryable() throws InterruptedException {
        return waitUntilStoreIsQueryable(INVENTORY_STORE);
    }

    private ReadOnlyKeyValueStore<String, FeedbackModelProtos.AlarmFeedbacks> waitUntilAlarmFeedbackStoreIsQueryable() throws InterruptedException {
        return waitUntilStoreIsQueryable(ALARM_FEEDBACK_STORE);
    }

    private <K,V> ReadOnlyKeyValueStore<K, V> waitUntilStoreIsQueryable(String storeName) throws InterruptedException {
        if (streams == null) {
            throw new IllegalStateException("Datasource must be started first.");
        }
        while (true) {
            try {
                return streams.store(storeName, QueryableStoreTypes.keyValueStore());
            } catch (InvalidStateStoreException ignored) {
                Thread.sleep(100);
            }
        }
    }

    @Override
    public void forwardSituation(Situation situation) {
        if (situation.getAlarms().size() < 1) {
            LOG.warn("Got situation with no alarms. Ignoring.");
            return;
        }

        final Event e = SituationToEvent.toEvent(situation);
        final String situationXml = JaxbUtils.toXml(new Log(e), Log.class);
        LOG.debug("Sending event to create situation with id '{}'. XML: {}", situation.getId(), situationXml);
        producer.send(new ProducerRecord<>(getEventSinkTopic(), situationXml), (metadata, ex) -> {
            if (ex != null) {
                LOG.warn("An error occurred while sending event for situation with id '{}'.", situation.getId(), ex);
            } else {
                LOG.debug("Successfully sent event for situation with id '{}'.", situation.getId());
            }
        });
    }

    private static boolean isSituation(String reductionKey) {
        return reductionKey.startsWith(SituationToEvent.SITUATION_UEI);
    }

    public String getAlarmTopic() {
        return alarmTopic;
    }

    public void setAlarmTopic(String alarmTopic) {
        this.alarmTopic = alarmTopic;
    }

    public String getAlarmFeedbackTopic() {
        return alarmFeedbackTopic;
    }

    public void setAlarmFeedbackTopic(String alarmFeedbackTopic) {
        this.alarmFeedbackTopic = alarmFeedbackTopic;
    }

    public String getNodeTopic() {
        return nodeTopic;
    }

    public void setNodeTopic(String nodeTopic) {
        this.nodeTopic = nodeTopic;
    }

    public String getEventSinkTopic() {
        return eventSinkTopic;
    }

    public void setEventSinkTopic(String eventSinkTopic) {
        this.eventSinkTopic = eventSinkTopic;
    }

    public String getInventoryTopic() {
        return inventoryTopic;
    }

    public void setInventoryTopic(String inventoryTopic) {
        this.inventoryTopic = inventoryTopic;
    }
    
    public String getEdgesTopic() {
        return edgesTopic;
    }

    public void setEdgesTopic(String edgesTopic) {
        this.edgesTopic = edgesTopic;
    }

    public long getInventoryGcIntervalMs() {
        return inventoryGcIntervalMs;
    }

    public void setInventoryGcIntervalMs(long inventoryGcIntervalMs) {
        this.inventoryGcIntervalMs = inventoryGcIntervalMs;
    }

    public long getInventoryTtlMs() {
        return inventoryTtlMs;
    }

    public void setInventoryTtlMs(long inventoryTtlMs) {
        this.inventoryTtlMs = inventoryTtlMs;
    }

    @Override
    public void waitUntilReady() throws InterruptedException {
        // These will block until Kafka is available and the topics are created
        LOG.debug("Waiting for inventory store...");
        waitUntilInventoryStoreIsQueryable();
        LOG.debug("Waiting for alarm store...");
        waitUntilAlarmStoreIsQueryable();
        LOG.debug("Waiting for situation store...");
        waitUntilSituationStoreIsQueryable();
        LOG.debug("Waiting for alarm feedback store...");
        waitUntilAlarmFeedbackStoreIsQueryable();
        LOG.debug("All stores are available");
    }
}
