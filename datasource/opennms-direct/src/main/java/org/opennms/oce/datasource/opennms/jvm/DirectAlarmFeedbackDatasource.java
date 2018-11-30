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

package org.opennms.oce.datasource.opennms.jvm;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.stream.Collectors;

import org.opennms.integration.api.v1.dao.AlarmFeedbackDao;
import org.opennms.integration.api.v1.feedback.AlarmFeedbackListener;
import org.opennms.oce.datasource.api.AlarmFeedback;
import org.opennms.oce.datasource.api.AlarmFeedbackDatasource;
import org.opennms.oce.datasource.api.AlarmFeedbackHandler;
import org.opennms.oce.datasource.common.HandlerRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.collect.ImmutableList;

/**
 * A datasource that provides {@link AlarmFeedback} via the integration API.
 */
public class DirectAlarmFeedbackDatasource implements AlarmFeedbackListener, AlarmFeedbackDatasource {
    private static final Logger LOG = LoggerFactory.getLogger(DirectAlarmFeedbackDatasource.class);

    /**
     * Provided via the integration api and used to retrieve the current feedback on {@link #init}.
     */
    private final AlarmFeedbackDao feedbackDao;

    /**
     * A lock that prevents callbacks from being processed before we have finished {@link #init}.
     */
    private final CountDownLatch initLock = new CountDownLatch(1);

    /**
     * A fair {@link ReadWriteLock} to ensure order of execution is preserved during calls to {@link #onFeedback}.
     */
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock(true);

    /**
     * The registry of all currently registered handlers interested in feedback.
     */
    private final HandlerRegistry<AlarmFeedbackHandler> feedbackHandlers = new HandlerRegistry<>();

    /**
     * A set of all feedback populated initially on init by retrieving via the {@link AlarmFeedbackDao} and
     * subsequently kept up to date via calls to {@link #onFeedback}.
     */
    private final Set<AlarmFeedback> feedback = new LinkedHashSet<>();

    /**
     * @param feedbackDao used to retrieve the current feedback
     */
    public DirectAlarmFeedbackDatasource(AlarmFeedbackDao feedbackDao) {
        this.feedbackDao = Objects.requireNonNull(feedbackDao);
    }

    /**
     * On init we will populate the feedback by retrieving all current feedback from the {@link AlarmFeedbackDao}.
     */
    public void init() {
        feedback.addAll(feedbackDao.getFeedback()
                .stream()
                .map(Mappers::toAlarmFeedback)
                .collect(Collectors.toList()));
        initLock.countDown();
    }

    /**
     * Wait for {@link #init the init} to finish to delay callbacks from being processed and clients from polling for
     * feedback.
     */
    private void waitForInit() {
        try {
            initLock.await();
        } catch (InterruptedException ignore) {
            LOG.debug("Interrupted while waiting for init lock.");
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void onFeedback(org.opennms.integration.api.v1.model.AlarmFeedback feedback) {
        waitForInit();
        rwLock.writeLock().lock();
        try {
            AlarmFeedback newFeedback = Mappers.toAlarmFeedback(feedback);
            this.feedback.add(newFeedback);
            feedbackHandlers.forEach(handler -> handler.handleAlarmFeedback(newFeedback));
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    @Override
    public List<AlarmFeedback> getAlarmFeedback() {
        waitForInit();
        rwLock.readLock().lock();
        try {
            return ImmutableList.copyOf(feedback);
        } finally {
            rwLock.readLock().unlock();
        }
    }

    @Override
    public List<AlarmFeedback> getAlarmFeedbackAndRegisterHandler(AlarmFeedbackHandler handler) {
        registerHandler(handler);
        return getAlarmFeedback();
    }

    @Override
    public void registerHandler(AlarmFeedbackHandler handler) {
        feedbackHandlers.register(handler);
    }

    @Override
    public void unregisterHandler(AlarmFeedbackHandler handler) {
        feedbackHandlers.unregister(handler);
    }

    @Override
    public void waitUntilReady() {
        // pass
    }
}
