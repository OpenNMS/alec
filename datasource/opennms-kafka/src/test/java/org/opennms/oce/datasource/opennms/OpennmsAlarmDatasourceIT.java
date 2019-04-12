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
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

/**
 * Verifies the basic functions of an alarm datasource.
 */
public class OpennmsAlarmDatasourceIT extends OpennmsDatasourceIT implements AlarmHandler {

    private Map<String, Alarm> alarmsCreatedOrUpdatedById = new LinkedHashMap<>();
    private Map<String, Alarm> alarmsClearedById = new LinkedHashMap<>();

    @Test(timeout=60000)
    public void canHandleAlarms() throws IOException {
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

        // Send another alarm
        alarm = OpennmsModelProtos.Alarm.newBuilder()
                .setReductionKey("nodeDown::1")
                .setLastEventTime(1)
                .setSeverity(OpennmsModelProtos.Severity.CRITICAL)
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), alarm.toByteArray()));

        // We should have received an update callback via the handler
        await().atMost(10, TimeUnit.SECONDS).until(() -> alarmsCreatedOrUpdatedById.entrySet(), hasSize(1));
        assertThat(alarmsClearedById.entrySet(), hasSize(0));

        // Send a clear
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), null));
        // We should have received a clear callback via the handler
        await().atMost(10, TimeUnit.SECONDS).until(() -> alarmsClearedById.entrySet(), hasSize(1));

        // Done
        datasource.unregisterHandler(this);
    }

    @Test(timeout=120000)
    public void canHandleExistingAlarms() throws IOException {
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

        // Stop & restart
        datasource.destroy();
        // (Re)create the datasource
        ScriptedInventoryService inventoryService = OpennmsKafkaScriptedInventory.withDefaults();
        NodeToInventory nodeToInventory = new NodeToInventory(inventoryService);
        AlarmToInventory alarmToInventory = new AlarmToInventory(inventoryService);
        EdgeToInventory edgeToInventory = new EdgeToInventory(inventoryService);
        datasource = new OpennmsDatasource(getDatasourceConfig(), nodeToInventory, alarmToInventory, edgeToInventory);
        datasource.init();

        // One alarm initially
        assertThat(datasource.getAlarms(), hasSize(1));

        // Now register a handler
        assertThat(datasource.getAlarmsAndRegisterHandler(this), hasSize(1));
        // We should not have received any callbacks yet
        assertThat(alarmsCreatedOrUpdatedById.entrySet(), hasSize(0));
        assertThat(alarmsClearedById.entrySet(), hasSize(0));

        // Send a clear
        producer.send(new ProducerRecord<>(datasource.getAlarmTopic(), alarm.getReductionKey(), null));
        // We should have received a clear callback via the handler
        await().atMost(10, TimeUnit.SECONDS).until(() -> alarmsClearedById.entrySet(), hasSize(1));

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
