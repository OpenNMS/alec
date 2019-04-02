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

package org.opennms.oce.datasource.common;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.BiPredicate;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;

public final class ImmutableSituation implements Situation {
    private final String id;
    private final long creationTime;
    private final Severity severity;
    private final List<ResourceKey> resourceKeys;
    private final Map<String, Alarm> alarms;
    private final String diagnosticText;

    private ImmutableSituation(Builder builder) {
        this.id = builder.id;
        this.creationTime = builder.creationTime;
        this.severity = builder.severity;
        this.resourceKeys = builder.resourceKeys == null ? null : new ArrayList<>(builder.resourceKeys);
        this.alarms = builder.alarms == null ? null : copyAlarms(builder.alarms);
        this.diagnosticText = builder.diagnosticText;
    }

    public static class Builder {
        private String id;
        private Long creationTime;
        private Severity severity;
        private List<ResourceKey> resourceKeys = new ArrayList<>();
        private Map<String, Alarm> alarms = new LinkedHashMap<>();
        private String diagnosticText;

        private Builder() {
        }

        private Builder(Situation situation) {
            this.id = situation.getId();
            this.creationTime = situation.getCreationTime();
            this.severity = situation.getSeverity();
            // Copy contents for the collections to avoid referencing a collection we don't control
            this.resourceKeys.addAll(situation.getResourceKeys());
            this.alarms.putAll(situation.getAlarms()
                    .stream()
                    .collect(Collectors.toMap(Alarm::getId, alarm -> alarm,
                            (Alarm oldAlarm, Alarm newAlarm) -> newAlarm, LinkedHashMap::new)));
            this.diagnosticText = situation.getDiagnosticText();
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setCreationTime(long creationTime) {
            this.creationTime = creationTime;
            return this;
        }

        public Builder setSeverity(Severity severity) {
            this.severity = severity;
            return this;
        }

        public Builder setResourceKeys(List<ResourceKey> resourceKeys) {
            this.resourceKeys = resourceKeys;
            return this;
        }

        public Builder addResourceKey(ResourceKey resourceKey) {
            resourceKeys.add(resourceKey);
            return this;
        }

        public Builder setAlarms(Map<String, Alarm> alarms) {
            this.alarms = alarms;
            return this;
        }

        public Builder setAlarms(Set<Alarm> alarms) {
            this.alarms = alarms.stream().collect(Collectors.toMap(Alarm::getId, alarm -> alarm, (aOld, aNew) -> aNew
                    , LinkedHashMap::new));
            return this;
        }

        public Builder addAlarm(Alarm alarm) {
            this.alarms.put(alarm.getId(), alarm);
            return this;
        }

        public Builder addAlarm(Alarm alarm, BiPredicate<String, String> predicate) {
            if (predicate.test(alarm.getId(), id)) {
                this.alarms.put(alarm.getId(), alarm);
            }

            return this;
        }

        public Builder setDiagnosticText(String diagnosticText) {
            this.diagnosticText = diagnosticText;
            return this;
        }

        public ImmutableSituation build() {
            Objects.requireNonNull(id, "Id cannot be null");
            Objects.requireNonNull(creationTime, "creation time cannot be null");

            return new ImmutableSituation(this);
        }
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilderNow() {
        Builder builder = new Builder();
        builder.setCreationTime(System.currentTimeMillis());
        return builder;
    }

    public static Builder newBuilderFrom(Situation situation) {
        return new Builder(situation);
    }

    /**
     * Copies a map of alarms converting each alarm to an immutable reference if needed.
     *
     * @param alarms the map to copy
     * @return a new map containing only immutable objects
     */
    private Map<String, Alarm> copyAlarms(Map<String, Alarm> alarms) {
        return alarms.entrySet()
                .stream()
                .collect(Collectors.toMap(Map.Entry::getKey,
                        entry -> {
                            Alarm alarm = entry.getValue();

                            if (!(alarm instanceof ImmutableAlarm)) {
                                return ImmutableAlarm.newBuilderFrom(entry.getValue()).build();
                            }

                            return alarm;
                        },
                        (oldAlarm, newAlarm) -> newAlarm, LinkedHashMap::new));
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    @Override
    public List<ResourceKey> getResourceKeys() {
        return resourceKeys == null ? Collections.emptyList() : Collections.unmodifiableList(resourceKeys);
    }

    @Override
    public Set<Alarm> getAlarms() {
        return alarms == null ? Collections.emptySet() : Collections.unmodifiableSet(new HashSet<>(alarms.values()));
    }

    @Override
    public Severity getSeverity() {
        return severity;
    }

    @Override
    public String getDiagnosticText() {
        return diagnosticText;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImmutableSituation that = (ImmutableSituation) o;
        return creationTime == that.creationTime &&
                severity == that.severity &&
                Objects.equals(resourceKeys, that.resourceKeys) &&
                Objects.equals(alarms, that.alarms) &&
                Objects.equals(diagnosticText, that.diagnosticText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(creationTime, resourceKeys, alarms, severity, diagnosticText);
    }

    @Override
    public String toString() {
        return "ImmutableSituation{" +
                "id='" + id + '\'' +
                ", creationTime=" + creationTime +
                ", severity=" + severity +
                ", resourceKeys=" + resourceKeys +
                ", alarms=" + alarms +
                ", diagnosticText='" + diagnosticText + '\'' +
                '}';
    }
}
