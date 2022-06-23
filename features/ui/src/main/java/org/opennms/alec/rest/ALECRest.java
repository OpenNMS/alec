package org.opennms.alec.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("alec")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public interface ALECRest {

    @GET
    @Path("/ping")
    Response ping();

    @POST
    @Path("/hook")
    Response handleWebhook(String body);

    @GET
    @Path("/file/versions/{key}")
    Response getFileVersions(@PathParam("key") String key);

    @POST
    @Path("/file/{key}")
    Response saveFile(@PathParam("key") String key, String value);

    @GET
    @Path("/file/{key}/{version}")
    Response retrieveFile(@PathParam("key") String key, @PathParam("version") String version);

    @GET
    @Path("/file/lastVersion/{key}")
    Response getFileLastVersion(@PathParam("key") String key);

    @GET
    @Path("/db/{key}")
    Response getDB(@PathParam("key") String key);

    @POST
    @Path("/db/{key}")
    Response storeDB(@PathParam("key") String key, String body);
}
