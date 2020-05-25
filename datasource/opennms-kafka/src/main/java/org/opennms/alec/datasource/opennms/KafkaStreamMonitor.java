/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2020 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2020 The OpenNMS Group, Inc.
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

package org.opennms.alec.datasource.opennms;

import java.io.IOException;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import org.apache.kafka.streams.KafkaStreams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.github.resilience4j.core.IntervalFunction;
import io.github.resilience4j.retry.Retry;
import io.github.resilience4j.retry.RetryConfig;
import io.github.resilience4j.retry.RetryRegistry;

/**
 * Acts as a KafkaStreams.StateListener and tries to reinitialize the OpennmsDatasource if the State changes to ERROR.
 */
public class KafkaStreamMonitor implements KafkaStreams.StateListener {

    private static final Logger LOG = LoggerFactory.getLogger(KafkaStreamMonitor.class);
    private final OpennmsDatasource opennmsDatasource;

    private KafkaStreams.State currentState;

    private Duration waitDuration = Duration.ofMillis(1000);
    private Duration waitDurationForStateChange = Duration.ofMillis(500);
    private final ScheduledExecutorService scheduler;

    public KafkaStreamMonitor(final OpennmsDatasource opennmsDatasource) {
        this.opennmsDatasource = opennmsDatasource;
        scheduler = Executors.newScheduledThreadPool(1);
    }

    @Override
    public void onChange(KafkaStreams.State newState, KafkaStreams.State oldState) {
        LOG.info("KafkaStreams.State changed from {} to {}.", oldState, newState);
        this.currentState = newState;
        if (KafkaStreams.State.ERROR == newState) {
            LOG.warn("KafkaStreams.State is {}. Let's try to restart KafkaStreams", newState);
            triggerKafkaRestartAsMonitoredRetry();
        }
    }

    private void triggerKafkaRestartAsMonitoredRetry() {
        RetryConfig config = RetryConfig.custom()
                .intervalFunction(createIncreasingIntervalWithPlateauFunction(waitDuration))
                .retryOnResult(r -> r == KafkaStreams.State.ERROR)
                .build();
        RetryRegistry registry = RetryRegistry.of(config);
        Retry retry = registry.retry("id");
        retry.executeCompletionStage(scheduler, () -> CompletableFuture.supplyAsync(this::restartKafka));
    }

    // We shouldn't need a "synchronized" here since we expect that onChange(ERROR, any) is only called once but just in case.
    // It shouldn't hurt either.
    private synchronized KafkaStreams.State restartKafka() {
        // double check that the restart is still needed (maybe the state has changed back to RUNNING already)
        if(KafkaStreams.State.ERROR != this.currentState) {
            LOG.info("State is {}, not {}, restart sees to have been sucessful. Will abort.", this.currentState, KafkaStreams.State.ERROR);
            return this.currentState; // nothing to do
        }
        try {
            LOG.info("Reinitializing OpennmsDatasource");
            this.opennmsDatasource.destroy();
            this.opennmsDatasource.init();
        } catch (IOException e) {
            LOG.error("I am having trouble restarting OpennmsDatasource.", e);
        }
        return this.currentState;
    }

    public void setWaitDurationForRetry(final Duration waitDuration) {
        this.waitDuration = waitDuration;
    }

    public void setWaitDurationForStateChange(final Duration waitDurationForStateChange) {
        this.waitDurationForStateChange = waitDurationForStateChange;
    }

    public void destroy() {
        scheduler.shutdown();
    }


    static IntervalFunction createIncreasingIntervalWithPlateauFunction(final Duration baseInterval) {
        return (attempt) -> {
            long intervalMillis;
            long baseIntervalMillis = baseInterval.toMillis();
            if (attempt < 1L) {
                throw new IllegalArgumentException("Illegal argument attempt: " + attempt);
            } else if (attempt < 4) {
                intervalMillis = attempt * attempt * baseIntervalMillis;
            } else {
                intervalMillis = 16 * baseIntervalMillis;
            }
            return intervalMillis;
        };
    }
}
