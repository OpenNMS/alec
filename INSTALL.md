# OCE Installation Guide

## Overview

This guide walks through the steps necessary to get OCE up and running with OpenNMS Horizon.

We'll focus on getting OCE deployed in a Sentinel container using the OpenNMS Kafka datasource for interacting with OpenNMS.

## Prequisites

* RHEL/CentOS 7.x or greater
* Java 8
* An instance OpenNMS Horizon 24.0.0 from the `features/sextant` branch
* A Kafka broker (or cluster) running Kafka 0.11.x or greater
* A copy of the latest OCE plugin RPMs
   * Download these artifacts from the latest build on https://circleci.com/gh/OpenNMS/oce/tree/master

## OpenNMS Configuration

### Enable Syslogd

Enable Syslogd in `$OPENNMS_HOME/etc/service-configuration.xml`.

Update Syslogd to use the `org.opennms.netmgt.syslogd.RadixTreeSyslogParser` in `$OPENNMS_HOME/etc/etc/syslogd-configuration.xml`.

> We'll use syslog messages to validate the system later

### Enable and configure the Kafka Producer (for alarms)

Configure the Kafka Producer to point to your Kafka broker:
```
echo 'bootstrap.servers=127.0.0.1:9092' > "$OPENNMS_HOME/etc/org.opennms.features.kafka.producer.client.cfg"
```

Disable incremental alarm suppression:
```
echo 'suppressIncrementalAlarms=false' >> "$OPENNMS_HOME/etc/org.opennms.features.kafka.producer.cfg"
```

Add `opennms-kafka-producer` to the `featuresBoot` property in the `$OPENNMS_HOME/etc/org.apache.karaf.features.cfg`.

### Enable consumption of events from Kafka

Enable the Sink API consumer for Eventd:
```
echo 'org.opennms.netmgt.eventd.sink.enable=true' > "$OPENNMS_HOME/etc/opennms.properties.d/event-sink.properties"
```

Use the Kafka strategy for the Sink API:
```
echo 'org.opennms.core.ipc.sink.strategy=kafka
org.opennms.core.ipc.sink.kafka.bootstrap.servers=127.0.0.1:9092' >> "$OPENNMS_HOME/etc/opennms.properties.d/kafka.properties"
```
> Since we're using the Kafka strategy for the Sink API, any Minions configured on the system must also be configured to use Kafka.

### Install the OCE plugin

Download and install the OCE plugin RPM on the OpenNMS server:

```
yum install opennms-oce-plugin-1.0.0-*.noarch.rpm
```

### Enable the OCE plugin

From the OpenNMS Karaf shell:
```
feature:install opennms-oce-plugin
```

In order to make the feature install persistent, run the following:
```
echo 'opennms-oce-plugin wait-for-kar=opennms-oce-plugin' > "$OPENNMS_HOME/etc/featuresBoot.d/oce.boot"
```

## Sentinel Configuration

### Install the OCE plugin

Download and install the OCE plugin RPM on the Sentinel server:
```
yum install sentinel-oce-plugin-1.0.0-*.noarch.rpm
```

### Configure OCE

Configure the Kafka Stream (consumer):
```
echo 'bootstrap.servers=127.0.0.1:9092
commit.interval.ms=5000' > "$SENTINEL_HOME/etc/org.opennms.oce.datasource.opennms.kafka.streams.cfg"
```

Configure the Kafka producer:
```
echo 'bootstrap.servers=127.0.0.1:9092' > "$SENTINEL_HOME/etc/org.opennms.oce.datasource.opennms.kafka.producer.cfg"
```

> The consumer is used to read alarms & inventory, whereas the producer is used to send events. 

Enable debug logging for OCE:
```
echo 'log4j2.logger.org_opennms_oce.level = DEBUG
log4j2.logger.org_opennms_oce.name = org.opennms.oce' >> "$SENTINEL_HOME/etc/org.ops4j.pax.logging.cfg"
```

