import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterEpisode) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
      }
      results {
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
`;
