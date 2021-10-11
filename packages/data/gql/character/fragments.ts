import { gql } from '@apollo/client';

export const CHARACTER_FIELDS = gql`
  fragment CharacterFields on Character {
    id
    type
    name
    image
    status
    gender
    species
  }
`;

export const CHARACTER_NUG_FIELDS = gql`
  ${CHARACTER_FIELDS}
  fragment CharacterNugFields on Character {
    ...CharacterFields

    origin {
      id
    }
  }
`;
