package rest;

import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ALECRestImpl implements ALECRest {
    private static final Logger LOG = LoggerFactory.getLogger(ALECRestImpl.class);

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

}
