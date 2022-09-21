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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.SituationStatus;
import org.opennms.alec.data.SituationStatusImpl;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.grpc.SituationClient;
import org.opennms.alec.mapper.SituationToSituationProto;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

public class SituationRestImpl implements SituationRest {
    private static final Logger LOG = LoggerFactory.getLogger(SituationRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationDatasource situationDatasource;
    private final SituationToSituationProto mapper = new SituationToSituationProto();
    private final SituationClient client;
    private final ManagedChannel channel;

    public SituationRestImpl(KeyValueStore<String> kvStore,
                             SituationDatasource situationDatasource) {
        this.kvStore = kvStore;
        this.situationDatasource = situationDatasource;
        objectMapper = new ObjectMapper();

        // Create a communication channel to the server, known as a Channel. Channels are thread-safe
        // and reusable. It is common to create channels at the beginning of your application and reuse
        // them until the application shuts down.
        final String target = "ctojeralecpoc.eastus.cloudapp.azure.com:50051";
        channel = ManagedChannelBuilder.forTarget(target)
                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid
                // needing certificates.
                .usePlaintext()
                .build();
/*
        try {
*/
        client = new SituationClient(channel, mapper);

       /* } finally {
            // ManagedChannels use resources like threads and TCP connections. To prevent leaking these
            // resources the channel should be shut down when it will no longer be used. If it may be used
            // again leave it running.
            channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
        }*/
    }

    @Override
    public Response rejected(String id) throws InterruptedException {
        Optional<Situation> situationOptional;
        situationOptional = situationDatasource.getSituation(Integer.parseInt(id));

        if (situationOptional.isPresent()) {
            Situation situation = situationOptional.get();
            //check status
            if (Status.REJECTED.equals(situation.getStatus())) {
                LOG.debug("Situation {} already rejected", id);
                return Response.accepted("Situation " + id + " already rejected").build();
            }

            try {
                situationDatasource.forwardSituation(ImmutableSituation.newBuilderFrom(situation).setStatus(Status.REJECTED).build());
                storeMLSituations();
                return Response.ok().build();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            } catch (Exception e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    @Override
    public Response accepted(String id) throws InterruptedException {
        Optional<Situation> situationOptional;
        situationOptional = situationDatasource.getSituation(Integer.parseInt(id));

        if (situationOptional.isPresent()) {
            Situation situation = situationOptional.get();
            //check status
            if (Status.ACCEPTED.equals(situation.getStatus())) {
                LOG.debug("Situation {} already accepted", id);
                return Response.accepted("Situation " + id + " already accepted").build();
            }

            //Update situation
            try {
                situationDatasource.forwardSituation(ImmutableSituation.newBuilderFrom(situation).setStatus(Status.ACCEPTED).build());
                storeMLSituations();
                return Response.ok().build();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            } catch (Exception e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
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

    private void storeMLSituations() throws JsonProcessingException, InterruptedException {
        List<Situation> acceptedSituations = situationDatasource.getSituationsWithAlarmId().stream()
                .filter(s -> Status.ACCEPTED.equals(s.getStatus()))
                .collect(Collectors.toList());
        List<Situation> rejectedSituations = situationDatasource.getSituationsWithAlarmId().stream()
                .filter(s -> Status.REJECTED.equals(s.getStatus()))
                .collect(Collectors.toList());

        try {
            client.sendSituations(acceptedSituations);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        kvStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(acceptedSituations), ALECRestImpl.ALEC_CONFIG);
        kvStore.put(KeyEnum.REJECTED_SITUATION.toString(), objectMapper.writeValueAsString(rejectedSituations), ALECRestImpl.ALEC_CONFIG);
    }

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }

    public void destroy() {
        try {
            channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