### Topic Configuration

The OCE engine will block on init until Kafka is available and topics are created. On init OCE expects to find topics
for each of the following:

* Alarms
* Inventory
* Situations
* Alarm feedback

To create one of the topics you could use a command like this:
```bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic <topicName>```

### Start OCE 

From the Sentinel Karaf shell:
```
feature:install oce-datasource-opennms-kafka oce-engine-cluster oce-processor-standalone oce-driver-main oce-features-graph-shell
```

In order to make the feature install persistent, run the following:
```
echo 'oce-datasource-opennms-kafka wait-for-kar=opennms-oce-plugin
oce-engine-cluster wait-for-kar=opennms-oce-plugin
oce-processor-standalone wait-for-kar=opennms-oce-plugin
oce-driver-main wait-for-kar=opennms-oce-plugin
oce-features-graph-shell wait-for-kar=opennms-oce-plugin' >> "$SENTINEL_HOME/etc/featuresBoot.d/oce.boot"
```

## Validation

Once OpenNMS & Sentinel are setup using the notes above, we can simulate a few events to validate that correlation is functional.

Stop OpenNMS & Sentinel.

Delete the Karaf cache on both OpenNMS and Sentinel:
```
rm -rf $OPENNMS_HOME/data/cache
rm -rf $SENTINEL_HOME/data/cache
```

Start OpenNMS.

Provision a node for the localhost in OpenNMS:
```
$OPENNMS_HOME/bin/provision.pl requisition add oce
$OPENNMS_HOME/bin/provision.pl node add oce localhost localhost
$OPENNMS_HOME/bin/provision.pl interface add oce localhost 127.0.0.1
$OPENNMS_HOME/bin/provision.pl requisition import oce
```

> We assume that the localhost is running an SNMP agent.

Find the ifDescr for an interface on the node we just provisioned:
```
export IFDESCR="ens33"
```

Now trigger a Syslog message:
```
echo "<189>: $(date +"%Y %b %d %H:%m:%S %Z"): %ETHPORT-5-IF_DOWN_LINK_FAILURE: Interface $IFDESCR is down (Link failure)" | nc -v -u 127.0.0.1 10514
```

> If the Syslog message is not being recognized and formatted to a proper event ensure that the `opennms-oce-plugin` feature is running and that the related bundles are active.

From the OpenNMS Karaf shell validate that the alarms were pushed to the Kafka topic:
```
kafka-producer:list-alarms
```

Now start Sentinel.

From the Sentinel Karaf shell verify that the engine is loaded:
```
graph:list
```

> If the command shows no graph providers, then the engine is not started yet - it may take a few minutes the first time if the topic aren't created yet.

Now trigger events that would cause a situation:
```
echo "<189>: $(date +"%Y %b %d %H:%m:%S %Z"): %ETHPORT-5-IF_DOWN_LINK_FAILURE: Interface ge0/1 is down (Link failure)" | nc -v -u 127.0.0.1 10514
echo "<189>: $(date +"%Y %b %d %H:%m:%S %Z"): %ETHPORT-5-IF_DOWN_LINK_FAILURE: Interface ge0/2 is down (Link failure)" | nc -v -u 127.0.0.1 10514
```

Verify that the situation is created in OpenNMS.

### Topology

Now that we've validated the system, we can view the resulting graph generated by the cluster engine to help get some insights into the correlation.

From the Sentinel Karaf shell:
```
graph:write-graphml cluster /tmp/oce.cluster.graphml
```

Import the graph:
```
curl -X POST -H "Content-Type: application/xml" -u admin:admin -d@/tmp/oce.cluster.graphml 'http://localhost:8980/opennms/rest/graphml/oce'
```

View the OCE graph in the Topology UI.

## Known Limitations

### Delayed OCE startup on Sentinel

When using older Kafka versions that do not support automatic topic creation, it may take a while for the `oce-inventory` topic to be created, and for the engine to initialize.

