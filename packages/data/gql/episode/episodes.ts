import { gql } from '@apollo/client';
import { CHARACTER_FIELDS } from '@wiki/gql/character/fragments';

export const GET_EPISODES = gql`
  ${CHARACTER_FIELDS}
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        episode
        name
        air_date
        characters {
          ...CharacterFields
        }
      }
    }
  }
`;
