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

package org.opennms.oce.drools.engine;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.kie.api.KieBase;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;
import org.opennms.oce.connector.api.AlarmHandler;
import org.opennms.oce.connector.api.AlarmRepository;
import org.opennms.oce.connector.api.EventForwarder;
import org.opennms.oce.connector.api.ModelProvider;
import org.opennms.oce.connector.model.Alarm;
import org.opennms.oce.connector.model.Card;
import org.opennms.oce.connector.model.Device;
import org.opennms.oce.connector.model.Port;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DroolsEngine implements AlarmHandler {

    private static final Logger LOG = LoggerFactory.getLogger(DroolsEngine.class);

    private final ModelProvider modelProvider;
    private final AlarmRepository alarmRepository;
    private final EventForwarder eventForwarder;

    private KieSession kieSession;
    private List<Device> devices = new ArrayList<>();
    private Map<String, FactHandle> idToFact = new HashMap<>();

    public DroolsEngine(ModelProvider modelProvider, AlarmRepository alarmRepository, EventForwarder eventForwarder) {
        this.modelProvider = Objects.requireNonNull(modelProvider);
        this.alarmRepository = Objects.requireNonNull(alarmRepository);
        this.eventForwarder = Objects.requireNonNull(eventForwarder);
    }

    public void init() {
        try {
            KieServices ks = KieServices.Factory.get();
            KieContainer kcont = ks.newKieClasspathContainer(getClass().getClassLoader());
            KieBase kbase = kcont.getKieBase("sampleKBase");
            kieSession = kbase.newKieSession();
            kieSession.setGlobal("stateMgr", new CardStateManager(eventForwarder));

            LOG.info("KieSession started.");

            devices = modelProvider.getDevices();
            for (Device device : devices) {
                for (Card card : device.getCards()) {
                    LOG.info("Adding card as fact in session: {}", card);
                    FactHandle factHandle = kieSession.insert(card);
                    idToFact.put(card.getId(), factHandle);
                }
            }

            alarmRepository.getAlarms().forEach(this::onAlarmCreatedOrUpdated);
            alarmRepository.registerHandler(this);
        } catch (Exception e) {
            LOG.error("Failed to start KieSession.", e);
        }
    }

    public void destroy() {
        alarmRepository.unregisterHandler(this);
        if (kieSession != null) {
            kieSession.dispose();
            LOG.info("KieSession disposed.");
        }
    }

    private void updateFactFor(Card card) {
        kieSession.update(idToFact.get(card.getId()), card);
        kieSession.fireAllRules();
    }

    @Override
    public void onAlarmCreatedOrUpdated(Alarm alarm) {
        final Port port = getMatchingPortForAlarm(alarm);
        if (port == null) {
            LOG.warn("Got an alarm {}, but did not find a matching port.", alarm);
            return;
        }
        if (port.isFailed()) {
            // Already failed, nothing to do
            return;
        }
        port.setFailed(true);
        updateFactFor(getMatchingCardForAlarm(alarm));
    }

    @Override
    public void onAlarmCleared(Alarm alarm) {
        final Port port = getMatchingPortForAlarm(alarm);
        if (port == null) {
            LOG.warn("Got an alarm {}, but did not find a matching port.", alarm);
            return;
        }
        if (!port.isFailed()) {
            // Already cleared, nothing to do
            return;
        }
        port.setFailed(false);
        updateFactFor(getMatchingCardForAlarm(alarm));
    }

    private Card getMatchingCardForAlarm(Alarm alarm) {
        for (Device device : devices) {
            for (Card card : device.getCards()) {
                for (Port port : card.getPorts()) {
                    if (Objects.equals(port.getId(), alarm.getRelatedEntityId())) {
                        return card;
                    }
                }
            }
        }
        return null;
    }

    private Port getMatchingPortForAlarm(Alarm alarm) {
        for (Device device : devices) {
            for (Card card : device.getCards()) {
                for (Port port : card.getPorts()) {
                    if (Objects.equals(port.getId(), alarm.getRelatedEntityId())) {
                        return port;
                    }
                }
            }
        }
        return null;
    }
}
