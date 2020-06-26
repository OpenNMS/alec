package org.opennms.alec.opennms.graph;

import org.opennms.alec.features.graph.api.GraphChangedListener;
import org.opennms.integration.api.v1.graph.GraphContainerCache;

/**
 *  Listens to a graph change event and triggers the Openms Integration Layer cache to be invalidated.
 */
public class AlecGraphChangeListener implements GraphChangedListener {

    final GraphContainerCache cache;

    public AlecGraphChangeListener(final GraphContainerCache cache) {
        this.cache = cache;
    }

    @Override
    public void graphHasChanged() {
        cache.invalidate(Constants.CONTAINER_ID);
    }
}
