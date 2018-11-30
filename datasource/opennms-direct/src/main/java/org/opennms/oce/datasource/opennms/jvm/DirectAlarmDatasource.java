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

package org.opennms.oce.datasource.opennms.jvm;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.stream.Collectors;

import org.opennms.integration.api.v1.alarms.AlarmLifecycleListener;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.events.EventForwarder;
import org.opennms.integration.api.v1.model.InMemoryEvent;
import org.opennms.integration.api.v1.model.Severity;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.AlarmHandler;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationDatasource;
import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.datasource.common.HandlerRegistry;
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

    public DirectAlarmDatasource(AlarmDao alarmDao, EventForwarder eventForwarder) {
        this.alarmDao = Objects.requireNonNull(alarmDao);
        this.eventForwarder = Objects.requireNonNull(eventForwarder);
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

        final Map<Integer,org.opennms.integration.api.v1.model.Alarm> snapshotAlarmsById = alarms.stream()
                .collect(Collectors.toMap(org.opennms.integration.api.v1.model.Alarm::getId, a -> a));
        rwLock.writeLock().lock();
        try {
            final Set<Integer> alarmIdsInMap = alarmsById.keySet();
            final Set<Integer> alarmIdsInSnapshot = snapshotAlarmsById.keySet();

            // Push clears for alarms that are in the map, but not in the snapshot
            final Set<Integer> alarmIdsToDelete = Sets.newHashSet(Sets.difference(alarmIdsInMap, alarmIdsInSnapshot));
            for (Integer alarmIdToDelete : alarmIdsToDelete) {
                handleDeletedNoLock(alarmIdToDelete);
            }

            // Push new alarms for ids that are in the snapshot, but not in the map
            final Set<Integer> alarmIdsToAdd = Sets.newHashSet(Sets.difference(alarmIdsInSnapshot, alarmIdsInMap));
            for (Integer alarmIdToAdd : alarmIdsToAdd) {
                handleNewOrUpdatedAlarmNoLock(snapshotAlarmsById.get(alarmIdToAdd));
            }

            // Handle Updates
            final Set<Integer> commonAlarmIds = Sets.newHashSet(Sets.intersection(alarmIdsInSnapshot, alarmIdsInMap));
            commonAlarmIds.forEach(id -> {
                handleNewOrUpdatedAlarmNoLock(snapshotAlarmsById.get(id));
            });
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    @Override
    public void handleNewOrUpdatedAlarm(org.opennms.integration.api.v1.model.Alarm alarm) {
        waitForInit();

        rwLock.writeLock().lock();
        try {
            handleNewOrUpdatedAlarmNoLock(alarm);
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    private void handleNewOrUpdatedAlarmNoLock(org.opennms.integration.api.v1.model.Alarm alarm) {
        final org.opennms.integration.api.v1.model.Alarm existingAlarm = alarmsById.get(alarm.getId());
        alarmsById.put(alarm.getId(), alarm);
        final Alarm oceAlarm = Mappers.toAlarm(alarm);

        if (!alarm.isSituation()) {
            if (existingAlarm == null && !isCleared(alarm)) {
                alarmHandlers.forEach(h -> h.onAlarmCreatedOrUpdated(oceAlarm));
                // if there was no existing alarm, and the new one is cleared, don't bother issuing the callback
            } else if (existingAlarm != null) {
                if (!isCleared(alarm)) {
                    alarmHandlers.forEach(h -> h.onAlarmCreatedOrUpdated(oceAlarm));
                } else {
                    alarmHandlers.forEach(h -> h.onAlarmCleared(oceAlarm));
                }
            }
        } else {
            final Situation oceSituation = Mappers.toSituation(existingAlarm);
            situationHandlers.forEach(h -> h.onSituation(oceSituation));
        }
    }

    @Override
    public void handleDeletedAlarm(int alarmId, String reductionKey) {
        waitForInit();

        rwLock.writeLock().lock();
        try {
            handleDeletedNoLock(alarmId);
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    private void handleDeletedNoLock(int alarmId) {
        final org.opennms.integration.api.v1.model.Alarm existingAlarm = alarmsById.remove(alarmId);
        if (existingAlarm != null) {
            if (!existingAlarm.isSituation()) {
                final Alarm oceAlarm = Mappers.toAlarm(existingAlarm);
                alarmHandlers.forEach(h -> h.onAlarmCleared(oceAlarm));
            } else {
                final Situation oceSituation = Mappers.toSituation(existingAlarm);
                situationHandlers.forEach(h -> h.onSituation(oceSituation));
            }
        }
    }

    @Override
    public List<Alarm> getAlarms() {
        waitForInit();

        rwLock.readLock().lock();
        try {
            return alarmsById.values().stream()
                    .map(Mappers::toAlarm)
                    .collect(Collectors.toList());
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public List<Alarm> getAlarmsAndRegisterHandler(AlarmHandler handler) {
        final List<org.opennms.oce.datasource.api.Alarm> alarms = new ArrayList<>();
        alarmHandlers.register(handler, (h) -> alarms.addAll(getAlarms()));
        return alarms;
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
        // pass
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
                    .map(Mappers::toSituation)
                    .collect(Collectors.toList());
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public void forwardSituation(Situation situation) {
        final InMemoryEvent event = Mappers.toEvent(situation);
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
