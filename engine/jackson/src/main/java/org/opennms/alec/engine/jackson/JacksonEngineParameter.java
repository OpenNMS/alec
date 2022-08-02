package org.opennms.alec.engine.jackson;


import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.api.EngineParameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

@JsonDeserialize(builder = JacksonEngineParameter.Builder.class)
@JsonPropertyOrder({"engineName", "distanceMeasureName", "alpha", "beta", "epsilon"})
public class JacksonEngineParameter implements EngineParameter {

    public static final double DEFAULT_ALPHA = 144.47117699d;
    public static final double DEFAULT_BETA = 0.55257784d;
    public static final double DEFAULT_ALARN_IN_SPACE_EPSILON = 100d;
    public static final double DEFAULT_HELLINGER_EPSILON = 75d;
    public static final String HELLINGER = "hellinger";
    public static final String ALARM_IN_SPACETIME = "alarminspaceandtimedistance";
    public static final String CLUSTER = "cluster";
    public static final String DEFAULT_DISTANCE_MEASURE = ALARM_IN_SPACETIME;


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
                .orElse(DEFAULT_ALPHA);
    }

    @Override
    public Double getBeta() {
        return Optional.ofNullable(beta)
                .orElse(DEFAULT_BETA);
    }

    @Override
    public Double getEpsilon() {
        if(Optional.ofNullable(epsilon).isEmpty()){
            switch (getDistanceMeasureName()) {
                case HELLINGER:
                    return DEFAULT_HELLINGER_EPSILON;
                case ALARM_IN_SPACETIME:
                default:
                    return DEFAULT_ALARN_IN_SPACE_EPSILON;
            }
        } else {
            return epsilon;
        }
    }

    @Override
    public String getDistanceMeasureName() {
        return Optional.ofNullable(distanceMeasureName)
                .orElse(DEFAULT_DISTANCE_MEASURE);
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
                    .engineName(CLUSTER)
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
