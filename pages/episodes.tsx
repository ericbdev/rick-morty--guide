import React, { useState, useEffect, Fragment } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_EPISODES } from '@wiki/gql/query/getEpisodes';
import EpisodeOverview from '@wiki/features/Episode/EpisodeOverview';
import CharacterModal from '@wiki/features/Character/CharacterModal';
import Modal from '@wiki/components/Modal';

const Episodes = () => {
  const [getData, { data, loading }] = useLazyQuery(GET_EPISODES);
  const [characterId, toggleCharacterModal] = useState(null);

  useEffect(() => {
    getData({
      variables: {
        page: 1,
        filter: {
          episode: 'S01',
        },
      },
    });
  }, [getData]);

  return (
    <>
      <section className="container mx-auto p-0 flex mt-4 gap-4 flex-col">
        {loading && 'loading'}
        {(data?.episodes?.results || []).map((episode) => {
          return (
            <Fragment key={episode.id}>
              <EpisodeOverview
                {...episode}
                toggleCharacterModal={toggleCharacterModal}
              />
            </Fragment>
          );
        })}
        <Modal
          isOpen={Boolean(characterId)}
          toggleOpen={() => toggleCharacterModal(null)}
        >
          <CharacterModal isOpen={Boolean(characterId)} id={characterId} />
        </Modal>
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
