// https://lyonwj.com/blog/graph-visualization-with-graphql-react-force-graph
import React, { useEffect, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';
import { addApollo, initApollo } from '@wiki/apollo';
import { GET_LOCATIONS } from '@wiki/gql/location/locations';
import LocationGraph from '@wiki/features/LocationGraph';

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

  const resData = useMemo(() => {
    if (!data?.locations?.results) {
      return null;
    }

    return data?.locations?.results;
  }, [data]);

  return <LocationGraph locations={resData} />;
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
