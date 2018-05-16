package org.opennms.oce.model.api;

public enum ServiceState {
    @Deprecated
    IN,
    @Deprecated
    OUT,
    UNDEFINED,
    IN_MAINTENANCE,
    COMMISSIONING,
    IN_SERVICE,
    OUT_OF_SERVICE,
}
