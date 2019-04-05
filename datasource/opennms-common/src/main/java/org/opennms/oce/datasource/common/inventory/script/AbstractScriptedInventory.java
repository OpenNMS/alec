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

package org.opennms.oce.datasource.common.inventory.script;

import java.io.File;
import java.io.IOException;
import java.net.URL;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Charsets;
import com.google.common.io.Files;
import com.google.common.io.Resources;

/**
 * @author smith
 *
 */
public abstract class AbstractScriptedInventory {

    protected static final Logger LOG = LoggerFactory.getLogger(AbstractScriptedInventory.class);

    private static final String DEFAULT_SCRIPT = "/inventory.groovy";

    protected static final String DEFAULT_SCRIPT_FULL_PATH = "src/main/resources/inventory.groovy";

    private static final String DEFAULT_SCRIPT_EXTENSION = "groovy";

    private final boolean usingClasspathScript;

    private final Invocable invocable;

    private final String scriptPath;

    private final ScriptEngineManager manager;

    private final ScriptEngine engine;

    private final long scriptCacheMillis;

    private long configurationTimestamp;

    private long scriptFileTimestamp;

    public AbstractScriptedInventory(String scriptPath, long scriptCacheMillis, BundleContext bundleContext) {
        if (scriptPath == null) {
            throw new IllegalArgumentException("Null value for scriptFile.");
        }

        String script;
        String scriptExtension;

        this.scriptCacheMillis = scriptCacheMillis;

        if (scriptPath.isEmpty()) {
            // load default from classpath
            usingClasspathScript = true;
            if (bundleContext == null) {
                throw new IllegalArgumentException("Path to Inventory Script must be provided.");
            }
            URL scriptUrl = bundleContext.getBundle().getResource(DEFAULT_SCRIPT);
            try {
                script = Resources.toString(scriptUrl, Charsets.UTF_8);
            } catch (IOException e) {
                throw new IllegalArgumentException("Cannot find script in classpath : " + e.getMessage());
            }
            this.scriptPath = DEFAULT_SCRIPT;
            scriptExtension = DEFAULT_SCRIPT_EXTENSION;
            LOG.info("Loaded inventory.groovy from the classpath");
        } else {
            // read the script from the file system
            this.scriptPath = scriptPath;
            usingClasspathScript = false;

            File file = new File(scriptPath);
            if (!file.canRead()) {
                throw new IllegalStateException("Cannot read script at '" + file + "'.");
            }
            try {
                script = Files.toString(file, Charsets.UTF_8);
                scriptExtension = Files.getFileExtension(scriptPath);
                scriptFileTimestamp = file.lastModified();
                LOG.info("Loaded script {} from {} with timestamp: {}", file, scriptPath, scriptFileTimestamp);
            } catch (IOException e) {
                throw new IllegalStateException("IOError while Reading reading script at '" + file + "'.");
            }
            LOG.info("Loaded script {} from the file system", scriptPath);
        }

        if (bundleContext == null) {
            manager = new ScriptEngineManager();
        } else {
            manager = new OSGiScriptEngineManager(bundleContext);
        }

        engine = manager.getEngineByExtension(scriptExtension);
        if (engine == null) {
            throw new IllegalStateException("No engine found for extension: " + scriptExtension);
        }
        if (!Invocable.class.isAssignableFrom(engine.getClass())) {
            throw new IllegalStateException("engine found for extension: " + scriptExtension + " is not invocable");
        }

        try {
            engine.eval(script);
        } catch (ScriptException e) {
            throw new IllegalStateException("Failed to eval() script file - " + this.scriptPath, e);
        }

        LOG.info("ScriptEngine Initialized with {}", this.scriptPath);
        invocable = (Invocable) engine;
        configurationTimestamp = System.currentTimeMillis();
    }

    protected Invocable getInvocable() {
        // if the script is on disk, check every so often to see if it has been updated
        if (!usingClasspathScript && scriptCacheExpired()) {
            // reset cache
            configurationTimestamp = System.currentTimeMillis();
            if (scriptHasBeenUpdated()) {
                updateInvocable();
            }
        }
        return invocable;
    }

    private boolean scriptHasBeenUpdated() {
        File file = new File(scriptPath);
        if (!file.canRead()) {
            LOG.error("Not loading script from filesystem. Cannot read script at '" + scriptPath + "'.");
            return false;
        }
        return file.lastModified() > scriptFileTimestamp;
    }

    // return TRUE if it's been more than 'scriptCacheMillis' milliseconds since the config has been checked.
    private boolean scriptCacheExpired() {
        return System.currentTimeMillis() - configurationTimestamp > scriptCacheMillis;
    }

    // Attempt to update the invocable but catch all exceptions so user will continue to use existing invocable.
    private void updateInvocable() {
        try {
            File file = new File(scriptPath);
            if (!file.canRead()) {
                LOG.error("Not loading script from filesystem. Cannot read script at '" + scriptPath + "'.");
                return;
            }
            String script = Files.toString(file, Charsets.UTF_8);
            scriptFileTimestamp = file.lastModified();
            LOG.info("Loaded script {} from {} with timestamp: {}", file, scriptPath, scriptFileTimestamp);

            try {
                engine.eval(script);
            } catch (ScriptException e) {
                LOG.error("Failed to eval() script file - " + scriptPath, e);
            }
        } catch (Exception e) {
            LOG.error("Failed to update/evaluate script [{}]: {}", scriptPath, e.getMessage());
        }
    }

}
