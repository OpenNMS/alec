package org.opennms.alec.engine.dbscan;


import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.engine.api.DistanceMeasureFactory;
import org.opennms.alec.engine.cluster.AbstractClusterEngine;
import org.opennms.alec.engine.jackson.JacksonEngineParameter;

import com.codahale.metrics.MetricRegistry;

@RunWith(JUnit4.class)
public class DBScanEngineFactoryTest {

    @Test
    public void createEngineWithSpaceTimeTest() {
        Map<String, DistanceMeasureFactory> distanceMeasureFactoryMap = new HashMap<>(){{
            put("alarminspaceandtimedistance", new AlarmInSpaceAndTimeDistanceMeasureFactory());
        }};
        DBScanEngineFactory underTest = new DBScanEngineFactory(JacksonEngineParameter.DEFAULT_ALPHA,
                JacksonEngineParameter.DEFAULT_BETA,
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON,
                "alarminspaceandtimedistance",
                null,
                distanceMeasureFactoryMap);
        AbstractClusterEngine engine = underTest.createEngine(new MetricRegistry());
        assertThat(engine, is(notNullValue()));
    }

    @Test
    public void createEngineWithHellingerTest() {
        Map<String, DistanceMeasureFactory> distanceMeasureFactoryMap = new HashMap<>(){{
            put("alarminspaceandtimedistance", new AlarmInSpaceAndTimeDistanceMeasureFactory());
            put("hellinger", new HellingerDistanceMeasureFactory());
        }};
        DBScanEngineFactory underTest = new DBScanEngineFactory(JacksonEngineParameter.DEFAULT_ALPHA,
                JacksonEngineParameter.DEFAULT_BETA,
                HellingerDistanceMeasure.DEFAULT_EPSILON,
                "hellinger",
                null,
                distanceMeasureFactoryMap);
        AbstractClusterEngine engine = underTest.createEngine(new MetricRegistry());
        assertThat(engine, is(notNullValue()));
    }
}