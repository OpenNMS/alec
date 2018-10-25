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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Severity;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.driver.test.MockAlarmBuilder;
import org.opennms.oce.driver.test.MockInventoryType;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.api.EngineFactory;

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
    private TestDriver driver;

    public Level2EngineComplianceTest(EngineFactory factory) {
        this.factory = Objects.requireNonNull(factory);
    }

    @Before
    public void setUp() {
        driver = TestDriver.builder()
                .withEngineFactory(factory)
                .build();
    }

    @Test
    public void canCorrelatePortFlappingFromMultipleSources() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919123")
                .withComment("source: service")
                .withInventoryObject(MockInventoryType.PORT, "eth1/1/1")
                .withEvent(1525579974000L, Severity.MAJOR)
                .withEvent(1525580004000L, Severity.CLEARED) // 30 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919127")
                .withComment("source: syslog")
                .withInventoryObject(MockInventoryType.PORT, "eth1/1/1")
                .withEvent(1525579963000L, Severity.MINOR)
                .withEvent(1525579967000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525579970000L, Severity.MINOR) // 3 seconds since last event
                .withEvent(1525579974000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525580236000L, Severity.MINOR) // 262 seconds since last event
                .withEvent(1525580241000L, Severity.CLEARED) // 5 seconds since last event
                .withEvent(1525580602000L, Severity.CLEARED) // 361 seconds since last event
                .withEvent(1525580619000L, Severity.CLEARED) // 17 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919128")
                .withComment("source: trap")
                .withInventoryObject(MockInventoryType.PORT, "eth1/1/1")
                .withEvent(1525579964000L, Severity.MINOR)
                .withEvent(1525579967000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525579970000L, Severity.MINOR) // 3 seconds since last event
                .withEvent(1525579974000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525580236000L, Severity.MINOR) // 262 seconds since last event
                .withEvent(1525580240000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525580601000L, Severity.CLEARED) // 361 seconds since last event
                .withEvent(1525580618000L, Severity.CLEARED) // 17 seconds since last event
                .build());

        // 3919123 occurred at Sun May 06 00:12:54 EDT 2018 and finally cleared at Sun May 06 00:13:24 EDT 2018
        // 3919127 occurred at Sun May 06 00:12:43 EDT 2018 and finally cleared at Sun May 06 00:23:39 EDT 2018
        // 3919128 occurred at Sun May 06 00:12:43 EDT 2018 and finally cleared at Sun May 06 00:23:38 EDT 2018

        final List<Situation> situations = Collections.emptyList(); // driver.run(events, alarms);
        // A single situation should have been created
        assertThat(situations, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInSituation(situations.get(0)), containsInAnyOrder("3919123", "3919127", "3919128"));
    }

    @Test
    public void canCorrelateMorePortFlappingFromMultipleSources() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919134")
                .withComment("source: service")
                .withInventoryObject(MockInventoryType.PORT, "eth1/1/1")
                .withEvent(1525580159000L, Severity.MAJOR)
                .withEvent(1525580189000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525582676000L, Severity.MAJOR) // 2487 seconds since last event
                .withEvent(1525582706000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525583603000L, Severity.MAJOR) // 897 seconds since last event
                .withEvent(1525583633000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525585525000L, Severity.MAJOR) // 1892 seconds since last event
                .withEvent(1525585555000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525586431000L, Severity.MAJOR) // 876 seconds since last event
                .withEvent(1525586461000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525590134000L, Severity.MAJOR) // 3673 seconds since last event
                .withEvent(1525590164000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525591045000L, Severity.MAJOR) // 881 seconds since last event
                .withEvent(1525591075000L, Severity.CLEARED) // 30 seconds since last event
                .withEvent(1525594748000L, Severity.MAJOR) // 3673 seconds since last event
                .withEvent(1525594778000L, Severity.CLEARED) // 30 seconds since last event
                .build());
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919189")
                .withComment("source: trap")
                .withInventoryObject(MockInventoryType.PORT, "eth1/1/1")
                .withEvent(1525583589000L, Severity.MINOR)
                .withEvent(1525583593000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525583601000L, Severity.MINOR) // 8 seconds since last event
                .withEvent(1525583605000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525583606000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525583610000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525583612000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525583615000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525583770000L, Severity.MINOR) // 155 seconds since last event
                .withEvent(1525583773000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525584237000L, Severity.CLEARED) // 464 seconds since last event
                .withEvent(1525584587000L, Severity.MINOR) // 350 seconds since last event
                .withEvent(1525584591000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525584604000L, Severity.MINOR) // 13 seconds since last event
                .withEvent(1525584612000L, Severity.CLEARED) // 8 seconds since last event
                .withEvent(1525584613000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525584613000L, Severity.CLEARED) // 0 seconds since last event
                .withEvent(1525584619000L, Severity.MINOR) // 6 seconds since last event
                .withEvent(1525584619000L, Severity.CLEARED) // 0 seconds since last event
                .withEvent(1525584773000L, Severity.MINOR) // 154 seconds since last event
                .withEvent(1525584776000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525585227000L, Severity.CLEARED) // 451 seconds since last event
                .withEvent(1525585505000L, Severity.MINOR) // 278 seconds since last event
                .withEvent(1525585513000L, Severity.CLEARED) // 8 seconds since last event
                .withEvent(1525585520000L, Severity.MINOR) // 7 seconds since last event
                .withEvent(1525585523000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525585525000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525585528000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525585530000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525585534000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525585688000L, Severity.MINOR) // 154 seconds since last event
                .withEvent(1525585691000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525586147000L, Severity.CLEARED) // 456 seconds since last event
                .withEvent(1525586418000L, Severity.MINOR) // 271 seconds since last event
                .withEvent(1525586421000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525586430000L, Severity.MINOR) // 9 seconds since last event
                .withEvent(1525586434000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525586435000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525586438000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525586440000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525586443000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525586600000L, Severity.MINOR) // 157 seconds since last event
                .withEvent(1525586603000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525587067000L, Severity.CLEARED) // 464 seconds since last event
                .withEvent(1525587341000L, Severity.MINOR) // 274 seconds since last event
                .withEvent(1525587344000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525587355000L, Severity.MINOR) // 11 seconds since last event
                .withEvent(1525587359000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525587360000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525587363000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525587365000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525587369000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525587526000L, Severity.MINOR) // 157 seconds since last event
                .withEvent(1525587529000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525587987000L, Severity.CLEARED) // 458 seconds since last event
                .withEvent(1525588255000L, Severity.MINOR) // 268 seconds since last event
                .withEvent(1525588259000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525588276000L, Severity.MINOR) // 17 seconds since last event
                .withEvent(1525588279000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525588280000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525588284000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525588285000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525588289000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525588446000L, Severity.MINOR) // 157 seconds since last event
                .withEvent(1525588449000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525588917000L, Severity.CLEARED) // 468 seconds since last event
                .withEvent(1525589194000L, Severity.MINOR) // 277 seconds since last event
                .withEvent(1525589197000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525589210000L, Severity.MINOR) // 13 seconds since last event
                .withEvent(1525589213000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525589215000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525589218000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525589221000L, Severity.MINOR) // 3 seconds since last event
                .withEvent(1525589224000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525589380000L, Severity.MINOR) // 156 seconds since last event
                .withEvent(1525589383000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525589848000L, Severity.CLEARED) // 465 seconds since last event
                .withEvent(1525590120000L, Severity.MINOR) // 272 seconds since last event
                .withEvent(1525590124000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525590132000L, Severity.MINOR) // 8 seconds since last event
                .withEvent(1525590136000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525590137000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525590141000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525590143000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525590146000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525590303000L, Severity.MINOR) // 157 seconds since last event
                .withEvent(1525590306000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525590758000L, Severity.CLEARED) // 452 seconds since last event
                .withEvent(1525591031000L, Severity.MINOR) // 273 seconds since last event
                .withEvent(1525591035000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525591042000L, Severity.MINOR) // 7 seconds since last event
                .withEvent(1525591046000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525591047000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525591051000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525591053000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525591056000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525591211000L, Severity.MINOR) // 155 seconds since last event
                .withEvent(1525591214000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525591678000L, Severity.CLEARED) // 464 seconds since last event
                .withEvent(1525591957000L, Severity.MINOR) // 279 seconds since last event
                .withEvent(1525591960000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525591971000L, Severity.MINOR) // 11 seconds since last event
                .withEvent(1525591974000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525591976000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525591979000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525591982000L, Severity.MINOR) // 3 seconds since last event
                .withEvent(1525591985000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525592141000L, Severity.MINOR) // 156 seconds since last event
                .withEvent(1525592145000L, Severity.NORMAL) // 4 seconds since last event
                .withEvent(1525592608000L, Severity.CLEARED) // 463 seconds since last event
                .withEvent(1525592879000L, Severity.MINOR) // 271 seconds since last event
                .withEvent(1525592883000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525592895000L, Severity.MINOR) // 12 seconds since last event
                .withEvent(1525592899000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525592900000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525592904000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525592905000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525592908000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525593063000L, Severity.MINOR) // 155 seconds since last event
                .withEvent(1525593067000L, Severity.NORMAL) // 4 seconds since last event
                .withEvent(1525593532000L, Severity.CLEARED) // 465 seconds since last event
                .withEvent(1525593804000L, Severity.MINOR) // 272 seconds since last event
                .withEvent(1525593808000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525593822000L, Severity.MINOR) // 14 seconds since last event
                .withEvent(1525593826000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525593827000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525593831000L, Severity.CLEARED) // 4 seconds since last event
                .withEvent(1525593832000L, Severity.MINOR) // 1 seconds since last event
                .withEvent(1525593835000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525593991000L, Severity.MINOR) // 156 seconds since last event
                .withEvent(1525593994000L, Severity.NORMAL) // 3 seconds since last event
                .withEvent(1525594452000L, Severity.CLEARED) // 458 seconds since last event
                .withEvent(1525594735000L, Severity.MINOR) // 283 seconds since last event
                .withEvent(1525594738000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525594746000L, Severity.MINOR) // 8 seconds since last event
                .withEvent(1525594749000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525594751000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525594754000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525594756000L, Severity.MINOR) // 2 seconds since last event
                .withEvent(1525594759000L, Severity.CLEARED) // 3 seconds since last event
                .withEvent(1525594915000L, Severity.MINOR) // 156 seconds since last event
                .withEvent(1525594919000L, Severity.NORMAL) // 4 seconds since last event
                .build());

        final List<Situation> situations = driver.run(alarms);
        // A single situation should have been created
        assertThat(situations, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInSituation(situations.get(0)), containsInAnyOrder("3919134", "3919189"));
    }

    @Test
    public void canCorrelateBgpPeerRelatedIssues() {
        final List<Alarm> alarms = new ArrayList<>();
        alarms.addAll(new MockAlarmBuilder()
                .withId("3919143")
                .withInventoryObject(MockInventoryType.BGP, "n1: peer: 10.1.1.1")
                .withComment("source: service")
                .withEvent(1525580243000L, Severity.MAJOR)// Sun May 06 00:17:23 EDT 2018
                .withEvent(1525580274000L, Severity.CLEARED) // 31 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919144")
                .withInventoryObject(MockInventoryType.BGP, "n1: peer: 10.1.1.1")
                .withComment("source: syslog")
                .withEvent(1525580234000L, Severity.NORMAL)// Sun May 06 00:17:14 EDT 2018
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919145")
                .withInventoryObject(MockInventoryType.BGP, "n1: peer: 10.1.1.1")
                .withComment("source: trap")
                .withEvent(1525580235000L, Severity.MAJOR)// Sun May 06 00:17:15 EDT 2018
                .withEvent(1525580235000L, Severity.NORMAL) // 0 seconds since last event
                .withEvent(1525580249000L, Severity.NORMAL) // 14 seconds since last event
                .withEvent(1525580249000L, Severity.NORMAL) // 0 seconds since last event
                .withEvent(1525580249000L, Severity.NORMAL) // 0 seconds since last event
                .withEvent(1525580250000L, Severity.CLEARED) // 1 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919146")
                .withInventoryObject(MockInventoryType.BGP, "n1: peer: 10.1.1.1")
                .withComment("source: trap")
                .withEvent(1525580234000L, Severity.MAJOR)// Sun May 06 00:17:14 EDT 2018
                .withEvent(1525580250000L, Severity.CLEARED) // 16 seconds since last event
                .build());

        alarms.addAll(new MockAlarmBuilder()
                .withId("3919147")
                .withInventoryObject(MockInventoryType.BGP, "n1: peer: 10.1.1.1")
                .withComment("source: syslog")
                .withEvent(1525580235000L, Severity.MAJOR)// Sun May 06 00:17:15 EDT 2018
                .withEvent(1525580250000L, Severity.CLEARED) // 15 seconds since last event
                .build());

        final List<Situation> situations = driver.run(alarms);
        // A single situation should have been created
        assertThat(situations, hasSize(1));
        // It should contain all of the given alarms
        assertThat(getAlarmIdsInSituation(situations.get(0)), containsInAnyOrder("3919143", "3919144", "3919145", "3919146", "3919147"));
    }

    public static Set<String> getAlarmIdsInSituation(Situation situation) {
        return situation.getAlarms().stream()
                .map(Alarm::getId)
                .collect(Collectors.toSet());
    }

    /*
    @Test
    @Ignore("Utility code")
    public void generateMockAlarmFromSituation() throws JAXBException, IOException {
        List<org.opennms.oce.events.v1.schema.Alarm> alarms = EngineUtils.getRawAlarms(Paths.get("/tmp/cpn.alarms.xml"));
        printAlarm(alarms, "3919143");
        printAlarm(alarms, "3919144");
        printAlarm(alarms, "3919145");
        printAlarm(alarms, "3919146");
        printAlarm(alarms, "3919147");
    }
    
    
    private static void printAlarm(List<org.opennms.oce.events.v1.schema.Alarm> alarms, String alarmId) {
        org.opennms.oce.events.v1.schema.Alarm alarm = alarms.stream().filter(a -> a.getId().equals(alarmId)).findFirst().get();
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
            sb.append(String.format(".withEvent(%sL, Severity.%s)%s\n", e.getTime(), EngineUtils.toSeverity(e.getSeverity()), comment));
            lastEvent= e;
        }
        sb.append(".build());\n");
        System.out.println(sb);
    }
    */
}
