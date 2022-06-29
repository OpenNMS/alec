package org.opennms.alec.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("alec")
public interface ALECRest {

    @GET
    @Path("/ping")
    Response ping();

    @POST
    @Path("/hook")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    Response handleWebhook(String body);

    @POST
    @Path("/parameter")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    Response setParameter(Parameter parameter);

}
