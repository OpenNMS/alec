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

package org.opennms.oce.model.impl;

import java.security.InvalidParameterException;
import java.util.HashSet;
import java.util.Set;

import org.opennms.oce.model.api.Group;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.api.OperationalState;
import org.opennms.oce.model.api.ServiceState;

public class GroupImpl implements Group {

    private ModelObject owner;

    private Set<ModelObject> members = new HashSet<>();

    private int normalStateCount;

    private int nonServiceAffectingCount;

    private int serviceAffectingCount;

    public GroupImpl(ModelObject owner) {
        this.owner = owner;
    }

    @Override
    public ModelObject getOwner() {
        return owner;
    }

    @Override
    public int getNumberMembers() {
        return members.size();
    }

    @Override
    public int getNumberNormalState() {
        return normalStateCount;
    }

    @Override
    public int getNumberNonServiceAffecting() {
        return nonServiceAffectingCount;
    }

    @Override
    public int getNumberServiceAffecting() {
        return serviceAffectingCount;
    }

    @Override
    public Set<ModelObject> getMembers() {
        return members;
    }

    @Override
    public void updateOperationalState(ModelObject object, OperationalState previous) {
        assertInGroup(object);
        incrementOperationStatus(object.getOperationalState());
        decrementOperationStatus(previous);
    }

    @Override
    public void updateServiceState(ModelObject object, ServiceState previous) {
        assertInGroup(object);
        // TODO - handle an object moving from IN service to OUT of service as a REMOVE
        // TODO - handle an object moving from OUT of service to IN service as an ADD
    }

    public void addMember(ModelObject member) {
        // TODO - assert NOT in group?
        members.add(member);
        if (member.getServiceState() == ServiceState.IN) {
            incrementOperationStatus(member.getOperationalState());
        }
    }

    public void removeMember(ModelObject member) {
        assertInGroup(member);
        members.remove(member);
        // TODO - maybe serviceState needs to be tracked internally in the group.
        // Otherwise, if a modelObject fails to report change, the opStatus changes can be corrupted. 
        if (member.getServiceState() == ServiceState.IN) {
            decrementOperationStatus(member.getOperationalState());
        }
    }

    private void incrementOperationStatus(OperationalState operationalState) {
        switch (operationalState) {
        case NORMAL:
            normalStateCount++;
            break;
        case NSA:
            nonServiceAffectingCount++;
            break;
        case SA:
            serviceAffectingCount++;
            break;
        case UNKNOWN:
        default:
            throw new InvalidParameterException("Group cannot handle unknown OperationalState");
        }
    }

    private void decrementOperationStatus(OperationalState operationalState) {
        switch (operationalState) {
        case NORMAL:
            normalStateCount--;
            break;
        case NSA:
            nonServiceAffectingCount--;
            break;
        case SA:
            serviceAffectingCount--;
            break;
        case UNKNOWN:
        default:
            throw new InvalidParameterException("Group cannot handle unknown OperationalState");
        }
    }

    private void assertInGroup(ModelObject object) {
        if (!members.contains(object)) {
            throw new InvalidParameterException("invalid invocation from a modelObject not in the group");
        }
    }

}
