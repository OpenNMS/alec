package org.opennms.alec.data;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = EngineParameterImpl.Builder.class)
@JsonPropertyOrder({"engineName", "distanceMeasureName", "alpha", "beta", "epsilon", "remoteUri", "token"})
public interface EngineParameter {
    Double getAlpha();

    Double getBeta();

    Double getEpsilon();

    String getDistanceMeasureName();

    String getEngineName();

    String getRemoteUri();

    String getToken();
}
