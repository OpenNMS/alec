import org.opennms.netmgt.model.OnmsSeverity;
import org.opennms.features.topology.plugins.topo.graphml.status.GraphMLEdgeStatus;

if (edge.properties.type == "situation") {
  return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
    'stroke-dasharray' : '5,5', 
    'stroke' : 'indigo',
    'stroke-width' : "" + edge.properties.edgeWeight / 2
  ]);
}

else if (edge.properties.type == "inventory") {
  return new GraphMLEdgeStatus(OnmsSeverity.CRITICAL, [ 
    'stroke-dasharray' : '5,5', 
    'stroke' : 'blue',
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
  'stroke-dasharray' : '5,5', 
  'stroke' : 'gray',
  'stroke-width' : '1'
]);

