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
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.TimeUnit;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.junit.Test;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.AlarmFeedbackHandler;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;

/**
 * Verifies the basic functions of an alarm feedback datasource.
 */
public class OpennmsAlarmFeedbackDatasourceIT extends OpennmsDatasourceIT implements AlarmFeedbackHandler {
    private final List<AlarmFeedback> receivedAlarmFeedback = new CopyOnWriteArrayList<>();

    @Test(timeout = 60000)
    public void canHandleAlarmFeedback() throws IOException {
        datasource.init();

        // No alarm feedback initially
        assertThat(datasource.getAlarmFeedback(), hasSize(0));

        // Send one alarm feedback
        OpennmsModelProtos.AlarmFeedback alarmFeedback = OpennmsModelProtos.AlarmFeedback.newBuilder()
                .setAlarmKey("alarm1")
                .setSituationKey("situation1")
                .setFeedbackType(OpennmsModelProtos.AlarmFeedback.FeedbackType.FALSE_POSITIVE)
                .setTimestamp(System.currentTimeMillis())
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmFeedbackTopic(), alarmFeedback.getAlarmKey(),
                alarmFeedback.toByteArray()));

        // Expect a single alarm to be present in the datasource
        await().atMost(10, TimeUnit.SECONDS).until(() -> datasource.getAlarmFeedback(), hasSize(1));
        // Now register a handler
        assertThat(datasource.getAlarmFeedbackAndRegisterHandler(this), hasSize(1));
        // We should not have received any callbacks yet
        assertThat(receivedAlarmFeedback, hasSize(0));

        // Send another alarm feedback
        alarmFeedback = OpennmsModelProtos.AlarmFeedback.newBuilder()
                .setAlarmKey("alarm2")
                .setSituationKey("situation2")
                .setFeedbackType(OpennmsModelProtos.AlarmFeedback.FeedbackType.FALSE_POSITIVE)
                .setTimestamp(System.currentTimeMillis())
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmFeedbackTopic(), alarmFeedback.getAlarmKey(),
                alarmFeedback.toByteArray()));

        // Both feedback should be present in the datasource
        await().atMost(10, TimeUnit.SECONDS).until(() -> datasource.getAlarmFeedback(), hasSize(2));
        // We should have received a callback
        assertThat(receivedAlarmFeedback, hasSize(1));

        datasource.unregisterHandler(this);
    }

    @Test(timeout = 120000)
    public void canHandleExistingAlarmFeedback() throws IOException {
        datasource.init();

        // No alarm feedback initially
        assertThat(datasource.getAlarmFeedback(), hasSize(0));

        // Send one alarm feedback
        OpennmsModelProtos.AlarmFeedback alarmFeedback = OpennmsModelProtos.AlarmFeedback.newBuilder()
                .setAlarmKey("alarm1")
                .setSituationKey("situation1")
                .setFeedbackType(OpennmsModelProtos.AlarmFeedback.FeedbackType.FALSE_POSITIVE)
                .setTimestamp(System.currentTimeMillis())
                .build();
        producer.send(new ProducerRecord<>(datasource.getAlarmFeedbackTopic(), alarmFeedback.getAlarmKey(),
                alarmFeedback.toByteArray()));

        // Expect a single alarm to be present in the datasource
        await().atMost(10, TimeUnit.SECONDS).until(() -> datasource.getAlarmFeedback(), hasSize(1));

        // Stop & restart
        datasource.destroy();
        // (Re)create the datasource
        ScriptedInventoryService inventoryService = new ScriptedInventoryImpl("src/main/resources/inventory.groovy");
        NodeToInventory nodeToInventory = new NodeToInventory(inventoryService);
        AlarmToInventory alarmToInventory = new AlarmToInventory(inventoryService);
        EdgeToInventory edgeToInventory = new EdgeToInventory(inventoryService);
        datasource = new OpennmsDatasource(getDatasourceConfig(), nodeToInventory, alarmToInventory, edgeToInventory);
        datasource.init();

        // One alarm feedback initially
        assertThat(datasource.getAlarmFeedback(), hasSize(1));

        // Now register a handler
        assertThat(datasource.getAlarmFeedbackAndRegisterHandler(this), hasSize(1));
        // We should not have received any callbacks yet
        assertThat(receivedAlarmFeedback, hasSize(0));

        datasource.unregisterHandler(this);
    }

    @Override
    public void handleAlarmFeedback(AlarmFeedback alarmFeedback) {
        receivedAlarmFeedback.add(alarmFeedback);
    }
}
