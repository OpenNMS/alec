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

package org.opennms.oce.features.graph.janusgraph;

import java.util.Objects;

import org.janusgraph.core.attribute.AttributeSerializer;
import org.janusgraph.diskstorage.ScanBuffer;
import org.janusgraph.diskstorage.WriteBuffer;
import org.janusgraph.graphdb.database.serialize.attribute.IntegerSerializer;
import org.janusgraph.graphdb.database.serialize.attribute.LongSerializer;
import org.janusgraph.graphdb.database.serialize.attribute.StringSerializer;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;

/**
 * This class serializes {@link AlarmBean} objects for persistence in JanusGraph.
 */
public class AlarmBeanSerializer implements AttributeSerializer<AlarmBean> {
    private StringSerializer stringSerializer = new StringSerializer();
    private LongSerializer longSerializer = new LongSerializer();
    private IntegerSerializer integerSerializer = new IntegerSerializer();

    @Override
    public AlarmBean read(ScanBuffer buffer) {
        String id = stringSerializer.read(buffer);
        long time = longSerializer.read(buffer);
        Severity severity = Severity.fromValue(integerSerializer.read(buffer));
        String inventoryObjectId = stringSerializer.read(buffer);
        String inventoryObjectType = stringSerializer.read(buffer);
        String summary = stringSerializer.read(buffer);
        String description = stringSerializer.read(buffer);

        AlarmBean alarmBean = new AlarmBean(id, time);
        alarmBean.setSeverity(severity);
        alarmBean.setInventoryObjectId(inventoryObjectId);
        alarmBean.setInventoryObjectType(inventoryObjectType);
        alarmBean.setSummary(summary);
        alarmBean.setDescription(description);

        return alarmBean;
    }

    @Override
    public void write(WriteBuffer buffer, AlarmBean attribute) {
        stringSerializer.write(buffer, attribute.getId());
        longSerializer.write(buffer, attribute.getTime());
        integerSerializer.write(buffer, attribute.getSeverity().getValue());
        stringSerializer.write(buffer, attribute.getInventoryObjectId());
        stringSerializer.write(buffer, attribute.getInventoryObjectType());
        stringSerializer.write(buffer, attribute.getSummary());
        stringSerializer.write(buffer, attribute.getDescription());
    }

    @Override
    public void verifyAttribute(AlarmBean value) {
        Objects.requireNonNull(value);
        Objects.requireNonNull(value.getId());
        Objects.requireNonNull(value.getSeverity());
        Objects.requireNonNull(value.getInventoryObjectId());
        Objects.requireNonNull(value.getInventoryObjectType());
        // TODO: Are summary and desc mandatory?
        Objects.requireNonNull(value.getSummary());
        Objects.requireNonNull(value.getDescription());
    }
}
