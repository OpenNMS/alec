package org.opennms.alec.rest;

import java.text.MessageFormat;

import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ALECRestUtils {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestUtils.class);
    public static final String ALEC_CONFIG = "ALEC_CONFIG";

    private ALECRestUtils() {
        throw new IllegalStateException("Utility class");
    }

    public static Response somethingWentWrong(Throwable e) {
        LOG.error(e.getMessage(), e.fillInStackTrace());
        return Response.serverError().entity(MessageFormat.format("something went wrong: {0}", e.getMessage())).build();
    }
}
