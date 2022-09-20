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

import java.util.List;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.aleccloud.AlecCollectionServiceGrpc;
import org.opennms.aleccloud.SituationSetProtos;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.grpc.Channel;
import io.grpc.StatusRuntimeException;

public class SituationClient {
    private static final Logger LOG = LoggerFactory.getLogger(SituationClient.class);

    private final AlecCollectionServiceGrpc.AlecCollectionServiceBlockingStub blockingStub;

    public SituationClient(Channel channel) {
        blockingStub = AlecCollectionServiceGrpc.newBlockingStub(channel);
    }

    public void sendSituations(List<Situation> situation) {
        LOG.info("Will try to send {} ...", situation);
        SituationSetProtos.SituationSet request = SituationSetProtos.SituationSet.newBuilder().build();
        try {
            blockingStub
                    .withCallCredentials(
                            new AuthenticationCallCredentials(
                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
                                            "eyJzdWIiOiJhbGVjIiwibmFtZSI6IkFsZWMgUG9DIiwiaWF0IjoxNTE2MjM5MDIyfQ." +
                                            "pj85oD7z6aOJ0JkR8HK35aON7J4QALuFO_H6DswSSU8"))
                    .sendSituations(request);
        } catch (StatusRuntimeException e) {
            LOG.warn("RPC failed: {}", e.getStatus());
        }
    }
}
