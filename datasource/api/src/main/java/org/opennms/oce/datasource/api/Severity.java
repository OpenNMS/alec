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

package org.opennms.oce.datasource.api;

import java.util.NoSuchElementException;

public enum Severity {
    CRITICAL(7), // This event means numerous devices on the network are affected by the event. Everyone who can should stop what they are doing and focus on fixing the problem.
    MAJOR(6), // A device is completely down or in danger of going down. Attention needs to be paid to this problem immediately.
    MINOR(5), // A part of a device (a service, and interface, a power supply, etc.) has stopped functioning. The device needs attention.
    WARNING(4), // An event has occurred that may require action. This severity can also be used to indicate a condition that should be noted (logged) but does not require direct action.
    NORMAL(3), // Informational message. No action required.
    CLEARED(2), // This severity is reserved for use in Alarms to indicate that an alarm describes a self-clearing error condition has been corrected and service is restored. This severity should never be used in event definitions. Please use "Normal" severity for events that clear an alarm.
    INDETERMINATE(1);

    final int value;

    Severity(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public static Severity fromValue(int value) {
        for (Severity s : Severity.values()) {
            if (s.getValue() == value) {
                return s;
            }
        }
        throw new NoSuchElementException("No severity found for: " + value);
    }
}
