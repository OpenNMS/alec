package org.opennms.alec.jackson;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = EngineParameterImpl.Builder.class)
@JsonPropertyOrder({"engineName", "distanceMeasureName", "alpha", "beta", "epsilon"})
public interface EngineParameter {
    Double getAlpha();
    Double getBeta();
    Double getEpsilon();
    String getDistanceMeasureName();
    String getEngineName();
}
