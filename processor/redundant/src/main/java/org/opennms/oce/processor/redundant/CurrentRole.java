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

package org.opennms.oce.processor.redundant;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.oce.processor.api.SituationProcessor;
import org.opennms.oce.processor.api.SituationProcessorFactory;

/**
 * A command to display the current role for a redundant situation processor.
 */
@Command(scope = "processor", name = "current-role", description = "Displays the current role")
@Service
public class CurrentRole implements Action {
    @Reference
    private SituationProcessorFactory situationProcessorFactory;

    @Override
    public Object execute() {
        SituationProcessor situationProcessor = situationProcessorFactory.getInstance();

        try {
            System.out.println(((ActiveStandbySituationProcessor) situationProcessor).getCurrentRole());
        } catch (ClassCastException ignored) {
            System.out.println("No role available for processor: " + situationProcessor);
        }

        return null;
    }
}
