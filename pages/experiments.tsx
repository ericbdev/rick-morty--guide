// https://lyonwj.com/blog/graph-visualization-with-graphql-react-force-graph
import React, { useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { uniqBy } from 'lodash';
import { useLazyQuery } from '@apollo/client';
import { addApollo, initApollo } from '@wiki/apollo';
import { GET_LOCATIONS } from '@wiki/gql/location/locations';

const NoSSRForceGraph = dynamic(() => import('@wiki/containers/ForceGraph'), {
  ssr: false,
});

const formatData = (locations) => {
  // this could be generalized but let's leave that for another time

  const nodes = [];
  const links = [];

  if (!locations) {
    return { nodes, links };
  }

  locations.forEach((location) => {
    nodes.push({
      id: location.id,
      name: location.name,
      __typename: location.__typename,
      episode: location.episode,
    });

    // links.push({
    //   source: location.user.username,
    //   target: location.id,
    // });

    location.residents.forEach((character) => {
      nodes.push({
        id: character.id,
        name: character.name,
        __typename: character.__typename,
      });
      links.push({
        source: location.id,
        target: character.id,
      });
    });
  });

  return {
    // nodes may be duplicated so use lodash's uniqBy to filter out duplicates
    nodes: uniqBy(nodes, 'id'),
    links,
  };
};

const Experiments = () => {
  const [getData, { data }] = useLazyQuery(GET_LOCATIONS);
  // const [characterId, toggleCharacterodal] = useState(null);

  useEffect(() => {
    getData({
      variables: {
        page: 1,
      },
    });
  }, [getData]);

  const graphData = useMemo(() => {
    console.log(data?.locations);
    if (!data?.locations?.results) {
      return { nodes: [], links: [] };
    }
    const { nodes, links } = formatData(data?.locations?.results);

    return { nodes, links };
  }, [data]);

  return (
    <NoSSRForceGraph
      graphData={graphData}
      nodeLabel={(node) => {
        return node.id;
      }}
      nodeAutoColorBy={'__typename'}
      nodeRelSize={8}
    />
  );
};

export default Experiments;

export const getStaticProps = async () => {
  const apolloClient = initApollo();
  await apolloClient.query({
    query: GET_LOCATIONS,
    variables: {
      page: 1,
    },
  });

  return addApollo(apolloClient, {
    props: {},
  });
};
