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

package org.opennms.alec.datasource.opennms.processors;

import java.util.Objects;
import java.util.Optional;

import org.apache.kafka.streams.processor.Processor;
import org.apache.kafka.streams.processor.ProcessorContext;
import org.apache.kafka.streams.state.KeyValueStore;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.datasource.common.HandlerRegistry;
import org.opennms.alec.datasource.opennms.OpennmsDatasource;
import org.opennms.alec.datasource.opennms.OpennmsMapper;
import org.opennms.alec.datasource.opennms.SituationToEvent;
import org.opennms.alec.datasource.opennms.proto.OpennmsModelProtos;
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

            final Situation situation;
            try {
                situation = OpennmsMapper.toSituation(alarm);
            } catch (Exception e) {
                LOG.warn("An error occurred while mapping a situation. It will be ignored. Situation: {}", alarm, e);
                return;
            }

            situationHandlers.forEach(h -> {
                try {
                    h.onSituation(situation);
                } catch (Exception e) {
                    LOG.error("onSituation() call failed with situation: {} on handler: {}", situation, h, e);
                }
            });
        } else {
            OpennmsModelProtos.Alarm deletedSituation = kvStore.delete(reductionKey);

            if (deletedSituation == null) {
                LOG.warn("No situation was found in the kv store for reduction key {}", reductionKey);

                return;
            }

            situationHandlers.forEach(h -> {
                try {
                    //noinspection ConstantConditions
                    Optional<String> deletedSituationId = deletedSituation.getLastEvent().getParameterList().stream()
                            .filter(parm -> parm.getName().equals(SituationToEvent.SITUATION_ID_PARM_NAME))
                            .map(OpennmsModelProtos.EventParameter::getValue)
                            .findFirst();

                    if (deletedSituationId.isPresent()) {
                        h.onSituationDeleted(deletedSituationId.get());
                    } else {
                        LOG.warn("Could not find situation Id for situation {}", deletedSituation);
                    }
                } catch (Exception e) {
                    LOG.error("onSituationDeleted() call failed with situation: {} on handler: {}", deletedSituation,
                            h, e);
                }
            });
        }
    }

    @Override
    public void close() {
        // pass, no external resources managed by this processor
    }
}
