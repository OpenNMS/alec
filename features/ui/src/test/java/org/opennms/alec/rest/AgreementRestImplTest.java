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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.AgreementImpl;
import org.opennms.integration.api.v1.distributed.KeyValueStore;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class AgreementRestImplTest {

    @Mock
    KeyValueStore<String> kvStore;
    @Mock
    private CompletableFuture<Long> future;
    @Mock
    private SituationRest situationRest;

    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @After
    public void tearDown() throws Exception {
        verifyNoMoreInteractions(situationRest);
    }

    @Test
    public void testSetAgreementConfiguration() {
        AgreementRestImpl underTest = new AgreementRestImpl(kvStore, situationRest);

        when(kvStore.putAsync(anyString(), anyString(), anyString())).thenReturn(future);
        when(future.join()).thenReturn(1L);

        try (Response result = underTest.setAgreementConfiguration(getAgreement().build())) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            verify(situationRest, times(1)).updateAgreement(true);
        }
    }

    @Test
    public void testGetAgreementConfiguration() throws JsonProcessingException {
        AgreementRestImpl underTest = new AgreementRestImpl(kvStore, situationRest);

        when(kvStore.get(anyString(), anyString())).thenReturn(Optional.ofNullable(getAgreementAsString(getAgreement().build())));

        try (Response result = underTest.getAgreementConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Agreement agreement = (Agreement) result.getEntity();
            assertThat(Boolean.TRUE, equalTo(agreement.isAgreed()));
        }
    }

    @Test
    public void testGetAgreementConfigurationNoContent() {
        AgreementRestImpl underTest = new AgreementRestImpl(kvStore, situationRest);

        when(kvStore.get(anyString(), anyString())).thenReturn(Optional.empty());

        try (Response result = underTest.getAgreementConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.NO_CONTENT.getStatusCode()));
        }
    }

    private AgreementImpl.Builder getAgreement() {
        return AgreementImpl.newBuilder()
                .agreed(true);
    }

    private String getAgreementAsString(Agreement agreement) throws JsonProcessingException {
        return objectMapper.writeValueAsString(agreement);
    }
}
