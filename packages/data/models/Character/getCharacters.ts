import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
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
        image
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
