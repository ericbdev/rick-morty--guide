import { gql } from '@apollo/client';

export const LOCATION_FIELDS = gql`
  fragment LocationFields on Location {
    id
    name
    type
    created
    dimension
  }
`;

export const LOCATION_AND_RESIDENTS = gql`
  ${LOCATION_FIELDS}
  fragment LocationsAndResidents on Location {
    ...LocationFields
    residents {
      id
    }
  }
`;
