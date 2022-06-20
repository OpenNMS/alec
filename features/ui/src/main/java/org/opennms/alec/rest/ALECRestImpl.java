package org.opennms.alec.rest;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;
import javax.ws.rs.core.Response;

import org.opennms.alec.data.FileStore;
import org.opennms.alec.data.PostgresKVStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);
    private static final String CONTEXT = "alec";

    private final FileStore fileStore;
    private final PostgresKVStore postgresKVStore;

    public ALECRestImpl(DataSource dataSource) {
        this(new FileStore(), new PostgresKVStore(dataSource));
    }

    public ALECRestImpl(FileStore fileStore, PostgresKVStore postgresKVStore) {
        this.fileStore = fileStore;
        this.postgresKVStore = postgresKVStore;
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
    public Response getFileVersions(final String key) {
        if (key.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get {} versions", key);
        List<String> ret;
        try {
            ret = fileStore.getVersions(key);
        } catch (IOException e) {
            return Response.status(Response.Status.NOT_FOUND).entity(e.getMessage()).build();
        }
        return Response.ok().entity(ret.toArray()).build();
    }

    @Override
    public Response saveFile(final String key,
                             final String value) {
        if (key.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Store {} - {}", key, value);
        fileStore.save(key, value, CONTEXT);
        return Response.ok().build();
    }

    @Override
    public Response retrieveFile(final String key,
                                 final String version) {
        if (key.isEmpty() || version.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get {} version: {}", key, version);
        Optional<String> value;
        try {
            value = fileStore.retrieve(key, null, version);
        } catch (Exception e) {
            LOG.error(e.getMessage());
            return Response.serverError().entity(e.getMessage()).build();
        }
        return getResponse(value);
    }

    @Override
    public Response getFileLastVersion(final String key) {
        if (key.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get last version {}", key);
        Optional<String> value;
        try {
            value = fileStore.retrieve(key, CONTEXT);
        } catch (Exception e) {
            LOG.error(e.getMessage());
            return Response.serverError().entity(e.getMessage()).build();
        }
        return getResponse(value);
    }
    @Override
    public Response getDB(String key) {
        if (key.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        LOG.debug("Get DB {}", key);
        Optional<String> value = postgresKVStore.get(key, "1");
        return getResponse(value);
    }

    @Override
    public Response storeDB(String key, String body) {
        Long ret = postgresKVStore.put(key, body, "1");
        return Response.ok().entity(ret).build();
    }

    private Response getResponse(Optional<String> value) {
        if (value.isPresent()) {
            return Response.ok().entity(value.get()).build();
        } else {
            return Response.noContent().build();
        }
    }
}
