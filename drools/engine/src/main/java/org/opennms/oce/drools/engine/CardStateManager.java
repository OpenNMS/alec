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

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.opennms.oce.connector.api.EventForwarder;
import org.opennms.oce.connector.model.Card;
import org.opennms.oce.connector.model.Event;
import org.opennms.oce.connector.model.Port;

public class CardStateManager {

    private final EventForwarder eventForwarder;

    public CardStateManager(EventForwarder eventForwarder) {
        this.eventForwarder = Objects.requireNonNull(eventForwarder);
    }

    public void fail(Card card) {
        if (card.isFailed()) {
            // Nothing to do
            return;
        }
        List<String> associatedReductionKeys = card.getPorts().stream()
                .filter(Port::isFailed)
                .map(p -> p.getAlarm().getReductionKey())
                .collect(Collectors.toList());
        card.setFailed(true);
        eventForwarder.sendNow(new Event(Event.TRIGGER_UEI,  card.getId(), associatedReductionKeys));
    }

    public void recover(Card card) {
        if (!card.isFailed()) {
            // Nothing to do
            return;
        }
        card.setFailed(false);
        eventForwarder.sendNow(new Event(Event.CLEAR_UEI, card.getId()));
    }
}
