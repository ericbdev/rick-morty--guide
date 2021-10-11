import { gql } from '@apollo/client';
import { LOCATION_FIELDS } from '@wiki/gql/location/fragments';
import { CHARACTER_FIELDS } from './fragments';

export const GET_CHARACTER = gql`
  ${CHARACTER_FIELDS}
  ${LOCATION_FIELDS}
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterFields
      origin {
        ...LocationFields
      }
    }
  }
`;
