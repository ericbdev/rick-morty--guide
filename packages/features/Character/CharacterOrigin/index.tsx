import React from 'react';

const CharacterOrigin = (props) => (
  <details key={props.id} className="ml-3">
    <summary className="text-sm">Origin</summary>
    <div className="ml-2 mt-2 flex flex-col">
      <span>{props.type}</span>
      <span>{props.dimension}</span>
      <span>{props.origin}</span>
    </div>
  </details>
);

export default CharacterOrigin;
