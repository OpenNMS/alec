package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.datasource.common.ImmutableSituation;
import org.opennms.alec.datasource.common.StaticAlarmDatasource;
import org.opennms.alec.datasource.common.StaticSituationDatasource;
import org.opennms.integration.api.v1.distributed.KeyValueStore;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class SituationRestImplTest {

    @Mock
    KeyValueStore<String> kvStore;

    List<Situation> situations = new ArrayList<>();
    List<Alarm> alarms = new ArrayList<>();

    @Before
    public void setUp() {
        getAlarmsAndSituations();
    }

    @Test
    public void rejected() throws InterruptedException {
        SituationRestImpl underTest = new SituationRestImpl(kvStore, new StaticSituationDatasource(situations), new StaticAlarmDatasource(alarms));
        try (Response actual = underTest.rejected("11")) {
            assertThat(actual.getStatus(), equalTo(200));
        }
    }

    private void getAlarmsAndSituations() {
        for (int i = 0, j = 10; i < j; i++) {
            alarms.add(ImmutableAlarm.newBuilder().setId(String.valueOf(i)).build());

        }

        situations.add(ImmutableSituation.newBuilderNow()
                .setId("10")
                .addAlarm(alarms.get(0))
                .addAlarm(alarms.get(1))
                .build());
        situations.add(ImmutableSituation.newBuilderNow()
                .setId("11")
                .addAlarm(alarms.get(2))
                .addAlarm(alarms.get(3))
                .addAlarm(alarms.get(4))
                .addAlarm(alarms.get(5))
                .build());
    }
}