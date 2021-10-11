import { gql } from '@apollo/client';

import { CHARACTER_NUG_FIELDS } from './fragments';

export const GET_CHARACTERS_BY_ID = gql`
  ${CHARACTER_NUG_FIELDS}
  query GetCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      ...CharacterNugFields
    }
  }
`;
