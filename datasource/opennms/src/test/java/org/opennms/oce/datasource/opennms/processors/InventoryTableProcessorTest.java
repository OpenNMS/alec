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

package org.opennms.oce.datasource.opennms.processors;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.processor.ProcessorContext;
import org.apache.kafka.streams.processor.PunctuationType;
import org.apache.kafka.streams.processor.Punctuator;
import org.apache.kafka.streams.state.KeyValueIterator;
import org.apache.kafka.streams.state.KeyValueStore;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.stubbing.Answer;
import org.opennms.oce.datasource.api.InventoryHandler;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.opennms.HandlerRegistry;
import org.opennms.oce.datasource.opennms.proto.InventoryModelProtos;

public class InventoryTableProcessorTest {
    private int addCallbackCounter;
    private int removeCallbackCounter;
    private final Map<String, InventoryModelProtos.InventoryObjects> inventoryMap = new HashMap<>();

    @Test
    public void testAddRemoveCallbacks() {
        long step = 10000L;

        KeyValueStore inventoryStore = mock(KeyValueStore.class);
        //noinspection unchecked
        when(inventoryStore.delete(any(String.class))).thenAnswer((Answer) invocation ->
                inventoryMap.remove((String) invocation.getArguments()[0]));
        when(inventoryStore.all()).thenReturn(new MockKeyValueIteratorImpl(Collections.emptyMap()));

        ProcessorContext mockProcessorContext = mock(ProcessorContext.class);
        when(mockProcessorContext.getStateStore(any(String.class))).thenReturn(inventoryStore);

        HandlerRegistry<InventoryHandler> handlerRegistry = new HandlerRegistry<>();
        handlerRegistry.register(new TestInventoryHandler());

        InventoryTableProcessor inventoryTableProcessor = new InventoryTableProcessor(handlerRegistry, step, step);
        inventoryTableProcessor.init(mockProcessorContext);

        ArgumentCaptor<Punctuator> punctuatorArgumentCaptor = ArgumentCaptor.forClass(Punctuator.class);
        verify(mockProcessorContext).schedule(any(Long.class), any(PunctuationType.class),
                punctuatorArgumentCaptor.capture());
        Punctuator capturedPunctuator = punctuatorArgumentCaptor.getValue();

        // Create two identical inventory with different owners and different expiry times
        inventoryMap.put("owner1", getInventoryObjectExpiringAt(step));
        inventoryMap.put("owner2", getInventoryObjectExpiringAt(step * 2));
        inventoryMap.forEach(inventoryTableProcessor::process);
        // Two of the same inventory should result in only one add
        assertThat(addCallbackCounter, equalTo(1));

        // Since the inventory object had two references the first delete should not result in handlers being notified
        // of a remove
        when(inventoryStore.all()).thenReturn(new MockKeyValueIteratorImpl(inventoryMap));
        capturedPunctuator.punctuate(step);
        assertThat(removeCallbackCounter, equalTo(0));

        // The second delete should result in the inventory object no longer being referenced and now the handler should
        // be notified
        when(inventoryStore.all()).thenReturn(new MockKeyValueIteratorImpl(inventoryMap));
        capturedPunctuator.punctuate(step * 2);
        assertThat(removeCallbackCounter, equalTo(1));
    }

    private InventoryModelProtos.InventoryObjects getInventoryObjectExpiringAt(long expiryTime) {
        return InventoryModelProtos.InventoryObjects
                .newBuilder()
                .addInventoryObject(InventoryModelProtos.InventoryObject.newBuilder()
                        .setId("test.id")
                        .build())
                .setExpiresAt(expiryTime)
                .build();
    }

    private final class TestInventoryHandler implements InventoryHandler {
        @Override
        public void onInventoryAdded(Collection<InventoryObject> inventoryObjects) {
            addCallbackCounter++;
        }

        @Override
        public void onInventoryRemoved(Collection<InventoryObject> inventoryObjects) {
            removeCallbackCounter++;
        }
    }

    private static final class MockKeyValueIteratorImpl implements KeyValueIterator<String,
            InventoryModelProtos.InventoryObjects> {
        private final Iterator<String> iterator;
        private final Map<String, InventoryModelProtos.InventoryObjects> map;

        MockKeyValueIteratorImpl(Map<String, InventoryModelProtos.InventoryObjects> map) {
            this.map = map;
            iterator = map.keySet().iterator();
        }

        @Override
        public void close() {
        }

        @Override
        public String peekNextKey() {
            return null;
        }

        @Override
        public boolean hasNext() {
            return iterator.hasNext();
        }

        @Override
        public KeyValue<String, InventoryModelProtos.InventoryObjects> next() {
            String key = iterator.next();

            return new KeyValue<>(key, map.get(key));
        }
    }
}
