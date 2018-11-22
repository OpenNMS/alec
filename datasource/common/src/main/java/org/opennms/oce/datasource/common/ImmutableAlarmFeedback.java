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

import java.util.Objects;

import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.FeedbackType;

public final class ImmutableAlarmFeedback implements AlarmFeedback {
    private final String situationKey;
    private final String situationFingerprint;
    private final String alarmKey;
    private final FeedbackType feedbackType;
    private final String reason;
    private final String user;
    private final long timestamp;

    private ImmutableAlarmFeedback(Builder builder) {
        this.situationKey = builder.situationKey;
        this.situationFingerprint = builder.situationFingerprint;
        this.alarmKey = builder.alarmKey;
        this.feedbackType = builder.feedbackType;
        this.reason = builder.reason;
        this.user = builder.user;
        this.timestamp = builder.timestamp;
    }

    public static class Builder {
        private String situationKey;
        private String situationFingerprint;
        private String alarmKey;
        private FeedbackType feedbackType;
        private String reason;
        private String user;
        private long timestamp;

        private Builder() {
            timestamp = System.currentTimeMillis();
        }

        private Builder(AlarmFeedback alarmFeedback) {
            this.situationKey = alarmFeedback.getSituationKey();
            this.situationFingerprint = alarmFeedback.getSituationFingerprint();
            this.alarmKey = alarmFeedback.getAlarmKey();
            this.feedbackType = alarmFeedback.getFeedbackType();
            this.reason = alarmFeedback.getReason();
            this.user = alarmFeedback.getUser();
            this.timestamp = alarmFeedback.getTimestamp();
        }

        public Builder setSituationKey(String situationKey) {
            this.situationKey = situationKey;
            return this;
        }

        public Builder setSituationFingerprint(String situationFingerprint) {
            this.situationFingerprint = situationFingerprint;
            return this;
        }

        public Builder setAlarmKey(String alarmKey) {
            this.alarmKey = alarmKey;
            return this;
        }

        public Builder setFeedbackType(FeedbackType feedbackType) {
            this.feedbackType = feedbackType;
            return this;
        }

        public Builder setReason(String reason) {
            this.reason = reason;
            return this;
        }

        public Builder setUser(String user) {
            this.user = user;
            return this;
        }

        public Builder setTimestamp(long timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public ImmutableAlarmFeedback build() {
            Objects.requireNonNull(situationKey, "The situation key cannot be null");
            Objects.requireNonNull(alarmKey, "The alarm key cannot be null");
            Objects.requireNonNull(feedbackType, "The feedback type cannot be null");

            return new ImmutableAlarmFeedback(this);
        }
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilderFrom(AlarmFeedback alarmFeedback) {
        return new Builder(alarmFeedback);
    }

    @Override
    public String getSituationKey() {
        return situationKey;
    }

    @Override
    public String getSituationFingerprint() {
        return situationFingerprint;
    }

    @Override
    public String getAlarmKey() {
        return alarmKey;
    }

    @Override
    public FeedbackType getFeedbackType() {
        return feedbackType;
    }

    @Override
    public String getReason() {
        return reason;
    }

    @Override
    public String getUser() {
        return user;
    }

    @Override
    public long getTimestamp() {
        return timestamp;
    }
}
