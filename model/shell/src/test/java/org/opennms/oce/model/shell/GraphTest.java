package org.opennms.oce.model.shell;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

import org.junit.Test;
import org.opennms.oce.model.api.Model;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.api.OperationalState;
import org.opennms.oce.model.impl.ModelBuilderImpl;

public class GraphTest {

    @Test
    public void canGenerateGraph() {
        ModelBuilder modelBuilder = new ModelBuilderImpl();

        // Get a handle to the model and modify some state
        Model model = modelBuilder.buildModel();
        // Set one port to SA
        model.getObjectById("n1-c2-p1").setOperationalState(OperationalState.SA);
        // another to NSA
        model.getObjectById("n1-c1-p2").setOperationalState(OperationalState.NSA);

        GenerateGraph generator = new GenerateGraph(model);

        String dotGraph = generator.generateGraph();

        // Verify some known relationships
        assertThat(dotGraph, containsString("\"Test Model\" -- \"n1(Device)\";"));
        assertThat(dotGraph, containsString("\"n1(Device)\" -- \"n1-c2(Card)\";"));

        // Verify the impacts
        assertThat(dotGraph, containsString("\"n1-c1-p2(Port)\"[color=orange1];"));
        assertThat(dotGraph, containsString("\"n1-c2-p1(Port)\"[color=red];"));

        // Verify color one of the dependent links
        assertThat(dotGraph, containsString("\"n1-c1-p1___n1-c2-p1(Link)\" -- \"n1-c2-p1(Port)\"[color=\"blue\"];"));

    }

}
