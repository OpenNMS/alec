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

package org.opennms.alec.grpc;

import java.util.concurrent.TimeUnit;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.grpc.generated.AlecCollectionServiceGrpc;
import org.opennms.alec.grpc.generated.SituationSet;
import org.opennms.alec.mapper.SituationToSituationProto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

public class SituationClient {
    private static final Logger LOG = LoggerFactory.getLogger(SituationClient.class);

    private AlecCollectionServiceGrpc.AlecCollectionServiceFutureStub futureStub;
    private ManagedChannel channel;

    private final SituationToSituationProto mapper = new SituationToSituationProto();
    private final boolean doStore;

    public SituationClient(boolean doStore, GrpcConnectionConfig grpcConnectionConfig) {
        if (doStore) {
            channel = ManagedChannelBuilder
                    .forAddress(grpcConnectionConfig.getHost(), grpcConnectionConfig.getPort())
                    .build();
            futureStub = AlecCollectionServiceGrpc.newFutureStub(channel);
        }
        this.doStore = doStore;
    }

    public void sendSituation(Situation situation, String systemId) {
        if (doStore) {
            SituationSet request = mapper.toSituationSet(situation, systemId);
            LOG.debug("Will try to send {} ...", request);
            futureStub.sendSituations(request);
        }
    }

    public void destroy() {
        try {
            if (channel != null) {
                channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
