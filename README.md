# OpenNMS Correlation Engine (OCE) [![CircleCI](https://circleci.com/gh/OpenNMS/oce.svg?style=svg)](https://circleci.com/gh/OpenNMS/oce)

The OpenNMS Correlation Engine (OCE) provides a framework for performing correlation of alarms (i.e. faults) into higher level situations.

## Terminology

An *alarm* is a fault or a problem that is triggered by one or more events.

A *situation* is used to represent a synthetic "master" alarm which is created by the correlation engine.
A situation is the root of the alarm causality tree, whereby the situation is caused by one or more "child" alarms which may in turn be caused by other child alarms and so on.
Situations should only be created if there are two or more alarms in the tree, otherwise there is a single alarm and there is no point in creating the situation.

An *inventory object* (IO) is some abstract element to which alarms are related.
Alarms can be related to no, or one inventory objects.
Inventory objects are have relations to other inventory objects.

## Framework

The OCE framework provides a number of abstractions for performing correlation and accomadating different use cases.

A *datasource* is responsible for interacting with the monitoring system and providing a feed of alarms, inventory objects and situations.
Datasources  are also responsible for creating the situations in the monitoring system.

An *engine* is responsible for doing the actual correlation.

The *driver* is responsible for connecting the datasource to the engine.

### Datasources

#### OpenNMS Kafka (Recommended)

Interacts with OpenNMS via Kafka.

#### OpenNMS Direct (In Development)

Interacts with OpenNMS using the OpenNMS Integration API.
Requires OCE to be running in the same JVM as OpenNMS.

### Engines

#### Cluster (Recommended)

Builds a graph from the inventory and alarms.
Uses unsupervised ML for clustering the alarms into situations.

#### Temporal (POC)

Groups alarms based on how close they occured in time.

#### Topology (POC)

Groups alarms using Drools rules.

## Building & developing OCE

See the [development guide](DEVEL.md) for details.

## Installing OCE

See the [installation guide](INSTALL.md) for details.


