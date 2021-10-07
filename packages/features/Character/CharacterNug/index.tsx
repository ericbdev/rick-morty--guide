import React, { memo } from 'react';

import Box from '@wiki/components/Box';
import Button from '@wiki/components/Button';
import Text from '@wiki/components/Text';
import Card from '@wiki/components/Card';

import CharacterOrigin from '../CharacterOrigin';

interface IPropsCharacterOrigin {
  id?: string;
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  type?: string;
  origin?: any;
  // TODO: If not provided, redirect to character page
  onClick?: (event: MouseEvent) => void;
}

const CharacterNug = ({
  id,
  name,
  species,
  status,
  gender,
  type,
  origin,
  onClick,
}: IPropsCharacterOrigin) => {
  return (
    <Card key={id} className={['flex', 'flex-initial', 'flex-row', 'gap-4']}>
      <Box className={['p-0']}>
        <Text className={['prose']}>{name}</Text>
        todo: image
      </Box>
      <Box className={['flex', 'flex-col']}>
        <div>species: {species}</div>
        <div>status: {status}</div>
        <div>gender: {gender}</div>
        <div>type: {type}</div>

        {origin && <CharacterOrigin {...origin} />}

        <Button
          className={[
            'inline-flex',
            'p-1',
            'ml-2',
            'bg-blue-400',
            'text-xs',
            'rounded-lg',
          ]}
          onClick={onClick}
        >
          <Text className={['text-white']}>Read more</Text>
        </Button>
      </Box>
    </Card>
  );
};

export default memo(CharacterNug);
