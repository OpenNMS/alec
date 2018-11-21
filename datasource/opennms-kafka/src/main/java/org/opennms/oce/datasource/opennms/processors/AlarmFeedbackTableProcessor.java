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

package org.opennms.oce.datasource.opennms.processors;

import java.util.Objects;

import org.apache.kafka.streams.processor.Processor;
import org.apache.kafka.streams.processor.ProcessorContext;
import org.apache.kafka.streams.state.KeyValueStore;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.AlarmFeedbackHandler;
import org.opennms.oce.datasource.common.HandlerRegistry;
import org.opennms.oce.datasource.opennms.OpennmsDatasource;
import org.opennms.oce.datasource.opennms.OpennmsMapper;
import org.opennms.oce.datasource.opennms.proto.FeedbackModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AlarmFeedbackTableProcessor implements Processor<String, OpennmsModelProtos.AlarmFeedback> {
    private final Logger LOG = LoggerFactory.getLogger(AlarmFeedbackTableProcessor.class);
    private final HandlerRegistry<AlarmFeedbackHandler> alarmFeedbackHandlers;
    private KeyValueStore<String, FeedbackModelProtos.AlarmFeedbacks> kvStore;

    public AlarmFeedbackTableProcessor(HandlerRegistry<AlarmFeedbackHandler> alarmFeedbackHandlers) {
        this.alarmFeedbackHandlers = Objects.requireNonNull(alarmFeedbackHandlers);
    }

    @Override
    @SuppressWarnings("unchecked")
    public void init(ProcessorContext context) {
        // retrieve the key-value store
        kvStore = (KeyValueStore) context.getStateStore(OpennmsDatasource.ALARM_FEEDBACK_STORE);
    }

    @Override
    public void process(String alarmKey, OpennmsModelProtos.AlarmFeedback alarmFeedback) {
        if (alarmFeedback != null) {
            // Store the AlarmFeedbacks object with just a single feedback for now
            kvStore.put(alarmKey,
                    FeedbackModelProtos.AlarmFeedbacks.newBuilder().addAlarmFeedback(alarmFeedback).build());
            alarmFeedbackHandlers.forEach(h -> {
                try {
                    h.handleAlarmFeedback(OpennmsMapper.toAlarmFeedback(alarmFeedback));
                } catch (Exception e) {
                    LOG.error("handleAlarmFeedback() call failed with feedback: {} on handler: {}",
                            alarmFeedback, h, e);
                }
            });
        } else {
            final FeedbackModelProtos.AlarmFeedbacks prevAlarmFeedbacks = kvStore.delete(alarmKey);
            if (prevAlarmFeedbacks != null) {
                // For now we assume the AlarmFeedbacks container contains a single feedback
                AlarmFeedback prevAlarmFeedback = OpennmsMapper.toAlarmFeedback(prevAlarmFeedbacks.getAlarmFeedback(0));
                alarmFeedbackHandlers.forEach(h -> {
                    try {
                        h.handleAlarmFeedback(prevAlarmFeedback);
                    } catch (Exception e) {
                        LOG.error("handleAlarmFeedback() call failed with feedback: {} on handler: {}",
                                prevAlarmFeedback, h, e);
                    }
                });
            }
        }
    }

    @Override
    public void close() {
        // pass, no external resources managed by this processor
    }
}
