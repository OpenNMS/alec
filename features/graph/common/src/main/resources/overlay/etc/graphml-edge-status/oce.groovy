import org.opennms.netmgt.model.OnmsSeverity;
import org.opennms.features.topology.plugins.topo.graphml.status.GraphMLEdgeStatus;


String opacity = edge.properties.garbage_collected != null && edge.properties.garbage_collected.equals("true") ? "0.1" : "1.0"

if (edge.properties.type == "situation") {
  return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
    'stroke' : 'indigo',
    'stroke-opacity' : opacity ,
    'stroke-width' : "" + edge.properties.edgeWeight / 2
  ]);
}

else if (edge.properties.type == "inventory") {
  return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
    'stroke' : 'blue',
    'stroke-opacity' : opacity ,
    'stroke-width' : "" + edge.properties.edgeWeight / 2
  ]);
}

else if (edge.properties.edgeWeight != null ) {
  return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
    'stroke-dasharray' : '5,5', 
    'stroke' : 'gray',
    'stroke-width' : "" + edge.properties.edgeWeight / 2
  ]);
}

return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
  'stroke' : 'gray',
  'stroke-width' : '1'
]);

