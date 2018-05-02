package org.opennms.oce.model.shell;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.ModelObject;
import org.opennms.oce.model.impl.ModelObjectImpl;

public class GraphTest {

    @Test
    public void test() {
        ModelBuilder modelBuilder = mock(ModelBuilder.class);
        Model model = mock(Model.class);

        ModelObject modelObject = new ModelObjectImpl((ModelObject) null,
                                                      "model", "MODEL");
        ModelObject eswitch = new ModelObjectImpl(modelObject, "switch",
                                                  "SWITCH01");
        ModelObject card1 = new ModelObjectImpl(eswitch, "card", "CARD_01");
        ModelObject card2 = new ModelObjectImpl(eswitch, "card", "CARD_02");
        ModelObject port1 = new ModelObjectImpl(card1, "port", "PORT_01");
        ModelObject port2 = new ModelObjectImpl(card1, "port", "PORT_02");
        ModelObject prot3 = new ModelObjectImpl(card2, "port", "PORT_03");
        ModelObject prot4 = new ModelObjectImpl(card2, "port", "PORT_04");

        when(modelBuilder.buildModel()).thenReturn(model);
        when(model.getRoot()).thenReturn(modelObject);

        GenerateGraph generator = new GenerateGraph(modelBuilder);

        String actual = generator.generateGraph();
        System.out.println(actual);

        // TODO - make an assertion.
        // fail("Not yet implemented");
    }

}
