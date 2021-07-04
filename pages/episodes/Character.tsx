import React from 'react';
import { CharacterOrigin } from './CharacterOrigin';

export const Character = (props) => {
  return (
    <details key={props.id}>
      <summary>{props.name}</summary>
      <div className="ml-2 flex flex-col">
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
