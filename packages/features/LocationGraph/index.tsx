// https://lyonwj.com/blog/graph-visualization-with-graphql-react-force-graph
import React from 'react';
import dynamic from 'next/dynamic';
import { formatData } from './utils/formatData';
import { nodeCanvasObject } from './utils/nodeCanvasObject';
import { nodeLabel } from './utils/nodeLabel';

const NoSSRForceGraph = dynamic(() => import('@wiki/containers/ForceGraph'), {
  ssr: false,
});

const Location = ({ data }) => {
  const graphData = formatData(data);

  return (
    <NoSSRForceGraph
      graphData={graphData}
      nodeLabel={nodeLabel}
      nodeAutoColorBy={'__typename'}
      nodeRelSize={8}
      nodeCanvasObject={nodeCanvasObject}
    />
  );
};

export default Location;
