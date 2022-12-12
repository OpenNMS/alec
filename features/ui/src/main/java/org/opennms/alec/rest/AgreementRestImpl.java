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

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AgreementRestImpl implements AgreementRest {

    private static final Logger LOG = LoggerFactory.getLogger(AgreementRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final SituationRest situationRest;

    public AgreementRestImpl(KeyValueStore<String> kvStore, SituationRest situationRest) {
        this.kvStore = kvStore;
        this.situationRest = situationRest;
        objectMapper = new ObjectMapper();
    }

    @Override
    public Response setAgreementConfiguration(Agreement agreement) {
        LOG.debug("Set agreement configuration: {}", agreement);
        CompletableFuture<Long> future;
        try {
            future = kvStore.putAsync(KeyEnum.AGREEMENT.toString(),
                    objectMapper.writeValueAsString(agreement),
                    ALECRestUtils.ALEC_CONFIG);
            situationRest.updateAgreement(agreement.isAgreed());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
        return Response.ok(future.join()).build();
    }

    @Override
    public Response getAgreementConfiguration() {
        LOG.debug("Get agreement configuration");
        try {
            Optional<String> agreementConfiguration = kvStore.get(KeyEnum.AGREEMENT.toString(), ALECRestUtils.ALEC_CONFIG);
            if (agreementConfiguration.isPresent()) {
                return Response.ok().entity(objectMapper.readValue(agreementConfiguration.get(), Agreement.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }
}
