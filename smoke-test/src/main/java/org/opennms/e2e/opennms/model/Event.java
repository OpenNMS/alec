/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
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

package org.opennms.e2e.opennms.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Event {
    private String uei;
    private String severity;
    private final List<Parameter> parms = new ArrayList<>();

    private static Event genericAlarmEvent(String node) {
        return new Event()
                .setUei("uei.opennms.org/alarms/trigger")
                .addParm(new Parameter("node", Objects.requireNonNull(node)));
    }

    public static Event genericAlarmTriggerEvent(String node) {
        return genericAlarmEvent(node)
                .setSeverity("MAJOR");
    }

    private static Event createGenericSituationAlarmEvent(List<String> nodes) {
        Objects.requireNonNull(nodes);
        Event event = new Event()
                .setUei("uei.opennms.org/alarms/trigger")
                .addParm(new Parameter("node", "situation"));

        for (int i = 0; i < nodes.size(); i++) {
            event.addParm(new Parameter("related-reductionKey" + (i + 1),
                    "uei.opennms.org/alarms/trigger:" + nodes.get(i) + "::"));
        }

        return event;
    }

    public static Event genericSituationAlarmTriggerEvent(List<String> nodes) {
        return createGenericSituationAlarmEvent(nodes).setSeverity("MAJOR");
    }
    
    public String getUei() {
        return uei;
    }

    public Event setUei(String uei) {
        this.uei = uei;
        return this;
    }

    public String reductionKey() {
        String node = parms.stream()
                .filter(parm -> parm.parmName == "node")
                .findFirst()
                .get()
                .getValue();
        return "uei.opennms.org/alarms/trigger:" + node + "::";
    }

    public String getSeverity() {
        return severity;
    }

    public Event setSeverity(String severity) {
        this.severity = severity;
        return this;
    }

    public Event addParm(Parameter parm) {
        parms.add(parm);
        return this;
    }
    
    public List<Parameter> getParms() {
        return parms;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return Objects.equals(uei, event.uei) &&
                Objects.equals(severity, event.severity) &&
                Objects.equals(parms, event.parms);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uei, severity, parms);
    }

    @Override
    public String toString() {
        return "Event{" +
                "uei='" + uei + '\'' +
                ", severity='" + severity + '\'' +
                ", parms='" + parms + '\'' +
                '}';
    }
    
    public static class Parameter {
        private final String parmName;
        private final String value;

        public Parameter(String parmName, String value) {
            this.parmName = parmName;
            this.value = value;
        }

        public String getParmName() {
            return parmName;
        }

        public String getValue() {
            return value;
        }
    }
}
