import React, { Fragment, memo } from 'react';
import cx from 'classnames';
import Card from '@wiki/components/Card';
import Box from '@wiki/components/Box';
import CharacterNug from '@wiki/features/Character/CharacterNug';

interface IPropsEpisodeOverview {
  id?: string;
  episode?: string;
  name?: string;
  air_date?: string;
  characters?: Array<Record<string, undefined>>;
  toggleCharacterModal: (id) => void;
}

const EpisodeOverview = (props: IPropsEpisodeOverview) => {
  return (
    <Card key={props.id}>
      <article className={cx(['flex', 'flex-col', 'items-left', 'space-x-4'])}>
        <div>{props.episode}</div>
        <div>{props.name}</div>
        <div>{props.air_date}</div>

        <Box className={['mt-2']}>Characters</Box>
        <Box
          className={[
            'grid',
            'grid-cols-1',
            'sm:grid-cols-2',
            'sm:grid-cols-3',
            'xl:grid-cols-4',
            'gap-4',
          ]}
        >
          {props.characters &&
            props.characters.map((character, index) => (
              <Fragment key={`${character?.id || index}`}>
                <CharacterNug
                  {...character}
                  onClick={() => props.toggleCharacterModal(character?.id)}
                />
              </Fragment>
            ))}
        </Box>
      </article>
    </Card>
  );
};

export default memo(EpisodeOverview);
