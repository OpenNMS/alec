/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

package org.opennms.alec.feature.graph.rest.api;

import java.util.List;
import java.util.Set;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.graphdrawing.graphml.GraphmlType;
import org.opennms.alec.feature.graph.rest.model.AlarmSummary;
import org.opennms.alec.feature.graph.rest.model.GraphDTO;
import org.opennms.alec.feature.graph.rest.model.GraphSummary;
import org.opennms.alec.feature.graph.rest.model.InventoryObjectSummary;
import org.opennms.alec.feature.graph.rest.model.SituationSummary;

@Path("/")
public interface GraphEndpoint {

    @GET
    @Path("")
    @Produces("application/json")
    List<GraphSummary> getAvailableGraphs() throws Exception;

    @GET
    @Path("{name}")
    @Produces("application/json")
    List<GraphDTO> getGraph(@PathParam("name") String name,
            @DefaultValue("true") @QueryParam("includeAlarms") String includeAlarms,
            @DefaultValue("true") @QueryParam("filterEmptyNodes") String filterEmptyNodes) throws Exception;

    @GET
    @Path("{name}/graphml")
    @Produces("application/xml")
    GraphmlType getGraphAsGraphML(@PathParam("name") String name,
            @DefaultValue("true") @QueryParam("includeAlarms") String includeAlarms,
            @DefaultValue("true") @QueryParam("filterEmptyNodes") String filterEmptyNodes) throws Exception;

    @GET
    @Path("{name}/situations")
    @Produces("application/json")
    List<SituationSummary> getSituationsOnGraph(@PathParam("name") String name) throws Exception;

    @GET
    @Path("{name}/alarms")
    @Produces("application/json")
    List<AlarmSummary> getAlarmsOnGraph(@PathParam("name") String name) throws Exception;

    @GET
    @Path("{name}/inventory/{type}")
    @Produces("application/json")
    List<InventoryObjectSummary> getInventoryObjectsWithTypeOnGraph(@PathParam("name") String name, @PathParam("type") String type) throws Exception;

    @GET
    @Path("{name}/inventory-types")
    @Produces("application/json")
    Set<String> getInventoryObjectTypesOnGraph(@PathParam("name") String name) throws Exception;

    @GET
    @Path("{name}/neighborhood/{vertexId}")
    @Produces("application/json")
    List<GraphDTO> getNeighborhoodOfVertex(@PathParam("name") String name, @PathParam("vertexId") String vertexId, int hops,
            @DefaultValue("true") @QueryParam("includeAlarms") String includeAlarms,
            @DefaultValue("true") @QueryParam("filterEmptyNodes") String filterEmptyNodes) throws Exception;

}
