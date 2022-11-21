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
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.CreateSituationPayload;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.SituationStatus;
import org.opennms.alec.data.SituationStatusImpl;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.grpc.GrpcConnectionConfig;
import org.opennms.alec.grpc.SituationClient;
import org.opennms.alec.mapper.SituationToSituationProto;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.opennms.integration.api.v1.runtime.RuntimeInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

public class SituationRestImpl implements SituationRest {
    private static final Logger LOG = LoggerFactory.getLogger(SituationRestImpl.class);
    public static final String TARGET = "alec.onms-dp-dev.dev.nonprod.dataservice.opennms.com:443";
    public static final String SITUATION_NOT_FOUND = "Situation {0} not found";
    public static final String ALARM_NOT_FOUND = "Alarm {0} not found";
    public static final String NEED_2_ALARMS = "We need at least two alarms to create a situation, we found {0} alarm";

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationDatasource situationDatasource;
    private final SituationClient client;
    private final ManagedChannel channel;
    private final AlarmDatasource alarmDatasource;
    private final RuntimeInfo runtimeInfo;

    public SituationRestImpl(KeyValueStore<String> kvStore,
                             SituationDatasource situationDatasource,
                             AlarmDatasource alarmDatasource,
                             RuntimeInfo runtimeInfo,
                             GrpcConnectionConfig grpcConnectionConfig) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        this.runtimeInfo = Objects.requireNonNull(runtimeInfo);
        objectMapper = new ObjectMapper();

        //channel to store situations
        channel = ManagedChannelBuilder.forAddress(grpcConnectionConfig.getHost(), grpcConnectionConfig.getPort())
                .build();

