/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.features.shell;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Reference;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.AlarmDatasource;
import org.opennms.alec.datasource.api.InventoryDatasource;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.jaxb.JaxbUtils;
import org.opennms.alec.datasource.v1.schema.Alarms;
import org.opennms.alec.datasource.v1.schema.Inventory;
import org.opennms.alec.datasource.v1.schema.Situations;


@Command(scope = "opennms-alec", name = "datasource-snapshot", description = "Export a snapshot of the current datasource.")
@Service
public class Snapshot implements Action {

    @Reference(optional=true)
    private InventoryDatasource inventoryDatasource;

    @Reference(optional=true)
    private AlarmDatasource alarmDatasource;

    @Reference(optional=true)
    private SituationDatasource situationDatasource;

    @Argument(description = "Output folder.", required = true)
    private String outputFolder;

    @Override
    public Object execute() throws Exception {
        if (inventoryDatasource == null) {
            System.out.println("No inventory datasource is currently available. Cannot take snapshot.");
            return null;
        }
        if (alarmDatasource == null) {
            System.out.println("No alarm datasource is currently available. Cannot take snapshot.");
            return null;
        }
        if (situationDatasource == null) {
            System.out.println("No situation datasource is currently available. Cannot take snapshot.");
            return null;
        }

        // Create the directory tree
        final Path outputPath = Paths.get(outputFolder);
        Files.createDirectories(outputPath);

        final Path inventoryPath = outputPath.resolve("alec.inventory.xml");
        System.out.printf("Saving inventory to: %s\n", inventoryPath);
        final List<InventoryObject> ios = inventoryDatasource.getInventory();
        final Inventory inventory = JaxbUtils.toInventory(ios);
        JaxbUtils.write(inventory, inventoryPath);
        System.out.printf("Done saving %d inventory objects.\n", inventory.getModelObjectEntry().size());

        final Path alarmsPath = outputPath.resolve("alec.alarms.xml");
        System.out.printf("Saving alarms to: %s\n", alarmsPath);
        final List<Alarm> apiAlarms = alarmDatasource.getAlarms();
        final Alarms alarms = JaxbUtils.toAlarms(apiAlarms);
        JaxbUtils.write(alarms, alarmsPath);
        System.out.printf("Done saving %d alarms.\n", alarms.getAlarm().size());

        final Path situationsPath = outputPath.resolve("alec.situations.xml");
        System.out.printf("Saving situations to: %s\n", situationsPath);
        final List<Situation> apiSituations = situationDatasource.getSituations();
        final Situations situations = JaxbUtils.toSituations(apiSituations);
        JaxbUtils.write(situations, situationsPath);
        System.out.printf("Done saving %d situations.\n", situations.getSituation().size());

        return null;
    }
}
