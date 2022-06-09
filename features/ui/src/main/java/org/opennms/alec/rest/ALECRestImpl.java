package org.opennms.alec.rest;

import java.io.IOException;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.StoreFile;
import org.opennms.alec.data.StoreFileImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);

    private final StoreFile storeFile;

    public ALECRestImpl() {
        this(new StoreFileImpl());
    }

    public ALECRestImpl(StoreFile storeFile) {
        this.storeFile = storeFile;
    }

    @Override
    public Response ping() {
        // How do I identify the user?
        return Response.ok("pong!!").build();
    }

    @Override
    public Response handleWebhook(String body) {
        LOG.debug("Got payload: {}", body);
        return Response.ok().build();
    }

    @Override
    public Response getVersions(String filename, String path) {
        LOG.debug("Get agreement versions: {}/{}", path, filename);
        return Response.ok(storeFile.getVersions(path, filename)).build();
    }

    @Override
    public Response storeAgreement(String filename, String path, String content) {
        LOG.debug("Store agreement: {}{}", path, filename);
        try {
            storeFile.write(path, filename, content);
        } catch (IOException e) {
            return Response.status(400, e.getMessage()).build();
        }
        return Response.ok().build();
    }
}
