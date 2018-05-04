package org.opennms.oce.model.impl;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.api.OperationalState;
import org.opennms.oce.model.api.ServiceState;

public class AlarmPropagationTest {

    private Model testModel;

    @Before
    public void setUp() {
        ModelBuilder modelBuilder = new ModelBuilderImpl();
        testModel = modelBuilder.buildModel();
    }

    @Test
    public void canPropagateState() {
        ModelObject modelObject = testModel.getRoot();
        ModelObject eswitch = testModel.getObjectById("n1");
        ModelObject card1 = testModel.getObjectById("n1-c1");
        ModelObject card2 = testModel.getObjectById("n1-c2");
        ModelObject port1 = testModel.getObjectById("n1-c1-p1");
        ModelObject port2 = testModel.getObjectById("n1-c1-p2");
        ModelObject port3 = testModel.getObjectById("n1-c2-p1");
        ModelObject port4 = testModel.getObjectById("n1-c2-p2");

        // Vreify initial State
        assertEquals(port1.getServiceState(), ServiceState.IN);
        // ... all modelObjects

        assertEquals(port1.getOperationalState(), OperationalState.NORMAL);
        // ...

        assertEquals(card1.getChildGroup("Port").getMembers().size(), 2);
        assertEquals(card1.getChildGroup("Port").getNumberNormalState(), 2);
        assertEquals(card1.getChildGroup("Port").getNumberNonServiceAffecting(),
                     0);
        assertEquals(card1.getChildGroup("Port").getNumberServiceAffecting(),
                     0);

        // Propagate an SA alarm on the first port....
        port1.setOperationalState(OperationalState.SA);
        assertEquals(card1.getChildGroup("Port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("Port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("Port").getNumberServiceAffecting(), 1);

        // Ensure state clears properly
        port1.setOperationalState(OperationalState.NORMAL);
        assertEquals(card1.getChildGroup("Port").getNumberNormalState(), 2);
        assertEquals(card1.getChildGroup("Port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("Port").getNumberServiceAffecting(), 0);

        // and NSA....
        port1.setOperationalState(OperationalState.NSA);
        assertEquals(card1.getChildGroup("Port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("Port").getNumberNonServiceAffecting(), 1);
        assertEquals(card1.getChildGroup("Port").getNumberServiceAffecting(), 0);

        // Propagate an SA alarm on the first port....
        port1.setOperationalState(OperationalState.SA);
        assertEquals(card1.getChildGroup("Port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("Port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("Port").getNumberServiceAffecting(), 1);

        // TODO - add test for multiple groups - ie. parents, uncles,
        // associate/peer - uncle - BGPSession over a link

        // We need to track that the Status Count change direction

    }

}
