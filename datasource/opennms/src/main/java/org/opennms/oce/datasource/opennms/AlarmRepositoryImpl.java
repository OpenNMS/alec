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
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Properties;
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
import org.opennms.oce.datasource.common.AlarmBean;
import org.osgi.service.cm.ConfigurationAdmin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.protobuf.InvalidProtocolBufferException;

public class AlarmRepositoryImpl {

    private static final Logger LOG = LoggerFactory.getLogger(AlarmRepositoryImpl.class);

    private final ConfigurationAdmin configAdmin;

    private static final String ALARM_STORE_NAME = "alarm_store";
    private static final String KAFKA_STREAMS_PID = "org.opennms.oce.connector.client.kafka.streams";
    //private final Set<AlarmHandler> handlers = new HashSet<>();
    private final Map<String, OpennmsModelProtos.Alarm> alarmsByReductionKey = new HashMap<>();

    private String alarmTopic;
    private String eventTopic;
    private String nodeTopic;

    private KafkaStreams streams;

    public AlarmRepositoryImpl(ConfigurationAdmin configAdmin) {
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

        LOG.info("handleNewOrUpdatedAlarm({}, {})", reductionKey, alarm);
        if (alarm == null) {
            OpennmsModelProtos.Alarm lastAlarm = alarmsByReductionKey.get(reductionKey);
            if (lastAlarm != null) {
                //handlers.forEach(h -> h.onAlarmCleared(new AlarmImpl(lastAlarm)));
            } else {
                LOG.warn("No existing alarm found for reduction key {}. Skipping callbacks.", reductionKey);
            }
        } else {
            //handlers.forEach(h -> h.onAlarmCreatedOrUpdated(new AlarmImpl(alarm)));
        }
        alarmsByReductionKey.put(reductionKey, alarm);
    }

    public List<AlarmBean> getAlarms() {
        final List<AlarmBean> alarms = new ArrayList<>();
        try {
            waitUntilStoreIsQueryable().all().forEachRemaining(entry -> {
                try {
                    final OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.parseFrom(entry.value);
                    alarms.add(toAlarm(alarm));
                } catch (InvalidProtocolBufferException e) {
                    LOG.error("Failed to parse alarm from bytes.", e);
                }
            });
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return alarms;
    }

    private static AlarmBean toAlarm(OpennmsModelProtos.Alarm alarm) {
        throw new RuntimeException("TODO");
    }

    private ReadOnlyKeyValueStore<String, byte[]> waitUntilStoreIsQueryable() throws InterruptedException {
        while (true) {
            try {
                return streams.store(ALARM_STORE_NAME, QueryableStoreTypes.keyValueStore());
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
        streamsProperties.put(StreamsConfig.APPLICATION_ID_CONFIG, "oce-connector");
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
