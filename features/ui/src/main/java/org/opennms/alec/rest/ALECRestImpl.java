package org.opennms.alec.rest;

import java.io.IOException;
import java.util.List;

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
    public Response getVersions(final String path,
                                final String filename) {
        if (path.isEmpty() || filename.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get agreement versions: {}/{}", path, filename);
        List<String> ret;
        try {
            ret = storeFile.getVersions(path, filename);
        } catch (IOException e) {
            return Response.status(Response.Status.NOT_FOUND).entity(e.getMessage()).build();
        }
        return Response.ok().entity(ret.toArray()).build();
    }

    @Override
    public Response storeAgreement(final String path,
                                   final String filename,
                                   final String body) {
        if (path.isEmpty() || filename.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Store agreement: {}{}", path, filename);
        try {
            storeFile.write(path, filename, body);
        } catch (IOException e) {
            return Response.status(Response.Status.NOT_FOUND).entity(e.getMessage()).build();
        }
        return Response.ok().build();
    }

    @Override
    public Response getAgreement(final String path,
                                 final String filename,
                                 final String version) {
        if (path.isEmpty() || filename.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get agreement: {}/{} version: {}", path, filename, version);
        String agreement;
        try {
            agreement = storeFile.read(path, filename, version);
        } catch (IOException e) {
            return Response.status(Response.Status.NOT_FOUND).entity(e.getMessage()).build();
        }
        return Response.ok(agreement).build();
    }

    @Override
    public Response getAgreement(final String path,
                                 final String filename) {
        if (path.isEmpty() || filename.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get last version agreement: {}/{}", path, filename);
        String agreement;
        try {
            agreement = storeFile.read(path, filename);
        } catch (IOException e) {
            return Response.status(Response.Status.NOT_FOUND).entity(e.getMessage()).build();
        }
        return Response.ok(agreement).build();
    }
}
