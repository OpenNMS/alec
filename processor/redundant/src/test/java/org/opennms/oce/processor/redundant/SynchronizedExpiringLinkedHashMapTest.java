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

package org.opennms.oce.processor.redundant;

import static org.awaitility.Awaitility.await;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

import org.awaitility.core.ConditionTimeoutException;
import org.junit.Test;

/**
 * Tests for {@link SynchronizedExpiringLinkedHashMap}.
 */
public class SynchronizedExpiringLinkedHashMapTest {
    private Throwable throwableEncountered;

    /**
     * Test that keys expire when they should.
     */
    @Test
    public void testKeyExpiry() throws InterruptedException {
        int timeToLive = 100;
        TimeUnit sleepUnits = TimeUnit.MILLISECONDS;

        Map<String, String> map = SynchronizedExpiringLinkedHashMap.newInstance(timeToLive, sleepUnits);

        map.put("Hello", "World");
        // Sleep half the expiry time
        Thread.sleep(sleepUnits.convert(timeToLive / 2, TimeUnit.MILLISECONDS));
        // Entry should still exist
        assertEquals(map.size(), 1);
        // Sleep the other half of the expiry time
        Thread.sleep(sleepUnits.convert(timeToLive / 2, TimeUnit.MILLISECONDS));
        // Buffer some extra time
        Thread.sleep(10);
        // Now the key should have self-removed due to expiry
        assertEquals(map.size(), 0);
    }

    /**
     * Test that order of insertion/retrieval is maintained.
     */
    @Test
    public void testOrdering() {
        // A list that we know will be hashed out of order
        List<String> insertion = Arrays.asList("a", "z", "b", "12345", "9876", "y", "c", "x");
        Map<String, String> map = SynchronizedExpiringLinkedHashMap.newInstance(1, TimeUnit.SECONDS);
        insertion.forEach(e -> map.put(e, "test.value"));
        List<String> retrieval = new ArrayList<>(map.keySet());
        assertEquals(insertion, retrieval);
    }

    /**
     * Test for concurrency exceptions.
     */
    @Test(expected = ConditionTimeoutException.class)
    public void testConcurrency() {
        final Map<String, String> map = SynchronizedExpiringLinkedHashMap.newInstance(10,
                TimeUnit.MILLISECONDS);

        // One thread continuously puts entries into the map
        CompletableFuture.runAsync(() -> {
            for (int i = 0; i < Integer.MAX_VALUE; i++) {
                map.put(String.valueOf(i), "test.value");
            }
        });

        // One thread continuously attempts to iterate through the map
        CompletableFuture.runAsync(() -> {
            while (true) {
                // toString() will iterate the map
                map.toString();
            }
        }).exceptionally(throwable -> {
            throwableEncountered = throwable;
            return null;
        });

        // If the map is not thread safe we will get a ConcurrentModificationException since keys will expire and be
        // removed while iterating the map

        // Wait to see if we get an exception reading the map
        // We wait for an interval greater than the expiry time to guarantee that some entries will expire while we wait
        await().atMost(1, TimeUnit.SECONDS).until(() -> throwableEncountered != null);
        // We should have failed the wait above, if we didn't then we must have got an exception
        fail("Got exception: " + throwableEncountered.toString());
    }
}
