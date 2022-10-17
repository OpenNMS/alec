/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
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

package org.opennms.alec.rest;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.CreateSituationPayload;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.SituationStatus;
import org.opennms.alec.data.SituationStatusImpl;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SituationRestImpl implements SituationRest {
    private static final Logger LOG = LoggerFactory.getLogger(SituationRestImpl.class);
    public static final String SITUATION_NOT_FOUND = "Situation {0} not found";
    public static final String ALARM_NOT_FOUND = "Alarm {0} not found";
    public static final String NEED_2_ALARMS = "We need at least two alarms to create a situation, we found {} alarm";

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationDatasource situationDatasource;
    private final AlarmDatasource alarmDatasource;

    public SituationRestImpl(KeyValueStore<String> kvStore,
                             SituationDatasource situationDatasource,
                             AlarmDatasource alarmDatasource) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        objectMapper = new ObjectMapper();
    }

    @Override
    public Response rejected(String situationId) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Situation situation = situationOptional.get();
            //check status
            if (Status.REJECTED.equals(situation.getStatus())) {
                LOG.debug("Situation {} already rejected", situationId);
                return Response.accepted(MessageFormat.format("Situation {0} already rejected", situationId)).build();
            }

            try {
                situationDatasource.forwardSituation(ImmutableSituation.newBuilderFrom(situation).setStatus(Status.REJECTED).build());
                storeMLSituations();
                return Response.ok().build();
            } catch (InterruptedException e) {
                throw e;
            } catch (Exception e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
    }

    @Override
    public Response accepted(String situationId) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Situation situation = situationOptional.get();
            //check status
            if (Status.ACCEPTED.equals(situation.getStatus())) {
                LOG.debug("Situation {} already accepted", situationId);
                return Response.accepted(MessageFormat.format("Situation {0} already accepted", situationId)).build();
            }

            //Update situation
            try {
                situationDatasource.forwardSituation(ImmutableSituation.newBuilderFrom(situation).setStatus(Status.ACCEPTED).build());
                storeMLSituations();
                return Response.ok().build();
            } catch (InterruptedException e) {
                throw e;
            } catch (Exception e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
    }

    @Override
    public Response getSituationStatusList() throws InterruptedException {
        List<SituationStatus> situationStatusList = new ArrayList<>();
        situationDatasource.getSituationsWithAlarmId().forEach(o -> situationStatusList.add(SituationStatusImpl.newBuilder()
                .id(o.getId())
                .status(o.getStatus())
                .build()));
        List<SituationStatus> sorted = situationStatusList.stream().sorted(Comparator.comparing(SituationStatus::getStatus)).collect(Collectors.toList());
        return Response.ok(sorted).build();
    }

    @Override
    public Response getSituationList() throws InterruptedException {
        List<Situation> situations = situationDatasource.getSituationsWithAlarmId();
        return Response.ok(situations).build();
    }

    @Override
    public Response addAlarm(String situationId, String alarmId) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Optional<Alarm> alarmOptional = alarmDatasource.getAlarm(Integer.parseInt(alarmId));
            if (alarmOptional.isPresent()) {
                if (alarmIsNotInAnotherSituation(alarmOptional.get().getReductionKey())) {
                    Situation oldSituation = situationOptional.get();
                    Set<Alarm> alarms = new HashSet<>(oldSituation.getAlarms());
                    alarms.add(alarmOptional.get());
                    return forwardAndStoreSituation(oldSituation, alarms);
                } else {
                    LOG.warn("Alarm {} is already in a situation, thus it will not be added to situation {}", alarmId, situationId);
                    return Response.status(Response.Status.CONFLICT).entity(MessageFormat.format("Alarm {0} is already in a situation", alarmId)).build();
                }
            } else {
                LOG.warn("Alarm {} not found, thus it will not be added to situation {}", alarmId, situationId);
                return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(ALARM_NOT_FOUND, alarmId)).build();
            }
        } else {
            LOG.warn("Situation {} not found, thus alarm {} will not be added to the situation", situationId, alarmId);
            return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
        }
    }

    @Override
    public Response removeAlarm(String situationId, String alarmId) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Optional<Alarm> alarmOptional = alarmDatasource.getAlarm(Integer.parseInt(alarmId));
            if (alarmOptional.isPresent()) {
                Situation oldSituation = situationOptional.get();
                Set<Alarm> alarms = oldSituation.getAlarms()
                        .stream()
                        .filter(alarm -> !alarmOptional.get().getReductionKey().equals(alarm.getReductionKey()))
                        .collect(Collectors.toUnmodifiableSet());
                return forwardAndStoreSituation(oldSituation, alarms);
            } else {
                LOG.warn("Alarm {} not found, thus it will not be removed from situation {}", alarmId, situationId);
                return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(ALARM_NOT_FOUND, alarmId)).build();
            }
        } else {
            LOG.warn("Situation {} not found, thus alarm {} will not be removed from the situation", situationId, alarmId);
            return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
        }
    }

    @Override
    public Response createSituation(CreateSituationPayload createSituationPayload) {
        List<String> alarmIdList = createSituationPayload.getAlarmIdList();
        if (alarmIdList.size() <= 1) {
            return Response.status(Response.Status.BAD_REQUEST).entity(MessageFormat.format(NEED_2_ALARMS, alarmIdList.size())).build();
        }
        Set<Alarm> alarms = new HashSet<>();
        for (String id : alarmIdList) {
            try {
                Optional<Alarm> alarm = alarmDatasource.getAlarm(Integer.parseInt(id));
                if (alarm.isPresent() && alarmIsNotInAnotherSituation(alarm.get().getReductionKey())) {
                    alarms.add(alarm.get());
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return somethingWentWrong(e);
            }
        }
        if (alarms.size() <= 1) {
            return Response.status(Response.Status.BAD_REQUEST).entity(MessageFormat.format(NEED_2_ALARMS, alarms.size())).build();
        }
        final String situationId = UUID.randomUUID().toString();
        Situation situation = ImmutableSituation.newBuilder()
                .setId(situationId)
                .setCreationTime(System.currentTimeMillis())
                .setAlarms(alarms)
                .setDiagnosticText(createSituationPayload.getDiagnosticText())
                .setDescription(createSituationPayload.getDescription())
                .build();
        situationDatasource.forwardSituation(situation);
        return Response.ok().build();
    }

    private boolean alarmIsNotInAnotherSituation(String reductionKey) throws InterruptedException {
        for (Situation situation : situationDatasource.getSituations()) {
            for (Alarm alarm : situation.getAlarms()) {
                if (reductionKey.equals(alarm.getReductionKey())) {
                    LOG.debug("Alarm {} is in another situation", alarm.getReductionKey());
                    return false;
                }
            }
        }
        return true;
    }

    private Response forwardAndStoreSituation(Situation oldSituation, Set<Alarm> alarms) throws InterruptedException {
        try {
            Situation newSituation = ImmutableSituation.newBuilderFrom(oldSituation).setAlarms(alarms).build();
            situationDatasource.forwardSituation(newSituation);
            storeMLSituations();
            return Response.ok().build();
        } catch (InterruptedException e) {
            throw e;
        } catch (Exception e) {
            return somethingWentWrong(e);
        }
    }

    private void storeMLSituations() throws JsonProcessingException, InterruptedException {
        List<Situation> acceptedSituations = situationDatasource.getSituationsWithAlarmId().stream()
                .filter(s -> Status.ACCEPTED.equals(s.getStatus()))
                .collect(Collectors.toList());
        List<Situation> rejectedSituations = situationDatasource.getSituationsWithAlarmId().stream()
                .filter(s -> Status.REJECTED.equals(s.getStatus()))
                .collect(Collectors.toList());

        kvStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(acceptedSituations), ALECRestImpl.ALEC_CONFIG);
        kvStore.put(KeyEnum.REJECTED_SITUATION.toString(), objectMapper.writeValueAsString(rejectedSituations), ALECRestImpl.ALEC_CONFIG);
    }

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity(MessageFormat.format("something went wrong: {0}", e.getMessage())).build();
    }
}
