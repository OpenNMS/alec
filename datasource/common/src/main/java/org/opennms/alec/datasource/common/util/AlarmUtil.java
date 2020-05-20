package org.opennms.alec.datasource.common.util;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;

public class AlarmUtil {

    public static Alarm getAlarmForDescription(final Collection<Alarm> alarms) {
        Objects.requireNonNull(alarms, "alarms can not be null");
        if(alarms.isEmpty()) {
            throw new IllegalArgumentException("alarms can not be empty");
        }

        // Sort the alarms by time (ascending)
        final List<Alarm> sortedAlarms = alarms.stream()
                .sorted(Comparator.comparing(Alarm::getTime))
                .collect(Collectors.toList());

        // Use the alarm that is not cleared (if any), or fallback to the earliest alarm otherwise
        return sortedAlarms.stream()
                .filter(a -> !a.isClear())
                .findFirst()
                .orElseGet(() -> sortedAlarms.get(0));
    }
}
