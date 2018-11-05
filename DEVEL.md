# OCE Development Guide

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

## Usage

### OpenNMS Integration (using Kafka)

From the Karaf shell, point to your Kafka instance:
```
config:edit org.opennms.oce.datasource.opennms.kafka.streams
config:property-set bootstrap.servers 127.0.0.1:9092
config:property-set commit.interval.ms 5000
config:update
```

```
config:edit org.opennms.oce.datasource.opennms.kafka.producer
config:property-set bootstrap.servers 127.0.0.1:9092
config:update
```

Install the datasource, an engine, a situation processor and the driver:
```
feature:install oce-datasource-opennms-kafka oce-engine-cluster oce-processor-standalone oce-driver-main
```

Correlate!

