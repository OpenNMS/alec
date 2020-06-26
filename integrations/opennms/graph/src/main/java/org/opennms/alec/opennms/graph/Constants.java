package org.opennms.alec.opennms.graph;

import org.opennms.integration.api.v1.graph.GraphInfo;
import org.opennms.integration.api.v1.graph.immutables.ImmutableGraphInfo;

public interface Constants {

    String CONTAINER_ID = "alecgraphcontainer";
    String NAMESPACE_ALEC = "alec";
    String NAMESPACE_INVENTORY = "inventory";

    GraphInfo GRAPH_INFO_ALEC = ImmutableGraphInfo.builder()
                .namespace(NAMESPACE_ALEC)
                .label("ALEC")
                .build();

    GraphInfo GRAPH_INFO_INVENTORY = ImmutableGraphInfo.builder()
                .namespace(NAMESPACE_INVENTORY)
                .label("Inventory")
                .build();

    String VALUE_ICON_SWITCH = "switch";
    String VALUE_ICON_REDUCTION_KEY = "reduction_key";
    String VALUE_ICON_INTERFACE = "interface";
    String VALUE_ICON_SITUATION = "situation";

}
