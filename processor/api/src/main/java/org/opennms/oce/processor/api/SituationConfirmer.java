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

package org.opennms.oce.processor.api;

import java.util.Collections;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.Situation;
import org.opennms.oce.datasource.api.SituationHandler;

/**
 * A {@link SituationHandler} that confirms situations via a {@link SituationProcessor}.
 */
public class SituationConfirmer implements SituationHandler {
    /**
     * The situation processor.
     */
    private final SituationProcessor situationProcessor;

    /**
     * Private constructor.
     *
     * @param situationProcessor the situation processor
     */
    private SituationConfirmer(SituationProcessor situationProcessor) {
        this.situationProcessor = situationProcessor;
    }

    /**
     * Default factory method.
     *
     * @param situationProcessor the situation processor to handle confirmations
     * @return the SituationConfirmer instance for the given situation processor
     */
    public static SituationConfirmer newInstance(SituationProcessor situationProcessor) {
        return new SituationConfirmer(situationProcessor);
    }

    @Override
    public void onSituation(Situation situation) {
        // Collect each of the reduction keys (Ids) contained in the related alarms so we can use these to
        // uniquely identify the situation to confirm it via the situation processor
        Set<String> reductionKeysInAlarm = Objects.requireNonNull(situation).getAlarms().stream()
                .map(Alarm::getId)
                .collect(Collectors.toSet());

        situationProcessor.confirm(Collections.unmodifiableSet(reductionKeysInAlarm));
    }
}
