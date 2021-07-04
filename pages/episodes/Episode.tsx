import React from 'react';
import { Character } from './Character';

export const Episode = (props) => {
  return (
    <article
      key={props.id}
      className="mt-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-left space-x-4"
    >
      <div>{props.episode}</div>
      <div>{props.name}</div>
      <div>{props.air_date}</div>

      <div>
        Characters
        {props.characters && props.characters.map(Character)}
      </div>
    </article>
  );
};
