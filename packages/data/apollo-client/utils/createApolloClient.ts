import { ApolloClient, gql } from '@apollo/client';
import schema from '@wiki/codegen/schema-ast.generated.graphql';
import createCache from './createCache';
import createIsomorphLink from './createIsomorphLink';

const createApolloClient = (initialState) => {
  const typeDefs = gql`
    ${schema}
  `;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: createCache(initialState),
    typeDefs,
    queryDeduplication: false,
    connectToDevTools: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
};

export default createApolloClient;
