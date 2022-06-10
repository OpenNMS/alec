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
    @Path("/versions/{path}/{filename}")
    Response getVersions(@PathParam("path") String path, @PathParam("filename") String filename);

    @POST
    @Path("/agreement/{path}/{filename}")
    Response storeAgreement(@PathParam("path") String path, @PathParam("filename") String filename, String body);

}
