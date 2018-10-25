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
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.opennms.HandlerRegistry;
import org.opennms.oce.datasource.opennms.OpennmsDatasource;
import org.opennms.oce.datasource.opennms.OpennmsMapper;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SituationTableProcessor implements Processor<String, OpennmsModelProtos.Alarm> {
    private final Logger LOG = LoggerFactory.getLogger(SituationTableProcessor.class);
    private KeyValueStore<String, OpennmsModelProtos.Alarm> kvStore;
    private final HandlerRegistry<SituationHandler> situationHandlers;

    public SituationTableProcessor(HandlerRegistry<SituationHandler> situationHandlers) {
        this.situationHandlers = Objects.requireNonNull(situationHandlers);
    }
    
    @Override
    @SuppressWarnings("unchecked")
    public void init(ProcessorContext context) {
        // retrieve the key-value store
        kvStore = (KeyValueStore) context.getStateStore(OpennmsDatasource.SITUATION_STORE);
    }

    @Override
    public void process(String reductionKey, OpennmsModelProtos.Alarm alarm) {
        if (alarm != null) {
            kvStore.put(reductionKey, alarm);
            Situation situation = OpennmsMapper.toSituation(alarm);
            situationHandlers.forEach(h -> {
                try {
                    h.onSituation(situation);
                } catch (Exception e) {
                    LOG.error("onSituation() call failed with situation: {} on handler: {}", situation, h, e);
                }
            });
        } else {
            kvStore.delete(reductionKey);
        }
    }

    @Override
    public void punctuate(long timestamp) {
        // this method is deprecated and should not be used anymore
    }

    @Override
    public void close() {
        // pass, no external resources managed by this processor
    }
}
