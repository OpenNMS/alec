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

package org.opennms.oce.driver.score.api;

import java.util.List;

public interface ScoreReport {

    /**
     * A positive value greater than or equal to zero
     *  where the low the value, the closer the evaluation is to the baseline,
     *  with 0 being equivalent to the baseline.
     */
    double getScore();

    /**
     * The maximum possible score that could have been achieved
     * when comparing two sets of incidents.
     *
     * infinity if unbounded
     */
    double getMaxScore();

    /**
     * A List of ScoreMetrics that are appropriate for the Engine under test 
     *  and which provide further context on the score against the baseline.
     */
    List<? extends ScoreMetric> getMetrics();
}
