# OpenNMS Correlation Engine (OCE) [![CircleCI](https://circleci.com/gh/OpenNMS/oce.svg?style=svg)](https://circleci.com/gh/OpenNMS/oce)

Alarms, alarms, alarms, alarms.

## Terminology

* Alarm
   * A problem triggered by one or more events

* Incident
   * Used to represent a synthetic "master" alarm which is created by the correlation engine
   * An incident is the root of the alarm causality tree, whereby the incident is caused by one or more "child" alarms which may in turn be caused by other child alarms and so on
   * Incidents should only be created if there are two or more alarms in the tree (otherwise there is a single alarm and there is no point in creating the incident)

## Building

```
mvn clean package install
```

## Setup

Download and extract the tarball distribution of Apache Karaf 4.1.5:
```
wget http://httpd-mirror.sergal.org/apache/karaf/4.1.5/apache-karaf-4.1.5.tar.gz
tar zxvf apache-karaf-4.1.5.tar.gz
cd apache-karaf-4.1.5
```

Run the Karaf container:
```
./bin/karaf
```

In the Karaf shell, add the features repository:
```
feature:repo-add mvn:org.opennms.oce/oce-karaf-features/1.0.0-SNAPSHOT/xml
```

