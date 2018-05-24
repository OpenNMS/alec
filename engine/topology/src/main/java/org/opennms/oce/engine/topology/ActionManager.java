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

import java.util.Objects;
import java.util.UUID;

import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.common.AlarmBean;
import org.opennms.oce.datasource.common.IncidentBean;
import org.opennms.oce.engine.topology.model.Group;
import org.opennms.oce.engine.topology.model.ModelObject;
import org.opennms.oce.engine.topology.model.OperationalState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ActionManager {
    private static final Logger LOG = LoggerFactory.getLogger(ActionManager.class);

    private final TopologyEngine topologyEngine;

    public ActionManager(TopologyEngine topologyEngine) {
        this.topologyEngine = Objects.requireNonNull(topologyEngine);
    }

    public void createIncidentOnFailure(Group group) {
        LOG.info("Got failure for: {}", group);

        ModelObject owner = group.getOwner();
        IncidentBean incident = new IncidentBean(UUID.randomUUID().toString());
        incident.addResourceKey(ResourceKey.key(owner.getType(), owner.getId()));
        group.getMembers().stream()
                .flatMap(mo -> mo.getAlarms().stream())
                .forEach(incident::addAlarm);
        topologyEngine.getIncidentHandler().onIncident(incident);
    }

    // Impact the Group Owner
    public void synthesizeAlarm(ModelObject owner, OperationalState operationalStatus) {
        owner.setOperationalState(operationalStatus);
        AlarmBean alarm = new AlarmBean(UUID.randomUUID().toString());
        alarm.getResourceKeys().add(new ResourceKey(owner.getType() + "," + owner.getId()));
        alarm.setSeverity(Severity.MAJOR);
        // Send the synthetic alarm to the engine.
        topologyEngine.onAlarmCreatedOrUpdated(alarm);
    }
}
