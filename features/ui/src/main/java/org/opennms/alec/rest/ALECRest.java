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

    @GET
    @Path("/db/{key}")
    Response getDB(@PathParam("key") String key);

    @POST
    @Path("/db/{key}")
    Response storeDB(@PathParam("key") String key, String body);

    @POST
    @Path("/parameter")
    Response setParameter(Parameter parameter);
}
