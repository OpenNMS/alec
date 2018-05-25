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

package org.opennms.oce.engine.topology;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.kie.api.KieBase;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Incident;
import org.opennms.oce.datasource.api.InventoryObject;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.engine.api.Engine;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.engine.topology.model.Group;
import org.opennms.oce.engine.topology.model.Model;
import org.opennms.oce.engine.topology.model.ModelBuilderImpl;
import org.opennms.oce.engine.topology.model.ModelObject;
import org.opennms.oce.engine.topology.model.ReportObject;
import org.opennms.oce.engine.topology.model.WorkingMemoryObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.Iterables;

/**
 * A topology driver processor with Rules Engine
 *
 */
public class TopologyEngine implements Engine {

    private static Logger LOG = LoggerFactory.getLogger(TopologyEngine.class);

    private IncidentHandler handler;

    private Model inventory;

    private final KieSession kieSession;

    private final IdGenerator reportIds = new IdGenerator();

    private Map<WorkingMemoryObject, FactHandle> objectToFactHandles = new HashMap<>();

    public TopologyEngine() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kcont = ks.newKieClasspathContainer(getClass().getClassLoader());
        KieBase kbase = kcont.getKieBase("topologyKBase");
        kieSession = kbase.newKieSession();
        kieSession.setGlobal("actionMgr", new ActionManager(this));

        LOG.info("KieSession started.");
    }

    @Override
    public void init(List<Alarm> alarms, List<Incident> incidents, List<InventoryObject> inventory) {
        // TODO: How to process initial alarms and incidents?
        this.inventory = ModelBuilderImpl.buildModel(inventory);
    }

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        onAlarm(alarm);
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        onAlarm(alarm);
    }

    private void onAlarm(Alarm alarm) {
        if (inventory == null) {
            throw new IllegalStateException("Inventory is required for the topology engine before processing any alarms.");
        }

        // Find the associated model object for this alarm, we assume there is a single model object
        final ModelObject object = getObjectForAlarm(alarm);
        if (object == null) {
            LOG.warn("No model object found for alarm: {}. The alarm will not be processed.", alarm);
            return;
        }
        // Update the model object with the alarm
        LOG.info("ENGINE onAlarm<<< {}", object);
        object.onAlarm(alarm);
        LOG.info("ENGINE onAlarm>>> {}", object);

        // Add ModelObject to the Working Memory
        addOrUpdateMemoryObject(object);
        // Add Groups to the Working Memeory if required
        for (Group alarmGroup : object.getAlarmGroups()) {
            addOrUpdateMemoryObject(alarmGroup);
        }
        // Add Any reports for this object to Working Memory
        if (object.getReport().isPresent()) {
            ReportObject report = object.getReport().get();
            addOrUpdateMemoryObject(report);
        }
    }

    @Override
    public void onInventoryAdded(InventoryObject inventoryObject) {
        // TODO
    }

    @Override
    public void onInventoryRemoved(InventoryObject inventoryObject) {
        // TODO
    }

    @Override
    public void registerIncidentHandler(IncidentHandler handler) {
        this.handler = handler;
    }

    @Override
    public long getTickResolutionMs() {
        return TimeUnit.SECONDS.toMillis(1);
    }

    @Override
    public void tick(long timestampInMillis) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Tick at {} ({})", new Date(timestampInMillis), timestampInMillis);
        }
        kieSession.fireAllRules();
    }

    @Override
    public void destroy() {
        if (kieSession != null) {
            kieSession.dispose();
            LOG.info("KieSession disposed.");
        }
    }

    private ModelObject getObjectForAlarm(Alarm alarm) {
        final ResourceKey resourceKey = Iterables.getFirst(alarm.getResourceKeys(), null);
        if (resourceKey == null) {
            throw new IllegalStateException("Alarms must have at least one resource key.");
        }

        final String lastToken = Iterables.getLast(resourceKey.getTokens());
        if (lastToken == null) {
            throw new IllegalStateException("Tokens must have at least one element");
        }

        final int idx = lastToken.indexOf(",");
        if (idx < 1) {
            throw new IllegalStateException("Improperly formatted token. Type must be defined: " + lastToken);
        }
        final String type = lastToken.substring(0, idx);
        final String id = lastToken.substring(idx + 1, lastToken.length());
        return inventory.getObjectById(type, id);
    }

    public IncidentHandler getIncidentHandler() {
        return handler;
    }

    // Add or Update a ModelObject in Rules Working Memory.
    public void addOrUpdateMemoryObject(WorkingMemoryObject object) {
        if (objectToFactHandles.containsKey(object)) {
            // Update the fact
            LOG.info("WM UPDATE {}", object);
            kieSession.update(objectToFactHandles.get(object), object);
        } else {
            // Insert the fact
            LOG.info("WM ADD {}", object);
            objectToFactHandles.put(object, kieSession.insert(object));
        }
    }

    // Remove an Object from Working Memory
    public void delete(WorkingMemoryObject object) {
        if (!objectToFactHandles.containsKey(object)) {
            LOG.warn("Cannot delete Object {} from Context", object);
            return;
        }
        LOG.info("WM DELETE {}", object);
        kieSession.delete(objectToFactHandles.get(object));
        objectToFactHandles.remove(object);
    }

    // for unit tests
    public void setReportIds(List<String> ids) {
        reportIds.setIds(ids);
    }

    public String nextReportId() {
        return reportIds.next();
    }

}
