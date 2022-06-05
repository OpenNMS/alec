# ALEC Development Guide

## Building

```
mvn clean package install
```

Note: maven version 3.5 (or newer) is required due to compatibility issues with 'karaf-maven-plugin'.

## Setup

Download and extract the tarball distribution of Apache Karaf 4.3.7:
```
wget https://dlcdn.apache.org/karaf/4.3.7/apache-karaf-4.3.7.tar.gz
tar zxvf apache-karaf-4.3.7.tar.gz
cd apache-karaf-4.3.7
```

Run the Karaf container:
```
./bin/karaf
```

In the Karaf shell, add the features repository:
```
feature:repo-add mvn:org.opennms.alec/alec-karaf-features/3.0.0-SNAPSHOT/xml
```

## Usage

### OpenNMS Integration (direct)

In the Karaf shell, install the feature:
```
feature:install alec-opennms-standalone
```

### OpenNMS Integration (using Kafka)

From the Karaf shell, point to your Kafka instance:
```
config:edit org.opennms.alec.datasource.opennms.kafka.streams
config:property-set bootstrap.servers 127.0.0.1:9092
config:property-set commit.interval.ms 5000
config:update
```

```
config:edit org.opennms.alec.datasource.opennms.kafka.producer
config:property-set bootstrap.servers 127.0.0.1:9092
config:update
```

Install the datasource, an engine, a situation processor and the driver:
```
feature:install alec-datasource-opennms-kafka alec-engine-cluster alec-processor-standalone alec-driver-main
```

Correlate!
