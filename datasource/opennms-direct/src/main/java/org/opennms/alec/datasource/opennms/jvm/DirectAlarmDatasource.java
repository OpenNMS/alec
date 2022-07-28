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

package org.opennms.alec.datasource.opennms.jvm;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.AlarmHandler;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.SituationHandler;
import org.opennms.alec.datasource.common.HandlerRegistry;
import org.opennms.integration.api.v1.alarms.AlarmLifecycleListener;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.events.EventForwarder;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Severity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.Sets;

public class DirectAlarmDatasource implements AlarmDatasource, AlarmLifecycleListener, SituationDatasource {

    private static final Logger LOG = LoggerFactory.getLogger(DirectAlarmDatasource.class);

    private final HandlerRegistry<AlarmHandler> alarmHandlers = new HandlerRegistry<>();
    private final HandlerRegistry<SituationHandler> situationHandlers = new HandlerRegistry<>();

    private final Map<Integer, org.opennms.integration.api.v1.model.Alarm> alarmsById = new LinkedHashMap<>();

    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final CountDownLatch initLock = new CountDownLatch(1);

    private final AlarmDao alarmDao;
    private final EventForwarder eventForwarder;
    private final ApiMapper mapper;

    public DirectAlarmDatasource(AlarmDao alarmDao, EventForwarder eventForwarder, ApiMapper mapper) {
        this.alarmDao = Objects.requireNonNull(alarmDao);
        this.eventForwarder = Objects.requireNonNull(eventForwarder);
        this.mapper = Objects.requireNonNull(mapper);
    }

    public void init() {
        // Populate the map with the current set of alarms
        alarmDao.getAlarms().forEach(a -> alarmsById.put(a.getId(), a));
        initLock.countDown();
    }
    
