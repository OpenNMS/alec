package org.opennms.alec.datasource.common.util;

import java.util.Collection;
import java.util.Comparator;
import java.util.Objects;

import org.opennms.alec.datasource.api.Alarm;

public class AlarmUtil {

    public static Alarm getAlarmForDescription(final Collection<Alarm> alarms) {
        Objects.requireNonNull(alarms, "alarms can not be null");
        if(alarms.isEmpty()) {
            throw new IllegalArgumentException("alarms can not be empty");
        }

        // Sort the alarms by severity and time
        return alarms
                .stream()
                .sorted(Comparator.comparing(Alarm::getSeverity).thenComparing(Alarm::getTime))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("alarms can not be empty"));
    }
}
