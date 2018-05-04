package org.opennms.oce.model.shell;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

import org.junit.Test;
import org.opennms.oce.model.api.ModelBuilder;
import org.opennms.oce.model.impl.ModelBuilderImpl;

public class GraphTest {

    @Test
    public void canGenerateGraph() {
        ModelBuilder modelBuilder = new ModelBuilderImpl();
        GenerateGraph generator = new GenerateGraph(modelBuilder);

        String dotGraph = generator.generateGraph();

        // Verify some known relationships
        assertThat(dotGraph, containsString("\"Test Model\" -- \"n1(Device)\";"));
        assertThat(dotGraph, containsString("\"n1(Device)\" -- \"n1-c2(Card)\";"));
    }

}
