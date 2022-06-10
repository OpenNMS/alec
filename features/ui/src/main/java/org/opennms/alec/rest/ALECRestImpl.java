package org.opennms.alec.rest;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
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
    @GET
    @Path("/versions/{path}/{filename}")
    @Override
    public Response getVersions(@PathParam("path") String path,
                                @PathParam("filename") String filename) {
        LOG.debug("Get agreement versions: {}/{}", path, filename);
//        return Response.ok(storeFile.getVersions(path, filename)).build();
        List<String> ret = storeFile.getVersions("/var/tmp", "filename");
        return Response.ok().entity(ret.toArray()).build();
    }

    @Override
    public Response storeAgreement(String path,
                                   String filename,
                                   String body) {
        LOG.debug("Store agreement: {}{}", path, filename);
        try {
            storeFile.write("/var/tmp", "filename", body);
        } catch (IOException e) {
            return Response.status(400, e.getMessage()).build();
        }
        return Response.ok().build();
    }
}
