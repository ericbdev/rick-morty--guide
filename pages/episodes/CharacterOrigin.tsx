import React from 'react';

export const CharacterOrigin = (props) => (
  <details key={props.id}>
    <summary>Origin</summary>
    <div className="ml-2 mt-2 flex flex-col">
      <span>{props.type}</span>
      <span>{props.dimension}</span>
      <span>{props.origin}</span>
    </div>
  </details>
);
