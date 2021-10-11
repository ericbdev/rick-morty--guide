import { gql } from '@apollo/client';

export const EPISODE_FIELDS = gql`
  fragment EpisodeFields on Episode {
    id
    episode
    name
    air_date
  }
`;
