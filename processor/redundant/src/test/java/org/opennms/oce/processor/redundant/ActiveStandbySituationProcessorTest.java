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

package org.opennms.oce.processor.redundant;

import static org.awaitility.Awaitility.await;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.opennms.features.distributed.coordination.api.DomainManager;
import org.opennms.features.distributed.coordination.api.DomainManagerFactory;
import org.opennms.features.distributed.coordination.api.Role;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationDatasource;

/**
 * Tests for {@link ActiveStandbySituationProcessor}.
 */
public class ActiveStandbySituationProcessorTest {
    private static final String id = "test.id";
    private static final String mockAlarm1Id = "/mock/alarm/1";
    private static final String mockAlarm2Id = "/mock/alarm/2";

    private final SituationDatasource mockSituationDataSource = mock(SituationDatasource.class);
    private final DomainManagerFactory mockDomainManagerFactory = mock(DomainManagerFactory.class);
    private final DomainManager mockDomainManager = mock(DomainManager.class);

    private final Situation mockSituation = mock(Situation.class);
    private final Alarm mockAlarm1 = mock(Alarm.class);
    private final Alarm mockAlarm2 = mock(Alarm.class);
    private final Set<Alarm> mockAlarmSet = new HashSet<>(Arrays.asList(mockAlarm1, mockAlarm2));
    private ActiveStandbySituationProcessor situationProcessor;
    private Set<String> mockAlarmIds;

    @Before
    public void setUp() {
        when(mockDomainManagerFactory.getManagerForDomain(anyString())).thenReturn(mockDomainManager);
        situationProcessor = ActiveStandbySituationProcessor.newInstance(mockSituationDataSource,
                mockDomainManagerFactory);
        when(mockSituation.getId()).thenReturn(id);
        when(mockSituation.getAlarms()).thenReturn(mockAlarmSet);
        when(mockAlarm1.getId()).thenReturn(mockAlarm1Id);
        when(mockAlarm2.getId()).thenReturn(mockAlarm2Id);
        mockAlarmIds = new HashSet<>(Arrays.asList(mockAlarm1.getId(), mockAlarm2.getId()));
    }

    /**
     * Test that we forward situations when active.
     */
    @Test
    public void testAcceptWhileActive() throws Exception {
        ArgumentCaptor<Situation> argumentCaptor = ArgumentCaptor.forClass(Situation.class);
        doNothing().when(mockSituationDataSource).forwardSituation(argumentCaptor.capture());

        situationProcessor.handleRoleChange(Role.ACTIVE, ActiveStandbySituationProcessor.OCE_DOMAIN);

        situationProcessor.accept(mockSituation);
        verify(mockSituationDataSource, times(1)).forwardSituation(mockSituation);
        assertEquals(id, argumentCaptor.getValue().getId());
    }

    /**
     * Test that we queue situations when standby.
     */
    @Test
    public void testAcceptWhileStandby() throws Exception {
        assertEquals(0, situationProcessor.getUnconfirmedSituations().size());

        acceptAndVerifyMockSituationQueued();

        Set<String> key = situationProcessor.getUnconfirmedSituations().keySet().iterator().next();
        assertEquals(mockAlarmIds, key);
    }

    /**
     * Test that we flush the queue and forward situations upon becoming active after a switchover.
     */
    @Test
    public void testFlushOnSwitchover() throws Exception {
        acceptAndVerifyMockSituationQueued();

        ArgumentCaptor<Situation> argumentCaptor = ArgumentCaptor.forClass(Situation.class);
        doNothing().when(mockSituationDataSource).forwardSituation(argumentCaptor.capture());

        situationProcessor.handleRoleChange(Role.ACTIVE, ActiveStandbySituationProcessor.OCE_DOMAIN);

        await().atMost(10, TimeUnit.SECONDS).until(() ->
                situationProcessor.getUnconfirmedSituations().isEmpty());

        verify(mockSituationDataSource, times(1)).forwardSituation(mockSituation);
        assertEquals(id, argumentCaptor.getValue().getId());
    }

    /**
     * Test that we remove a queued situation when we receive a confirm for it.
     */
    @Test
    public void testConfirm() throws Exception {
        acceptAndVerifyMockSituationQueued();
        situationProcessor.confirm(mockAlarmIds);
        assertEquals(0, situationProcessor.getUnconfirmedSituations().size());
    }

    private void acceptAndVerifyMockSituationQueued() throws Exception {
        situationProcessor.accept(mockSituation);
        verify(mockSituationDataSource, times(0)).forwardSituation(mockSituation);
        assertEquals(1, situationProcessor.getUnconfirmedSituations().size());
    }
}
