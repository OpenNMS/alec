/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.features.deeplearning.shell;

import org.apache.karaf.shell.api.action.Action;
import org.apache.karaf.shell.api.action.Argument;
import org.apache.karaf.shell.api.action.Command;
import org.apache.karaf.shell.api.action.lifecycle.Service;
import org.opennms.alec.engine.deeplearning.TFModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Command(scope = "opennms-alec", name = "tensorflow-load-model", description = "Validate that the TensorFlow model at the given path can be loaded.")
@Service
public class LoadModel implements Action {

    private static final Logger LOG = LoggerFactory.getLogger(LoadModel.class);

    @Argument(name="model path", required = true)
    private String modelPath;

    @Override
    public Object execute() {
        try (TFModel tfModel = new TFModel(modelPath)) {
            LOG.info("Model successfully loaded: {}",  modelPath);
        } catch (Throwable t) {
            LOG.error("Failed to loaded model from path: {}", modelPath);
            LOG.error(t.getMessage());
        }
        return null;
    }

}
