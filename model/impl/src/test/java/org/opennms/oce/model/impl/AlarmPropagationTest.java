package org.opennms.oce.model.impl;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.api.OperationalState;
import org.opennms.oce.model.api.ServiceState;

public class AlarmPropagationTest {

    @Test
    public void test() {

        ModelBuilder modelBuilder = mock(ModelBuilder.class);
        Model model = mock(Model.class);

        // TODO - add Link for testing
        // TODO - abstract this to TestUtility - tbd read in XML model....

        ModelObject modelObject = new ModelObjectImpl((ModelObject) null, "model", "MODEL");
        ModelObject eswitch = new ModelObjectImpl(modelObject, "switch", "SWITCH01");
        ModelObject card1 = new ModelObjectImpl(eswitch, "card", "CARD_01");
        ModelObject card2 = new ModelObjectImpl(eswitch, "card", "CARD_02");
        ModelObject port1 = new ModelObjectImpl(card1, "port", "PORT_01");
        ModelObject port2 = new ModelObjectImpl(card1, "port", "PORT_02");
        ModelObject port3 = new ModelObjectImpl(card2, "port", "PORT_03");
        ModelObject port4 = new ModelObjectImpl(card2, "port", "PORT_04");

        when(modelBuilder.buildModel()).thenReturn(model);
        when(model.getRoot()).thenReturn(modelObject);

        // Vreify initial State
        assertEquals(port1.getServiceState(), ServiceState.IN);
        // ... all modelObjects

        assertEquals(port1.getOperationalState(), OperationalState.NORMAL);
        // ...

        assertEquals(card1.getChildGroup("port").getMembers().size(), 2);
        assertEquals(card1.getChildGroup("port").getNumberNormalState(), 2);
        assertEquals(card1.getChildGroup("port").getNumberNonServiceAffecting(),
                     0);
        assertEquals(card1.getChildGroup("port").getNumberServiceAffecting(),
                     0);

        // Propagate an SA alarm on the first port....
        port1.setOperationalState(OperationalState.SA);
        assertEquals(card1.getChildGroup("port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("port").getNumberServiceAffecting(), 1);

        // Ensure state clears properly
        port1.setOperationalState(OperationalState.NORMAL);
        assertEquals(card1.getChildGroup("port").getNumberNormalState(), 2);
        assertEquals(card1.getChildGroup("port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("port").getNumberServiceAffecting(), 0);

        // and NSA....
        port1.setOperationalState(OperationalState.NSA);
        assertEquals(card1.getChildGroup("port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("port").getNumberNonServiceAffecting(), 1);
        assertEquals(card1.getChildGroup("port").getNumberServiceAffecting(), 0);

        // Propagate an SA alarm on the first port....
        port1.setOperationalState(OperationalState.SA);
        assertEquals(card1.getChildGroup("port").getNumberNormalState(), 1);
        assertEquals(card1.getChildGroup("port").getNumberNonServiceAffecting(), 0);
        assertEquals(card1.getChildGroup("port").getNumberServiceAffecting(), 1);

        // TODO - add test for multiple groups - ie. parents, uncles,
        // associate/peer - uncle - BGPSession over a link

        // We need to track that the Status Count change direction

    }

}
