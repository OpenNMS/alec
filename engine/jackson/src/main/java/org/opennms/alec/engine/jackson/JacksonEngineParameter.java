package org.opennms.alec.engine.jackson;


import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.api.EngineParameter;
import org.opennms.alec.engine.cluster.ClusterEngineFactory;
import org.opennms.alec.engine.dbscan.DBScanEngine;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

@JsonDeserialize(builder = JacksonEngineParameter.Builder.class)
@JsonPropertyOrder({"engineName", "distanceMeasureName", "alpha", "beta", "epsilon"})
public class JacksonEngineParameter implements EngineParameter {

    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final String distanceMeasureName;
    private final String engineName;

    private JacksonEngineParameter(Builder builder) {
        alpha = builder.alpha;
        beta = builder.beta;
        epsilon = builder.epsilon;
        distanceMeasureName = builder.distanceMeasureName;
        engineName = builder.engineName;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(EngineParameter copy) {
        Builder builder = new Builder();
        builder.alpha = copy.getAlpha();
        builder.beta = copy.getBeta();
        builder.epsilon = copy.getEpsilon();
        builder.distanceMeasureName = copy.getDistanceMeasureName();
        builder.engineName = copy.getEngineName();
        return builder;
    }

    @Override
    public Double getAlpha() {
        return Optional.ofNullable(alpha)
                .orElse(DBScanEngine.DEFAULT_ALPHA);
    }

    @Override
    public Double getBeta() {
        return Optional.ofNullable(beta)
                .orElse(DBScanEngine.DEFAULT_BETA);
    }

    @Override
    public Double getEpsilon() {
        return Optional.ofNullable(epsilon)
                .orElse(DBScanEngine.DEFAULT_EPSILON);
    }

    @Override
    public String getDistanceMeasureName() {
        return Optional.ofNullable(distanceMeasureName)
                .orElse(DBScanEngine.DEFAULT_DISTANCE_MEASURE);
    }

    @Override
    public String getEngineName() {
        return engineName;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        @JsonProperty("alpha")
        private Double alpha;
        @JsonProperty("beta")
        private Double beta;
        @JsonProperty("epsilon")
        private Double epsilon;
        @JsonProperty("distanceMeasureName")
        private String distanceMeasureName;
        @JsonProperty("engineName")
        private String engineName;

        private Builder() {
        }

        public Builder(Double alpha, Double beta, Double epsilon, String distanceMeasureName, String engineName) {
            this.alpha = alpha;
            this.beta = beta;
            this.epsilon = epsilon;
            this.distanceMeasureName = distanceMeasureName;
            this.engineName = engineName;
        }

        public Builder alpha(Double val) {
            alpha = val;
            return this;
        }

        public Builder beta(Double val) {
            beta = val;
            return this;
        }

        public Builder epsilon(Double val) {
            epsilon = val;
            return this;
        }

        public Builder distanceMeasureName(String val) {
            distanceMeasureName = val;
            return this;
        }

        public Builder engineName(String val) {
            engineName = val;
            return this;
        }

        public EngineParameter build() {
            return new JacksonEngineParameter(this);
        }

        public EngineParameter buildDefault() {
            return JacksonEngineParameter.newBuilder()
                    .engineName(ClusterEngineFactory.CLUSTER)
                    .build();
        }
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", JacksonEngineParameter.class.getSimpleName() + "[", "]")
                .add("alpha=" + alpha)
                .add("beta=" + beta)
                .add("epsilon=" + epsilon)
                .add("distanceMeasureName='" + distanceMeasureName + "'")
                .add("engineName='" + engineName + "'")
                .toString();
    }
}
