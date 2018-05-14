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

package org.opennms.oce.engine.itest;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertThat;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.oce.engine.api.EngineFactory;
import org.opennms.oce.engine.driver.Driver;
import org.opennms.oce.engine.driver.EngineUtils;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.AlarmSeverity;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.impl.ModelBuilderImpl;
import org.opennms.oce.model.v1.schema.Event;

/**
 * Level 2 compliance: Known and observed scenarios
 */
@RunWith(Parameterized.class)
public class Level2EngineComplianceTest {

    @Parameterized.Parameters(name = "{index}: engine({0})")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][]{
                //{ new ClusterEngineFactory() }
        });
    }

    private final EngineFactory factory;
    private Driver driver;
    private Model model;

    public Level2EngineComplianceTest(EngineFactory factory) {
        this.factory = Objects.requireNonNull(factory);
    }

    @Before
    public void setUp() {
        driver = Driver.builder()
                .withEngineFactory(factory)
                .build();

        final ModelBuilderImpl modelBuilder = new ModelBuilderImpl();
        model = modelBuilder.buildModel();
    }

    @Test
    public void canCorrelatePortFlappingFromMultipleSources() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919123")
                .withComment("source: service")
                .withResourceKey(new ResourceKey("device,n1", "port,eth1/1/1"))
                .withEvent(1525579974000L, AlarmSeverity.MAJOR)
                .withEvent(1525580004000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919127")
                .withComment("source: syslog")
                .withResourceKey(new ResourceKey("device,n1", "port,eth1/1/1"))
                .withEvent(1525579963000L, AlarmSeverity.MINOR)
                .withEvent(1525579967000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525579970000L, AlarmSeverity.MINOR) // 3 seconds since last event
                .withEvent(1525579974000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525580236000L, AlarmSeverity.MINOR) // 262 seconds since last event
                .withEvent(1525580241000L, AlarmSeverity.CLEARED) // 5 seconds since last event
                .withEvent(1525580602000L, AlarmSeverity.CLEARED) // 361 seconds since last event
                .withEvent(1525580619000L, AlarmSeverity.CLEARED) // 17 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919128")
                .withComment("source: trap")
                .withResourceKey(new ResourceKey("device,n1", "port,eth1/1/1"))
                .withEvent(1525579964000L, AlarmSeverity.MINOR)
                .withEvent(1525579967000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525579970000L, AlarmSeverity.MINOR) // 3 seconds since last event
                .withEvent(1525579974000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525580236000L, AlarmSeverity.MINOR) // 262 seconds since last event
                .withEvent(1525580240000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525580601000L, AlarmSeverity.CLEARED) // 361 seconds since last event
                .withEvent(1525580618000L, AlarmSeverity.CLEARED) // 17 seconds since last event
                .build());

        // 3919123 occurred at Sun May 06 00:12:54 EDT 2018 and finally cleared at Sun May 06 00:13:24 EDT 2018
        // 3919127 occurred at Sun May 06 00:12:43 EDT 2018 and finally cleared at Sun May 06 00:23:39 EDT 2018
        // 3919128 occurred at Sun May 06 00:12:43 EDT 2018 and finally cleared at Sun May 06 00:23:38 EDT 2018

        final List<Incident> incidents = driver.run(model, alarms);
        // A single incident should have been created
        assertThat(incidents, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInIncident(incidents.get(0)), containsInAnyOrder("3919123", "3919127", "3919128"));
    }

    @Test
    public void canCorrelateMorePortFlappingFromMultipleSources() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919134")
                .withComment("source: service")
                .withResourceKey(new ResourceKey("device,n1", "port,eth1/1/1"))
                .withEvent(1525580159000L, AlarmSeverity.MAJOR)
                .withEvent(1525580189000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525582676000L, AlarmSeverity.MAJOR) // 2487 seconds since last event
                .withEvent(1525582706000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525583603000L, AlarmSeverity.MAJOR) // 897 seconds since last event
                .withEvent(1525583633000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525585525000L, AlarmSeverity.MAJOR) // 1892 seconds since last event
                .withEvent(1525585555000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525586431000L, AlarmSeverity.MAJOR) // 876 seconds since last event
                .withEvent(1525586461000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525590134000L, AlarmSeverity.MAJOR) // 3673 seconds since last event
                .withEvent(1525590164000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525591045000L, AlarmSeverity.MAJOR) // 881 seconds since last event
                .withEvent(1525591075000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .withEvent(1525594748000L, AlarmSeverity.MAJOR) // 3673 seconds since last event
                .withEvent(1525594778000L, AlarmSeverity.CLEARED) // 30 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919189")
                .withComment("source: trap")
                .withResourceKey(new ResourceKey("device,n1", "port,eth1/1/1"))
                .withEvent(1525583589000L, AlarmSeverity.MINOR)
                .withEvent(1525583593000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525583601000L, AlarmSeverity.MINOR) // 8 seconds since last event
                .withEvent(1525583605000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525583606000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525583610000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525583612000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525583615000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525583770000L, AlarmSeverity.MINOR) // 155 seconds since last event
                .withEvent(1525583773000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525584237000L, AlarmSeverity.CLEARED) // 464 seconds since last event
                .withEvent(1525584587000L, AlarmSeverity.MINOR) // 350 seconds since last event
                .withEvent(1525584591000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525584604000L, AlarmSeverity.MINOR) // 13 seconds since last event
                .withEvent(1525584612000L, AlarmSeverity.CLEARED) // 8 seconds since last event
                .withEvent(1525584613000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525584613000L, AlarmSeverity.CLEARED) // 0 seconds since last event
                .withEvent(1525584619000L, AlarmSeverity.MINOR) // 6 seconds since last event
                .withEvent(1525584619000L, AlarmSeverity.CLEARED) // 0 seconds since last event
                .withEvent(1525584773000L, AlarmSeverity.MINOR) // 154 seconds since last event
                .withEvent(1525584776000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525585227000L, AlarmSeverity.CLEARED) // 451 seconds since last event
                .withEvent(1525585505000L, AlarmSeverity.MINOR) // 278 seconds since last event
                .withEvent(1525585513000L, AlarmSeverity.CLEARED) // 8 seconds since last event
                .withEvent(1525585520000L, AlarmSeverity.MINOR) // 7 seconds since last event
                .withEvent(1525585523000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525585525000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525585528000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525585530000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525585534000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525585688000L, AlarmSeverity.MINOR) // 154 seconds since last event
                .withEvent(1525585691000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525586147000L, AlarmSeverity.CLEARED) // 456 seconds since last event
                .withEvent(1525586418000L, AlarmSeverity.MINOR) // 271 seconds since last event
                .withEvent(1525586421000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525586430000L, AlarmSeverity.MINOR) // 9 seconds since last event
                .withEvent(1525586434000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525586435000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525586438000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525586440000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525586443000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525586600000L, AlarmSeverity.MINOR) // 157 seconds since last event
                .withEvent(1525586603000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525587067000L, AlarmSeverity.CLEARED) // 464 seconds since last event
                .withEvent(1525587341000L, AlarmSeverity.MINOR) // 274 seconds since last event
                .withEvent(1525587344000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525587355000L, AlarmSeverity.MINOR) // 11 seconds since last event
                .withEvent(1525587359000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525587360000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525587363000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525587365000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525587369000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525587526000L, AlarmSeverity.MINOR) // 157 seconds since last event
                .withEvent(1525587529000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525587987000L, AlarmSeverity.CLEARED) // 458 seconds since last event
                .withEvent(1525588255000L, AlarmSeverity.MINOR) // 268 seconds since last event
                .withEvent(1525588259000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525588276000L, AlarmSeverity.MINOR) // 17 seconds since last event
                .withEvent(1525588279000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525588280000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525588284000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525588285000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525588289000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525588446000L, AlarmSeverity.MINOR) // 157 seconds since last event
                .withEvent(1525588449000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525588917000L, AlarmSeverity.CLEARED) // 468 seconds since last event
                .withEvent(1525589194000L, AlarmSeverity.MINOR) // 277 seconds since last event
                .withEvent(1525589197000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525589210000L, AlarmSeverity.MINOR) // 13 seconds since last event
                .withEvent(1525589213000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525589215000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525589218000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525589221000L, AlarmSeverity.MINOR) // 3 seconds since last event
                .withEvent(1525589224000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525589380000L, AlarmSeverity.MINOR) // 156 seconds since last event
                .withEvent(1525589383000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525589848000L, AlarmSeverity.CLEARED) // 465 seconds since last event
                .withEvent(1525590120000L, AlarmSeverity.MINOR) // 272 seconds since last event
                .withEvent(1525590124000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525590132000L, AlarmSeverity.MINOR) // 8 seconds since last event
                .withEvent(1525590136000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525590137000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525590141000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525590143000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525590146000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525590303000L, AlarmSeverity.MINOR) // 157 seconds since last event
                .withEvent(1525590306000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525590758000L, AlarmSeverity.CLEARED) // 452 seconds since last event
                .withEvent(1525591031000L, AlarmSeverity.MINOR) // 273 seconds since last event
                .withEvent(1525591035000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525591042000L, AlarmSeverity.MINOR) // 7 seconds since last event
                .withEvent(1525591046000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525591047000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525591051000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525591053000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525591056000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525591211000L, AlarmSeverity.MINOR) // 155 seconds since last event
                .withEvent(1525591214000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525591678000L, AlarmSeverity.CLEARED) // 464 seconds since last event
                .withEvent(1525591957000L, AlarmSeverity.MINOR) // 279 seconds since last event
                .withEvent(1525591960000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525591971000L, AlarmSeverity.MINOR) // 11 seconds since last event
                .withEvent(1525591974000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525591976000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525591979000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525591982000L, AlarmSeverity.MINOR) // 3 seconds since last event
                .withEvent(1525591985000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525592141000L, AlarmSeverity.MINOR) // 156 seconds since last event
                .withEvent(1525592145000L, AlarmSeverity.NORMAL) // 4 seconds since last event
                .withEvent(1525592608000L, AlarmSeverity.CLEARED) // 463 seconds since last event
                .withEvent(1525592879000L, AlarmSeverity.MINOR) // 271 seconds since last event
                .withEvent(1525592883000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525592895000L, AlarmSeverity.MINOR) // 12 seconds since last event
                .withEvent(1525592899000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525592900000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525592904000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525592905000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525592908000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525593063000L, AlarmSeverity.MINOR) // 155 seconds since last event
                .withEvent(1525593067000L, AlarmSeverity.NORMAL) // 4 seconds since last event
                .withEvent(1525593532000L, AlarmSeverity.CLEARED) // 465 seconds since last event
                .withEvent(1525593804000L, AlarmSeverity.MINOR) // 272 seconds since last event
                .withEvent(1525593808000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525593822000L, AlarmSeverity.MINOR) // 14 seconds since last event
                .withEvent(1525593826000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525593827000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525593831000L, AlarmSeverity.CLEARED) // 4 seconds since last event
                .withEvent(1525593832000L, AlarmSeverity.MINOR) // 1 seconds since last event
                .withEvent(1525593835000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525593991000L, AlarmSeverity.MINOR) // 156 seconds since last event
                .withEvent(1525593994000L, AlarmSeverity.NORMAL) // 3 seconds since last event
                .withEvent(1525594452000L, AlarmSeverity.CLEARED) // 458 seconds since last event
                .withEvent(1525594735000L, AlarmSeverity.MINOR) // 283 seconds since last event
                .withEvent(1525594738000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525594746000L, AlarmSeverity.MINOR) // 8 seconds since last event
                .withEvent(1525594749000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525594751000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525594754000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525594756000L, AlarmSeverity.MINOR) // 2 seconds since last event
                .withEvent(1525594759000L, AlarmSeverity.CLEARED) // 3 seconds since last event
                .withEvent(1525594915000L, AlarmSeverity.MINOR) // 156 seconds since last event
                .withEvent(1525594919000L, AlarmSeverity.NORMAL) // 4 seconds since last event
                .build());

        final List<Incident> incidents = driver.run(model, alarms);
        // A single incident should have been created
        assertThat(incidents, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInIncident(incidents.get(0)), containsInAnyOrder("3919134", "3919189"));
    }

    @Test
    public void canCorrelateBgpPeerRelatedIssues() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919143")
                // TODO: Handling of VRFs?
                .withResourceKey(new ResourceKey("device,n1", "bgp_peer,n1: MpBgp: 10.1.1.1"))
                .withComment("source: service")
                .withEvent(1525580243000L, AlarmSeverity.MAJOR)// Sun May 06 00:17:23 EDT 2018
                .withEvent(1525580274000L, AlarmSeverity.CLEARED) // 31 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919144")
                .withResourceKey(new ResourceKey("device,n1", "bgp_peer,n1: MpBgp: 10.1.1.1"))
                .withComment("source: syslog")
                .withEvent(1525580234000L, AlarmSeverity.NORMAL)// Sun May 06 00:17:14 EDT 2018
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919145")
                .withResourceKey(new ResourceKey("device,n1", "bgp_peer,n1: MpBgp: 10.1.1.1"))
                .withComment("source: trap")
                .withEvent(1525580235000L, AlarmSeverity.MAJOR)// Sun May 06 00:17:15 EDT 2018
                .withEvent(1525580235000L, AlarmSeverity.NORMAL) // 0 seconds since last event
                .withEvent(1525580249000L, AlarmSeverity.NORMAL) // 14 seconds since last event
                .withEvent(1525580249000L, AlarmSeverity.NORMAL) // 0 seconds since last event
                .withEvent(1525580249000L, AlarmSeverity.NORMAL) // 0 seconds since last event
                .withEvent(1525580250000L, AlarmSeverity.CLEARED) // 1 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919146")
                .withResourceKey(new ResourceKey("device,n1", "bgp_peer,n1: MpBgp: 10.1.1.1"))
                .withComment("source: trap")
                .withEvent(1525580234000L, AlarmSeverity.MAJOR)// Sun May 06 00:17:14 EDT 2018
                .withEvent(1525580250000L, AlarmSeverity.CLEARED) // 16 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919147")
                .withResourceKey(new ResourceKey("device,n1", "bgp_peer,n1: MpBgp: 10.1.1.1"))
                .withComment("source: syslog")
                .withEvent(1525580235000L, AlarmSeverity.MAJOR)// Sun May 06 00:17:15 EDT 2018
                .withEvent(1525580250000L, AlarmSeverity.CLEARED) // 15 seconds since last event
                .build());

        final List<Incident> incidents = driver.run(model, alarms);
        // A single incident should have been created
        assertThat(incidents, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInIncident(incidents.get(0)), containsInAnyOrder("3919143", "3919144", "3919145", "3919146", "3919147"));
    }

    public static Set<String> getAlarmIdsInIncident(Incident incident) {
        return incident.getAlarms().stream()
                .map(Alarm::getId)
                .collect(Collectors.toSet());
    }

    @Test
    @Ignore("Utility code")
    public void generateMockAlarmFromIncident() throws JAXBException, IOException {
        List<org.opennms.oce.model.v1.schema.Alarm> alarms = EngineUtils.getRawAlarms(Paths.get("/tmp/cpn.alarms.xml"));
        printAlarm(alarms, "3919143");
        printAlarm(alarms, "3919144");
        printAlarm(alarms, "3919145");
        printAlarm(alarms, "3919146");
        printAlarm(alarms, "3919147");
    }

    private static void printAlarm(List<org.opennms.oce.model.v1.schema.Alarm> alarms, String alarmId) {
        org.opennms.oce.model.v1.schema.Alarm alarm = alarms.stream().filter(a -> a.getId().equals(alarmId)).findFirst().get();
        StringBuilder sb = new StringBuilder();
        String firstSource = alarm.getEvent().get(0).getSource();
        sb.append("alarms.addAll(new MockAlarmBuilder()\n");
        sb.append(String.format(".withId(\"%s\")\n", alarm.getId()));
        sb.append(String.format(".withComment(\"source: %s\")\n", firstSource));
        Event lastEvent = null;
        for (Event e : alarm.getEvent()) {
            String comment = "";
            if (lastEvent != null) {
                comment = String.format(" // %d seconds since last event", Math.floorDiv(e.getTime() - lastEvent.getTime(), 1000));
            } else {
                comment = "// " + new Date(e.getTime());
            }
            sb.append(String.format(".withEvent(%sL, AlarmSeverity.%s)%s\n", e.getTime(), EngineUtils.toAlarmSeverity(e.getSeverity()), comment));
            lastEvent= e;
        }
        sb.append(".build());\n");
        System.out.println(sb);
    }

}
