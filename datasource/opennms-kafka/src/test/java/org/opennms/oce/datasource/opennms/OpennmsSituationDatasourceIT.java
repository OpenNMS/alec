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

import static org.awaitility.Awaitility.await;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.junit.Test;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.SituationBean;
import org.opennms.oce.datasource.opennms.events.JaxbUtils;
import org.opennms.oce.datasource.opennms.events.Log;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.springframework.kafka.test.utils.KafkaTestUtils;

/**
 * Verifies the basic functions of an situation datasource.
 */
public class OpennmsSituationDatasourceIT extends OpennmsDatasourceIT {

    @Test(timeout=60000)
    public void canForwardSituation() throws IOException {
        datasource.init();

        SituationBean situation = new SituationBean();

        AlarmBean alarm = new AlarmBean();
        alarm.setId("a1");
        situation.getAlarms().add(alarm);
        datasource.forwardSituation(situation);

        // Verify the situation was forwarded to Kafka
        Map<String, Object> props = KafkaTestUtils.consumerProps("test", "true", embeddedKafka);
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
        KafkaConsumerRunner runner = new KafkaConsumerRunner(consumer);
        Thread t = new Thread(runner);
        t.start();

        await().atMost(10, TimeUnit.SECONDS).until(runner::getEventLogs, hasSize(1));
        runner.shutdown();
    }

    @Test(timeout=60000)
    public void canRetrieveSituations() throws IOException {
        datasource.init();
        assertThat(datasource.getSituations(), hasSize(0));

        OpennmsModelProtos.Alarm alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey(String.format("%s::%d", SituationToEvent.SITUATION_UEI, 1))
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), alarm.toByteArray()));

        await().atMost(10, TimeUnit.SECONDS).until(() -> datasource.getSituations(), hasSize(1));
    }

    public class KafkaConsumerRunner implements Runnable {
        private final AtomicBoolean closed = new AtomicBoolean(false);
        private final KafkaConsumer<String, String> consumer;

        private final List<Log> eventLogs = new ArrayList<>();

        public KafkaConsumerRunner(KafkaConsumer<String, String> consumer) {
            this.consumer = Objects.requireNonNull(consumer);
        }

        public void run() {
            try {
                consumer.subscribe(Collections.singletonList(datasource.getEventSinkTopic()));
                while (!closed.get()) {
                    ConsumerRecords<String, String> records = consumer.poll(10000);
                    for (ConsumerRecord<String, String> record : records) {
                        eventLogs.add(JaxbUtils.fromXml(record.value(), Log.class));
                    }
                }
            } catch (WakeupException e) {
                // Ignore exception if closing
                if (!closed.get()) throw e;
            } finally {
                consumer.close();
            }
        }

        public List<Log> getEventLogs() {
            return eventLogs;
        }

        // Shutdown hook which can be called from a separate thread
        public void shutdown() {
            closed.set(true);
            consumer.wakeup();
        }
    }

}
