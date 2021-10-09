import React, { useEffect, FC } from 'react';
import { isEmpty } from 'lodash';
import { useLazyQuery } from '@apollo/client';

import { GET_CHARACTER } from '@wiki/gql/character/character';
import Text, { Richtext } from '@wiki/components/Text';

interface ICharacterModalProps {
  id: string;
  isOpen: boolean;
}

const CharacterModal: FC<ICharacterModalProps> = ({ id, isOpen }) => {
  const [getData, { loading, data }] = useLazyQuery(GET_CHARACTER);
  useEffect(() => {
    if (isEmpty(id) || !isOpen) {
      return;
    }

    getData({
      variables: {
        id,
      },
    });
  }, [id, isOpen, getData]);

  return (
    <div>
      {loading && <Text className={['text-gray-800']}>Loading</Text>}
      <h1>{data?.character?.name}</h1>
      <Richtext>
        <ul>
          <li>{data?.character?.type}</li>
          <li></li>
          <li>{data?.character?.status}</li>
          <li>{data?.character?.gender}</li>
          <li>{data?.character?.species}</li>
        </ul>
      </Richtext>
    </div>
  );
};

export default CharacterModal;
