/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2017-2017 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2017 The OpenNMS Group, Inc.
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

package org.opennms.e2e.grafana;

import static org.awaitility.Awaitility.await;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

import java.net.URL;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.tuple.Pair;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Grafana44SeleniumDriver {
    private static final Logger LOG = LoggerFactory.getLogger(Grafana44SeleniumDriver.class);
    private final WebDriver driver;
    private final URL url;
    private final GrafanaRestClient restClient;

    public Grafana44SeleniumDriver(WebDriver driver, URL url) {
        this.driver = Objects.requireNonNull(driver);
        this.url = Objects.requireNonNull(url);
        restClient = new GrafanaRestClient(url);
    }

    public Grafana44SeleniumDriver home() throws InterruptedException {
        driver.get(url.toString());

        try {
            driver.findElement(By.className("navbar-brand-btn-background"));
            // We're already logged in
            return this;
        } catch (NoSuchElementException nse) {
            // pass
        }

        // Login using the default credentials
        WebElement el = waitFor(By.name("username"));
        el.sendKeys(GrafanaRestClient.DEFAULT_USERNAME);

        el = driver.findElement(By.name("password"));
        el.sendKeys(GrafanaRestClient.DEFAULT_PASSWORD);
        el.sendKeys(Keys.ENTER);

        // Mash the log in button until we move forward
        for (int i = 0; i < 3; i++) {
            By by = By.xpath("//button[text()='Log in']");
            try {
                WebElement logInBtn = driver.findElement(by);
                final Actions builder = new Actions(driver);
                builder.moveToElement(logInBtn).click().perform();
            } catch (NoSuchElementException | StaleElementReferenceException e) {
                break;
            }
            Thread.sleep(500);
        }

        // Refresh the page to get past the change password screen
        Thread.sleep(500);
        driver.navigate().refresh();

        // Wait for the dashboard page to appear
        waitFor(By.className("page-dashboard"));

        return this;
    }

    public Grafana44SeleniumDriver dashboard(String title) {
        driver.get(url.toString() + "/d/" + title);
        waitFor(By.partialLinkText(title));
        return this;
    }

    public Grafana44SeleniumDriver verifyAnAlarmIsPresent() {
        waitFor(By.className("alarm-table"));
        // A hacky attempt at clicking on the row up to 5 times waiting for the modal to come up as it doesn't seem to
        // always come up on the first try when using selenium with saucelabs
        for (int i = 0; i < 5; i++) {
            try {
                moveToAndClick(By.xpath("//div[contains(@class, 'table-panel-scroll')]/table/tbody/tr"));
                moveToAndDoubleClick(By.xpath("//div[contains(@class, 'table-panel-scroll')]/table/tbody/tr"));
                waitFor(By.xpath("//span[text()='Alarm Details']"));
                LOG.info("Found alarm in alarm table");
                break;
            } catch (Exception e) {
                if (i < 4) {
                    LOG.warn("Timed out while attempting to verify alarm, will retry");
                    continue;
                }

                // Give up on the last try and throw the exception
                LOG.error("Could not verify alarm");
                throw e;
            }
        }

        return this;
    }

    public Grafana44SeleniumDriver verifyRelatedAlarmLabels(List<Pair<String, Integer>> labels) {
        moveToAndClick(By.xpath("//a[contains(text(),'Related Alarms')]"));
        labels.forEach(pair -> assertThat(driver.findElements(By.xpath("//td[text()='" + pair.getKey() + "']")),
                hasSize(pair.getValue())));
        return this;
    }

    public WebElement waitFor(By by) {
        await().atMost(15, TimeUnit.SECONDS).until(() -> {
            try {
                driver.findElement(by);
                return true;
            } catch (NoSuchElementException nse) {
                return false;
            }
        });
        return driver.findElement(by);
    }

    public WebElement moveToAndClick(By by) {
        return moveToAndClickElement(by, false);
    }

    public WebElement moveToAndDoubleClick(By by) {
        return moveToAndClickElement(by, true);
    }

    public WebElement moveToAndClickElement(By by, boolean doubleClick) {
        final WebElement el = waitFor(by);
        final Actions builder = new Actions(driver);
        builder.moveToElement(el).perform();

        if (doubleClick) {
            builder.moveToElement(el).doubleClick().perform();
        } else {
            builder.moveToElement(el).click().perform();
        }

        return el;
    }
}
