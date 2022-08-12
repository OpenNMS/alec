package org.opennms.alec.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.opennms.alec.data.Agreement;
import org.opennms.alec.data.EngineParameter;

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

    @POST
    @Path("/engine/configuration")
    Response setEngineConfiguration(EngineParameter engineParameter);

    @GET
    @Path("/engine/configuration")
    Response getEngineConfiguration();

    @POST
    @Path("/agreement/configuration")
    Response setAgreementConfiguration(Agreement agreement);

    @GET
    @Path("/agreement/configuration")
    Response getAgreementConfiguration();
}
