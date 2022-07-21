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
    @Path("/configurations")
    Response getConfigurations();

    @GET
    @Path("/configuration/{key}")
    Response getConfiguration(@PathParam("key") String key);

    @POST
    @Path("/configuration")
    Response setConfiguration(KeyValue keyValue);

    @POST
    @Path("/engine/configuration")
    Response setEngineConfiguration(EngineParameter engineParameter);

    @GET
    @Path("/engine/configuration")
    Response getEngineConfiguration();

    @POST
    @Path("/situations")
    Response storeSituations();

    @GET
    @Path("/situations")
    Response getSituations();

    @POST
    @Path("situation/refused/{id}")
    Response refusedSituation(@PathParam("id") String id);

    @POST
    @Path("situation/accepted/{id}")
    Response acceptedSituation(@PathParam("id") String id);
}
