import { gql } from '@apollo/client';

export const INFO_FIELDS = gql`
  fragment InfoFields on Info {
    count
    next
    pages
    prev
  }
`;
