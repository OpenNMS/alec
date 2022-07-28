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

import com.codahale.metrics.MetricRegistry;

@RunWith(JUnit4.class)
public class DBScanEngineFactoryTest {

    @Test
    public void createEngineTest() {
        Map<String, DistanceMeasureFactory> distanceMeasureFactoryMap = new HashMap<>(){{
            put("alarminspaceandtimedistance", new AlarmInSpaceAndTimeDistanceMeasureFactory());
        }};
        DBScanEngineFactory underTest = new DBScanEngineFactory(DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                DBScanEngine.DEFAULT_EPSILON,
                "alarminspaceandtimedistance",
                null,
                distanceMeasureFactoryMap);
        AbstractClusterEngine engine = underTest.createEngine(new MetricRegistry());
        assertThat(engine, is(notNullValue()));
    }
}