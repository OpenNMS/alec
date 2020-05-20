package org.opennms.alec.datasource.common.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.common.ImmutableAlarm;

public class AlarmUtilTest {

    @Test
    public void shouldThrowExceptionsForMissingAlarms() {
        assertThrows(NullPointerException.class, () -> AlarmUtil.getAlarmForDescription(null));
        assertThrows(IllegalArgumentException.class, () -> AlarmUtil.getAlarmForDescription(new ArrayList<>()));
    }

    @Test
    public void shouldGetTheOldestNonClearedAlarm() {
        List<Alarm> alarms = new ArrayList<>();
        alarms.add(alarm("oldestButCleared", 1, true));
        alarms.add(alarm("old", 2, false));
        alarms.add(alarm("middleage", 3, false));
        alarms.add(alarm("young", 4, false));
        alarms.add(alarm("youngest", 5, false));

        assertEquals("old", AlarmUtil.getAlarmForDescription(alarms).getId());
    }

    @Test
    public void shouldGetTheOldestOfAllClearedAlarms() {
        List<Alarm> alarms = new ArrayList<>();
        alarms.add(alarm("oldest", 1, true));
        alarms.add(alarm("old", 2, true));
        alarms.add(alarm("middleage", 3, true));
        alarms.add(alarm("young", 4, true));
        alarms.add(alarm("youngest", 5, true));

        assertEquals("oldest", AlarmUtil.getAlarmForDescription(alarms).getId());
    }

    private Alarm alarm(String id, long time, boolean cleared) {
        return ImmutableAlarm.newBuilder()
                .setId(id)
                .setTime(time)
                .setSeverity(cleared ? Severity.CLEARED : Severity.WARNING)
                .build();
    }

    /** Mimics JUnit5 behaviour. */
    @SuppressWarnings("unchecked")
    private static <T extends Throwable> void assertThrows(Class<T> expectedThrowable, final Runnable runnable) {
        try {
            runnable.run();
        } catch (Throwable actualException) {
            if (!expectedThrowable.isInstance(actualException)) {
                fail(String.format("Expected %s to be thrown but instead %s was thrown.", expectedThrowable, actualException));
            }
            // All good, we caught the right exception
            return;
        }
        fail(String.format("Expected %s to be thrown but none was thrown.", expectedThrowable));
    }

}
