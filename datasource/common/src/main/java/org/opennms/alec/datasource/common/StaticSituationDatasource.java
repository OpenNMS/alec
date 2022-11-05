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

package org.opennms.alec.datasource.common;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.opennms.alec.datasource.api.SituationHandler;

public class StaticSituationDatasource implements SituationDatasource {
    private final List<Situation> situations;

    public StaticSituationDatasource(List<Situation> situations) {
        this.situations = Objects.requireNonNull(situations);
    }

    @Override
    public List<Situation> getSituations() {
        return situations;
    }

    @Override
    public Optional<Situation> getSituation(int id) throws InterruptedException {
        return situations.stream().filter(situation -> String.valueOf(id).equals(situation.getId())).findFirst();
    }

    @Override
    public void forwardSituation(Situation situation) {
        // pass
    }

    @Override
    public void registerHandler(SituationHandler handler) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void unregisterHandler(SituationHandler handler) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void waitUntilReady() {
        // pass
    }
}
