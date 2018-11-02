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

package org.opennms.oce.driver.main;

import java.util.Objects;

import org.opennms.oce.datasource.api.SituationHandler;
import org.opennms.oce.engine.api.Engine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * A {@link SituationHandler} that handles the {@link SituationHandler#onSituationDeleted} call and triggers a
 * {@link Engine#deleteSituation} for the given Id.
 */
public class DeletingSituationHandler implements SituationHandler {
    private static final Logger LOG = LoggerFactory.getLogger(DeletingSituationHandler.class);

    /**
     * The engine being used.
     */
    private final Engine engine;

    /**
     * Private constructor.
     *
     * @param engine the engine
     */
    private DeletingSituationHandler(Engine engine) {
        this.engine = Objects.requireNonNull(engine);
    }

    /**
     * Default factory method.
     *
     * @param engine the engine
     * @return a new instance for the given engine
     */
    public static DeletingSituationHandler newInstance(Engine engine) {
        return new DeletingSituationHandler(engine);
    }

    @Override
    public void onSituationDeleted(String situationId) {
        try {
            engine.deleteSituation(situationId);
        } catch (InterruptedException e) {
            LOG.debug("Interrupted while trying to delete situation with Id {}", situationId);
            Thread.currentThread().interrupt();
        }
    }
}