        client = new SituationClient(channel, new SituationToSituationProto(), canWeStore(kvStore));
    }

    @Override
    public Response rejected(String situationId, String feedback) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Situation situation = situationOptional.get();
            //check status
            if (Status.REJECTED.equals(situation.getStatus())) {
                LOG.debug("Situation {} already rejected", situationId);
                return Response.accepted(MessageFormat.format("Situation {0} already rejected", situationId)).build();
            }

            try {
                feedback = String.format("reject situation [%s] -- user feedback :[%s]", situationId, feedback);
                //Store rejected situation to the cloud before removing related alarms
                client.sendSituation(ImmutableSituation.newBuilderFrom(situation)
                                .setStatus(Status.REJECTED)
                                .setAlarms(situation.getAlarms())
                                .addFeedback(feedback)
                                .build(),
                        runtimeInfo.getSystemId());
                kvStoreSituationsByStatus();

                //Free alarms and Forward situation to opennms
                situationDatasource.forwardSituation(ImmutableSituation.newBuilderFrom(situation)
                        .setStatus(Status.REJECTED)
                        .setAlarms(Collections.emptySet())
                        .setSeverity(Severity.NORMAL)
                        .addFeedback(feedback)
                        .build());

                return Response.ok().build();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return ALECRestUtils.somethingWentWrong(e);
            } catch (Exception e) {
                return ALECRestUtils.somethingWentWrong(e);
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
            try {
                ImmutableSituation immutableSituation = ImmutableSituation.newBuilderFrom(situation)
                        .setStatus(Status.ACCEPTED)
                        .build();
                forwardAndStoreSituation(immutableSituation);
                return Response.ok().build();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return ALECRestUtils.somethingWentWrong(e);
            } catch (Exception e) {
                return ALECRestUtils.somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
    }

    @Override
    public Response getSituationStatusList() throws InterruptedException {
        List<SituationStatus> situationStatusList = new ArrayList<>();
        situationDatasource.getSituations().forEach(o -> situationStatusList.add(SituationStatusImpl.newBuilder()
                .id(o.getId())
                .status(o.getStatus())
                .build()));
        List<SituationStatus> sorted = situationStatusList.stream().sorted(Comparator.comparing(SituationStatus::getStatus)).collect(Collectors.toList());
        return Response.ok(sorted).build();
    }

    @Override
    public Response getSituationList() throws InterruptedException {
        List<Situation> situations = situationDatasource.getSituations();
        return Response.ok(situations).build();
    }

    @Override
    public Response addAlarm(String situationId, String alarmId, String feedback) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            Optional<Alarm> alarmOptional = alarmDatasource.getAlarm(Integer.parseInt(alarmId));
            if (alarmOptional.isPresent()) {
                if (alarmIsNotInAnotherSituation(alarmOptional.get().getReductionKey())) {
                    //adding feedback and new alarm
                    Alarm alarm = alarmOptional.get();
                    feedback = String.format("add alarm [%s] with description: [%s] to situation [%s] -- user feedback :[%s]", alarm.getId(), alarm.getDescription(), situationId, feedback);
                    Situation oldSituation = situationOptional.get();
                    Set<Alarm> alarms = new HashSet<>(oldSituation.getAlarms());
                    alarms.add(alarm);
                    ImmutableSituation immutableSituation = ImmutableSituation.newBuilderFrom(oldSituation)
                            .addFeedback(feedback)
                            .setAlarms(alarms)
                            .build();
                    try {
                        forwardAndStoreSituation(immutableSituation);
                        return Response.ok().build();
                    } catch (JsonProcessingException e) {
                        return ALECRestUtils.somethingWentWrong(e);
                    }
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
    public Response removeAlarm(String situationId, String alarmId, String feedback) throws InterruptedException {
        Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));

        if (situationOptional.isPresent()) {
            if (situationOptional.get().getAlarms().size() <= 2) {
                return Response.status(Response.Status.BAD_REQUEST).entity("A situation needs at least 2 alarms").build();
            }
            Optional<Alarm> alarmOptional = alarmDatasource.getAlarm(Integer.parseInt(alarmId));
            if (alarmOptional.isPresent()) {
                Situation oldSituation = situationOptional.get();
                Alarm alarm = alarmOptional.get();
                Set<Alarm> alarms = oldSituation.getAlarms()
                        .stream()
                        .filter(a -> !alarm.getReductionKey().equals(a.getReductionKey()))
                        .collect(Collectors.toUnmodifiableSet());
                feedback = String.format("remove alarm [%s] with description: [%s] to situation [%s] -- user feedback :[%s]", alarm.getId(), alarm.getDescription(), situationId, feedback);
                ImmutableSituation immutableSituation = ImmutableSituation.newBuilderFrom(oldSituation)
                        .addFeedback(feedback)
                        .setAlarms(alarms)
                        .build();
                try {
                    forwardAndStoreSituation(immutableSituation);
                    return Response.ok().build();
                } catch (JsonProcessingException e) {
                    return ALECRestUtils.somethingWentWrong(e);
                }
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
                return ALECRestUtils.somethingWentWrong(e);
            }
        }
        if (alarms.size() <= 1) {
            return Response.status(Response.Status.BAD_REQUEST).entity(MessageFormat.format(NEED_2_ALARMS, alarms.size())).build();
        }
        final String situationId = UUID.randomUUID().toString();
        final Severity maxSeverity = Severity.fromValue(alarms.stream()
                .mapToInt(a -> a.getSeverity() != null ? a.getSeverity().getValue() : Severity.INDETERMINATE.getValue())
                .max()
                .orElseGet(Severity.INDETERMINATE::getValue));
        Situation situation = ImmutableSituation.newBuilder()
                .setId(situationId)
                .setCreationTime(System.currentTimeMillis())
                .setLastTime(System.currentTimeMillis())
                .setAlarms(alarms)
                .setDiagnosticText(createSituationPayload.getDiagnosticText())
                .setDescription(createSituationPayload.getDescription())
                .setEngineParameter("user created")
                .setSeverity(maxSeverity)
                .build();
        try {
            forwardAndStoreSituation(situation);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
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

    private void forwardAndStoreSituation(Situation situation) throws JsonProcessingException, InterruptedException {
        //update situation to opennms
        situationDatasource.forwardSituation(situation);
        //store updated situation to the cloud
        client.sendSituation(situation, runtimeInfo.getSystemId());
        //store situation by status to the DB
        kvStoreSituationsByStatus();
    }

    private void kvStoreSituationsByStatus() throws JsonProcessingException, InterruptedException {
        List<Situation> acceptedSituations = situationDatasource.getSituations().stream()
                .filter(s -> Status.ACCEPTED.equals(s.getStatus()))
                .collect(Collectors.toList());
        List<Situation> rejectedSituations = situationDatasource.getSituations().stream()
                .filter(s -> Status.REJECTED.equals(s.getStatus()))
                .collect(Collectors.toList());

        kvStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(acceptedSituations), ALECRestUtils.ALEC_CONFIG);
        kvStore.put(KeyEnum.REJECTED_SITUATION.toString(), objectMapper.writeValueAsString(rejectedSituations), ALECRestUtils.ALEC_CONFIG);
    }

    private boolean canWeStore(KeyValueStore<String> kvStore) {
        Optional<String> agreementConfiguration = kvStore.get(KeyEnum.AGREEMENT.toString(), ALECRestUtils.ALEC_CONFIG);

        boolean doStore;
        if (agreementConfiguration.isPresent()) {
            try {
                doStore = objectMapper.readValue(agreementConfiguration.get(), Agreement.class).isAgreed();
            } catch (JsonProcessingException e) {
                doStore = false;
            }
        } else {
            doStore = false;
        }
        return doStore;
    }

    public void destroy() {
        try {
            channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
