package org.opennms.alec.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
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
    @Path("/versions")
    Response getVersions(@QueryParam("path") String path, @QueryParam("filename") String filename);

    @POST
    @Path("/agreement")
    Response storeAgreement(@QueryParam("path") String path, @QueryParam("filename") String filename, String body);

    @GET
    @Path("/agreement")
    Response getAgreement(@QueryParam("path") String path, @QueryParam("filename") String filename, @QueryParam("version") String version);

    @GET
    @Path("/agreement/lastversion")
    Response getAgreement(@QueryParam("path") String path, @QueryParam("filename") String filename);
}
