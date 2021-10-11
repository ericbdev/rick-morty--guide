import { gql } from '@apollo/client';
import { CHARACTER_FIELDS } from '@wiki/gql/character/fragments';
import { EPISODE_FIELDS } from './fragments';

export const GET_EPISODES = gql`
  ${CHARACTER_FIELDS}
  ${EPISODE_FIELDS}
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...EpisodeFields
        characters {
          ...CharacterFields
        }
      }
    }
  }
`;
