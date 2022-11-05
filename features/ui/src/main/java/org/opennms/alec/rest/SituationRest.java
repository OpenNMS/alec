/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

package org.opennms.alec.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.opennms.alec.data.CreateSituationPayload;

@Path("alec/situation")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public interface SituationRest {
    @POST
    @Path("rejected/{id}")
    Response rejected(@HeaderParam ("token") String token, @PathParam("id") String id, String feedback) throws InterruptedException;

    @POST
    @Path("accepted/{id}")
    Response accepted(@HeaderParam ("token") String token, @PathParam("id") String id) throws InterruptedException;

    @GET
    @Path("statusList")
    Response getSituationStatusList() throws InterruptedException;

    @GET
    Response getSituationList() throws InterruptedException;

    @PUT
    @Path("{situationId}/alarm/{alarmId}")
    Response addAlarm(@HeaderParam ("token") String token, @PathParam("situationId") String situationId, @PathParam("alarmId") String alarmId, String feedback) throws InterruptedException;

    @DELETE
    @Path("{situationId}/alarm/{alarmId}")
    Response removeAlarm(@HeaderParam ("token") String token, @PathParam("situationId") String situationId, @PathParam("alarmId") String alarmId, String feedback) throws InterruptedException;

    @POST
    Response createSituation(@HeaderParam ("token") String token, CreateSituationPayload createSituationPayload);
}
