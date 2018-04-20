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

package org.opennms.oce.connector.impl;

import java.util.Collections;
import java.util.List;

import org.opennms.oce.connector.api.ModelProvider;
import org.opennms.oce.connector.model.Card;
import org.opennms.oce.connector.model.Device;
import org.opennms.oce.connector.model.Port;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ModelProviderImpl implements ModelProvider {
    private static final Logger LOG = LoggerFactory.getLogger(ModelProviderImpl.class);

    final static int N_CARDS = 4;
    final static int N_PORTS = 8;

    private final List<Device> devices;

    public ModelProviderImpl() {
        final Device device = new Device();
        device.setId("n0");
        int ifIndex = 1;
        for (int i = 1; i <= N_CARDS; i++) {
            Card card = new Card();
            card.setId(String.format("%s-c%d", device.getId(), i));
            device.getCards().add(card);
            for (int j = 1; j <= N_PORTS; j++) {
                Port port = new Port();
                port.setId(String.format("%s-p%d", card.getId(), ifIndex++));
                card.getPorts().add(port);
            }
        }
        devices = Collections.singletonList(device);
    }

    @Override
    public List<Device> getDevices() {
        return devices;
    }
}