    private void waitForInit() {
        try {
            initLock.await();
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while waiting for init lock.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void handleAlarmSnapshot(List<org.opennms.integration.api.v1.model.Alarm> alarms) {
        waitForInit();

        final List<Consumer<Void>> callbacks = new LinkedList<>();
        final Map<Integer,org.opennms.integration.api.v1.model.Alarm> snapshotAlarmsById = alarms.stream()
                .collect(Collectors.toMap(org.opennms.integration.api.v1.model.Alarm::getId, a -> a));
        rwLock.writeLock().lock();
        try {
            final Set<Integer> alarmIdsInMap = alarmsById.keySet();
            final Set<Integer> alarmIdsInSnapshot = snapshotAlarmsById.keySet();

            // Push clears for alarms that are in the map, but not in the snapshot
            final Set<Integer> alarmIdsToDelete = Sets.newHashSet(Sets.difference(alarmIdsInMap, alarmIdsInSnapshot));
            for (Integer alarmIdToDelete : alarmIdsToDelete) {
                callbacks.add(handleDeletedNoLock(alarmIdToDelete));
            }

            // Push new alarms for ids that are in the snapshot, but not in the map
            final Set<Integer> alarmIdsToAdd = Sets.newHashSet(Sets.difference(alarmIdsInSnapshot, alarmIdsInMap));
            for (Integer alarmIdToAdd : alarmIdsToAdd) {
                callbacks.add(handleNewOrUpdatedAlarmNoLock(snapshotAlarmsById.get(alarmIdToAdd)));
            }

            // Handle Updates
            final Set<Integer> commonAlarmIds = Sets.newHashSet(Sets.intersection(alarmIdsInSnapshot, alarmIdsInMap));
            commonAlarmIds.forEach(id -> {
                callbacks.add(handleNewOrUpdatedAlarmNoLock(snapshotAlarmsById.get(id)));
            });
        } finally {
            rwLock.writeLock().unlock();
        }
        // Issue the callbacks outside of the write lock to avoid a possible deadlock
        callbacks.forEach(c -> c.accept(null));
    }

    @Override
    public void handleNewOrUpdatedAlarm(org.opennms.integration.api.v1.model.Alarm alarm) {
        waitForInit();

        final Consumer<Void> callback;
        rwLock.writeLock().lock();
        try {
            callback = handleNewOrUpdatedAlarmNoLock(alarm);
        } finally {
            rwLock.writeLock().unlock();
        }

        // Issue the callback outside of the write lock to avoid a possible deadlock
        callback.accept(null);
    }

    private Consumer<Void> handleNewOrUpdatedAlarmNoLock(org.opennms.integration.api.v1.model.Alarm alarm) {
        final org.opennms.integration.api.v1.model.Alarm existingAlarm = alarmsById.get(alarm.getId());
        alarmsById.put(alarm.getId(), alarm);
        final Alarm oceAlarm = mapper.toAlarm(alarm);

        if (!alarm.isSituation()) {
            if (existingAlarm == null && !isCleared(alarm)) {
                return (a) -> alarmHandlers.forEach(h -> h.onAlarmCreatedOrUpdated(oceAlarm));
                // if there was no existing alarm, and the new one is cleared, don't bother issuing the callback
            } else if (existingAlarm != null) {
                if (!isCleared(alarm)) {
                    return (a) -> alarmHandlers.forEach(h -> h.onAlarmCreatedOrUpdated(oceAlarm));
                } else {
                    return (a) ->  alarmHandlers.forEach(h -> h.onAlarmCleared(oceAlarm));
                }
            }
        } else {
            final Situation oceSituation = mapper.toSituation(alarm);
            return (a) ->  situationHandlers.forEach(h -> h.onSituation(oceSituation));
        }
        return (a) -> {};
    }

    @Override
    public void handleDeletedAlarm(int alarmId, String reductionKey) {
        waitForInit();

        final Consumer<Void> callback;
        rwLock.writeLock().lock();
        try {
            callback = handleDeletedNoLock(alarmId);
        } finally {
            rwLock.writeLock().unlock();
        }
        callback.accept(null);
    }

    private Consumer<Void> handleDeletedNoLock(int alarmId) {
        final org.opennms.integration.api.v1.model.Alarm existingAlarm = alarmsById.remove(alarmId);
        if (existingAlarm != null) {
            if (!existingAlarm.isSituation()) {
                final Alarm oceAlarm = mapper.toAlarm(existingAlarm);
                return (a) -> alarmHandlers.forEach(h -> h.onAlarmCleared(oceAlarm));
            } else {
                final Situation oceSituation = mapper.toSituation(existingAlarm);
                return (a) -> situationHandlers.forEach(h -> h.onSituation(oceSituation));
            }
        }
        return (a) -> {};
    }

    @Override
    public List<Alarm> getAlarms() {
        waitForInit();

        rwLock.readLock().lock();
        try {
            return alarmsById.values().stream()
                    .filter(a -> !a.isSituation())
                    .map(mapper::toAlarm)
                    .collect(Collectors.toList());
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public List<Alarm> getAlarmsAndRegisterHandler(AlarmHandler handler) {
        rwLock.readLock().lock();
        try {
            alarmHandlers.register(handler);
            return getAlarms();
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public void registerHandler(AlarmHandler handler) {
        alarmHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(AlarmHandler handler) {
        alarmHandlers.unregister(handler);
    }

    @Override
    public void waitUntilReady() {
        waitForInit();
    }

    private static boolean isCleared(org.opennms.integration.api.v1.model.Alarm alarm) {
        return Severity.INDETERMINATE.equals(alarm.getSeverity()) || Severity.CLEARED.equals(alarm.getSeverity());
    }

    @Override
    public List<Situation> getSituations() {
        waitForInit();

        rwLock.readLock().lock();
        try {
            return alarmsById.values().stream()
                    .filter(org.opennms.integration.api.v1.model.Alarm::isSituation)
                    .map(mapper::toSituation)
                    .collect(Collectors.toList());
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public List<Situation> getSituationsWithAlarmId() {
        waitForInit();

        rwLock.readLock().lock();
        try {
            return alarmsById.values().stream()
                    .filter(org.opennms.integration.api.v1.model.Alarm::isSituation)
                    .map(mapper::toSituationWithAlarmId)
                    .collect(Collectors.toList());
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public void forwardSituation(Situation situation) {
        final InMemoryEvent event = mapper.toEvent(situation);
        eventForwarder.sendSync(event);
    }

    @Override
    public void registerHandler(SituationHandler handler) {
        situationHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(SituationHandler handler) {
        situationHandlers.unregister(handler);
    }
}
