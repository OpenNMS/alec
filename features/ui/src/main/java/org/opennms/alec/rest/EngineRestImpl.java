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

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.EngineParameter;
import org.opennms.alec.data.EngineParameterImpl;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.alec.engine.llm.LlmEngineFactory;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class EngineRestImpl implements EngineRest {

    private static final Logger LOG = LoggerFactory.getLogger(EngineRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final List<EngineFactory> engineFactories;
    private final Driver driver;

    public EngineRestImpl(KeyValueStore<String> kvStore,
                          EngineRegistry engineRegistry,
                          List<EngineFactory> engineFactories) {
        this.kvStore = kvStore;
        this.driver = (Driver) engineRegistry.getEngineRegistry();
        this.engineFactories = engineFactories;
        objectMapper = new ObjectMapper();

        EngineParameter engineParameter = (EngineParameter) getEngineConfiguration().getEntity();
        if(engineParameter != null) {
            setEngineConfiguration(engineParameter);
        }
    }

    /**
     * Blueprint reference-list bind method. The persisted engine choice is
     * replayed once, in the constructor; an engine factory that registers
     * afterwards (engine/llm waits on the MCP bundle's services, so it often
     * arrives after this bean) would otherwise stay inactive until an operator
     * re-saves the engine page. Re-run the replay when the factory the stored
     * choice names shows up and is not the one the driver is running.
     */
    public void onEngineFactoryBound(EngineFactory factory) {
        if (factory == null) {
            return;
        }
        try {
            EngineParameter stored = (EngineParameter) getEngineConfiguration().getEntity();
            if (stored == null || stored.getEngineName() == null) {
                return;
            }
            if (!stored.getEngineName().equals(factory.getName())) {
                return;
            }
            // Identity, not name: a re-registered factory (bundle restart) has the
            // same name as the dead instance the driver still holds.
            if (driver.getEngineFactory() == factory) {
                return;
            }
            LOG.info("Engine factory '{}' registered after startup; applying the persisted engine choice",
                    factory.getName());
            Response r = activate(stored, factory);
            if (r != null && r.getStatus() >= 400) {
                LOG.warn("Persisted engine choice '{}' was not applied: {}", factory.getName(), r.getEntity());
            }
        } catch (RuntimeException e) {
            LOG.warn("Could not apply the persisted engine choice for '{}': {}", factory.getName(), e.getMessage());
        }
    }

    @Override
    public Response setEngineConfiguration(EngineParameter engineParameter) {
        LOG.debug("Set engine configuration: {}", engineParameter);
        try {
            String engineName = engineParameter.getEngineName();
            // LLM-based clustering: handled separately because its EngineFactory
            // ships in the engine/llm bundle (ALEC-301 phase 3b). Until that bundle
            // is installed there is no "llm" factory — we still persist the chosen
            // clustering frequency/prompt so the settings are ready, and activate
            // the engine if/when the factory becomes available.
            if ("llm".equals(engineName)) {
                return configureAndStoreLlm(engineParameter, driver);
            }
            Optional<EngineFactory> factory = engineFactories.stream()
                    .filter(engineFactory -> engineName.equals(engineFactory.getName()))
                    .findFirst();
            if (factory.isPresent() && "dbscan".equals(engineName)) {
                return configureAndStoreDBScan(engineParameter, driver, (DBScanEngineFactory) factory.get().getEngineFactory());
            }
            return Response.serverError().entity("No Engine found !!").build();
        } catch (Exception e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response getEngineConfiguration() {
        LOG.debug("Get engine configuration");
        try {
            Optional<String> engineConfiguration = kvStore.get(KeyEnum.ENGINE.toString(), ALECRestUtils.ALEC_CONFIG);
            if (engineConfiguration.isPresent()) {
                return Response.ok().entity(objectMapper.readValue(engineConfiguration.get(), EngineParameter.class)).build();
            } else {
                return Response.noContent().build();
            }
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    /**
     * Range/sanity validation for a DBSCAN save. Rejecting here (400) beats the
     * alternative — NaN distances make Commons Math DBSCAN silently stop
     * producing situations while the save still returns 200.
     *
     * @return a 400 Response describing the problem, or null when valid
     */
    static Response validateDbscanParameters(EngineParameter p) {
        StringBuilder problems = new StringBuilder();
        requireFinite(problems, "alpha", p.getAlpha(), false);
        requireFinite(problems, "beta", p.getBeta(), false);
        requireFinite(problems, "epsilon", p.getEpsilon(), true);
        requireFinite(problems, "hellingerW", p.getHellingerW(), false);
        requireFinite(problems, "hellingerBias", p.getHellingerBias(), false);
        // A zero bias yields zero variance for any first-occurrence alarm pair
        // (var = ((t - firstT)·w + bias)² with t == firstT), driving the
        // Hellinger formula to 0/0. The distance measure now guards the NaN,
        // but a zero bias still degenerates the tuning — reject it up front.
        if (p.getHellingerBias() != null && p.getHellingerBias() == 0d) {
            problems.append(problems.length() > 0 ? "; " : "")
                    .append("hellingerBias must be non-zero");
        }
        if (problems.length() == 0) {
            return null;
        }
        return Response.status(Response.Status.BAD_REQUEST)
                .entity("Invalid DBSCAN parameters: " + problems)
                .build();
    }

    private static void requireFinite(StringBuilder problems, String name, Double value,
                                      boolean strictlyPositive) {
        if (value == null) {
            return; // absent is fine — the factory keeps its current value
        }
        if (value.isNaN() || value.isInfinite()) {
            problems.append(problems.length() > 0 ? "; " : "")
                    .append(name).append(" must be a finite number");
        } else if (strictlyPositive && value <= 0d) {
            problems.append(problems.length() > 0 ? "; " : "")
                    .append(name).append(" must be greater than zero");
        }
    }

    private Response storeEngineParameter(EngineParameter engineParameter) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.ENGINE.toString(),
                objectMapper.writeValueAsString(engineParameter),
                ALECRestUtils.ALEC_CONFIG);
        return Response.ok(future.join()).build();
    }

    /**
     * Activate {@code factory} for the stored parameters. Uses the factory it
     * is handed (the freshly bound service) rather than looking it up in the
     * other reference-list, whose tracker may not have been notified yet.
     */
    private Response activate(EngineParameter engineParameter, EngineFactory factory) {
        if ("llm".equals(factory.getName())) {
            return configureAndStoreLlm(engineParameter, driver, Optional.of(factory));
        }
        driver.setEngineFactory(factory.getEngineFactory());
        Response response = driverInit(driver);
        return response;
    }

    private Response configureAndStoreLlm(EngineParameter engineParameter, Driver driver) {
        return configureAndStoreLlm(engineParameter, driver, engineFactories.stream()
                .filter(f -> "llm".equals(f.getName()))
                .findFirst());
    }

    private Response configureAndStoreLlm(EngineParameter engineParameter, Driver driver,
                                          Optional<EngineFactory> llmFactoryOpt) {
        // getClusterFrequencyMs() is a nullable Integer ("null when unset") and
        // feeds a long setter (setClusterFrequencyMs) plus the engine's tick
        // resolution — a null NPEs and a 0/negative would set a zero-interval
        // tick. Clamp null/<=0 to the engine default. Clamping (not a 400) is
        // deliberate: the constructor replays persisted config through this path
        // at startup and swallows any error Response, so a bad persisted record
        // must still yield a usable engine rather than silently leave the wrong
        // one running.
        Integer requestedFreq = engineParameter.getClusterFrequencyMs();
        long clusterFrequencyMs = (requestedFreq == null || requestedFreq <= 0)
                ? LlmEngineFactory.DEFAULT_CLUSTER_FREQUENCY_MS
                : requestedFreq.longValue();

        if (llmFactoryOpt.isPresent()) {
            LlmEngineFactory factory = (LlmEngineFactory) llmFactoryOpt.get().getEngineFactory();
            factory.setClusterFrequencyMs(clusterFrequencyMs);
            factory.setClusterPrompt(engineParameter.getClusterPrompt());
            driver.setEngineFactory(llmFactoryOpt.get().getEngineFactory());
            Response response = driverInit(driver);
            if (response != null) {
                return response;
            }
        } else {
            LOG.info("LLM clustering selected but the engine/llm bundle is not installed yet; "
                    + "persisting settings — the engine will activate when the bundle is present.");
        }
        try {
            return storeEngineParameter(EngineParameterImpl.newBuilder()
                    .engineName("llm")
                    .clusterFrequencyMs((int) clusterFrequencyMs)
                    .clusterPrompt(engineParameter.getClusterPrompt())
                    .build());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private Response configureAndStoreDBScan(EngineParameter engineParameter, Driver driver, DBScanEngineFactory dbScanEngineFactory) {
        Response invalid = validateDbscanParameters(engineParameter);
        if (invalid != null) {
            return invalid;
        }
        dbScanEngineFactory.setAlpha(engineParameter.getAlpha());
        dbScanEngineFactory.setBeta(engineParameter.getBeta());
        dbScanEngineFactory.setEpsilon(engineParameter.getEpsilon());
        dbScanEngineFactory.setDistanceMeasureFactoryName(engineParameter.getDistanceMeasureName());
        // Hellinger-specific tunables: only apply when the caller actually
        // supplied them. EngineParameter#getHellingerW/Bias deliberately return
        // null (no default substitution) when the save omits them, so an
        // omitting save preserves the factory's current values instead of
        // silently resetting an operator's tuned ones.
        if (engineParameter.getHellingerW() != null) {
            dbScanEngineFactory.setHellingerW(engineParameter.getHellingerW());
        }
        if (engineParameter.getHellingerBias() != null) {
            dbScanEngineFactory.setHellingerBias(engineParameter.getHellingerBias());
        }
        driver.setEngineFactory(dbScanEngineFactory);
        Response response = driverInit(driver);
        if(response != null) {
            return response;
        }
        try {
            return storeEngineParameter(EngineParameterImpl.newBuilder()
                    .alpha(dbScanEngineFactory.getAlpha())
                    .beta(dbScanEngineFactory.getBeta())
                    .epsilon(dbScanEngineFactory.getEpsilon())
                    .hellingerW(dbScanEngineFactory.getHellingerW())
                    .hellingerBias(dbScanEngineFactory.getHellingerBias())
                    .distanceMeasureName(dbScanEngineFactory.getDistanceMeasureFactoryName())
                    .engineName(dbScanEngineFactory.getName())
                    .build());
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response reEvaluateAllOpenAlarms() {
        Response failure = driverInit(driver);
        if (failure != null) {
            return failure;
        }
        return Response.ok("Engine driver re-initialized; current alarms re-evaluated").build();
    }

    private Response driverInit(Driver driver) {
        driver.destroy();
        CompletableFuture<Void> future = driver.initAsync();
        try {
            future.get();
        } catch (InterruptedException e) {
            LOG.error("Engine creation interrupted", e);
            Thread.currentThread().interrupt();
            return ALECRestUtils.somethingWentWrong(e);
        } catch (ExecutionException e) {
            LOG.error("Engine creation failed", e.getCause());
            return ALECRestUtils.somethingWentWrong(e);
        }

        return null;
    }
}
