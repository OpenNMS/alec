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

import org.kie.api.KieBase;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;
import org.opennms.oce.drools.model.Card;
import org.opennms.oce.drools.model.Device;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DroolsEngine {

    private static final Logger LOG = LoggerFactory.getLogger(DroolsEngine.class);

    private KieSession kieSession;

    private List<Device> devices = new ArrayList<>();
    private Map<String, FactHandle> idToFact = new HashMap<>();

    public void init() {
        try {
            KieServices ks = KieServices.Factory.get();
            KieContainer kcont = ks.newKieClasspathContainer(getClass().getClassLoader());
            KieBase kbase = kcont.getKieBase("sampleKBase");
            kieSession = kbase.newKieSession();

            LOG.info("KieSession started.");
        } catch (Exception e) {
            LOG.error("Failed to start KieSession.", e);
        }
    }

    public void destroy() {
        if (kieSession != null) {
            kieSession.dispose();
            LOG.info("KieSession disposed.");
        }
    }

    public void addDevice(Device device) {
        // Add all of the cards
        devices.add(device);
        for (Card card : device.getCards()) {
            FactHandle factHandle = kieSession.insert(card);
            idToFact.put(card.getId(), factHandle);
        }
    }

    public void correlate() {
        // FIXME: Wrong and inneficient
        for (Device device : devices) {
            for (Card card : device.getCards()) {
                FactHandle factHandle = idToFact.get(card.getId());
                kieSession.delete(factHandle);
                factHandle = kieSession.insert(card);
                idToFact.put(card.getId(), factHandle);
            }
        }
        kieSession.fireAllRules();
    }
}
