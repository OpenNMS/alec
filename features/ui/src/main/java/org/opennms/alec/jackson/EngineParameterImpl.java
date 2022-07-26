package org.opennms.alec.jackson;

import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.dbscan.DBScanEngine;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class EngineParameterImpl implements EngineParameter {

    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final String distanceMeasureName;
    private final String engineName;

    private EngineParameterImpl(Builder builder) {
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
        private Double alpha;
        private Double beta;
        private Double epsilon;
        private String distanceMeasureName;
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
                .add("distanceMeasureName='" + distanceMeasureName + "'")
                .add("engineName='" + engineName + "'")
                .toString();
    }
}
