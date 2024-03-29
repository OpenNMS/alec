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

package org.opennms.alec.datasource.common;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.StringJoiner;
import java.util.function.BiPredicate;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.ResourceKey;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.Status;

/**
 * An implementation of {@link Situation} that enforces deep immutability.
 */
public final class ImmutableSituation implements Situation {
    private final String id;
    private final long longId;
    private final long creationTime;
    private final Severity severity;
    private final List<ResourceKey> resourceKeys;
    private final Map<String, Alarm> alarms;
    private final Set<Alarm> alarmsFromMap;
    private final String diagnosticText;
    private final Status status;
    private final String reductionKey;
    private final Long lastTime;
    private final String uei;
    private final String description;
    private final List<String> feedbacks;
    private final String engineParameter;

    private ImmutableSituation(Builder builder) {
        this.id = builder.id;
        this.longId = builder.longId;
        this.creationTime = builder.creationTime;
        this.severity = builder.severity;
        this.resourceKeys = builder.resourceKeys == null ? Collections.emptyList() :
                Collections.unmodifiableList(new ArrayList<>(builder.resourceKeys));
        this.alarms = builder.alarms == null ? Collections.emptyMap() :
                Collections.unmodifiableMap(copyAlarms(builder.alarms));
        this.alarmsFromMap = Collections.unmodifiableSet(new HashSet<>(alarms.values()));
        this.diagnosticText = builder.diagnosticText;
        this.status = builder.status;
        this.reductionKey = builder.reductionKey;
        this.lastTime = builder.lastTime;
        this.uei = builder.uei;
        this.description = builder.description;
        this.feedbacks = builder.feedbacks == null ? Collections.emptyList() :
                Collections.unmodifiableList(new ArrayList<>(builder.feedbacks));
        this.engineParameter = builder.engineParameter;
    }

    public static final class Builder {
        private String id;
        private long longId;
        private Long creationTime;
        private Severity severity;
        private List<ResourceKey> resourceKeys;
        private Map<String, Alarm> alarms;
        private String diagnosticText;
        private Status status;
        private String reductionKey;
        private Long lastTime;
        private String uei;
        private String description;
        private List<String> feedbacks;
        private String engineParameter;

        private Builder() {
        }

        private Builder(Situation situation) {
            this.id = situation.getId();
            this.longId = situation.getLongId();
            this.creationTime = situation.getCreationTime();
            this.severity = situation.getSeverity();
            // Copy contents for the collections to avoid referencing a collection we don't control
            this.resourceKeys = new ArrayList<>(situation.getResourceKeys());
            this.alarms = situation.getAlarms()
                    .stream()
                    .collect(Collectors.toMap(Alarm::getId, alarm -> alarm,
                            (Alarm oldAlarm, Alarm newAlarm) -> newAlarm, LinkedHashMap::new));
            this.diagnosticText = situation.getDiagnosticText();
            this.status = situation.getStatus();
            this.reductionKey = situation.getReductionKey();
            this.lastTime = situation.getLastTime();
            this.uei = situation.getUei();
            this.description = situation.getDescription();
            this.feedbacks = new ArrayList<>(situation.getFeedback());
            this.engineParameter = situation.getEngineParameter();
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setLongId(long longId) {
            this.longId = longId;
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
            if (resourceKeys == null) {
                resourceKeys = new ArrayList<>();
            }
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
            if (alarms == null) {
                alarms = new LinkedHashMap<>();
            }
            alarms.put(alarm.getId(), alarm);
            return this;
        }

        public Builder addAlarm(Alarm alarm, BiPredicate<String, String> predicate) {
            if (predicate.test(alarm.getId(), id)) {
                if (alarms == null) {
                    alarms = new LinkedHashMap<>();
                }
                this.alarms.put(alarm.getId(), alarm);
            }

            return this;
        }

        public Builder setDiagnosticText(String diagnosticText) {
            this.diagnosticText = diagnosticText;
            return this;
        }

        public Builder setStatus(Status status) {
            this.status = status;
            return this;
        }

        public Builder setReductionKey(String reductionKey) {
            this.reductionKey = reductionKey;
            return this;
        }

        public Builder setLastTime(Long lastTime) {
            this.lastTime = lastTime;
            return this;
        }

        public Builder setUei(String uei) {
            this.uei = uei;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setFeedbacks(List<String> feedbacks) {
            this.feedbacks = feedbacks;
            return this;
        }

        public Builder addFeedback(String feedback) {
            if (feedbacks == null) {
                feedbacks = new ArrayList<>();
            }
            feedbacks.add(feedback);
            return this;
        }

        public Builder setEngineParameter(String engineParameter) {
            this.engineParameter = engineParameter;
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
    public long getLongId() {
        return longId;
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    @Override
    public List<ResourceKey> getResourceKeys() {
        return resourceKeys;
    }

    @Override
    public Set<Alarm> getAlarms() {
        return alarmsFromMap;
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
    public Status getStatus() {
        return Optional.ofNullable(status).orElse(Status.CREATED);
    }

    @Override
    public String getReductionKey() {
        return reductionKey;
    }

    @Override
    public Long getLastTime() {
        return lastTime;
    }

    @Override
    public String getUei() {
        return uei;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public List<String> getFeedback() {
        return feedbacks;
    }

    @Override
    public String getEngineParameter() {
        return engineParameter;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", ImmutableSituation.class.getSimpleName() + "[", "]")
                .add("id='" + id + "'")
                .add("longId=" + longId)
                .add("creationTime=" + creationTime)
                .add("severity=" + severity)
                .add("resourceKeys=" + resourceKeys)
                .add("alarms=" + alarms)
                .add("alarmsFromMap=" + alarmsFromMap)
                .add("diagnosticText='" + diagnosticText + "'")
                .add("status=" + status)
                .add("reductionKey='" + reductionKey + "'")
                .add("lastTime=" + lastTime)
                .add("uei='" + uei + "'")
                .add("description='" + description + "'")
                .add("feedbacks=" + feedbacks)
                .add("engineParameter='" + engineParameter + "'")
                .toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImmutableSituation that = (ImmutableSituation) o;
        return longId == that.longId && creationTime == that.creationTime && Objects.equals(id, that.id) && severity == that.severity && Objects.equals(resourceKeys, that.resourceKeys) && Objects.equals(alarms, that.alarms) && Objects.equals(alarmsFromMap, that.alarmsFromMap) && Objects.equals(diagnosticText, that.diagnosticText) && status == that.status && Objects.equals(reductionKey, that.reductionKey) && Objects.equals(lastTime, that.lastTime) && Objects.equals(uei, that.uei) && Objects.equals(description, that.description) && Objects.equals(feedbacks, that.feedbacks) && Objects.equals(engineParameter, that.engineParameter);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, longId, creationTime, severity, resourceKeys, alarms, alarmsFromMap, diagnosticText, status, reductionKey, lastTime, uei, description, feedbacks, engineParameter);
    }
}
