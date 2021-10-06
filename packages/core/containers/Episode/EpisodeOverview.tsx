import React from 'react';
import cx from 'classnames';
import Card from '@wiki/components/Card';
import Box from '@wiki/components/Box';
import { CharacterOverview } from '@wiki/containers/Character';

const EpisodeOverview = (props) => {
  return (
    <Card key={props.id}>
      <article className={cx(['flex', 'flex-col', 'items-left', 'space-x-4'])}>
        <div>{props.episode}</div>
        <div>{props.name}</div>
        <div>{props.air_date}</div>

        <Box className={['mt-2']}>Characters</Box>
        <Box className={['flex', 'flex-col', 'gap-3', 'pl-1']}>
          {props.characters && props.characters.map(CharacterOverview)}
        </Box>
      </article>
    </Card>
  );
};

export default EpisodeOverview;
