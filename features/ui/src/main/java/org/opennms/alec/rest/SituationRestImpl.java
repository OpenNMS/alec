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
import java.util.stream.Collectors;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.AlarmSet;
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
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.opennms.integration.api.v1.runtime.RuntimeInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SituationRestImpl implements SituationRest {
    private static final Logger LOG = LoggerFactory.getLogger(SituationRestImpl.class);
    public static final String SITUATION_NOT_FOUND = "Situation {0} not found";

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationDatasource situationDatasource;
    private final GrpcConnectionConfig grpcConnectionConfig;
    private SituationClient client;
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

        this.grpcConnectionConfig = grpcConnectionConfig;
        client = new SituationClient(canWeStore(kvStore), this.grpcConnectionConfig);
    }

    //Only for testing
    protected SituationRestImpl(KeyValueStore<String> kvStore,
                             SituationDatasource situationDatasource,
                             AlarmDatasource alarmDatasource,
                             RuntimeInfo runtimeInfo,
                             GrpcConnectionConfig grpcConnectionConfig,
                             SituationClient situationClient) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        this.runtimeInfo = Objects.requireNonNull(runtimeInfo);
        objectMapper = new ObjectMapper();

        this.grpcConnectionConfig = grpcConnectionConfig;
        client = situationClient;
    }

    @Override
    public Response rejected(String situationId, String feedback) {
        try {
            Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));
            if (situationOptional.isPresent()) {
                final Situation situation = situationOptional.get();
                //check status
                if (Status.REJECTED.equals(situation.getStatus())) {
                    LOG.debug("Situation {} already rejected", situationId);
                    return Response.accepted(MessageFormat.format("Situation {0} already rejected", situationId)).build();
                }
                feedback = String.format("reject situation [%s]", situationId);
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
            } else {
                return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        } catch (Exception e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response accepted(String situationId) {
        try {
            Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));
            if (situationOptional.isPresent()) {
                Situation situation = situationOptional.get();
                //check status
                if (Status.ACCEPTED.equals(situation.getStatus())) {
                    LOG.debug("Situation {} already accepted", situationId);
                    return Response.accepted(MessageFormat.format("Situation {0} already accepted", situationId)).build();
                }
                //Update situation
                return forwardAndStoreSituation(ImmutableSituation.newBuilderFrom(situation).setStatus(Status.ACCEPTED).build(), situation.getAlarms());
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
        return Response.status(Response.Status.NOT_FOUND).entity(MessageFormat.format(SITUATION_NOT_FOUND, situationId)).build();
    }

    @Override
    public Response getSituationStatusList() {
        try {
            List<SituationStatus> situationStatusList = new ArrayList<>();
            situationDatasource.getSituations().forEach(o -> situationStatusList.add(SituationStatusImpl.newBuilder()
                    .id(String.valueOf(o.getLongId()))
                    .status(o.getStatus())
                    .build()));
            List<SituationStatus> sorted = situationStatusList.stream().sorted(Comparator.comparing(SituationStatus::getStatus)).collect(Collectors.toList());
            return Response.ok(sorted).build();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response getSituationList() {
        try {
            List<Situation> situations = situationDatasource.getSituations();
            return Response.ok(situations).build();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response addAlarm(AlarmSet alarm) {
        try {
            Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(alarm.getSituationId()));
            if (situationOptional.isPresent()) {
                Situation oldSituation = situationOptional.get();
                Set<Alarm> alarmSet = getAlarmSetToAdd(alarm.getAlarmIdList());
                alarmSet.addAll(oldSituation.getAlarms());
                if (oldSituation.getAlarms().equals(alarmSet)) {
                    return ALECRestUtils.noContent();
                }
                String feedback = String.format("add alarm(s) [%s] to situation [%s]", alarm.getAlarmIdList(), alarm.getSituationId());
                return forwardAndStoreSituation(ImmutableSituation.newBuilderFrom(oldSituation).addFeedback(feedback).build(), alarmSet);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
        return ALECRestUtils.noContent();
    }

    @Override
    public Response removeAlarm(AlarmSet alarm) {
        String situationId = alarm.getSituationId();
        try {
            Optional<Situation> situationOptional = situationDatasource.getSituation(Integer.parseInt(situationId));
            if (situationOptional.isPresent()) {
                Situation oldSituation = situationOptional.get();
                Set<Alarm> alarmSet = oldSituation.getAlarms()
                        .stream()
                        .filter(a -> !alarm.getAlarmIdList().contains(String.valueOf(a.getLongId())))
                        .collect(Collectors.toUnmodifiableSet());
                if (oldSituation.getAlarms().equals(alarmSet)) {
                    return ALECRestUtils.noContent();
                } else {
                    String feedback = String.format("remove alarm(s) [%s] to situation [%s]", alarm.getAlarmIdList(), situationId);
                    return forwardAndStoreSituation(ImmutableSituation.newBuilderFrom(oldSituation).addFeedback(feedback).setStatus(Status.REMOVED_ALARM).build(), alarmSet);
                }
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
        return ALECRestUtils.noContent();
    }

    @Override
    public Response createSituation(CreateSituationPayload createSituationPayload) {
        Set<Alarm> alarmSetToAdd;
        try {
            alarmSetToAdd = getAlarmSetToAdd(createSituationPayload.getAlarmIdList());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        }
        final String situationId = UUID.randomUUID().toString();
        final Severity maxSeverity = Severity.fromValue(alarmSetToAdd.stream()
                .mapToInt(a -> a.getSeverity() != null ? a.getSeverity().getValue() : Severity.INDETERMINATE.getValue())
                .max()
                .orElseGet(Severity.INDETERMINATE::getValue));
        Situation situation = ImmutableSituation.newBuilder()
                .setId(situationId)
                .setCreationTime(System.currentTimeMillis())
                .setLastTime(System.currentTimeMillis())
                .setAlarms(alarmSetToAdd)
                .setDiagnosticText(createSituationPayload.getDiagnosticText())
                .setDescription(createSituationPayload.getDescription())
                .setSeverity(maxSeverity)
                .setEngineParameter("user created")
                .addFeedback(createSituationPayload.getFeedback())
                .setStatus(Status.USER_CREATED)
                .build();
        if (situation.getAlarms().size() >= 2) {
            forwardAndStoreSituation(situation, alarmSetToAdd);
            return Response.ok().build();
        } else {
            return ALECRestUtils.noContent();
        }
    }

    private Set<Alarm> getAlarmSetToAdd(List<String> alarmIdList) throws InterruptedException {
        Set<Alarm> alarms = new HashSet<>();
        for (String id : alarmIdList) {
            Optional<Alarm> alarm = alarmDatasource.getAlarm(Integer.parseInt(id));
            if (alarm.isPresent() && alarmIsNotInAnotherSituation(alarm.get().getReductionKey())) {
                alarms.add(alarm.get());
            }
        }
        return alarms;
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

    private Response forwardAndStoreSituation(Situation oldSituation, Set<Alarm> alarms) {
        try {
            Situation newSituation = ImmutableSituation.newBuilderFrom(oldSituation).setAlarms(alarms).build();
            //Forward situation to ONMS
            situationDatasource.forwardSituation(newSituation);
            //Store  situation to the cloud
            client.sendSituation(newSituation, runtimeInfo.getSystemId());

            kvStoreSituationsByStatus();
            return Response.ok().build();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        } catch (Exception e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
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

    @Override
    public void updateAgreement(boolean doStore) {
        client.createChannel(doStore);
    }

    public void destroy() {
        client.destroy();
    }
}
