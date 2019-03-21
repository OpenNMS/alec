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

package org.opennms.oce.engine.deeplearning;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;

import com.google.common.base.Strings;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;

public class TFModel implements AutoCloseable {
    private static final Logger LOG = LoggerFactory.getLogger(TFModel.class);
    private static final String CLASSPATH_MODEL_PATH = "/tf_model";

    private static final Gson gson = new Gson();

    private final Map<String,Integer> typeA_ioTypeToId = new HashMap<>();
    private final Map<String,Integer> typeB_ioTypeToId = new HashMap<>();

    private final Session sess;
    private final Path tempDir;

    public TFModel() {
        this("");
    }

    public TFModel(String modelPath) {
        this(null, modelPath);
    }

    public TFModel(BundleContext bundleContext, String modelPath) {
        final String effectiveModelPath;
        if (Strings.isNullOrEmpty(modelPath)) {
            LOG.info("No model path is set. Using default model from class-path.");
            try {
                tempDir = Files.createTempDirectory("oce-tf");
                effectiveModelPath = tempDir.toAbsolutePath().toString();
                if (bundleContext != null) {
                    // If we're given a bundle context, use it
                    ClasspathUtils.copyResourcesRecursively(bundleContext, CLASSPATH_MODEL_PATH, tempDir.toFile());
                } else {
                    ClasspathUtils.copyResourcesRecursively(getClass().getResource(CLASSPATH_MODEL_PATH), tempDir.toFile());
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            tempDir = null;
            effectiveModelPath = modelPath;
        }

        LOG.info("Loading model from: {}", effectiveModelPath);
        final SavedModelBundle savedModelBundle = SavedModelBundle.load(effectiveModelPath, "serve");
        this.sess = savedModelBundle.session();

        // Load vocabulary maps
        loadModelHyperParameters(effectiveModelPath);
    }

    public boolean isRelated(InputVector inputVector) {
        final List<Tensor<?>> inputTensors = toTensors(inputVector);
        List<Tensor<?>> outputTensors = sess.runner()
                .feed("type_a/type_a_placeholder", inputTensors.get(0))
                .feed("type_b/type_b_placeholder", inputTensors.get(1))
                .feed("same_instance/same_instance_placeholder", inputTensors.get(2))
                .feed("same_parent/same_parent_placeholder", inputTensors.get(3))
                .feed("share_ancestor/share_ancestor_placeholder", inputTensors.get(4))
                .feed("distance_on_graph/distance_on_graph_placeholder", inputTensors.get(5))
                .feed("time_delta_seconds/time_delta_seconds_placeholder", inputTensors.get(6))
                .fetch("related/predictions_related/predictions_related")
                .run();

        Tensor result = outputTensors.get(0);

        boolean[] outputBuffer = new boolean[1];
        result.copyTo(outputBuffer);
        return outputBuffer[0];
    }

    public List<Tensor<?>> toTensors(InputVector inputVector) {
        return Arrays.asList(
                Tensor.create(new int[]{toTypeIdA(inputVector.getTypeA())}, Integer.class), // type_a
                Tensor.create(new int[]{toTypeIdB(inputVector.getTypeB())}, Integer.class), // type_b
                Tensor.create(new boolean[]{inputVector.isSameInstance()}, Boolean.class), // same_instance
                Tensor.create(new boolean[]{inputVector.isSameParent()}, Boolean.class), // same_parent
                Tensor.create(new boolean[]{inputVector.isShareAncestor()}, Boolean.class), // share_ancestor
                Tensor.create(new float[]{(float) inputVector.getDistanceOnGraph()}, Float.class), // distance_on_graph
                Tensor.create(new float[]{(float) inputVector.getTimeDifferenceInSeconds()}, Float.class) // time_delta_seconds
        );
    }

    private void loadModelHyperParameters(String modelPath) {
        List<String> type_a_vocab = null;
        List<String> type_b_vocab = null;

        try (FileReader fileReader = new FileReader(Paths.get(modelPath, "model_hyperparameters.json").toFile());
             JsonReader reader = new JsonReader(fileReader)
        ) {
            Map<String,Object> result = gson.fromJson(reader , Map.class);
            List<Map<String,Object>> inputFeatures = (List<Map<String,Object>>)result.get("input_features");
            for (Map<String,Object> inputFeature : inputFeatures) {
                if ("type_a".equals(inputFeature.get("name"))) {
                    type_a_vocab = (List<String>)inputFeature.get("vocab");
                } else if ("type_b".equals(inputFeature.get("name"))) {
                    type_b_vocab = (List<String>)inputFeature.get("vocab");
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to load model hyper parameters.", e);
        }

        if (type_a_vocab == null) {
            throw new IllegalStateException("Failed to find vocabulary for type_a");
        }
        if (type_b_vocab == null) {
            throw new IllegalStateException("Failed to find vocabulary for type_b");
        }

        for (int i = 0; i < type_a_vocab.size(); i++) {
            typeA_ioTypeToId.put(type_a_vocab.get(i), i);
        }
        for (int i = 0; i < type_b_vocab.size(); i++) {
            typeB_ioTypeToId.put(type_b_vocab.get(i), i);
        }
    }

    private int toTypeIdA(String inventoryObjectType) {
        return typeA_ioTypeToId.getOrDefault(inventoryObjectType, 0);
    }

    private int toTypeIdB(String inventoryObjectType) {
        return typeB_ioTypeToId.getOrDefault(inventoryObjectType, 0);
    }

    @Override
    public void close() {
        sess.close();
        if (tempDir != null) {
            try {
                FileUtils.deleteDirectory(tempDir.toFile());
            } catch (IOException e) {
                LOG.warn("Failed to clean up temporary directory: {}.", e);
            }
        }
    }

}
