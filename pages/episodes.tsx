import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_EPISODES } from '@wiki/gql/query/getEpisodes';
import { EpisodeOverview } from '@wiki/containers/Episode';

const Episodes = () => {
  const [getData, { data }] = useLazyQuery(GET_EPISODES);

  useEffect(() => {
    getData({
      variables: {
        page: 1,
        filter: {
          episode: 'S01E01',
        },
      },
    });
  }, [getData]);

  return (
    <>
      <section className="container p-0 flex mt-4 gap-4 flex-col">
        {(data?.episodes?.results || []).map(EpisodeOverview)}
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
