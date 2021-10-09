import { gql } from '@apollo/client';

import { LOCATION_FIELDS } from '@wiki/gql/location/fragments';
import { CHARACTER_NUG_FIELDS } from './fragments';

export const GET_CHARACTERS = gql`
  ${CHARACTER_NUG_FIELDS}
  ${LOCATION_FIELDS}
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...CharacterNugFields
        origin {
          ...LocationFields
        }
      }
    }
  }
`;
