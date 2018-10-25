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
import static org.hamcrest.number.IsCloseTo.closeTo;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBException;

import org.apache.commons.math3.analysis.MultivariateFunction;
import org.apache.commons.math3.optim.InitialGuess;
import org.apache.commons.math3.optim.MaxEval;
import org.apache.commons.math3.optim.MaxIter;
import org.apache.commons.math3.optim.PointValuePair;
import org.apache.commons.math3.optim.SimpleBounds;
import org.apache.commons.math3.optim.nonlinear.scalar.GoalType;
import org.apache.commons.math3.optim.nonlinear.scalar.ObjectiveFunction;
import org.apache.commons.math3.optim.nonlinear.scalar.noderiv.BOBYQAOptimizer;
import org.junit.Ignore;
import org.junit.Test;
import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.jaxb.JaxbUtils;
import org.opennms.oce.driver.test.TestDriver;
import org.opennms.oce.engine.cluster.ClusterEngine;
import org.opennms.oce.engine.cluster.ClusterEngineFactory;
import org.opennms.oce.features.score.api.ScoreMetric;
import org.opennms.oce.features.score.api.ScoreReport;
import org.opennms.oce.features.score.api.ScoringStrategy;
import org.opennms.oce.features.score.impl.SetIntersectionScoringStrategy;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableSet;
import com.google.common.collect.Sets;

@Ignore("Needs local data")
public class ClusterEngineOptimizationTest {

    // Min @ epsilon: 2831.72, hopWeight: 16.85, timeWeight: 0.69, score: 34.93 -- new double[]{2831.71849627, 16.84762927, 0.69470697};
    private static final double[] BEST_PARAMS = new double[]{ClusterEngine.DEFAULT_ALPHA, ClusterEngine.DEFAULT_BETA};

    double[] currentParms = BEST_PARAMS;
    double[] bestParams = currentParms;
    double minScore;

    @Test
    public void randomWalk() throws JAXBException, IOException {
        final EngineAsFunction engineAsFunction = new EngineAsFunction();

        minScore = engineAsFunction.value(bestParams);
        double otherScore = engineAsFunction.value(bestParams);
        assertThat(minScore, equalTo(otherScore));

        printMin();

        Random r = new Random();
        for (int i = 0; i < 500000; i++) {
            double alpha = r.nextDouble() * 1000;
            double beta = 0.4d + 0.6* r.nextDouble();

            currentParms = new double[]{alpha, beta};

            System.out.printf("alpha: %.2f beta: %.2f\n", currentParms[0], currentParms[1]);

            double value = engineAsFunction.value(currentParms);
            if (value < minScore) {
                minScore = value;
                bestParams= currentParms;
            }
            printMin();
        }
    }

    private void printMin() {
        System.out.printf("Min @ alpha: %.2f, beta: %.2f, score: %.2f -- new double[]{ %.8f, %.8f};\n",
                bestParams[0], bestParams[1], minScore,
                bestParams[0], bestParams[1]);
    }

    @Test
    public void canOptimize() throws JAXBException, IOException {
        final EngineAsFunction engineAsFunction = new EngineAsFunction();
        BOBYQAOptimizer optimizer = new BOBYQAOptimizer(6);
        ObjectiveFunction function = new ObjectiveFunction(engineAsFunction);

        InitialGuess initialGuess = new InitialGuess(BEST_PARAMS);
        SimpleBounds bounds = new SimpleBounds(new double[]{1d,1e-10}, new double[]{Double.POSITIVE_INFINITY, 1d});
        MaxIter maxIter = new MaxIter(10000);
        MaxEval maxEval = new MaxEval(maxIter.getMaxIter() * 10);
        PointValuePair p = optimizer.optimize(function,initialGuess,bounds,maxIter,maxEval, GoalType.MINIMIZE);
        System.out.printf("Found point at %s with value %.2f\n", Arrays.toString(p.getPoint()), p.getValue());
    }

    @Test
    public void runSpecific() throws JAXBException, IOException {
        double[] point = BEST_PARAMS;
        final EngineAsFunction engineAsFunction = new EngineAsFunction();
        double result = engineAsFunction.value(point);
        System.out.printf("Found point at %s with value %.2f\n", Arrays.toString(point), result);
    }

    private static class EngineAsFunction implements MultivariateFunction {
        private final List<Alarm> alarms;

        private Set<Situation> baseSituations;

        public EngineAsFunction() throws JAXBException, IOException {
            System.out.println("Loading data...");
            alarms = ImmutableList.copyOf(JaxbUtils.getAlarms(Paths.get("/tmp/cpn.alarms.xml")));
            System.out.printf("Read %d alarms.\n", alarms.size());
            Set<Situation> situations = JaxbUtils.getSituations(Paths.get("/tmp/cpn.situations.xml"));
            System.out.printf("Read %d situations.\n", situations.size());
            baseSituations = ImmutableSet.copyOf(getSituationsWithOneOrMoreAlarms(situations));
        }

        @Override
        public double value(double[] point) {
            ClusterEngineFactory factory = new ClusterEngineFactory();
            factory.setAlpha(point[0]);
            factory.setBeta(point[1]);

            TestDriver driver = TestDriver.builder()
                    .withEngineFactory(factory)
                    .build();

            System.out.printf("Running simulation at point %s...\n", Arrays.toString(point));
            final List<Situation> generatedSituations = driver.run(alarms);
            System.out.printf("Generated: %d situations.\n", generatedSituations.size());
            Set<Situation> generatedSituationsInSet = Sets.newHashSet(generatedSituations);
            assertThat(generatedSituationsInSet.size(), equalTo(generatedSituations.size()));
            generatedSituationsInSet = getSituationsWithOneOrMoreAlarms(generatedSituationsInSet);

            System.out.println("Scoring...");
            final ScoringStrategy scoringStrategy = new SetIntersectionScoringStrategy();
            final ScoreReport report = scoringStrategy.score(baseSituations, generatedSituationsInSet);
            System.out.printf("Score: %.2f\n", report.getScore());
            for (ScoreMetric metric : report.getMetrics()) {
                System.out.printf("\tMetric - Name: %s, Value: %.2f\n", metric.getName(), metric.getValue());
            }
            return report.getScore();
        }
    }

    public static Set<Situation> getSituationsWithOneOrMoreAlarms(Collection<Situation> situations) {
        System.out.printf("Initial situation count: %d\n", situations.size());
        Set<Situation> situationsWithManyAlarms = situations.stream()
                .filter(i -> i.getAlarms().size() > 1)
                .collect(Collectors.toSet());
        System.out.printf("Situation count after removing singles: %d\n", situationsWithManyAlarms.size());
        return situationsWithManyAlarms;
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


    @Test
    @Ignore("Example")
    public void canReproduce() throws JAXBException, IOException {
        /*
        Running simulation at point [437.70467462237895, 42.27697777946783, 0.16868898831888357]...
        Generated: 203 situations.
        Initial situation count: 203
        Situation count after removing singles: 203
        Scoring...
        Score: 19.18
            Metric - Name: AlarmAccuracy, Value: 79.00
            Metric - Name: FalsePositives, Value: 85.00
            Metric - Name: FalseNegatives, Value: 28.00
         */
        final EngineAsFunction engineAsFunction = new EngineAsFunction();
        Random r = new Random();
        while (true) {
            engineAsFunction.value(new double[]{r.nextDouble() * 1000,r.nextDouble() * 1000,r.nextDouble() * 1000});
            double result = engineAsFunction.value(new double[]{437.70467462237895, 42.27697777946783, 0.16868898831888357});
            assertThat(result, closeTo(41.10, 1e-2));
        }
    }

}
