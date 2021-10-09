import React, { Fragment, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { addApollo, initApollo } from '@wiki/apollo';
import { GET_CHARACTERS } from '@wiki/gql/character/characters';
import CharacterNug from '@wiki/features/Character/CharacterNug';

const Characters = () => {
  const [getData, { data }] = useLazyQuery(GET_CHARACTERS);
  // const [characterId, toggleCharacterodal] = useState(null);

  useEffect(() => {
    getData({
      variables: {
        page: 1,
      },
    });
  }, [getData]);

  return (
    <>
      <section className="container mx-auto p-0 flex mt-4 gap-4 flex-col">
        {(data?.characters?.results || []).map((character) => {
          return (
            <Fragment key={character.id}>
              <CharacterNug {...character} />
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Characters;

export const getStaticProps = async () => {
  const apolloClient = initApollo();
  await apolloClient.query({
    query: GET_CHARACTERS,
    variables: {
      page: 1,
    },
  });

  return addApollo(apolloClient, {
    props: {},
  });
};
