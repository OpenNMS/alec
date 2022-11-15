package org.opennms.alec.data;

import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.dbscan.AlarmInSpaceTimeDistanceMeasure;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.HellingerDistanceMeasure;
import org.opennms.alec.engine.deeplearning.DeepLearningEngineConf;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class EngineParameterImpl implements EngineParameter {

    public static final String DBSCAN = "dbscan";
    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final String distanceMeasureName;
    private final String engineName;
    private final String remoteUri;
    private final String token;
    private final boolean remote;

    private EngineParameterImpl(Builder builder) {
        alpha = builder.alpha;
        beta = builder.beta;
        epsilon = builder.epsilon;
        distanceMeasureName = builder.distanceMeasureName;
        engineName = builder.engineName;
        remoteUri = builder.remoteUri;
        token = builder.token;
        remote = builder.remote;
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
        builder.remoteUri = copy.getRemoteUri();
        builder.token = copy.getToken();
        builder.remote = copy.isRemote();
        return builder;
    }

    @Override
    public Double getAlpha() {
        if (Optional.ofNullable(alpha).isEmpty()) {
            if (DBSCAN.equals(getEngineName())) {
                return DBScanEngine.DEFAULT_ALPHA;
            }
            return null;
        } else {
            return alpha;
        }
    }

    @Override
    public Double getBeta() {
        if (Optional.ofNullable(beta).isEmpty()) {
            if (DBSCAN.equals(getEngineName())) {
                return DBScanEngine.DEFAULT_BETA;
            }
            return null;
        } else {
            return beta;
        }
    }

    @Override
    public Double getEpsilon() {
        if (Optional.ofNullable(epsilon).isEmpty()) {
            switch (getDistanceMeasureName()) {
                case "hellinger":
                    return HellingerDistanceMeasure.DEFAULT_EPSILON;
                case "alarminspacetime":
                    return AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON;
                default:
                    if (engineName.equals("deeplearning")) {
                        return DeepLearningEngineConf.DEFAULT_EPSILON;
                    }
                    return null;
            }
        } else {
            return epsilon;
        }
    }

    @Override
    public String getDistanceMeasureName() {
        if (Optional.ofNullable(distanceMeasureName).isEmpty()) {
            if (DBSCAN.equals(engineName)) {
                return DBScanEngine.DEFAULT_DISTANCE_MEASURE;
            }
            return "";
        } else {
            return distanceMeasureName;
        }
    }

    @Override
    public String getEngineName() {
        return engineName;
    }

    public String getRemoteUri() {
        return remoteUri;
    }

    @Override
    public String getToken() {
        return token;
    }

    @Override
    public boolean isRemote() {
        return remote;
    }

    @JsonPOJOBuilder(withPrefix = "")
    public static final class Builder {
        private Double alpha;
        private Double beta;
        private Double epsilon;
        private String distanceMeasureName;
        private String engineName;
        private String remoteUri;
        private String token;
        private boolean remote;

        private Builder() {
        }

        public static Builder newBuilder() {
            return new Builder();
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

        public Builder remoteUri(String val) {
            remoteUri = val;
            return this;
        }

        public Builder token(String val) {
            token = val;
            return this;
        }

        public Builder remote(boolean val) {
            remote = val;
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
                .add("remoteUri='" + remoteUri + "'")
                .add("token='" + token + "'")
                .add("remote=" + remote)
                .toString();
    }
}
