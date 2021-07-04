import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
      }
      results {
        id
        episode
        name
        air_date
        characters {
          id
          type
          name
          status
          gender
          species
          origin {
            id
            type
            dimension
            name
          }
        }
      }
    }
  }
`;
