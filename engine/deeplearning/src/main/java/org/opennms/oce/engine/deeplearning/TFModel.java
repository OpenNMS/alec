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

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;

import com.google.common.base.Strings;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;

public class TFModel implements AutoCloseable {
    private static final Logger LOG = LoggerFactory.getLogger(TFModel.class);

    private static final Gson gson = new Gson();

    private final Session sess;
    private final Path tempDir;

    public TFModel() {
        this("");
    }

    public TFModel(String modelPath) {
        final String effectiveModelPath;
        if (Strings.isNullOrEmpty(modelPath)) {
            LOG.info("No model path is set. Using default model from class-path.");
            try {
                tempDir = Files.createTempDirectory("oce-tf");
                effectiveModelPath = tempDir.toAbsolutePath().toString();
                ClasspathUtils.copyResourcesRecursively(getClass().getResource("/tf_model"), tempDir.toFile());
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

    public boolean isRelated(RelatedVector relatedVector) {
        final List<Tensor<?>> inputTensors = toTensors(relatedVector);
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

    public static List<Tensor<?>> toTensors(RelatedVector relatedVector) {
        return Arrays.asList(
                Tensor.create(new int[]{toTypeId(relatedVector.getTypeA())}, Integer.class), // type_a
                Tensor.create(new int[]{toTypeId(relatedVector.getTypeB())}, Integer.class), // type_b
                Tensor.create(new boolean[]{relatedVector.isSameInstance()}, Boolean.class), // same_instance
                Tensor.create(new boolean[]{relatedVector.isSameParent()}, Boolean.class), // same_parent
                Tensor.create(new boolean[]{relatedVector.isShareAncestor()}, Boolean.class), // share_ancestor
                Tensor.create(new float[]{(float)relatedVector.getDistanceOnGraph()}, Float.class), // distance_on_graph
                Tensor.create(new float[]{(float)relatedVector.getTimeDifferenceInSeconds()}, Float.class) // time_delta_seconds
        );
    }

    private final Map<String,Integer> typeA_ioTypeToId = new HashMap<>();
    private final Map<String,Integer> typeB_ioTypeToId = new HashMap<>();

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


    private static int toTypeId(String inventoryObjectType) {
        // FIXME: Don't hardcode this here - read from the model instead
        if (inventoryObjectType == null) {
            return 0;
        }
        switch(inventoryObjectType) {
            case "SnmpInterface":
                return 1;
            case "BgpPeer":
                return 2;
            case "SnmpInterfaceLink":
                return 3;
            case "Node":
                return 4;
            case "EntPhysicalEntity":
                return 5;
            default:
                return 0;
        }
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
