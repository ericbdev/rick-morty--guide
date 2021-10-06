import React from 'react';
import Box from '@wiki/components/Box';
import Text from '@wiki/components/Text';
import Link from '@wiki/components/Link';
import CharacterOrigin from './CharacterOrigin';

interface IPropsCharacterOrigin {
  id?: string;
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  type?: string;
  origin?: any;
}

const CharacterOverview = ({
  id,
  name,
  species,
  status,
  gender,
  type,
  origin,
}: IPropsCharacterOrigin) => {
  return (
    <Box key={id} className={['pl-2', 'border-l', 'border-gray-100']}>
      <Box>
        <Text className={['prose']}>{name}</Text>
        <Text
          className={[
            'inline-flex',
            'p-1',
            'ml-2',
            'bg-blue-400',
            'text-xs',
            'rounded-lg',
          ]}
        >
          <Link
            href={{
              pathname: '/characters/[id]',
              query: { id: id },
            }}
          >
            <Text className={['text-white']}>Read more</Text>
          </Link>
        </Text>
      </Box>
      <div className="flex flex-col">
        <div>species: {species}</div>
        <div>status: {status}</div>
        <div>gender: {gender}</div>
        <div>type: {type}</div>

        {origin && <CharacterOrigin {...origin} />}
      </div>
    </Box>
  );
};

export default CharacterOverview;
