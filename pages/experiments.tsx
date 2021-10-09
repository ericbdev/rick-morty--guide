import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { addApollo, initApollo } from '@wiki/apollo';
import { GET_LOCATIONS } from '@wiki/gql/location/locations';

const NoSSRForceGraph = dynamic(() => import('@wiki/containers/ForceGraph'), {
  ssr: false,
});

const myData = {
  nodes: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }, { id: 'e' }],
  links: [
    { source: 'b', target: 'a' },
    { source: 'c', target: 'a' },
    { source: 'd', target: 'b' },
    { source: 'e', target: 'b' },
  ],
};

const Experiments = () => {
  const [getData] = useLazyQuery(GET_LOCATIONS);
  // const [characterId, toggleCharacterodal] = useState(null);

  useEffect(() => {
    getData({
      variables: {
        page: 1,
      },
    });
  }, [getData]);

  return <NoSSRForceGraph graphData={myData} />;
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
