import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from 'libs/gql/getEpisodes';
import { initializeApollo } from 'libs/instances/apollo-client';
import Navigation from '@core/Navigation';
import { Episode } from './Episode';

const Episodes = ({ episodes }) => {
  // const { loading, error, data } = useQuery(GET_EPISODES, {
  //   page: 1,
  //   filter: {
  //     name: 'S01',
  //   },
  // });

  return (
    <>
      <Navigation />
      <section className="container p-0">
        {(episodes || []).map(Episode)}
      </section>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = await initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_EPISODES,
  });

  debugger;

  return {
    props: {
      episodes: data?.episodes.results || [],
    },
  };
}

export default Episodes;
