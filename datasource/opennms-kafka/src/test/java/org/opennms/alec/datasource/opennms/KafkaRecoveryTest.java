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

package org.opennms.alec.datasource.opennms;

import static org.awaitility.Awaitility.await;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.times;

import java.lang.reflect.Method;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.streams.processor.internals.StreamThread;
import org.junit.Test;
import org.mockito.Mockito;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmHandler;
import org.opennms.alec.datasource.opennms.proto.OpennmsModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/** Makes sure that we can recover after the connection to Kafka is lost. */
public class KafkaRecoveryTest extends OpennmsDatasourceIT implements AlarmHandler {

    private static final Logger LOG = LoggerFactory.getLogger(KafkaRecoveryTest.class);

    private final Map<String, Alarm> alarmsCreatedOrUpdatedById = new LinkedHashMap<>();
    private final Map<String, Alarm> alarmsClearedById = new LinkedHashMap<>();

    @Test
    public void canHandleAlarms() throws Exception {
        datasource.init();

        // No alarms initially
        assertThat(datasource.getAlarms(), hasSize(0));

        // Send one alarm
        OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey("nodeDown::1")
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), alarm.toByteArray()));

        // Expect a single alarm to be present in the datasource
        await().atMost(10, TimeUnit.SECONDS).until(() -> datasource.getAlarms(), hasSize(1));
        // Now register a handler
        assertThat(datasource.getAlarmsAndRegisterHandler(this), hasSize(1));
        // We should not have received any callbacks yet
        assertThat(alarmsCreatedOrUpdatedById.entrySet(), hasSize(0));
        assertThat(alarmsClearedById.entrySet(), hasSize(0));

        // Simulate a problem with KafkaStreams in OpennmsDatsource:
        // Stop all StreamsThreads and wait for the KafkaStreamMonitor to restart the OpennmsDatasource
        LOG.info("Trigger KafkaStream problem.");
        // "Kill" all threads
        for (Thread t : Thread.getAllStackTraces().keySet()) {
            if (t instanceof StreamThread) {
                LOG.info("Stopping Thread: " + t.getName());
                StreamThread thread = (StreamThread)t;
                thread.shutdown();
                Method method = thread.getClass().getDeclaredMethod("setState", StreamThread.State.class);
                method.setAccessible(true);
                method.invoke(thread, StreamThread.State.DEAD); // make sure we are really dead
            }
        }

        // lets wait a bit to allow OpennmsDatsource initialize
        Thread.sleep(2000);

        // make sure initialize was actually called:
        Mockito.verify(datasource, times(2)).init();

        // Send another alarm
        alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey("nodeDown::1")
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), alarm.toByteArray()));

        // We should have received an update callback via the handler
        await().atMost(100, TimeUnit.SECONDS).until(alarmsCreatedOrUpdatedById::keySet, hasSize(1));
        assertThat(alarmsClearedById.entrySet(), hasSize(0));

        // Send a clear
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), null));
        // We should have received a clear callback via the handler
        await().atMost(100, TimeUnit.SECONDS).until(alarmsClearedById::keySet, hasSize(1));

        // Done
        datasource.unregisterHandler(this);
    }

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        alarmsCreatedOrUpdatedById.put(alarm.getId(), alarm);
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        alarmsClearedById.put(alarm.getId(), alarm);
    }
}
