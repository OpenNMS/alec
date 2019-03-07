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

package org.opennms.oce.datasource.opennms.serialization;

import java.util.Map;

import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serializer;
import org.opennms.oce.datasource.opennms.proto.FeedbackModelProtos;
import org.opennms.oce.datasource.opennms.proto.OpennmsModelProtos;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;

import com.google.protobuf.MessageLite;

public class OpennmsSerdes {

    static protected class WrapperSerde<T> implements Serde<T> {
        final private Serializer<T> serializer;
        final private Deserializer<T> deserializer;

        public WrapperSerde(Serializer<T> serializer, Deserializer<T> deserializer) {
            this.serializer = serializer;
            this.deserializer = deserializer;
        }

        @Override
        public void configure(Map<String, ?> configs, boolean isKey) {
            serializer.configure(configs, isKey);
            deserializer.configure(configs, isKey);
        }

        @Override
        public void close() {
            serializer.close();
            deserializer.close();
        }

        @Override
        public Serializer<T> serializer() {
            return serializer;
        }

        @Override
        public Deserializer<T> deserializer() {
            return deserializer;
        }
    }

    static public final class AlarmSerde extends OpennmsSerdes.WrapperSerde<OpennmsModelProtos.Alarm> {
        public AlarmSerde() {
            super(new AlarmSerializer(), new AlarmDeserializer());
        }
    }

    static public final class AlarmFeedbacksSerde extends OpennmsSerdes.WrapperSerde<FeedbackModelProtos.AlarmFeedbacks> {
        public AlarmFeedbacksSerde() {
            super(new AlarmFeedbacksSerializer(), new AlarmFeedbacksDeserializer());
        }
    }

    static public final class InventoryObjectSerde extends OpennmsSerdes.WrapperSerde<InventoryModelProtos.InventoryObject> {
        public InventoryObjectSerde() {
            super(new InventoryObjectSerializer(), new InventoryObjectDeserializer());
        }
    }


    static public final class ProtobufSerde<T extends MessageLite> extends OpennmsSerdes.WrapperSerde<T> {
        public ProtobufSerde(Class<T> clazz) {
            super(new ProtobufSerializer<>(), new ProtobufDeserializer<>(clazz));
        }
    }

    static public final class TopologyEdgeSerde extends OpennmsSerdes.WrapperSerde<OpennmsModelProtos.TopologyEdge> {
        public TopologyEdgeSerde() {
            super(new TopologyEdgeSerializer(), new TopologyEdgeDeserializer());
        }
    }

    /**
     * A serde for nullable {@code OpennmsModelProtos.Alarm} type.
     */
    static public Serde<OpennmsModelProtos.Alarm> Alarm() {
        return new AlarmSerde();
    }

    /**
     * A serde for nullable {@code InventoryModelProtos.InventoryObject} type.
     */
    static public Serde<InventoryModelProtos.InventoryObject> InventoryObject() {
        return new InventoryObjectSerde();
    }

    /**
     * A serde for nullable {@code InventoryModelProtos.InventoryObjects} type.
     */
    static public Serde<InventoryModelProtos.InventoryObjects> InventoryObjects() {
        return new ProtobufSerde<>(InventoryModelProtos.InventoryObjects.class);
    }

    /**
     * A serde for nullable {@code FeedbackModelProtos.AlarmFeedbacks} type.
     */
    static public Serde<FeedbackModelProtos.AlarmFeedbacks> AlarmFeedbacks() {
        return new AlarmFeedbacksSerde();
    }

    /**
     * A serde for nullable {@code OpennmsModelProtos.TopologyEdge} type.
     */
    static public Serde<OpennmsModelProtos.TopologyEdge> TopologyEdge() {
        return new TopologyEdgeSerde();
    }
}
