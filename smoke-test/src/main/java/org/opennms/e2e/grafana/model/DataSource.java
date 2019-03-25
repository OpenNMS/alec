/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
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

package org.opennms.e2e.grafana.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DataSource {

    private Integer id;
    private Integer orgId;
    private String name;
    private String type;
    private String url;
    private String access;
    private String basicAuthUser;
    private String basicAuthPassword;
    private String database;
    private boolean basicAuth;
    private boolean isDefault;
    private Object jsonData;

    public Integer getId() {
        return id;
    }

    public DataSource setId(Integer id) {
        this.id = id;
        return this;
    }

    public Integer getOrgId() {
        return orgId;
    }

    public DataSource setOrgId(Integer orgId) {
        this.orgId = orgId;
        return this;
    }

    public String getName() {
        return name;
    }

    public DataSource setName(String name) {
        this.name = name;
        return this;
    }

    public String getType() {
        return type;
    }

    public DataSource setType(String type) {
        this.type = type;
        return this;
    }

    public String getUrl() {
        return url;
    }

    public DataSource setUrl(String url) {
        this.url = url;
        return this;
    }

    public String getAccess() {
        return access;
    }

    public DataSource setAccess(String access) {
        this.access = access;
        return this;
    }

    public String getBasicAuthUser() {
        return basicAuthUser;
    }

    public DataSource setBasicAuthUser(String basicAuthUser) {
        this.basicAuthUser = basicAuthUser;
        return this;
    }

    public String getBasicAuthPassword() {
        return basicAuthPassword;
    }

    public DataSource setBasicAuthPassword(String basicAuthPassword) {
        this.basicAuthPassword = basicAuthPassword;
        return this;
    }

    public String getDatabase() {
        return database;
    }

    public DataSource setDatabase(String database) {
        this.database = database;
        return this;
    }

    public boolean isBasicAuth() {
        return basicAuth;
    }

    public DataSource setBasicAuth(boolean basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public DataSource setDefault(boolean aDefault) {
        isDefault = aDefault;
        return this;
    }

    public Object getJsonData() {
        return jsonData;
    }

    public DataSource setJsonData(Object jsonData) {
        this.jsonData = jsonData;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DataSource that = (DataSource) o;
        return id == that.id &&
                orgId == that.orgId &&
                basicAuth == that.basicAuth &&
                isDefault == that.isDefault &&
                Objects.equals(name, that.name) &&
                Objects.equals(type, that.type) &&
                Objects.equals(url, that.url) &&
                Objects.equals(access, that.access) &&
                Objects.equals(basicAuthUser, that.basicAuthUser) &&
                Objects.equals(basicAuthPassword, that.basicAuthPassword) &&
                Objects.equals(database, that.database) &&
                Objects.equals(jsonData, that.jsonData);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orgId, name, type, url, access, basicAuthUser, basicAuthPassword, database, basicAuth, isDefault, jsonData);
    }

    @Override
    public String toString() {
        return "DataSource{" +
                "id=" + id +
                ", orgId=" + orgId +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", url='" + url + '\'' +
                ", access='" + access + '\'' +
                ", basicAuthUser='" + basicAuthUser + '\'' +
                ", basicAuthPassword='" + basicAuthPassword + '\'' +
                ", database='" + database + '\'' +
                ", basicAuth=" + basicAuth +
                ", isDefault=" + isDefault +
                ", jsonData='" + jsonData + '\'' +
                '}';
    }
}
