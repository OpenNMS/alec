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

package org.opennms.alec.feature.graph.rest.model;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.features.graph.api.Vertex;
import org.opennms.alec.features.graph.common.GraphMLConverter;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlarmSummary {
    private final String id;
    private final String vertexId;
    private final String inventoryObjectId;
    private final String inventoryObjectType;
    private final String summary;

    public AlarmSummary(Alarm alarm) {
        this(null, alarm);
    }

    public AlarmSummary(Vertex vertex, Alarm alarm) {
        if (vertex != null) {
            this.vertexId = GraphMLConverter.getVertexIdFor(vertex, alarm);
        } else {
            this.vertexId = null;
        }
        this.id = alarm.getId();
        this.inventoryObjectId = alarm.getInventoryObjectId();
        this.inventoryObjectType = alarm.getInventoryObjectType();
        this.summary = alarm.getSummary();
    }

    public String getId() {
        return id;
    }

    @JsonProperty("vertex-id")
    public String getVertexId() {
        return vertexId;
    }

    @JsonProperty("inventory-object-id")
    public String getInventoryObjectId() {
        return inventoryObjectId;
    }

    @JsonProperty("inventory-object-type")
    public String getInventoryObjectType() {
        return inventoryObjectType;
    }

    public String getSummary() {
        return summary;
    }
}
