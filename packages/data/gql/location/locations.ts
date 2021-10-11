import { gql } from '@apollo/client';

import { CHARACTER_NUG_FIELDS } from '@wiki/gql/character/fragments';
import { LOCATION_FIELDS } from '@wiki/gql/location/fragments';

export const GET_LOCATIONS = gql`
  ${CHARACTER_NUG_FIELDS}
  ${LOCATION_FIELDS}
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...LocationFields
        residents {
          ...CharacterNugFields
        }
      }
    }
  }
`;
