package org.opennms.alec.rest;

import java.util.StringJoiner;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

@JsonDeserialize(builder = ParameterBuilderImpl.Builder.class)
public class ParameterBuilderImpl implements Parameter {

    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final String distanceMeasure;
    private final String engine;

    private ParameterBuilderImpl(Builder builder) {
        alpha = builder.alpha;
        beta = builder.beta;
        epsilon = builder.epsilon;
        distanceMeasure = builder.distanceMeasure;
        engine = builder.engine;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(Parameter copy) {
        Builder builder = new Builder();
        builder.alpha = copy.getAlpha();
        builder.beta = copy.getBeta();
        builder.epsilon = copy.getEpsilon();
        builder.distanceMeasure = copy.getDistanceMeasure();
        builder.engine = copy.getEngine();
        return builder;
    }

    @Override
    public Double getAlpha() {
        return alpha;
    }

    @Override
    public Double getBeta() {
        return beta;
    }

    @Override
    public Double getEpsilon() {
        return epsilon;
    }

    @Override
    public String getDistanceMeasure() {
        return distanceMeasure;
    }

    @Override
    public String getEngine() {
        return engine;
    }

    @JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private Double alpha;
        private Double beta;
        private Double epsilon;
        private String distanceMeasure;
        private String engine;

        private Builder() {
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

        public Builder distanceMeasure(String val) {
            distanceMeasure = val;
            return this;
        }

        public Builder engine(String val) {
            engine = val;
            return this;
        }

        public ParameterBuilderImpl build() {
            return new ParameterBuilderImpl(this);
        }
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", ParameterBuilderImpl.class.getSimpleName() + "[", "]")
                .add("alpha=" + alpha)
                .add("beta=" + beta)
                .add("epsilon=" + epsilon)
                .add("distanceMeasure='" + distanceMeasure + "'")
                .add("engine='" + engine + "'")
                .toString();
    }
}
