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
import java.util.List;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.SituationStatus;
import org.opennms.alec.data.SituationStatusImpl;
import org.opennms.alec.data.Status;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.jackson.JacksonSituation;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SituationRestImpl implements SituationRest {
    private static final Logger LOG = LoggerFactory.getLogger(SituationRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationDatasource situationDatasource;

    public SituationRestImpl(KeyValueStore<String> kvStore,
                             SituationDatasource situationDatasource) {
        this.kvStore = kvStore;
        this.situationDatasource = situationDatasource;
        objectMapper = new ObjectMapper();
    }

    @Override
    public Response rejected(String id) {
        List<JacksonSituation> situations = new ArrayList<>();
        Optional<Situation> situationOptional = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if (situationOptional.isPresent()) {
            try {
                Optional<String> alreadyrejectedSituations = kvStore.get(KeyEnum.REJECTED_SITUATION.toString(), ALECRestImpl.ALEC_CONFIG);
                if (alreadyrejectedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue(alreadyrejectedSituations.get(), new TypeReference<>() {
                    });
                    situations.addAll(jacksonSituations);
                }
                Situation situation = situationOptional.get();
                situations.add(JacksonSituation.newBuilder(situation).status(Status.REJECTED).build());
                long ret = kvStore.put(KeyEnum.REJECTED_SITUATION.toString(), objectMapper.writeValueAsString(situations), ALECRestImpl.ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    @Override
    public Response acceptedSituation(String id) {
        List<JacksonSituation> situations = new ArrayList<>();
        Optional<Situation> situationOptional = situationDatasource.getSituationsWithAlarmId().stream().filter(situation -> id.equals(situation.getId())).findAny();

        if (situationOptional.isPresent()) {
            try {
                Optional<String> alreadyAcceptedSituations = kvStore.get(KeyEnum.ACCEPTED_SITUATION.toString(), ALECRestImpl.ALEC_CONFIG);
                if (alreadyAcceptedSituations.isPresent()) {
                    List<JacksonSituation> jacksonSituations = objectMapper.readValue(alreadyAcceptedSituations.get(), new TypeReference<>() {
                    });
                    situations.addAll(jacksonSituations);
                }
                Situation situation = situationOptional.get();
                situations.add(JacksonSituation.newBuilder(situation).status(Status.ACCEPTED).build());
                long ret = kvStore.put(KeyEnum.ACCEPTED_SITUATION.toString(), objectMapper.writeValueAsString(situations), ALECRestImpl.ALEC_CONFIG);
                return Response.ok().entity(ret).build();
            } catch (JsonProcessingException e) {
                return somethingWentWrong(e);
            }
        }

        return Response.status(Response.Status.NOT_FOUND).entity("Situation id: " + id + " not found").build();
    }

    @Override
    public Response getSituationStatusList() {
        Optional<String> acceptedSituation = kvStore.get(KeyEnum.ACCEPTED_SITUATION.toString(), ALECRestImpl.ALEC_CONFIG);
        Optional<String> rejectedSituation = kvStore.get(KeyEnum.REJECTED_SITUATION.toString(), ALECRestImpl.ALEC_CONFIG);
        List<SituationStatus> situationStatusList = new ArrayList<>();

        try {
            setSituationList(acceptedSituation, situationStatusList);
            setSituationList(rejectedSituation, situationStatusList);
        } catch (RuntimeException e) {
            return somethingWentWrong(e);
        }

        return Response.ok(situationStatusList).build();
    }

    private void setSituationList(Optional<String> situation, List<SituationStatus> situationStatusList) {
        situation.ifPresent(s -> {
            try {
                List<JacksonSituation> jacksonSituation = objectMapper.readValue(s, new TypeReference<>() {
                });
                jacksonSituation.forEach(o -> situationStatusList.add(SituationStatusImpl.newBuilder()
                        .id(o.getId())
                        .status(o.getStatus())
                        .build()));
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity("something went wrong: " + e.getMessage()).build();
    }
}
