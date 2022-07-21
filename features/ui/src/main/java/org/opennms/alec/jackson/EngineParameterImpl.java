package org.opennms.alec.jackson;

import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.dbscan.DBScanEngine;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class EngineParameterImpl implements EngineParameter {

    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final String distanceMeasure;
    private final String engine;

    private EngineParameterImpl(Builder builder) {
        alpha = builder.alpha;
        beta = builder.beta;
        epsilon = builder.epsilon;
        distanceMeasure = builder.distanceMeasure;
        engine = builder.engine;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(EngineParameter copy) {
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
        if(Optional.ofNullable(alpha).isPresent()) {
            return alpha;
        } else {
            return DBScanEngine.DEFAULT_ALPHA;
        }
    }

    @Override
    public Double getBeta() {
        if(Optional.ofNullable(beta).isPresent()) {
            return beta;
        } else {
            return DBScanEngine.DEFAULT_BETA;
        }
    }

    @Override
    public Double getEpsilon() {
        if(Optional.ofNullable(epsilon).isPresent()) {
            return epsilon;
        } else {
            return DBScanEngine.DEFAULT_EPSILON;
        }
    }

    @Override
    public String getDistanceMeasure() {
        if(Optional.ofNullable(distanceMeasure).isPresent()) {
            return distanceMeasure;
        } else {
            return DBScanEngine.DEFAULT_DISTANCE_MEASURE;
        }
    }

    @Override
    public String getEngine() {
        return engine;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        private Double alpha;
        private Double beta;
        private Double epsilon;
        private String distanceMeasure;
        private String engine;

        private Builder() {
        }

        public Builder(Double alpha, Double beta, Double epsilon, String distanceMeasure, String engine) {
            this.alpha = alpha;
            this.beta = beta;
            this.epsilon = epsilon;
            this.distanceMeasure = distanceMeasure;
            this.engine = engine;
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

        public EngineParameterImpl build() {
            return new EngineParameterImpl(this);
        }
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", EngineParameterImpl.class.getSimpleName() + "[", "]")
                .add("alpha=" + alpha)
                .add("beta=" + beta)
                .add("epsilon=" + epsilon)
                .add("distanceMeasure='" + distanceMeasure + "'")
                .add("engine='" + engine + "'")
                .toString();
    }
}
