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
feature:repo-add mvn:org.opennms.oce/oce-features/1.0.0-SNAPSHOT/xml
```

### Correlation Model Testing

Optionally point to your meta-model and inventory, if none is provided a simple example will be used:
```
config:edit org.opennms.oce.model
config:property-set metamodelPath /tmp/cpn.metamodel.xml
config:property-set inventoryPath /tmp/cpn.inventory.xml
config:update
```

Now load the model related feature:
```
feature:install oce-model
```

Playback some state changes:
```
oce:state-manager -i /tmp/cpn.events.csv
```

Generate the graph:
```
oce:generateGraph -o /tmp/cpn.graph.dot
```

From a Linux shell, generate a visual representation of the graph:
```
dot -Tpng /tmp/cpn.graph.dot -o /tmp/cpn.graph.png
xdg-open /tmp/cpn.graph.png
```

### OpenNMS Integration


In the Karaf shell, point to your Kafka instance:
```
config:edit org.opennms.oce.connector.client.kafka.streams
config:property-set bootstrap.servers 127.0.0.1:9092
config:property-set commit.interval.ms 5000
config:update
```

Now, point to your OpenNMS instance:
```
config:edit org.opennms.oce.connector.client
config:property-set url http://127.0.0.1:8980/opennms
config:property-set username admin
config:property-set password admin
config:update
```

From a shell, add the features repository, and install the feature:
```
feature:install oce
```

Profit.

