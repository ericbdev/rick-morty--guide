import React, { memo } from 'react';
import cx from 'classnames';
import { useSpringCarousel } from 'react-spring-carousel-js';

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

interface IPropsPagination {
  index: int;
}

const Pagination = ({ index }: IPropsPagination) => (
  <Box
    as="button"
    className={[
      'bg-white',
      'border-gray-300',
      'text-gray-500',
      'hover:bg-gray-50',
      'relative',
      'inline-flex',
      'items-center',
      'w-auto',
      'px-4',
      'py-2',
      'border ',
      'text-sm ',
      'font-medium',
    ]}
  >
    {index}
  </Box>
);

const EpisodeOverview = ({ characters, ...props }: IPropsEpisodeOverview) => {
  const carouselItems = (characters || []).map((character, index) => ({
    id: character.id,
    renderItem: (
      <CharacterNug
        {...character}
        onClick={() => props.toggleCharacterModal(character?.id)}
      />
    ),
  }));

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      itemsPerSlide: 3,
      items: carouselItems,
    });

  return (
    <Card key={props.id}>
      <article className={cx(['flex', 'flex-col', 'items-left', 'space-x-4'])}>
        <div>{props.episode}</div>
        <div>{props.name}</div>
        <div>{props.air_date}</div>

        <Box className={['mt-2']}>Characters</Box>
        <Box className={['grid', 'gap-2']}>{carouselFragment}</Box>
      </article>
    </Card>
  );
};

export default memo(EpisodeOverview);
