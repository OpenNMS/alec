package org.opennms.alec.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = EngineParameterImpl.Builder.class)
public interface EngineParameter {
    Double getAlpha();
    Double getBeta();
    Double getEpsilon();
    String getDistanceMeasure();
    String getEngine();
}
