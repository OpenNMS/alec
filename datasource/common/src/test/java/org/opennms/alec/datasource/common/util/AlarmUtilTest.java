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
    public void shouldGetTheAlarmWithTheHighestSeverityAndOldest() {

        List<Alarm> alarms = new ArrayList<>();

        // Generate a list with all severities with 3 ages:
        for(Severity severity : Severity.values()) {
            alarms.add(alarm(3, severity)); // young
            alarms.add(alarm(2, severity)); // middle age
            alarms.add(alarm(1, severity)); // old
        }

        // We expect the oldest alarm with the highest severity.
        Alarm selectedAlarm = AlarmUtil.getAlarmForDescription(alarms);
        assertEquals(1, selectedAlarm.getTime());
        assertEquals(Severity.CRITICAL, selectedAlarm.getSeverity());
    }

    private Alarm alarm(final long time, final Severity severity) {
        return ImmutableAlarm.newBuilder()
                .setId(severity.name() + "_" + time)
                .setTime(time)
                .setSeverity(severity)
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
