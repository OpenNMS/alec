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

package org.opennms.oce.feature.graph.rest.model;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.features.graph.common.GraphMLConverter;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SituationSummary {
    private final String id;
    private final String vertexId;
    private final long creationTime;
    private final List<AlarmSummary> alarms;

    public SituationSummary(Situation situation) {
        this.id = situation.getId();
        this.vertexId = GraphMLConverter.getVertexIdFor(situation);
        this.creationTime = situation.getCreationTime();
        alarms = situation.getAlarms().stream()
                .sorted(Comparator.comparing(Alarm::getId))
                .map(AlarmSummary::new)
                .collect(Collectors.toList());
    }

    public String getId() {
        return id;
    }

    @JsonProperty("vertex-id")
    public String getVertexId() {
        return vertexId;
    }

    @JsonProperty("creation-time")
    public long getCreationTime() {
        return creationTime;
    }

    @JsonProperty("alarms")
    public List<AlarmSummary> getAlarms() {
        return alarms;
    }
}
