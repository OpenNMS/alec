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

package org.opennms.oce.driver.main;

import java.util.List;
import java.util.Objects;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.AlarmDatasource;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.IncidentDatasource;
import org.opennms.oce.datasource.api.InventoryDatasource;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.EngineFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Driver {
    private static final Logger LOG = LoggerFactory.getLogger(Driver.class);

    private final AlarmDatasource alarmDatasource;
    private final InventoryDatasource inventoryDatasource;
    private final IncidentDatasource incidentDatasource;
    private final EngineFactory engineFactory;

    private Thread initThread;
    private Engine engine;
    private Timer timer;

    public Driver(AlarmDatasource alarmDatasource, InventoryDatasource inventoryDatasource, IncidentDatasource incidentDatasource, EngineFactory engineFactory) {
        this.alarmDatasource = Objects.requireNonNull(alarmDatasource);
        this.inventoryDatasource = Objects.requireNonNull(inventoryDatasource);
        this.incidentDatasource = Objects.requireNonNull(incidentDatasource);
        this.engineFactory = Objects.requireNonNull(engineFactory);
    }

    public void init() {
        // The Blueprint requires the init method to return 'void', so we can't make it call initAsync directly
        initAsync();
    }

    public CompletableFuture<Void> initAsync() {
        final CompletableFuture<Void> future = new CompletableFuture<>();
        engine = engineFactory.createEngine();
        timer = new Timer();
        // The get methods on the datasources may block, so we do this on a separate thread
        initThread = new Thread(() -> {
            try {
                final List<Alarm> alarms = alarmDatasource.getAlarmsAndRegisterHandler(engine);
                final List<Incident> incidents = incidentDatasource.getIncidents();
                final List<InventoryObject> inventory = inventoryDatasource.getInventoryAndRegisterHandler(engine);
                engine.init(alarms, incidents, inventory);
            } catch (Exception e) {
                if (e.getCause() != null && e.getCause() instanceof InterruptedException) {
                    LOG.warn("Initialization was interrupted.");
                } else {
                    LOG.error("Initialization failed with exception.", e);
                }
                future.completeExceptionally(e);
                return;
            }

            timer.scheduleAtFixedRate(new TimerTask() {
                @Override
                public void run() {
                    try {
                        engine.tick(System.currentTimeMillis());
                    } catch (Exception e) {
                        LOG.error("Tick failed with exception.", e);
                    }
                }
            }, 0, engine.getTickResolutionMs());
            future.complete(null);
        });
        initThread.setName(String.format("OCE Driver Startup [%s]", engineFactory.getName()));
        initThread.start();
        return future;
    }

    public void destroy() {
        if (initThread != null && initThread.isAlive()) {
            initThread.interrupt();
            try {
                initThread.join(TimeUnit.MINUTES.toMillis(1));
                if (initThread.isAlive()) {
                    LOG.warn("Initializing thread is still running.");
                }
            } catch (InterruptedException e) {
                LOG.error("Interrupted while waiting for initialization thread to stop.");
            }
        }

        if (timer != null) {
            timer.cancel();
            timer = null;
        }
        if (engine != null) {
            engine.destroy();
            engine = null;
        }
    }
}
