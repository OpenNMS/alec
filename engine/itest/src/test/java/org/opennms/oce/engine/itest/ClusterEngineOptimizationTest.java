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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.apache.commons.math3.analysis.MultivariateFunction;
import org.apache.commons.math3.optim.InitialGuess;
import org.apache.commons.math3.optim.MaxEval;
import org.apache.commons.math3.optim.MaxIter;
import org.apache.commons.math3.optim.PointValuePair;
import org.apache.commons.math3.optim.SimpleBounds;
import org.apache.commons.math3.optim.nonlinear.scalar.ObjectiveFunction;
import org.apache.commons.math3.optim.nonlinear.scalar.noderiv.BOBYQAOptimizer;
import org.junit.Ignore;
import org.junit.Test;
import org.opennms.oce.engine.cluster.ClusterEngineFactory;
import org.opennms.oce.engine.driver.Driver;
import org.opennms.oce.engine.driver.EngineUtils;
import org.opennms.oce.engine.driver.MatrixBasedScoringStrategy;
import org.opennms.oce.engine.driver.ScoreReport;
import org.opennms.oce.engine.driver.SetIntersectionStrategy;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;

import com.google.common.collect.Sets;

public class ClusterEngineOptimizationTest {

    @Test
    public void canOptimize() throws JAXBException, IOException {
        final EngineAsFunction engineAsFunction = new EngineAsFunction();
        BOBYQAOptimizer optimizer = new BOBYQAOptimizer(6);
        ObjectiveFunction function = new ObjectiveFunction(engineAsFunction);
        InitialGuess initialGuess = new InitialGuess(new double[]{1000d, 1/1000d, 1d});
        SimpleBounds bounds = new SimpleBounds(new double[]{0.1d,1e-10,0.1d}, new double[]{Double.POSITIVE_INFINITY,Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY});
        MaxIter maxIter = new MaxIter(10000);
        MaxEval maxEval = new MaxEval(maxIter.getMaxIter() * 10);
        PointValuePair p = optimizer.optimize(function,initialGuess,bounds,maxIter,maxEval);
        System.out.printf("Found point at %s with value %.2f\n", Arrays.toString(p.getPoint()), p.getValue());
    }

    private static class EngineAsFunction implements MultivariateFunction {
        private final List<Alarm> alarms;
        private Set<Incident> baseIncidents;

        public EngineAsFunction() throws JAXBException, IOException {
            System.out.println("Loading data...");
            alarms = EngineUtils.getAlarms(Paths.get("/tmp/cpn.alarms.xml"));
            System.out.printf("Read %d alarms.\n", alarms.size());
            Set<Incident> incidents = EngineUtils.getIncidents(Paths.get("/tmp/cpn.incidents.xml"));
            System.out.printf("Read %d incidents.\n", incidents.size());
            baseIncidents = getIncidentsWithOneOrMoreAlarms(incidents);
        }

        @Override
        public double value(double[] point) {
            ClusterEngineFactory factory = new ClusterEngineFactory();
            factory.setEpsilon(point[0]);
            factory.setHopWeight(point[1]);
            factory.setTimeWeight(point[2]);

            Driver driver = Driver.builder()
                    .withEngineFactory(factory)
                    .build();

            System.out.printf("Running simulation at point %s...\n", Arrays.toString(point));
            final List<Incident> generatedIncidents = driver.run(alarms);
            System.out.printf("Generated: %d incidents.\n", generatedIncidents.size());
            Set<Incident> generatedIncidentsInSet = Sets.newHashSet(generatedIncidents);
            assertThat(generatedIncidentsInSet.size(), equalTo(generatedIncidents.size()));
            generatedIncidentsInSet = getIncidentsWithOneOrMoreAlarms(generatedIncidentsInSet);

            System.out.println("Scoring...");
            final SetIntersectionStrategy scoringStrategy = new SetIntersectionStrategy();
            final ScoreReport report = scoringStrategy.score(baseIncidents, generatedIncidentsInSet);
            System.out.printf("Score: %.2f\n", report.getScore());
            return report.getScore();
        }
    }

    public static Set<Incident> getIncidentsWithOneOrMoreAlarms(Collection<Incident> incidents) {
        System.out.printf("Initial incident count: %d\n", incidents.size());
        Set<Incident> incidentsWithManyAlarms = incidents.stream()
                .filter(i -> i.getAlarms().size() > 1)
                .collect(Collectors.toSet());
        System.out.printf("Incident count after removing singles: %d\n", incidentsWithManyAlarms.size());
        return incidentsWithManyAlarms;
    }

    @Test
    @Ignore("Example")
    public void canUseTheOptimizer() {
        BOBYQAOptimizer optimizer = new BOBYQAOptimizer(4);
        ObjectiveFunction function = new ObjectiveFunction(new MultivariateFunction() {
            @Override
            public double value(double[] point) {
                return 0;
            }
        });
        InitialGuess initialGuess = new InitialGuess(new double[]{1,1});
        SimpleBounds bounds = new SimpleBounds(new double[]{0,0}, new double[]{Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY});
        MaxIter maxIter = new MaxIter(100);
        MaxEval maxEval = new MaxEval(maxIter.getMaxIter() * 10);
        PointValuePair p = optimizer.optimize(function,initialGuess,bounds,maxIter,maxEval);
        System.out.printf("Found point at %s with value %.2f\n", Arrays.toString(p.getPoint()), p.getValue());
    }
}
