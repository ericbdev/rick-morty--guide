import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from 'libs/gql/getEpisodes';

const CharacterOrigin = (props) => (
  <details key={props.id}>
    <summary>Origin</summary>
    <div className="ml-2 mt-2 flex flex-col">
      <span>{props.type}</span>
      <span>{props.dimension}</span>
      <span>{props.origin}</span>
    </div>
  </details>
);

const Character = (props) => {
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

const Episode = (props) => {
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

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    page: 1,
    filter: {
      name: 'S01',
    },
  });

  return (
    <section className="container p-1">
      {loading && 'Loading'}
      {!loading && data && (data?.episodes.results || []).map(Episode)}
    </section>
  );
};

export default Episodes;
