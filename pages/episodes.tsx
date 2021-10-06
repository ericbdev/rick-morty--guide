import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '@wiki/gql/query/getEpisodes';
import initializeApollo, {
  addApolloState,
} from '@wiki/apollo/initializeApollo';
import Navigation from '@wiki/containers/Navigation';

import { Episode } from './episodes/Episode';

const Episodes = (props) => {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page: 1,
      filter: {
        episode: 'S01E01',
      },
    },
  });

  return (
    <>
      <section className="container p-0">
        {(data?.episodes?.results || []).map(Episode)}
      </section>
    </>
  );
};

export default Episodes;

// export async function getServerSideProps(context: GetStaticPropsContext) {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GET_POSTS,
//     variables: {
//       page: 1,
//       filter: {
//         name: 'S01E',
//       },
//     },
//   });

//   return addApolloState(apolloClient, {
//     props: {},
//   });
// }
