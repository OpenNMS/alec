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

package org.opennms.oce.engine.topology.model;

import java.security.InvalidParameterException;
import java.util.HashSet;
import java.util.Set;

public class Group implements WorkingMemoryObject {

    private ModelObject owner;

    private Set<ModelObject> members = new HashSet<>();

    private int normalStateCount;

    private int nonServiceAffectingCount;

    private int serviceAffectingCount;

    private CountTrend serviceAffectingCountTrend = CountTrend.UNCHANGED;

    public Group(ModelObject owner) {
        this.owner = owner;
    }
    
    public ModelObject getOwner() {
        return owner;
    }

    
    public int getNumberMembers() {
        return members.size();
    }

    
    public int getNumberNormalState() {
        return normalStateCount;
    }

    
    public int getNumberNonServiceAffecting() {
        return nonServiceAffectingCount;
    }

    
    public int getNumberServiceAffecting() {
        return serviceAffectingCount;
    }

    
    public Set<ModelObject> getMembers() {
        return members;
    }

    
    public void updateOperationalState(ModelObject object, OperationalState previous) {
        if (object.getOperationalState() != previous) {
            assertInGroup(object);
            incrementOperationStatus(object.getOperationalState());
            decrementOperationStatus(previous);
            validateState();
        }
    }

    
    public void updateServiceState(ModelObject object, ServiceState previous) {
        assertInGroup(object);
        // TODO - handle an object moving from IN service to OUT of service as a REMOVE
        // TODO - handle an object moving from OUT of service to IN service as an ADD
    }

    public void addMember(ModelObject member) {
        // TODO - assert NOT in group?
        // TODO - persist member.type in group and assert new members are of same type. 
        if (members.add(member)) {
            if (member.getServiceState() == ServiceState.IN_SERVICE) {
                incrementOperationStatus(member.getOperationalState());
            }
        }
    }

    public void removeMember(ModelObject member) {
        assertInGroup(member);
        if (members.remove(member)) {
            // TODO - maybe serviceState needs to be tracked internally in the group.
            // Otherwise, if a modelObject fails to report change, the opStatus changes can be corrupted.
            if (member.getServiceState() == ServiceState.IN_SERVICE) {
                decrementOperationStatus(member.getOperationalState());
            }
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
            serviceAffectingCountTrend = CountTrend.INCREASING;
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
            serviceAffectingCountTrend = CountTrend.DECREASING;
            break;
        case UNKNOWN:
        default:
            throw new InvalidParameterException("Group cannot handle unknown OperationalState");
        }
    }

    private void assertInGroup(ModelObject object) {
        if (!members.contains(object)) {
            throw new InvalidParameterException("invalid invocation from a ModelObjectImpl not in the group");
        }
    }

    private void validateState() {
        if (members.size() != normalStateCount + nonServiceAffectingCount + serviceAffectingCount) {
            throw new IllegalStateException("State counts don't add up to total group member size.");
        }
    }

    
    public String toString() {
        return "G[" + owner + " : " + members + "]";
    }

    public CountTrend getServiceAffectingTrend() {
        return serviceAffectingCountTrend;
    }

    /**
    * The Object Type of the Group Members
    */
    public String getGroupMemberType() {
        return (getMembers() == null || getMembers().isEmpty()) ? "UNKNOWN"
            : getMembers().stream()
                    .findFirst()
                    .orElse(getOwner())
                    .getType();
    }

    @Override
    public String getId() {
        return "G[" + owner.getId() + " : " + getGroupMemberType() + "]";
    }
}
