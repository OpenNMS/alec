package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.core.Response;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.data.AlarmSetImpl;
import org.opennms.alec.data.CreateSituationPayloadImpl;
import org.opennms.alec.data.SituationStatus;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.Status;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.common.StaticAlarmDatasource;
import org.opennms.alec.datasource.common.StaticSituationDatasource;
import org.opennms.alec.grpc.GrpcConnectionConfig;
import org.opennms.alec.grpc.SituationClient;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.opennms.integration.api.v1.runtime.RuntimeInfo;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class SituationRestImplTest {

    @Mock
    KeyValueStore<String> kvStore;

    @Mock
    RuntimeInfo runtimeInfo;

    @Mock
    GrpcConnectionConfig grpcConnectionConfig;

    @Mock
    SituationClient situationClient;

    private SituationDatasource situationDatasource;

    List<Situation> situations = new ArrayList<>();
    List<Alarm> alarms = new ArrayList<>();
    private SituationRestImpl underTest;

    @Before
    public void setUp() {
        //we don't want to store testing data to the cloud
        getAlarmsAndSituations();
        when(runtimeInfo.getSystemId()).thenReturn("42");
        situationDatasource = Mockito.spy(new StaticSituationDatasource(situations));
        underTest = new SituationRestImpl(kvStore, situationDatasource, new StaticAlarmDatasource(alarms), runtimeInfo, situationClient);
    }

    @After
    public void tearDown() {
        verifyNoMoreInteractions(situationDatasource,situationClient);
    }

    @Test
    public void rejected() throws InterruptedException {
        ArgumentCaptor<Situation> situationForwardCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.rejected("11", "rejected")) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationForwardCaptor.capture());
            assertThat(situationForwardCaptor.getValue().getStatus(), equalTo(Status.REJECTED));
            assertThat(situationForwardCaptor.getValue().getFeedback().size(), equalTo(1));
            assertThat(situationForwardCaptor.getValue().getFeedback().get(0), equalTo("reject situation [11] -- user feedback :[rejected]"));
            assertThat(situationForwardCaptor.getValue().getAlarms().size(), equalTo(0));
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(2)).getSituations();
            ArgumentCaptor<Situation> situationStoreCaptor = ArgumentCaptor.forClass(Situation.class);
            verify(situationClient, times(1)).sendSituation(situationStoreCaptor.capture(), eq("42"));
            assertThat(situationStoreCaptor.getValue().getStatus(), equalTo(Status.REJECTED));
            assertThat(situationStoreCaptor.getValue().getFeedback().size(), equalTo(1));
            assertThat(situationStoreCaptor.getValue().getFeedback().get(0), equalTo("reject situation [11] -- user feedback :[rejected]"));
            assertThat(situationStoreCaptor.getValue().getAlarms().size(), equalTo(4));
        }
    }

    @Test
    public void removeAlarms() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.removeAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(Arrays.asList("3", "4")).build())) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationCaptor.capture());
            assertThat(situationCaptor.getValue().getAlarms().size(), equalTo(2));
            assertThat(situationCaptor.getValue().getAlarms().stream()
                    .map(Alarm::getId)
                    .collect(Collectors
                            .toList()).containsAll(Arrays.asList("2", "5")), equalTo(true));
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(2)).getSituations();
            verify(situationClient, times(1)).sendSituation(situationCaptor.getValue(), "42");
        }
    }

    @Test
    public void removeOneAlarm() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.removeAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(List.of("5")).build())) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationCaptor.capture());
            assertThat(situationCaptor.getValue().getAlarms().size(), equalTo(3));
            assertThat(situationCaptor.getValue().getAlarms().stream()
                    .map(Alarm::getId)
                    .collect(Collectors
                            .toList()).containsAll(Arrays.asList("2", "3", "4")), equalTo(true));
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(2)).getSituations();
            verify(situationClient, times(1)).sendSituation(situationCaptor.getValue(), "42");
        }
    }

    @Test
    public void removeBadAlarms() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.removeAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(Arrays.asList("10", "11")).build())) {
            assertThat(actual.getStatus(), equalTo(204));
            verify(situationDatasource, times(0)).forwardSituation(situationCaptor.capture());
            verify(situationDatasource, times(1)).getSituation(11);
        }
    }

    @Test
    public void removeAlarmsNotIntThisSituation() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        //Trying to remove alarms from another situation
        try (Response actual = underTest.removeAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(Arrays.asList("0", "1")).build())) {
            assertThat(actual.getStatus(), equalTo(204));
            verify(situationDatasource, times(0)).forwardSituation(situationCaptor.capture());
            verify(situationDatasource, times(1)).getSituation(11);
        }
    }

    @Test
    public void addAlarmsAlreadyInSituation() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        // trying to add alarms from another situation
        try (Response actual = underTest.addAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(Arrays.asList("0", "1")).build())) {
            assertThat(actual.getStatus(), equalTo(204));
            verify(situationDatasource, times(0)).forwardSituation(any());
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(2)).getSituations();
        }
    }

    @Test
    public void addAlarms() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.addAlarm(AlarmSetImpl.newBuilder().situationId("11").alarmIdList(Arrays.asList("7", "8")).feedback("feedback").build())) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationCaptor.capture());
            assertThat(situationCaptor.getValue().getAlarms().size(), equalTo(6));
            assertThat(situationCaptor.getValue().getAlarms().stream()
                    .map(Alarm::getId)
                    .collect(Collectors
                            .toList()).containsAll(Arrays.asList("2", "3", "4", "5", "7", "8")), equalTo(true));
            assertThat(situationCaptor.getValue().getFeedback().size(), equalTo(1));
            assertThat(situationCaptor.getValue().getFeedback().get(0), equalTo("add alarm [[7, 8]] to situation [11] -- user feedback :[feedback]"));
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(4)).getSituations();
            verify(situationClient, times(1)).sendSituation(situationCaptor.getValue(), "42");
        }
    }

    @Test
    public void createSituation() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.createSituation(CreateSituationPayloadImpl.newBuilder().alarmIdList(Arrays.asList("7", "8")).description("description").diagnosticText("diagnostic").build())) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationCaptor.capture());
            assertThat(situationCaptor.getValue().getAlarms().size(), equalTo(2));
            assertThat(situationCaptor.getValue().getAlarms().stream()
                    .map(Alarm::getId)
                    .collect(Collectors
                            .toList()).containsAll(Arrays.asList("7", "8")), equalTo(true));
            verify(situationDatasource, times(2)).getSituations();
        }
    }

    @Test
    public void createSituationWithBadAlarms() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.createSituation(CreateSituationPayloadImpl.newBuilder().alarmIdList(Arrays.asList("1", "2")).description("description").diagnosticText("diagnostic").build())) {
            assertThat(actual.getStatus(), equalTo(204));
            verify(situationDatasource, times(0)).forwardSituation(any());
            verify(situationDatasource, times(2)).getSituations();
        }
    }

    @Test
    public void accepted() throws InterruptedException {
        ArgumentCaptor<Situation> situationCaptor = ArgumentCaptor.forClass(Situation.class);
        try (Response actual = underTest.accepted("11")) {
            assertThat(actual.getStatus(), equalTo(200));
            verify(situationDatasource, times(1)).forwardSituation(situationCaptor.capture());
            assertThat(situationCaptor.getValue().getAlarms().size(), equalTo(4));
            assertThat(situationCaptor.getValue().getStatus(), equalTo(Status.ACCEPTED));
            verify(situationDatasource, times(1)).getSituation(11);
            verify(situationDatasource, times(2)).getSituations();
            verify(situationClient, times(1)).sendSituation(situationCaptor.getValue(), "42");
        }
    }

    @Test
    public void getSituationList() throws InterruptedException {
        try (Response actual = underTest.getSituationList()) {
            assertThat(actual.getStatus(), equalTo(200));
            List<Situation> situationList = (List<Situation>) actual.getEntity();
            assertThat(situationList.size(), equalTo(2));
            verify(situationDatasource, times(1)).getSituations();
        }
    }

    @Test
    public void getSituationStatusList() throws InterruptedException {
        try (Response actual = underTest.getSituationStatusList()) {
            assertThat(actual.getStatus(), equalTo(200));
            List<SituationStatus> situationList = (List<SituationStatus>) actual.getEntity();
            assertThat(situationList.size(), equalTo(2));
            assertThat(situationList.get(0).getId(), equalTo("10"));
            assertThat(situationList.get(1).getId(), equalTo("11"));
            verify(situationDatasource, times(1)).getSituations();
        }
    }

    private void getAlarmsAndSituations() {
        for (int i = 0; i < 10; i++) {
            alarms.add(ImmutableAlarm.newBuilder()
                    .setId(String.valueOf(i))
                    .setReductionKey("reduction:" + i)
                    .setSeverity(Severity.NORMAL)
                    .setDescription("description")
                    .setSummary("summary")
                    .setInventoryObjectId("inventoryObjectId")
                    .setInventoryObjectType("inventoryObjectType")
                    .setLongId(i).setReductionKey(String.valueOf(i)).build());
        }

        situations.add(ImmutableSituation.newBuilderNow()
                .setId("10")
                .setLongId(10)
                .addAlarm(alarms.get(0))
                .addAlarm(alarms.get(1))
                .setSeverity(Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.CREATED)
                .build());
        situations.add(ImmutableSituation.newBuilderNow()
                .setId("11")
                .setLongId(11)
                .addAlarm(alarms.get(2))
                .addAlarm(alarms.get(3))
                .addAlarm(alarms.get(4))
                .addAlarm(alarms.get(5))
                .setSeverity(Severity.MAJOR)
                .setLastTime(System.currentTimeMillis())
                .setEngineParameter("engine test")
                .setStatus(Status.CREATED)
                .build());
    }
}