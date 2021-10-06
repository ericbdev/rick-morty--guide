import React from 'react';
import Box from '@wiki/components/Box';
import Link from '@wiki/components/Link';
import { CharacterOrigin } from './CharacterOrigin';

export const Character = (props) => {
  return (
    <details key={props.id}>
      <summary>{props.name}</summary>
      <div className="ml-2 flex flex-col">
        <Box className={['p-2']}>
          <Link href={`/characters/${props.id}`}>
            <Box>Read more</Box>
          </Link>
        </Box>
        <div>{props.type}</div>
        <div>{props.name}</div>
        <div>{props.status}</div>
        <div>{props.gender}</div>
        <div>{props.species}</div>
        {props.origin && <CharacterOrigin {...props.origin} />}
      </div>
    </details>
  );
};
